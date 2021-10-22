import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { StudentsRepositories } from "../repositories/StudentsRepositories";



class ListStudentsService {
    async execute() {
        const studentsRepositories = getCustomRepository(StudentsRepositories)
    
        const students = await studentsRepositories.find();
    
        return classToPlain(students);
    }

}

export { ListStudentsService }