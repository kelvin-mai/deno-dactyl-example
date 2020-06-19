import { Application } from "https://deno.land/x/dactyl/mod.ts";

import { DinosaurController } from "./controllers/dinosaur.controller.ts";

const app: Application = new Application({
  controllers: [DinosaurController],
});

await app.run(8080);
