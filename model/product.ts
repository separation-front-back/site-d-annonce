import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from 'typeorm';

@Entity()
export default class Product extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    price: string

    @Column()
    description: string
}
