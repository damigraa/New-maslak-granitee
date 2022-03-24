import axios from "../../helpers/axios"
import { standMonumentConstants } from "../constants"



export const getStandMonument = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: standMonumentConstants.GET_STAND_MONUMENT_REQUEST })
            const res = await axios.get("standMonument/get")
            if (res.status === 200) {
                const { standMonument } = res.data
                dispatch({
                    type: standMonumentConstants.GET_STAND_MONUMENT_SUCCESS,
                    payload: {
                        standMonument
                    }
                })
            } else {
                dispatch({ type: standMonumentConstants.GET_STAND_MONUMENT_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

