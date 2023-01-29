import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './products.service';
import { UpdateProductInput } from './dto/updateProduct.input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  fetchProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(@Args('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productService.create(createProductInput);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    await this.productService.checkSoldout(id);
    return this.productService.update(id, updateProductInput);
  }

  @Mutation(() => Boolean)
  deleteProduct(@Args('id') id: string): Promise<boolean> {
    return this.productService.delete(id);
  }
}
