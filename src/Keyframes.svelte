<span
	class="keyframes"
	on:mousemove={handleMove}
	on:mouseout={handleOut}
	on:click={handleClick}
	>
	<span class="cursor" style={cursorStyle} />

	{#each letterObj.keyframes as {percentage}}
	<span class="keyframe cursor" style={`left: ${percentage / 100 * elementWidth}px`} />	
	{/each}
</span>

<script>
	import { updateLetter, letters } from './stores';
	export let id;

	$: letterObj = $letters.find(l => l.id === id);

	const elementWidth = window.innerWidth - 38;
	// 30 is the width of the letter preview on the left + 2x4 padding

	let cursorLeft = -1;
	$: cursorStyle = `transform: translateX(${cursorLeft}px);`;

	function handleMove(event) {
		const mouseLeft = event.layerX;
		const percentage = Math.round(mouseLeft / elementWidth * 100);

		cursorLeft = (percentage * elementWidth) / 100;
	}

	function handleOut(event) {
		cursorLeft = -1;
	}

	function handleClick(event) {
		const mouseLeft = event.layerX;
		const percentage = Math.round(mouseLeft / elementWidth * 100);

		const percentageExists = !!letterObj.keyframes.find(k => k.percentage === percentage);

		if (percentageExists) return removeKeyframe(percentage);

		const newKeyframes = [
			...letterObj.keyframes,
			{
				percentage: percentage,
				x: letterObj.x,
				y: letterObj.y,
				width: letterObj.width,
				height: letterObj.height
			}
		];

		letters.update(ls => ls.map(l => {
			if (l.id === id) {
				l.keyframes = newKeyframes
			}

			return l;
		}));
	}

	function removeKeyframe(percentage) {
		letters.update(ls => ls.map(l => {
			if (l.id === id) {
				l.keyframes = l.keyframes.filter(k => k.percentage !== percentage);
			}
			return l;
		}))
	}
</script>

<style>
.keyframes {
	flex-grow: 1;
	position: relative;
}

.cursor {
	position: absolute;
	top: 0;
	left: 0;
	width: 1px;
	height: 100%;
	background-color: var(--gray-light);
	pointer-events: none;
}

.keyframe {
	background-color: var(--blue);
}

.keyframe:hover {
	background-color: var(--red);
}
</style>
