import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productSaleslocation.entity';
import { ProductCategory } from 'src/apis/productsCategory/entities/productCategory.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { ProductTag } from 'src/apis/productsTag/entities/productTag.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @JoinColumn()
  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @JoinColumn()
  @OneToOne(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTag) => productTag.products)
  productTags: ProductTag[];
}
