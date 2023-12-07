import { ListProducts } from "@/components/ListProducts"
import { Navbar } from "@/components/Navbar"
import { SearchBar } from "@/components/SearchBar"
import BASE_URL from "@/app/BaseURL"

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

export interface DetailProductProps {
    product: Product
}

async function getProducts() {
    const response = await fetch(`${BASE_URL}/products`)
    const data = await response.json() as Product
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
