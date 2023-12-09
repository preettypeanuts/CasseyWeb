export const RunningImage = ({ products }) => {
    const infiniteProducts = [...products, ...products]; // Duplikasi array produk untuk tampilan scroll yang tak terbatas

    return (
        <div>
            <div className="w-[99vh] h-[37.5vh] flex flex-row overflow-auto scroll-smooth bg-white shadow-customShadow rounded-[30px] ml-9 mt-9 mb-9">
                {infiniteProducts.map((product, index) => (
                    <div key={index} className="animate-scroll flex flex-row">
                        {/* eslint-disable-next-line */}
                        <img
                            src={product.thumbnail}
                            alt="casetify"
                            className="object-cover justify-around m-12"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
