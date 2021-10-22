import { Repository, EntityRepository, } from "typeorm";
import { Compliment } from "../entities/Compliment";


@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {
    static create(arg0: { tag_id: string; user_sender: string; user_receiver: string; message: string; }) {
        throw new Error("Method not implemented.");
    }

}

export { ComplimentsRepositories };