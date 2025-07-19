import React, { useRef, useState } from "react";
import "./MediaCard.css";
import GradientButton from "./GradientButton";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MAX_LINES = 3;

const MediaCard = ({ id, title, description }) => {
	const navigate = useNavigate();
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
					{!readMore && description.split(" ").length > 14 && (
						<span
							className="read-more"
							onClick={() => setReadMore(true)}
						>
							Read more...
						</span>
					)}
				</p>
				<GradientButton
					onClick={() => navigate(`item/${id}`)}
					sx={{
						minWidth: "50px",
						height: "50px",
						borderRadius: "12px",
						background: "linear-gradient(to top right, #f88f40, #f15a24)",
						boxShadow: "0 8px 16px rgba(241, 90, 36, 0.3)",
						color: "#fff",
						padding: 0,
						"&:hover": {
						background: "linear-gradient(to top right, #f77b2e, #e94e17)",
						boxShadow: "0 8px 20px rgba(241, 90, 36, 0.4)",
						},
					}}
					>
						<ChevronRightIcon sx={{ fontSize: 28 }} />
				</GradientButton>

			</div>
		</div>
	);
};

export default MediaCard;
