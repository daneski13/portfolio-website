export const prerender = true;
import { fetchMarkdownProjects } from '$lib/fetchMarkdownProjects';

export const GET = async () => {
	const today = new Date().toISOString().split('T')[0];

	const allProjects = await fetchMarkdownProjects();
	const projects = allProjects
		.map(({ meta, path }) => {
			let date = meta.isUpdated ? meta.updated : meta.date;
			return `
		<url>
			<loc>https://daneskalski.com${path}/</loc>
			<lastmod>${date}</lastmod>
			<priority>0.8</priority>
		</url>`;
		})
		.join('');

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
		<url>
			<loc>https://daneskalski.com/</loc>
			<lastmod>${today}</lastmod>
			<priority>0.8</priority>
		</url>
			${projects}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
};
