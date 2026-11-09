import { readFileSync, writeFileSync } from 'node:fs';
import { renderActivityCards } from './render-upstream-activity.mjs';

const owner = process.env.PROFILE_OWNER?.toLowerCase();
if (!owner) throw new Error('PROFILE_OWNER is required');

const pages = JSON.parse(readFileSync(0, 'utf8').replace(/^\uFEFF/, ''));
if (!Array.isArray(pages) || !pages.length || pages.some(page => page.incomplete_results !== false)) {
  throw new Error('GitHub returned an incomplete PR search');
}

const projectNames = {
  'rohitg00/agentmemory': 'AgentMemory',
  'benbjohnson/litestream': 'Litestream',
  'pydantic/pydantic-ai': 'Pydantic AI',
  'fjall-rs/fjall': 'Fjall',
};

// Keep API-provided titles as text so markup in a title cannot alter the README.
const plain = value => value.replace(/[&<>|\[\]`*_\\:]/g, char => `&#${char.codePointAt(0)};`);
const results = new Map();
for (const item of pages.flatMap(page => page.items)) {
  const url = item.html_url;
  const match = /^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)\/pull\/([1-9]\d*)$/.exec(url);
  const mergedAt = Date.parse(item.pull_request?.merged_at);
  if (!match || !Number.isFinite(mergedAt) || item.user?.login?.toLowerCase() !== owner || match[1].toLowerCase() === owner) {
    throw new Error('Unexpected item in the merged upstream PR search');
  }
  const [, upstreamOwner, repo, number] = match;
  const repoKey = `${upstreamOwner}/${repo}`.toLowerCase();
  const title = item.title.replace(/\s+/g, ' ').trim()
    .replace(/^(?:fix|feat|docs|test|chore|refactor|perf|build|ci)(?:\([^)]+\))?!?:\s+/i, '');
  const name = projectNames[repoKey] ?? repo;
  results.set(url, {
    mergedAt,
    repoKey,
    row: `| **${plain(name)}** | ${plain(title.charAt(0).toUpperCase() + title.slice(1))} [#${number}](${url}) |`,
  });
}

if (results.size === 0 || results.size < Math.max(...pages.map(page => page.total_count))) {
  throw new Error('GitHub returned no results or omitted PRs from the search');
}

const rows = [...results.values()]
  .sort((first, second) => second.mergedAt - first.mergedAt || first.row.localeCompare(second.row, 'en'))
  .slice(0, 4)
  .map(({ row }) => row);

const readmePath = new URL('../README.md', import.meta.url);
const readme = readFileSync(readmePath, 'utf8');
const start = '<!-- UPSTREAM-PRS:START -->';
const end = '<!-- UPSTREAM-PRS:END -->';
const startParts = readme.split(start);
const endParts = startParts[1]?.split(end);
if (startParts.length !== 2 || endParts?.length !== 2 || startParts[0].includes(end)) {
  throw new Error('Expected one ordered pair of upstream PR markers');
}

const updated = `${startParts[0]}${start}\n| Project | Merged contribution |\n| :--- | :--- |\n${rows.join('\n')}\n${end}${endParts[1]}`;
const activityCards = renderActivityCards([...results.values()]);
if (readme !== updated) writeFileSync(readmePath, updated, 'utf8');
for (const { name, svg } of activityCards) {
  writeFileSync(new URL(`../profile/${name}`, import.meta.url), svg, 'utf8');
}
console.log(`Prepared ${rows.length} recent PRs and activity data from ${results.size} merged upstream PRs`);
