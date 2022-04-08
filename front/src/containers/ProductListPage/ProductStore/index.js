import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
import { MaterialButton } from "../../../components/MaterialUI";
import Rating from "../../../components/UI/Rating";
import Price from "../../../components/UI/Price";


const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  console.log(product.productsByPrice)


  const ProductList = (props) => {
    return (
      <>
        {product.productsByPrice[props.key].map((product) => (
          <div>product</div>
        ))}


      </>
    )
  }
  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        { console.log(key) }
        return (
          <Card
            // headerLeft={`${props.match.params.slug} До ${priceRange[key]} Рублей`}
            headerLeft={`До ${priceRange[key]} Рублей`}
            headerRight={
              <MaterialButton
                title={"Показать все"}
                style={{
                  width: "70px",
                }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",

            }}
          >
            <div style={{ display: "flex" }}>

              <ProductList key={key} />



            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
