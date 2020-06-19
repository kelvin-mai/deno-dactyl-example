import { Application } from './deps/dactyl.ts';
import { db } from './db.ts';
import { DinosaurController } from './controllers/dinosaur.controller.ts';

const app: Application = new Application({
  controllers: [DinosaurController]
});

await db.sync({ drop: false });
await app.run(8080);
