import { writable } from 'svelte/store';
import clone from 'lodash/clone';
import merge from 'lodash/merge';
import generateID from './util/generate-id';

export const letters = writable([]);

export const playState = writable(false);
export const playPercentage = writable(0);
export const playEasing = writable('linear');

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
