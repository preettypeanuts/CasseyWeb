
import { RemoveBtn } from "./RemoveBtn"
import { WishListBtn } from "./WishListBtn"
import Link from "next/link"

export const WishListCard = ({wish}) => {
    // console.log(wish);
    
    return (
        <>
            <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={`/products/${wish._id}/`}>
                    <img
                        className="p-8 rounded-t-lg"
                        src={wish.thumbnail}
                        alt="wish image"
                    />
                </Link>
                <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                    <a href="#" className="h-[20vh] max-h-30">
                        <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                            {wish?.name}
                        </h5>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {wish.excerpt}
                        </h5>
                    </a>
                    <div className="flex items-center justify-between pt-2 pt-2">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${wish.price} USD
                        </p>
                        <button className="">
                            <i className="bx bx-heart bx-sm" />
                        </button>
                    </div>
                    <RemoveBtn/>
                </div>
            </div>
        </>
    )
}