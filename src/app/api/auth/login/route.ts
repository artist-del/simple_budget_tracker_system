import userService from "@/backend/services/userService";
import { WebResult } from "@/lib/WebResult";




export async function POST(request: Request){
    try{
        const data = await request.json();
        const result = await userService.login(data);
        return Response.json(result);
    }catch(error: any){
        return Response.json(new WebResult(
            error.message,
            1
        ))
    }
}


