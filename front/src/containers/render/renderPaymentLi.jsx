import React from 'react';



const RenderPaymentLi = ({ paymentLI }) => {


    return (
        <div className=" w-100 PaymentAndDelivery-block">
            {
                paymentLI.length > 0 ?
                    paymentLI.map((item) =>
                        <>
                            <div key={item._id} className="Img PaymentAndDelivery-img"></div>
                            <div className="my-3 w-100 PaymentAndDelivery-text">
                                {item.text}
                            </div>
                        </>
                    ) : null
            }
        </div>
    )
}

export default RenderPaymentLi