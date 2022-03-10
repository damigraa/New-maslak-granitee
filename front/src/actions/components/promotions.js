import axios from './../../helpers/axios';
import { promotionConstants } from './../constants';

export const getPromotions = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: promotionConstants.GET_PROMOTION_REQUEST })
            const res = await axios.get("promotions/get")
            if (res.status === 200) {
                const { promotion } = res.data
                dispatch({
                    type: promotionConstants.GET_PROMOTION_SUCCESS,
                    payload: {
                        promotion
                    }
                })
            } else {
                dispatch({ type: promotionConstants.GET_PROMOTION_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const getPromotionsDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: promotionConstants.GET_PROMOTION_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { promotionId } = payload.params;
            res = await axios.get(`/promotion/${promotionId}`);
            dispatch({
                type: promotionConstants.GET_PROMOTION_DETAILS_BY_ID_SUCCESS,
                payload: { promotionDetails: res.data.promotion }
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: promotionConstants.GET_PROMOTION_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}
