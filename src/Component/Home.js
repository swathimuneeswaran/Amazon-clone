import React from "react";
import "./Home.css";
import Product from "./Product.js";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg"
        ></img>
        <div className="home__row">
          <Product
            id="1"
            title="iQOO Z7s 5G by vivo "
            image="https://m.media-amazon.com/images/I/41bLD50sZSL._AC_SY200_.jpg"
            price={20.99}
            rating={5}
          />
          <Product id="2"
            title="realme Buds T300 "
            image="https://images-eu.ssl-images-amazon.com/images/I/61jFNCDeahL._AC_UL160_SR160,160_.jpg"
            price={10.99}
            rating={4} 
            />
            <Product id="3"
            title="Samsung Original 25W Single Port, Type-C Fast Charger, (Cable not Included), White "
            image="https://images-eu.ssl-images-amazon.com/images/I/21uXmiH98wL._AC_UL160_SR160,160_.jpg"
            price={15}
            rating={4}
            />


        </div>
        <div className="home__row">
          <Product id="4"
            title="Lava A3 (Dark Blue) - Dual Sim Mobile with 1750 mAh Big Battery and 32 GB Expandable Storage"
            image="https://m.media-amazon.com/images/I/61CeweKmlLL._SY741_.jpg"
            price={5.99}
            rating={4} />
          <Product id="5"
            title="Worthy Essentials Co. 84-Days Intense Hair Growth Serum"
            image="https://m.media-amazon.com/images/I/417Lfk4nj8L._SY300_SX300_.jpg"
            price={30.00}
            rating={3} />
            <Product id="6"
            title="Uniqaya Tinted Sunscreen SPF 50 PA+++ For Men Women"
            image="https://m.media-amazon.com/images/I/71KYZEFkyXL._SX522_.jpg"
            price={10.99}
            rating={4}/>
            <Product id="7"
            title="XGIMI MoGo 2 Portable Projector, Mini Projector with WiFi and Bluetooth"
            image="https://m.media-amazon.com/images/I/71i9blSwjgL._AC_UY327_FMwebp_QL65_.jpg"
            price={60.99}
            rating={5}/>
        </div>
        <div className="home__row">
        <Product id="8"
            title="XGIMI Desktop Stand Pro Projector Accessories Multi-Model Adaptation For Devices Horizon"
            image="https://m.media-amazon.com/images/I/51Fb4esp6xL._SX679_.jpg"
            price={30.99}
            rating={4}/>
            <Product id="9"
            title="Nebula Capsule Adjustable Tripod Stand"
            image="https://m.media-amazon.com/images/I/71y89vOd3dL._SX679_.jpg"
            price={50.99}
            rating={3}/>
            <Product id="10"
            title="PowerA Wired Gaming Controller for Xbox Series X/S, Xbox One, PC, Windows 10/11, Black "
            image="https://m.media-amazon.com/images/I/81nGpi7MaqL._SX679_.jpg"
            price={60.99}
            rating={3}/>
        </div>
        <div className="home__row">
        <Product id="11"
            title="boAt Rockerz 255 Max in Ear Earphones "
            image="https://m.media-amazon.com/images/I/31aieQYTaML._SY300_SX300_.jpg"
            price={10.99}
            rating={4}/>
            <Product id="12"
            title="ZEBRONICS New Launch Uzi High Precision Wired Gaming Mouse"
            image="https://m.media-amazon.com/images/I/41eCEGEc8oL._SY300_SX300_.jpg"
            price={5.99}
            rating={4}/>
            <Product id="13"
            title="EvoFox Falcon X35 Gaming Mouse Pad"
            image="https://m.media-amazon.com/images/I/71nzMMjgZQL._SX679_.jpg"
            price={3.99}
            rating={5}/>
        </div>
        <div className="home__row">
        <Product id="14"
            title="Nitho Drive PRO V16 Gaming Racing Wheel with Shifter "
            image="https://m.media-amazon.com/images/I/41yCZkfljvL._SX342_SY445_.jpg"
            price={30.99}
            rating={4}/>
            <Product id="15"
            title="Ant Value GK1001 Wired Membrane Gaming Keyboard "
            image="https://m.media-amazon.com/images/I/41mpgYX56YL._SX342_SY445_.jpg"
            price={5.99}
            rating={4}/>
            <Product id="16"
            title="LEQTRONIQ Hard Carrying Case Compatible with Meta/Oculus Quest 2/3 Accessories"
            image="https://m.media-amazon.com/images/I/41mi8ekKCUL._SX300_SY300_.jpg"
            price={20.99}
            rating={5}/>
             <Product id="17"
            title="Sony PS4 Minecraft Bedrock Ed. (PS4)"
            image="https://m.media-amazon.com/images/I/81lRW06VO3L._AC._SR360,460.jpg"
            price={10.00}
            rating={4}/>
        </div>
        <div className="home__row">
        <Product id="18"
            title="Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32R8-FVIN (Black)"
            image="https://m.media-amazon.com/images/I/51xz0+Y1oUL._SX300_SY300_.jpg"
            price={100.99}
            rating={4}/>
           
        </div>
      </div>
    </div>
  );
};

export default Home;
