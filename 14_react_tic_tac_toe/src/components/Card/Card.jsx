import React from "react";
import Icon from "../Icon/Icon";
import "./Card.css";

function Card({ gameEnd, player, onPlay, index }) {
	let icon = <Icon />;
	if (player === "x" || player === "X") {
		icon = <Icon name="cross" />;
	} else if (player === "o" || player === "O") {
		icon = <Icon name="circle" />;
	}
	return (
		<div
			onClick={() => !gameEnd && player == "" && onPlay(index)}
			className="card"
		>
			{icon}
		</div>
	);
}

export default Card;
