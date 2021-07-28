import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  price: number;

  @Column({
    enum: ['DOCE', 'SALGADO', 'BEBIDA', 'BEBIDA ALCOOLICA', 'ITEM'],
    default: 'ITEM',
  })
  category: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
