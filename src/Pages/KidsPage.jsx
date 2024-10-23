import React from "react";

const KidsPage = () => {
  return (
    <div className="kids-page">
      {/* Hero Section */}
      <section className="w-full h-auto relative">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/Banner_a4bb4fcaa6.jpg"
          alt="Kids Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Adidas Kids
          </h1>
        </div>
      </section>

      {/* Age Range Section */}
      <section className="p-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="age-group mb-4 md:mb-0">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_530,w_530/SS_18_YA_Infants_Q1_Ecomm_A_FC_Age_F_640x640_4b47ce365a.jpg"
              alt="0-4 Years"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h2 className="text-center text-xl font-semibold mt-2">
              0-4 Years
            </h2>
          </div>
          <div className="age-group mb-4 md:mb-0">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_530,w_530/SS_18_YA_Little_Kids_Ecomm_A_FC_Age_F_640x640_22744c9e24.jpg"
              alt="4-8 Years"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h2 className="text-center text-xl font-semibold mt-2">
              4-8 Years
            </h2>
          </div>
          <div className="age-group">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_530,w_530/SS_18_YA_Running_Ecomm_AFC_Collection_Mobile_M_2_640x640_new_f3e0c136a9.jpg"
              alt="8-16 Years"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h2 className="text-center text-xl font-semibold mt-2">
              8-16 Years
            </h2>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-blue-100 p-8">
        <h2 className="text-center text-3xl font-bold mb-6">
          Disney Pegasus Collection
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
          <div className="featured-item">
            <img
              src="https://example.com/disney-collection.jpg"
              alt="Disney Pegasus Collection"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>
          <div className="featured-description">
            <p className="text-lg">
              Spread your wings with the Disney Pegasus collection.
            </p>
            <button className="bg-black text-white py-2 px-4 mt-4 rounded hover:bg-gray-800">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Top Sellers Section */}
      <section className="p-8">
        <h2 className="text-center text-3xl font-bold mb-6">Top Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="product-item text-center">
            <img
              src="https://example.com/top-seller1.jpg"
              alt="Product 1"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <p className="text-lg mt-2">Messi Training Jersey</p>
            <span className="text-gray-600">700,000₫</span>
          </div>
          <div className="product-item text-center">
            <img
              src="https://example.com/top-seller2.jpg"
              alt="Product 2"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <p className="text-lg mt-2">Brand Love Backpack</p>
            <span className="text-gray-600">650,000₫</span>
          </div>
          <div className="product-item text-center">
            <img
              src="https://example.com/top-seller3.jpg"
              alt="Product 3"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <p className="text-lg mt-2">Marvel Avengers Backpack</p>
            <span className="text-gray-600">800,000₫</span>
          </div>
          <div className="product-item text-center">
            <img
              src="https://example.com/top-seller4.jpg"
              alt="Product 4"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <p className="text-lg mt-2">Tiro Tee Kids</p>
            <span className="text-gray-600">700,000₫</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsPage;
