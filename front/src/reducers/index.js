import category from './category.reducer';
import product from './product.reducer';
import auth from './auth.reducer';
import cart from './cart.reducer';
import user from './user.reducer';
import filters from './filter.reducer';
// import application from './application.reducer';
import header from './components/header'
import manufacture from './components/manufacture'
import chooseMemorialPhotos from './components/chooseMemorialPhotos'
import comeToUs from './components/comeToUs'
import engraving from './components/engraving'
import mainImage from './components/mainImage'
import promotion from './components/promotion'
import weWorkOnline from './components/weWorkOnline'
import payment from './components/payment'
import contact from './components/contact'
import graniteMaterial from './components/graniteMaterial'

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    category,
    product,
    auth,
    cart,
    user,
    filters,
    // application,
    header,
    manufacture,
    chooseMemorialPhotos,
    comeToUs,
    engraving,
    mainImage,
    promotion,
    weWorkOnline,
    payment,
    contact,
    graniteMaterial

});

export default rootReducer;