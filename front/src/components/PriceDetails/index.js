import React from "react";
import Card from "../../components/UI/Card";

const PriceDetails = (props) => {
  return (
    <Card headerLeft={"Подробности"} style={{ maxWidth: "380px" }}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Количество ({props.totalItem} шт.)</div>
          {/* <div>{props.totalPrice}</div> */}
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Вид Доставки</div>
          <div>Беспатная </div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Общая сумма</div>
          <div>{props.totalPrice}</div>
        </div>
      </div>
    </Card>
  );
};

export default PriceDetails;
