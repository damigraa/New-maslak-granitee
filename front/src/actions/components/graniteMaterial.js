import axios from "../../helpers/axios"
import { graniteMaterialConstants } from "../constants"

export const getGraniteMaterial = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: graniteMaterialConstants.GET_GRANITE_MATERIAL_REQUEST })
            const res = await axios.get("/graniteMaterial/get")
            if (res.status === 200) {
                const { graniteMaterial } = res.data
                dispatch({
                    type: graniteMaterialConstants.GET_GRANITE_MATERIAL_SUCCESS,
                    payload: { graniteMaterial }
                })
            } else {
                dispatch({ type: graniteMaterialConstants.GET_GRANITE_MATERIAL_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}