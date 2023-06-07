import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';

import { TodoStatus } from '../schemas/todo.schema';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;
}
