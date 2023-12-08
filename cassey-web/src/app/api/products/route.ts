import { getProducts } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const data = await getProducts()

    // console.log('====================================');
    console.log(request.headers.get("x-user-id"), "<<<INI");
    // console.log('====================================');

    return NextResponse.json(data)
}