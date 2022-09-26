export const prerender = true;

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

export async function load({ params }) {
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
		image: meta.image,
		description: meta.description,
		code: meta.code,
		slug: params.slug
	};

	return information;
}
