
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProducts } from "../../actions";
import { AddProductModal } from "./AddProductModal";
import { RenderProducts } from "./RenderProducts";
import { MainContainer } from './../MainContainer';
import { DetailsProduct } from "./DetailsProduct";

const Products = (props) => {

  const [show, setShow] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.products)
  console.log(product)
  
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    dispatch(getProducts())
  }, [])



  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };
  return (
    <MainContainer
      productSort
      fullFunctional
      search={searchProducts}
      get={getProducts}
      handleShow={handleShow}
    >
      <Container>
        <Row>
          <Col>
            <RenderProducts
              showProductDetailsModal={showProductDetailsModal}
              setShow={setShow}
              setCurrentId={setCurrentId}
              product={product}
            />
          </Col>
        </Row>
      </Container>
      <AddProductModal
        show={show}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <DetailsProduct
        productDetailModal={productDetailModal}
        productDetails={productDetails}
        setProductDetailModal={setProductDetailModal}
      />
    </MainContainer >
  );
};

export default Products;
