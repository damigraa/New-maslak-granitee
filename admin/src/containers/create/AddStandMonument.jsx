

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addStandMonument } from '../../actions/components/standMonument';
import { updateStandMonument } from '../../actions/components/standMonument';


export const AddStandMonument = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const standMonument = useSelector((state) => currentId ? state.standMonument.standMonument.find((stand) => stand._id === currentId) : null)

    const [img, setImg] = useState([]);

    const [standMonumentForm, setStandMonument] = useState({
        name: "",
        size: "",
        price: "",
        description: "",
        weight: ""
    })


    useEffect(() => {
        if (standMonument) setStandMonument(standMonument)
    }, [standMonument])


    const submitStandMonumentForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateStandMonument(currentId, standMonumentForm))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", standMonumentForm.name);
            form.append("size", standMonumentForm.size);
            form.append("price", standMonumentForm.price);
            form.append("description", standMonumentForm.description);
            form.append("weight", standMonumentForm.weight);
            for (let pic of img) {
                form.append("img", pic);
            }
            dispatch(addStandMonument(form)).then(() => handleClose());
        }

    };



    function fileUploadHandler(event) {
        const files = [...event.target.files]
        // files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    const handleProductPictures = (e) => {
        setImg([...img, e.target.files[0]]);
    };

    const clear = () => {
        setCurrentId(null)
        setStandMonument({
            name: "",
            size: "",
            price: "",
            description: "",
            weight: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить новый продукт"}
            onSubmit={submitStandMonumentForm}
        >

            <Input
                label="Название"
                name="name"
                value={standMonumentForm.name}
                placeholder={`Название`}
                onChange={(e) => setStandMonument({ ...standMonumentForm, name: e.target.value })}
            />
            <Input
                label="Размер"
                name="size"
                value={standMonumentForm.size}
                placeholder={"Размер"}
                onChange={(e) => setStandMonument({ ...standMonumentForm, size: e.target.value })}
            />
            <Input
                label="Цена"
                name="price"
                value={standMonumentForm.price}
                placeholder={"Цена"}
                onChange={(e) => setStandMonument({ ...standMonumentForm, price: e.target.value })}
            />
            <Input
                label="Вес"
                name="weight"
                value={standMonumentForm.weight}
                placeholder={"Вес"}
                onChange={(e) => setStandMonument({ ...standMonumentForm, weight: e.target.value })}

            />
            <Input
                label="Подробное описание"
                name="description"
                value={standMonumentForm.description}
                placeholder={"Подробное описание"}
                onChange={(e) => setStandMonument({ ...standMonumentForm, description: e.target.value })}
            />
            {img.length > 0
                ? img.map((pic, index) => (
                    <div key={index}>{pic.name}</div>
                ))
                : null}
            <input
                type="file"
                name="img"
                onChange={handleProductPictures}
                required
                multiple
            />
            <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input" />

            {/* <button onClick={(e) => clearAddedPhotos(e)}>Удалить фото</button> */}
        </Modal>
    )
}
