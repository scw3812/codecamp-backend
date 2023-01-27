import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardModule } from './apis/boards/boards.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1111',
      database: 'myproject03',
      entities: [__dirname + '/apis/**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
    BoardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
