import axios from "../../helpers/axios"
import { contactConstants } from '../constants';


export const getContacts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: contactConstants.GET_CONTACT_REQUEST })
            const res = await axios.get("contact/get")
            if (res.status === 200) {
                const { contact } = res.data
                dispatch({
                    type: contactConstants.GET_CONTACT_SUCCESS,
                    payload: {
                        contact
                    }
                })
            } else {
                dispatch({ type: contactConstants.GET_CONTACT_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}