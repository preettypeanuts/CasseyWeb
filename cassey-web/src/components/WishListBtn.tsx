'use client'

import BASE_URL from "@/app/BaseURL";
import { useState } from "react";

export const WishListBtn = ({ product }) => {

    const [loading, setLoading] = useState(false);

    const handleWishlist = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${BASE_URL}/api/wishlists/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ productId: product._id }),
                });

            if (response.ok) {
                console.log('Product added to wishlist!');
            } else {
                console.error('Failed to add product to wishlist');
            }
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <button
                onClick={handleWishlist}
                disabled={loading}
                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
            >
                {loading ? 'Adding to Wishlist...' : 'Add to Wishlist'}
            </button>
        </>
    )
}