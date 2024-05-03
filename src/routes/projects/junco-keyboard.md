---
title: Junco Keyboard
date: '2023-04-05'
# updated:
card: /projects/junco-keyboard/card.webp
cover: /projects/junco-keyboard/cover.webp
description: Ergonomic split keyboard powered by Raspberry Pi Picos
proj_url: https://github.com/daneski13/Junco
tag: Hardware, Systems Programming
---

<script>
    import Anchor from '$lib/components/markdown/Anchor.svelte';
</script>

**Technologies:**

![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

**PCB and Circuit Design:**

KiCad

**3D Modeling:**

Blender

---

Junco is a split keyboard powered by Raspberry Pi Picos that I designed from scratch. The schematic and PCB were designed using KiCad and the case was developed in Blender. For firmware, I contributed to the popular open source <Anchor href="https://github.com/qmk/qmk_firmware" rel="external">QMK</Anchor> firmware that is written in C.

In my contribution to QMK, I went above basic support and added custom animations for the RGB lighting.
