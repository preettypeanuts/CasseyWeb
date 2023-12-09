'use client'
import { useEffect, useState } from 'react';
import { InfiniteScrollBar } from './InfiniteScroll';
import { Product } from '@/app/products/page';
import { SingleCard } from './SingleCard';
import { SearchBar } from './SearchBar';
import BASE_URL from '@/app/BaseURL';

type Props = {
    products: Product[];
};

export const ListProducts = ({ products }: Props) => {
    const [items, setItems] = useState<Product[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/products/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const data = await response.json();
                setItems(prevItems => [...prevItems, ...data]);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight * 0.8) {
            fetchData(); // Panggil fetchData untuk memuat data tambahan
        }
    };

    const handleSearch = (searchQuery) => {
        // Filter products based on the search query
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setItems(filteredProducts);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="w-screen h-screen">
                <div className="pl-[15vh]">
                    <p className="flex text-[6vh] text-black font-black font-serif mt-20">All Products</p>
                </div>
                <SearchBar onSearch={handleSearch}/>

                <InfiniteScrollBar
                    dataLength={items.length}
                    fetchData={fetchData}
                    hasMore={hasMore}
                >
                    <div className="mt-10 flex flex-wrap justify-center px-4 gap-10">
                        {/* Menampilkan produk */}
                        {items.map((product) => (
                            <SingleCard key={product?.id} product={product} />
                        ))}
                    </div>
                </InfiniteScrollBar>

                <div className="w-full justify-center flex pl-[17vh] pr-[17vh] pt-[5vh] pb-24">
                    <button
                        onClick={fetchData}
                        className="w-full mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-400 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                    >
                        Load More
                    </button>
                </div>
            </div>
        </>
    );
};
