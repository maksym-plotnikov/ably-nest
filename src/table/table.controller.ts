import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Post()
  addNewRecord(@Res() res: Response, @Body() data: string) {
    this.tableService.add(data);
    res.render('table');
  }
}
