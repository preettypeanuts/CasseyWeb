import { ListProducts } from "@/components/ListProducts"
import { Navbar } from "@/components/Navbar"

export default function Home() {
    return (
        <>
            <Navbar>
                <ListProducts />
            </Navbar>
        </>
    )
}
