# StudySprint — reference solution (TA only)

Reference build for the 10/10/2026 Hands-on: React Build Lab. See [../TA_Guide.md](../TA_Guide.md).

```bash
npm install
npm run dev
```

Stack: Vite + React 19, Tailwind CSS v4 (`@tailwindcss/vite`), react-router-dom v7 (`BrowserRouter` pattern, as taught on 10/09).

- `src/App.jsx`: tasks/loading/error state, JSONPlaceholder fetch, add/toggle/delete handlers, routes
- `src/pages/`: `Dashboard` (stats, form, filters, list) and `Completed`
- `src/components/`: `Navbar`, `StatsBar`, `TaskForm`, `FilterBar`, `TaskList`, `TaskItem`
