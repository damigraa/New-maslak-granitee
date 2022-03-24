import { tombstoneCurbConstants } from "../../actions/constants"


const initialState = {
    tombstoneCurb: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tombstoneCurbConstants.GET_TOMBSTONE_CURB_SUCCESS:
            state = {
                ...state,
                tombstoneCurb: action.payload.tombstoneCurb,
            }
            break
    }
    return state
}