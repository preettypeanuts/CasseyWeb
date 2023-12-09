import { RunningImage } from "./RunningImage"
import { InfoEcommerce } from "./InfoEcommerce"

export const Banner = ({products}) => {
    return (
        <>
            <div className="w-screen h-screen justify-center align-middle flex">
                <div className="relative">
                    <div className="w-[150vh] h-[40vh]">
                        {/* Tagline */}
                        <div className="">
                            <div className="flex flex-row mt-16">
                                <div className="min-w-min flex-col items-center">
                                    <h1 className="flex text-[13vh] text-black font-black mt-[] font-serif">
                                        cassey
                                    </h1>
                                    <h6 className="flex text-[2.2vh] font-regular text-gray-600 max-w-[50vh] right-8 mb-8 text-right">
                                        Discover the Fusion of Fashion and Functionality with Cssey,
                                        Crafting Tech Accessories That Elevate Your Style and Safeguard
                                        Your Devices
                                    </h6>
                                    <div className="flex justify-end">
                                        <a
                                            href="#list"
                                            type="button"
                                            className="text-black bg-transparent border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5 text-center shadow-customShadow"
                                        >
                                            See Our Products
                                        </a>
                                    </div>
                                </div>
                              <RunningImage products={products}/>
                            </div>
                        </div>
                        <InfoEcommerce />
                    </div>
                </div>
            </div>
        </>
    )
}