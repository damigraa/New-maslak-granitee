import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { DetailsOrder } from './../render/DetailsOrder';
import { RenderOrders } from './../render/RenderOrders';
import { MainContainer } from './../MainContainer';
import { getCustomerOrders } from './../../actions/order.action';

const Orders = (props) => {
  const [show, setShow] = useState(false);
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const order = useSelector((state) => state.order.orders);


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


  const handleShow = () => setShow(true)



  const showOrderModal = (standMonument) => {
    setOrderDetails(standMonument);
    setOrderDetailModal(true);
  };
  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  return (
    <MainContainer
      fluid
      productSort
      fullFunctional
      buttonText="Оформить заказ вручную"
      // search={searchProducts}
      get={getCustomerOrders}
      handleShow={handleShow}
    >
      <RenderOrders
        order={order}
        formatDate={formatDate}
        onOrderUpdate={onOrderUpdate}
        setType={setType}
        showOrderModal={showOrderModal}
      />

      <DetailsOrder
        orderDetailModal={orderDetailModal}
        orderDetails={orderDetails}
        setOrderDetailModal={setOrderDetailModal}
      />
    </MainContainer>
  );
};

export default Orders;