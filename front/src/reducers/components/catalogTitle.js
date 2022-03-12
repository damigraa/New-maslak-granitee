import { catalogTitleConstants } from "../../actions/constants"


const initialState = {
    catalogTitle: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case catalogTitleConstants.GET_CATALOG_TITLE_SUCCESS:
            state = {
                ...state,
                catalogTitle: action.payload.catalogTitle,
            }
            break

    }
    return state
}
