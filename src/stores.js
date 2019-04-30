import { writable } from 'svelte/store';
import clone from 'lodash/clone';
import merge from 'lodash/merge';
import generateID from './util/generate-id';

export const letters = writable([]);

const letterDefaultValues = {
	id: null,
	letter: 'a',
	x: 0,
	y: 0,
	width: 200,
	height: 200,
	keyframes: []
};

export function addLetter(initialValues) {
	const letter = clone(letterDefaultValues);
	letter.id = generateID();

	merge(letter, initialValues);

	letters.update(ls => ls = [...ls, letter]);
}

export function updateLetter(id, updates) {
	letters.update(ls => ls.map(l => {
		if (l.id === id) {
			merge(l, updates);
		}

		return l;
	}));
}

export function removeLetter(id) {
	letters.update(ls => ls = ls.filter(l => l.id !== id));
}
