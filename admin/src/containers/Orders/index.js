import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions";
import { DetailsOrder } from './../render/DetailsOrder';
import { RenderOrders } from './../render/RenderOrders';
import { MainContainer } from './../MainContainer';
import { getCustomerOrders, searchOrders } from './../../actions/order.action';
import OrderModalCenter from './../../components/UI/Modal/OrderModalCenter';
import { RenderOrdersTwo } from './../render/RenderOrdersTwo';

const Orders = (props) => {
  const [show, setShow] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const order = useSelector((state) => state.order.orders);
  const [clicked, setClicked] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [currentIdProd, setCurrentIdProd] = useState("");

  const [orderedProduct, setOrderedProduct] = useState(null)



  const product = useSelector((state) => orderedProduct ? state.product.products.find((item) => item._id) : null)
  const newArrayProd = Array.from([product])


  const orderProduct = (orderItem) => {
    console.log(orderItem)
    const prodId = orderItem.items.map((item) => item.productId._id)
    setOrderedProduct(prodId)
    console.log(prodId)

  }


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


  const showOrderModal = (orderItem) => {
    setOrderDetails(orderItem);
    setModalShow(true);
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
      title="Мои заказы"
      tabs
      fluid
      productSort
      buttonText="Оформить заказ вручную"
      search={searchOrders}
      get={getCustomerOrders}
      handleShow={handleShow}
    >
      <OrderModalCenter
        show={modalShow}
        currentIdProd={currentIdProd}
        onHide={() => setModalShow(false)}
        details={orderDetails}
        formatDate={formatDate}
        setType={setType}
        onOrderUpdate={onOrderUpdate}
      />
      <RenderOrders
        newArrayProd={newArrayProd}
        order={order}
        showOrderModal={showOrderModal}
        orderProduct={orderProduct}
      />
    </MainContainer>
  );
};

export default Orders;