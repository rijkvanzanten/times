<div>
	<svelte:component this={letterComponent} />
</div>

<script>
import getLetterComponent from './util/get-letter-component';

export let letter = 'a';

const letterComponent = getLetterComponent(letter);
</script>

<style>
div {
	width: 30vw;
	height: 30vh;
}
</style>
