import {useState} from "react";

export const useUsernameCtx = () => {
    const [username, setUsername] = useState("");

    const setUserName = (username) => {
        setUsername(username);
    }

    return { username, setUserName}

}