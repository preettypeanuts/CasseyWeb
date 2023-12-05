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
                                    <h6 className="flex text-[2.2vh] font-thin text-gray-600 max-w-[50vh] right-8 mb-8 text-right">
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
                        <div
                            id="default-carousel"
                            className="relative w-full h-full"
                            data-carousel="slide"
                        >
                            {/* Carousel wrapper */}
                            <div className="relative h-full overflow-hidden rounded-[30px] mb-[0vh] shadow-customShadow">
                                {/* Item 1 */}
                                <div
                                    className="hidden duration-700 ease-in-out"
                                    data-carousel-item=""
                                >
                                    <img
                                        src="https://corporate.bestbuy.com/wp-content/uploads/2023/09/Casetify-blog-image.jpg"
                                        className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt="..."
                                    />
                                </div>
                                {/* Item 2 */}
                                <div
                                    className="hidden duration-700 ease-in-out"
                                    data-carousel-item=""
                                >
                                    <img
                                        src="https://media.wonderlandmagazine.com/uploads/2022/06/L1660825-scaled.jpg"
                                        className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt="..."
                                    />
                                </div>
                                {/* Item 3 */}
                                <div
                                    className="hidden duration-700 ease-in-out"
                                    data-carousel-item=""
                                >
                                    <img
                                        src="https://thepopinsider.com/wp-content/uploads/sites/6/2022/03/Casetify_PokemonXCasetifyCollection.jpg"
                                        className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt="..."
                                    />
                                </div>
                                {/* Item 4 */}
                                <div
                                    className="hidden duration-700 ease-in-out"
                                    data-carousel-item=""
                                >
                                    <img
                                        src="https://www.billboard.com/wp-content/uploads/2022/02/Casetify-x-SpongeBob-collection.jpg?w=942&h=623&crop=1"
                                        className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt="..."
                                    />
                                </div>
                                {/* Item 5 */}
                                <div
                                    className="hidden duration-700 ease-in-out"
                                    data-carousel-item=""
                                >
                                    <img
                                        src="https://thepopinsider.com/wp-content/uploads/sites/6/2023/05/Casetify_PowerPuffGirlsFeatured.jpg"
                                        className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            {/* Slider indicators */}
                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button
                                    type="button"
                                    className="w-2 h-2 rounded-full"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    data-carousel-slide-to={0}
                                />
                                <button
                                    type="button"
                                    className="w-2 h-2 rounded-full"
                                    aria-current="false"
                                    aria-label="Slide 2"
                                    data-carousel-slide-to={1}
                                />
                                <button
                                    type="button"
                                    className="w-2 h-2 rounded-full"
                                    aria-current="false"
                                    aria-label="Slide 3"
                                    data-carousel-slide-to={2}
                                />
                                <button
                                    type="button"
                                    className="w-2 h-2 rounded-full"
                                    aria-current="false"
                                    aria-label="Slide 4"
                                    data-carousel-slide-to={3}
                                />
                                <button
                                    type="button"
                                    className="w-2 h-2 rounded-full"
                                    aria-current="false"
                                    aria-label="Slide 5"
                                    data-carousel-slide-to={4}
                                />
                            </div>
                            {/* Slider controls */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}