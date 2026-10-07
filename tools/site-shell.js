// Shared page shell for the static SEO site. Evaluated by build scripts (not loaded by pages).
var SITE='https://hotelmudaliyar.com';
var PHONE='0452 253 0303', TEL='+914522530303', PHONE_INTL='+91-452-253-0303';
var SOCIAL={instagram:'https://www.instagram.com/hotelmudaliyar/',facebook:'https://www.facebook.com/hotelmudaliyar/',google:'https://share.google/laxE1Ho7NfmON9Kvt'};
var GA='G-4DQX2FD092';
var esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
var slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
var ADDRESS={"@type":"PostalAddress",streetAddress:"No. 1-A, Pandi Kovil Ring Road, Melamadai, Near PC Perungudi",addressLocality:"Madurai",addressRegion:"Tamil Nadu",postalCode:"625020",addressCountry:"IN"};
var DAYS=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var HOURS=[["07:00","11:30"],["12:00","15:30"],["18:00","23:00"]].map(([o,c])=>({"@type":"OpeningHoursSpecification",dayOfWeek:DAYS,opens:o,closes:c}));
var RESTAURANT_REF={"@id":SITE+"/#restaurant"};
var RESTAURANT={"@type":"Restaurant","@id":SITE+"/#restaurant",name:"Hotel Mudaliyar",alternateName:["Mudaliyar Idly Kadai","Mudaliyar Idli Kadai","முதலியார் இட்லி கடை","ஹோட்டல் முதலியார்"],description:"South Indian restaurant in Madurai. Mudaliyar Idly Kadai started in the 1960s beside the Goripalayam bus stand and is famous for its muttai idli. It moved to Melamadai in 2026.",url:SITE+"/",telephone:PHONE_INTL,image:[SITE+"/assets/photo-storefront-melamadai.jpg",SITE+"/assets/logo-full-maroon.png"],logo:SITE+"/assets/logo-emblem-maroon.png",address:ADDRESS,hasMap:SOCIAL.google,areaServed:"Madurai",servesCuisine:["South Indian","Tamil","Madurai","Chettinad","Indo-Chinese"],priceRange:"₹₹",currenciesAccepted:"INR",paymentAccepted:"Cash, UPI, Card",openingHoursSpecification:HOURS,hasMenu:SITE+"/menu/",acceptsReservations:true,foundingDate:"1960s",founder:{"@type":"Person",name:"P. Kandasamy Mudaliyar"},sameAs:[SOCIAL.instagram,SOCIAL.facebook]};
var NAV=[['/','Home'],['/menu/','Menu'],['/story/','Story'],['/journal/','Journal'],['/hall/','Hall'],['/contact/','Contact']];
function crumbsLd(trail){return {"@type":"BreadcrumbList",itemListElement:trail.map(([u,n],i)=>({"@type":"ListItem",position:i+1,name:n,item:SITE+u}))};}
function crumbsHtml(trail,R){return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${trail.map(([u,n],i)=>i===trail.length-1?`<li aria-current="page">${esc(n)}</li>`:`<li><a href="${R(u)}">${esc(n)}</a></li>`).join('')}</ol></nav>`;}
// path like '/menu/' ; returns {file, html}
function page({path,title,desc,body,ld=[],image='/assets/photo-storefront-melamadai.jpg',type='website',trail}){
  const depth=path==='/'?0:path.split('/').filter(Boolean).length;
  const pre=depth?'../'.repeat(depth):'';
  const R=u=>u.startsWith('http')?u:(u==='/'?(pre||'./'):pre+u.replace(/^\//,''));
  const graph=[...ld];if(trail)graph.push(crumbsLd(trail));
  const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${path}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#5E1524">
<meta name="geo.region" content="IN-TN"><meta name="geo.placename" content="Madurai">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Hotel Mudaliyar">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}${path}"><meta property="og:image" content="${SITE}${image}">
<meta property="og:locale" content="en_IN"><meta property="og:locale:alternate" content="ta_IN">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${SITE}${image}">
<link rel="icon" href="${R('/assets/logo-emblem-maroon.png')}">
<link rel="alternate" type="text/plain" href="${R('/llms.txt')}" title="LLM summary">
<link rel="stylesheet" href="${R('/styles.css')}"><link rel="stylesheet" href="${R('/site.css')}">
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}');
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';if(h.indexOf('tel:')===0)gtag('event','call_click');else if(h.indexOf('maps')>-1||h.indexOf('share.google')>-1)gtag('event','directions_click');});</script>
<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@graph":graph})}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="nav"><div class="wrap"><a class="brand" href="${R('/')}"><img src="${R('/assets/logo-emblem-maroon.png')}" alt="" width="40" height="40">Hotel Mudaliyar</a>
<nav aria-label="Main">${NAV.map(([u,n])=>`<a href="${R(u)}"${(u==='/'?path==='/':path.startsWith(u))?' aria-current="page"':''}>${n}</a>`).join('')}</nav><a class="call" href="tel:${TEL}">Call ${PHONE}</a></div></header>
<main id="main">
${body(R)}
</main>
<footer id="visit"><div class="wrap">
<div class="grid">
<div><h2>Visit</h2><address>Hotel Mudaliyar<br>No. 1-A, Pandi Kovil Ring Road,<br>Melamadai, Near PC Perungudi,<br>Madurai, Tamil Nadu 625020<br><a href="tel:${TEL}">${PHONE}</a></address><p><a href="${SOCIAL.google}" rel="noopener">Directions &amp; Google reviews</a></p></div>
<div><h2>Hours</h2><p style="line-height:1.8;margin:0">Breakfast 7:00–11:30 am<br>Meals 12:00–3:30 pm<br>Dinner 6:00–11:00 pm<br>Open all days</p></div>
<div><h2>Explore</h2><p style="line-height:1.8;margin:0"><a href="${R('/menu/')}">Full menu</a><br><a href="${R('/journal/')}">Journal</a><br><a href="${R('/hall/')}">Ammaiyappan Hall</a><br><a href="${R('/story/')}">Our story</a></p>
<div class="social"><a href="${SOCIAL.instagram}" rel="noopener me">Instagram</a><a href="${SOCIAL.facebook}" rel="noopener me">Facebook</a></div></div>
</div>
<div class="bot"><span>Mudaliyar Idly Kadai, Goripalayam · since the 1960s</span><span class="ta" lang="ta">ஹோட்டல் முதலியார் · முதலியார் இட்லி கடை</span></div>
</div></footer>
</body>
</html>`;
  const file=(path==='/'?'':path.replace(/^\//,''))+'index.html';
  return {file,html};
}
function phead(trail,R,eyebrow,h1,ta,lead,extra=''){return `<section class="phead"><div class="wrap">${crumbsHtml(trail,R)}<p class="eyebrow">${eyebrow}</p><h1>${h1}</h1>${ta?`<p class="ta" lang="ta" style="font-size:19px;margin:8px 0 0">${ta}</p>`:''}${lead?`<p>${lead}</p>`:''}${extra}</div></section>`;}
