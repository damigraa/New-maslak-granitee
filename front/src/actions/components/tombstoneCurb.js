import axios from "../../helpers/axios"
import { tombstoneCurbConstants } from "../constants"



export const getTombstoneCurb = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: tombstoneCurbConstants.GET_TOMBSTONE_CURB_REQUEST })
            const res = await axios.get("tombstoneCurb/get")
            if (res.status === 200) {
                const { tombstoneCurb } = res.data
                dispatch({
                    type: tombstoneCurbConstants.GET_TOMBSTONE_CURB_SUCCESS,
                    payload: {
                        tombstoneCurb
                    }
                })
            } else {
                dispatch({ type: tombstoneCurbConstants.GET_TOMBSTONE_CURB_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

