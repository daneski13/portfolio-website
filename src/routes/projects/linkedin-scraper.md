---
title: LinkedIn Job Scraper
date: '2022-09-25'
# updated:
card: /projects/linkedin-scraper/card.webp
cover: /projects/linkedin-scraper/cover.webp
description: Web scraper for LinkedIn job postings
proj_url: https://github.com/daneski13/linkedin-job-scraper
tag: Tool, Web
---

**Technologies:**

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

**Web Scraping Framework:**

Selenium WebDriver

**Data Structuring and Manipulation Libraries:**

pandas, numpy

---

LinkedIn is an extremely popular platform for job seekers, making it one of the best websites to gather data on the job market.

To gather data from LinkedIn I developed a web scraper using Selenium WebDriver's Python bindings since LinkedIn uses JavaScript to render content after clicking the proper elements.

The scraper collects each listing's title, URL, company name, company's LinkedIn URL, the job's location, the description, seniority level, employment type (eg. Full Time, Part Time etc.), job functions, and the company's industries.
