import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/createProduct.input';
import { Product } from './entities/product.entity';
import { UpdateProductInput } from './dto/updateProduct.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productRepository.findOne({ id });
  }

  async create(createProductInput: CreateProductInput): Promise<Product> {
    return await this.productRepository.save(createProductInput);
  }

  async update(
    id: string,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return await this.productRepository.save({ id, ...updateProductInput });
  }

  async checkSoldout(id: string): Promise<void> {
    const product = await this.productRepository.findOne({ id });
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
  }
}
