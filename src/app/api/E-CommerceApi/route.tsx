import { ProductData } from "@/app/ApiData/EcommerceData";
import { NextResponse } from "next/server";

export async function GET(req:Request){
  return NextResponse.json(ProductData)

}