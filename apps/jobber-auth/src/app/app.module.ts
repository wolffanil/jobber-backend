import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}

// "executor": "nx:run-commands",
//       "options": {
//         "command": "webpack-cli build",
//         "args": ["node-env=production"]
//       },
//       "configurations": {
//         "development": {
//           "args": ["node-env=development"]
//         }
//       },
