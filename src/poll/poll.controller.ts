import { Controller, Post, Res, Body, HttpCode } from '@nestjs/common';
import { Response } from 'express';
// import pollService
import { PollService } from './poll.service';

// @Controller(‘poll’) tells the framework that
// we expect this controller to respond to requests posted to /poll route.
@Controller('poll')
export class PollController {
  // inject service
  constructor(private pollService: PollService) {}

  @Post()
  @HttpCode(201)
  submitVote(@Res() res: Response, @Body() poll: string) {
    this.pollService.create(poll);
    return res.end();
  }
}
