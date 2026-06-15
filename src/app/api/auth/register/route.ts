import { WebResult } from "@/lib/WebResult";
import userService from "../../../../backend/services/userService"

export async function POST(request: Request){
    try{
        const data = await request.json();
        const result = await userService.register(data);
        return Response.json(result);
    }catch(error: any){
        console.log("Registration error", error);
        return Response.json(new WebResult(
            error.message,
            1
        ))
    }
}


