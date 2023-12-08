import { getProducts, pagination } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const data = await pagination()

    return NextResponse.json(data)
}