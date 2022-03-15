import axios from '../../helpers/axios';
import { paymentLIConstants } from '../constants';

export const getPaymentLi = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: paymentLIConstants.GET_PAYMENT_LI_REQUEST })
            const res = await axios.get("paymentLi/get")
            if (res.status === 200) {
                const { paymentLI } = res.data
                dispatch({
                    type: paymentLIConstants.GET_PAYMENT_LI_SUCCESS,
                    payload: {
                        paymentLI
                    }
                })
            } else {
                dispatch({ type: paymentLIConstants.GET_PAYMENT_LI_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

// export const getPromotionsDetailsById = (payload) => {
//     return async dispatch => {
//         dispatch({ type: paymentLiConstants.GET_PAYMENT_LI_DETAILS_BY_ID_REQUEST });
//         let res;
//         try {
//             const { promotionId } = payload.params;
//             res = await axios.get(`/promotion/${promotionId}`);
//             dispatch({
//                 type: paymentLiConstants.GET_PAYMENT_LI_DETAILS_BY_ID_SUCCESS,
//                 payload: { promotionDetails: res.data.promotion }
//             });

//         } catch (error) {
//             console.log(error);
//             dispatch({
//                 type: paymentLiConstants.GET_PAYMENT_LI_DETAILS_BY_ID_FAILURE,
//                 payload: { error: res.data.error }
//             });
//         }
//     }
// }
