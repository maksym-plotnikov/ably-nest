import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
// Controllers
import { AppController } from './app.controller';
import { PollController } from './poll/poll.controller';
import { TableController } from './table/table.controller';
import { TestController } from './test/test.controller';
// Services
import { PollService } from './poll/poll.service';
import { TableService } from './table/table.service';
import { TestService } from './test/test.service';
// Guards
import { RolesGuard } from './guards/role.guard';

@Module({
  imports: [],
  controllers: [AppController, PollController, TableController, TestController],
  providers: [
    PollService,
    TableService,
    TestService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class ApplicationModule {}
