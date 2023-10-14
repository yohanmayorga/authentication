import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {

    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        !store.token && navigate("/login");
    });

    return (
        <div className="Private">
            <p>hola</p>
        </div>
    )
};