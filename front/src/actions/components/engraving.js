import axios from "../../helpers/axios"
import { engravingConstants } from "../constants"

export const getEngraving = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: engravingConstants.GET_ENGRAVING_REQUEST })
            const res = await axios.get("engraving/get")
            if (res.status === 200) {
                const { engraving} = res.data
                dispatch({
                    type: engravingConstants.GET_ENGRAVING_SUCCESS,
                    payload: {
                        engraving
                    }
                })
            } else {
                dispatch({ type: engravingConstants.GET_ENGRAVING_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}