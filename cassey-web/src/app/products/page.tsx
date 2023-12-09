"use server"

import { ListProducts } from "@/components/ListProducts"
import { Navbar } from "@/components/Navbar"
import { SearchBar } from "@/components/SearchBar"
import BASE_URL from "@/app/BaseURL"
import { cookies } from "next/headers"

export interface Product {
    _id: string,
    name: string
    slug: string
    description: string
    price: number
    excerpt: string
    tags: string[]
    thumbnail: string
    images: string[]
    createdAt: string
    updatedAt: string
}

export interface ProductDetail {
    message: string,
    data: {
        _id: string,
        name: string
        slug: string
        description: string
        price: number
        excerpt: string
        tags: string[]
        thumbnail: string
        images: string[]
        createdAt: string
        updatedAt: string
    }
}

export interface DetailProductProps {
    product: Product
}

async function getProducts() {
    const response = await fetch(`${BASE_URL}/api/products/`, {
        cache: "no-store",
    })
    const data = await response.json() as Product[]

    if (!data) {
        throw new Error("Throw Error")
    }

    return data
}



export default async function Home() {
    const products = await getProducts()

    return (
        <>
            <Navbar>
                <ListProducts products={products} />
            </Navbar>
        </>
    )
}
