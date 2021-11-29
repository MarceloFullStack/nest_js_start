import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatoModule } from './gato/gato.module';
import { DonoModule } from './dono/dono.module';

@Module({
  imports: [GatoModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'gato',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
  }), DonoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
