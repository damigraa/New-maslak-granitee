import axios from "../../helpers/axios"
import { standMonumentConstants } from "../constants"
import { updatedStandMonument, deletedStandMonument } from '../api/standMonument';

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

export const addStandMonument = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: standMonumentConstants.ADD_STAND_MONUMENT_REQUEST })
            const res = await axios.post("standMonument/create", form)
            if (res.status === 201) {
                dispatch({ type: standMonumentConstants.ADD_STAND_MONUMENT_SUCCESS })
                dispatch(getStandMonument())
            } else {
                dispatch({ type: standMonumentConstants.ADD_STAND_MONUMENT_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateStandMonument = (id, standMonument) => async (dispatch) => {
    try {
        const { data } = await updatedStandMonument(id, standMonument)
        dispatch({
            type: standMonumentConstants.UPDATE_STAND_MONUMENT_SUCCESS, payload: data
        })
        dispatch(getStandMonument())
    } catch (error) {
        console.log(error);
    }
}


export const deleteStandMonument = (id) => async (dispatch) => {
    try {
        await deletedStandMonument(id);

        dispatch({ type: standMonumentConstants.DELETE_STAND_MONUMENT_SUCCESS, payload: id });
        dispatch(getStandMonument())
    } catch (error) {
        console.log(error);
    }
}