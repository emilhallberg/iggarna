# Iggarna

A website about Iggesunds IK.

## Environment Variables

.env.local

```bash
DB_USER=
DB_HOST=
DB_DATABASE=
DB_PASSWORD=
DB_PORT=
```

## Development

**First, run and init the database:**

```bash
docker compose up -d && yarn && yarn knex
```

**Secondly, run the development server:**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
