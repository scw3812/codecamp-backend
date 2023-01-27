import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './products.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return await this.productService.create(createProductInput);
  }
}
