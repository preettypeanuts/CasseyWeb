import BASE_URL from "@/app/BaseURL";
import { DetailProduct } from "@/components/DetailProduct";
import { Navbar } from "@/components/Navbar";

async function getProductById(id: string): Promise<Product> {
    const response = await fetch(`${BASE_URL}/api/products/${id}/`)
    const data = await response.json()
    return data
}

type Props = {
    params: {
        id: string
    }
}

export default async function ProductDetail({ params }: Props) {
    const product = await getProductById(params.id)
    // console.log('====================================');
    // console.log(product);
    // console.log('====================================');
    return (
        <>
            <Navbar>
                <DetailProduct product={product} />
            </Navbar>
        </>
    )
}