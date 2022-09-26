import type { ConstructorOfATypedSvelteComponent } from 'svelte';

export type ProjectData = {
	content: ConstructorOfATypedSvelteComponent;
	title: string;
	date: string;
	isUpdated: boolean;
	updated: string;
	image: string;
	description: string;
	code: string;
	slug: string;
};
