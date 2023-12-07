import BASE_URL from "@/app/BaseURL";
import { Product } from "../page";
import { DetailProduct } from "@/components/DetailProduct";

async function getProductById(id: string): Promise<Product> {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    const data = await response.json()
    return data
}

type Props = {
    params: {
        id: string
    }
}

export default async function ProductDetail({params}: Props) {
    const product = await getProductById(params.id)
    console.log('====================================');
    console.log(product);
    console.log('====================================');
    return (
        <>
            <DetailProduct product={product}/>
        </>
    )
}