import { useState } from "react";
import { useRef } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MenPage = () => {
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);
    const listRef = useRef(null);

    const srcSets = [
        {
            src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/originals_fw24_100thieves_2_launch_com_ct_d_ab4bfb5538.jpg",
            media: "(min-width: 960px)",
            width: 1050,
            height: 1400,
        },
        {
            src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/originals_fw24_100thieves_2_launch_com_ct_t_9181f0eb23.jpg",
            media: "(min-width: 768px)",
            width: 1050,
            height: 1400,
        },
        {
            src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/originals_fw24_100thieves_2_launch_com_ct_m_cd95ba6d4d.jpg",
            media: "(max-width: 767px)",
            width: 1050,
            height: 1400,
        }
    ];

    const products = [
        {
            name: "Messi Training Jersey",
            price: "700,000₫",
            category: "Sportswear",
            srcSets: srcSets,
            fallbackImage:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/image_large.jpg",
        },
        {
            name: "Brand Love Backpack",
            price: "650,000₫",
            category: "Accessories",
            srcSets: srcSets,
            fallbackImage:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/image_large.jpg",
        },
        {
            name: "Marvel Avengers Backpack",
            price: "800,000₫",
            category: "Backpack",
            srcSets: srcSets,
            fallbackImage:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/image_large.jpg",
        },
        {
            name: "Tiro Tee Women",
            price: "700,000₫",
            category: "Women’s T-Shirts",
            srcSets: srcSets,
            fallbackImage:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/image_large.jpg",
        },
        {
            name: "New Sports Shoe",
            price: "1,000,000₫",
            category: "Shoes",
            srcSets: srcSets,
            fallbackImage:
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/image_large.jpg",
        }
    ];

    const handleScroll = () => {
        const list = listRef.current;
        setShowPrev(list.scrollLeft > 0);
        setShowNext(list.scrollWidth > list.scrollLeft + list.clientWidth);
    };

    const scrollLeft = () => {
        listRef.current.scrollBy({ left: -600, behavior: "smooth" });
    };

    const scrollRight = () => {
        listRef.current.scrollBy({ left: 600, behavior: "smooth" });
    };

    return (
        <div className="Men-page">
            {/* Hero Section */}
            <div className="w-full h-auto relative mb-16">
                <div className="_fill-image_154ez_1" data-auto-id="picture">
                    <picture>
                        <source
                            srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_DESKTOP_2880x1200_4da173f07b.jpg"
                            media="(min-width: 960px)" width="2880" height="1200"/>
                        <source
                            srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_TABLET_1600x1600_18cf7b83ec.jpg"
                            media="(min-width: 768px)" width="1600" height="1600"/>
                        <source
                            srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_768,w_768/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_MOBILE_750x1000_f4f6ca6950.jpg"
                            media="(max-width: 767px)" width="750" height="1000"/>
                        <img
                            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_DESKTOP_2880x1200_4da173f07b.jpg"
                            alt="" loading="lazy" fetchPriority="auto"/>
                    </picture>
                </div>
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center space-y-4">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">
                        ADIDAS Z.N.E. MEN
                    </h1>
                    <button
                        className="bg-white text-black py-2 px-6 text-lg font-semibold rounded hover:bg-gray-300 transition-all duration-300">
                        SHOP MEN'S SPORTSWEAR
                    </button>
                </div>
            </div>

            {/* Product Section */}
            <div className="p-4 relative">
                <h2 className="text-center text-3xl font-bold mb-6">Top Sellers</h2>

                {/* Slider Wrapper */}
                <div className="flex w-full items-center justify-center mt-2 relative">
                    {showPrev && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 z-10 p-4 px-5 bg-white text-black border border-black">
                            <ArrowBackIcon/>
                        </button>
                    )}

                    <ul
                        ref={listRef}
                        onScroll={handleScroll}
                        className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar">
                        {products.slice(0, 10).map((product, index) => (
                            <ProductCard
                                key={index}
                                srcSets={product.srcSets}
                                price={product.price}
                                name={product.name}
                                category={product.category}
                                fallbackImage={product.fallbackImage}
                            />
                        ))}
                    </ul>

                    {showNext && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 z-10 p-4 px-5 bg-white text-black border border-black">
                            <ArrowForwardIcon />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenPage;
