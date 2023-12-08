
import { Navbar } from "@/components/Navbar";
import { Wishlists } from "@/components/Wishlists";
import { Product } from "../products/page";
import BASE_URL from "../BaseURL";
import { cookies } from "next/headers";

export interface WishlistModel {
    _id: string;
    userId: string;
    productId: string;
    createdAt: string;
    updatedAt: string;
    wishListUser: Product[];
  };

  export interface WishhListProps {
    wishes: WishlistModel[]
}

 async function getWishlists() {
    const response = await fetch(`${BASE_URL}/api/wishlists/`, {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()
        }
    })
    const data = await response.json() as {
        statusCode: number;
        message: string;
        data: WishlistModel[]
    }

    if (!data) {
        throw new Error("Throw Error")
    }

    return data
 } 

export default async function WishListsPage() {
    const wishes = await getWishlists()
    // console.log(wishes.data, "<PRODUCT<<");
    // console.log(wishes.data[0].user, "<PRODUCT<<");
    /**
     * [
     *   {
     *     product: {}
     *   },
     * {
     *     product: {}
     *   },
     * {
     *     product: {}
     *   }
     * ]
     */
    return (
        <>
            <Navbar>
                <Wishlists wishes={wishes.data}/>
            </Navbar>
        </>
    )
}