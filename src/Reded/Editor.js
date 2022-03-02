import React from 'react';

import Line from './Line';

import './Editor.css';



export default function Editor () {

	const [text, setText] = React.useState([
		"Hello.", "It's me.",
		"I was wondering if ...",
		"... after all these years ...",
		"... you'd like to meet."
	]);

	const [cursor, setCursor] = React.useState({x: 0, y: 0});
	function setCursorProperly (nx, ny) {
		if (nx < 0) nx = 0;
		if (ny < 0) ny = 0;
		if (ny >= text.length) ny = text.length - 1;
		setCursor({x: nx, y: ny});
	}

	const lines = text.map((lineText, lineNumber) => {
		return <Line key={lineNumber} {...{lineText, lineNumber, cursor, setCursor}} />;
	});

	function handleKeyDown (e) {
		const key = e.key;
		const keyCode = e.keyCode;
		if (keyCode >= 36 && keyCode <= 40) {
			e.preventDefault();

			let {x, y} = cursor;
			switch (keyCode) {
				case 37:
					// left arrow
					x -= 1;
					setCursorProperly(x, y); break;
				case 38:
					// up arrow
					y -= 1;
					setCursorProperly(x, y); break;
				case 39:
					// right arrow
					x += 1;
					setCursorProperly(x, y); break;
				case 40:
					// down arrow
					y += 1;
					setCursorProperly(x, y); break;
			}
			return;
		}
		console.log(keyCode);
	}

	return (
		<div className="Editor" onKeyDown={handleKeyDown} tabIndex="0">
			<header className="EditorHeader">
				<span>{cursor.y}</span>
				<span>{cursor.x}</span>
			</header>
			<div className="EditorBody">
				{lines}
			</div>
		</div>
	);
}
