import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest){
    const { email, password } = await req.json();

    if(email === "user@email.com" && password === "12345"){
        return NextResponse.json({message: "Login successful", result: true}, {status: 200});
    }

    return NextResponse.json({message: "Invalid email or password", result: false}, {status: 401});
}