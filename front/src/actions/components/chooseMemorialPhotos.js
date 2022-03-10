import axios from "../../helpers/axios"
import { chooseMemorialPhotosConstants } from "../constants"

export const getChooseMemorialPhotos = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_REQUEST })
            const res = await axios.get("chooseMemorialPhotos/get")
            if (res.status === 200) {
                const { chooseMemorialPhotos } = res.data
                dispatch({
                    type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_SUCCESS,
                    payload: {
                        chooseMemorialPhotos
                    }
                })
            } else {
                dispatch({ type: chooseMemorialPhotosConstants.GET_CHOOSE_MEMORIAL_PHOTOS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}