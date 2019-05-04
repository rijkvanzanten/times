<div class="options-bar">
	<button class="play-pause" on:click={togglePlay}>
		{#if $playState}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.695 190.695">
		  <path d="M158.912 0H31.782C14.239 0 0 14.239 0 31.782v127.13c0 17.544 14.239 31.782 31.782 31.782h127.13c17.544 0 31.782-14.239 31.782-31.782V31.782C190.695 14.239 176.456 0 158.912 0z" fill="#010002"/>
		</svg>
		{:else}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.153 232.153">
		  <path d="M203.791 99.628L49.307 2.294C44.74-.425 39.069.028 34.786.028 17.654.028 17.73 13.255 17.73 16.606v198.94c0 2.833-.075 16.579 17.056 16.579 4.283 0 9.955.451 14.521-2.267l154.483-97.333c12.68-7.545 10.489-16.449 10.489-16.449s2.192-8.904-10.488-16.448z" fill-rule="evenodd" clip-rule="evenodd"/>
		</svg>
		{/if}
	</button>
</div>

<script>
	import { playState } from './stores';

	function togglePlay() {
		playState.update(p => !p);
	}
</script>

<style>
	.options-bar {
		width: 100%;
		padding: 10px;
		background-color: var(--white);
	}

	.play-pause svg {
		display: block;
		width: 1rem;
		fill: var(--black);
	}
</style>
