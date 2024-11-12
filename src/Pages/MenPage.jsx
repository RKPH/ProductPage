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
            src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/sportswear_fw24_zne_launch_mglp_carousel_mini_lookbook_4_d_b322bb6282.jpg",
            media: "(min-width: 960px)",
            width: 1050,
            height: 1400,
        },
        {
            src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/sportswear_fw24_zne_launch_mglp_carousel_mini_lookbook_4_t_2471e36eca.jpg",
            media: "(min-width: 768px)",
            width: 1050,
            height: 1400,
        },
        {
            src: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_300,w_300/sportswear_fw24_zne_launch_mglp_carousel_mini_lookbook_4_m_357ee2cb53.jpg",
            media: "(max-width: 767px)",
            width: 1050,
            height: 1400,
        }
    ];

    const products = [
        {
            name: "Gazelle Men Shoes",
            price: "1,500,000₫",
            category: "Shoes",
            srcSets: srcSets,
            fallbackImage: "https://assets.adidas.com/images/w_600,f_auto,q_auto/35f43811659f42d8bbfe9ed485c526cb_9366/Giay_Gazelle_Ngoc_lam_IG1061_01_standard.jpg",
        },
        {
            name: "Men's Sports T-shirt",
            price: "350,000₫",
            category: "T-Shirts",
            srcSets: srcSets,
            fallbackImage: "https://assets.adidas.com/images/w_600,f_auto,q_auto/35f43811659f42d8bbfe9ed485c526cb_9366/Giay_Gazelle_Ngoc_lam_IG1061_01_standard.jpg",
        },
        {
            name: "Men's Training Shorts",
            price: "450,000₫",
            category: "Shorts",
            srcSets: srcSets,
            fallbackImage: "https://assets.adidas.com/images/w_600,f_auto,q_auto/35f43811659f42d8bbfe9ed485c526cb_9366/Giay_Gazelle_Ngoc_lam_IG1061_01_standard.jpg",
        },
        // Add more products here
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
