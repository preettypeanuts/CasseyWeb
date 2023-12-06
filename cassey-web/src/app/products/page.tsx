import { ListProducts } from "@/components/ListProducts"
import { Navbar } from "@/components/Navbar"
import { SearchBar } from "@/components/SearchBar"

export default function Home() {
    return (
        <>
            <Navbar>
                <ListProducts />
            </Navbar>
        </>
    )
}
