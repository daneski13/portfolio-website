---
title: tmux-styler
date: '2023-09-07'
# updated: ''
card: /projects/tmux-styler/card.webp
cover: /projects/tmux-styler/cover.webp
description: A tmux plugin offering an easy way to style a tmux setup.
proj_url: https://github.com/daneski13/tmux-styler
tag: Tool
---

<script>
    import Anchor from '$lib/components/markdown/Anchor.svelte';
</script>

**Technologies:**

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Neovim](https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white)

---

tmux-styler is a <Anchor href="https://github.com/tmux/tmux" rel="external">tmux</Anchor> (<Anchor href="https://github.com/tmux-plugins/tpm" rel="external">tpm</Anchor>) plugin written in Python that allows the user to customize their tmux setup.

It addresses the issue of having to manually edit the tmux config file to add customizations, which is a very difficult process given the dense documentation, lack of examples for many of the options available, and poor syntax.

Another project, <Anchor href="https://github.com/erikw/tmux-powerline" rel="external">tmux-powerline</Anchor>, addresses part of this issue, allowing the user to create a customizable <Anchor href="https://github.com/powerline/powerline" rel="external">powerline-esque</Anchor> status bar for tmux. However it is written in bash and all of the customization must be written in bash as well, which is not a very friendly language. Additionally, it does not expose some of the options available in tmux, such as the ability to use hex colors or built-in named colors.

Fed-up with its limitations, I decided to write my own plugin in Python that would allow me to customize my tmux setup in a much more user-friendly way while also exposing many more of the options that tmux makes available. This includes customizing the overall style of the session and auto-renaming windows.

Python was chosen because it is a much more user-friendly scripting language than bash and is familiar to many people, given its status as one of most popular languages in the world. With this popularity, a Python interpreter is very likely to be already installed on almost every UNIX system. Thus, no further dependencies are required to use tmux-styler, which is a selling point for writing tmux plugins in bash.

Additionally, Python is a powerful language that allows complex functionality to be much more accessible given its large standard library and the ability to import external libraries from Python's vast ecosystem.

The best feature that Python brings to the table is type annotations and type checking. This allows the user to rely on the IDE/LSP to provide documentation and auto-complete, which is very useful given the large number of options available, making it much easier to use and less error-prone.

Originally I had planned to write parts of the plugin in Rust and ship a binary for some of the functionality that would benefit from the performance boost. However, since I wanted the config file, custom segments, and API to be written in Python to allow the user to take full advantage of their IDE, I decided to write the entire plugin in Python to keep the codebase consistent.

Additionally, making calls back and forth between Rust and Python may have dampened theoretical performance gains. Python already employs bytecode caching which offers somewhat better performance for repeated runs. Thus, I decided to stick with Python for the entire project to keep the codebase consistent and reduce development overhead.

Some stand-out features of tmux-styler include:

- Simple definition of custom powerline-style status bar segments.
- A documented API for interacting with tmux settings, styling options, and creating segments.
- Glyphs for the currently running command.
- A single config file customizes the entire tmux setup. Easily share the config with others.
