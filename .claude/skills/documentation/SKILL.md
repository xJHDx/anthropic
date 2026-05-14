---
name: documentation
description: Write documentation for software projects, including READMEs, API docs, code documentation, setup guides, usage examples, architecture notes, changelogs, and developer-facing explanations. Use when the user asks to create, improve, organize, or review project documentation.
---

# Documentation

## Purpose

Create clear, useful documentation for software and systems engineering projects. Favor practical documentation that helps another developer understand, install, run, use, maintain, or extend the project.

## Workflow

1. Identify the documentation type: README, API docs, inline code docs, setup guide, architecture notes, changelog, or user guide.
2. Inspect the project before writing when files are available. Prefer actual code, config files, package files, routes, tests, and existing docs over assumptions.
3. Determine the audience: student, teammate, maintainer, API consumer, evaluator, or end user.
4. Write documentation with a direct structure, concrete examples, and commands that match the project.
5. Include missing prerequisites, environment variables, install steps, run steps, test steps, and common troubleshooting notes when relevant.
6. Keep wording concise. Avoid marketing language unless the user explicitly asks for promotional copy.
7. Verify commands, paths, endpoints, and filenames against the repository before finalizing.

## README Structure

For a project README, use the sections that fit the project:

- Project name
- Short description
- Main features
- Tech stack
- Requirements
- Installation
- Configuration
- Usage
- Project structure
- Scripts or commands
- API endpoints
- Tests
- Roadmap
- Author or course context
- License

Skip sections that would be empty or speculative.

## API Documentation

For API docs, document each endpoint with:

- Method and path
- Purpose
- Authentication requirements
- Parameters
- Request body example
- Success response example
- Error response examples
- Status codes
- Notes about validation, pagination, filtering, or rate limits

Use real endpoint names and schemas from the code whenever possible.

## Code Documentation

For code documentation:

- Explain why the code exists, not only what each line does.
- Add comments only around non-obvious logic, business rules, complex algorithms, or integration boundaries.
- Prefer docstrings or function-level documentation for public APIs, exported functions, classes, modules, and reusable helpers.
- Avoid noisy comments that repeat obvious names or syntax.
- Preserve the style already used in the repository.

## Review Checklist

Before finishing documentation, check:

- The commands can be copied and run in the expected shell.
- The documented files and folders exist.
- The setup instructions mention required versions or services.
- Examples are realistic and minimal.
- The document has enough context for a new contributor.
- There are no unexplained placeholders.
- The tone matches the project: academic, professional, technical, or beginner-friendly.

## Output Style

Use clear headings, short paragraphs, and examples. When editing existing docs, keep the original voice unless the user asks for a rewrite. When the project is for a course, include learning goals and the academic context without making the README feel like a class essay.
