import React, { useRef, useState } from "react";
import "./MediaCard.css";
import GradientButton from "./GradientButton";

const MAX_LINES = 3;

const MediaCard = ({ id, title, description }) => {
	const [readMore, setReadMore] = useState(false);
	const descriptionRef = useRef(null);

	const getDisplayText = () => {
		if (readMore) return description;

		// Simple truncation for demo - you can make this more sophisticated
		const words = description.split(" ");
		if (words.length <= 14) return description; // Show full text if short

		return words.slice(0, 14)+",";
	};

	return (
		<div className="card">
			<img
				src={`https://picsum.photos/200?random=${id}`}
				alt={title}
				className="card-img"
			/>
			<h3 className="card-title">{title}</h3>
			<div className="card-content">
				<p className="card-description" ref={descriptionRef}>
					{getDisplayText()}
					{!readMore && description.split(" ").length > 15 && (
						<span
							className="read-more"
							onClick={() => setReadMore(true)}
						>
							Read more...
						</span>
					)}
				</p>
				<GradientButton />
			</div>
		</div>
	);
};

export default MediaCard;
