import { getFeaturedProducts, pagination } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {

    const data = await getFeaturedProducts()

    return NextResponse.json(data)
}