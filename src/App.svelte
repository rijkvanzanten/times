{#each letters as { id, letter } (id)}
<div class="letters">
	<Letter {letter} {id} />
</div>
{/each}

<svelte:window on:keydown={handleKeyDown} />

<script>
import Letter from './Letter.svelte';
import generateID from './util/generate-id';

let letters = [];

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

	letters = [...letters, letterObj];
}

function removeLastLetter() {
	letters = [...list.slice(0, list.length - 1)];
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
