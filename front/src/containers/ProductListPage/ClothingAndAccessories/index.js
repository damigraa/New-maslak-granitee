import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getProductsBySlug, searchProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";
import { BiRuble } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.scss";
import Container from "./Container";
import Loader from './../../../components/Small/Loader';
import { setProductView } from "../../../reducers/product.reducer";

const ClothingAndAccessories = (props) => {
  const [searchTimeout, setSearchTimeout] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [sort, setSort] = useState("updatedAtMinus")

  const product = useSelector(state => state.product);
  // console.log(product)
  const category = useSelector(state => state.category);
  // console.log(category)

  const dispatch = useDispatch();

  const renderFilter = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(

        <li className="menu__list" key={category.name}>
          {
            category.parentId ? <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> :
              <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<div>{renderFilter(category.children)}</div>) : null}
        </li>
      );
    }
    return myCategories;
  }
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug, sort));
    dispatch(getAllCategory());
  }, [sort]);

  const renderProducts = () => {


    if (product.products.length === 0) {
      return (
        <Loader />
      )
    }
    if (product.view === "plate") {
      return (
        <div className="">
          <Card className="row caRow">
            {product.products.map((product) => (

              <div
                className="caContainer"
                key={product._id}
              >
                <Link
                  className="caImgContainer"
                  to={`/${product.slug}/${product._id}/p`}
                >
                  {<img src={generatePublicUrl(product.productPictures[0].img)} /> || null}
                </Link>
                <div className="caDescContainer">
                  <div className="caProductName">
                    <h4>{product.name}</h4>
                  </div>
                  <div className="caProductPrice">
                    {product.price}
                    <BiRuble />
                  </div>
                  <div>
                    Описание
                  </div>
                  <div>
                    Что угодно
                  </div>
                  <div>
                    Любой текст
                  </div>
                </div>
              </div>
            ))}
          </Card>

        </div>
      )

    }


    if (product.view === "list") {
      return (
        <div>

          {product.products.map((product) => (
            <div className="container-fluid product-list ">
              <Link
                className="row"
                style={{ textDecoration: "none", color: "#566885" }}
                to={`/${product.slug}/${product._id}/p`}
              >
                <div
                  className="col-md-3 product-list__container-img"
                  style={{ height: "280px", width: "200px" }}>
                  {<img
                    className="product-list__img"
                    src={generatePublicUrl(product.productPictures[0].img)}
                  /> || null}
                </div>


                <div className="col-md-6">
                  <div className="">
                    <ul>
                      <li className="product-list__D-name" ><h2>{product.name}</h2></li>
                      <li className="product-list__D-description">{product.description}</li>
                      <div className="product-list__D-block">
                        <li>Размеры -  от 100х50см</li>
                        <li>Вес - от 100кг</li>
                        <li>Вес - от 100кг</li>
                        <li>Либо какой текст</li>
                        <li>Сейчас в наличии</li>
                        <li>Вес - от 100кг</li>
                      </div>

                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={{ fontSize: "20px", margin: "10px 0 " }}>
                    {product.price}
                    <BiRuble />
                  </div>
                  <div>При полной оплате -5%</div>
                  <div>Скидка пенсионерам -5%</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )

    }
  }

  function searchChangeHandler(e) {
    const { match } = props;
    setSearchName(e.target.value)
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout)
    }
    // dispatch(showLoader())
    if (e.target.value !== "") {
      setSearchTimeout(setTimeout((value) => {
        dispatch(searchProductsBySlug(match.params.slug, value))
      }, 1000, e.target.value))
    } else {
      dispatch(getProductsBySlug(match.params.slug));
    }

  }

  return (
    <Container>
      <div className="disk">
        <div style={{ display: "flex", alignItems: "center" }}>
          <select
            className="disk__select"
            style={{ width: "250px", height: "30px", position: "absolute", right: "100px", color: "black" }}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="name">По имени от А-Я</option>
            <option value="nameMinus">По имени от Я-А</option>
            <option value="price">По цене от дорогого к дешевому</option>
            <option value="priceMinus">По цене от дешевого к дорогому</option>
            <option value="updatedAtMinus">Самые новые</option>
            <option value="updatedAt">Самые старые</option>
          </select>
          <div className="disk__title" >Заголовок</div>
          <div className="disk__number">(Всего товаров - 7)</div>
        </div>


      </div>
      <div className="row">
        <div className="col-md-9">

          <div className="Sort" >
            <button
              className="Sort__plate"
              onClick={() => dispatch(setProductView('plate'))}
            />
            <button
              className="Sort__list"
              onClick={() => dispatch(setProductView('list'))}
            />
          </div>
          {renderProducts()}
        </div>
        <div className="col-md-3 menu">
          <input
            className="navbar__search"
            type="text"
            placeholder="Введите название"
            value={searchName}
            onChange={(e) => searchChangeHandler(e)}
          />
          <div className="menu__front">
            <div className="menu__text">
              <h4>Сезонная скидка!</h4>
            </div>
          </div>
          <div>
            <h3 className="menu__title">Категории Товаров</h3>
            {category.categories.length > 0 ? renderFilter(category.categories) : null}
          </div>
        </div>
      </div>

    </Container >
  );
};

export default ClothingAndAccessories;
