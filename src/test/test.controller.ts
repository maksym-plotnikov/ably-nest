import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateDto } from '../dto/create.dto';
// Pipes
import { ValidationPipe } from '../pipes/validation.pipe';
import { ParseIntPipe } from '../pipes/parse-int.pipe';
// Guards
import { AuthGuard } from '../guards/auth.guard';
// Custom decorator
import { Roles } from '../decorators/roles.decorator';

@Controller('test')
@UseGuards(AuthGuard)
export class TestController {
  constructor(private testService: TestService) {}

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    return await this.testService.findOne(id);
  }

  @Post()
  // Can also be used with reflection for RolesGuard
  // @SetMetadata('roles', ['admin'])
  @Roles('admin')
  @UsePipes(ValidationPipe)
  async create(@Body() createDto: CreateDto) {
    this.testService.create(createDto);
  }
}
