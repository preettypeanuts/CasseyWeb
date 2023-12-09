export const CardHome = ({ products }) => {

    return (
        <>
            <div id="list" className="justify-center align-middle flex">
                <p className="flex text-[6vh] text-black font-black font-serif mt-20">
                    Our Cases Collections
                </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center px-4 gap-10">
                {products.map((product, index) => (
                    <div key={index} className="transition duration-500 ease-in-out transform hover:scale-105 w-[35vh] max-w-sm bg-white rounded-[30px] shadow-customShadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/products">
                            <img
                                className="p-8 rounded-t-lg"
                                src={product.thumbnail}
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5 justify-center align-middle flex flex-col">
                            <a href="#" className="h-[10vh] max-h-30">
                                <h5 className="text-[25px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {product.name}
                                </h5>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">

                                </h5>
                            </a>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {product.price} USD
                                </p>
                            </div>
                            <a
                                href="#"
                                className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-500 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                ))}

            </div>
            <div className="w-full justify-center flex pl-[17vh] pr-[17vh] pt-[5vh] pb-24">
                <a
                    href="products"
                    className="w-full mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-yellow-100 to-pink-400 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
                >
                    See All
                </a>
            </div>
        </>
    )
}