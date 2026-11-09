const themes = {
  light: { paper: '#F3F5EF', ink: '#202A23', muted: '#4F5B50', accent: '#42603F', soft: '#8EA584', line: '#D0D8CB' },
  dark: { paper: '#1D2721', ink: '#F0F3E9', muted: '#BBC7B8', accent: '#C4D89F', soft: '#88A477', line: '#465648' },
};

const monthInPacific = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric', month: '2-digit', timeZone: 'America/Los_Angeles',
});
const latestDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'short', day: 'numeric', timeZone: 'America/Los_Angeles',
});
const monthLabel = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' });
const monthRange = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

function renderChart(months, theme, compact) {
  const { accent, soft, muted, line } = theme;
  const left = compact ? 32 : 356;
  const right = compact ? 448 : 804;
  const baseline = compact ? 278 : 183;
  const columnWidth = (right - left) / months.length;
  const maxCount = Math.max(1, ...months.map(({ count }) => count));
  const bars = months.map(({ date, count }, index) => {
    const center = left + columnWidth * (index + 0.5);
    const height = count * 78 / maxCount;
    const top = baseline - height;
    const label = monthLabel.format(date);
    const bar = count
      ? `<rect x="${center - 22}" y="${top}" width="44" height="${height}" rx="4" fill="${index === months.length - 1 ? accent : soft}"/>
      <text x="${center}" y="${top - 9}" fill="${accent}" font-size="17" font-weight="650" text-anchor="middle">${count}</text>`
      : `<circle cx="${center}" cy="${baseline}" r="3" fill="${line}"/>`;
    return `${bar}\n      <text x="${center}" y="${baseline + 27}" fill="${muted}" font-size="${compact ? 20 : 17}" text-anchor="middle">${label}</text>`;
  });
  return `<line x1="${left}" x2="${right}" y1="${baseline}" y2="${baseline}" stroke="${line}"/>
      ${bars.join('\n      ')}`;
}

export function renderActivityCards(pullRequests) {
  const total = pullRequests.length;
  const repositories = new Set(pullRequests.map(({ repoKey }) => repoKey)).size;
  const latest = Math.max(...pullRequests.map(({ mergedAt }) => mergedAt));
  const date = latestDate.format(latest);
  const counts = new Map();
  for (const { mergedAt } of pullRequests) {
    const month = monthInPacific.format(mergedAt);
    counts.set(month, (counts.get(month) ?? 0) + 1);
  }
  const parts = monthInPacific.formatToParts(latest);
  const year = Number(parts.find(part => part.type === 'year').value);
  const month = Number(parts.find(part => part.type === 'month').value);
  const months = [-3, -2, -1, 0].map(offset => {
    const date = new Date(Date.UTC(year, month - 1 + offset, 1, 12));
    const key = monthInPacific.format(date);
    return { date, count: counts.get(key) ?? 0 };
  });
  const range = monthRange.formatRange(months[0].date, months.at(-1).date);
  const repoLabel = `Across ${repositories.toLocaleString('en-US')} ${repositories === 1 ? 'repository' : 'repositories'}`;
  const description = `${total} merged public pull requests. ${repoLabel}. Last merged ${date}. ` +
    months.map(({ date, count }) => `${monthRange.format(date)}: ${count}`).join('; ') + '.';

  return Object.entries(themes).flatMap(([mode, theme]) => [false, true].map(compact => {
    const { paper, ink, muted, accent, line } = theme;
    const width = compact ? 480 : 840;
    const height = compact ? 336 : 240;
    const countFont = compact && total >= 1000 ? 49 : compact ? 65 : 82;
    const summary = compact
      ? `<text x="32" y="112" fill="${ink}" font-family="Georgia, serif" font-size="${countFont}">${total.toLocaleString('en-US')}</text>
      <text x="177" y="82" fill="${ink}" font-size="22" font-weight="650">Merged pull requests</text>
      <text x="177" y="111" fill="${muted}" font-size="18">${repoLabel}</text>
      <line x1="32" x2="448" y1="134" y2="134" stroke="${line}"/>`
      : `<text x="32" y="124" fill="${ink}" font-family="Georgia, serif" font-size="${countFont}">${total.toLocaleString('en-US')}</text>
      <text x="32" y="160" fill="${ink}" font-size="19" font-weight="650">Merged pull requests</text>
      <text x="32" y="190" fill="${muted}" font-size="16">${repoLabel}</text>
      <text x="32" y="213" fill="${muted}" font-size="14">Last merged ${date}</text>
      <line x1="320" x2="320" y1="32" y2="211" stroke="${line}"/>`;
    const chartX = compact ? 32 : 356;
    const chartY = compact ? 168 : 45;
    const name = `upstream-activity${compact ? '-compact' : ''}${mode === 'dark' ? '-dark' : ''}.svg`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title description">
  <title id="title">Upstream activity</title>
  <desc id="description">${description}</desc>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="12" fill="${paper}" stroke="${line}"/>
  <g font-family="system-ui, -apple-system, Segoe UI, sans-serif">
    <text x="32" y="45" fill="${accent}" font-size="19" font-weight="650">Upstream activity</text>
    ${summary}
    <text x="${chartX}" y="${chartY}" fill="${ink}" font-size="19" font-weight="650">Merged by month</text>
    <text x="${compact ? 448 : 804}" y="${chartY}" fill="${muted}" font-size="${compact ? 17 : 14}" text-anchor="end">${range}</text>
    ${renderChart(months, theme, compact)}
  </g>
</svg>
`;
    return { name, svg, description };
  }));
}
