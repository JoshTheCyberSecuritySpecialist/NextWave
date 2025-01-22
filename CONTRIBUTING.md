# Contributing to NextWave

Thank you for your interest in contributing to NextWave! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch
4. Make your changes
5. Submit a pull request

## Development Process

### Branch Naming

- Feature: `feature/description`
- Bug fix: `fix/description`
- Documentation: `docs/description`

### Commit Messages

Follow conventional commits:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

### Pull Requests

1. Update documentation
2. Add tests
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Request review

### Testing

Run all tests before submitting:

```bash
npm test                # Unit tests
npm run test:e2e       # E2E tests
npm run test:a11y      # Accessibility tests
```

## Code Style

- Follow ESLint configuration
- Use TypeScript
- Write meaningful comments
- Keep functions small and focused
- Use meaningful variable names

## Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update API documentation
- Include examples for new features