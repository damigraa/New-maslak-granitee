

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addCeramics, updateCeramicById } from '../../actions';



export const AddCeramic = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const ceramic = useSelector((state) => currentId ? state.ceramics.ceramics.find((m) => m._id === currentId) : null)
    const [ceramicPictures, setCeramicPictures] = useState("");
    const [ceramicForm, setCeramicForm] = useState({
        name: "",
        price: "",
        description: "",
        categoryId: "",
        size: "",
        weight: "",
    })
    useEffect(() => {
        if (ceramic) setCeramicForm(ceramic)
    }, [ceramic])


    const clearAddedPhotos = () => {
        setCeramicPictures("")
    }

    const submitProductForm = () => {
        if (currentId) {
            dispatch(updateCeramicById(currentId, ceramicForm))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", ceramicForm.name);
            form.append("price", ceramicForm.price);
            form.append("description", ceramicForm.description);
            form.append("size", ceramicForm.size);
            form.append("weight", ceramicForm.weight);
            for (let i = 0; i < ceramicPictures.length; i++) {
                form.append("ceramicPictures", ceramicPictures[i]);
            }

            dispatch(addCeramics(form)).then(() => handleClose());
        }

    };

    const handleCeramicPictures = (e) => {
        setCeramicPictures(e.target.files);
    };

    const clear = () => {
        setCurrentId(null)
        setCeramicForm({
            name: "",
            price: "",
            description: "",
            weight: "",
            size: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"???????????????? ?????????? ??????????????"}
            onSubmit={submitProductForm}
        >
            <Input
                label="????????????????"
                name="name"
                value={ceramicForm.name}
                placeholder={`????????????????`}
                onChange={(e) => setCeramicForm({ ...ceramicForm, name: e.target.value })}
            />
            <Input
                label="????????"
                name="price"
                value={ceramicForm.price}
                placeholder={`????????`}
                onChange={(e) => setCeramicForm({ ...ceramicForm, price: e.target.value })}
            />
            <Input
                label="?????????????????? ????????????????"
                name="description"
                value={ceramicForm.description}
                placeholder={`?????????????????? ????????????????`}
                onChange={(e) => setCeramicForm({ ...ceramicForm, description: e.target.value })}
            />
            <Input
                label="?????????????? ??????????????????"
                name="size"
                value={ceramicForm.size}
                placeholder={`?????????????? ??????????????`}
                onChange={(e) => setCeramicForm({ ...ceramicForm, size: e.target.value })}
            />
            <Input
                label="?????? ???????????????? ??????????????"
                name="weight"
                value={ceramicForm.weight}
                placeholder={`??????`}
                onChange={(e) => setCeramicForm({ ...ceramicForm, weight: e.target.value })}
            />
            <input
                type="file"
                name="ceramicPictures"
                onChange={(e) => handleCeramicPictures(e)}
                required
                multiple
            />
            <button onClick={(e) => clearAddedPhotos(e)}>?????????????? ????????</button>
        </Modal>
    )
}
