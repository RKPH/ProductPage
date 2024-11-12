import PropTypes from "prop-types";
import { Card } from "@mui/material";

const ProductCard = ({ srcSets, price, name, category, fallbackImage }) => {
    return (
        <Card className="flex-shrink-0 w-72 rounded-md border overflow-hidden hover:border-black mb-2 shadow-none">
            {/* Product Image */}
            <div className="relative aspect-square flex items-center justify-center bg-gray-100">
                <picture>
                    {srcSets.map((srcSet, index) => (
                        <source
                            key={index}
                            srcSet={srcSet.src}
                            media={srcSet.media}
                            width={srcSet.width}
                            height={srcSet.height}
                        />
                    ))}
                    {/* Fallback image if no srcSet matches */}
                    <img
                        src={fallbackImage}
                        alt={name}
                        loading="lazy"
                        fetchPriority="auto"
                        width="1050"
                        height="1400"
                    />
                </picture>
            </div>

            {/* Product Content */}
            <div className="p-1 px-3 text-left flex flex-col space-y-1">
                <span className="text-base font-medium truncate">{price}</span>
                <span className="text-base text-gray-800 font-bold truncate">{name}</span>
                <span className="text-sm text-gray-500">{category}</span>
            </div>
        </Card>
    );
};

// PropTypes validation to ensure proper props are passed
ProductCard.propTypes = {
    srcSets: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            media: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        })
    ).isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    fallbackImage: PropTypes.string.isRequired,
};

export default ProductCard;
