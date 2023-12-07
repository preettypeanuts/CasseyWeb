// 'use client'
// import { InfiniteScrollBar } from "./InfiniteScroll"
import { Product } from "@/app/products/page"
import { SearchBar } from "./SearchBar"
import { SingleCard } from "./SingleCard"
import { WishListBtn } from "./WishListBtn"

type Props = {
    products: Product[]
}

export const ListProducts = ({products}: Props) => {
    return (
        <>
            <div className="w-screen h-screen">
                <div className="pl-[15vh]">
                    <p className="flex text-[6vh] text-black font-black font-serif mt-20">
                        All Products
                    </p>
                </div>
                <SearchBar />
                {/* <InfiniteScrollBar> */}
                <div className="mt-10 flex flex-wrap justify-center px-4 gap-10">
                    {products.map(product =>{
                        return <SingleCard key={product.slug} product={product}/>
                    })}
                    
                </div>
                {/* </InfiniteScrollBar> */}
                <div className="w-full justify-center flex pl-[17vh] pr-[17vh] pt-[5vh] pb-24">
                    <a
                        href="#"
                        className="w-full mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-400 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5">
                        Load More
                    </a>
                </div>
            </div>
        </>
    )
}