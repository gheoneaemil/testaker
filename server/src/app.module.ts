import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: String(process.env.DB_PASSWORD),
      database: 'sys',
      entities: [ Event ],
      synchronize: true
    }),
    TypeOrmModule.forFeature([ Event ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
