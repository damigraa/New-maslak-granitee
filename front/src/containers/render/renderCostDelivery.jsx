import React from 'react';


const RenderCostDelivery = ({ costDelivery }) => {
    return (
        <>
            {
                costDelivery.length > 0 ?
                    costDelivery.map((item, index) =>
                        <>
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.city}</td>
                                <td>{item.price} руб.</td>
                                <td>{item.deliveryTime} дней</td>
                            </tr>

                        </>

                    ) : "нет данных"
            }
        </>
    )
}

export default RenderCostDelivery