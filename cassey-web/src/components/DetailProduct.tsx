export const DetailProduct = () => {
    return (
        <>
            <div className="w-screen h-screen">
                <div className="pl-[0vh] pr-[15vh] pt-[15vh] flex flex-col">
                    <div className="bg-transparent rounded-[30px] dark:bg-gray-800 dark:border-gray-700 flex">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg h-auto max-w-lg"
                                src="https://cdn-image02.casetify.com/usr/29073/1469073/~v6692/15349384x2_iphone-15-pro__color_natural-titanium_16005986.png.1000x1000-w.m80.webp"
                                alt="product image"
                            />
                        </a>
                        <div className="mt-[39px]">
                            <p className="flex text-[6vh] text-black font-black font-serif">
                                Cherry Blossom Gradient
                            </p>
                            <a href="#">
                                <p className="text-justify">
                                    Ultra Impact Case dari Casetify adalah pilihan terbaik untuk
                                    perlindungan maksimal smartphone tanpa mengorbankan gaya. Dibuat
                                    dari bahan polikarbonat dan TPU yang tahan lama, case ini
                                    menawarkan perlindungan tambahan terhadap benturan dan jatuh.
                                    Teknologi QiTech™-nya mampu melindungi smartphone dari jatuh
                                    hingga 9.8 kaki tanpa menambah bobot berlebihan. Dengan desain
                                    yang stylish dan motif menarik, case ini tidak hanya berfungsi
                                    sebagai perlindungan, tetapi juga sebagai aksesori fashion yang
                                    menambah gaya pada perangkat Anda.
                                </p>
                                <div className="pt-2">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-xl font-bold text-gray-900 dark:text-white"
                                    >
                                        Select model
                                    </label>
                                    <select
                                        id="countries"
                                        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option selected="">iPhone 15 Promax</option>
                                        <option value="US">iPhone 14 Promax</option>
                                        <option value="CA">iPhone 13 Promax</option>
                                        <option value="FR">iPhone 12 Promax</option>
                                        <option value="DE">iPhone 11 Promax</option>
                                    </select>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white pt-2">
                                    $80 USD
                                </p>
                            </a>
                            <div className="pt-2">
                                <a href="#"></a>
                                <a
                                    href="#"
                                    className="mt-2 mr-4 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                                >
                                    <i className="bx bx-cart-add" />
                                    Add to cart
                                </a>
                                <button
                                    href="#"
                                    className="mt-2 mr-4 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                                >
                                    <i className="bx bx-heart " />
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-[15vh] pr-[15vh] pt-[5vh] pb-[5vh] flex flex-col justify-around">
                    <p className="flex text-[4vh] text-black font-semibold font-Montserrat mb-5">
                        Check other casses
                    </p>
                    <div className="space-x-44">
                        <div className="flex flex-row around overflow-auto scroll-smooth p-8">
                            <div className="flex flex-row">
                                <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700 mr-6">
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
                                    </div>
                                </div>
                                <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700 mr-6">
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
                                            <h5 className="text-xl font-semiƒbold tracking-tight text-gray-900 dark:text-white">
                                                Cherry Blossom Gradient
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                                <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700 mr-6">
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
                                    </div>
                                </div>
                                <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700 mr-6">
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
                                    </div>
                                </div>
                                <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700 mr-6">
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
                                    </div>
                                </div>
                                <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700 mr-6">
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
                                    </div>
                                </div>
                                <div className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700 mr-6">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}