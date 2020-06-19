import { Controller, Get } from '../deps/dactyl.ts';
import { DinosaurModel } from '../models/dinosaur.model.ts';

@Controller('/api/dinosaur')
export class DinosaurController {
  @Get('/')
  async getAllDinosaurs() {
    return await DinosaurModel.select().all();
  }
}
