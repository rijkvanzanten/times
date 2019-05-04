<svelte:head>
	<div>
		{@html animationStyles }
	</div>
</svelte:head>

<div class="letters" on:click={deactiveLetters}>
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

$: animationStyles = `
<style>
	${$letters.reduce((acc, l) => acc + `
		@keyframes a-${l.id} {
			${l.keyframes.reduce((acc, keyframe) => acc + `
				${keyframe.percentage}% {
					width: ${keyframe.width}px;
					height: ${keyframe.height}px;
					transform: translate(${keyframe.x}px, ${keyframe.y}px);
				}
			`, '')}
		}
	`, '')}
</style>
`

function handleKeyDown(event) {
	const key = event.key.toLowerCase();

	if (key === 'backspace') return removeLastLetter(key);
	if (key === ' ') return togglePlay();

	const allowedLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	if (allowedLetters.includes(key)) {
		const randomX = Math.floor(Math.random() * (window.innerWidth - 200));
		const randomY = Math.floor(Math.random() * (window.innerHeight - 200));

		return letters.update(ls => [...ls, {
			id: generateID(),
			letter: key,
			x: randomX,
			y: randomY,
			width: 200,
			height: 200,
			hover: false,
			keyframes: []
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
}

function deactiveLetters(event) {
	letters.update(ls => ls.map(l => {
		l.active = false;
		return l;
	}));
}
</script>

<style>
.letters {
	width: 100vw;
	height: 84vh;
	background-color: var(--bg);
}
</style>
