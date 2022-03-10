import { manufactureConstants } from "../constants"
import axios from './../../helpers/axios';


export const getManufacture = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: manufactureConstants.GET_MANUFACTURE_REQUEST })
            const res = await axios.get("manufacture/get")
            if (res.status === 200) {
                const { manufacture } = res.data
                dispatch({
                    type: manufactureConstants.GET_MANUFACTURE_SUCCESS,
                    payload: { manufacture }
                })
            } else {
                dispatch({ type: manufactureConstants.GET_MANUFACTURE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }

    }
}