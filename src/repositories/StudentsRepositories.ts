import { Students} from "../entities/Students"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(Students)
class StudentsRepositories extends Repository<Students> {}

export { StudentsRepositories }