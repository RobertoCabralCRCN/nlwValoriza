import { PrimaryColumn, Column, Entity ,UpdateDateColumn, CreateDateColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("students")
export class Students {

    @PrimaryColumn()
   readonly id: string;

    @Column()
    name: string;

    @Column()
    group: string;

    @Column()
    phone: string;

    @Column()
    monthlyPayment: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }


}
