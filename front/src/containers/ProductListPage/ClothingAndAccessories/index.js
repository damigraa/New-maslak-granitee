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
  const [sort, setSort] = useState("")

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
            {product.products.map((item) => (

              <div
                className="caContainer"
                key={item._id}
              >
                <Link
                  className="caImgContainer"
                  to={`/${item.slug}/${item._id}/p`}
                >
                  {<img src={generatePublicUrl(item.productPictures[0].img)} /> || null}
                </Link>
                <div className="caDescContainer">
                  <div className="caProductName">
                    <h4>???????????????? {item.name}
                      <h3>
                        ( {item.size}????.)
                      </h3>

                    </h4>
                  </div>
                  <div className="caProductPrice">
                    {item.price}
                    <BiRuble />
                  </div>

                  <div>
                    {item.weight} ????.
                  </div>
                  <div>
                    {item.description}
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
                  className="col-md-3 product-list__container-img">
                  {<img
                    className="product-list__img"
                    src={generatePublicUrl(product.productPictures[0].img)}
                  /> || null}
                </div>


                <div className="col-md-6">
                  <ul>
                    <li className="product-list__D-name" ><h2>???????????????? {product.name} </h2></li>
                    <li className="product-list__D-description">( {product.size}???? )</li>
                    <div className="product-list__D-block">
                      <li>?????? -{product.weight} ????.</li>
                      <li>{product.description}</li>

                    </div>

                  </ul>
                </div>
                <div className="col-md-3 product-list__container-price">
                  <div className="product-list__blockImg">
                    <div style={{ fontSize: "20px", margin: "10px 0 " }}>
                      {product.price}
                      <BiRuble />
                    </div>
                    <div>?????? ???????????? ???????????? -5%</div>
                    <div>???????????? ?????????????????????? -5%</div>
                  </div>
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
            <option value="name">???? ?????????? ???? ??-??</option>
            <option value="nameMinus">???? ?????????? ???? ??-??</option>
            <option value="price">???? ???????? ???? ???????????????? ?? ????????????????</option>
            <option value="priceMinus">???? ???????? ???? ???????????????? ?? ????????????????</option>
            <option value="updatedAtMinus">?????????? ??????????</option>
            <option value="updatedAt">?????????? ????????????</option>
          </select>
          <div className="disk__title" >??????????????????</div>
          <div className="disk__number">(?????????? ?????????????? - {product.products.length})</div>
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
            placeholder="?????????????? ????????????????"
            value={searchName}
            onChange={(e) => searchChangeHandler(e)}
          />
          <div className="menu__front"> 
            <div className="menu__text">
              <h4>???????????????? ????????????!</h4>
            </div>
          </div>
          <div>
            <h3 className="menu__title">?????????????????? ??????????????</h3>
            {category.categories.length > 0 ? renderFilter(category.categories) : null}
          </div>
        </div>
      </div>

    </Container >
  );
};

export default ClothingAndAccessories;
