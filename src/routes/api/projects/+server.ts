export const prerender = true;
import { json } from '@sveltejs/kit';
import { fetchMarkdownProjects } from '$lib/fetchMarkdownProjects';

export const GET = async () => {
	const allProjects = await fetchMarkdownProjects();

	// Sort newest to oldest
	const sortedProjects = allProjects.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedProjects);
};
