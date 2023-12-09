import BASE_URL from "@/app/BaseURL";
import { useState } from "react";
import Swal from 'sweetalert2';

interface Product {
    _id: string;
}

interface WishListBtnProps {
    product: Product;
}

export const WishListBtn: React.FC<WishListBtnProps> = ({ product }) => {
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
                }
            );

            if (response.ok) {
                console.log('Product added to wishlist!');
                Swal.fire({
                    icon: 'success',
                    title: 'Item Added to Wishlist',
                    showConfirmButton: false,
                    timer: 1500 
                });
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
                <i className="bx bx-love" />
            </button>
        </>
    )
}
