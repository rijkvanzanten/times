<div 
	class="letter-parent {dragging ? 'dragging' : ''} {letterObj.hover ? 'hover' : ''}"
	{id} 
	{style} 
	on:mousedown={dragStart}
	on:mouseover={hoverLetter}
	on:mouseout={unhoverLetter}>
	<svelte:component this={letterComponent} />
	<div class="handles">
		<div class="line" />
		<DragHandle {id} position="top-left" />
		<DragHandle {id} position="top" />
		<DragHandle {id} position="top-right" />
		<DragHandle {id} position="left" />
		<DragHandle {id} position="right" />
		<DragHandle {id} position="bottom-left" />
		<DragHandle {id} position="bottom" />
		<DragHandle {id} position="bottom-right" />
	</div>
</div>

<script>
import getLetterComponent from './util/get-letter-component';
import { letters, updateLetter, playState } from './stores';
import DragHandle from './DragHandle.svelte';

export let id;

let dragging = false;

$: letterObj = $letters.find(l => l.id === id);

$: letterComponent = getLetterComponent(letterObj.letter);

let offsetX = 0;
let offsetY = 0;

$: style = `
	transform: translate(${letterObj.x}px, ${letterObj.y}px);
	width: ${letterObj.width}px;
	height: ${letterObj.height}px;
	${$playState ? `animation: a-${letterObj.id} var(--animation-speed) infinite;` : ''}
`;

function dragStart(event) {
	window.addEventListener('mouseup', dragEnd);
	window.addEventListener('mousemove', drag);
	offsetX = event.clientX;
	offsetY = event.clientY;
	dragging = true;
}

function drag(event) {
	const updates = {
		x: letterObj.x - (offsetX - event.clientX),
		y: letterObj.y - (offsetY - event.clientY)
	};
	
	if (updates.x < 0) updates.x = 0;
	if (updates.y < 0) updates.y = 0;

	updateLetter(id, updates);

  offsetX = event.clientX;
  offsetY = event.clientY;
}

function dragEnd() {
	window.removeEventListener('mouseup', dragEnd);
	window.removeEventListener('mousemove', drag);
	dragging = false;
}

function hoverLetter() {
	updateLetter(id, { hover: true });
}

function unhoverLetter() {
	updateLetter(id, { hover: false });
}
</script>

<style>
.letter-parent {
	position: absolute;
	cursor: grab;
}

.letter-parent.dragging {
	cursor: grabbing;
}

.handles {
	display: grid;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	grid-template-areas: 
		"top-left    top    top-right"
		"left        x      right"
		"bottom-left bottom bottom-right";
	opacity: 0;
	transition: opacity 250ms ease-in-out;
}

.line {
	border: 1px solid var(--blue);
	position: absolute;
  left: 5px;
  top: 5px;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  z-index: 2;
}

.letter-parent.hover .handles {
	opacity: 1;
}
</style>
