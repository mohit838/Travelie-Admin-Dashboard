# Husky Git Hooks

This repo uses [Husky](https://typicode.github.io/husky) for Git hooks.

- **pre-commit** → Runs linting and formatting checks.
- **pre-push** → Runs full type + lint validation before pushing.

Run manually with:
```bash
pnpm run prepush-check
