import { config } from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryEnvPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../../.env',
);

async function bootstrap() {
  config({ path: repositoryEnvPath });

  if (!process.env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL is required. Set it in the repository root .env or the process environment.',
    );
  }

  const { NestFactory } = await import('@nestjs/core');
  const { AppModule } = await import('./app.module.js');
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3001);
}
await bootstrap();
