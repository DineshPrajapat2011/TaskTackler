# Task Tackler — Freelancing marketplace (MVP)

A modern Next.js + TypeScript + Tailwind CSS app to post tasks and browse them. This is an MVP with an in-memory API.

## Quick start (Windows PowerShell)

- Install Node.js 18+ (LTS recommended)
- Install dependencies:

```powershell
npm install
```

- Start the dev server:

```powershell
npm run dev
```

- Build for production:

```powershell
npm run build ; npm start
```

## Pages

- Home: `/`
- Browse tasks: `/browse`
- Post a task: `/post`
- How it works: `/how-it-works`
- About: `/about`
- Contact: `/contact`
- Task details: `/tasks/[id]`

## API

- `GET /api/tasks` — List tasks
- `POST /api/tasks` — Create task `{ title, description, budget }`
- `GET /api/tasks/:id` — Get task by ID

Notes: Tasks are stored in-memory; they reset on server restart. Replace with a database for persistence.

## Branding

Colors are configured in Tailwind under `brand` scale. Replace the placeholder logo block in the navbar with your real logo.

## License

MIT