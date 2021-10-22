import { Request, Response } from "express";
import { CreateStudentService } from  "../services/CreateStudentService"



class CreateStudentController {
    
    async handle(request: Request, response: Response){
        const { name, phone, group, monthlyPayment } = request.body;

        const createStudentService = new CreateStudentService();

        const student = await createStudentService.execute({ name, phone, group, monthlyPayment });
        
        
        return response.json(student);
             

    }

}

export { CreateStudentController }