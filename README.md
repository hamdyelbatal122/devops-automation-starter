# devops-automation-starter

A production-ready DevOps starter kit for shipping Node.js services with quality gates, Docker packaging, and deployment automation patterns.

## Why this starter is useful

- **Fast onboarding**: run the app locally in minutes.
- **Real CI workflow**: lint + test + Docker build on every push and PR.
- **Deployment-ready app**: health endpoints and container best practices.
- **Scalable foundation**: keep Jenkins/Ansible scripts while adding GitHub-native automation.

## What is included

- `app/` Express service with:
  - `/` endpoint returning service metadata
  - `/healthz` endpoint for probes
  - built-in tests using Node test runner
- `app/Dockerfile` using modern `node:20-alpine`
- `docker-compose.yml` for local full-container run
- `.github/workflows/ci.yml` for automated CI on GitHub Actions
- `.github/workflows/codeql.yml` for static security analysis
- `.github/workflows/release.yml` for tagged Docker image releases to GHCR
- `playbooks/` and `scripts/` for Jenkins + Ansible deployment flow (legacy-friendly)

## Quick start

### 1) Run locally with Node

```bash
cd app
npm install
npm run lint
npm test
npm start
```

Open: [http://localhost:8080](http://localhost:8080)

### 2) Run with Docker Compose

```bash
docker compose up --build
```

Health check:

```bash
curl http://localhost:8080/healthz
```

## CI/CD flow (GitHub)

Current CI pipeline runs:

1. dependency install
2. lint checks
3. unit tests
4. Docker image build

This gives contributors instant feedback and keeps `main` stable.

## Suggested GitHub repo setup

Rename the repository to: **`devops-automation-starter`**

Then add:

- branch protection on `main`
- required checks: `CI / test-and-build`
- pull request template and issue templates
- optional CodeQL security scanning

Professional repo defaults already included:

- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `.editorconfig`
- `.github/dependabot.yml`
- `.github/hamdyelbatal122` 

## Legacy infrastructure automation

The project still includes:

- Jenkins helper scripts in `scripts/`
- Ansible deployment playbook in `playbooks/`

You can keep these for VM-based deployments while evolving to cloud-native workflows.

## Roadmap ideas (to make it "legendary")

- Add semantic versioning + release workflow
- Add Terraform module for infra bootstrap
- Add observability stack (Prometheus + Grafana + Loki)
- Add SAST/secret scanning (`gitleaks`, `trivy`, `npm audit`)

## License

MIT
