import axios from "../../helpers/axios"
import { galleryConstants } from '../constants';


export const getGallery = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: galleryConstants.GET_GALLERY_REQUEST })
            const res = await axios.get("gallery/getGallery");
            if (res.status === 200) {
                const { galleries } = res.data
                dispatch({
                    type: galleryConstants.GET_GALLERY_SUCCESS,
                    payload: {
                        galleries
                    }
                })
            } else {
                dispatch({ type: galleryConstants.GET_GALLERY_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}