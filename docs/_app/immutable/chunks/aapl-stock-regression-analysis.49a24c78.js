import{S as Es,i as Ns,s as Fs,k as p,a as d,M as zs,l as o,m as u,h as a,c as h,L as S,n as f,E as e,b as c,O as Bs,F as ms,q as v,y as Ts,r as w,z as Is,A as js,g as Ds,d as Gs,B as Ms}from"./index.45ab08d9.js";import{A as qs}from"./Anchor.9f55ae68.js";function Hs(y){let n,i,m,r,l,b;return{c(){n=p("script"),m=d(),r=p("div"),this.h()},l(k){const _=zs("svelte-zr0you",document.head);n=o(_,"SCRIPT",{src:!0,charset:!0});var x=u(n);x.forEach(a),_.forEach(a),m=h(k),r=o(k,"DIV",{class:!0});var V=u(r);V.forEach(a),this.h()},h(){S(n.src,i="https://cdn.plot.ly/plotly-2.20.0.min.js")||f(n,"src",i),f(n,"charset","utf-8"),f(r,"class","jupyter")},m(k,_){e(document.head,n),c(k,m,_),c(k,r,_),r.innerHTML=y[1],l||(b=Bs(n,"load",y[0]),l=!0)},p:ms,i:ms,o:ms,d(k){a(n),k&&a(m),k&&a(r),l=!1,b()}}}function Vs(y,n,i){let{img_path_prefix:m}=n,{img_alt_text:r=Array.apply(null,Array(2)).map(function(){return"Image"})}=n;const l=()=>{},b=`<div class="input input-md"><span class="heading"><h1 id="apple-regression-analysis">Apple Regression Analysis<a href="#apple-regression-analysis"> ¶</a></h1></span>
<p><strong>This analysis was completed as part of my Intermediate Financial Management (FIN 425) course project at Washington State University.</strong></p>
<span class="heading"><h2 id="purpose">Purpose<a href="#purpose"> ¶</a></h2></span>
<p>This notebook aims to analyze the systematic risks associated with a new smartphone manufacturing and launch project that a firm is considering. Given the significant investment required for this project, the firm desires a more in-depth understanding of the systematic risk and is seeking recommendations to make an informed decision.</p>
<p>The Scenario:</p>
<p>As a financial analyst for a theoretical smartphone manufacturer I am tasked with providing an analysis of the smartphone industry's market risk to the company's CEO. This theoretical company wants to use the behavior of Apple Inc.'s (AAPL) stock, a leading firm in the industry and the main competitor, as a proxy for the industry as a whole. The company is considering a new smartphone manufacturing and launch project, but is concerned about the significant investment required.</p>
<span class="heading"><h2 id="methodology">Methodology<a href="#methodology"> ¶</a></h2></span>
<p>The weekly adjusted close of the previous 5 years (ending 12/31/2022) will be collected from yahoo finance. The market benchmark used is the return of the S&amp;P 500 index (ticker ^GSPC) and the risk-free rate will be based on the 13 week T-Bill (ticker ^IRX).</p>
<p>In order to provide an accurate analysis of the smartphone industry's market risk, data over a relatively long period must be considered. However, the smartphone industry is relatively fast paced, new products are released every year and major competitors have entered or left the market. 10 years ago (in 2012) Blackberry and Nokia were still household names in the industry, thus a time frame of 5 years (from 2017) will provide a more accurate representation of the current smartphone market.</p>
<p>In addition, the past five years encompasses pre-COVID, COVID shutdown, and post-COVID periods. So, the analysis will reflect the market performance under relatively "normal" circumstances, a sharp contraction/recession (as a result of the pandemic shutdowns), and a rapid expansion (due to the lifting of pandemic shutdowns), offering a comprehensive view of the market under various economic conditions.</p>
<p>&nbsp;A 1-week interval will ensure that smaller, more “random,” daily fluctuations in the market are smoothed out. This will provide a more accurate representation of returns. Also, a weekly time frame offers a greater number of data points compared to a monthly time frame, thereby resulting in a more precise regression analysis.</p>
<p>The S&amp;P 500 index is the most commonly employed benchmark to represent the overall market, while a short-term T-Bill rate is typically considered the risk-free rate of return. Ideally, the 4-week T-Bill rate would be used since it carries the lowest risk compared to other T-Bills, which already have very low-risk levels. However, historical data for the 4-week rate is not easily accessible, while the IRX ticker symbol readily offers the 13-week T-Bill yield. Given that T-Bills are already very low-risk, the 13-week rate is a suitable proxy for the risk-free interest rate.</p></div><div class="input input-md"><span class="heading"><h2 id="data-collection">Data Collection<a href="#data-collection"> ¶</a></h2></span></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> yfinance <span class="token keyword">as</span> yf
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Get weekly data for Apple, the S&amp;P 500, and the Risk free rate (13 week T-bill) from Yahoo finance</span>
data<span class="token punctuation">:</span> pd<span class="token punctuation">.</span>DataFrame <span class="token operator">=</span> yf<span class="token punctuation">.</span>download<span class="token punctuation">(</span>tickers <span class="token operator">=</span> <span class="token string">"AAPL ^GSPC ^IRX"</span><span class="token punctuation">,</span> start<span class="token operator">=</span><span class="token string">"2017-12-24"</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">"2022-12-31"</span><span class="token punctuation">,</span> interval<span class="token operator">=</span><span class="token string">"1wk"</span><span class="token punctuation">,</span> ignore_tz<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># Only want the adjusted close data</span>
data <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">"Adj Close"</span><span class="token punctuation">]</span>

<span class="token comment"># Display some summary stuff</span>
display<span class="token punctuation">(</span>data<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
data<span class="token punctuation">.</span>describe<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">[*********************100%***********************]  3 of 3 completed</pre><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">AAPL</th>
      <th class="">^GSPC</th>
      <th class="">^IRX</th>
    </tr>
    <tr class="">
      <th class="">Date</th>
      <th class=""></th>
      <th class=""></th>
      <th class=""></th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">2017-12-25</th>
      <td class="">40.168858</td>
      <td class="">2673.610107</td>
      <td class="">1.355</td>
    </tr>
    <tr class="">
      <th class="">2018-01-01</th>
      <td class="">41.538441</td>
      <td class="">2743.149902</td>
      <td class="">1.370</td>
    </tr>
    <tr class="">
      <th class="">2018-01-08</th>
      <td class="">42.034523</td>
      <td class="">2786.239990</td>
      <td class="">1.410</td>
    </tr>
    <tr class="">
      <th class="">2018-01-15</th>
      <td class="">42.359707</td>
      <td class="">2810.300049</td>
      <td class="">1.403</td>
    </tr>
    <tr class="">
      <th class="">2018-01-22</th>
      <td class="">40.710045</td>
      <td class="">2872.870117</td>
      <td class="">1.388</td>
    </tr>
  </tbody>
</table>
</div><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">AAPL</th>
      <th class="">^GSPC</th>
      <th class="">^IRX</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">count</th>
      <td class="">262.000000</td>
      <td class="">262.000000</td>
      <td class="">262.00000</td>
    </tr>
    <tr class="">
      <th class="">mean</th>
      <td class="">96.307888</td>
      <td class="">3447.542865</td>
      <td class="">1.26129</td>
    </tr>
    <tr class="">
      <th class="">std</th>
      <td class="">46.616206</td>
      <td class="">670.078326</td>
      <td class="">1.14378</td>
    </tr>
    <tr class="">
      <th class="">min</th>
      <td class="">35.719704</td>
      <td class="">2304.919922</td>
      <td class="">-0.05800</td>
    </tr>
    <tr class="">
      <th class="">25%</th>
      <td class="">49.386446</td>
      <td class="">2842.040100</td>
      <td class="">0.08300</td>
    </tr>
    <tr class="">
      <th class="">50%</th>
      <td class="">88.206627</td>
      <td class="">3270.540039</td>
      <td class="">1.50400</td>
    </tr>
    <tr class="">
      <th class="">75%</th>
      <td class="">141.306679</td>
      <td class="">4049.774963</td>
      <td class="">2.09975</td>
    </tr>
    <tr class="">
      <th class="">max</th>
      <td class="">178.142502</td>
      <td class="">4766.180176</td>
      <td class="">4.26000</td>
    </tr>
  </tbody>
</table>
</div><div class="input input-md"><span class="heading"><h3 id="convert-prices-to-risk-adjusted-rates">Convert prices to risk-adjusted rates<a href="#convert-prices-to-risk-adjusted-rates"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token comment"># Convert the prices of the S&amp;P and Apple to their percentage change from the previous week (weekly rate of return)</span>
previous_day <span class="token operator">=</span> data<span class="token punctuation">.</span>shift<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
data<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">-</span> previous_day<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> previous_day<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">100</span>

<span class="token comment"># Divide the risk-free rate by 52 to convert from annual to weekly</span>
data<span class="token punctuation">[</span><span class="token string">"^IRX"</span><span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">"^IRX"</span><span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">52</span>

<span class="token comment"># Drop the first column since its rate is undefined</span>
data<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span>inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Prices and the risk-free rate converted to their weekly rates of return:"</span><span class="token punctuation">)</span>
display<span class="token punctuation">(</span>data<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Give the returns adjusted by the risk-free rate</span>
data <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"AAPL"</span><span class="token punctuation">,</span> <span class="token string">"^GSPC"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>sub<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">"^IRX"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Returns adjusted by risk-free rate:"</span><span class="token punctuation">)</span>
data<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">Prices and the risk-free rate converted to their weekly rates of return:</pre><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">AAPL</th>
      <th class="">^GSPC</th>
      <th class="">^IRX</th>
    </tr>
    <tr class="">
      <th class="">Date</th>
      <th class=""></th>
      <th class=""></th>
      <th class=""></th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">2018-01-01</th>
      <td class="">3.409565</td>
      <td class="">2.600970</td>
      <td class="">0.026346</td>
    </tr>
    <tr class="">
      <th class="">2018-01-08</th>
      <td class="">1.194273</td>
      <td class="">1.570825</td>
      <td class="">0.027115</td>
    </tr>
    <tr class="">
      <th class="">2018-01-15</th>
      <td class="">0.773611</td>
      <td class="">0.863531</td>
      <td class="">0.026981</td>
    </tr>
    <tr class="">
      <th class="">2018-01-22</th>
      <td class="">-3.894413</td>
      <td class="">2.226455</td>
      <td class="">0.026692</td>
    </tr>
    <tr class="">
      <th class="">2018-01-29</th>
      <td class="">-6.419479</td>
      <td class="">-3.854690</td>
      <td class="">0.027885</td>
    </tr>
  </tbody>
</table>
</div><pre class="output output-text">Returns adjusted by risk-free rate:</pre><div class="output output-html-table">

<table border="1" class="">
  <thead class="">
    <tr style="text-align: right;" class="">
      <th class=""></th>
      <th class="">AAPL</th>
      <th class="">^GSPC</th>
    </tr>
    <tr class="">
      <th class="">Date</th>
      <th class=""></th>
      <th class=""></th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <th class="">2018-01-01</th>
      <td class="">3.383218</td>
      <td class="">2.574624</td>
    </tr>
    <tr class="">
      <th class="">2018-01-08</th>
      <td class="">1.167157</td>
      <td class="">1.543710</td>
    </tr>
    <tr class="">
      <th class="">2018-01-15</th>
      <td class="">0.746631</td>
      <td class="">0.836551</td>
    </tr>
    <tr class="">
      <th class="">2018-01-22</th>
      <td class="">-3.921106</td>
      <td class="">2.199763</td>
    </tr>
    <tr class="">
      <th class="">2018-01-29</th>
      <td class="">-6.447364</td>
      <td class="">-3.882575</td>
    </tr>
  </tbody>
</table>
</div><div class="input input-md"><span class="heading"><h2 id="plots-and-regression-analysis">Plots and Regression Analysis<a href="#plots-and-regression-analysis"> ¶</a></h2></span></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> statsmodels<span class="token punctuation">.</span>api <span class="token keyword">as</span> sm
<span class="token keyword">from</span> scipy <span class="token keyword">import</span> stats
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns

<span class="token operator">%</span>matplotlib inline

<span class="token comment"># Plot colors</span>
PRIMARY_COLOR <span class="token operator">=</span> <span class="token string">"#1799E7"</span>
SECONDARY_COLOR <span class="token operator">=</span> <span class="token string">"black"</span>
DASH_COLOR <span class="token operator">=</span> <span class="token string">"dimgrey"</span></code></pre></div><div class="input input-md"><span class="heading"><h3 id="regression-model">Regression Model<a href="#regression-model"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python"><span class="token comment"># S&amp;P 500 is the independent variable and Apple is the dependent variable</span>
x <span class="token operator">=</span> sm<span class="token punctuation">.</span>add_constant<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'^GSPC'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">'AAPL'</span><span class="token punctuation">]</span>

<span class="token comment"># Fit a simple linear regression model</span>
model <span class="token operator">=</span> sm<span class="token punctuation">.</span>OLS<span class="token punctuation">(</span>y<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span>fit<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><div class="input input-md"><span class="heading"><h3 id="scl-plot">SCL Plot<a href="#scl-plot"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python">plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Create a scatter plot with regression line</span>
plot <span class="token operator">=</span> sns<span class="token punctuation">.</span>regplot<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">'^GSPC'</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">'AAPL'</span><span class="token punctuation">,</span> data<span class="token operator">=</span>data<span class="token punctuation">,</span> line_kws<span class="token operator">=</span><span class="token punctuation">{</span>
                   <span class="token string">'color'</span><span class="token punctuation">:</span> SECONDARY_COLOR<span class="token punctuation">,</span> <span class="token string">'zorder'</span><span class="token punctuation">:</span> <span class="token number">999</span><span class="token punctuation">}</span><span class="token punctuation">,</span> scatter_kws<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"color"</span><span class="token punctuation">:</span> PRIMARY_COLOR<span class="token punctuation">,</span> <span class="token string">'alpha'</span><span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token string">'s'</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> ci<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token comment"># Get the y-intercept (alpha) and slope (beta) from the regression model</span>
alpha <span class="token operator">=</span> model<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
beta <span class="token operator">=</span> model<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment"># Annotate the plot with the alpha and beta values</span>
plt<span class="token punctuation">.</span>annotate<span class="token punctuation">(</span><span class="token string">'Alpha, $\\\\alpha$: {:.3f}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span>alpha<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xy<span class="token operator">=</span><span class="token punctuation">(</span>
    <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xycoords<span class="token operator">=</span><span class="token string">'axes fraction'</span><span class="token punctuation">,</span> fontsize<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>annotate<span class="token punctuation">(</span><span class="token string">'Beta, $\\\\beta$: {:.2f}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span>beta<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xy<span class="token operator">=</span><span class="token punctuation">(</span>
    <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token number">0.85</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xycoords<span class="token operator">=</span><span class="token string">'axes fraction'</span><span class="token punctuation">,</span> fontsize<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span>

<span class="token comment"># Annotate the plot with the R^2 value and correlation coefficient</span>
correlation <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">'AAPL'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>corr<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'^GSPC'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
r_squared <span class="token operator">=</span> model<span class="token punctuation">.</span>rsquared
plt<span class="token punctuation">.</span>annotate<span class="token punctuation">(</span><span class="token string">'Correlation, $\\\\rho$: {:.2f}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span>correlation<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xy<span class="token operator">=</span><span class="token punctuation">(</span>
    <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token number">0.78</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xycoords<span class="token operator">=</span><span class="token string">'axes fraction'</span><span class="token punctuation">,</span> fontsize<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>annotate<span class="token punctuation">(</span><span class="token string">'$R^2$: {:.3f}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span>r_squared<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xy<span class="token operator">=</span><span class="token punctuation">(</span>
    <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token number">0.73</span><span class="token punctuation">)</span><span class="token punctuation">,</span> xycoords<span class="token operator">=</span><span class="token string">'axes fraction'</span><span class="token punctuation">,</span> fontsize<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span>

<span class="token comment"># Show the origin on the plot</span>
plt<span class="token punctuation">.</span>axvline<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> color<span class="token operator">=</span>DASH_COLOR<span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">'--'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>axhline<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> color<span class="token operator">=</span>DASH_COLOR<span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">'--'</span><span class="token punctuation">)</span>

<span class="token comment"># Format the ticks to be percentages</span>
plot<span class="token punctuation">.</span>set_xticklabels<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'{:.0f}%'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> plot<span class="token punctuation">.</span>get_xticks<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
plot<span class="token punctuation">.</span>set_yticklabels<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'{:.0f}%'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token keyword">for</span> y <span class="token keyword">in</span> plot<span class="token punctuation">.</span>get_yticks<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># change the color of the negative percentage ticks to red</span>
<span class="token punctuation">[</span>plot<span class="token punctuation">.</span>get_yticklabels<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>plot<span class="token punctuation">.</span>get_yticks<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
 <span class="token keyword">else</span> <span class="token boolean">None</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>plot<span class="token punctuation">.</span>get_yticklabels<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span>plot<span class="token punctuation">.</span>get_xticklabels<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>plot<span class="token punctuation">.</span>get_xticks<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
 <span class="token keyword">else</span> <span class="token boolean">None</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>plot<span class="token punctuation">.</span>get_xticklabels<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment"># Show the SCL plot</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">"Apple vs Market Index \\nSecurity Characteristics Line"</span><span class="token punctuation">,</span> fontsize<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'Market Index (S&amp;P 500) Excess Return (Weekly)'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'Apple (AAPL) Excess Return (Weekly)'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div><pre class="output output-text">/var/folders/d6/rpd6b_591txdmpf_4f2f21740000gn/T/ipykernel_20068/3378242753.py:30: UserWarning: FixedFormatter should only be used together with FixedLocator
  plot.set_xticklabels(['{:.0f}%'.format(x) for x in plot.get_xticks()])
/var/folders/d6/rpd6b_591txdmpf_4f2f21740000gn/T/ipykernel_20068/3378242753.py:31: UserWarning: FixedFormatter should only be used together with FixedLocator
  plot.set_yticklabels(['{:.0f}%'.format(y) for y in plot.get_yticks()])</pre><div class="output output-image"><img src="${m}Output_10_1.webp" alt="${r[0]}"></div><div class="input input-md"><span class="heading"><h3 id="residual-plots-and-model-statistics">Residual Plots and Model Statistics<a href="#residual-plots-and-model-statistics"> ¶</a></h3></span></div><div class="input input-code"><pre class="language-python"><code class="language-python">res_plots<span class="token punctuation">,</span> axs <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span>nrows<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> ncols<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Get the residuals from the regression model</span>
residuals <span class="token operator">=</span> model<span class="token punctuation">.</span>resid

<span class="token comment"># Create residual time series plot</span>
sns<span class="token punctuation">.</span>lineplot<span class="token punctuation">(</span>data<span class="token operator">=</span>residuals<span class="token punctuation">,</span> color<span class="token operator">=</span>PRIMARY_COLOR<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.7</span><span class="token punctuation">,</span> ax<span class="token operator">=</span>axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">'Date'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">'Residuals'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">'Residual Time Series Plot'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axhline<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> color<span class="token operator">=</span>DASH_COLOR<span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">'--'</span><span class="token punctuation">)</span>

<span class="token comment"># Create fitted values by the model vs residuals</span>
sns<span class="token punctuation">.</span>scatterplot<span class="token punctuation">(</span>y<span class="token operator">=</span>residuals<span class="token punctuation">,</span> x<span class="token operator">=</span>model<span class="token punctuation">.</span>fittedvalues<span class="token punctuation">,</span> color<span class="token operator">=</span>PRIMARY_COLOR<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.7</span><span class="token punctuation">,</span> s<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> ax<span class="token operator">=</span>axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">'Fitted Values vs Residuals'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">'Residuals'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">'Fitted Values'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axhline<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> color<span class="token operator">=</span>DASH_COLOR<span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">'--'</span><span class="token punctuation">)</span>

<span class="token comment"># Create a histogram and kde of the residuals</span>
sns<span class="token punctuation">.</span>histplot<span class="token punctuation">(</span>residuals<span class="token punctuation">,</span> ax<span class="token operator">=</span>axs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> color<span class="token operator">=</span>PRIMARY_COLOR<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.7</span><span class="token punctuation">,</span> stat<span class="token operator">=</span><span class="token string">'density'</span><span class="token punctuation">)</span>
sns<span class="token punctuation">.</span>kdeplot<span class="token punctuation">(</span>residuals<span class="token punctuation">,</span> ax<span class="token operator">=</span>axs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> color<span class="token operator">=</span>SECONDARY_COLOR<span class="token punctuation">,</span> linewidth<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">'Distribution of Residuals'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_ylabel<span class="token punctuation">(</span><span class="token string">'Frequency'</span><span class="token punctuation">)</span>
axs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_xlabel<span class="token punctuation">(</span><span class="token string">'Residuals'</span><span class="token punctuation">)</span>

<span class="token comment"># Adjust and show the plots</span>
plt<span class="token punctuation">.</span>subplots_adjust<span class="token punctuation">(</span>hspace<span class="token operator">=</span><span class="token number">0.33</span><span class="token punctuation">)</span>
res_plots<span class="token punctuation">.</span>suptitle<span class="token punctuation">(</span><span class="token string">"Residual Plots"</span><span class="token punctuation">,</span> fontsize<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">0.93</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span>res_plots<span class="token punctuation">)</span>

<span class="token comment"># Show the summary statistics of the model</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>summary<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre></div><div class="output output-image"><img src="${m}Output_12_0.webp" alt="${r[1]}"></div><pre class="output output-text">OLS Regression Results                            
==============================================================================
Dep. Variable:                   AAPL   R-squared:                       0.547
Model:                            OLS   Adj. R-squared:                  0.545
Method:                 Least Squares   F-statistic:                     312.3
Date:                Tue, 11 Apr 2023   Prob (F-statistic):           2.18e-46
Time:                        11:35:10   Log-Likelihood:                -643.59
No. Observations:                 261   AIC:                             1291.
Df Residuals:                     259   BIC:                             1298.
Df Model:                           1                                         
Covariance Type:            nonrobust                                         
==============================================================================
                 coef    std err          t      P&gt;|t|      [0.025      0.975]
------------------------------------------------------------------------------
const          0.3450      0.177      1.946      0.053      -0.004       0.694
^GSPC          1.0956      0.062     17.671      0.000       0.974       1.218
==============================================================================
Omnibus:                       42.851   Durbin-Watson:                   1.927
Prob(Omnibus):                  0.000   Jarque-Bera (JB):              111.574
Skew:                           0.740   Prob(JB):                     5.92e-25
Kurtosis:                       5.841   Cond. No.                         2.86
==============================================================================

Notes:
[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.</pre><div class="input input-md"><span class="heading"><h2 id="analysis">Analysis<a href="#analysis"> ¶</a></h2></span>
<p>There is strong evidence that this regression model satisfies its assumptions, therefore conclusions drawn using statistical tests are likely to be reliable:</p>
<ol>
<li>Linear relationship
<ul>
<li>A correlation coefficient of 0.74 and the SCL plot suggest a strong linear relationship between the returns of the market and the returns of Apple.</li>
</ul>
</li>
<li>Independence of residuals
<ul>
<li>The residual time series plot shows no evidence of autocorrelation.</li>
<li>The Durbin-Watson statistic is 1.927 (very close to 2), indicating that the residuals are independent.</li>
</ul>
</li>
<li>Homoscedasticity (the residuals have constant variance at every level of x)
<ul>
<li>The fitted values vs residual plot reflects a pretty constant variance of residuals around 0 for any given value of the market's return, nearly all the residuals are within +/- 5 of 0 regardless of the predicted value.</li>
</ul>
</li>
<li>Normality (the residuals are normally distributed)
<ul>
<li>An approximate normal distribution of residuals is evident from the distribution of residuals plot</li>
</ul>
</li>
</ol>
<span class="heading"><h3 id="market-risk">Market Risk<a href="#market-risk"> ¶</a></h3></span>
<p>The p-value of the beta coefficient is essentially 0 which is strong evidence to reject the null hypothesis that the slope is 0 (i.e. reject that there is no significant relationship between the returns of the market and the returns of Apple's stock). Combined with the strong correlation coefficient, we can soundly conclude that there is a strong and significant relationship between the returns of the market and the returns of Apple's stock.</p>
<p>An R-squared value of around 0.55 suggests that the market accounts for about 55% (over half) of the variability of Apple's stock returns. This is a moderately high R-squared value, which implies that the SCL is a good estimator of Apple's <em>historical</em> returns based on the market return. Barring significant disturbances in the smartphone industry relative to the market, it might be reasonable to assume that the SCL could roughly predict returns in the near future based on an estimated return of the market. In addition, the p-value of the f-statistic is essentially 0 which is strong evidence to reject the null hypothesis that the regression model has no predictive power.</p>
<p>Given these statistics, we can conclude that the market is a very significant factor in determining the returns of Apple's stock and thereby sensitive to market risk. It can be inferred that the smartphone industry is also susceptible to market volatility using Apple as a proxy.</p>
<span class="heading"><h4 id="market-volatility---beta">Market Volatility - Beta<a href="#market-volatility---beta"> ¶</a></h4></span>
<p>The beta of Apple's stock is 1.10 which suggests that Apple is more volatile than the general market (a beta of 1). Using Apple as a proxy for the smartphone industry as a whole, we can infer that it is more volatile than the broader market. When the economy is doing well, the industry is expected to have higher returns than the general market, but during economic downturns, such as recessions, the industry is more severely impacted than the broader market. The expected return of the smartphone industry is 1.1 times the return of the market.</p>
<p>This makes sense given the nature of the smartphone industry since the demand for smartphones is sensitive to the overall condition of the economy. People don't <em>need</em> a new smartphone every year, but many may want one. A new smartphone would be considered a "discretionary" purchase, and consumers are more likely to cut back on discretionary purchases in an economic downturn. In a good economy more people can afford the luxury of a new phone.</p>
<span class="heading"><h4 id="risk-adjusted-return---alpha">Risk Adjusted Return - Alpha<a href="#risk-adjusted-return---alpha"> ¶</a></h4></span>
<p>The alpha of Apple's stock is 0.345 which suggests that Apple "beats the market" by 0.345% on average after adjusting for its level of risk. With a a p-value of 0.053 at a significance level of 5%  I'd still argue that it would be reasonable to reject the null hypothesis that the alpha coefficient is equal to 0 (that the stock neither beats nor under-performs the market). Thus, Apple is expected to beat the market on average given its level of risk and is underpriced as there are above-average returns that are not being captured by its level of risk. Using Apple as a proxy for the smartphone industry as a whole, we can infer that the industry is expected to slightly outperform the market on a risk-adjusted basis, if at all.</p>
<p>However, this alpha is relatively small, so Apple's return could be sufficiently explained by beta alone, so Apple's returns (and the return of the smartphone industry) is very dependent on the performance of the broader market.</p>
<span class="heading"><h2 id="summary">Summary<a href="#summary"> ¶</a></h2></span>
<p>The smartphone industry, and by extension the success of the new project, is likely to be very dependent on the conditions of the overall economy. The returns of the project are expected to be inline with the overall market return adjusted for the smartphone industry's risk (measured with a beta value of 1.10). Therefore, if the economy is strong, launching a new phone is likely to have high demand and yield higher returns than the overall market, a positive outcome for the company. However, if the economy experiences a significant downturn, the new project may fail to turn a profit.</p>
<p>If the economy is anticipated to be favorable, the firm should definitely proceed with the project. If the economy is predicted to stagnate or have a slight downturn the firm should weigh the risks and rewards of the project to decide whether or not to proceed.</p></div><style lang="scss">/* Do Not Remove  */
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
}

/* Table formatting */
table {
  margin-left: 0;
  margin-bottom: 10px 0;
}

th {
  text-align: right;
  border: 0;
}

td {
  text-align: right;
  border: 0;
}</style>`;return y.$$set=k=>{"img_path_prefix"in k&&i(2,m=k.img_path_prefix),"img_alt_text"in k&&i(3,r=k.img_alt_text)},[l,b,m,r]}class $s extends Es{constructor(n){super(),Ns(this,n,Vs,Hs,Fs,{img_path_prefix:2,img_alt_text:3})}}function Ws(y){let n;return{c(){n=v("Jupyter2Svelte")},l(i){n=w(i,"Jupyter2Svelte")},m(i,m){c(i,n,m)},d(i){i&&a(n)}}}function Xs(y){let n,i,m,r,l,b,k,_,x,V,ts,P,fs,es,L,gs,ps,O,ys,os,T,bs,$,I,z,cs,W,j,ls,X,D,B,is,Y,G,rs,J,M,q,us,U,E,ks,K,Q,Z,N,R,ds,A,hs,ss,F,C,as;return A=new qs({props:{href:"https://daneski13.github.io/projects/jupyter2svelte",$$slots:{default:[Ws]},$$scope:{ctx:y}}}),C=new $s({props:{img_path_prefix:Ys,img_alt_text:y[0]}}),{c(){n=p("p"),i=p("strong"),m=v("Technologies:"),r=d(),l=p("p"),b=p("img"),_=d(),x=p("img"),ts=d(),P=p("img"),es=d(),L=p("img"),ps=d(),O=p("img"),os=d(),T=p("img"),$=d(),I=p("p"),z=p("strong"),cs=v("Data Manipulation Library:"),W=d(),j=p("p"),ls=v("Pandas"),X=d(),D=p("p"),B=p("strong"),is=v("Data Visualization Libraries:"),Y=d(),G=p("p"),rs=v("Seaborn, Matplotlib"),J=d(),M=p("p"),q=p("strong"),us=v("Modeling Library:"),U=d(),E=p("p"),ks=v("Statsmodels"),K=d(),Q=p("hr"),Z=d(),N=p("p"),R=p("strong"),ds=v("Below is the Jupyter Notebook for this project, generated with "),Ts(A.$$.fragment),hs=v(":"),ss=d(),F=p("section"),Ts(C.$$.fragment),this.h()},l(s){n=o(s,"P",{});var t=u(n);i=o(t,"STRONG",{});var H=u(i);m=w(H,"Technologies:"),H.forEach(a),t.forEach(a),r=h(s),l=o(s,"P",{});var g=u(l);b=o(g,"IMG",{src:!0,alt:!0}),_=h(g),x=o(g,"IMG",{src:!0,alt:!0}),ts=h(g),P=o(g,"IMG",{src:!0,alt:!0}),es=h(g),L=o(g,"IMG",{src:!0,alt:!0}),ps=h(g),O=o(g,"IMG",{src:!0,alt:!0}),os=h(g),T=o(g,"IMG",{src:!0,alt:!0}),g.forEach(a),$=h(s),I=o(s,"P",{});var vs=u(I);z=o(vs,"STRONG",{});var ws=u(z);cs=w(ws,"Data Manipulation Library:"),ws.forEach(a),vs.forEach(a),W=h(s),j=o(s,"P",{});var _s=u(j);ls=w(_s,"Pandas"),_s.forEach(a),X=h(s),D=o(s,"P",{});var xs=u(D);B=o(xs,"STRONG",{});var As=u(B);is=w(As,"Data Visualization Libraries:"),As.forEach(a),xs.forEach(a),Y=h(s),G=o(s,"P",{});var Rs=u(G);rs=w(Rs,"Seaborn, Matplotlib"),Rs.forEach(a),J=h(s),M=o(s,"P",{});var Cs=u(M);q=o(Cs,"STRONG",{});var Ss=u(q);us=w(Ss,"Modeling Library:"),Ss.forEach(a),Cs.forEach(a),U=h(s),E=o(s,"P",{});var Ps=u(E);ks=w(Ps,"Statsmodels"),Ps.forEach(a),K=h(s),Q=o(s,"HR",{}),Z=h(s),N=o(s,"P",{});var Ls=u(N);R=o(Ls,"STRONG",{});var ns=u(R);ds=w(ns,"Below is the Jupyter Notebook for this project, generated with "),Is(A.$$.fragment,ns),hs=w(ns,":"),ns.forEach(a),Ls.forEach(a),ss=h(s),F=o(s,"SECTION",{});var Os=u(F);Is(C.$$.fragment,Os),Os.forEach(a),this.h()},h(){S(b.src,k="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54")||f(b,"src",k),f(b,"alt","Python"),S(x.src,V="https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white")||f(x,"src",V),f(x,"alt","Jupyter Lab/Notebook"),S(P.src,fs="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white")||f(P,"src",fs),f(P,"alt","Anaconda"),S(L.src,gs="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white")||f(L,"src",gs),f(L,"alt","GitHub"),S(O.src,ys="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white")||f(O,"src",ys),f(O,"alt","Git"),S(T.src,bs="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white")||f(T,"src",bs),f(T,"alt","Visual Studio Code")},m(s,t){c(s,n,t),e(n,i),e(i,m),c(s,r,t),c(s,l,t),e(l,b),e(l,_),e(l,x),e(l,ts),e(l,P),e(l,es),e(l,L),e(l,ps),e(l,O),e(l,os),e(l,T),c(s,$,t),c(s,I,t),e(I,z),e(z,cs),c(s,W,t),c(s,j,t),e(j,ls),c(s,X,t),c(s,D,t),e(D,B),e(B,is),c(s,Y,t),c(s,G,t),e(G,rs),c(s,J,t),c(s,M,t),e(M,q),e(q,us),c(s,U,t),c(s,E,t),e(E,ks),c(s,K,t),c(s,Q,t),c(s,Z,t),c(s,N,t),e(N,R),e(R,ds),js(A,R,null),e(R,hs),c(s,ss,t),c(s,F,t),js(C,F,null),as=!0},p(s,[t]){const H={};t&2&&(H.$$scope={dirty:t,ctx:s}),A.$set(H)},i(s){as||(Ds(A.$$.fragment,s),Ds(C.$$.fragment,s),as=!0)},o(s){Gs(A.$$.fragment,s),Gs(C.$$.fragment,s),as=!1},d(s){s&&a(n),s&&a(r),s&&a(l),s&&a($),s&&a(I),s&&a(W),s&&a(j),s&&a(X),s&&a(D),s&&a(Y),s&&a(G),s&&a(J),s&&a(M),s&&a(U),s&&a(E),s&&a(K),s&&a(Q),s&&a(Z),s&&a(N),Ms(A),s&&a(ss),s&&a(F),Ms(C)}}}const Qs={title:"Apple Stock Regression Analysis",date:"2023-04-14",updated:"2023-05-07",card:"/projects/aapl-stock-regression-analysis/card.webp",cover:"/projects/aapl-stock-regression-analysis/Output_10_1.webp",description:"Regression Analysis of Apple Inc. (AAPL) stock returns from 2017 to 2022",code:"https://github.com/Daneski13/AAPL-Stock-Regression-Analysis"},Ys="/projects/aapl-stock-regression-analysis/";function Js(y){return[["Residual Plots","Apple Security Characteristics Line"]]}class Zs extends Es{constructor(n){super(),Ns(this,n,Js,Xs,Fs,{})}}export{Zs as default,Qs as metadata};
