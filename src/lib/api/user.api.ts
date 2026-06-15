import { UserDocument } from "@/models/user";
import { WebResult } from "../WebResult";



export const userLogin = async (email: string, password: string)=>{
    try{
        const response = await fetch("/api/user",{
            method: "POST",
            body: JSON.stringify({ email, password })
        })
        return response.json();
    }
    catch(error){
        console.error('Error logging in:', error);
        throw error;
    }
}

export const userApi = {
    register: async (user: UserDocument)=>{
        try{
            const response = await fetch("/api/auth/register",
                {
                    method: "POST",
                    body: JSON.stringify(user)
                }
            );
            return response.json();
        }catch(error: any){
            return new WebResult(
                error.message
            )
        }
    }
}


