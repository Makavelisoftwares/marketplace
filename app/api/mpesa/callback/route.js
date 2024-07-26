// app/api/mpesa/callback.js

import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  try {
    // Handle the callback logic
    console.log("M-Pesa Callback Received:", body);

    // You can add logic here to verify the payment, log it, etc.

    return NextResponse.json("Callback received", { status: 200 });
  } catch (error) {
    console.log(error);
return NextResponse.json(error,{status:400})
  }
}
