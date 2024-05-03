---
title: Jupyter2Svelte
date: '2023-04-17'
updated: '2023-08-06'
card: /projects/jupyter2svelte/card.webp
cover: /projects/jupyter2svelte/cover.webp
description: Convert Jupyter Notebooks into Svelte Components
proj_url: https://www.npmjs.com/package/jupyter2svelte
tag: Tool, Web
---

<script>
    import Anchor from '$lib/components/markdown/Anchor.svelte';
</script>

**Technologies:**

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

---

Jupyter2Svelte is a simple CLI tool for converting Jupyter Notebook files into
Svelte components written in TypeScript.

The tool was born out of a desire to have a simple way to convert Jupyter
Notebooks into Svelte components for use in this website and addresses some of
the shortcomings of Jupyter's built-in <Anchor href="https://github.com/jupyter/nbconvert">nbconvert</Anchor> tool.

The shortcomings of Jupyter's built-in solution include:

- Markdown output doesn't work well with <Anchor href="https://mdsvex.com/">MDsveX</Anchor>
- <Anchor href="https://plotly.com/python/">Plotly</Anchor> support
- Custom CSS styling
- <Anchor href="https://prismjs.com">PrismJS</Anchor> syntax highlighting

This tool addresses these concerns.
