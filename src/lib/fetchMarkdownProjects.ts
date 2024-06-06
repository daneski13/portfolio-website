// Credit to https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

export const fetchMarkdownProjects = async () => {
	/* 
	Object where each files's relative path is the key to a promise that loads the 
	file contents ("resolver")
	 */
	const allProjectFiles = import.meta.glob('/src/routes/projects/*.md');
	// Array of each object
	const projectFilesIter = Object.entries(allProjectFiles);

	// For each object resolve each promise and return the metadata and path
	const allProjects = await Promise.all(
		projectFilesIter.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const projectPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: projectPath
			};
		})
	);

	return allProjects;
};
