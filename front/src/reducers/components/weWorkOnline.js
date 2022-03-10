import { weWorkOnlineConstants } from "../../actions/constants"


const initialState = {
    weWorkOnline: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case weWorkOnlineConstants.GET_WE_WORK_ONLINE_SUCCESS:
            state = {
                ...state,
                weWorkOnline: action.payload.weWorkOnline,
            }
            break

    }
    return state
}