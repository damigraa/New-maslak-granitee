import axios from '../../helpers/axios';
import { promotionConstants } from '../constants';

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