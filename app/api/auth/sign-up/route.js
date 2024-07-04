import { NextResponse } from "next/server";

export const POST=async(req)=>{
    try {
        const {firstname,lastname,email,password}=await req.json();

        if(!firstname || !lastname || !email || !password){
            return NextResponse.json({err:"check your fields"},{status:400})
        }

        // CHECK THE EMAIL ADDRESS IF IT ALREADY EXISTS
        

        // HASH THE PASSWORD 

        // CREATE THE USER INTO THE DATABASE
        
    } catch (error) {
        console.log(error)
    }
}