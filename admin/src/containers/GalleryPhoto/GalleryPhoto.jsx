import React, { useState } from 'react'
import Modal from '../../components/UI/Modal';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addGallery, deleteGalleryById } from './../../actions/galleryImage.action';
import { generatePublicUrl } from '../../urlConfig';

const GalleryPhoto = (props) => {
    const gallery = useSelector(state => state.gallery)
    const [name, setName] = useState("");
    const [createModal, setCreateModal] = useState(false);
    const [galleryPictures, setGalleryPictures] = useState([]);
    const dispatch = useDispatch()



    const submitGalleryForm = () => {

        if (name === "") {
            alert('Поле название Обязательно');
            // setCreateModal(false); 
            return;
        }
        const form = new FormData();
        form.append("name", name);
        for (let pic of galleryPictures) {
            form.append("galleryPictures", pic);
        }
        dispatch(addGallery(form)).then(() => setCreateModal(false))
    }
    const deleteProductPicture = () => {
        setGalleryPictures([])
    }
    const handleProductPictures = (e) => {
        setGalleryPictures([...galleryPictures, e.target.files[0]]);
    };


    const renderCreateGalleryImageModal = () => {
        return (
            <Modal
                show={createModal}
                modalTitle={'Добавить новые фотографии'}
                handleClose={() => setCreateModal(false)}
                onSubmit={submitGalleryForm}
            >
                <Container>
                    <Row>
                        <Col>
                            <Input
                                label="Название"
                                value={name}
                                placeholder={"Добавить имя"}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>
                    </Row>

                    {galleryPictures.length > 0
                        ? galleryPictures.map((pic, index) => (
                            <div key={index}>{pic.name}</div>
                        ))
                        : null}
                    <input
                        type="file"
                        name="galleryImage"
                        onChange={handleProductPictures}
                        multiple={true}
                    />
                    <button onClick={(e) => deleteProductPicture(e)}>Удалить фото</button>

                </Container>
            </Modal>

        )
    }
    const renderGallery = () => {
        return (
            <div className="">
                {gallery.galleries.map((gallery) =>
                    <div style={{ background: "#fff", margin: "10px", padding: "20px" }}>
                        <div style={{ display: "flex" }}>
                            <div className="file-plate__name">
                                <h3>{gallery.name} </h3>
                            </div>
                            <button
                                style={{ position: "absolute", right: "50px" }}
                                onClick={() => {
                                    const payload = {
                                        galleryId: gallery._id,
                                    };
                                    dispatch(deleteGalleryById(payload));
                                }}
                            >
                                Удалить
                 </button>
                        </div>

                        <div style={{ display: "flex" }} >
                            <div>
                                {gallery.galleryPictures.map((i, index) =>
                                    <img
                                        key={index}
                                        style={{ margin: "10px", height: "120px", width: "80px" }}
                                        src={generatePublicUrl(i.img)}
                                        alt={gallery.name}
                                    />

                                )}
                            </div>                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <Layout sidebar>
            <h2>ГАЛЕРЕЯ ФОТОГРАФИЙ</h2>
            {
                gallery.loading ?
                    <p>Создание страницы, пожалуйста подождите...</p>
                    :
                    <div>
                        {renderCreateGalleryImageModal()}
                        <button onClick={() => setCreateModal(true)}>Создать Галерею</button>
                    </div>
            }
            {renderGallery()}
        </Layout>
    )
}

export default GalleryPhoto
