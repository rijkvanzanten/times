<div {id} {style} on:mousedown={dragStart}>
	<svelte:component this={letterComponent} />
</div>

<script>
import getLetterComponent from './util/get-letter-component';
import throttle from 'raf-throttle';

export let id;
export let letter;

const letterComponent = getLetterComponent(letter);

let offsetX = 0;
let offsetY = 0;
let left = 0;
let top = 0;

$: style = `transform: translate(${left}px, ${top}px);`;

function dragStart(event) {
	window.addEventListener('mouseup', dragEnd);
	window.addEventListener('mousemove', drag);
	offsetX = event.clientX;
	offsetY = event.clientY;
}

function drag(event) {
	left = left - (offsetX - event.clientX);
	top = top - (offsetY - event.clientY);

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
	width: 30vw;
	height: 30vh;
}
</style>
