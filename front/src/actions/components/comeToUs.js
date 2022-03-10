import axios from "../../helpers/axios"
import { comeToUsConstants } from '../constants';


export const getComeToUs = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: comeToUsConstants.GET_COME_TO_US_REQUEST })
            const res = await axios.get("comeToUs/get")
            if (res.status === 200) {
                const { comeToUs } = res.data
                dispatch({
                    type: comeToUsConstants.GET_COME_TO_US_SUCCESS,
                    payload: {
                        comeToUs
                    }
                })
            } else {
                dispatch({ type: comeToUsConstants.GET_COME_TO_US_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}