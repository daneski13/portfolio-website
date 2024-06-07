export const prerender = true;

import { get } from 'svelte/store';
import type { ProjectData } from './data';

function convertDate(date: string) {
	const d = new Date(date);
	d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
	return d.toLocaleString('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}

async function getNextPrevProject(slug: string, fetch) {
	const response = await fetch(`/api/projects`);
	const projects = await response.json();

	const current = projects.findIndex((project) => project.path.slice(10) === slug);
	let next = projects[current - 1] || undefined;
	let prev = projects[current + 1] || undefined;

	next = next && { path: next.path + '/', title: next.meta.title };
	prev = prev && { path: prev.path + '/', title: prev.meta.title };

	return { next, prev };
}

export async function load({ params, fetch }) {
	const post = await import(`../${params.slug}.md`);
	const content = post.default;
	const meta = post.metadata;

	meta.date = convertDate(meta.date);
	meta.updated = convertDate(meta.updated);

	const isUpdated = meta.updated != 'Invalid Date' ? true : false;

	const information: ProjectData = {
		content: content,
		title: meta.title,
		date: meta.date,
		isUpdated: isUpdated,
		updated: meta.updated,
		card: meta.card,
		cover: meta.cover,
		description: meta.description,
		proj_url: meta.proj_url,
		url: meta.card.split('/')[2],
		tag: meta.tag,
		slug: params.slug
	};

	let nextPrev = await getNextPrevProject(params.slug, fetch);

	return { information, nextPrev };
}
