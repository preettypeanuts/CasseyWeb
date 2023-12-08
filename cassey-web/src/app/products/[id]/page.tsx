import BASE_URL from "@/app/BaseURL";
import { DetailProduct } from "@/components/DetailProduct";
import { Navbar } from "@/components/Navbar";
import { Product } from "../page";
import { cookies } from "next/headers";

async function getProductById(id: string): Promise<Product> {
    const response = await fetch(`${BASE_URL}/api/products/${id}/`,{
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()
        }
    })
    const data = await response.json()
    
    if (!data) {
        throw new Error("Throw Error") 
    }

    return data

}

type Props = {
    params: {
        id: string
    }
}

export default async function ProductDetail({ params }: Props) {
    const product = await getProductById(params.id)
    return (
        <>
            <Navbar>
                <DetailProduct product={product} />
            </Navbar>
        </>
    )
}