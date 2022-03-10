import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MaterialInput } from '../MaterialUI';
import { createApplication } from '../../actions/application.action';
import { useDispatch } from 'react-redux';

const HelpModal = (props) => {
    const application = useSelector(state => state.application)
    const [firstName, setFirstName] = useState("")
    const [descriptionProblem, setDescriptionProblem] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [email, setEmail] = useState("")
    const [samplePhoto, setSamplePhoto] = useState("")
    const [showImg, setShowImg] = useState("")

    const dispatch = useDispatch()

    const submitApplicationForm = () => {
        const form = new FormData();
        form.append("firstName", firstName);
        form.append("descriptionProblem", descriptionProblem);
        form.append("email", email);
        form.append("contactNumber", contactNumber);
        form.append("samplePhoto", samplePhoto);


        dispatch(createApplication(form))
        
    };

    const handleSamplePhoto = e => { 
        setSamplePhoto(e.target.files[0])
    }
    return (
        <div className="container-fluid">
            <div className="container help">
                <div className="row">
                    <div className="head-under">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div class="form-group">
                            <MaterialInput
                                label="имя и фамилию"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <MaterialInput
                                label="номер телефона"
                                type="text"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <MaterialInput
                                label="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                style={{ height: "100px", width: "300px" }}
                                placeholder="Описание проблемы"
                                type="text"
                                value={descriptionProblem}
                                onChange={(e) => setDescriptionProblem(e.target.value)}
                            />
                            {/* <label
                                htmlFor="customText"
                                style={{ marginTop: "10px" }}
                                className="btn btn-info"
                                onChange={handleChangeImage.bind()}
                            >
                                Прикрепить фотографию

                                </label> */}
                            <input
                                className="btn btn-info"
                                style={{ marginTop: "10px" }}
                                // style={{ visibility: "hidden" }}
                                id="customText"
                                type="file"
                                name="samplePhoto"
                                onChange={handleSamplePhoto}
                            />
                        </div>
                        <button onClick={submitApplicationForm} class="btn btn-primary">Отправить</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HelpModal
