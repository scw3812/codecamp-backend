import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Mutation(() => ProductCategory)
  async createCategory(@Args('name') name: string): Promise<ProductCategory> {
    return await this.productCategoryService.create({ name });
  }
}
