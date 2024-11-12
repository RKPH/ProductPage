import  { useState } from "react";

import {  useRef } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const KidsPage = () => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const listRef = useRef(null);

  // Product pool
  const products = [
    {
      name: "Messi Training Jersey",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "700,000₫",
      category: "Kids"
    },
    {
      name: "Brand Love Backpack",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "650,000₫",
      category: "Kids"
    },
    {
      name: "Marvel Avengers Backpack",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "800,000₫",
      category: "Kids"
    },
    {
      name: "Tiro Tee Kids",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "700,000₫",
      category: "Kids"
    },
    {
      name: "New Sports Shoe",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "1,000,000₫",
      category: "Kids"
    },
    {
      name: "Running Shoes",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "1,200,000₫",
      category: "Kids"
    },
    {
      name: "Running Shoes",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "1,200,000₫",
      category: "Kids"
    },
    {
      name: "Running Shoes",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "1,200,000₫",
      category: "Kids"
    },
    {
      name: "Running Shoes",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/952d4b8966944834a3a14cb29de5d7cb_9366/Messi_Training_Jersey_Kids_Purple_IZ2999_21_model.jpg",
      price: "1,200,000₫",
      category: "Kids"
    },
  ];

  // State to track the current index of the products being displayed
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
      <div className="kids-page">
        {/* Hero  */}
        <div className="w-full h-auto relative mb-16 ">
          <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/Banner_a4bb4fcaa6.jpg"
              alt="Kids Banner"
              className="w-full h-[500px] object-cover"
          />
          <div
              className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              ADIDAS Z.N.E.
            </h1>
            <button
                className="bg-white text-black py-2 px-6 text-lg font-semibold rounded hover:bg-gray-300 transition-all duration-300">
              SHOP SPORTSWEAR
            </button>
          </div>
        </div>

        {/* Age Range Section */}
        <div className="p-10">
          <div className="flex flex-row justify-center gap-2">
            <div className="age-group mb-4 ">
              <img
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_530,w_530/SS_18_YA_Infants_Q1_Ecomm_A_FC_Age_F_640x640_4b47ce365a.jpg"
                  alt="0-4 Years"
                  className="w-full h-full object-cover rounded-lg"
              />
              <button
                  className="text-black underline mt-2 hover:bg-black hover:text-white hover:no-underline transition-all duration-300 text-xl">
                0-4 Years
              </button>
            </div>
            <div className="age-group mb-4 ">
              <img
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_530,w_530/SS_18_YA_Little_Kids_Ecomm_A_FC_Age_F_640x640_22744c9e24.jpg"
                  alt="4-8 Years"
                  className="w-full h-full object-cover rounded-lg"
              />
              <button
                  className="text-black underline mt-2 hover:bg-black hover:text-white hover:no-underline transition-all duration-300 text-xl">
                4-8 Years
              </button>
            </div>
            <div className="age-group mb-4">
              <img
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_530,w_530/SS_18_YA_Running_Ecomm_AFC_Collection_Mobile_M_2_640x640_new_f3e0c136a9.jpg"
                  alt="8-16 Years"
                  className="w-full h-full object-cover rounded-lg"
              />
              <button
                  className="text-black underline mt-2 hover:bg-black hover:text-white hover:no-underline transition-all duration-300 text-xl">
                8-16 Years
              </button>
            </div>
          </div>
        </div>

        {/* Disney Pegasus Collection  with Video */}
        <div className="relative w-full h-[500px] mb-16 mt-10">
          <video
              loop
              muted
              autoPlay
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
                src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/originals_fw24_disney_pegasus_global_launch_hp_banner_hero_d_39b502e9ef.mp4"
                type="video/mp4"
            />
          </video>

          <div
              className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-white text-4xl md:text-6xl font-bold">
              Disney Pegasus Collection
            </h2>
            <p className="text-white text-lg">
              Spread your wings with the Disney Pegasus collection.
            </p>
            <button
                className="bg-white text-black py-2 px-6 text-lg font-semibold rounded hover:bg-gray-300 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center p-10 section md:space-x-2">
          <div className="flex-1 flex flex-col items-center text-center">
            <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/commercial_fw22_lego_ch2_winter_kids_lp_teaser_card_d_4038d78486.jpg"
                alt="LEGO Winter Collection"
                className="w-full h-full object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">Imagine your world</h2>
            <p className="text-gray-700">
              Play through the cold with the new exclusive adidas LEGO® Winter
              collection.
            </p>
            <button
                className="mt-2 text-black font-bold underline py-2 px-4 hover:bg-black hover:text-white hover:no-underline transition-all duration-300">
              SHOP NOW
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/originals_ss21_adicolor_april_launch_glp_k_teaser_large_new_01_d_e727fecc7f.jpg"
                alt="Adicolor Stories"
                className="w-full h-full object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">adicolor stories</h2>
            <p className="text-gray-700">
              Queen-Zhanel rocks all new adicolor with her big sis Alida.
            </p>
            <button
                className="mt-2 text-black font-bold underline py-2 px-4 hover:bg-black hover:text-white hover:no-underline transition-all duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Top Sellers  */}
        <div className="p-16 relative ">
          <h2 className="text-center text-3xl font-bold mb-6">Top Sellers</h2>

          {/* Slider Wrapper */}
          <div className="flex w-full items-center justify-center mt-2 relative">
            {showPrev && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-10 p-4 px-5 bg-white text-black border border-black"
                >
                  <ArrowBackIcon/>
                </button>
            )}

            <ul
                ref={listRef}
                onScroll={handleScroll}
                className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar"
            >
              {products

                  .slice(0, 10)
                  .map((product, index) => (
                      <ProductCard key={index} {...product} />
                  ))}
            </ul>

            {showNext && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 z-10 p-4 px-5 bg-white text-black border border-black"
                >
                  <ArrowForwardIcon/>
                </button>
            )}
          </div>

      </div>
</div>
)
  ;
};

export default KidsPage;
