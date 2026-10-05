# Kaushal — Portfolio

Cinematic 3D engineering portfolio: Digital Hardware / FPGA-RTL + Embedded Firmware.
Vite + TypeScript + Three.js, no UI framework.

## Run

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # type-check + production build to dist/
npm run preview
```

## Edit content

All copy, terms, projects, skills and lanes live in `src/content/content.ts`.
Contact email is a placeholder (`kaushal@example.com`); GitHub / LinkedIn / CV links are
empty and hidden until filled in (`site.contact` in the same file).

## Notes

- Works without WebGL or JavaScript (plain document), respects `prefers-reduced-motion`,
  sound is off by default.
- Dev-only URL params: `?step=N&nointro&q=low|high&reduced&debug&shot=az,el,dist,fov,sx,sy,dx,dy,dz`.
- `scripts/` holds the visual review tools (headless screenshots, framing solver, layout
  audit, transition clearance, interaction smoke test).
