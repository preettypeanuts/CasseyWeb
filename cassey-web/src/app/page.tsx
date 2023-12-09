import { Banner } from "@/components/Banner"
import { CardHome } from "@/components/CardHome"
import { Navbar } from "@/components/Navbar"
import BASE_URL from "./BaseURL"


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


async function getFeaturedProducts() {

  const response = await fetch(`${BASE_URL}/api/featured`)
  const data = await response.json() as Product[]

  if (!data) throw new Error("No data found!")
  return data
}

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <>
      <Navbar>
        <Banner products={products} />
        <CardHome products={products} />
      </Navbar>
    </>
  )
}
