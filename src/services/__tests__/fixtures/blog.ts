export default `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="no-referrer-when-downgrade">
<link rel="alternate" type="application/rss+xml" title="Danny van Kooten" href="https://dannyvankooten.com/feed.xml">
<link rel="icon" href="https://dannyvankooten.com/assets/img/favicon.png" type="image/png"><!-- Begin Jekyll SEO tag v2.6.1 -->
<title>CO2 emissions on the web | Danny van Kooten</title>
<meta name="generator" content="Jekyll v3.6.3" />
<meta property="og:title" content="CO2 emissions on the web" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="I’ve spent the last month trying to reduce the carbon footprint of the websites I have (some) control over. When talking about this with other people they often look at me blankly before asking “aren’t you taking this a little too far?”." />
<meta property="og:description" content="I’ve spent the last month trying to reduce the carbon footprint of the websites I have (some) control over. When talking about this with other people they often look at me blankly before asking “aren’t you taking this a little too far?”." />
<link rel="canonical" href="https://dannyvankooten.com/website-carbon-emissions/" />
<meta property="og:url" content="https://dannyvankooten.com/website-carbon-emissions/" />
<meta property="og:site_name" content="Danny van Kooten" />
<meta property="og:image" content="https://dannyvankooten.com/media/2020/co2-emissions.jpg" />
<meta property="og:type" content="article" />
<meta property="article:published_time" content="2020-02-04T00:00:00+01:00" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:image" content="https://dannyvankooten.com/media/2020/co2-emissions.jpg" />
<meta property="twitter:title" content="CO2 emissions on the web" />
<meta name="twitter:site" content="@dannyvankooten" />
<script type="application/ld+json">
{"description":"I’ve spent the last month trying to reduce the carbon footprint of the websites I have (some) control over. When talking about this with other people they often look at me blankly before asking “aren’t you taking this a little too far?”.","@type":"BlogPosting","url":"https://dannyvankooten.com/website-carbon-emissions/","headline":"CO2 emissions on the web","dateModified":"2020-02-04T00:00:00+01:00","datePublished":"2020-02-04T00:00:00+01:00","image":"https://dannyvankooten.com/media/2020/co2-emissions.jpg","mainEntityOfPage":{"@type":"WebPage","@id":"https://dannyvankooten.com/website-carbon-emissions/"},"@context":"https://schema.org"}</script>
<!-- End Jekyll SEO tag -->
<style>body{background:#fff;color:#111;font:18px Helvetica,Arial,sans-serif;margin:0;overflow-y:scroll;}
a{color:#A00} 
a:hover,a:focus{color:#111;} 
nav{display:block;background:#A00;margin-bottom:2em; padding:0.5em 0;}
nav > div {margin: 0 auto;}
nav h1,nav h3,nav a{font-size: 16px; display:inline-block; margin:0 0.5em 0 0; color: white; text-decoration: none;}
nav a:hover,nav a:focus{color:white;text-decoration: underline}
img{max-width:100%;height:auto;}
main{line-height:1.6;}
h1{margin:0;}
h2,h3,h4,h5{margin:2em 0 0;}
p,blockquote,ul,table,pre,hr{margin:1em 0;}
ul{padding-left:1em;}
blockquote{background:#F0FBFF;padding:0 1em;border:1px solid #D7EDF5;}
hr{border:1px dotted;margin:2em 0;}
pre code{background:#fffaf0;color:#111;border:1px solid #fff1d6;display:block;overflow-x:auto;padding:4px;}
table{border-collapse:collapse;}
th,td{text-align:left;padding:2px 4px;}
footer{border-top:1px dotted;margin:2em 0;padding-top:2em;font-size: 16px;} 
footer svg{vertical-align:middle;}
small,small a{color:#666;}
.c{max-width:680px;margin-left:auto;margin-right:auto;padding-left:0.7em;padding-right:0.7em;}
@media(max-width:400px) {
	nav h1, nav h3{ display: block; margin-bottom:0.5em; }
}</style>
</head>
<body>
  <nav>
    <div class="c"><h3><a href="https://dannyvankooten.com/" rel="home">Danny van Kooten</a></h3> <a href="https://dannyvankooten.com/about/">About me</a> <a href="https://dannyvankooten.com/blog/">Blog</a> <a href="https://dannyvankooten.com/contact/">Contact</a>
    </div>
  </nav>
  <main class="c"><article class="h-entry">
  <div>
    <h1 class="p-name">CO2 emissions on the web</h1>
    <small>
      Published <time datetime="2020-02-04T00:00:00+01:00" class="dt-published">Feb 4, 2020</time> on <a href="https://dannyvankooten.com/blog" rel="author" class="p-author h-card">Danny van Kooten's blog</a> &mdash; <a href="https://dannyvankooten.com/website-carbon-emissions/" class="u-url">Permalink</a>
    </small>
  </div>
  <div class="e-content">
    <p>I’ve spent the last month trying to reduce the carbon footprint of the websites I have (some) control over. When talking about this with other people they often look at me blankly before asking “aren’t you taking this a little too far?”.</p>

<p>The simple answer is no. In fact, it is probably the most effective use of my time when it comes to reducing carbon dioxide emissions.</p>

<p>Just last week I reduced global emissions by an estimated 59.000 kg CO<sub>2</sub> per month by removing a 20 kB JavaScript dependency in <a href="https://www.mc4wp.com/">Mailchimp for WordPress</a>. There’s no way I can have that kind of effect in other areas of my life.</p>

<h3 id="co2-emissions-from-distributed-code">CO2 emissions from distributed code</h3>

<p>All of <a href="https://dannyvankooten.com/wordpress-plugins/">my WordPress plugins</a> combined run on well over 2 million different websites, each website receiving who knows how many visitors.</p>

<p>At an average energy expenditure of <a href="#f1">0,5 kWh per GB <sup>1</sup></a> of data transfer this means that every kB equals <code class="highlighter-rouge">0,5 kWh / 1.000.000 kB * 2.000.000 websites = 1 kWh</code> if each of these websites received exactly 1 visitor.</p>

<p>Let’s assume the average website receives about 10.000 unique visitors per month and serves files from cache for returning visitors. The total amount of energy saved by shaving off a single kilobyte is then <code class="highlighter-rouge">1 kWh * 10.000 visitors = 10.000 kWh</code>.</p>

<p>10.000 kWh of energy produced by the <a href="https://www.eea.europa.eu/data-and-maps/indicators/overview-of-the-electricity-production-2/assessment-4">current European electricity grid</a> equals about <code class="highlighter-rouge">10.000 * 0,295 = 2950 kg of CO2</code>.</p>

<blockquote>
  <p><strong>Shaving off a single kilobyte in a file that is being loaded on 2 million websites reduces CO<sub>2</sub> emissions by an estimated 2950 kg per month.</strong></p>
</blockquote>

<p>To put this into perspective, that is the same amount of CO<sub>2</sub> saved each month as:</p>

<ul>
  <li>Driving my Toyota Yaris for 18.670 kilometers. (<a href="https://car-emissions.com/cars/index/toyota%20yaris%201.3%20vvt-i%20tr/">158 g CO<sub>2</sub> per km</a>)</li>
  <li>5 flights from Amsterdam to New York. (<a href="https://www.costtotravel.com/flight/from-new-york-to-amsterdam">679 kg CO<sub>2</sub> per flight</a>)</li>
  <li>Eating 118 kg of beef (<a href="https://eprints.lancs.ac.uk/79432/4/1_s2.0_S0959652616303584_main.pdf">25 kg CO<sub>2</sub> per kg of beef</a>)</li>
</ul>

<p>I already work from home, am a vegetarian and didn’t take any flights in the last 3 years so it seems I am stuck trying to make the web more efficient.</p>

<h3 id="what-can-we-do">What can we do?</h3>

<p>According to <a href="https://httparchive.org/reports/page-weight?start=earliest&amp;end=latest">httparchive.org</a>, the average website on desktop is about 4 times as large as in 2010. On mobile, where data transfer is way more expensive in terms of energy usage, the numbers look even worse: from 200 kB up to a whopping 1,9 MB!</p>

<p>As web developers we have a responsibility to stop this madness. Did websites really get 4 times as good? Is this <a href="https://motherfuckingwebsite.com/">motherfuckingwebsite.com</a> clocking in at 5 kB in total really that bad in comparison? I don’t think so.</p>

<p>Whenever you are adding to a website, ask yourself: is this necessary? If not, consider leaving it out.</p>

<p>Your content site probably <a href="https://github.com/you-dont-need/You-Dont-Need-Javascript">doesn’t need JavaScript</a>. You probably <a href="https://hacks.mozilla.org/2016/04/you-might-not-need-a-css-framework/">don’t need a CSS framework</a>. You probably don’t need a custom font. Use <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">responsive images</a>. Extend your <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching">HTTP cache</a> lifetimes. Use a <a href="https://www.staticgen.com/">static site generator</a> or <a href="https://wp2static.com/">wp2static.com</a> instead of dynamically generating each page on the fly, despite never changing. Consider ditching that third-party analytics service that you never look at anyway, especially if they also happen to sell ads. Run your website through <a href="https://www.websitecarbon.com/">websitecarbon.com</a>. Choose a <a href="https://www.thegreenwebfoundation.org/">green web host</a>.</p>

<p>I’m sorry if that turned into a bit of a rambling, but I hope you see where I am going with this.</p>

<p>Personally I constrained myself to not use more than 1 kB of CSS for the website you are reading this on. And I really liked making that work, it <a href="https://www.inc.com/thomas-oppong/for-a-more-creative-brain-embrace-constraints.html">sparked creativity</a>.</p>

<p>Let’s do our share as web developers and stop bloating the web.</p>

<hr />

<p><small>
 Energy costs of data transfer varies a lot depending on the type of network that is used. The range seems to be from 0,08 kWh per GB for fixed broadband connections to 37 kWh per GB for 2G networks.</small></p>

<p><small>I initially went with a global estimate of 2,9 kWh per GB in this post (the average cost per GB for 3G networks), but later changed it to 0,50 kWh per GB as I believe that is a better estimate for 2020 <sup><a href="#f2">2</a></sup>. It’s hard to come up with a good estimate that works globally, but I didn’t mean for this post to be about exact numbers anyway.</small></p>

<p><small>
The most important thing I attempted to convey is that the choices we make in developing for the web have consequences that really add up at scale.
</small></p>

<hr />

<p><small><strong>References</strong></small></p>

<p><small>
</small></p>

<p><small><sup id="f1">1</sup> Pihkola, H., Hongisto, M., Apilo, O., &amp; Lasanen, M. (2018). Evaluating the energy consumption of mobile data transfer-from technology development to consumer behaviour and life cycle thinking. <a href="https://doi.org/10.3390/su10072494">https://doi.org/10.3390/su10072494</a>
</small></p>

<p><small>
	<sup id="f2">2</sup>
	Aslan, Joshua &amp; Mayers, Kieren &amp; Koomey, Jonathan &amp; France, Chris. (2017). Electricity Intensity of Internet Data Transmission: Untangling the Estimates: Electricity Intensity of Data Transmission. Journal of Industrial Ecology. <a href="https://doi.org/10.1111/jiec.12630">https://doi.org/10.1111/jiec.12630</a> 
</small></p>

  </div>
</article>


</main>
  <div class="c">
    <footer>
      <small>Find me on
        <svg aria-hidden="true" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16" width="16"><path fill="#828282" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"/></svg> <a href="https://github.com/dannyvankooten/" rel="me nofollow author">GitHub</a>, 
        <svg aria-hidden="true" data-icon="mastodon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 417 512" height="16" width="16"><path fill="#828282" d="M417.8 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.5-28.4-290.4 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54-.6-4.4-.9-9-.9-13.9 85.6 20.9 158.6 9.1 178.7 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6V190.1c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H75.1c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"></path></svg>
 <a rel="me nofollow author" href="https://mastodon.dvk.co/@danny">Mastodon</a> 
        or
        <svg aria-hidden="true" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16" width="16"><path fill="#828282" d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"/></svg>
 <a href="https://twitter.com/dannyvankooten/" rel="me nofollow author">Twitter</a>.
      </small>
      <br />
      <br />
      <small>All information on this blog is hereby released into the public domain, with no rights reserved.</small>
    </footer>
  </div>
</body>
</html>`;
