import { connectToDatabase } from "@/lib/mongodb";
import { WebResult } from "@/lib/WebResult"
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid"

const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || "12");

const loadDbConnection = async ()=>{
    await connectToDatabase();
}

loadDbConnection();

const userService = {
    register: async (user: any)=>{
        try{

            const userId =`user-${nanoid(12)}`;
            const hashPassword = await bcrypt.hashSync(user.password, BCRYPT_ROUNDS);

            const userDataToCreate = {
                userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: hashPassword
            };

            const createdUser = await User.create(userDataToCreate);

            return new WebResult(
                "User created successfully", 
                0,
                createdUser
            )

        }catch(error: any){
            return new WebResult(
                error.message,
                1
            )
        }
    }
}

export default userService;
