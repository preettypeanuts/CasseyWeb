interface Product {
    thumbnail: string;
}

interface RunningImageProps {
    products: Product[];
}

export const RunningImage: React.FC<RunningImageProps> = ({ products }) => {
    const infiniteProducts: Product[] = [...products, ...products];

    return (
        <div className="w-[99vh] h-[37.5vh] overflow-hidden ml-9 mt-9 mb-9">
            <div className="flex flex-row h-full animate-scroll">
                {infiniteProducts.map((product, index) => (
                    <div key={index} className="flex-shrink-0">
                        <img
                            src={product.thumbnail}
                            alt="casetify"
                            className="object-cover h-full mx-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
