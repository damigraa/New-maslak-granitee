import React, { useEffect, useState } from 'react'
import { getCatalogTitle } from '../../actions'
import ContainerSiteSetting from '../ContainerSiteSetting';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';


const CatalogTitle = () => {
    const catalogTitle = useSelector((state) => state.catalogTitle.catalogTitle)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getCatalogTitle())
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={catalogTitle}
            setShow={handleShow}
            noLimit
            title={"Заголовок для Каталога"}
        >
            <div className="row">
                {!catalogTitle ? <Loader /> :
                    catalogTitle.map((item) =>
                        <div className="col-sm-3" key={item._id} style={{ textAlign: "center", height: "220px", paddingTop: "20px", margin: "auto" }}>
                            <div style={{ margin: "20px" }}>
                                <div>{item.title}</div>
                                <div>{item.description}</div>
                            </div>


                        </div>

                    )}
            </div >
            {/* <AddCatalogItem
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}

            />
            <RenderCatalogItem
                setShow={setShow}
                catalogTitle={catalogTitle}
                setCurrentId={setCurrentId}

            /> */}
        </ContainerSiteSetting>
    )
}

export default CatalogTitle
