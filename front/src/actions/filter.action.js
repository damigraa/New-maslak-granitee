import { filterConstants } from "./constants";


export const setSortBy = (name) => ({
    type: filterConstants.SET_SORT_BY,
    payload: name,
});
