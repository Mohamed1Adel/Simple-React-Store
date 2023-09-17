import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductsComponent from "./ProductsComponent";
import {setProducts} from "../redux/actions/productActions"







const ProductsListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      console.log(products);
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductsComponent />
    </div>
  );
};

export default ProductsListing;
