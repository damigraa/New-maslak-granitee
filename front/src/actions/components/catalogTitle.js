import axios from "../../helpers/axios"
import { catalogTitleConstants } from "../constants"

export const getCatalogTitle = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: catalogTitleConstants.GET_CATALOG_TITLE_REQUEST })
            const res = await axios.get("catalogTitle/get")
            if (res.status === 200) {
                const { catalogTitle } = res.data
                dispatch({
                    type: catalogTitleConstants.GET_CATALOG_TITLE_SUCCESS,
                    payload: {
                        catalogTitle
                    }
                })
            } else {
                dispatch({ type: catalogTitleConstants.GET_CATALOG_TITLE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}