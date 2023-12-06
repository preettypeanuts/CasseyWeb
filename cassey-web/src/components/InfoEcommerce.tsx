export const InfoEcommerce = () => {
    return (
        <>
            <div
                id="default-carousel"
                className="relative w-full h-full"
                data-carousel="slide"
            >
                {/* Carousel wrapper */}
                <div
                    className="relative h-full overflow-hidden rounded-[30px] mb-[0vh] shadow-customShadow"
                >
                    {/* Item 1 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://corporate.bestbuy.com/wp-content/uploads/2023/09/Casetify-blog-image.jpg"
                            className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 2 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://media.wonderlandmagazine.com/uploads/2022/06/L1660825-scaled.jpg"
                            className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 3 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://thepopinsider.com/wp-content/uploads/sites/6/2022/03/Casetify_PokemonXCasetifyCollection.jpg"
                            className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 4 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://www.billboard.com/wp-content/uploads/2022/02/Casetify-x-SpongeBob-collection.jpg?w=942&h=623&crop=1"
                            className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                    {/* Item 5 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://thepopinsider.com/wp-content/uploads/sites/6/2023/05/Casetify_PowerPuffGirlsFeatured.jpg"
                            className="brightness-100 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                </div>
                {/* Slider indicators */}
                <div
                    className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
                >
                    <button
                        type="button"
                        className="w-2 h-2 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                    ></button>
                    <button
                        type="button"
                        className="w-2 h-2 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                    ></button>
                    <button
                        type="button"
                        className="w-2 h-2 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to="2"
                    ></button>
                    <button
                        type="button"
                        className="w-2 h-2 rounded-full"
                        aria-current="false"
                        aria-label="Slide 4"
                        data-carousel-slide-to="3"
                    ></button>
                    <button
                        type="button"
                        className="w-2 h-2 rounded-full"
                        aria-current="false"
                        aria-label="Slide 5"
                        data-carousel-slide-to="4"
                    ></button>
                </div>
                {/* Slider controls */}
            </div>
        </>
    )
}