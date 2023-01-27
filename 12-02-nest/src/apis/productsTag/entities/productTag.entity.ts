import { Column, ManyToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Product } from 'src/apis/products/entities/product.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ProductTag {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Product, (product) => product.productTags)
  @Field(() => [Product])
  products: Product[];
}
