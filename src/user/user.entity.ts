import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true,nullable:false })
  username: string;

  @Column({nullable:false})
  email: string;

  @Column({
    nullable: false,
  })
  password: string;
}
