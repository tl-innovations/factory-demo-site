# 0001: About page

## Problem
The site has no way to learn about the company. Add an `/about` page and link to it from home.

## Acceptance criteria
1. `/about` renders one `<h1>` and two short paragraphs of placeholder company copy inside `<main>`.
2. `/about` has a link with the text "Back to home" pointing to `/`.
3. The home page has a link with the text "About us" pointing to `/about`.
4. `/about` exports metadata with a unique title and a meta description, plus a canonical URL (`/about`).
5. Links use `next/link`, have descriptive text, and keep a visible focus indicator.
6. `lint`, `typecheck` and `build` pass.

## Scope
Out of scope: real copy, navigation/header, sitemap/robots, the site-wide metadata fix, tests (no runner in repo).
