import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {
   @PrimaryGeneratedColumn()
   id?: number

   @Column()
   name?: string

   @Column()
   username?: string

   @Column()
   password?: string

   @Column({ default: 0 })
   role?: number
}
