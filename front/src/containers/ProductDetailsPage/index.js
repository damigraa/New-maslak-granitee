import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById, getStandMonument } from './../../actions';
import Layout from './../../components/Layout';

import './style.css';
import { generatePublicUrl } from './../../urlConfig';
import RenderSection from '../../containers/render/renderSection';
import RenderStandMonumentModal from './../ProdContainer/StandMonumentModal';
import RenderTombstoneCurbModal from './../ProdContainer/TombstoneCurb';
import { addToCart } from './../../actions/cart.action';
import RenderGraniteTilesModal from '../ProdContainer/GraniteTilesModal';
import RenderProductImg from '../render/renderProductImg';
import ModalPrice from './ModalPrice';
import ProductImgSliderModal from './ProductImgSliderModal';
import ProductModalContainer from './ProductModalContainer';
import { Breed } from '../../components/MaterialUI';
import { IoIosArrowForward } from 'react-icons/io';
import RenderMakingDetails from './../ProdContainer/RenderMakingDetails';
import EngravingOnGranite from './../ProdContainer/EngravingOnGranite';


const ProductDetailsPage = (props) => {

  const product = useSelector(state => state.product)



  const [SizeMemorials, setSizeMemorials] = useState("")
  const [SizeCurb, setSizeCurb] = useState("")
  const [tiles, setTiles] = useState("")


  const [totalPrice, setTotalPrice] = useState(product.productDetails);
  const [checkedTwo, setCheckedTwo] = useState(true);



  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const dispatch = useDispatch();


  useEffect(() => {
    const { productId } = props.match.params;
    const payload = {
      params: {
        productId
      }
    }
    dispatch(getProductDetailsById(payload));
  }, []);


  const priceProduct = Number(SizeMemorials) + Number(SizeCurb) + Number(tiles)

  var differencePensioners = priceProduct / 100 * 2
  var difference = priceProduct / 100 * 5
  var tallage = priceProduct / 100 * 93;

  if (!product) {
    return <div>
      <h1>Загрузка...</h1>
    </div>
  }

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }
  const Edit = (e) => {
    e.preventDefault()
    setShow(true)
  }
  return (
    <Layout>
      <form className="container prod">
        <div className="row">

          <Breed
            breed={[
              { name: "Главная", href: "/" },
              { name: "Памятники", href: "/" },
              { name: "Вертикальные", href: "/" },
              // { name: prod, href: "" },
            ]}
            breedIcon={<IoIosArrowForward />}
          />
        </div>
        <div className='row'>
          <h3 className='titleName'>
            {product.productDetails.name}
          </h3>
        </div>
        <div className="row">

          <div className="col-md-5">
            <div className="flexRow">
              <div className="productDescContainer">
                <ProductModalContainer
                  show={show}
                  handleClose={handleClose}
                  item={product.productDetails.productPictures}
                />
                <RenderProductImg
                  setShow={setShow}
                  product={product}
                />
                <RenderSection
                  product={product}
                />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <ModalPrice
              history={props.history}
              product={product}
              difference={difference}
              differencePensioners={differencePensioners}
              SizeMemorials={SizeMemorials}
              SizeCurb={SizeCurb}
              tiles={tiles}
            />
            <h2> {product.productDetails.name}</h2>
            <div>
              <RenderTombstoneCurbModal
                SizeMemorials={SizeMemorials}
                setSizeMemorials={setSizeMemorials}
              />
              <div>
                <RenderStandMonumentModal
                  SizeCurb={SizeCurb}
                  setSizeCurb={setSizeCurb}

                />
                <RenderGraniteTilesModal
                  tiles={tiles}
                  setTiles={setTiles}
                />
              </div>
            </div>
          </div>
          <EngravingOnGranite />
          <RenderMakingDetails />
        </div>
      </form>
    </Layout>
  )

}

export default ProductDetailsPage