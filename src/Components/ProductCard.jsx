// ProductCard.jsx
import PropTypes from "prop-types";

import { Card } from "@mui/material";

const ProductCard = ({ image, price, name, category }) => {
    return (
        <Card className="flex-shrink-0 w-72 rounded-md border overflow-hidden hover:border-black mb-2 shadow-none">
            {/* Product Image */}
            <div className="relative aspect-square flex items-center justify-center bg-gray-100">
                <picture>

                    <source
                        srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/sportswear_fw24_zne_launch_mglp_carousel_mini_lookbook_4_d_b322bb6282.jpg"
                        media="(min-width: 960px)" width="1050" height="1400"/>


                    <source
                        srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/sportswear_fw24_zne_launch_mglp_carousel_mini_lookbook_4_t_2471e36eca.jpg"
                        media="(min-width: 768px)" width="1050" height="1400"/>


                    <source
                        srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/sportswear_fw24_zne_launch_mglp_carousel_mini_lookbook_4_m_357ee2cb53.jpg"
                        media="(max-width: 767px)" width="1050" height="1400"/>


                    <img
                        src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/sportswear_fw24_zne_launch_mglp_carousel_mini_lookbook_4_d_b322bb6282.jpg"
                        alt="" loading="lazy" fetchPriority="auto"/>
                </picture>

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
};

// PropTypes validation to ensure proper props are passed
ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default ProductCard;