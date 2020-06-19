import { Controller, Get } from "https://deno.land/x/dactyl/mod.ts";

@Controller("/api/dinosaur")
export class DinosaurController {
  @Get("/")
  getAllDinosaurs() {
    return { hello: "world" };
  }
}
