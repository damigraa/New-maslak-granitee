import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from './Small/Loader';
import { getCatalogTitle } from './../actions/components/catalogTitle';

const CatalogTitle = () => {
    const catalogTitle = useSelector((state) => state.catalogTitle.catalogTitle)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCatalogTitle(catalogTitle));
    }, []);



    return (
        <>
            {!catalogTitle ? <Loader /> :
                catalogTitle.map((item) =>
                    <div key={item._id} className="catalog__title">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>

                    </div>
                )
            }
        </>
    );
};

export default CatalogTitle;
