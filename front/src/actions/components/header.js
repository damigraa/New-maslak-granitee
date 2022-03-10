import { headerConstants } from "../constants"
import axios from './../../helpers/axios';


export const getHeader = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: headerConstants.GET_HEADER_REQUEST })
            const res = await axios.get("header/get")
            if (res.status === 200) {
                const { header } = res.data
                dispatch({
                    type: headerConstants.GET_HEADER_SUCCESS,
                    payload: { header }
                })
            } else {
                dispatch({ type: headerConstants.GET_HEADER_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}