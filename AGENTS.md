# AGENTS.md

This document provides guidelines for agentic coding agents working on this codebase.

## Project Overview

This is a Jekyll-based academic website using the [al-folio](https://github.com/alshedivat/al-folio) theme. It's a static site generator for academic portfolios with support for publications, blog posts, projects, and CV.

## Technology Stack

- **Static Site Generator**: Jekyll
- **Package Manager**: Ruby (Bundler), Node.js (npm for prettier)
- **Container**: Docker/Docker Compose
- **Code Formatter**: Prettier with `@shopify/prettier-plugin-liquid`

---

## Build/Lint/Test Commands

### Local Development (Docker - Recommended)

```bash
# Pull and start the container
docker compose up

# Or use slim image (~100MB vs ~400MB)
docker compose -f docker-compose-slim.yml up
```

The site will be available at `http://localhost:8080`.

### Local Development (Native Ruby)

```bash
# Install dependencies
bundle install

# Run the development server
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

### Formatting (Prettier)

```bash
# Check formatting (used in CI)
npx prettier . --check

# Format files
npx prettier . --write
```

### Git Pre-commit Hooks

This project uses pre-commit with these checks: trailing-whitespace, end-of-file-fixer, check-yaml, check-added-large-files. To enable locally:

```bash
pip install pre-commit
pre-commit install
```

---

## Code Style Guidelines

### Formatting

- **Prettier Configuration** (`.prettierrc`): Print width 150, trailing commas ES5 style, uses `@shopify/prettier-plugin-liquid`
- **Files to NOT Format**: `*.map`, `*.min.css`, `*.min.js`, `assets/css/main.scss`, `assets/js/search/*.js`, etc. (see `.prettierignore`)

### Naming Conventions

- **Files**: lowercase with hyphens (e.g., `my-new-page.md`)
- **Jekyll Collections**: underscores (e.g., `_posts`, `_projects`)
- **YAML Front Matter**: lowercase with hyphens for keys

### Content Types

- **Blog Posts**: `_posts/YYYY-MM-DD-title.md`
- **News Items**: `_news/YYYY_MM_description.md`
- **Projects**: `_projects/*.md`
- **Publications**: `_bibliography/papers.bib` (BibTeX format)

### Jekyll Configuration

- Main config: `_config.yml`
- CV: `assets/json/resume.json` (JSON Resume schema) or `_data/cv.yml`
- Publications: `_bibliography/papers.bib`

---

## Common Tasks

### Adding a New Blog Post

Create file in `_posts/` with format `YYYY-MM-DD-title.md`, add front matter with `layout: post`, `title`, `author`, then write content in Markdown.

### Adding a Publication

Add BibTeX entry to `_bibliography/papers.bib` with fields: `pdf`, `code`, `website`, `arxiv`, `doi`, etc.

### Updating CV

Edit `assets/json/resume.json` following [JSON Resume schema](https://jsonresume.org/).

### Running a Single Test

No traditional unit tests. Use these commands to validate:

- **Formatting**: `npx prettier . --check`
- **Links**: `npx lychee . --all`
- **YAML**: `yamllint _config.yml` or pre-commit hooks

---

## GitHub Actions (CI)

The following workflows run on PRs and pushes to main:

- **prettier.yml**: Checks code formatting with Prettier
- **broken-links.yml**: Validates internal links using lychee
- **axe.yml**: Accessibility testing
- **codeql.yml**: CodeQL security analysis
- **lighthouse-badger.yml**: Performance tracking

---

## Error Handling

- **Jekyll Build Errors**: Check `_config.yml` syntax and front matter in YAML files
- **Broken Links**: Test with `npx lychee . --all`
- **YAML Errors**: Run `yamllint _config.yml` or pre-commit hooks

---

## Important Notes

- This is a fork of al-folio - upstream changes may need to be merged periodically
- Site deploys automatically to GitHub Pages via GitHub Actions on push to main
- Docker recommended for local development to avoid Ruby version conflicts
- Prettier must format all code before committing (enforced in CI)
