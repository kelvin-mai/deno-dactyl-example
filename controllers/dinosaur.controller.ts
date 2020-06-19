import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  NotFoundException
} from '../deps/dactyl.ts';
import { DinosaurModel, DinosuarDTO } from '../models/dinosaur.model.ts';

@Controller('/api/dinosaur')
export class DinosaurController {
  @Get('/')
  async getAllDinosaurs() {
    return await DinosaurModel.all();
  }

  @Post('/')
  @HttpStatus(201)
  async createDinosaur(@Body() data: DinosuarDTO) {
    return await DinosaurModel.create(data);
  }

  @Get('/:id')
  async getDinosaur(@Param('id') id: string) {
    const dinosaur = await DinosaurModel.find(id);
    if (!dinosaur) {
      throw new NotFoundException('Dinosaur not found');
    }
    return dinosaur;
  }

  @Put('/:id')
  async updateDinosaur(@Param('id') id: string, @Body() data: DinosuarDTO) {
    let dinosaur = await DinosaurModel.find(id);
    if (!dinosaur) {
      throw new NotFoundException('Dinosuar not found');
    }
    await DinosaurModel.where('id', id).update(data);
    dinosaur = await DinosaurModel.find(id);
    return { updated: true, dinosaur };
  }

  @Delete('/:id')
  async deleteDinosaur(@Param('id') id: string) {
    const dinosaur = await DinosaurModel.find(id);
    if (!dinosaur) {
      throw new NotFoundException('Dinosaur not found');
    }
    await DinosaurModel.deleteById(id);
    return { deleted: true, dinosaur };
  }
}
