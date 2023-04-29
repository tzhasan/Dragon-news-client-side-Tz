import React from "react";
import Header from "../Shared/header/Header";
import Footer from "../Shared/footer/Footer";
import { Outlet } from "react-router-dom";
import LeftNav from "../Shared/Left nav/LeftNav";
import RightNav from "../Shared/Right nav/RightNav";

const NewsLayout = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Header></Header>
      <div className="grid grid-cols-5 ">
        {/* <LeftNav className="col-span-1"></LeftNav> */}
        <div className="col-span-4">
          <Outlet></Outlet>
        </div>
        <RightNav className="col-span-1"></RightNav>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
