import { Application } from './deps/dactyl.ts';
import { DinosaurController } from './controllers/dinosaur.controller.ts';
import { db } from './db.ts';

const app: Application = new Application({
  controllers: [DinosaurController],
});

await db.sync();
await app.run(8080);
