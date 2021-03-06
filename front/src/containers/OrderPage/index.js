import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { generatePublicUrl } from "../../urlConfig";
import { IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { Breed } from "../../components/MaterialUI";


const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);


  return (
    <Layout>
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Домашнаяя страница", href: "/" },
            { name: "Мой аккаунт", href: "/account" },
            { name: "Мои заказы", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
          return order.items.map((item) => (
            <Card style={{ display: "block", margin: "5px 0" }}>
              {console.log(item)}
              <Link
                to={`/order_details/${order._id}`}
                className="orderItemContainer"
              >
                <div className="orderImgContainer">
                  {/* <img
                    className="orderImg"
                    src={generatePublicUrl(
                      item.productId.productPictures[0].img
                    )}
                  /> */}
                </div>
                <div className="orderRow">
                  {/* <div className="orderName">{item.productId.name}</div> */}
                  <div className="orderPrice">
                    {item.payablePrice }
                     руб
                  </div>
                  <div>{order.paymentStatus}</div>

                </div>
                <button className="btn btn-secondary">Оплатить</button>
              </Link>
            </Card>
          ));
        })}
      </div>
    </Layout>
  );
};

export default OrderPage;
