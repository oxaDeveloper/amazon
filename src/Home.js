import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/11/23131304/amazon-related-phishing-scam-featured.jpg"
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://progamedev.net/wp-content/uploads/2021/08/The-lean-startup.jpeg"
            rating={4}
          />

          {/* Product */}
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.9}
            image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="4903850"
            title="Samsung Galaxy Watch4 40mm LTE (Silver) | Colour: Silver"
            price={199.99}
            image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/531810-Product-0-I-637647134301512825_1080x.jpg"
            rating={3}
          />

          {/* Product */}
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617126619000"
            rating={4}
          />
        </div>

        <a href="https://www.primevideo.com/" target="_blank">
          <img
            className="home__ad"
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBG_1_NotApproved._TTW_.jpg"
          />
        </a>

        <div className="home__row">
          {/* Product */}
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://m.media-amazon.com/images/I/71gbNOxAVoL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="90829332"
            title="My First Library : Boxset of 10 Board Books for Kids."
            price={16.05}
            image="https://m.media-amazon.com/images/I/711c-uf6AFL._AC_SY200_.jpg"
            rating={4}
          />

          {/* Product */}
          <Product
            id="723648"
            title="Robert Kiyosaki: Rich Dad Poor Dad, Best Sellers"
            price={5.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
            rating={4}
          />

          {/* Product */}
          <Product
            id="732682"
            title="ANLCQC Clear Hybrid Designed for iPhone 11 Case"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61mDEQMYfeL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="90829332"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
            rating={4}
          />

          {/* Product */}
          <Product
            id="902730"
            title="PlayStation DualSense Wireless Controller – Midnight Black"
            price={74.9}
            image="https://m.media-amazon.com/images/I/61O9tWR6WDS._SL1475_.jpg"
            rating={5}
            className="img-fmdaOne"
          />
        </div>

        <a href="https://www.primevideo.com/" target="_blank">
          <img
            className="home__ad"
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/firetv_inline_normal._TTW_.jpg"
          />
        </a>

        <div className="home__row">
          {/* Product */}
          <Product
            id="573877"
            title="HP 22 All-in-One PC, AMD Athlon Gold 3150U Processor, 4 GB RAM, 256 GB SSD, Full HD IPS 21.5-inch Anti-glare Display, Windows 10 Home, USB Mouse and Keyboard (22-df0022, 2020)"
            price={518.2}
            image="https://m.media-amazon.com/images/I/81QK7CH8PzL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="735692"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91Z0cGhaeCL._AC_SL1500_.jpg"
            rating={3}
          />

          <Product
            id="784291"
            title="Optimum Nutrition Serious Mass Protein Powder High Calorie"
            price={42.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61RIrhte%2BmL._AC_SL1000_.jpghttps://images-na.ssl-images-amazon.com/images/I/61RIrhte%2BmL._AC_SL1000_.jpg"
            rating={5}
          />

          <Product
            id="987376"
            title="Hethrone Calligraphy Pen Set Wood Stem Dip Pen Glass"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71U0zuzbf7L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
