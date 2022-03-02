


export default function Line ({
	lineText, lineNumber, cursor = false
}) {

	return (
		<div className="L">
			<span className="LN">{lineNumber + 1}</span>
			<span className="LT">{lineText}</span>
		</div>
	);
}
