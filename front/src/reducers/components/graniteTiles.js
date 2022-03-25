import { graniteTilesConstants } from "../../actions/constants"


const initialState = {
    graniteTiles: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case graniteTilesConstants.GET_GRANITE_TILES_SUCCESS:
            state = {
                ...state,
                graniteTiles: action.payload.graniteTiles,
            }
            break
    }
    return state
}