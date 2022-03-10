
import React from 'react';
// import './../TypeGranite.scss';
// import CartItem from '../CartItem';

const ItemGranite = ({ material }) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center my-3">
            <h5>
                {material.name}
            </h5>
            <img className="w-100" src={material.graniteImg} alt="" />
            <h4>
                {material.colorText}
            </h4>
            <a href={`#${material.buttonHref}`} className="btn btn-light">Подробнее</a>
        </div>
    );
};

export default ItemGranite;

