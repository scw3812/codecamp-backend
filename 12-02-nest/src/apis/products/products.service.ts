import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/createProduct.input';
import { Product } from './entities/product.entity';
import { UpdateProductInput } from './dto/updateProduct.input';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTag/entities/productTag.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
      where: { isDeleted: false },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async findOne(id: string): Promise<Product> {
    return await this.productRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async create(createProductInput: CreateProductInput): Promise<Product> {
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput;
    const location = await this.productSaleslocationRepository.save(
      productSaleslocation,
    );
    const tags = [];
    for (const t of productTags) {
      const tagName = t.replace('#', '');
      let tag = await this.productTagRepository.findOne({ name: tagName });
      if (!tag) {
        tag = await this.productTagRepository.save({ name: tagName });
      }
      tags.push(tag);
    }
    const result = await this.productRepository.save({
      ...product,
      productSaleslocation: location,
      productCategory: { id: productCategoryId },
      productTags: tags,
    });

    return result;
  }

  async update(
    id: string,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    const { productTags, ...product } = updateProductInput;
    const tags = [];
    for (const t of productTags) {
      const tagName = t.replace('#', '');
      let tag = await this.productTagRepository.findOne({ name: tagName });
      if (!tag) {
        tag = await this.productTagRepository.save({ name: tagName });
      }
      tags.push(tag);
    }
    return await this.productRepository.save(
      tags.length > 0
        ? {
            id,
            ...product,
            productTags: tags,
          }
        : {
            id,
            ...product,
          },
    );
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
