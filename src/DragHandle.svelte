<div on:mousedown|stopPropagation={dragStart} class={position} />

<script>
	import { updateLetter, letters } from './stores';

	export let id;
	export let position;

	$: letterObj = $letters.find(l => l.id === id);

	let offsetX = 0;
	let offsetY = 0;

	function dragStart(event) {
		window.addEventListener('mouseup', dragEnd);
		window.addEventListener('mousemove', drag);
		offsetX = event.clientX;
		offsetY = event.clientY;
	}

	function drag(event) {
		let updates = {};

		if (position === 'top-left') {
			updates = {
				width: letterObj.width + (offsetX - event.clientX),
				height: letterObj.height + (offsetY - event.clientY),
				x: letterObj.x - (offsetX - event.clientX),
				y: letterObj.y - (offsetY - event.clientY)
			};
		} else if (position === 'top') {
			updates = {
				height: letterObj.height + (offsetY - event.clientY),
				y: letterObj.y - (offsetY - event.clientY)
			};
		} else if (position === 'top-right') {
			updates = {
				width: letterObj.width - (offsetX - event.clientX),
				height: letterObj.height + (offsetY - event.clientY),
				y: letterObj.y - (offsetY - event.clientY)
			};
		} else if (position === 'left') {
			updates = {
				width: letterObj.width + (offsetX - event.clientX),
				x: letterObj.x - (offsetX - event.clientX)
			};
		} else if (position === 'right') {
			updates = {
				width: letterObj.width - (offsetX - event.clientX)
			};
		} else if (position === 'bottom-left') {
			updates = {
				width: letterObj.width + (offsetX - event.clientX),
				height: letterObj.height - (offsetY - event.clientY),
				x: letterObj.x - (offsetX - event.clientX)
			};
		} else if (position === 'bottom') {
			updates = {
				height: letterObj.height - (offsetY - event.clientY)
			};
		} else if (position === 'bottom-right') {
			updates = {
				width: letterObj.width - (offsetX - event.clientX),
				height: letterObj.height - (offsetY - event.clientY)
			};
		}

		if (updates.width < 50) {
			updates.width = 50;
			updates.x = letterObj.x;
		}

		if (updates.height < 50) {
			updates.height = 50;
			updates.y = letterObj.y;	
		}

		updateLetter(id, updates);

	  offsetX = event.clientX;
	  offsetY = event.clientY;
	}

	function dragEnd() {
		window.removeEventListener('mouseup', dragEnd);
		window.removeEventListener('mousemove', drag);
	}
</script>

<style>
div {
	position: relative;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: var(--blue);
	border: 2px solid var(--white);
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.3);
  z-index: 3;
}

.top-left {
	grid-area: top-left;
	align-self: start;
	justify-self: start;
	cursor: nwse-resize;
}

.top {
	grid-area: top;
	align-self: start;
	justify-self: center;
	cursor: ns-resize;
}

.top-right {
	grid-area: top-right;
	align-self: start;
	justify-self: end;
	cursor: nesw-resize;
}

.left {
	grid-area: left;
	align-self: center;
	justify-self: start;
	cursor: ew-resize;
}

.right {
	grid-area: right;
	align-self: center;
	justify-self: end;
	cursor: ew-resize;
}

.bottom-left {
	grid-area: bottom-left;
	align-self: end;
	justify-self: start;
	cursor: nesw-resize;
}

.bottom {
	grid-area: bottom;
	align-self: end;
	justify-self: center;
	cursor: ns-resize;
}

.bottom-right {
	grid-area: bottom-right;
	align-self: end;
	justify-self: end;
	cursor: nwse-resize;
}
</style>
