import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { RenderOrders } from './../render/RenderOrders';

const Orders = (props) => {
  const order = useSelector((state) => state.order);
  console.log(order.orders)
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  return (
    <Layout sidebar>
      <RenderOrders
        order={order}
        formatDate={formatDate}
        onOrderUpdate={onOrderUpdate}
        setType={setType}
      />


    </Layout>
  );
};

export default Orders;