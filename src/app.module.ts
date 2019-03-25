import { PollController } from './poll/poll.controller';
import { TableController } from './table/table.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PollService } from './poll/poll.service';
import { TableService } from './table/table.service';

@Module({
  imports: [],
  controllers: [AppController, PollController, TableController],
  providers: [PollService, TableService],
})
export class AppModule {}
