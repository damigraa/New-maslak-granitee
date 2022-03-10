import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteProductById } from "../../actions";
import Loader from '../../components/Loader';
import { generatePublicUrl } from '../../urlConfig'


export const RenderProducts = ({ setShow, showProductDetailsModal, setCurrentId, product }) => {

    const fileView = useSelector(state => state.product.view)
 
    const dispatch = useDispatch()
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }

    if (fileView === "plate") {
        return (
            <div className="fileplate">
                {!product ? <Loader /> :
                    product.map((item) =>
                        <div className='file-plate' >
                            <img
                                onClick={() => showProductDetailsModal(item)}
                                className="file__img"
                                src={generatePublicUrl(item.productPictures[0].img)}
                                alt={item.name}
                            />
                            <div className="file-plate__name"
                                style={{ color: '#f1c40f' }}
                            >{item.name}</div>
                            <div className="file-plate__btns">
                                <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                                <button className="btn btn-secondary" onClick={() => dispatch(deleteProductById(item._id))}>Удалить</button>
                            </div>
                        </div>
                    )}
            </div>
        )
    }else{
        return (
            <div>
                <div className="file-title">
                    <div className="file-title__img">Фото</div>
                    <div className="file-title__name">Название</div>
                    {/* <div className="file-title__date">Категория</div> */}
                    <div className="file-title__size">Цена</div>
                </div>
                {!product ? <Loader /> :
                    product.map((item) =>
                        <div className="file" key={item._id}>
                            <img className="file__img"
                                onClick={() => showProductDetailsModal(item)}
                                src={generatePublicUrl(item.productPictures[0].img)}
                                alt={item.name} />
                            <div className="file__block-name">
                                <div className="file__name"
                                    style={{ color: '#f1c40f' }}
                                >
                                    {item.name}
                                </div>
                                <div className="file__category">{item.category.name}</div>
                            </div>
                            {/* <div className="file__date">{item.category.name}</div> */}
                            <div className="file__size"
                                style={{ color: '#f1c40f' }}
                            >{item.price} руб.</div>
                            <button className="file__btn file__download" onClick={() => Edit(item)}>Редактировать</button>
                            <button className="file__btn file__delete " onClick={() => dispatch(deleteProductById(item._id))}>Удалить</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
