import { Get, Controller, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res) {
    res.render('index');
  }

  @Get('table')
  table(@Res() res: Response) {
    res.render('table');
  }
}
