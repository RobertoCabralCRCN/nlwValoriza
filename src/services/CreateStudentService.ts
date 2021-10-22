import { getCustomRepository } from "typeorm";
import { StudentsRepositories } from "../repositories/StudentsRepositories";



interface IStudentRequest{
    name: string;
    phone: string;
    group: string;
    monthlyPayment: number;
}

class CreateStudentService {
    
    async execute({ name, phone, group, monthlyPayment} : IStudentRequest) {
        const studentsRepository = getCustomRepository( StudentsRepositories);

        if (!name) {
            throw new Error("Name incorrect")
        }

        const studentsAlreadyExists = await studentsRepository.findOne({
            name
        });
        
        if (studentsAlreadyExists) {
           throw new Error ("Name already exists"); 
        }

        const students = studentsRepository.create({
            name,
            phone,
            group,
            monthlyPayment
        });

        await studentsRepository.save (students);
        return students;
    }
}

export { CreateStudentService }