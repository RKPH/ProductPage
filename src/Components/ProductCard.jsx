<<<<<<< HEAD
// ProductCard.jsx
import PropTypes from "prop-types";
import { FavoriteBorder } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";

const ProductCard = ({ imgSrc, price, name, category }) => {
  return (
    <Card className="flex-shrink-0 w-72  rounded-md border overflow-hidden hover:border-black mb-2 shadow-none">
      {/* Product Image */}
      <div className="relative aspect-square">
        <img
          src={imgSrc}
          alt={name}
          className="object-cover bg-gray-100 h-full w-full"
        />
      </div>

      {/* Product Content */}
      <div className="p-1 px-3 text-left flex flex-col space-y-1">
        <span className="text-base font-medium truncate">{price}</span>
        <span className="text-base text-gray-800 font-bold truncate">
          {name}
        </span>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
    </Card>
  );
=======
import PropTypes from "prop-types";
import {Card} from "@mui/material";

const ProductCard = ({srcSets, price, name, category, fallbackImage}) => {
    return (
        <Card className="flex-shrink-0 w-72 rounded-md border overflow-hidden hover:border-black mb-2 shadow-none">
            {/* Product Image */}
            <div className="relative aspect-square flex items-center justify-center bg-gray-100">
                <picture>
                    {srcSets && srcSets.length > 0 ? (
                        srcSets.map((srcSet, index) => (
                            <source
                                key={index}
                                srcSet={srcSet.src}
                                media={srcSet.media}
                                width={srcSet.width}
                                height={srcSet.height}
                            />
                        ))
                    ) : (
                        <source srcSet={fallbackImage}/>
                    )}
                    <img
                        src={srcSets && srcSets.length > 0 ? srcSets[0].src : fallbackImage}
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
>>>>>>> 8cd5f8596bc9f779a62db2d231f0db21463bffa4
};

// PropTypes validation to ensure proper props are passed
ProductCard.propTypes = {
<<<<<<< HEAD
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
=======
    srcSets: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            media: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        })
    ),
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    fallbackImage: PropTypes.string.isRequired,
};

// Default props to handle empty srcSets
ProductCard.defaultProps = {
    srcSets: [],
>>>>>>> 8cd5f8596bc9f779a62db2d231f0db21463bffa4
};

export default ProductCard;
