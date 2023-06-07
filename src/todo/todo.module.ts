import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Todo, TodoSchema } from './schemas/todo.schema';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema,
      },
    ]),
  ],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
