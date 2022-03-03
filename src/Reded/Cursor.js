


export default function Cursor ({x, y}) {
	const cursorStyle = {
		left: (26 + x * 9) + "px",
		top: (y * 36) + "px"
	};

	return (
		<div className="Cursor" style={cursorStyle}></div>
	);
}
