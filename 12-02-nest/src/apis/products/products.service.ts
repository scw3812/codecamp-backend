import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/createProduct.input';
import { Product } from './entities/product.entity';
import { UpdateProductInput } from './dto/updateProduct.input';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productSaleslocation.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({ isDeleted: false });
  }

  async findOne(id: string): Promise<Product> {
    return await this.productRepository.findOne({ id, isDeleted: false });
  }

  async create(createProductInput: CreateProductInput): Promise<Product> {
    const { productSaleslocation, ...product } = createProductInput;
    const location = await this.productSaleslocationRepository.save(
      productSaleslocation,
    );
    const result = await this.productRepository.save({
      ...product,
      productSaleslocation: location,
    });

    return result;
  }

  async update(
    id: string,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return await this.productRepository.save({ id, ...updateProductInput });
  }

  async checkSoldout(id: string): Promise<void> {
    const product = await this.productRepository.findOne({
      id,
      isDeleted: false,
    });
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
  }

  async delete(id: string): Promise<boolean> {
    // const result = await this.productRepository.delete(id);
    // const result = await this.productRepository.update(id, { isDeleted: true });
    // const result = await this.productRepository.softRemove({ id });
    const result = await this.productRepository.softDelete({ id });
    return !!result.affected;
  }
}
