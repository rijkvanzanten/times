import { readable, writable } from 'svelte/store';

export const position = readable({ x: 0, y: 0}, function start(set) {
	window.addEventListener('mousemove', setPosition);

	function setPosition(event) {
		const { x, y } = event;
		set({ x, y });
	}

	return function stop() {
		window.removeEventListener('mousemove', setPosition);
	};
});

export const letters = writable([]);
