import { Injectable } from '@nestjs/common';
import { CreateDto } from '../dto/create.dto';

@Injectable()
export class TestService {
  create(data: CreateDto) {
    return 'this came from test service!';
  }

  findOne(id) {
    return `Found 1 occurencies for ${id}`;
  }
}
