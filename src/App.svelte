<div class="debug">
	{$position.x}X {$position.y}Y
</div>

{#each $letters as { id, letter, pos } (id)}
<div class="letters">
	<Letter {letter} {id} />
</div>
{/each}

<svelte:window on:keydown={handleKeyDown} />

<script>
import Letter from './Letter.svelte';
import { position, letters } from './stores';
import generateID from './util/generate-id';

function handleKeyDown(event) {
	const key = event.key.toLowerCase();

	if (key === 'backspace') return removeLastLetter(key);

	const allowedLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	if (allowedLetters.includes(key)) return createLetter(key);
	return;
}

function createLetter(letter) {
	const letterObj = {
		id: generateID(),
		letter: letter,
		pos: {
			x: 0,
			y: 0
		}
	};

	letters.update(list => [...list, letterObj]);
}

function removeLastLetter() {
	letters.update(list => [...list.slice(0, list.length - 1)]);
}
</script>

<style>
.debug {
	background-color: #000;
	position: fixed;
	bottom: 0;
	left: 0;
	padding: 20px;
	color: white;
	font-family: monospace;
	width: 100%;
}
</style>
