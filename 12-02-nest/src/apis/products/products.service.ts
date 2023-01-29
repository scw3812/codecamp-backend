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
    return await this.productRepository.find({ isDeleted: false });
  }

  async findOne(id: string): Promise<Product> {
    return await this.productRepository.findOne({ id, isDeleted: false });
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
