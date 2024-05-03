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
	proj_url: string;
	url: string;
	tag: string;
	slug: string;
};
