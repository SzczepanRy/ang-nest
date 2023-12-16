import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiService } from './api.service';
interface itemI {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get()
  findAll(): itemI[] {
    return this.apiService.findAll();
  }

  @Post('add')
  addItem(@Body() item: itemI): itemI[] {
    return this.apiService.addItem(item);
  }
  @Delete('delete/:id')
  deleteItem(@Param('id') id: string): itemI[] {
    return this.apiService.deleteItem(id);
  }
  @Put('edit/:id')
  editItem(@Body() { done }: any, @Param('id') id: string): itemI[] {
    return this.apiService.editItem(id, done);
  }
}
