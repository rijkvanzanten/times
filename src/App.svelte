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
import { letters, playState, playPercentage } from './stores';

function handleKeyDown(event) {
	const key = event.key.toLowerCase();

	if (key === 'backspace') return removeLastLetter(key);
	if (key === ' ') return togglePlay();

	const allowedLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	if (allowedLetters.includes(key)) {
		const randomX = Math.floor(Math.random() * (window.innerWidth - 200));
		const randomY = Math.floor(Math.random() * (window.innerHeight - 200));

		const randomX2 = Math.floor(Math.random() * (window.innerWidth - 200));
		const randomY2 = Math.floor(Math.random() * (window.innerHeight - 200));

		return letters.update(ls => [...ls, {
			id: generateID(),
			letter: key,
			x: randomX,
			y: randomY,
			width: 200,
			height: 200,
			hover: false,
			keyframes: [
				{
					percentage: 0,
					x: randomX,
					y: randomY,
					width: 200,
					height: 200
				},
				{
					percentage: 100,
					x: randomX2,
					y: randomY2,
					width: 200,
					height: 200
				}
			]
		}]);
	}

	return;
}

function removeLastLetter() {
	if ($letters.length === 0) return;
	const lastLetterID = $letters[$letters.length - 1].id;
	letters.update(ls => ls = ls.filter(l => l.id !== lastLetterID));
}

function togglePlay() {
	playState.update(playing => !playing);
	render();
}

function render() {
	playPercentage.update(p => p + 1);

	if ($playState) {
		if ($playPercentage >= 100) {
			playState.update(playing => !playing);
			playPercentage.update(p => 0);
		} else {
			requestAnimationFrame(render);
		}
	}
}
</script>

<style>
.letters {
	width: 100vw;
	height: 84vh;
	background-color: var(--bg);
}
</style>
