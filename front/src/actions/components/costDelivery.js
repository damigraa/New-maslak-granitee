import axios from "../../helpers/axios"
import { costDeliveryConstants } from "../constants"



export const getCostDelivery = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: costDeliveryConstants.GET_COST_DELIVERY_REQUEST })
            const res = await axios.get("costDelivery/get")
            if (res.status === 200) {
                const { costDelivery } = res.data
                dispatch({
                    type: costDeliveryConstants.GET_COST_DELIVERY_SUCCESS,
                    payload: {
                        costDelivery
                    }
                })
            } else {
                dispatch({ type: costDeliveryConstants.GET_COST_DELIVERY_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

