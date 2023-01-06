---
title: Analyzing Finance Job Postings
date: '2022-10-06'
updated: '2022-11-17'
card: /projects/analyzing-finance-job-market/card.webp
cover: /projects/analyzing-finance-job-market/cover.webp
description: Exploratory Data Analysis of the Entry-Level Finance Job Market
code: https://github.com/Daneski13/Analyzing-Finance-Job-Postings
---

<script>
    import Image from '$lib/components/markdown/Image.svelte';
    import Anchor from '$lib/components/markdown/Anchor.svelte';
    import Plotly from '$lib/components/markdown/Plotly.svelte';
</script>

**Technologies:**

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Jupyter Lab/Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)
![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

**Frameworks/ Libraries:**

_Data Manipulation:_ Pandas

_Data Visualization:_ Seaborn, Plotly

---

## Purpose

As a finance and management information systems major I wanted to learn more about the current (2022) job market before entering within the next couple years.

### Questions

- **Where are the most jobs located?**
- **Which industries have the most jobs?**
- **How can I best prepare myself for getting a job, what skills are in demand beyond an education in Finance?**
- **Would my MIS degree make me more marketable?**

## Data Collection

For this project I developed a Python script, <Anchor href="/projects/linkedin-scraper" target="_blank">linkedin-job-scraper</Anchor>, to scrape public job listings on LinkedIn. LinkedIn is one of the most popular platforms for job seekers, making it one of the best websites to gather data on the job market.

### Methodology

From September 28th through October 4th, I scraped LinkedIn's job listings each day with the search keyword "Finance" and location of United States. Filtering for the last 24 hours, the seniority/experience levels of Internship, Entry Level, and Associate with the job types of Full Time, Internship, and Other. I was looking to collect information on Full Time jobs available to those with about 0-3 years experience in the field ("entry jobs") and these filters would produce the most relevant data for my questions. Queries used LinkedIn's default "Most relevant" sorting in an attempt to get the best data pertaining to the "Finance" keyword.

Because LinkedIn will only display up to 1000 listings per search, I was unfortunately unable to scrape the entirety of the listings posted each day. I used separate search queries for each seniority level and further broke down those queries by filtering each for remote, hybrid, or on-site for the widest coverage. Gathering more data would not be possible without using highly specific filters introducing bias.

### Data Structure

| Col             | Definition                                        |
| --------------- | ------------------------------------------------- |
| date_scraped    | date the listing was scraped                      |
| title           | title of the job listing                          |
| full_url        | LinkedIn URL of the job posting                   |
| company         | company name                                      |
| company_url     | company's LinkedIn URL                            |
| location        | job's location                                    |
| description     | raw HTML of the job's description                 |
| seniority_level | job's seniority level                             |
| employment_type | job's employment type (Full Time, Part Time etc.) |
| job_function    | job's expected functions                          |
| industries      | industries the company is in                      |

## Findings

### Where are the most jobs located?

<Image src='/projects/analyzing-finance-job-market/locations.webp' alt='Top 10 Locations Bar Graph' caption='Visualized with Seaborn'/>

New York City and Chicago have the greatest proportion of the jobs relative to other cities in the United States. Since New York City and Chicago have major US security markets, it is not surprising that those 2 cities would have the greatest number of jobs in finance.

<Plotly backupImageSrc='/projects/analyzing-finance-job-market/states.webp' src='/projects/analyzing-finance-job-market/states.html' alt='Job Listings by State Map' caption='Visualized with Plotly'/>

The states of California, New York, Texas, Illinois, and Florida have the most jobs overall. New York's and Illinois' jobs are being driven by New York City and Chicago. Los Angeles and San Francisco have a large share of California's jobs, both of which are also major financial centers in the US.

Houston, another large financial center, is the only city in Texas to crack the top 10, however only accounts for roughly a fifth of Texas jobs. None of Florida's cities cracked the top 10. Thus, there is much more variation in location within Texas and Florida compared to the other top states.

If looking for a job in a major financial district, a job search should be targeted in New York City, Chicago, Los Angeles, and San Francisco. Otherwise, Texas and Florida have lots of demand for finance professionals with more locations to seek out.

### Which industries have the most jobs?

<Image src='/projects/analyzing-finance-job-market/industries.webp' alt='Top 15 Industries Bar Graph' caption='Visualized with Seaborn'/>

Staffing/ Recruiting is interestingly the most common industry making postings. This is likely due to staffing firms making many postings, as several of the most repeated companies in the dataset are staffing firms.

Besides Staffing/ Recruiting, many of the top 15 industries are directly in the financial industry as expected but tech is common as well. Software development, IT, Information/Internet, and Technology where information systems domain knowledge may be useful make up numbers 4, 6, 12, and 13 respectively.

### What skills are in demand?

<Image src='/projects/analyzing-finance-job-market/skills.webp' alt='Most in Demand Skills Bar Graph' caption='Visualized with Seaborn'/>

Excel is the most in demand skill, being mentioned in 25% of the job descriptions. Database, and data analysis are second and third, both around 10%. SQL, Tableau, and Power BI were mentioned in about 1% of the postings.

Based on this data, applicants should focus mainly on Excel with database and data analysis secondary. However SQL, Tableau, and Power BI may set one applicant apart from another.

### Would my MIS degree make me more marketable?

Database knowledge, data analysis, and SQL are in-demand and are taught within the MIS degree program. Also, technology related industries are common in the top 15 industries, where information systems domain knowledge will be useful.
