import axios from "../../helpers/axios"
import { mainImageConstants } from '../constants';


export const getMainImage = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: mainImageConstants.GET_MAIN_IMAGE_REQUEST })
            const res = await axios.get("mainImage/get")
            if (res.status === 200) {
                const { mainImage } = res.data
                dispatch({
                    type: mainImageConstants.GET_MAIN_IMAGE_SUCCESS,
                    payload: {
                        mainImage
                    }
                })
            } else {
                dispatch({ type: mainImageConstants.GET_MAIN_IMAGE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}