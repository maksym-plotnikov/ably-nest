import { Injectable } from '@nestjs/common';

@Injectable()
export class PollService {
  create(poll) {
    const Ably = require('ably');
    const {ABLY_KEY, ABLY_CHANNEL } = process.env;
    const ably = new Ably.Realtime(ABLY_KEY);
    const channel = ably.channels.get(ABLY_CHANNEL);
    const data = {
      points: 1,
      movie: poll.movie,
    };
    channel.publish('vote', data);
  }
}
