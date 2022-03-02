


export default function Line ({
	lineText, lineNumber, cursor, setCursor
}) {

	let className = "L";
	if (lineNumber === cursor.y) className = "L A";

	return (
		<div className={className} onClick={() => setCursor({x: cursor.x, y: lineNumber})}>
			<span className="LN">{lineNumber + 1}</span>
			<span className="LT">{lineText}</span>
		</div>
	);
}
