# Count Collab

Count Collab is a lightweight, shareable counter app. Create a counter, send the link, and let anyone increment it in real time.

## Scope

- Create counters with title + description
- Public counters listed on the landing page and browser
- Private counters accessible via a shareable link
- No login for the MVP


## Getting Started

Install dependencies:

```bash
bun install
```

Run the dev server:

```bash
bun run dev
```

Type checking:

```bash
bun run check
```

Formatting:

```bash
bun run format
```

## Configuration

Create a `.env` file if you want to use the database layer locally:

```bash
DATABASE_URL=postgres://user:password@localhost:5432/count_collab
```

## Docs

- [Specification](./SPECIFICATION.md)
- [Development Guidelines](./DEVELOPMENT.md)
