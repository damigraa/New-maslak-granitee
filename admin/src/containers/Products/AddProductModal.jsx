

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, updateProductById } from '../../actions';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';


export const AddProductModal = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category)
    const product = useSelector((state) => currentId ? state.product.products.find((m) => m._id === currentId) : null)
    const [productPictures, setProductPictures] = useState([]);
    const [productForm, setProductForm] = useState({
        name: "",
        quantity: "",
        price: "",
        description: "",
        categoryId: "",
    })
    const [productPrice, setProductPrice] = useState([
        { id: uuidv4(), newPrice: '', size: '' },
    ]);
    const handleChangeInput = (id, event) => {
        const newInputFields = productPrice.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setProductPrice(newInputFields);
    }

    const handleAddFields = () => {
        setProductPrice([...productPrice, { id: uuidv4(), newPrice: '', size: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...productPrice];
        values.splice(values.findIndex(value => value.id === id), 1);
        setProductPrice(values);
    }

    useEffect(() => {
        if (product) setProductForm(product)
    }, [product])

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
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", productForm.name);
            form.append("quantity", productForm.quantity);
            form.append("price", productForm.price);
            form.append("description", productForm.description);
            form.append("category", productForm.categoryId);
            form.append("productPrice", productPrice);
            for (let pic of productPictures) {
                form.append("productPicture", pic);
            }
            dispatch(addProduct(form)).then(() => handleClose());
        }

    };

    const handleProductPictures = (e) => {
        setProductPictures([...productPictures, e.target.files[0]]);
    };

    const clear = () => {
        setCurrentId(null)
        setProductForm({
            name: "",
            quantity: "",
            price: "",
            description: "",
            categoryId: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить новый продукт"}
            onSubmit={submitProductForm}
        >
            {productPrice.map(item => (
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
            ))}
            <Input
                label="Название"
                name="name"
                value={productForm.name}
                placeholder={`Название`}
                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
            />
            <Input
                label="Количество"
                name="quantity"
                value={productForm.quantity}
                placeholder={`Количество`}
                onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
            />
            <Input
                label="Цена"
                name="price"
                value={productForm.price}
                placeholder={`Цена`}
                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
            />
            <Input
                label="Подробное описание"
                name="description"
                value={productForm.description}
                placeholder={`Подробное описание`}
                onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
            />
            {
                !currentId ? <select
                    className="form-control"
                    name="categoryId"
                    value={productForm.categoryId}
                    onChange={(e) => setProductForm({ ...productForm, categoryId: e.target.value })}
                >
                    <option>Выбрать Категорию</option>
                    {createCategoryList(category.categories).map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select> : null
            }

            {productPictures.length > 0
                ? productPictures.map((pic, index) => (
                    <div key={index}>{pic.name}</div>
                ))
                : null}
            <input
                type="file"
                name="productPicture"
                onChange={handleProductPictures}
                required
            />
            <button onClick={(e) => clearAddedPhotos(e)}>Удалить фото</button>
        </Modal>
    )
}
