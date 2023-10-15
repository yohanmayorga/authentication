import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/private.css";

export const Private = () => {

    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        !store.token && navigate("/login");
    });

    return (
        <div className="Private">
            <h1>Hello! {store.profile ? store.profile.email : ""}</h1>
        </div>
    )
};