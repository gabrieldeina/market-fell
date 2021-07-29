import { Product } from 'src/products/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @OneToMany(() => Product, (product) => product.name)
  products: Product[];
}
