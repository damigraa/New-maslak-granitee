import axios from "../../helpers/axios"
import { graniteTilesConstants } from "../constants"



export const getGraniteTiles = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: graniteTilesConstants.GET_GRANITE_TILES_REQUEST })
            const res = await axios.get("graniteTiles/get")
            if (res.status === 200) {
                const { graniteTiles } = res.data
                dispatch({
                    type: graniteTilesConstants.GET_GRANITE_TILES_SUCCESS,
                    payload: {
                        graniteTiles
                    }
                })
            } else {
                dispatch({ type: graniteTilesConstants.GET_GRANITE_TILES_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

