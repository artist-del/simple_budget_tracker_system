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
    },
    login: async(user: any)=>{
        try{

            const foundUser = await User.findOne({email: user.email}).select("+password");

            if(!foundUser){
                return new WebResult(
                    "User not found",
                    1
                )
            }

            const isMatch = await bcrypt.compare(user.password, foundUser.password);

            if(!isMatch){
                return new WebResult(
                    "Invalid password",
                    1
                )
            }

            return new WebResult(
                "Login successful",
                0,
                foundUser
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
