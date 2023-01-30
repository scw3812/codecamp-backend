import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  email: string;

  @Column()
  password: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  age: number;
}
