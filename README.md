# Julius Troy Aguas — Portfolio

Personal portfolio site. React + Vite, plain CSS with design tokens.

## Running it

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Structure

```
src/
  components/
    layout/      Container, Section, SectionHeader
    ui/          Button, Eyebrow, Tag, Reveal
    Header/ Hero/ Work/ Process/ Tools/ About/ Contact/ Footer/
  data/          Content for each section (projects, process, tools, stats, links)
  styles/        token.css (design tokens), global.css (reset + shared classes), typography.css
```

Section content lives in `src/data/` so the markup stays free of copy. Shared
classes (`.button`, `.eyebrow`, `.tag`, `.reveal`, `.container`, `.section`,
`.section-header`) are defined in `src/styles/global.css`; everything else is
scoped to its component's CSS file.

`Reveal` wraps an element in an IntersectionObserver-driven fade-up. It falls
back to visible when the API is missing, and the animation is disabled under
`prefers-reduced-motion`.

## Still to swap in

- Real project copy and links in `src/data/project.js` (descriptions are
  placeholder, and project 3 reuses project 2's screenshot)
- Real social URLs and contact email in `src/data/sociallinks.js`
- Real numbers in `src/data/stats.js`
- `public/favicon.svg` is still the starter icon
