import axios from "../../helpers/axios"
import { weWorkOnlineConstants } from "../constants"

export const getWeWorkOnline = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_REQUEST })
            const res = await axios.get("weWorkOnline/get")
            if (res.status === 200) {
                const { weWorkOnline } = res.data
                dispatch({
                    type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_SUCCESS,
                    payload: {
                        weWorkOnline
                    }
                })
            } else {
                dispatch({ type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addWeWorkOnline = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: weWorkOnlineConstants.ADD_WE_WORK_ONLINE_REQUEST })
            const res = await axios.post("weWorkOnline/create", form)
            if (res.status === 201) {
                dispatch({ type: weWorkOnlineConstants.ADD_WE_WORK_ONLINE_SUCCESS })
                dispatch(getWeWorkOnline())
            } else {
                dispatch({ type: weWorkOnlineConstants.ADD_WE_WORK_ONLINE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateWeWorkOnline = (updateText) => {
    return async (dispatch) => {
        try {
            dispatch({ type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_REQUEST })
            const res = await axios.post("weWorkOnline/update", updateText``)
            if (res.status === 200) {
                dispatch({ type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_SUCCESS })
                dispatch(getWeWorkOnline())
            } else {
                dispatch({ type: weWorkOnlineConstants.GET_WE_WORK_ONLINE_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteWeWorkOnline = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete("weWorkOnline/delete", {
                data: { payload }
            })
            dispatch({ type: weWorkOnlineConstants.DELETE_WE_WORK_ONLINE_REQUEST })
            if (res.status === 202) {
                dispatch({ type: weWorkOnlineConstants.DELETE_WE_WORK_ONLINE_SUCCESS })
                dispatch(getWeWorkOnline())
            } else {
                const { error } = res.data
                dispatch({
                    type: weWorkOnlineConstants.DELETE_WE_WORK_ONLINE_FAILURE,
                    payload: {
                        error
                    }
                })
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}