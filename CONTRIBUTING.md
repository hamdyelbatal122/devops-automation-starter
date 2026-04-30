# Contributing Guide

Thanks for contributing to `devops-automation-starter`.

## Development Setup

```bash
make setup
make lint
make test
```

## Branching

- Create feature branches from `main`.
- Keep pull requests focused and small.
- Use clear commit messages.

## Pull Request Checklist

- [ ] Code builds locally
- [ ] `make lint` passes
- [ ] `make test` passes
- [ ] Documentation updated (if behavior changed)
- [ ] No secrets committed

## Commit Message Style

Use concise imperative style:

- `feat: add release workflow`
- `fix: handle health check timeout`
- `docs: improve quick start`
