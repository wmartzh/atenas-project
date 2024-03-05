import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type GlobalState = {
	theme: string;
};

export const globalState = writable<GlobalState>({
	theme: 'light'
});

export const setTheme = (theme: string) => {
	globalState.update((g) => {
		g.theme = theme;
		return g;
	});
	if (browser) {
		localStorage.setItem('theme', theme);
	}
};

globalState.subscribe((g) => {
	if (browser) {
		g.theme = localStorage.getItem('theme') || 'light';
	}

	return g;
});
