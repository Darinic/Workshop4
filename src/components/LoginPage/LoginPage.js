import React from "react";
import { useState, useContext } from "react";
import {useNavigate } from "react-router-dom";
import { UsernameContext } from "../../context/UsernameContext";
import Message from "../Message/Message";
import './LoginPage.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const {username, setUsername} = useContext(UsernameContext);

    const [usernameInput, setUsernameInput] = useState("");
    const [showOpen, setShowOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(usernameInput.length >= 3 && usernameInput.length <= 20) {
            setUsername(usernameInput); 
            setShowOpen(true);
        }
        else {
            alert("Username must be between 3 and 20 characters");
        }
    }

    const handleChange = (e) => {
        setUsernameInput(e.target.value);
    }

    const onClear = () => {
        setShowOpen(false);
        navigate("/style");
    }


    return (
        <>
        {showOpen && <Message text={username} onClear={onClear} />}
        <div className="LoginPage">
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="username" type="text" placeholder="Username" minLength={3} maxLength={20}/>
            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default LoginPage;