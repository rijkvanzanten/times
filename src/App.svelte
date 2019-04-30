<div class="letters">
	{#each $letters as { id } (id)}
	<Letter {id} />
	{/each}
</div>

<Timeline />

<svelte:window on:keydown={handleKeyDown} />

<script>
import Letter from './Letter.svelte';
import Timeline from './Timeline.svelte';
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
.letters {
	width: 100vw;
	height: 84vh;
	background-color: var(--bg);
}
</style>
