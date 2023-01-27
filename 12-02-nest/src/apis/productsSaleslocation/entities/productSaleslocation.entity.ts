import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  addressDetail: string;

  @Column({ type: 'decimal' })
  @Field(() => Float)
  lat: number;

  @Column({ type: 'decimal' })
  @Field(() => Float)
  lng: number;

  @Column()
  @Field(() => Date)
  meetingTime: Date;
}
