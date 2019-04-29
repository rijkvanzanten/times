<div class="letters">
	{#each $letters as { id } (id)}
	<Letter {id} />
	{/each}
</div>

<svelte:window on:keydown={handleKeyDown} />

<script>
import Letter from './Letter.svelte';
import generateID from './util/generate-id';
import { letters, addLetter, removeLetter } from './stores';

function handleKeyDown(event) {
	const key = event.key.toLowerCase();

	if (key === 'backspace') return removeLastLetter(key);

	const allowedLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	if (allowedLetters.includes(key)) return addLetter({
		letter: key,
		x: Math.floor(Math.random() * (window.innerWidth - 200)),
		y: Math.floor(Math.random() * (window.innerHeight - 200)),
	});
	return;
}

function removeLastLetter() {
	if ($letters.length === 0) return;
	const lastLetterID = $letters[$letters.length - 1].id;
	removeLetter(lastLetterID);
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
