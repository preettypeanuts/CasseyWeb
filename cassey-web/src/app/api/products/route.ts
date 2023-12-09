import { pagination, searchProduct } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    
    const { searchParams } = new URL(request.url);
    
    let search = searchParams.get("search");
    
    if (!search) {
        search = "";
    }
    const data = await pagination(search)
    
    //   const products = await searchProduct(search);

    return NextResponse.json(data)
}


