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
	const cursorStyle = {
		left: (26 + cursor.x * 9) + "px",
		top: (cursor.y * 36) + "px"
	};

	function setX (nx) {
		let ny = cursor.y;
		if (nx < 0) {
			if (ny > 0) {
				// go to previous line
				ny -= 1;
				nx = text[ny].length - 1;
			} else {
				nx = 0;
			}
		} else if (nx >= text[cursor.y].length) {
			if (ny + 1 < text.length) {
				// go to next line
				ny += 1;
				nx = 0;
			} else {
				nx = text[ny].length - 1;
			}
		}
		setCursor({x: nx, y: ny});
	}

	function setY (ny) {
		let nx = cursor.x;
		if (ny < 0) {
			// move cursor to top-left
			ny = 0;
			nx = 0;
		} else if (ny < text.length) {
			if (nx >= text[ny].length) {
				nx = text[ny].length - 1;
			}
		} else {
			// move cursor to bottom-right
			ny = text.length - 1;
			nx = text[ny].length - 1;
		}
		setCursor({x: nx, y: ny});
	}

	const lines = text.map((lineText, lineNumber) => {
		return <Line key={lineNumber} {...{lineText, lineNumber, cursor, setCursor}} />;
	});

	function handleKeyDown (e) {
		const keyCode = e.keyCode;
		// const key = e.key;

		if (keyCode >= 36 && keyCode <= 40) {
			e.preventDefault();

			let {x, y} = cursor;
			switch (keyCode) {
				case 37:
					// left arrow
					setX(x - 1);
					break;
				case 38:
					// up arrow
					setY(y - 1);
					break;
				case 39:
					// right arrow
					setX(x + 1);
					break;
				case 40:
					// down arrow
					setY(y + 1);
					break;
				default:
					// nothing happens here
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
				<div className="Cursor" style={cursorStyle}></div>
				{lines}
			</div>
		</div>
	);
}
