# E-commerce

This repository is an npm-workspaces/Turborepo scaffold with three workspaces:

- `apps/client`: Next.js storefront
- `apps/server`: NestJS API
- `packages/database`: shared Prisma client and PostgreSQL schema

## Local setup

1. Install dependencies from the repository root with `npm install`.
2. Copy `.env.example` to `.env` at the repository root and set `DATABASE_URL` to a PostgreSQL database you can access. The API and Prisma CLI load this single root env file.
3. Run `npm run db:generate` to generate the Prisma client.
4. Run `npm run db:migrate` to create/update the development database.
5. Run `npm run dev` to start the workspaces.

The API listens on port `3001` by default; set `PORT` to override it. Do not commit `.env` files or real credentials.

## Checks

- `npm run check-types` runs workspace type checks after generating the Prisma client.
- `npm run lint` runs the client and API linters and validates the Prisma schema.
- `npm run format` formats supported files with Prettier.
- `npm run format:check` checks formatting without changing files.
- `npm test` runs the available unit tests.
- `npm run --workspace=server test:e2e` runs the API end-to-end test.
- `npm run build` builds the workspaces.

The application is currently a scaffold: the client is the Next.js starter page and the API exposes a health/status endpoint. Product, cart, order, and authentication flows have not been implemented.
