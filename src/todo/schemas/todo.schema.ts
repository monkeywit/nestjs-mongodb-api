import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum TodoStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: TodoStatus.PENDING })
  status: TodoStatus;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
