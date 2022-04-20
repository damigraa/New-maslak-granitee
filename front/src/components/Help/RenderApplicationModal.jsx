import React, { useState } from 'react'
import { MaterialButton, MaterialInput, Modall, ShowAlert } from '../MaterialUI'
import { createApplication } from './../../actions/application.action';
import { useDispatch } from 'react-redux';

export const RenderApplicationModal = ({ handleClose, show }) => {
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState("")
    const [descriptionProblem, setDescriptionProblem] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [email, setEmail] = useState("")
    const [samplePhoto, setSamplePhoto] = useState("")

    const hhh = () => handleClose()

    const submitApplicationForm = () => {
        const form = new FormData();
        form.append("firstName", firstName);
        form.append("descriptionProblem", descriptionProblem);
        form.append("email", email);
        form.append("contactNumber", contactNumber);
        form.append("samplePhoto", samplePhoto);

        dispatch(createApplication(form), hhh())
   
    };
 
    const handleSamplePhoto = e => {
        setSamplePhoto(e.target.files[0])
    }
    return (
        <Modall
            visible={show}
            onClose={hhh}
            onSubmit={submitApplicationForm}
        >
            <div className="authContainer">
                <div className="row-h">
                    <div className="leftspace">
                        <h2>Подберем модель и ответим на все вопросы бесплатно</h2>
                        <p>Оставьте ваши контакты и мы перезвоним вам в течение 3-х минут</p>
                    </div>
                    <div className="rightspace">
                        <div className="loginInputContainer">
                            <MaterialInput
                                label="имя"
                                type="text"
                                value={firstName}
                                placeholder={`Введите имя`}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <MaterialInput
                                type="text"
                                label="номер"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <MaterialInput
                                type="text"
                                label="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                style={{ height: "100px", width: "300px", marginTop: "10px" }}
                                placeholder="Описание проблемы"
                                type="text"
                                value={descriptionProblem}
                                onChange={(e) => setDescriptionProblem(e.target.value)}
                            />
                            <input
                                className="btn btn-info"
                                style={{ marginTop: "10px" }}
                                // style={{ visibility: "hidden" }}
                                id="customText"
                                type="file"
                                name="samplePhoto"
                                onChange={handleSamplePhoto}
                            />
                            <MaterialButton
                                title={"Оставить запрос"}
                                bgColor="#fb641b"
                                textColor="#ffffff"
                                style={{
                                    margin: "40px 0 20px 0",
                                }}
                                onClick={submitApplicationForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Modall>

    )
}
