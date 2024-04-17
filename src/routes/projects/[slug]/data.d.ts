import type { SvelteComponentTyped } from 'svelte';

export type ProjectData = {
	content: SvelteComponentTyped;
	title: string;
	date: string;
	isUpdated: boolean;
	updated: string;
	card: string;
	cover: string;
	description: string;
	code: string;
	url: string;
	slug: string;
};
