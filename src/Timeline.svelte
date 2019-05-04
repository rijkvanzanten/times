<div class="timeline">
	{#each $letters as letterObj (letterObj.id)}
	<div 
		class="bar {letterObj.hover && 'hover'}"
		on:mouseover={() => enableHover(letterObj.id)}
		on:mouseout={() => disableHover(letterObj.id)}>
		<span class="letter">
			({letterObj.letter})
		</span>
		<Keyframes id={letterObj.id} />
	</div>
	{/each}
</div>

<script>
	import { letters, updateLetter } from './stores';
	import Keyframes from './Keyframes.svelte';

	function enableHover(id) {
		updateLetter(id, { hover: true });
	}

	function disableHover(id) {
		updateLetter(id, { hover: false });
	}
</script>

<style>
.timeline {
	width: 100%;
	position: absolute;
	bottom: 0;
	height: 16vh;
	color: var(--white);
	overflow-y: auto;
	font-family: monospace;
	z-index: 10;
	background-color: var(--gray);
}

.bar {
	width: 100%;
	background-color: var(--gray-dark);
	padding: 4px;
	border-bottom: 1px solid var(--gray-light);
	display: flex;
}

.bar.hover {
	color: var(--blue);
}

.letter {
	flex-basis: 30px;
	border-right: 1px solid var(--gray-light);
}
</style>
