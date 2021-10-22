import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

import { UsersRepositories} from "../repositories/UsersRepositories";


interface IAuhenticateRequest {
    email: string;
    password: string;
}


class AuthenticateUserService {

    async execute({email, password}: IAuhenticateRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories);
        
        // Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect !")
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password)
        if (!password) {
            throw new Error("Email/Password incorrect !")
        }

        // gerar token
        const token = sign({
            email: user.email

        }, "ae2942fd558e2b11a7e1e3d5aacc5a95", {
            subject : user.id,
            expiresIn: "1d" 
        }
        
      );

      return token;
    }
}

export { AuthenticateUserService }