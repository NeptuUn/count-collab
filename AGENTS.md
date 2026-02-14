# AGENTS.md

## When implementing features
Add or update tests for the code you change, even if nobody asked.

## Building and Testing before committing

1. Fix any test or type errors until the whole suite is green.

```bash
bun test
```

2. Format code

```bash
bun format
bun fix
```

3. Lint

```bash
bun lint
```

4. Svelte check

```bash
bun check
```