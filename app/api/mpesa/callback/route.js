// app/api/mpesa/callback.js

import { NextResponse } from "next/server";

export async function POST(req) {
  const {body}= await req.json();
  try {
    // Handle the callback logic
    console.log("M-Pesa Callback Received:", body);

if(body.stkCallback.ResultCode!=='0'){
return NextResponse.json("error",{status:400})
}

    // You can add logic here to verify the payment, log it, etc
const mpesametadata=body.stkCallback.CallbackMetadata

    return NextResponse.json(mpesametadata, { status: 200 });
  } catch (error) {
    console.log(error);
return NextResponse.json(error,{status:400})
  }
}
