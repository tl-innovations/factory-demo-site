# Plan: 0001 About page

Test plan: no test runner exists, so verification is lint, typecheck and build (`/about` must appear as a static route), plus a manual render check.

1. Add `src/app/about/page.tsx`: server component, `metadata` (title, description, `alternates.canonical: "/about"`), reuses `page.module.css` classes (`page`, `main`, `intro`, `ctas`, `secondary`) for visual consistency; `<h1>`, two `<p>`, `<Link href="/">Back to home</Link>`.
2. Edit `src/app/page.tsx`: add `<Link href="/about">About us</Link>` in the `.ctas` row as a secondary button.
3. Add `:focus-visible` outline for `.ctas a` / `.intro a` in `page.module.css`.
4. Verify, review.
