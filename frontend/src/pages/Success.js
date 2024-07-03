import React from "react";
import SUCCESSIMAGE from "../assest/banner/banner1.jpg";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="bg-slate-200 w-full m-2 rounded max-w-md mx-auto flex justify-center items-center flex-col p-4">
      <img src={SUCCESSIMAGE} alt="success" width={150} height={150} />
      <p className="text-green-500 font-bold text-lg">Payment Succssfully</p>
      <Link
        to={"/order"}
        className="p-2 mt-4  border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white"
      >
        See Order
      </Link>
    </div>
  );
};

export default Success;
