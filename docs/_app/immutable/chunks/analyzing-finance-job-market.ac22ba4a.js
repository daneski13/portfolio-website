import {
	S as As,
	i as Cs,
	s as Ss,
	k as p,
	a as h,
	M as Fs,
	l,
	m,
	h as t,
	c as g,
	L as S,
	n as k,
	E as e,
	b as c,
	O as Is,
	F as ls,
	q as x,
	y as ys,
	r as j,
	z as ws,
	A as vs,
	g as _s,
	d as xs,
	B as js
} from './index.45ab08d9.js';
import { A as Es } from './Anchor.9f55ae68.js';
function Ls(b) {
	let a, r, u, i, o, y;
	return {
		c() {
			(a = p('script')), (u = h()), (i = p('div')), this.h();
		},
		l(d) {
			const w = Fs('svelte-zr0you', document.head);
			a = l(w, 'SCRIPT', { src: !0, charset: !0 });
			var v = m(a);
			v.forEach(t), w.forEach(t), (u = g(d)), (i = l(d, 'DIV', { class: !0 }));
			var q = m(i);
			q.forEach(t), this.h();
		},
		h() {
			S(a.src, (r = 'https://cdn.plot.ly/plotly-2.20.0.min.js')) || k(a, 'src', r),
				k(a, 'charset', 'utf-8'),
				k(i, 'class', 'jupyter');
		},
		m(d, w) {
			e(document.head, a),
				c(d, u, w),
				c(d, i, w),
				(i.innerHTML = b[1]),
				o || ((y = Is(a, 'load', b[0])), (o = !0));
		},
		p: ls,
		i: ls,
		o: ls,
		d(d) {
			t(a), d && t(u), d && t(i), (o = !1), y();
		}
	};
}
function Ts(b, a, r) {
	let { img_path_prefix: u } = a,
		{
			img_alt_text: i = Array.apply(null, Array(3)).map(function () {
				return 'Image';
			})
		} = a;
	const o = () => {
			Plotly.newPlot(
				'plotly_21_0',
				[
					{
						autocolorscale: !1,
						colorscale: [
							[0, 'rgb(247,251,255)'],
							[0.125, 'rgb(222,235,247)'],
							[0.25, 'rgb(198,219,239)'],
							[0.375, 'rgb(158,202,225)'],
							[0.5, 'rgb(107,174,214)'],
							[0.625, 'rgb(66,146,198)'],
							[0.75, 'rgb(33,113,181)'],
							[0.875, 'rgb(8,81,156)'],
							[1, 'rgb(8,48,107)']
						],
						locationmode: 'USA-states',
						locations: [
							'AK',
							'AL',
							'AR',
							'AZ',
							'CA',
							'CO',
							'CT',
							'DC',
							'DE',
							'FL',
							'GA',
							'HI',
							'IA',
							'ID',
							'IL',
							'IN',
							'KS',
							'KY',
							'LA',
							'MA',
							'MD',
							'ME',
							'MI',
							'MN',
							'MO',
							'MS',
							'MT',
							'NC',
							'ND',
							'NE',
							'NH',
							'NJ',
							'NM',
							'NV',
							'NY',
							'OH',
							'OK',
							'OR',
							'PA',
							'RI',
							'SC',
							'SD',
							'TN',
							'TX',
							'UT',
							'VA',
							'VT',
							'WA',
							'WI',
							'WV',
							'WY',
							'ad',
							'an',
							'do',
							'ea',
							'ee',
							'es',
							'ex',
							'ia',
							'is',
							'nd',
							'ng',
							'on',
							'ro',
							'to'
						],
						marker: { line: { color: 'black' } },
						type: 'choropleth',
						z: [
							40, 155, 101, 546, 2947, 538, 355, 359, 124, 1469, 806, 53, 195, 65, 1500, 274, 232,
							124, 124, 972, 558, 56, 535, 549, 382, 72, 41, 791, 31, 111, 85, 693, 60, 148, 2116,
							781, 155, 305, 891, 69, 181, 46, 358, 2074, 249, 886, 39, 719, 407, 52, 20, 2, 2, 8,
							726, 5, 1515, 54, 13, 20, 5, 2, 32, 18, 1
						]
					}
				],
				{
					geo: { scope: 'usa' },
					template: {
						data: {
							bar: [
								{
									error_x: { color: '#2a3f5f' },
									error_y: { color: '#2a3f5f' },
									marker: {
										line: { color: '#E5ECF6', width: 0.5 },
										pattern: { fillmode: 'overlay', size: 10, solidity: 0.2 }
									},
									type: 'bar'
								}
							],
							barpolar: [
								{
									marker: {
										line: { color: '#E5ECF6', width: 0.5 },
										pattern: { fillmode: 'overlay', size: 10, solidity: 0.2 }
									},
									type: 'barpolar'
								}
							],
							carpet: [
								{
									aaxis: {
										endlinecolor: '#2a3f5f',
										gridcolor: 'white',
										linecolor: 'white',
										minorgridcolor: 'white',
										startlinecolor: '#2a3f5f'
									},
									baxis: {
										endlinecolor: '#2a3f5f',
										gridcolor: 'white',
										linecolor: 'white',
										minorgridcolor: 'white',
										startlinecolor: '#2a3f5f'
									},
									type: 'carpet'
								}
							],
							choropleth: [{ colorbar: { outlinewidth: 0, ticks: '' }, type: 'choropleth' }],
							contour: [
								{
									colorbar: { outlinewidth: 0, ticks: '' },
									colorscale: [
										[0, '#0d0887'],
										[0.1111111111111111, '#46039f'],
										[0.2222222222222222, '#7201a8'],
										[0.3333333333333333, '#9c179e'],
										[0.4444444444444444, '#bd3786'],
										[0.5555555555555556, '#d8576b'],
										[0.6666666666666666, '#ed7953'],
										[0.7777777777777778, '#fb9f3a'],
										[0.8888888888888888, '#fdca26'],
										[1, '#f0f921']
									],
									type: 'contour'
								}
							],
							contourcarpet: [{ colorbar: { outlinewidth: 0, ticks: '' }, type: 'contourcarpet' }],
							heatmap: [
								{
									colorbar: { outlinewidth: 0, ticks: '' },
									colorscale: [
										[0, '#0d0887'],
										[0.1111111111111111, '#46039f'],
										[0.2222222222222222, '#7201a8'],
										[0.3333333333333333, '#9c179e'],
										[0.4444444444444444, '#bd3786'],
										[0.5555555555555556, '#d8576b'],
										[0.6666666666666666, '#ed7953'],
										[0.7777777777777778, '#fb9f3a'],
										[0.8888888888888888, '#fdca26'],
										[1, '#f0f921']
									],
									type: 'heatmap'
								}
							],
							heatmapgl: [
								{
									colorbar: { outlinewidth: 0, ticks: '' },
									colorscale: [
										[0, '#0d0887'],
										[0.1111111111111111, '#46039f'],
										[0.2222222222222222, '#7201a8'],
										[0.3333333333333333, '#9c179e'],
										[0.4444444444444444, '#bd3786'],
										[0.5555555555555556, '#d8576b'],
										[0.6666666666666666, '#ed7953'],
										[0.7777777777777778, '#fb9f3a'],
										[0.8888888888888888, '#fdca26'],
										[1, '#f0f921']
									],
									type: 'heatmapgl'
								}
							],
							histogram: [
								{
									marker: { pattern: { fillmode: 'overlay', size: 10, solidity: 0.2 } },
									type: 'histogram'
								}
							],
							histogram2d: [
								{
									colorbar: { outlinewidth: 0, ticks: '' },
									colorscale: [
										[0, '#0d0887'],
										[0.1111111111111111, '#46039f'],
										[0.2222222222222222, '#7201a8'],
										[0.3333333333333333, '#9c179e'],
										[0.4444444444444444, '#bd3786'],
										[0.5555555555555556, '#d8576b'],
										[0.6666666666666666, '#ed7953'],
										[0.7777777777777778, '#fb9f3a'],
										[0.8888888888888888, '#fdca26'],
										[1, '#f0f921']
									],
									type: 'histogram2d'
								}
							],
							histogram2dcontour: [
								{
									colorbar: { outlinewidth: 0, ticks: '' },
									colorscale: [
										[0, '#0d0887'],
										[0.1111111111111111, '#46039f'],
										[0.2222222222222222, '#7201a8'],
										[0.3333333333333333, '#9c179e'],
										[0.4444444444444444, '#bd3786'],
										[0.5555555555555556, '#d8576b'],
										[0.6666666666666666, '#ed7953'],
										[0.7777777777777778, '#fb9f3a'],
										[0.8888888888888888, '#fdca26'],
										[1, '#f0f921']
									],
									type: 'histogram2dcontour'
								}
							],
							mesh3d: [{ colorbar: { outlinewidth: 0, ticks: '' }, type: 'mesh3d' }],
							parcoords: [
								{ line: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'parcoords' }
							],
							pie: [{ automargin: !0, type: 'pie' }],
							scatter: [
								{ fillpattern: { fillmode: 'overlay', size: 10, solidity: 0.2 }, type: 'scatter' }
							],
							scatter3d: [
								{
									line: { colorbar: { outlinewidth: 0, ticks: '' } },
									marker: { colorbar: { outlinewidth: 0, ticks: '' } },
									type: 'scatter3d'
								}
							],
							scattercarpet: [
								{ marker: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'scattercarpet' }
							],
							scattergeo: [
								{ marker: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'scattergeo' }
							],
							scattergl: [
								{ marker: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'scattergl' }
							],
							scattermapbox: [
								{ marker: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'scattermapbox' }
							],
							scatterpolar: [
								{ marker: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'scatterpolar' }
							],
							scatterpolargl: [
								{ marker: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'scatterpolargl' }
							],
							scatterternary: [
								{ marker: { colorbar: { outlinewidth: 0, ticks: '' } }, type: 'scatterternary' }
							],
							surface: [
								{
									colorbar: { outlinewidth: 0, ticks: '' },
									colorscale: [
										[0, '#0d0887'],
										[0.1111111111111111, '#46039f'],
										[0.2222222222222222, '#7201a8'],
										[0.3333333333333333, '#9c179e'],
										[0.4444444444444444, '#bd3786'],
										[0.5555555555555556, '#d8576b'],
										[0.6666666666666666, '#ed7953'],
										[0.7777777777777778, '#fb9f3a'],
										[0.8888888888888888, '#fdca26'],
										[1, '#f0f921']
									],
									type: 'surface'
								}
							],
							table: [
								{
									cells: { fill: { color: '#EBF0F8' }, line: { color: 'white' } },
									header: { fill: { color: '#C8D4E3' }, line: { color: 'white' } },
									type: 'table'
								}
							]
						},
						layout: {
							annotationdefaults: { arrowcolor: '#2a3f5f', arrowhead: 0, arrowwidth: 1 },
							autotypenumbers: 'strict',
							coloraxis: { colorbar: { outlinewidth: 0, ticks: '' } },
							colorscale: {
								diverging: [
									[0, '#8e0152'],
									[0.1, '#c51b7d'],
									[0.2, '#de77ae'],
									[0.3, '#f1b6da'],
									[0.4, '#fde0ef'],
									[0.5, '#f7f7f7'],
									[0.6, '#e6f5d0'],
									[0.7, '#b8e186'],
									[0.8, '#7fbc41'],
									[0.9, '#4d9221'],
									[1, '#276419']
								],
								sequential: [
									[0, '#0d0887'],
									[0.1111111111111111, '#46039f'],
									[0.2222222222222222, '#7201a8'],
									[0.3333333333333333, '#9c179e'],
									[0.4444444444444444, '#bd3786'],
									[0.5555555555555556, '#d8576b'],
									[0.6666666666666666, '#ed7953'],
									[0.7777777777777778, '#fb9f3a'],
									[0.8888888888888888, '#fdca26'],
									[1, '#f0f921']
								],
								sequentialminus: [
									[0, '#0d0887'],
									[0.1111111111111111, '#46039f'],
									[0.2222222222222222, '#7201a8'],
									[0.3333333333333333, '#9c179e'],
									[0.4444444444444444, '#bd3786'],
									[0.5555555555555556, '#d8576b'],
									[0.6666666666666666, '#ed7953'],
									[0.7777777777777778, '#fb9f3a'],
									[0.8888888888888888, '#fdca26'],
									[1, '#f0f921']
								]
							},
							colorway: [
								'#636efa',
								'#EF553B',
								'#00cc96',
								'#ab63fa',
								'#FFA15A',
								'#19d3f3',
								'#FF6692',
								'#B6E880',
								'#FF97FF',
								'#FECB52'
							],
							font: { color: '#2a3f5f' },
							geo: {
								bgcolor: 'white',
								lakecolor: 'white',
								landcolor: '#E5ECF6',
								showlakes: !0,
								showland: !0,
								subunitcolor: 'white'
							},
							hoverlabel: { align: 'left' },
							hovermode: 'closest',
							mapbox: { style: 'light' },
							paper_bgcolor: 'white',
							plot_bgcolor: '#E5ECF6',
							polar: {
								angularaxis: { gridcolor: 'white', linecolor: 'white', ticks: '' },
								bgcolor: '#E5ECF6',
								radialaxis: { gridcolor: 'white', linecolor: 'white', ticks: '' }
							},
							scene: {
								xaxis: {
									backgroundcolor: '#E5ECF6',
									gridcolor: 'white',
									gridwidth: 2,
									linecolor: 'white',
									showbackground: !0,
									ticks: '',
									zerolinecolor: 'white'
								},
								yaxis: {
									backgroundcolor: '#E5ECF6',
									gridcolor: 'white',
									gridwidth: 2,
									linecolor: 'white',
									showbackground: !0,
									ticks: '',
									zerolinecolor: 'white'
								},
								zaxis: {
									backgroundcolor: '#E5ECF6',
									gridcolor: 'white',
									gridwidth: 2,
									linecolor: 'white',
									showbackground: !0,
									ticks: '',
									zerolinecolor: 'white'
								}
							},
							shapedefaults: { line: { color: '#2a3f5f' } },
							ternary: {
								aaxis: { gridcolor: 'white', linecolor: 'white', ticks: '' },
								baxis: { gridcolor: 'white', linecolor: 'white', ticks: '' },
								bgcolor: '#E5ECF6',
								caxis: { gridcolor: 'white', linecolor: 'white', ticks: '' }
							},
							title: { x: 0.05 },
							xaxis: {
								automargin: !0,
								gridcolor: 'white',
								linecolor: 'white',
								ticks: '',
								title: { standoff: 15 },
								zerolinecolor: 'white',
								zerolinewidth: 2
							},
							yaxis: {
								automargin: !0,
								gridcolor: 'white',
								linecolor: 'white',
								ticks: '',
								title: { standoff: 15 },
								zerolinecolor: 'white',
								zerolinewidth: 2
							}
						}
					},
					title: { text: 'Job Listings by State' }
				}
			);
		},
		y = `<div class="input input-md"><span class="heading"><h1 id="finance-job-market-analysis">Finance Job Market Analysis<a href="#finance-job-market-analysis"> ¶</a></h1></span>
<span class="heading"><h2 id="purpose">Purpose<a href="#purpose"> ¶</a></h2></span>
<p>As a finance and management information systems major I wanted to learn more about the current (2022) job market before entering within the next couple years.</p>
<span class="heading"><h3 id="questions">Questions<a href="#questions"> ¶</a></h3></span>
<ul>
<li><strong>Where are the most jobs located?</strong></li>
<li><strong>Which industries have the most jobs?</strong></li>
<li><strong>How can I best prepare myself for getting a job, what skills are in demand beyond an education in Finance?</strong></li>
<li><strong>Would my MIS degree make me more marketable?</strong></li>
</ul>
<span class="heading"><h2 id="data-collection">Data Collection<a href="#data-collection"> ¶</a></h2></span>
<p>For this project I developed a Python script, <a href="https://github.com/Daneski13/linkedin-job-scraper">linkedin-job-scraper</a>, to scrape public job listings on LinkedIn. LinkedIn is one of the most popular platforms for job seekers, making it one of the best websites to gather data on the job market.</p>
<span class="heading"><h3 id="methodology">Methodology<a href="#methodology"> ¶</a></h3></span>
<p>From September 28th through October 4th 2022, I scraped LinkedIn's job listings each day with the search keyword "Finance" and location of United States. Filtering for the last 24 hours, the seniority/experience levels of Internship, Entry Level, and Associate with the job types of Full Time, Internship, and Other. I was looking to collect information on Full Time jobs available to those with about 0-3 years experience in the field ("entry jobs") and these filters would produce the most relevant data for my questions. Queries used LinkedIn's default "Most relevant" sorting in an attempt to get the best data pertaining to the "Finance" keyword.</p>
<p>Because LinkedIn will only display up to 1000 listings per search, I was unfortunately unable to scrape the entirety of the listings posted each day. I used separate search queries for each seniority level and further broke down those queries by filtering each for remote, hybrid, or on-site for the widest coverage. Gathering more data would not be possible without using highly specific filters introducing bias.</p>
<span class="heading"><h3 id="data-structure">Data Structure<a href="#data-structure"> ¶</a></h3></span>
<table>
<thead>
<tr>
<th>Col</th>
<th>Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td>date_scraped</td>
<td>date the listing was scraped</td>
</tr>
<tr>
<td>title</td>
<td>title of the job listing</td>
</tr>
<tr>
<td>full_url</td>
<td>LinkedIn URL of the job posting</td>
</tr>
<tr>
<td>company</td>
<td>company name</td>
</tr>
<tr>
<td>company_url</td>
<td>company's LinkedIn URL</td>
</tr>
<tr>
<td>location</td>
<td>job's location</td>
</tr>
<tr>
<td>description</td>
<td>raw HTML of the job's description</td>
</tr>
<tr>
<td>seniority_level</td>
<td>job's seniority level</td>
</tr>
<tr>
<td>employment_type</td>
<td>job's employment type (Full Time, Part Time etc.)</td>
</tr>
<tr>
<td>job_function</td>
<td>job's expected functions</td>
</tr>
<tr>
<td>industries</td>
<td>industries the company is in</td>
</tr>
</tbody>
</table></div><div class="input input-md"><span class="heading"><h2 id="data-cleaning">Data Cleaning<a href="#data-cleaning"> ¶</a></h2></span>
<span class="heading"><h3 id="import-data">Import Data<a href="#import-data"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> glob

files <span class="token operator">=</span> glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">"data/*.csv"</span><span class="token punctuation">)</span>
                  
dfs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
    dfs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

linkedin <span class="token operator">=</span> pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span>dfs<span class="token punctuation">)</span>    
display<span class="token punctuation">(</span>linkedin<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
linkedin<span class="token punctuation">.</span>describe<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">date_scraped</th>
      <th class="">title</th>
      <th class="">full_url</th>
      <th class="">company</th>
      <th class="">company_url</th>
      <th class="">location</th>
      <th class="">description</th>
      <th class="">seniority_level</th>
      <th class="">employment_type</th>
      <th class="">job_function</th>
      <th class="">industries</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">0</th>
      <td class="">2022-10-04</td>
      <td class="">Quantitative analyst (finance)</td>
      <td class="">https://www.linkedin.com/jobs/view/quantitativ...</td>
      <td class="">Lucas Group, A Korn Ferry Company</td>
      <td class="">https://www.linkedin.com/company/lucas-group?t...</td>
      <td class="">Charlotte, NC</td>
      <td class="">\\n        &lt;p&gt;Lucas Group, a Korn Ferry company...</td>
      <td class="">Associate</td>
      <td class="">Full-time</td>
      <td class="">Finance</td>
      <td class="">Banking</td>
    </tr>
    <tr class="">
      <th class="">1</th>
      <td class="">2022-10-03</td>
      <td class="">Accounting and finance associates</td>
      <td class="">https://www.linkedin.com/jobs/view/accounting-...</td>
      <td class="">EVERESTX Talent Solutions</td>
      <td class="">https://www.linkedin.com/company/everestxtalen...</td>
      <td class="">Pennsylvania, United States</td>
      <td class="">\\n        &lt;strong&gt;Overview of the Role:&lt;/stron...</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
    </tr>
    <tr class="">
      <th class="">2</th>
      <td class="">2022-09-28</td>
      <td class="">Associate/ Consulting Associate - Litigation, ...</td>
      <td class="">https://www.linkedin.com/jobs/view/associate-c...</td>
      <td class="">Charles River Associates</td>
      <td class="">https://www.linkedin.com/company/charles-river...</td>
      <td class="">Washington, DC</td>
      <td class="">\\n        &lt;strong&gt;About Charles River Associat...</td>
      <td class="">Entry level</td>
      <td class="">Full-time</td>
      <td class="">Legal</td>
      <td class="">Business Consulting and Services</td>
    </tr>
    <tr class="">
      <th class="">3</th>
      <td class="">2022-09-28</td>
      <td class="">Associate/ Consulting Associate - Litigation, ...</td>
      <td class="">https://www.linkedin.com/jobs/view/associate-c...</td>
      <td class="">Charles River Associates</td>
      <td class="">https://www.linkedin.com/company/charles-river...</td>
      <td class="">Chicago, IL</td>
      <td class="">\\n        &lt;strong&gt;About Charles River Associat...</td>
      <td class="">Entry level</td>
      <td class="">Full-time</td>
      <td class="">Legal</td>
      <td class="">Business Consulting and Services</td>
    </tr>
    <tr class="">
      <th class="">4</th>
      <td class="">2022-10-04</td>
      <td class="">Senior Financial Analyst (Remote)</td>
      <td class="">https://www.linkedin.com/jobs/view/senior-fina...</td>
      <td class="">Capital Search Group</td>
      <td class="">https://www.linkedin.com/company/capital-searc...</td>
      <td class="">McLean, VA</td>
      <td class="">\\n        Microsoft has become a corporate lea...</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
    </tr>
  </tbody>
</table>
</div><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">date_scraped</th>
      <th class="">title</th>
      <th class="">full_url</th>
      <th class="">company</th>
      <th class="">company_url</th>
      <th class="">location</th>
      <th class="">description</th>
      <th class="">seniority_level</th>
      <th class="">employment_type</th>
      <th class="">job_function</th>
      <th class="">industries</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">count</th>
      <td class="">60017</td>
      <td class="">60017</td>
      <td class="">60017</td>
      <td class="">60016</td>
      <td class="">60017</td>
      <td class="">60017</td>
      <td class="">60016</td>
      <td class="">51890</td>
      <td class="">52288</td>
      <td class="">52288</td>
      <td class="">52288</td>
    </tr>
    <tr class="">
      <th class="">unique</th>
      <td class="">7</td>
      <td class="">12294</td>
      <td class="">29607</td>
      <td class="">7205</td>
      <td class="">7213</td>
      <td class="">3071</td>
      <td class="">14787</td>
      <td class="">6</td>
      <td class="">4</td>
      <td class="">693</td>
      <td class="">1009</td>
    </tr>
    <tr class="">
      <th class="">top</th>
      <td class="">2022-09-30</td>
      <td class="">Remote Tax Professional</td>
      <td class="">https://www.linkedin.com/jobs/view/finance-and...</td>
      <td class="">Aston Carter</td>
      <td class="">https://www.linkedin.com/company/aston-carter?...</td>
      <td class="">United States</td>
      <td class="">\\n        &lt;strong&gt;&lt;u&gt;What You'll Do...&lt;br&gt;&lt;br&gt;...</td>
      <td class="">Associate</td>
      <td class="">Full-time</td>
      <td class="">Accounting/Auditing and Finance</td>
      <td class="">Not Assigned</td>
    </tr>
    <tr class="">
      <th class="">freq</th>
      <td class="">11299</td>
      <td class="">2443</td>
      <td class="">7</td>
      <td class="">3339</td>
      <td class="">3339</td>
      <td class="">3738</td>
      <td class="">2474</td>
      <td class="">23092</td>
      <td class="">40980</td>
      <td class="">10160</td>
      <td class="">9708</td>
    </tr>
  </tbody>
</table>
</div><div class="input input-md"><span class="heading"><h3 id="drop-duplicates">Drop Duplicates<a href="#drop-duplicates"> ¶</a></h3></span>
<p>Out of the 31,383 job listings that were scraped, 29,607 were unique</p></div><div class="input input-code"><pre class="language-python"><code class="language-python">linkedin<span class="token punctuation">.</span>drop_duplicates<span class="token punctuation">(</span>subset<span class="token operator">=</span><span class="token string">"full_url"</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
linkedin<span class="token punctuation">.</span>describe<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">date_scraped</th>
      <th class="">title</th>
      <th class="">full_url</th>
      <th class="">company</th>
      <th class="">company_url</th>
      <th class="">location</th>
      <th class="">description</th>
      <th class="">seniority_level</th>
      <th class="">employment_type</th>
      <th class="">job_function</th>
      <th class="">industries</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">count</th>
      <td class="">29607</td>
      <td class="">29607</td>
      <td class="">29607</td>
      <td class="">29607</td>
      <td class="">29607</td>
      <td class="">29607</td>
      <td class="">29606</td>
      <td class="">29400</td>
      <td class="">29422</td>
      <td class="">29422</td>
      <td class="">29422</td>
    </tr>
    <tr class="">
      <th class="">unique</th>
      <td class="">7</td>
      <td class="">12294</td>
      <td class="">29607</td>
      <td class="">7205</td>
      <td class="">7213</td>
      <td class="">3071</td>
      <td class="">14647</td>
      <td class="">6</td>
      <td class="">4</td>
      <td class="">691</td>
      <td class="">1000</td>
    </tr>
    <tr class="">
      <th class="">top</th>
      <td class="">2022-09-30</td>
      <td class="">Remote Tax Professional</td>
      <td class="">https://www.linkedin.com/jobs/view/quantitativ...</td>
      <td class="">Aston Carter</td>
      <td class="">https://www.linkedin.com/company/aston-carter?...</td>
      <td class="">United States</td>
      <td class="">\\n        &lt;strong&gt;&lt;u&gt;What You'll Do...&lt;br&gt;&lt;br&gt;...</td>
      <td class="">Associate</td>
      <td class="">Full-time</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
    </tr>
    <tr class="">
      <th class="">freq</th>
      <td class="">5669</td>
      <td class="">1214</td>
      <td class="">1</td>
      <td class="">1749</td>
      <td class="">1749</td>
      <td class="">1833</td>
      <td class="">1229</td>
      <td class="">11325</td>
      <td class="">20245</td>
      <td class="">8380</td>
      <td class="">8381</td>
    </tr>
  </tbody>
</table>
</div><div class="input input-md"><span class="heading"><h3 id="handle-nulls">Handle Nulls<a href="#handle-nulls"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python">linkedin<span class="token punctuation">.</span>isna<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">date_scraped         0
title                0
full_url             0
company              0
company_url          0
location             0
description          1
seniority_level    207
employment_type    185
job_function       185
industries         185
dtype: int64</pre><div class="input input-md"><p>First lets drop the row with the missing description.</p></div><div class="input input-code"><pre class="language-python"><code class="language-python">linkedin<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span>subset<span class="token operator">=</span><span class="token string">"description"</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
linkedin<span class="token punctuation">.</span>isna<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">date_scraped         0
title                0
full_url             0
company              0
company_url          0
location             0
description          0
seniority_level    207
employment_type    185
job_function       185
industries         185
dtype: int64</pre><div class="input input-md"><p>I will fill the rest of the missing data with the string "Not Assigned"</p></div><div class="input input-code"><pre class="language-python"><code class="language-python">linkedin<span class="token punctuation">.</span>fillna<span class="token punctuation">(</span><span class="token string">"Not Assigned"</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></code></pre></div><div class="input input-md"><span class="heading"><h3 id="data-types">Data Types<a href="#data-types"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python">linkedin<span class="token punctuation">.</span>info<span class="token punctuation">(</span>show_counts<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text"><class 'pandas.core.frame.dataframe'="">
Int64Index: 29606 entries, 0 to 4625
Data columns (total 11 columns):
 #   Column           Dtype 
---  ------           ----- 
 0   date_scraped     object
 1   title            object
 2   full_url         object
 3   company          object
 4   company_url      object
 5   location         object
 6   description      object
 7   seniority_level  object
 8   employment_type  object
 9   job_function     object
 10  industries       object
dtypes: object(11)
memory usage: 2.7+ MB</class></pre><div class="input input-md"><span class="heading"><h3 id="remove-unnecessary-listings">Remove Unnecessary listings<a href="#remove-unnecessary-listings"> ¶</a></h3></span>
<p>If a listing does not mention finance in it's title or it's description, the listing can be discarded as only finance related job postings are relevant.</p></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token comment"># Drop rows that do not mention finance, "financ" is chosen to include words such as "financial"</span>
<span class="token keyword">def</span> <span class="token function">drop</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token string">'financ'</span> <span class="token keyword">in</span> x<span class="token punctuation">[</span><span class="token string">"description"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token string">'financ'</span> <span class="token keyword">in</span> x<span class="token punctuation">[</span><span class="token string">"title"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>

linkedin <span class="token operator">=</span> linkedin<span class="token punctuation">[</span>linkedin<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span>drop<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span></code></pre></div><div class="input input-md"><span class="heading"><h3 id="export-cleaned-data">Export cleaned data<a href="#export-cleaned-data"> ¶</a></h3></span>
<p>After cleaning we are left with 28,634 listings out of the 31,383 originally scraped</p></div><div class="input input-code"><pre class="language-python"><code class="language-python">display<span class="token punctuation">(</span>linkedin<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
linkedin<span class="token punctuation">.</span>to_csv<span class="token punctuation">(</span><span class="token string">"data/cleaned.csv"</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">28634</pre><div class="input input-md"><span class="heading"><h2 id="eda">EDA<a href="#eda"> ¶</a></h2></span>
<span class="heading"><h3 id="loading-the-data">Loading the data<a href="#loading-the-data"> ¶</a></h3></span>
<p>After cleaning there are 28,634 unique listings.</p></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Visualisation</span>
<span class="token operator">%</span>matplotlib inline
<span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns

linkedin <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">"data/cleaned.csv"</span><span class="token punctuation">)</span>

display<span class="token punctuation">(</span>linkedin<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
linkedin<span class="token punctuation">.</span>describe<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">date_scraped</th>
      <th class="">title</th>
      <th class="">full_url</th>
      <th class="">company</th>
      <th class="">company_url</th>
      <th class="">location</th>
      <th class="">description</th>
      <th class="">seniority_level</th>
      <th class="">employment_type</th>
      <th class="">job_function</th>
      <th class="">industries</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">0</th>
      <td class="">2022-10-04</td>
      <td class="">Quantitative analyst (finance)</td>
      <td class="">https://www.linkedin.com/jobs/view/quantitativ...</td>
      <td class="">Lucas Group, A Korn Ferry Company</td>
      <td class="">https://www.linkedin.com/company/lucas-group?t...</td>
      <td class="">Charlotte, NC</td>
      <td class="">\\n        &lt;p&gt;Lucas Group, a Korn Ferry company...</td>
      <td class="">Associate</td>
      <td class="">Full-time</td>
      <td class="">Finance</td>
      <td class="">Banking</td>
    </tr>
  </tbody>
</table>
</div><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">date_scraped</th>
      <th class="">title</th>
      <th class="">full_url</th>
      <th class="">company</th>
      <th class="">company_url</th>
      <th class="">location</th>
      <th class="">description</th>
      <th class="">seniority_level</th>
      <th class="">employment_type</th>
      <th class="">job_function</th>
      <th class="">industries</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">count</th>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
      <td class="">28634</td>
    </tr>
    <tr class="">
      <th class="">unique</th>
      <td class="">7</td>
      <td class="">11956</td>
      <td class="">28634</td>
      <td class="">6985</td>
      <td class="">6992</td>
      <td class="">3027</td>
      <td class="">14095</td>
      <td class="">6</td>
      <td class="">4</td>
      <td class="">670</td>
      <td class="">975</td>
    </tr>
    <tr class="">
      <th class="">top</th>
      <td class="">2022-09-30</td>
      <td class="">Remote Tax Professional</td>
      <td class="">https://www.linkedin.com/jobs/view/quantitativ...</td>
      <td class="">Aston Carter</td>
      <td class="">https://www.linkedin.com/company/aston-carter?...</td>
      <td class="">United States</td>
      <td class="">\\n        &lt;strong&gt;&lt;u&gt;What You'll Do...&lt;br&gt;&lt;br&gt;...</td>
      <td class="">Associate</td>
      <td class="">Full-time</td>
      <td class="">Not Assigned</td>
      <td class="">Not Assigned</td>
    </tr>
    <tr class="">
      <th class="">freq</th>
      <td class="">5568</td>
      <td class="">1214</td>
      <td class="">1</td>
      <td class="">1589</td>
      <td class="">1589</td>
      <td class="">1792</td>
      <td class="">1229</td>
      <td class="">10997</td>
      <td class="">19586</td>
      <td class="">8293</td>
      <td class="">8294</td>
    </tr>
  </tbody>
</table>
</div><div class="input input-md"><span class="heading"><h3 id="locations">Locations<a href="#locations"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python">locations <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>linkedin<span class="token punctuation">[</span><span class="token string">"location"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span>
locations<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>columns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"index"</span><span class="token punctuation">:</span> <span class="token string">"Location"</span><span class="token punctuation">,</span> <span class="token string">"location"</span><span class="token punctuation">:</span> <span class="token string">"Count"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

palette <span class="token operator">=</span> <span class="token builtin">reversed</span><span class="token punctuation">(</span>sns<span class="token punctuation">.</span>color_palette<span class="token punctuation">(</span><span class="token string">"Blues"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sns<span class="token punctuation">.</span>barplot<span class="token punctuation">(</span>data<span class="token operator">=</span>locations<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Location"</span><span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token string">"Count"</span><span class="token punctuation">,</span> palette<span class="token operator">=</span>palette<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">'Top 10 Locations'</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">[Text(0.5, 1.0, 'Top 10 Locations')]</pre><div class="output output-image"><img src="${u}Output_20_1.webp" alt="${i[0]}"></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> plotly<span class="token punctuation">.</span>graph_objects <span class="token keyword">as</span> go

<span class="token comment"># Drop location "United States"</span>
locations<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># Get State Instead of City and State</span>
locations<span class="token punctuation">[</span><span class="token string">"Location"</span><span class="token punctuation">]</span> <span class="token operator">=</span> locations<span class="token punctuation">[</span><span class="token string">"Location"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
locations <span class="token operator">=</span> locations<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span>locations<span class="token punctuation">[</span><span class="token string">"Location"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span><span class="token string">'sum'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Map Figure</span>
fig <span class="token operator">=</span> go<span class="token punctuation">.</span>Figure<span class="token punctuation">(</span>data<span class="token operator">=</span>go<span class="token punctuation">.</span>Choropleth<span class="token punctuation">(</span>
    locations<span class="token operator">=</span>locations<span class="token punctuation">[</span><span class="token string">"Location"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    z<span class="token operator">=</span>locations<span class="token punctuation">[</span><span class="token string">"Count"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    locationmode<span class="token operator">=</span><span class="token string">'USA-states'</span><span class="token punctuation">,</span>
    colorscale<span class="token operator">=</span><span class="token string">'Blues'</span><span class="token punctuation">,</span>
    autocolorscale<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    marker_line_color<span class="token operator">=</span><span class="token string">'black'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>

fig<span class="token punctuation">.</span>update_layout<span class="token punctuation">(</span>
    title_text<span class="token operator">=</span><span class="token string">'Job Listings by State'</span><span class="token punctuation">,</span>
    geo <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>
        scope<span class="token operator">=</span><span class="token string">'usa'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>

fig<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><div class="output"><figure id="plotly_21_0" class="output"></figure></div><div class="input input-md"><p>Jobs with "United States" as the location are most likely remote positions. New York City and Chicago have a much higher share of jobs relative to other cities. Since New York City and Chicago are the homes of the major US security markets, it makes since that those 2 cities would have the greatest number of finance jobs.</p>
<p>The states of California, New York, Texas, Illinois, and Florida have the most jobs.</p></div><div class="input input-md"><span class="heading"><h3 id="industries">Industries<a href="#industries"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python">linkedin<span class="token punctuation">[</span><span class="token string">"industries"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">Not Assigned                                                                          8294
Staffing and Recruiting                                                               3112
Financial Services                                                                    1691
Financial Services and Retail                                                         1120
Accounting                                                                             924
                                                                                      ... 
Newspaper Publishing, Online Audio and Video Media, Book and Periodical Publishing       1
Research Services, Staffing and Recruiting, Executive Offices                            1
Staffing and Recruiting, Retail, Hospitality                                             1
Financial Services, Biotechnology Research, Pharmaceutical Manufacturing                 1
Consumer Services, Retail, Hospitality                                                   1
Name: industries, Length: 975, dtype: int64</pre><div class="input input-md"><p>Not Assigned can be dropped. Also, some listings have multiple different industries separated by a comma.</p></div><div class="input input-code"><pre class="language-python"><code class="language-python">industries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">get_industries</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> industry <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token string">"Not Assigned"</span> <span class="token keyword">not</span> <span class="token keyword">in</span> industry<span class="token punctuation">:</span>
            industries<span class="token punctuation">.</span>append<span class="token punctuation">(</span>industry<span class="token punctuation">)</span>

<span class="token comment"># Derive industries</span>
linkedin<span class="token punctuation">[</span><span class="token string">"industries"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>get_industries<span class="token punctuation">)</span>

industries <span class="token operator">=</span> pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span>industries<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">"Count"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span>
industries<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>columns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"index"</span><span class="token punctuation">:</span> <span class="token string">"Industry"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

palette <span class="token operator">=</span> <span class="token builtin">reversed</span><span class="token punctuation">(</span>sns<span class="token punctuation">.</span>color_palette<span class="token punctuation">(</span><span class="token string">"Blues"</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sns<span class="token punctuation">.</span>barplot<span class="token punctuation">(</span>data<span class="token operator">=</span>industries<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Industry"</span><span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token string">"Count"</span><span class="token punctuation">,</span> palette<span class="token operator">=</span>palette<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">'Top 15 Industries'</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">[Text(0.5, 1.0, 'Top 15 Industries')]</pre><div class="output output-image"><img src="${u}Output_26_1.webp" alt="${i[1]}"></div><div class="input input-code"><pre class="language-python"><code class="language-python">linkedin<span class="token punctuation">[</span><span class="token string">"company"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">Aston Carter                1589
H&amp;R Block                   1278
Grant Thornton LLP (US)      728
RemoteWorker US              620
PwC                          474
                            ... 
Eureka Multifamily Group       1
University of Phoenix          1
5th Avenue Recruiting          1
JES Holdings, LLC              1
Jamestown                      1
Name: company, Length: 6985, dtype: int64</pre><div class="input input-md"><p>Staffing/ Recruiting is interestingly the most common industry making postings. This is likely due to staffing firms making many postings, as several of the most repeated companies in the dataset are staffing firms.</p>
<p>Besides Staffing/ Recruiting, many of the top 15 industries are directly in the financial industry as expected.</p>
<p>Software development, IT, Information/Internet, and Technology where information systems domain knowledge may be useful make up numbers 4, 6, 12, and 13 respectively.</p></div><div class="input input-md"><span class="heading"><h3 id="skills">Skills<a href="#skills"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> re

<span class="token comment"># Tuple containing the skill name and it's regex pattern</span>
<span class="token comment"># 0 is the name and 1 is the regex pattern</span>
skills_search <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token string">'Data Analysis'</span><span class="token punctuation">,</span> <span class="token string">'data anal'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">'SQL'</span><span class="token punctuation">,</span> <span class="token string">'sql'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">'Database'</span><span class="token punctuation">,</span> <span class="token string">'database'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">'Excel'</span><span class="token punctuation">,</span> <span class="token string">'excel |excel.|excel,'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">'Tableau'</span><span class="token punctuation">,</span> <span class="token string">'tableau'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">'Power BI'</span><span class="token punctuation">,</span> <span class="token string">'power bi'</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

skills <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">get_skills</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> skill <span class="token keyword">in</span> skills_search<span class="token punctuation">:</span>
        <span class="token keyword">if</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span>skill<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            skills<span class="token punctuation">.</span>append<span class="token punctuation">(</span>skill<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

linkedin<span class="token punctuation">[</span><span class="token string">"description"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>get_skills<span class="token punctuation">)</span>

skills <span class="token operator">=</span> pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span>skills<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">"Count"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value_counts<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span><span class="token punctuation">)</span>
skills<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>columns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"index"</span><span class="token punctuation">:</span> <span class="token string">"Skill"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

skills<span class="token punctuation">[</span><span class="token string">'% of Listings'</span><span class="token punctuation">]</span> <span class="token operator">=</span> skills<span class="token punctuation">[</span><span class="token string">'Count'</span><span class="token punctuation">]</span> <span class="token operator">/</span> linkedin<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">100</span>

length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>skills_search<span class="token punctuation">)</span>
palette <span class="token operator">=</span> <span class="token builtin">reversed</span><span class="token punctuation">(</span>sns<span class="token punctuation">.</span>color_palette<span class="token punctuation">(</span><span class="token string">"Blues"</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">)</span>
sns<span class="token punctuation">.</span>barplot<span class="token punctuation">(</span>data<span class="token operator">=</span>skills<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span>length<span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">"Skill"</span><span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token string">'% of Listings'</span><span class="token punctuation">,</span> palette<span class="token operator">=</span>palette<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">'Most In Demand Skills'</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">[Text(0.5, 1.0, 'Most In Demand Skills')]</pre><div class="output output-image"><img src="${u}Output_30_1.webp" alt="${i[2]}"></div><div class="input input-md"><p>Excel is a must-have skill, it is mentioned in 25% of the job listings.</p></div><div class="input input-md"><span class="heading"><h2 id="findings">Findings<a href="#findings"> ¶</a></h2></span>
<span class="heading"><h3 id="where-are-the-most-jobs-located">Where are the most jobs located?<a href="#where-are-the-most-jobs-located"> ¶</a></h3></span>
<p>New York City and Chicago have the greatest proportion of the jobs relative to other cities in the United States.</p>
<p>The states of California, New York, Texas, Illinois, and Florida have the most jobs overall.</p>
<span class="heading"><h3 id="which-industries-have-the-most-jobs">Which industries have the most jobs?<a href="#which-industries-have-the-most-jobs"> ¶</a></h3></span>
<p>Unsurprisingly jobs directly in the financial services industry are the most common, but tech is common as well. Software development, IT, Information/Internet, and Technology make up numbers 4, 6, 12, and 13 respectively.</p>
<span class="heading"><h3 id="how-can-i-best-prepare-myself-for-getting-a-job-what-skills-are-in-demand-beyond-an-education-in-finance">How can I best prepare myself for getting a job, what skills are in demand beyond an education in Finance?<a href="#how-can-i-best-prepare-myself-for-getting-a-job-what-skills-are-in-demand-beyond-an-education-in-finance"> ¶</a></h3></span>
<p>Excel is the most in demand skill, being mentioned in 25% of the job descriptions. Database, and Data Analysis are second and third, both around 10%.</p>
<p>SQL, Tableau, and Power BI were mentioned in about 1% of the postings, however these skills may set a job candidate apart from others seeking the same role.</p>
<span class="heading"><h3 id="would-my-mis-degree-make-me-more-marketable">Would my MIS degree make me more marketable?<a href="#would-my-mis-degree-make-me-more-marketable"> ¶</a></h3></span>
<p>Database knowledge and data analysis skills are high in demand which are topics covered in the MIS degree program. Also, IT and tech are in the top 15 industries and in these industries information systems domain knowledge may be useful.</p></div><style lang="scss">/* Do Not Remove  */
/* Used to render latex math */
@import url("https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css");
h1 {
  font-size: 2.3em;
}

/* Link on hover */
.heading > * > a {
  visibility: hidden;
  text-decoration: none;
}

.heading:hover > * > a {
  visibility: visible;
}

.heading > * > a:hover {
  color: rgb(69, 69, 255);
}

pre {
  margin: 0;
}

/* Controls all inputs */
.input {
  max-width: 100%;
}

/* Controls the code blocks */
.input-code {
  margin-bottom: 1.5em;
  font-size: 0.95em;
}

/* Controls the markdown blocks */
.input-md {
  margin-top: 1.5em;
}

/* Controls all output blocks */
.output {
  display: block;
  max-width: 100%;
  overflow: auto;
}

/* Controls stdout (print statements, text output) */
.output-stream {
  font-size: 1em;
}

/* Controls Images */
img {
  max-width: 100%;
}

/* Controls plotly figures */
figure {
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  display: block;
}

/* Wrapper around table outputs */
.output-html-table {
  font-size: 0.85em;
  /* Table formatting */
}
.output-html-table table {
  margin-left: 0;
  margin-bottom: 10px 0;
}
.output-html-table th {
  text-align: right;
  border: 0;
}
.output-html-table td {
  text-align: right;
  border: 0;
}</style>`;
	return (
		(b.$$set = (d) => {
			'img_path_prefix' in d && r(2, (u = d.img_path_prefix)),
				'img_alt_text' in d && r(3, (i = d.img_alt_text));
		}),
		[o, y, u, i]
	);
}
class Ns extends As {
	constructor(a) {
		super(), Cs(this, a, Ts, Ls, Ss, { img_path_prefix: 2, img_alt_text: 3 });
	}
}
function Ds(b) {
	let a;
	return {
		c() {
			a = x('Jupyter2Svelte');
		},
		l(r) {
			a = j(r, 'Jupyter2Svelte');
		},
		m(r, u) {
			c(r, a, u);
		},
		d(r) {
			r && t(a);
		}
	};
}
function Ms(b) {
	let a,
		r,
		u,
		i,
		o,
		y,
		d,
		w,
		v,
		q,
		Q,
		F,
		cs,
		X,
		I,
		is,
		Z,
		E,
		rs,
		ss,
		L,
		us,
		G,
		T,
		P,
		ts,
		U,
		N,
		as,
		O,
		D,
		z,
		ns,
		W,
		M,
		es,
		J,
		H,
		V,
		R,
		A,
		os,
		_,
		ps,
		Y,
		C,
		$;
	return (
		(_ = new Es({
			props: {
				href: 'https://daneski13.github.io/projects/jupyter2svelte',
				$$slots: { default: [Ds] },
				$$scope: { ctx: b }
			}
		})),
		(C = new Ns({
			props: { img_path_prefix: '/projects/analyzing-finance-job-market/', img_alt_text: b[0] }
		})),
		{
			c() {
				(a = p('p')),
					(r = p('strong')),
					(u = x('Technologies:')),
					(i = h()),
					(o = p('p')),
					(y = p('img')),
					(w = h()),
					(v = p('img')),
					(Q = h()),
					(F = p('img')),
					(X = h()),
					(I = p('img')),
					(Z = h()),
					(E = p('img')),
					(ss = h()),
					(L = p('img')),
					(G = h()),
					(T = p('p')),
					(P = p('strong')),
					(ts = x('Data Manipulation Library:')),
					(U = h()),
					(N = p('p')),
					(as = x('Pandas')),
					(O = h()),
					(D = p('p')),
					(z = p('strong')),
					(ns = x('Data Visualization Libraries:')),
					(W = h()),
					(M = p('p')),
					(es = x('Seaborn, Plotly')),
					(J = h()),
					(H = p('hr')),
					(V = h()),
					(R = p('p')),
					(A = p('strong')),
					(os = x('Below is the Jupyter Notebook for this project, generated with ')),
					ys(_.$$.fragment),
					(ps = x(':')),
					(Y = h()),
					ys(C.$$.fragment),
					this.h();
			},
			l(s) {
				a = l(s, 'P', {});
				var n = m(a);
				r = l(n, 'STRONG', {});
				var B = m(r);
				(u = j(B, 'Technologies:')), B.forEach(t), n.forEach(t), (i = g(s)), (o = l(s, 'P', {}));
				var f = m(o);
				(y = l(f, 'IMG', { src: !0, alt: !0 })),
					(w = g(f)),
					(v = l(f, 'IMG', { src: !0, alt: !0 })),
					(Q = g(f)),
					(F = l(f, 'IMG', { src: !0, alt: !0 })),
					(X = g(f)),
					(I = l(f, 'IMG', { src: !0, alt: !0 })),
					(Z = g(f)),
					(E = l(f, 'IMG', { src: !0, alt: !0 })),
					(ss = g(f)),
					(L = l(f, 'IMG', { src: !0, alt: !0 })),
					f.forEach(t),
					(G = g(s)),
					(T = l(s, 'P', {}));
				var ds = m(T);
				P = l(ds, 'STRONG', {});
				var ks = m(P);
				(ts = j(ks, 'Data Manipulation Library:')),
					ks.forEach(t),
					ds.forEach(t),
					(U = g(s)),
					(N = l(s, 'P', {}));
				var hs = m(N);
				(as = j(hs, 'Pandas')), hs.forEach(t), (O = g(s)), (D = l(s, 'P', {}));
				var gs = m(D);
				z = l(gs, 'STRONG', {});
				var ms = m(z);
				(ns = j(ms, 'Data Visualization Libraries:')),
					ms.forEach(t),
					gs.forEach(t),
					(W = g(s)),
					(M = l(s, 'P', {}));
				var fs = m(M);
				(es = j(fs, 'Seaborn, Plotly')),
					fs.forEach(t),
					(J = g(s)),
					(H = l(s, 'HR', {})),
					(V = g(s)),
					(R = l(s, 'P', {}));
				var bs = m(R);
				A = l(bs, 'STRONG', {});
				var K = m(A);
				(os = j(K, 'Below is the Jupyter Notebook for this project, generated with ')),
					ws(_.$$.fragment, K),
					(ps = j(K, ':')),
					K.forEach(t),
					bs.forEach(t),
					(Y = g(s)),
					ws(C.$$.fragment, s),
					this.h();
			},
			h() {
				S(
					y.src,
					(d =
						'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54')
				) || k(y, 'src', d),
					k(y, 'alt', 'Python'),
					S(
						v.src,
						(q =
							'https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white')
					) || k(v, 'src', q),
					k(v, 'alt', 'Jupyter Lab/Notebook'),
					S(
						F.src,
						(cs =
							'https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white')
					) || k(F, 'src', cs),
					k(F, 'alt', 'Anaconda'),
					S(
						I.src,
						(is =
							'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white')
					) || k(I, 'src', is),
					k(I, 'alt', 'GitHub'),
					S(
						E.src,
						(rs =
							'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white')
					) || k(E, 'src', rs),
					k(E, 'alt', 'Git'),
					S(
						L.src,
						(us =
							'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white')
					) || k(L, 'src', us),
					k(L, 'alt', 'Visual Studio Code');
			},
			m(s, n) {
				c(s, a, n),
					e(a, r),
					e(r, u),
					c(s, i, n),
					c(s, o, n),
					e(o, y),
					e(o, w),
					e(o, v),
					e(o, Q),
					e(o, F),
					e(o, X),
					e(o, I),
					e(o, Z),
					e(o, E),
					e(o, ss),
					e(o, L),
					c(s, G, n),
					c(s, T, n),
					e(T, P),
					e(P, ts),
					c(s, U, n),
					c(s, N, n),
					e(N, as),
					c(s, O, n),
					c(s, D, n),
					e(D, z),
					e(z, ns),
					c(s, W, n),
					c(s, M, n),
					e(M, es),
					c(s, J, n),
					c(s, H, n),
					c(s, V, n),
					c(s, R, n),
					e(R, A),
					e(A, os),
					vs(_, A, null),
					e(A, ps),
					c(s, Y, n),
					vs(C, s, n),
					($ = !0);
			},
			p(s, [n]) {
				const B = {};
				n & 2 && (B.$$scope = { dirty: n, ctx: s }), _.$set(B);
			},
			i(s) {
				$ || (_s(_.$$.fragment, s), _s(C.$$.fragment, s), ($ = !0));
			},
			o(s) {
				xs(_.$$.fragment, s), xs(C.$$.fragment, s), ($ = !1);
			},
			d(s) {
				s && t(a),
					s && t(i),
					s && t(o),
					s && t(G),
					s && t(T),
					s && t(U),
					s && t(N),
					s && t(O),
					s && t(D),
					s && t(W),
					s && t(M),
					s && t(J),
					s && t(H),
					s && t(V),
					s && t(R),
					js(_),
					s && t(Y),
					js(C, s);
			}
		}
	);
}
const Bs = {
	title: 'Analyzing Finance Job Postings',
	date: '2022-10-06',
	updated: '2023-04-17',
	card: '/projects/analyzing-finance-job-market/card.webp',
	cover: '/projects/analyzing-finance-job-market/cover.webp',
	description: 'Exploratory Data Analysis of the Entry-Level Finance Job Market',
	code: 'https://github.com/Daneski13/Analyzing-Finance-Job-Postings'
};
function Rs(b) {
	return [
		[
			'Bar Chart of the Top 10 Locations',
			'Chart Showing Top 15 Industries',
			'Chart Showing the Most In Demand Skills'
		]
	];
}
class qs extends As {
	constructor(a) {
		super(), Cs(this, a, Rs, Ms, Ss, {});
	}
}
export { qs as default, Bs as metadata };
