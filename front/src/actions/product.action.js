import { setProduct } from '../reducers/product.reducer'
import axios from './../helpers/axios'
import { productConstants } from './constants'

export const getProductsBySlug = (slug, sort) => {
    return async dispatch => {
        try {
            dispatch({ type: productConstants.GET_PRODUCTS_BY_SLUG_REQUEST })
            let url = `/products/${slug}`
            if (sort) {
                url = `/products/${slug}?sort=${sort}`
            }
            const res = await axios.get(url)
            if (res.status === 200) {
                dispatch({
                    type: productConstants.GET_PRODUCTS_BY_SLUG_SUCCESS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: productConstants.GET_PRODUCTS_BY_SLUG_FAILURE,
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
}
export const searchProductsBySlug = (slug, search) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/products/${slug}/search?search=${search}`)
            dispatch(setProduct(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params
            const res = await axios.get(`/page/${cid}/${type}`)
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST })
            if (res.status === 200) {
                const { page } = res.data 
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                })
            } else {
                const { error } = res.data
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
}


export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            res = await axios.get(`/product/${productId}`);
            console.log(res);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}


