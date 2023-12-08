'use client'

import { WishlistModel } from "@/db/models/wishlists";
import { WishListCard } from "./WishListCard"

export const Wishlists = ({ wishes }: {
    wishes: WishlistModel[]
}) => {

    return (
        <>
            <div className="w-screen h-screen">
                <div className="pl-[15vh]">
                    <p className="flex text-[5vh] text-black font-black font-serif mt-20">
                        {wishes[0].user.name} Wish list
                    </p>
                </div>
                <div className="mt-10 flex flex-wrap justify-center px-4 gap-10">

                    {wishes.map(wish => {
                        return <WishListCard key={wish._id} wish={wish.product} />
                    })}

                </div>
            </div>
        </>
    )
}