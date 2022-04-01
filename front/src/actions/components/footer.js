import axios from "../../helpers/axios"
import { footerConstants } from '../constants';


export const getFooter = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: footerConstants.GET_FOOTER_REQUEST })
            const res = await axios.get("footer/get")
            if (res.status === 200) {
                const { footer } = res.data
                dispatch({
                    type: footerConstants.GET_FOOTER_SUCCESS,
                    payload: {
                        footer
                    }
                })
            } else {
                dispatch({ type: footerConstants.GET_FOOTER_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}