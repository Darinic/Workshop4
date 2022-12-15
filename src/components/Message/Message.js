import React from "react";
import "./message.css";

const Message = ({text, onClear}) => { 

	return (
		<div className="message">
			<p className="message__text">{text}</p>
			<button className={"btn btn--red"} onClick={onClear}>
        OK
			</button>
		</div>
	);
};

export default Message;
