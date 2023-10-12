import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

export const Login = () => {

        const [user, setUser] = useState({
                email: "",
                password: "",
                password_check: "",
        });

        const { store, actions } = useContext(Context);

        async function addUser() {
                if (user.password == user.password_check) {
                        let created = await actions.createUser(user);
                        if (created) {
                                console.log("Todo bien")
                        }
                }
                else {
                        console.log("error")
                }
        }

        return (
                <form className="Login">

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


                        <label for="password_check">Password: </label>
                        <input
                                type="password"
                                name="password_check"
                                id="password_check"
                                placeholder="Repeat Password"
                                onChange={(e) => setUser({ ...user, password_check: e.target.value })}
                                required />


                        <input type="submit" value="Register" onClick={() => addUser()} />
                </form>
        )
};