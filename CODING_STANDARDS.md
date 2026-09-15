# Code-Sync Labs Coding Standards

Use these guidelines while completing the Travel Wishlist tutorial and future Code-Sync Labs work.

## Naming and file organization

- Name React components with `PascalCase`, variables and functions with `camelCase`, and constants with clear names such as `XANO_BASE_URL`.
- Avoid vague names such as `data1`, `temp`, or `stuff`.
- Put reusable UI in `components/`, full screens in `pages/`, shared API code in `lib/api.ts`, shared helpers in `lib/utils.ts`, and shared data types in `types/`.
- Keep one main responsibility per file and avoid unnecessary abstractions.

## React and API standards

- Use functional components and keep them reasonably small.
- Reuse components, pass only the props a child needs, and keep shared state in the nearest common parent.
- If a child must update parent-owned state, pass it a clearly named callback.
- Keep Xano requests in the shared API layer. Do not scatter URLs across components.
- Use `async`/`await`, native `fetch()`, and check `response.ok` before reading a response.
- Handle loading, error, empty, and success states.
- Never expose secrets or private API keys in frontend code. Sensitive endpoints require appropriate Xano authentication and authorization.

## Styling and readability

- Design for mobile and desktop from the beginning.
- Use the project theme tokens, consistent spacing, cards, buttons, and typography.
- Favor readable code over clever code. Comment why something exists, not what every line does.
- Remove unused code and imports. Break apart functions that become difficult to explain.
- Put repeated values in a constants or configuration file instead of hardcoding them throughout the app.

## Git, testing, AI, and privacy

- Do not code directly on `main`; create one branch per ticket or feature.
- Make small, descriptive commits, open a pull request, get at least one review, and test locally before merging.
- UI pull requests should include a screenshot, summary, task link, and manual test notes.
- Test happy, error, and empty-data paths; desktop and mobile layouts; and forms with invalid or missing input.
- For larger features, write a short test/spec file describing expected behavior.
- Review the diff and test AI-generated code as carefully as human-written code. Be able to explain what you submit.
- Use fake sample data. Never paste confidential participant data into AI tools or log it in the browser console.
- Never commit passwords, secrets, tokens, or `.env` files.
