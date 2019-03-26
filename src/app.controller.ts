import {
  Get,
  Controller,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

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

  @Get('error')
  async findAll() {
    // throw new ForbiddenException();
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      403,
    );
  }
}
