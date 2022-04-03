import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllCategory } from './../actions/category.action';
import { useEffect } from 'react';
import catalogPhoto from '../assets/catalog.jpg'
import { generatePublicUrl } from '../urlConfig';
import CatalogTitle from './CatalogTitle';
const Catalogs = () => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    const renderFilter = (categories) => {

        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <>
                    <div className="catalog__container"
                        key={category.name}
                    >
                        {
                            category.parentId ?
                                <div className="catalog__block" key={category.name}>
                                    <a 
                                        href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
                                    >
                                        <div className="catalog__image">
                                            {<img className="catalog__img" src={generatePublicUrl(category.categoryImage)}
                                            /> || <img src={generatePublicUrl(catalogPhoto)} />}
                                        </div>
                                        <div className="catalog__containerName">
                                            <h5 className="catalog__name">{category.name}</h5>
                                        </div>
                                    </a>
                                </div>
                                : null
                        }

                    </div>
                    {category.children.length > 0 ? (
                        <>
                            {renderFilter(category.children)}
                        </>) : null}
                </>

            );
        }
        return myCategories;
    }
    useEffect(() => {
        dispatch(getAllCategory(category));
    }, []);



    return (
        <div className="catalog">
            <div className="container">
                <div>
                    <div className="catalog__title">
                        <CatalogTitle />
                    </div>

                    <div className="catalog__flex-block">
                        {category.categories.length > 0 ? renderFilter(category.categories) : null}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Catalogs;
