import { useEffect, useState } from "react";
import { RemoveBtn } from "./RemoveBtn";
import Link from "next/link";
import BASE_URL from "@/app/BaseURL";

interface Wish {
    _id: string;
    thumbnail: string;
    name: string;
    excerpt: string;
    price: number;
}

interface WishListCardProps {
    wish: Wish;
    updateWishlist: Wish[];
}

export const WishListCard: React.FC<WishListCardProps> = ({ wish, updateWishlist }) => {
    const [loading, setLoading] = useState(false);
    const [wishlist, setWishlist] = useState<Wish[]>([]);

    useEffect(() => {
        setWishlist(updateWishlist);
    }, [updateWishlist]);

    const handleRemove = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${BASE_URL}/api/wishlists/`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ productId: wish._id }),
                }
            );

            if (response.ok) {
                console.log('Wishlist item removed!');
                const updatedWishlist = wishlist.filter(item => item?._id !== wish?._id);
                setWishlist(updatedWishlist);
            } else {
                console.error('Failed to remove wishlist item');
            }
        } catch (error) {
            console.error('Error removing wishlist item:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={`/products/${wish?._id}/`}>
                    <img
                        className="p-8 rounded-t-lg"
                        src={wish?.thumbnail}
                        alt="wish image"
                    />
                </Link>
                <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                    <a href="#" className="h-[20vh] max-h-30">
                        <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                            {wish?.name}
                        </h5>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {wish?.excerpt}
                        </h5>
                    </a>
                    <div className="flex items-center justify-between pt-2 pt-2">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${wish?.price} USD
                        </p>
                        <button className="">
                            <i className="bx bx-heart bx-sm" />
                        </button>
                    </div>
                    <RemoveBtn handleRemove={handleRemove} />
                </div>
            </div>
        </>
    );
};
