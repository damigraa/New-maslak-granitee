import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { generatePublicUrl } from "../../urlConfig";
import Price from "../../components/UI/Price";
import "./style.scss";


const OrderDetailsPage = (props) => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.user.orderDetails);

  useEffect(() => {
    const payload =  {
      orderId: props.match.params.orderId,
    };
    dispatch(getOrder(payload));
  }, []);

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  const formatDate2 = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (date) {
      const d = new Date(date);
      return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  };


  if (!(orderDetails && orderDetails.address)) {
    return null;
  }

  return (
    <Layout>
      <div
        style={{
          width: "800px",
          margin: "10px auto",
        }}
      >
        <Card style={{
          margin: "10px 0",
        }}>
          <div className="row">
            <h3>Выполнен</h3>
            <div className="order-heading__decoration"></div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="delAdrContainer">
                <a href="/account/orders">Вернуться обратно</a>
                <div className="delAdrDetails">
                  <div className="delTitle">Информация о заказе</div>
                  <div className="delName">{orderDetails.address.name}</div>
                  <div className="delAddress">{orderDetails.address.address}</div>
                  <div className="delPhoneNumber">
                    Мобильный {orderDetails.address.mobileNumber}
                  </div>
                </div>
                <div className="delMoreActionContainer">
                  <button className="btn btn-secondary">История заказа</button>
                  <div className="delName">Download Invoice</div>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-sm-5">
                  <div>
                    <div>Оплата</div>
                    <div>Доставка</div>
                    <div>Итого</div>
                  </div>
                  <button className="btn btn-secondary">Оставить отзыв</button>

                </div>
                <div className="col-sm-7">
                <div style={{textAlign: 'right'}}>
                    <div>Оплата при получении товара</div>
                    <div>Бесплатно</div>
                    <div>20000 руб</div>
                  </div>

                  <button className="btn btn-secondary">Оплатить</button>

                </div>
              </div>
            </div>
          </div>



        </Card>
        {orderDetails.items.map((item, index) => (
          <Card
            style={{ display: "flex", padding: "20px 0", margin: "10px 0" }}
          >
            <div className="flexRow">
              <div className="delItemImgContainer">
                {<img
                  src={generatePublicUrl(item.productId.productPictures[0].img)}
                  alt=""
                /> || "Нет фото"}
              </div>
              <div style={{ width: "250px" }}>
                <div className="delItemName">{item.productId.name}</div>
                <Price value={item.payablePrice} />
              </div>
            </div>
            <div style={{ padding: "25px 50px" }}>
              <div className="orderTrack">
                {orderDetails.orderStatus.map((status) => (
                  <div
                    className={`orderStatus ${status.isCompleted ? "active" : ""
                      }`}
                  >
                    <div
                      className={`point ${status.isCompleted ? "active" : ""}`}
                    ></div>
                    <div className="orderInfo">
                      <div className="status">{status.type}</div>
                      <div className="date">{formatDate(status.date)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontWeight: "500", fontSize: 14 }}>
              {orderDetails.orderStatus[3].isCompleted &&
                `Delivered on ${formatDate2(orderDetails.orderStatus[3].date)}`}
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default OrderDetailsPage;





























