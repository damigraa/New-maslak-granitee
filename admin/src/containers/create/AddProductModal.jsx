

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, getGraniteTiles, getStandMonument, updateProductById } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import MultipleSelectChip from '../../siteSetting/containers/Chip';
import { getTombstoneCurb } from './../../actions/components/tombstoneCurb';


export const AddProductModal = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category)
    const standMonument = useSelector((state) => state.standMonument.standMonument)
    const tombstoneCurb = useSelector((state) => state.tombstoneCurb.tombstoneCurb)
    const graniteTiles = useSelector((state) => state.graniteTiles.graniteTiles)
    console.log(standMonument)
    const product = useSelector((state) => currentId ? state.product.products.find((m) => m._id === currentId) : null)
    const [productPictures, setProductPictures] = useState("");
    const [productForm, setProductForm] = useState({
        name: "",
        quantity: "",
        price: "",
        description: "",
        categoryId: "",
        size: "",
        weight: "",
    })
    const [productPrice, setProductPrice] = useState([
        { id: uuidv4(), newPrice: '', size: '' },
    ]);
    // const handleChangeInput = (id, event) => {
    //     const newInputFields = productPrice.map(i => {
    //         if (id === i.id) {
    //             i[event.target.name] = event.target.value
    //         }
    //         return i;
    //     })

    //     setProductPrice(newInputFields);
    // }

    // const handleAddFields = () => {
    //     setProductPrice([...productPrice, { id: uuidv4(), newPrice: '', size: '' }])
    // }

    // const handleRemoveFields = id => {
    //     const values = [...productPrice];
    //     values.splice(values.findIndex(value => value.id === id), 1);
    //     setProductPrice(values);
    // }

    useEffect(() => {
        if (product) setProductForm(product)
    }, [product])
    useEffect(() => {
        dispatch(getStandMonument())
        dispatch(getTombstoneCurb())
        dispatch(getGraniteTiles())
    }, [])

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options);
            }
        }

        return options;
    };
    const clearAddedPhotos = () => {
        setProductPictures([])
    }

    const submitProductForm = () => {
        if (currentId) {
            dispatch(updateProductById(currentId, productForm))
            // handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", productForm.name);
            form.append("quantity", productForm.quantity);
            form.append("price", productForm.price);
            form.append("description", productForm.description);
            form.append("category", productForm.categoryId);
            form.append("productPrice", productPrice);
            form.append("size", productForm.size);
            form.append("weight", productForm.weight);
            for (let i = 0; i < productPictures.length; i++) {
                form.append("productPictures", productPictures[i]);
            }
            dispatch(addProduct(form)).then(() => handleClose());
        }

    };

    const handleProductPictures = (e) => {
        setProductPictures(e.target.files);
    };

    const clear = () => {
        setCurrentId(null)
        setProductForm({
            name: "",
            quantity: "",
            price: "",
            description: "",
            categoryId: "",
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
            {/* {productPrice.map(item => (
                <div key={item.id}>
                    <TextField
                        name="newPrice"
                        label="newPrice"
                        variant="filled"
                        value={item.newPrice}
                        onChange={event => handleChangeInput(item.id, event)}
                    />
                    <TextField
                        name="size"
                        label="size"
                        variant="filled"
                        value={item.size}
                        onChange={event => handleChangeInput(item.id, event)}
                    />
                    <IconButton disabled={productPrice.length === 1} onClick={() => handleRemoveFields(item.id)}>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton
                        onClick={handleAddFields}
                    >
                        <AddIcon />
                    </IconButton>
                </div>
            ))} */}
            <Input
                label="????????????????"
                name="name"
                value={productForm.name}
                placeholder={`????????????????`}
                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
            />
            <Input
                label="????????????????????"
                name="quantity"
                value={productForm.quantity}
                placeholder={`????????????????????`}
                onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
            />
            <Input
                label="????????"
                name="price"
                value={productForm.price}
                placeholder={`????????`}
                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
            />
            <Input
                label="?????????????????? ????????????????"
                name="description"
                value={productForm.description}
                placeholder={`?????????????????? ????????????????`}
                onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
            />
            <Input
                label="?????????????? ??????????????????"
                name="size"
                value={productForm.size}
                placeholder={`?????????????? ??????????????`}
                onChange={(e) => setProductForm({ ...productForm, size: e.target.value })}
            />
            <Input
                label="?????? ???????????????? ??????????????"
                name="weight"
                value={productForm.weight}
                placeholder={`??????`}
                onChange={(e) => setProductForm({ ...productForm, weight: e.target.value })}
            />
            <MultipleSelectChip
                title="??????????????????"
                items={standMonument}
            />
            <MultipleSelectChip
                title="????????????????"
                items={tombstoneCurb}
            />
            <MultipleSelectChip
                title="?????????????????? ????????????"
                items={graniteTiles}

            />
            {
                !currentId ? <select
                    className="form-control"
                    name="categoryId"
                    value={productForm.categoryId}
                    onChange={(e) => setProductForm({ ...productForm, categoryId: e.target.value })}
                >
                    <option>?????????????? ??????????????????</option>
                    {createCategoryList(category.categories).map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select> : null
            }

            {/* {productPictures.length > 0
                ? productPictures.map((pic, index) => (
                    <div key={index}>{pic.name}</div>
                ))
                : null} */}
            <input
                type="file"
                name="productPictures"
                onChange={(e) => handleProductPictures(e)}
                required
                multiple
            />
            {/* <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input" /> */}

            <button onClick={(e) => clearAddedPhotos(e)}>?????????????? ????????</button>
        </Modal>
    )
}
