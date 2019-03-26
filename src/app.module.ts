import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
import { PollController } from './poll/poll.controller';
import { TableController } from './table/table.controller';
import { TestController } from './test/test.controller';
// Services
import { PollService } from './poll/poll.service';
import { TableService } from './table/table.service';
import { TestService } from './test/test.service';

@Module({
  imports: [],
  controllers: [AppController, PollController, TableController, TestController],
  providers: [PollService, TableService, TestService],
})
export class ApplicationModule {}
