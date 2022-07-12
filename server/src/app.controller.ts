import { Controller, Get, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Repository } from 'typeorm';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/events')
  findAll(): Promise<[Event[], number]> {
    console.log("find all events");
    return this.eventRepository.findAndCount();
  }

}
