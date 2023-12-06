import { InfoEcommerce } from "./InfoEcommerce"

export const Banner = () => {
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
                                        <button
                                            type="button"
                                            className="text-black bg-transparent border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5 text-center shadow-customShadow"
                                        >
                                            See Our Products
                                        </button>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex flex-row overflow-auto scroll-smooth bg-white shadow-customShadow rounded-[30px] ml-9 mt-9 mb-9">
                                        <div className="animate-scroll flex flex-row">
                                            {/* eslint-disable-next-line */}
                                            <img
                                                src="https://cdn-image02.casetify.com/usr/16571/16546571/~v411/30295856x2_iphone-14-pro-max__color_white_16005227.png.1000x1000-w.m80.webp"
                                                alt=""
                                                className="w-[25vh] h-fit m-12"
                                            />
                                            <img
                                                src="https://cdn-image02.casetify.com/usr/16571/16546571/~v411/30295856x2_iphone-14-pro-max__color_white_16005227.png.1000x1000-w.m80.webp"
                                                alt=""
                                                className="w-[25vh] h-fit m-12"
                                            />
                                            <img
                                                src="https://cdn-image02.casetify.com/usr/16571/16546571/~v411/30295856x2_iphone-14-pro-max__color_white_16005227.png.1000x1000-w.m80.webp"
                                                alt=""
                                                className="w-[25vh] h-fit m-12"
                                            />
                                            <img
                                                src="https://cdn-image02.casetify.com/usr/16571/16546571/~v411/30295856x2_iphone-14-pro-max__color_white_16005227.png.1000x1000-w.m80.webp"
                                                alt=""
                                                className="w-[25vh] h-fit m-12"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <InfoEcommerce/>
                    </div>
                </div>
            </div>
        </>
    )
}