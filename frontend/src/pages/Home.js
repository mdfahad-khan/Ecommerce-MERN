import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VarticalCardProduct from "../components/VarticalCardProduct";

const Home = () => {
  return(
  <div>
    <CategoryList />
    <BannerProduct />
    <HorizontalCardProduct category ={"camera"} heading={"Top's Cameras"} />
    <HorizontalCardProduct category ={"airpodes"} heading={"Popular's Airpods"} />
    <VarticalCardProduct category ={"airpodes"} heading={"Popular's Airpods"} />
  </div>
)};

export default Home;
