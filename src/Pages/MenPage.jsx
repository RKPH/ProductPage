import { useState } from "react";
import { useRef } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MenPage = () => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const listRef = useRef(null);

  const [showPrev2, setShowPrev2] = useState(false);
  const [showNext2, setShowNext2] = useState(true);
  const listRef2 = useRef(null);

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
    },
  ];

  const products = [
    {
      name: "Messi Training Jersey",
      price: "700,000₫",
      category: "Sportswear",
      srcSets: srcSets,
      fallbackImage:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    },
    {
      name: "Brand Love Backpack",
      price: "650,000₫",
      category: "Accessories",
      srcSets: srcSets,
      fallbackImage:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    },
    {
      name: "Marvel Avengers Backpack",
      price: "800,000₫",
      category: "Backpack",
      srcSets: srcSets,
      fallbackImage:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    },
    {
      name: "Tiro Tee Women",
      price: "700,000₫",
      category: "Women’s T-Shirts",
      srcSets: srcSets,
      fallbackImage:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    },
    {
      name: "New Sports Shoe",
      price: "1,000,000₫",
      category: "Shoes",
      srcSets: srcSets,
      fallbackImage:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    },
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

  const handleScroll2 = () => {
    const list2 = listRef2.current;
    setShowPrev2(list2.scrollLeft > 0);
    setShowNext2(list2.scrollWidth > list2.scrollLeft + list2.clientWidth);
  };

  const scrollLeft2 = () => {
    listRef2.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight2 = () => {
    listRef2.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="Men-page">
      <div className="w-full h-auto relative mb-16">
        {/* Banner */}
        <div className="_fill-image_154ez_1" data-auto-id="picture">
          <picture>
            <source
              srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4985239_Mini_Masthead_DT_2880x720_1_4869aa5588.jpg"
              media="(min-width: 960px)"
              width="2880"
              height="720"
            />
            <source
              srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/4985239_Mini_Masthead_MO_720x920_15614a9463.jpg"
              media="(min-width: 768px)"
              width="720"
              height="920"
            />
            <source
              srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_768,w_768/4985239_Mini_Masthead_MO_720x920_770a023e6d.jpg"
              media="(max-width: 767px)"
              width="720"
              height="920"
            />
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4985239_Mini_Masthead_DT_2880x720_1_4869aa5588.jpg"
              alt=""
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Overlay content positioned at the top-left corner */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-start p-8 space-y-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            CITY ESCAPE
          </h1>
          <p className="text-white text-lg">
            Outdoor-inspired styles for city-wide adventures.
          </p>
          <button className="bg-white text-black py-2 px-6 text-lg font-semibold rounded hover:bg-gray-300 transition-all duration-300 flex items-center gap-2">
            SHOP NOW <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Product Section  01 */}
      <div className="p-4 relative">
        <h2 className="text-center text-3xl font-bold mb-6">Top Sellers</h2>
        {/* Slider Wrapper */}
        <div className="flex w-full items-center justify-center mt-2 relative">
          {showPrev2 && (
            <button
              onClick={scrollLeft2}
              className="absolute left-0 z-10 p-4 px-5 bg-white text-black border border-black"
            >
              <ArrowBackIcon />
            </button>
          )}
          <ul
            ref={listRef2}
            onScroll={handleScroll2}
            className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar"
          >
            {products.slice(0, 10).map((product, index) => (
              <ProductCard
                key={index}
                price={product.price}
                name={product.name}
                category={product.category}
                fallbackImage={product.fallbackImage}
              />
            ))}
          </ul>
          {showNext2 && (
            <button
              onClick={scrollRight2}
              className="absolute right-0 z-10 p-4 px-5 bg-white text-black border border-black"
            >
              <ArrowForwardIcon />
            </button>
          )}
        </div>
      </div>

      {/* Hero Section 02 */}
      <div className="w-full h-auto relative mb-16">
        {/*Banner*/}
        <div className="_fill-image_154ez_1" data-auto-id="picture">
          <picture>
            <source
              srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_DESKTOP_2880x1200_4da173f07b.jpg"
              media="(min-width: 960px)"
              width="2880"
              height="1200"
            />
            <source
              srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_TABLET_1600x1600_18cf7b83ec.jpg"
              media="(min-width: 768px)"
              width="1600"
              height="1600"
            />
            <source
              srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_768,w_768/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_MOBILE_750x1000_f4f6ca6950.jpg"
              media="(max-width: 767px)"
              width="750"
              height="1000"
            />
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4705350_CAM_CRM_GLOBAL_ADAPT_EU_MAINPACK_4_VIVIDHORIZON_FW_24_GLP_BANNER_HERO_MALE_DESKTOP_2880x1200_4da173f07b.jpg"
              alt=""
              loading="lazy"
              fetchPriority="auto"
            />
          </picture>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            ADIDAS Z.N.E. MEN
          </h1>
          <button className="bg-white text-black py-2 px-6 text-lg font-semibold rounded hover:bg-gray-300 transition-all duration-300">
            SHOP MEN'S SPORTSWEAR
          </button>
        </div>
      </div>

      {/* Product Section 02*/}
      <div className="p-4 relative">
        <h2 className="text-center text-3xl font-bold mb-6">Top Sellers</h2>
        {/* Slider Wrapper */}
        <div className="flex w-full items-center justify-center mt-2 relative">
          {showPrev && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 z-10 p-4 px-5 bg-white text-black border border-black"
            >
              <ArrowBackIcon />
            </button>
          )}
          <ul
            ref={listRef}
            onScroll={handleScroll}
            className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar"
          >
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
              className="absolute right-0 z-10 p-4 px-5 bg-white text-black border border-black"
            >
              <ArrowForwardIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenPage;
