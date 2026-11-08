<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./profile/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./profile/header-light.svg">
  <img src="./profile/header-light.svg" alt="Mike — Useful ideas. Working software." width="1100">
</picture>

# Explore widely. Build with purpose.

I build AI products, developer tools, and data workflows, from browser-based applications to Windows utilities and Python services. I also contribute fixes, tests, and documentation to the open-source projects I use.

[Open Source](#open-source-contributions) · [Developer Tools](#developer-tools) · [Selected Projects](#selected-projects) · [Skill Set](#skill-set) · [Activity](#activity)

## Open Source Contributions

Selected contributions merged into upstream projects.

| Project | Contribution | Merged PR |
| --- | --- | --- |
| **[Litestream](https://github.com/benbjohnson/litestream)** | Fixed SFTP replica URLs using IPv6 hosts without an explicit port. | [#1617](https://github.com/benbjohnson/litestream/pull/1617) |
| **[Fjall](https://github.com/fjall-rs/fjall)** | Fixed read tracking for `size_of` in optimistic transactions. | [#346](https://github.com/fjall-rs/fjall/pull/346) |
| **[Pydantic AI](https://github.com/pydantic/pydantic-ai)** | Corrected the Gemini command in the structured-output example. | [#12681](https://github.com/pydantic/pydantic-ai/pull/12681) |

[All upstream PRs](https://github.com/pulls?q=is%3Apr+is%3Apublic+author%3AMike-Animal-Counseling+-user%3AMike-Animal-Counseling) · [Merged contributions](https://github.com/pulls?q=is%3Apr+is%3Apublic+is%3Amerged+author%3AMike-Animal-Counseling+-user%3AMike-Animal-Counseling) · [Work under review](https://github.com/pulls?q=is%3Apr+is%3Apublic+is%3Aopen+author%3AMike-Animal-Counseling+-user%3AMike-Animal-Counseling)

## Developer Tools

Tools for building, checking, and working with AI applications.

### [Truna](https://github.com/Mike-Animal-Counseling/Truna_v0)

Launch verification for AI-built apps. Turn product requirements into controlled browser checks, review screenshots and network evidence, and hand actionable findings back to coding agents.

**Built with:** TypeScript, Next.js, Express, Prisma, and Playwright.

[Open Truna](https://truna-frontend.vercel.app/) · [Source and architecture](https://github.com/Mike-Animal-Counseling/Truna_v0)

<details>
  <summary>See Truna in action</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/Truna_v0/main/truna-homepage.PNG" alt="Truna launch verification interface" width="900" loading="lazy">
</details>

| Tool | What it does | Built with |
| --- | --- | --- |
| **[CodexHalo](https://github.com/Mike-Animal-Counseling/CodexHalo)** | A floating Windows HUD for Codex usage limits, local token analytics, reset reminders, and cost estimates. [Windows download](https://github.com/Mike-Animal-Counseling/CodexHalo/releases/latest). | Rust, Tauri, React, TypeScript |
| **[Porter](https://github.com/Mike-Animal-Counseling/porter)** | Self-hosted memory for AI coding assistants. Carry project context across tools through MCP, with scoped access and an owner review inbox. Currently in alpha. | Python, PostgreSQL, pgvector, MCP |
| **[AgentFocus](https://github.com/Mike-Animal-Counseling/agentFocus)** | A Windows tray app that opens a break window while Codex works, surfaces approval prompts, and returns to your IDE when work finishes. | Go, Windows APIs, Codex hooks |

<details>
  <summary>See CodexHalo with demo data</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/CodexHalo/main/docs/assets/codexhalo-overview.png" alt="CodexHalo floating HUD and usage dashboard with synthetic demo data" width="900" loading="lazy">
</details>

## Selected Projects

Applications and infrastructure for everyday workflows.

| Project | What it does | Built with |
| --- | --- | --- |
| **[PawCompanion](https://github.com/Mike-Animal-Counseling/PawCompanion)** | A pet companion prototype combining character-based AI chat, pet browsing, bookings, and merchant workflows. Includes rolling safety scoring; checkout is simulated. | React, Express, MongoDB, Hugging Face |
| **[Laya × Jev](https://github.com/Mike-Animal-Counseling/laya-jev-lab)** | Helpdesk ticket classification with a local fine-tuned model or an API, a Python SDK, shared inbox, and Zendesk sync. [Model card](https://github.com/Mike-Animal-Counseling/laya-jev-lab/blob/main/MODEL_CARD.md). | Python, PyTorch, Docker |
| **[HotTopicHub](https://github.com/Mike-Animal-Counseling/HotTopicHub)** | A daily reading list for builders, combining community signals, recency, deduplication, and source caps across news and developer feeds. | React, FastAPI, SQLite |
| **[LambdaOpt](https://github.com/Mike-Animal-Counseling/aws-lambda-slo-optimizer)** | AWS Lambda cost recommendations against latency targets, using benchmarks, CloudWatch metrics, and cold-start signals. Includes a local simulation; currently in beta. | Python, boto3, CloudWatch |

<details>
  <summary>See PawCompanion and the Laya ticket inbox</summary>
  <br>
  <p><strong>PawCompanion</strong></p>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/PawCompanion/main/docs/screenshots/AI-Pet-HomePage.PNG" alt="PawCompanion pet browsing interface" width="900" loading="lazy">
  <p><strong>Laya × Jev</strong></p>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/laya-jev-lab/main/docs/inbox.png" alt="Laya ticket inbox showing classification of synthetic helpdesk tickets" width="900" loading="lazy">
</details>

## Skill Set

| Area | Technologies |
| --- | --- |
| **Languages** | Python, TypeScript / JavaScript, Rust, Go, SQL |
| **Web, Mobile & Desktop** | React, Next.js, React Native / Expo, Tailwind CSS, Tauri |
| **Backend & Data** | FastAPI, Node.js / Express, Socket.IO, Redis, Celery, PostgreSQL, MongoDB, SQLite, SQLAlchemy, Prisma, Mongoose |
| **AI & Retrieval** | MCP, RAG, pgvector, OpenRouter, PyTorch, Hugging Face Transformers |
| **Cloud & Delivery** | AWS Lambda, IAM, CloudWatch, boto3, Docker / Compose, GitHub Actions, Vercel |
| **Auth & Quality** | OAuth 2.0, JWT, Clerk, Pydantic, Zod, Playwright, pytest, Vitest, Jest, Ruff, mypy, CodeQL |

## Activity

<a href="https://github.com/Mike-Animal-Counseling?tab=overview">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./profile/stats-dark.svg">
    <img src="./profile/stats.svg" alt="Public GitHub activity: stars, commits, pull requests, issues, and repositories contributed to" height="195">
  </picture>
</a>
<a href="https://github.com/Mike-Animal-Counseling?tab=repositories">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./profile/top-langs-dark.svg">
    <img src="./profile/top-langs.svg" alt="Language distribution across public repositories" height="195">
  </picture>
</a>

Public activity and repository languages, refreshed weekly. Language percentages describe repository code, rather than proficiency.

[Browse projects](https://github.com/Mike-Animal-Counseling?tab=repositories) · [Explore upstream contributions](https://github.com/pulls?q=is%3Apr+is%3Apublic+author%3AMike-Animal-Counseling+-user%3AMike-Animal-Counseling)
