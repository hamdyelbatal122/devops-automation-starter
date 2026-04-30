# Security Policy

## Supported Versions

Only the latest `main` branch is supported with security updates.

## Reporting a Vulnerability

Please do not open public issues for security vulnerabilities.

Instead:

1. Email the maintainers privately.
2. Include reproduction steps, impact, and suggested remediation.
3. Allow time for triage and coordinated disclosure.

## Secrets Handling

- Never commit `.env` files or credentials.
- Use GitHub secrets for CI/CD credentials.
- Rotate secrets immediately if exposure is suspected.
