<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./profile/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./profile/header-light.svg">
  <img src="./profile/header-light.svg" alt="Mike — Useful ideas. Working software." width="1100">
</picture>

# Explore widely. Build with purpose.

I'm interested in how technology expands what people can understand, create, and accomplish. I value independent thinking, thoughtful design, and work that grows more useful over time.

[Selected Projects](#selected-projects) · [Developer Tools](#developer-tools) · [Skill Set](#skill-set)

## Selected Projects

Six projects spanning AI products, data workflows, cloud optimization, and developer tools.

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

A deployed launch verification platform I designed and built for AI-built applications. Truna turns product requirements into controlled browser checks, evidence-backed findings, and repair handoffs for coding agents.

**Inside:** TypeScript, Next.js, Express, Prisma, and Playwright. Reviewed verification plans connect browser execution with screenshots, network signals, risk analysis, and project-level launch reviews.

[Open Truna](https://truna-frontend.vercel.app/) · [Product and Architecture](https://github.com/Mike-Animal-Counseling/Truna_v0)

<details>
  <summary>See the product interface</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/Truna_v0/main/truna-homepage.PNG" alt="Truna launch verification product interface" width="900" loading="lazy">
</details>

### [HotTopicHub](https://github.com/Mike-Animal-Counseling/HotTopicHub)

A discovery hub that turns builder news into a daily reading list. It collects topics from sources including Hacker News, GitHub Trending, Product Hunt, Reddit, and RSS, then ranks recent items using community activity and recency.

**Inside:** React, FastAPI, and SQLite. Source caps and deduplication keep the daily list varied; optional AI enrichment has template fallbacks, with a review queue for moderation.

[Source](https://github.com/Mike-Animal-Counseling/HotTopicHub) · [Ranking implementation](https://github.com/Mike-Animal-Counseling/HotTopicHub/blob/master/backend/app/services/daily_top_signals_service.py)

### [Laya × Jev](https://github.com/Mike-Animal-Counseling/laya-jev-lab)

A ticket classification toolkit that runs a fine-tuned Laya model locally or calls Jev through an API. Use the Python SDK, connect a helpdesk to the REST service, or work from a shared inbox.

**Inside:** Python, PyTorch, and Docker. Model adaptation and held-out comparison sit alongside workspace access controls, idempotent imports, and Zendesk sync. Source and Python package downloads are available.

[Source](https://github.com/Mike-Animal-Counseling/laya-jev-lab) · [Model Card](https://github.com/Mike-Animal-Counseling/laya-jev-lab/blob/main/MODEL_CARD.md) · [Downloads](https://github.com/Mike-Animal-Counseling/laya-jev-lab/releases/latest)

<details>
  <summary>See the ticket inbox with synthetic data</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/laya-jev-lab/main/docs/inbox.png" alt="Laya ticket inbox showing classification of a synthetic billing ticket" width="900" loading="lazy">
</details>

### [CodexHalo](https://github.com/Mike-Animal-Counseling/CodexHalo)

A Windows companion that keeps Codex usage limits and token activity within sight. Its floating HUD expands into daily breakdowns, history, reset reminders, and API-equivalent cost estimates.

**Inside:** Tauri, Rust, React, and TypeScript. Session history is parsed locally; the model pricing catalog updates independently and has an offline fallback. Windows installers are available.

[Source](https://github.com/Mike-Animal-Counseling/CodexHalo) · [Download for Windows](https://github.com/Mike-Animal-Counseling/CodexHalo/releases/latest)

<details>
  <summary>See the desktop app with demo data</summary>
  <br>
  <img src="https://raw.githubusercontent.com/Mike-Animal-Counseling/CodexHalo/main/docs/assets/codexhalo-overview.png" alt="CodexHalo desktop HUD preview with synthetic demo data" width="900" loading="lazy">
</details>

### [LambdaOpt](https://github.com/Mike-Animal-Counseling/aws-lambda-slo-optimizer)

An AWS Lambda cost optimizer that recommends configurations against latency targets. Analyze benchmark results, CloudWatch metrics, and cold-start signals, or start with a local simulation that needs no AWS credentials.

**Inside:** Python, boto3, and CloudWatch. Cost models, Pareto analysis, and SLO risk scoring turn benchmark data into explainable configuration recommendations. Currently in beta.

[Source](https://github.com/Mike-Animal-Counseling/aws-lambda-slo-optimizer) · [Quick Start](https://github.com/Mike-Animal-Counseling/aws-lambda-slo-optimizer#start-here) · [Recommendation Logic](https://github.com/Mike-Animal-Counseling/aws-lambda-slo-optimizer/blob/main/lambdaopt/recommend/slo_recommender.py)

## Developer Tools

### [Porter](https://github.com/Mike-Animal-Counseling/porter)

Self-hosted memory for AI coding assistants. Save project decisions and conventions, retrieve them from another tool through MCP, or export a handoff briefing.

**Inside:** Python, PostgreSQL, and pgvector, with scoped client access, an owner review inbox, and backup tools. Currently an alpha project.

[Source and setup](https://github.com/Mike-Animal-Counseling/porter)

## Skill Set

| Area | Technologies |
| --- | --- |
| **Languages** | Python, TypeScript / JavaScript, Rust, Go, SQL |
| **Web, Mobile & Desktop** | React, Next.js, React Native / Expo, Tailwind CSS, Tauri |
| **Backend & Messaging** | FastAPI, Node.js / Express, Socket.IO, Redis, Celery |
| **Databases & ORM** | PostgreSQL, MongoDB, SQLite, SQLAlchemy, Prisma, Mongoose |
| **AI & Retrieval** | MCP, RAG, pgvector, OpenRouter, PyTorch, Hugging Face Transformers |
| **Cloud & Delivery** | AWS Lambda, IAM, CloudWatch, boto3, Docker / Compose, GitHub Actions, Vercel |
| **Auth & Validation** | OAuth 2.0, JWT, Clerk, Pydantic, Zod |
| **Testing & Quality** | Playwright, pytest, Vitest, Jest, Ruff, mypy, CodeQL |

[Explore all repositories](https://github.com/Mike-Animal-Counseling?tab=repositories)
