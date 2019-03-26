import { Controller, Post, Res, Body, HttpCode } from '@nestjs/common';
import { Response } from 'express';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Post()
  @HttpCode(201)
  addNewRecord(@Res() res: Response, @Body() data: string[]) {
    this.tableService.add(data);
    return res.end();
  }
}
