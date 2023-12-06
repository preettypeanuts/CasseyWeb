export const ListProducts = () => {
    return (
        <>
            <div className="w-screen h-screen">
                <div className="pl-[15vh]">
                    <p className="flex text-[6vh] text-black font-black font-serif mt-20">
                        All Products
                    </p>
                </div>
                <form className="pl-[15vh] pr-[15vh]">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Device, Model..."
                            required=""
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <div className="pl-[15vh] pr-[15vh] pt-[5vh] flex flex-row justify-around">
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/detail-product">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2 pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pl-[15vh] pr-[15vh] pt-[5vh] flex flex-row justify-around">
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                    <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    IPhone
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Cherry Blossom Gradient
                                </h5>
                            </a>
                            <div className="flex items-center justify-between pt-2">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $80 USD
                                </p>
                                <button className="">
                                    <i className="bx bx-heart bx-sm" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-center flex pl-[17vh] pr-[17vh] pt-[5vh] pb-24">
                    <a
                        href="#"
                        className="w-full mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-400 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                    >
                        Load More
                    </a>
                </div>
            </div>
        </>
    )
}