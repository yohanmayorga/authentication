import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

export const Login = () => {

        const [user, setUser] = useState({
                email: "",
                password: "",
                password_check: "",
                is_active: true
        });

        const { store, actions } = useContext(Context);

        const [isShow, setIsShown] = useState(false);

        async function addUser() {
                if (user.password == user.password_check) {
                        let created = await actions.createUser(user);
                }
                else {
                        console.log("error")
                }
        }

        return (
                <div className="Login">
                        {!isShow ? <h1>Login</h1> : <h1>Sign up</h1>}
                        <div>
                                <button className="FormButton" onClick={() => setIsShown(false)}>Log In</button>
                                <button className="FormButton" onClick={() => setIsShown(true)}>Sign up</button>
                        </div>
                        <form className="Form">

                                <label for="email">Email: </label>
                                <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        required
                                />

                                <label for="password">Password: </label>
                                <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        required />

                                {isShow && (
                                        <>
                                                <label for="password_check">Repeat Password: </label>
                                                <input
                                                        type="password"
                                                        name="password_check"
                                                        id="password_check"
                                                        placeholder="Repeat Password"
                                                        onChange={(e) => setUser({ ...user, password_check: e.target.value })}
                                                        required />
                                        </>
                                )}

                                <input type="submit" value={!isShow ? "Login" : "Sign up"} onClick={() => addUser()} />
                        </form>
                </div>
        )
};