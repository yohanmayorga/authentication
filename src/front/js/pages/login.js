import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {

        useEffect(() => {
                store.token && navigate("/private");
        });

        const [user, setUser] = useState({
                email: "",
                password: "",
                password_check: "",
                is_active: true
        });

        const { store, actions } = useContext(Context);
        const navigate = useNavigate();
        const [isShow, setIsShown] = useState(false);

        async function addUser() {
                if (user.password == user.password_check) {
                        let created = await actions.createUser(user)
                        if (created) { alert("User registered successfully") }
                }
                else {
                        console.log("error")
                }
        }

        function loginUser({ email, password }) {
                let isValid = actions.loginUser(email, password);
                if (isValid) {
                        navigate("/private");
                }
        }

        return (
                <div className="Login">
                        <section onSubmit={(e) => e.preventDefault}>
                                {!isShow ? <h1>Login</h1> : <h1>Sign up</h1>}
                                <div>
                                        <button className="FormButton" onClick={() => setIsShown(false)}>Log In</button>
                                        <button className="FormButton" onClick={() => setIsShown(true)}>Sign up</button>
                                </div>
                                <form className="Form">

                                        <input className="enterForm"
                                                type="text"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                required
                                        />

                                        <input className="enterForm"
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                required />

                                        {isShow && (
                                                <input className="enterForm"
                                                        type="password"
                                                        name="password_check"
                                                        id="password_check"
                                                        placeholder="Repeat Password"
                                                        onChange={(e) => setUser({ ...user, password_check: e.target.value })}
                                                        required />
                                        )}
                                        <input className="SendButton" type="submit" value={!isShow ? "Login" : "Sign up"} onClick={() => {
                                                if (!isShow) {
                                                        return loginUser(user);
                                                } else {
                                                        return addUser();
                                                }
                                        }} />
                                </form>
                        </section>
                </div>
        )
};