import { Column, ManyToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Product } from 'src/apis/products/entities/product.entity';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (product) => product.productTags)
  products: Product[];
}
