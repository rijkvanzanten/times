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

<OptionsBar />
<Timeline />

<svelte:window on:keydown={handleKeyDown} />

<script>
import Letter from './Letter.svelte';
import Timeline from './Timeline.svelte';
import OptionsBar from './OptionsBar.svelte';
import generateID from './util/generate-id';
import { letters, playState, playPercentage } from './stores';
import { onMount } from 'svelte';

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

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

onMount(() => {
	const letterObjects = 'times'.split('').map(letter => {
		return {
			id: generateID(),
			active: false,
			letter: letter,
			x: random(0, window.innerWidth - 200),
			y: random(0, window.innerHeight - 400),
			width: random(50, 300),
			height: random(50, 300),
			keyframes: [
				{
					percentage: random(20, 80),
					x: random(0, window.innerWidth - 200),
					y: random(0, window.innerHeight - 400),
					width: random(50, 300),
					height: random(50, 300),
				},
				{
					percentage: random(20, 80),
					x: random(0, window.innerWidth - 200),
					y: random(0, window.innerHeight - 400),
					width: random(50, 300),
					height: random(50, 300),
				}
			]
		};
	});

	letters.update(ls => letterObjects);
});

function handleKeyDown(event) {
	const key = event.key.toLowerCase();

	if (key === 'backspace') return removeActiveLetter(key);
	if (key === ' ') return togglePlay();

	const allowedLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	if (allowedLetters.includes(key)) {
		const randomX = Math.floor(Math.random() * (window.innerWidth - 200));
		const randomY = Math.floor(Math.random() * (window.innerHeight - 400));

		return letters.update(ls => [
			...ls.map(l => ({ ...l, active: false })),
			{
				id: generateID(),
				active: true,
				letter: key,
				x: randomX,
				y: randomY,
				width: 200,
				height: 200,
				keyframes: []
			}
		]);
	}

	return;
}

function removeActiveLetter() {
	if ($letters.length === 0) return;
	letters.update(ls => ls = ls.filter(l => l.active === false));
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
	width: 100%;
	background-color: var(--bg);
	flex-grow: 1;
}
</style>
