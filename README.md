# Iggarna

A website about Iggesunds IK, deployed on Vercel at [iggarna.com](https://iggarna.com).

## Development

Use Node.js 22 and Yarn Classic:

```sh
yarn install --frozen-lockfile
yarn dev
```

Open [localhost:3000](http://localhost:3000). No database, Docker service, environment variables or external database account are required.

## Archive

`src/server/archive.json` is the production archive exported from PostgreSQL on 2026-11-10. It contains 1,234 articles, 1,378 image records, 204 players, 33 authors, 25 teams and 20 categories, preserving the original IDs and relationships.

`src/server/archive.ts` supplies the existing API routes with search, pagination, author counts and team data. Only server routes import the archive; it is not included in browser JavaScript. Image files remain hosted at their existing URLs on `arkiv.iggesundsik.se`.

To change content, edit the archive, preserve unique IDs and valid references, verify the affected pages and commit the change. A push to `main` deploys the updated content through Vercel. `src/client/mock/episodes.ts` contains the separate history timeline.

## Verification

```sh
yarn test
yarn lint
yarn build
```

The tests compare 215 deterministic responses against hashes captured from the PostgreSQL-backed production API before migration. They also verify archive counts and relationships, Swedish search, literal punctuation, author rankings and request validation. Intentional archive edits require reviewing and updating the relevant migration snapshots and expected counts.

## Deployment

Vercel uses the Next.js framework preset, Node.js 22, `yarn install --frozen-lockfile` and `yarn build`. The GitHub integration deploys `main` to production and branches to previews. GitHub Actions runs tests, lint and the production build.

The archive and APIs need no secrets or paid database service. Keep the pre-migration PostgreSQL backup outside the repository for rollback. Retire the old Hetzner application only after the Vercel deployment and custom-domain HTTPS have been verified.
