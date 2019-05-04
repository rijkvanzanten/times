<div class="timeline">
	<div class="play-indicator">
		<div class="line {$playState ? 'active' : ''}"></div>
	</div>

	{#each $letters as letterObj (letterObj.id)}
	<div
		class="bar {letterObj.active && 'active'}"
		on:click={() => makeActive(letterObj.id)}>
		<span class="letter">
			({letterObj.letter})
		</span>
		<Keyframes id={letterObj.id} />
	</div>
	{/each}
</div>

<script>
	import { letters, playState } from './stores';
	import Keyframes from './Keyframes.svelte';

	function makeActive(id) {
		letters.update(ls => ls.map(l => {
			l.active = false;
			if (l.id === id) l.active = true;
			return l;
		}));
	}
</script>

<style>
.timeline {
	width: 100%;
	color: var(--white);
	overflow-y: auto;
	font-family: monospace;
	z-index: 10;
	background-color: var(--gray);
	cursor: pointer;
	flex-basis: 14vh;
	position: relative;
}

.bar {
	width: 100%;
	background-color: var(--gray-dark);
	padding: 4px;
	border-bottom: 1px solid var(--gray-light);
	display: flex;
}

.bar.active {
	color: var(--blue);
}

.letter {
	flex-basis: 30px;
	border-right: 1px solid var(--gray-light);
}

.play-indicator {
	width: calc(100% - 31px);
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
}

.play-indicator .line {
	width: 1px;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: var(--red);
	pointer-events: none;
	display: none;
}

.play-indicator .line.active {
	display: block;
	animation: move var(--animation-speed) infinite linear;
}

@keyframes move {
	from { left: 0; }
	to { left: 100%; }
}
</style>
