import React, { useState } from 'react'
import { MaterialButton, MaterialInput } from '../MaterialUI';
import { useDispatch, useSelector } from "react-redux";
import { login, signout,  signup as _signup } from '../../actions';

const CreateUser = ({ auth, signup }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const userSignup = () => {
        const user = { firstName, lastName, email, password };
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""
        ) {
            return;
        }
   
        dispatch(_signup(user));
    };
    const userLogin = () => {
        if (signup) {
            userSignup();
        } else {
            dispatch(login({ email, password }));
        }
    };


    return (
        <div className="authContainer">
            <div className="row-h">
                <div className="leftspace">
                    <h2>Войти</h2>
                    <p>Войдите в свой личный кабинет для оформления заказа</p>
                </div>
                <div className="rightspace">
                    <div className="loginInputContainer">
                        {auth.error && (
                            <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                        )}
                        {signup && (
                            <MaterialInput
                                type="text"
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        )}
                        {signup && (
                            <MaterialInput
                                type="text"
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        )}
                        <MaterialInput
                            type="text"
                            label="Email/Mobile Number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MaterialInput
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        // rightElement={<a href="#">Forgot?</a>}
                        />
                        <MaterialButton
                            style={{ textAlign: "center" }}
                            title={signup ? "Register" : "Login"}
                            bgColor="#fb641b"
                            textColor="#ffffff"
                            style={{
                                margin: "40px 0 20px 0",
                            }}
                            onClick={userLogin}
                        />
                        {/* <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                /> */}
                    </div>
                </div>




            </div>
        </div>



    )
}

export default CreateUser
