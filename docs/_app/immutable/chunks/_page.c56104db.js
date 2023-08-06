const s = !0,
	r = async ({ fetch: e }) => ({ projects: await (await e('/api/projects')).json() }),
	n = Object.freeze(
		Object.defineProperty({ __proto__: null, load: r, prerender: !0 }, Symbol.toStringTag, {
			value: 'Module'
		})
	);
export { n as _, r as l, s as p };
