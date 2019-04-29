<div class="letter" {id} {style} on:mousedown={dragStart}>
	<svelte:component this={letterComponent} />
</div>

<script>
import getLetterComponent from './util/get-letter-component';
import { letters, updateLetter } from './stores';

export let id;

$: letterObj = $letters.find(l => l.id === id);

$: letterComponent = getLetterComponent(letterObj.letter);

let offsetX = 0;
let offsetY = 0;

$: style = `
	transform: translate(${letterObj.x}px, ${letterObj.y}px);
	width: ${200}px;
	height: ${200}px;
`;

function dragStart(event) {
	window.addEventListener('mouseup', dragEnd);
	window.addEventListener('mousemove', drag);
	offsetX = event.clientX;
	offsetY = event.clientY;
}

function drag(event) {
	updateLetter(id, {
		x: letterObj.x - (offsetX - event.clientX),
		y: letterObj.y - (offsetY - event.clientY)
	});

  offsetX = event.clientX;
  offsetY = event.clientY;
}

function dragEnd() {
	window.removeEventListener('mouseup', dragEnd);
	window.removeEventListener('mousemove', drag);
}
</script>

<style>
.letter {
	--handle-size: 8px;
	position: relative;
}

.handle {
	position: absolute;
	width: var(--handle-size);
	height: var(--handle-size);
	border-radius: 50%;
	background-color: var(--blue);
	border: 2px solid var(--white);
}

.handle.bottom {
	bottom: calc(-1 * var(--handle-size) / 2);
}

.handle.right {
	right: calc(-1 * var(--handle-size) / 2);
}
</style>
