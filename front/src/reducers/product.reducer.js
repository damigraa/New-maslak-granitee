import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  priceRange: {},
  productsByPrice: {},
  pageRequest: false,
  page: {},
  error: null,
  productDetails: {},
  loading: false,
  view: 'plate'
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case productConstants.GET_PRODUCTS_BY_SLUG_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        priceRange: action.payload.priceRange,
        productsByPrice: {
          ...action.payload.productsByPrice,
          loading: false
        },
      };
      break;
    case productConstants.GET_PRODUCTS_BY_SLUG_FAILURE:
      state = {
        ...state,
        loading: false
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_SUCCESS:
      state = {
        ...state,
        page: action.payload.page,
        pageRequest: false,
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_FAILURE:
      state = {
        ...state,
        pageRequest: false,
        error: action.payload.error,
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails
      }
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error
      }
      break;
    case productConstants.SET_VIEW:
      state = {
        ...state,
        view: action.payload
      }
  }

  return state;
};

export const setProductView = (payload) => ({ type: productConstants.SET_VIEW, payload })
export const setProduct = (products) => ({ type: productConstants.GET_PRODUCTS_BY_SLUG_SUCCESS, payload: products })