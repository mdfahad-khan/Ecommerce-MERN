import React, { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import SummaryApi from "../Common";
import AdminProductCard from "../components/AdminProductCard";

const Products = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(SummaryApi.allProduct.url);
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      const dataResponse = await response.json();
      setAllProducts(dataResponse?.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg"> All Products</h2>
        <button
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>
      {/* all product */}
      <div className="grid grid-cols-5 items-center justify-center gap-4 py-4">
        {allProducts.map((product, index) => {
          return (
            <AdminProductCard data={product} key={index + "allproducts"} />
          );
        })}
      </div>
      {/* upload product component */}
      {openUploadProduct && (
        <UploadProduct onclose={() => setOpenUploadProduct(false)} />
      )}
    </div>
  );
};

export default Products;
