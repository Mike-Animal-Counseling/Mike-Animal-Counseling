<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./profile/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./profile/header-light.svg">
  <img src="./profile/header-light.svg" alt="Mike — Useful ideas. Working software." width="1100">
</picture>

# Explore widely. Build with purpose.

I'm interested in how technology expands what people can understand, create, and accomplish. I value independent thinking, thoughtful design, and work that grows more useful over time.

保持好奇，独立思考，让技术创造更长久的价值。

[Selected projects](#selected-projects) · [Developer tools](#developer-tools) · [Skill set](#skill-set)

## Selected projects

These are the six projects pinned on my profile, spanning product prototypes, data workflows, and developer tools.

### [PawCompanion](https://github.com/Mike-Animal-Counseling/PawCompanion)

A pet companion prototype bringing character-based AI chat, pet browsing, bookings, and merchant workflows into one product. A separate scoring service tracks safety signals across rolling time windows; the checkout experience is simulated.

**Inside:** React, Express, MongoDB, and Hugging Face integrations. Persistent chat history and time-weighted scoring connect the conversation to a broader product journey.

[Source](https://github.com/Mike-Animal-Counseling/PawCompanion) · [Scoring implementation](https://github.com/Mike-Animal-Counseling/PawCompanion/blob/main/backend/src/services/riskScoring.js)

<details>
  <summary>See the product interface</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/PawCompanion/main/docs/screenshots/AI-Pet-HomePage.PNG" alt="PawCompanion pet browsing interface" width="900" loading="lazy">
</details>

### [Truna](https://github.com/Mike-Animal-Counseling/Truna_v0)

An app can look finished while its critical user journeys still fail. Truna explores turning product requirements into controlled browser checks, execution evidence, and repair handoffs for coding agents.

**Inside:** The public showcase describes a Next.js, Express, Prisma, and Playwright architecture. The product is an active prototype; application source is maintained privately.

[Public showcase](https://github.com/Mike-Animal-Counseling/Truna_v0) · [Try the demo](https://truna-frontend.vercel.app/)

<details>
  <summary>See the product interface</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/Truna_v0/main/truna-homepage.PNG" alt="Truna product showcase interface" width="900" loading="lazy">
</details>

### [HotTopicHub](https://github.com/Mike-Animal-Counseling/HotTopicHub)

A discovery hub that turns builder news into a daily reading list. It collects topics from sources including Hacker News, GitHub Trending, Product Hunt, Reddit, and RSS, then ranks recent items using community activity and recency.

**Inside:** React, FastAPI, and SQLite. Source caps and deduplication keep the daily list varied; optional AI enrichment has template fallbacks, with a review queue for moderation.

[Source](https://github.com/Mike-Animal-Counseling/HotTopicHub) · [Ranking implementation](https://github.com/Mike-Animal-Counseling/HotTopicHub/blob/master/backend/app/services/daily_top_signals_service.py)

### [Readily Compliance Review](https://github.com/Mike-Animal-Counseling/Readily-Compilance-Tool)

A compliance review MVP that extracts questions from audit PDFs and drafts Yes/No answers with page-level policy citations for analyst review. Reviewed results can be exported to CSV.

**Inside:** Next.js, TypeScript, Postgres, and Zod. Lexical and vector retrieval connect answers to policy passages, while structured output validation keeps model responses usable. Currently in private testing.

[Source](https://github.com/Mike-Animal-Counseling/Readily-Compilance-Tool) · [Retrieval implementation](https://github.com/Mike-Animal-Counseling/Readily-Compilance-Tool/blob/main/lib/rag/retrieval.ts)

### [CodexHalo](https://github.com/Mike-Animal-Counseling/CodexHalo)

A Windows companion that keeps Codex usage limits and token activity within sight. Its floating HUD expands into daily breakdowns, history, reset reminders, and API-equivalent cost estimates.

**Inside:** Tauri, Rust, React, and TypeScript. Session history is parsed locally; the model pricing catalog updates independently and has an offline fallback. Windows installers are available.

[Source](https://github.com/Mike-Animal-Counseling/CodexHalo) · [Download for Windows](https://github.com/Mike-Animal-Counseling/CodexHalo/releases/latest)

<details>
  <summary>See the desktop app with demo data</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/CodexHalo/main/docs/assets/codexhalo-overview.png" alt="CodexHalo desktop HUD preview with synthetic demo data" width="900" loading="lazy">
</details>

### [Signals API](https://github.com/Mike-Animal-Counseling/signals-api)

A signal pipeline combining authenticated REST endpoints with live dashboard updates. It brings API design, persistent storage, and event delivery together in one full-stack project.

**Inside:** Express, MongoDB, Socket.IO, React, and Docker. Socket connections validate JWTs, use per-user rooms, and disconnect when tokens expire.

[Source](https://github.com/Mike-Animal-Counseling/signals-api) · [Server implementation](https://github.com/Mike-Animal-Counseling/signals-api/blob/main/backend/server.js)

## Developer tools

### [Porter](https://github.com/Mike-Animal-Counseling/porter)

Self-hosted memory for AI coding assistants. Save project decisions and conventions, retrieve them from another tool through MCP, or export a handoff briefing.

**Inside:** Python, PostgreSQL, and pgvector, with scoped client access, an owner review inbox, and backup tools. Currently an alpha project.

[Source and setup](https://github.com/Mike-Animal-Counseling/porter)

## Skill set

- **Languages:** Python, TypeScript / JavaScript, Rust, Go, SQL.
- **Interfaces:** React, Next.js, React Native, Tauri.
- **Backend & data:** FastAPI, Node.js, PostgreSQL, MongoDB, Redis.
- **AI systems:** MCP, RAG, pgvector, PyTorch, Hugging Face.
- **Cloud & delivery:** AWS Lambda, Docker, GitHub Actions.
- **Testing:** Playwright, pytest, Vitest.

[Explore all repositories](https://github.com/Mike-Animal-Counseling?tab=repositories)
