import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  add(newEmployee) {
    const Ably = require('ably');
    const {ABLY_KEY, ABLY_CHANNEL } = process.env;
    const ably = new Ably.Realtime(ABLY_KEY);
    const channel = ably.channels.get(ABLY_CHANNEL);
    const data = {
      employee: newEmployee,
    };
    channel.publish('employees', data);
  }
}
