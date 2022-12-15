import React, { useContext, useState } from "react";
import "./stylepage.css";
import { UsernameContext } from "../../context/UsernameContext";
import Message from "../Message/Message";

const StylePage = () => {
  const { username } = useContext(UsernameContext);
  const [ showOpen, setShowOpen] = useState(false);
  const [ optionValue, setOptionValue] = useState("");

    const handleShowOpen = (e) => {
        setOptionValue(e.target.value);
        setShowOpen(true);
    }

    const handleShowClose = () => setShowOpen(false);

  return (
    <div className="StyleContainer">
      <div className="StyleUsernameBox">
        <h3>{username}</h3>
      </div>
      <div className="StyleSelectContainer">
        {showOpen && <Message text={optionValue} onClear={handleShowClose} /> }
        <select onChange={handleShowOpen} className="StyleSelectBox">
          <option value="" disabled selected>
            Choose css class
          </option>
          <option value="input">.input</option>
          <option value="dropdown">.dropdown</option>
          <option value="noBorders">.noBorders</option>
        </select>

      </div>
    </div>
  );
};

export default StylePage;
