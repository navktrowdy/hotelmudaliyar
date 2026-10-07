// Build script body: run via run_script → eval(shell + articles + this). Generates every static page + sitemap + llms.txt.
var menu=JSON.parse(MENU_JSON);
var count=menu.sections.reduce((a,s)=>a+s.items.length,0);
var dietLabel={veg:'Vegetarian',nonveg:'Non-vegetarian',egg:'Contains egg'};
var dietColor={veg:'var(--veg)',nonveg:'var(--nonveg)',egg:'var(--gold-600)'};
var dd=d=>`<span class="dd" style="border-color:${dietColor[d]}" title="${dietLabel[d]}"><i style="background:${dietColor[d]}"></i></span>`;
var legend=`<div class="legend"><span>${dd('veg')}Vegetarian</span><span>${dd('egg')}Egg</span><span>${dd('nonveg')}Non-vegetarian</span><span>Prices in ₹ · taxes as applicable</span></div>`;
var SIG=[['Muttai Idli','முட்டை இட்லி',130,'egg','Idlis chopped and fried on the tawa with egg and masala. The Goripalayam original.','muttai-idli-madurai'],['Madurai Spl. Curry Dosa','மதுரை கறி தோசை',300,'nonveg','Dosa with chicken, mutton, prawn, boti or liver curry cooked on top.','madurai-curry-dosa'],['Kothu Parotta','கொத்து பரோட்டா',130,'veg','Parotta chopped on the tawa with salna, plus egg, chicken or mutton.','kothu-parotta-kizhi-parotta'],['Seeraga Samba Biryani','சீரக சம்பா பிரியாணி',270,'nonveg','Short-grain seeraga samba rice with chicken or mutton.','seeraga-samba-biryani']];
var sigCards=R=>`<div class="grid">${SIG.map(([n,t,p,d,b,s])=>`<a class="card" href="${R('/journal/'+s+'/')}"><span class="tag" style="background:${dietColor[d]}">${dietLabel[d]}</span><h3>${n}</h3><p class="ta" lang="ta" style="margin-bottom:8px;color:var(--gold-600)">${t}</p><p>${b}</p><p class="price">from ₹${p}</p><span class="more">Read more →</span></a>`).join('')}</div>`;
var HOME_FAQ=[
 ['Where is Hotel Mudaliyar in Madurai?','Hotel Mudaliyar is at No. 1-A, Pandi Kovil Ring Road, Melamadai, near PC Perungudi, Madurai 625020. Phone: '+PHONE+'. It moved here in February 2026 from its original site beside the Goripalayam bus stand.'],
 ['Is this the same Mudaliyar Idly Kadai from Goripalayam?','Yes. Mudaliyar Idly Kadai (முதலியார் இட்லி கடை) was started in the 1960s by Late Thiru P. Kandasamy Mudaliyar next to the Goripalayam bus stand. The Goripalayam premises were acquired for the bridge construction, and the restaurant now runs from Melamadai under Mr K. Tamilselvan, with the same phone number.'],
 ['What is Hotel Mudaliyar famous for?','Its muttai idli: idlis chopped and fried with egg and masala, which the Tamil press has written about. It is also known for Madurai special curry dosa, kothu parotta and seeraga samba biryani.'],
 ['Was Mudaliyar Idly Kadai shown in a film?','Yes. The kadai appears in the Tamil film Kadhal (2004), starring Bharath and Sandhya. It was directed by Balaji Sakthivel, with music by Joshua Sridhar.'],
 ['What are the opening hours?','Breakfast 7:00–11:30 am, meals 12:00–3:30 pm and dinner 6:00–11:00 pm, all days.'],
 ['Is there vegetarian food?','Yes. The menu has idly, dosa, uthappam, idiyappam, parotta, chapathi, veg meals, fried rice and noodles. Vegetarian items are marked with a green symbol.'],
 ['Can I order takeaway or delivery?','Takeaway is available at the counter. Delivery is on Swiggy and Zomato.'],
 ['Is there a hall for functions?','Yes. Ammaiyappan Hall upstairs is air-conditioned and used for receptions, betrothal lunches, birthdays and company lunches, with catering from the restaurant kitchen. Call '+PHONE+' to book.']];
var faqLd=(id,f)=>({"@type":"FAQPage","@id":SITE+id,mainEntity:f.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))});
var faqHtml=f=>f.map(([q,a],i)=>`<details${i<2?' open':''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
var journalCards=(R,list)=>`<div class="grid">${list.map(a=>`<a class="card" href="${R('/journal/'+a.slug+'/')}"><span class="tag">${a.tag}</span><h3>${a.h1}</h3><p>${a.lead}</p><span class="more">Read →</span></a>`).join('')}</div>`;
var STORY=[['1960s','An evening stall at Goripalayam','Late Thiru P. Kandasamy Mudaliyar opened Mudaliyar Idly Kadai right next to the Goripalayam bus stand, Madurai 625 002. It opened in the evening and stayed open late.'],['The regulars','GH, American College, the Court','Doctors and attendants from the Government Hospital, students from American College, lawyers and clerks from the Court. The neighbourhood ate here after work.'],['Till 3 am','Madurai’s late-night idly','The kadai served until 3 in the morning. Film stars and public figures came to eat or picked up takeaway.'],['2004','On screen in <cite>Kadhal</cite>','<span lang="ta">முதலியார் இட்லி கடை</span> appears in <cite>Kadhal</cite> (2004), starring Bharath and Sandhya. Directed by Balaji Sakthivel, music by Joshua Sridhar.'],['In the press','The muttai idli, written up','A Tamil newspaper column wrote up the muttai idli when a set cost ₹20. The kadai was also covered by Kumudam, Vasantham TV Singapore and Kairali TV.'],['2026','Hotel Mudaliyar, Melamadai','The Goripalayam premises were acquired for the bridge construction. Mr K. Tamilselvan reopened the restaurant on Pandi Kovil Ring Road on 22 February 2026.']];
var storyCards=`<div class="grid">${STORY.map(([y,t,b])=>`<article class="card"><span class="tag">${y}</span><h3>${t}</h3><p>${b}</p></article>`).join('')}</div>`;
var press=R=>`<div class="press" aria-label="Press and film">
<figure><div class="ph"><img src="${R('/assets/press-goripalayam-poster.png')}" alt="Mudaliyar Idly Kadai Goripalayam menu board with Vasantham TV, Kairali and Kumudam features" loading="lazy"></div><figcaption>Goripalayam menu board, with press and TV features</figcaption></figure>
<figure><div class="ph"><img src="${R('/assets/film-kadhal-2004.png')}" alt="Mudaliyar Idly Kadai signboard in the Tamil film Kadhal (2004)" loading="lazy" style="object-position:center"></div><figcaption>The kadai in <cite>Kadhal</cite> (2004)</figcaption></figure>
<figure><div class="ph"><img src="${R('/assets/press-muttai-idli-column.png')}" alt="Tamil newspaper column on the muttai idli at Mudaliyar Idly Kadai, Goripalayam" loading="lazy"></div><figcaption>Newspaper column on the muttai idli</figcaption></figure></div>`;
var sh=(eb,h2,ta,id)=>`<div class="sh"><p class="eyebrow" style="color:var(--gold-600)">${eb}</p><h2 id="${id}">${h2}</h2>${ta?`<span class="ta" lang="ta">${ta}</span>`:''}</div>`;
var menuLd={"@type":"Menu","@id":SITE+"/menu/#menu",name:"Hotel Mudaliyar menu",url:SITE+"/menu/",inLanguage:"en",hasMenuSection:menu.sections.map(s=>({"@type":"MenuSection",name:s.title,description:s.meta,hasMenuItem:s.items.map(i=>{const o={"@type":"MenuItem",name:i.name+(i.unit?' '+i.unit:'')};if(i.price!=null)o.offers={"@type":"Offer",price:String(i.price),priceCurrency:"INR"};if(i.diet==='veg')o.suitableForDiet="https://schema.org/VegetarianDiet";return o;})}))};
var pages=[];

// HOME
pages.push(page({path:'/',title:'Hotel Mudaliyar, Melamadai, Madurai | Mudaliyar Idly Kadai since the 1960s',
desc:`Hotel Mudaliyar (Mudaliyar Idly Kadai, முதலியார் இட்லி கடை) began in the 1960s beside the Goripalayam bus stand and is home of the muttai idli. Now on Pandi Kovil Ring Road, Melamadai, Madurai. Call ${PHONE}.`,
ld:[RESTAURANT,faqLd('/#faq',HOME_FAQ),{"@type":"WebSite","@id":SITE+"/#website",url:SITE+"/",name:"Hotel Mudaliyar",inLanguage:["en","ta"],publisher:RESTAURANT_REF}],
body:R=>`<section class="hero" aria-labelledby="h1"><img src="${R('/assets/photo-storefront-melamadai.jpg')}" alt="" fetchpriority="high">
<div class="wrap"><div><p class="eyebrow">Melamadai, Madurai · since the 1960s</p>
<h1 id="h1">Hotel Mudaliyar: Madurai’s Mudaliyar Idly Kadai, now in Melamadai</h1>
<p class="ta" lang="ta">ஹோட்டல் முதலியார் · முதலியார் இட்லி கடை · மேலமடை, மதுரை</p>
<p class="lead">Started in the 1960s by Late Thiru P. Kandasamy Mudaliyar as an evening stall beside the Goripalayam bus stand. It stayed open till 3 am for the Government Hospital, American College and the Court, and it is the home of the muttai idli. Since 22 February 2026 it has run from Pandi Kovil Ring Road.</p>
<div class="cta"><a class="btn gold" href="${R('/menu/')}">See the full menu</a><a class="btn line" href="tel:${TEL}">Call ${PHONE}</a><a class="btn line" href="${SOCIAL.google}" rel="noopener">Directions</a></div>
</div><img class="emb" src="${R('/assets/logo-emblem-maroon.png')}" alt="Hotel Mudaliyar emblem" width="240" height="240"></div></section>
<section class="blk" id="signatures" aria-labelledby="sig-h"><div class="wrap">${sh('Signature dishes','What Madurai comes back for','சிறப்பு உணவுகள்','sig-h')}${sigCards(R)}</div></section>
<section class="blk" id="menu" aria-labelledby="menu-h" style="padding-top:clamp(40px,6vw,72px)"><div class="wrap">${sh(count+' dishes · breakfast to late dinner','The menu','உணவுப் பட்டியல்','menu-h')}
<nav class="toc" aria-label="Menu sections">${menu.sections.map(s=>`<a href="${R('/menu/')}#${slug(s.title)}">${esc(s.title)}</a>`).join('')}</nav>
<a class="btn gold" href="${R('/menu/')}">Full menu with prices</a></div></section>
<section class="blk" id="story" aria-labelledby="story-h"><div class="wrap">${sh('Our story','The idly kadai by the Goripalayam bus stand','எங்கள் கதை','story-h')}${storyCards}${press(R)}<p><a class="more" href="${R('/story/')}">The full story →</a></p></div></section>
<section class="blk" id="hall" aria-labelledby="hall-h"><div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px">
<div><p class="eyebrow">Upstairs at Melamadai</p><h2 id="hall-h" style="font-size:clamp(28px,3.6vw,42px)">Ammaiyappan Hall (A/C)</h2><span class="ta" lang="ta" style="display:block;margin-top:6px">அம்மையப்பன் ஹால்</span>
<p style="line-height:1.75;font-size:17px;max-width:56ch">An air-conditioned function hall on the first floor for receptions, betrothal lunches, birthdays and company lunches. Food comes from the restaurant kitchen downstairs.</p>
<div class="cta"><a class="btn gold" href="${R('/hall/')}">About the hall</a><a class="btn line" href="tel:${TEL}">Call to book</a></div></div>
<ul style="align-self:center;line-height:2"><li>Fully air-conditioned</li><li>Lunch and dinner functions</li><li>Catering from the restaurant kitchen</li><li>Bookings by phone or at the counter</li></ul></div></section>
<section class="blk" aria-labelledby="j-h"><div class="wrap">${sh('Journal','From the kitchen and the archive','','j-h')}${journalCards(R,ARTICLES.slice(0,3))}<p><a class="more" href="${R('/journal/')}">All journal posts →</a></p></div></section>
<section class="blk faq" id="faq" aria-labelledby="faq-h" style="padding-top:0"><div class="wrap">${sh('Questions','Frequently asked questions','','faq-h')}${faqHtml(HOME_FAQ)}</div></section>`}));

// MENU
var mTrail=[['/','Home'],['/menu/','Menu']];
pages.push(page({path:'/menu/',trail:mTrail,title:`Hotel Mudaliyar Menu & Prices, Melamadai, Madurai | ${count} dishes`,
desc:`Full Hotel Mudaliyar menu with prices: muttai idli ₹130, curry dosa, kothu parotta, seeraga samba biryani, Chettinad starters, meals, fried rice and noodles. Melamadai, Madurai.`,
ld:[RESTAURANT,menuLd],
body:R=>phead(mTrail,R,`${count} dishes · prices in ₹`,'Hotel Mudaliyar menu','உணவுப் பட்டியல்','Idly, dosa, parotta, biryani and Chettinad starters, served from 7 am to 11 pm. Vegetarian, egg and non-vegetarian dishes are marked.')+
`<section class="blk" style="background:var(--cream-100)"><div class="wrap">${legend}
<nav class="toc" aria-label="Menu sections" style="margin-top:20px">${menu.sections.map(s=>`<a href="#${slug(s.title)}">${esc(s.title)}</a>`).join('')}</nav>
<div class="menu">${menu.sections.map(s=>`<section class="ms" id="${slug(s.title)}" aria-labelledby="${slug(s.title)}-h"><h2 id="${slug(s.title)}-h" style="font-size:24px;color:var(--text-heading)">${esc(s.title)} <span class="ta" lang="ta" style="font-size:16px;color:var(--gold-600)">${s.tamilTitle}</span></h2><p class="meta">${esc(s.meta)}</p><ul>${s.items.map(i=>`<li>${dd(i.diet)}<span class="n">${esc(i.name)}${i.unit?` <span class="u">${esc(i.unit)}</span>`:''}</span>${i.price!=null?`<span class="p">₹${i.price}</span>`:''}</li>`).join('')}</ul></section>`).join('')}</div>
<p><a href="${R('/ui_kits/menu_card/index-print.html')}">Printable A4 menu card</a> · Delivery on Swiggy &amp; Zomato · <a href="tel:${TEL}">${PHONE}</a></p></div></section>`}));

// STORY
var sTrail=[['/','Home'],['/story/','Story']];
pages.push(page({path:'/story/',trail:sTrail,type:'article',image:'/assets/press-goripalayam-poster.png',title:'Our Story: Mudaliyar Idly Kadai, Goripalayam to Melamadai | Hotel Mudaliyar',
desc:'Mudaliyar Idly Kadai began in the 1960s as an evening stall beside the Goripalayam bus stand, Madurai. It was open till 3 am, appeared in the film Kadhal (2004), and moved to Melamadai in 2026.',
ld:[{"@type":"AboutPage",name:"Our story",url:SITE+"/story/",about:RESTAURANT_REF},RESTAURANT],
body:R=>phead(sTrail,R,'Since the 1960s','The idly kadai by the Goripalayam bus stand','எங்கள் கதை','From an evening stall that fed Madurai till 3 am to a three-floor restaurant in Melamadai.')+
`<section class="blk"><div class="wrap">${storyCards}${press(R)}<p><a class="more" href="${R('/journal/goripalayam-till-3am/')}">Read: Till 3 am at Goripalayam →</a></p></div></section>`}));

// HALL
var hTrail=[['/','Home'],['/hall/','Ammaiyappan Hall']];
var HALL_FAQ=[['Is Ammaiyappan Hall air-conditioned?','Yes, the hall is fully air-conditioned.'],['Where is the hall?','Upstairs in the Hotel Mudaliyar building, No. 1-A, Pandi Kovil Ring Road, Melamadai, Madurai 625020.'],['Who does the catering?','The Hotel Mudaliyar kitchen downstairs: meals, biryani, Chettinad starters, idly, dosa and parotta.'],['How do I book?','Call '+PHONE+' or ask at the restaurant counter. Have your date, slot, approximate guest count and veg/non-veg preference ready.']];
pages.push(page({path:'/hall/',trail:hTrail,title:'Ammaiyappan Hall: A/C Function Hall in Melamadai, Madurai | Hotel Mudaliyar',
desc:`Ammaiyappan Hall is an air-conditioned function hall above Hotel Mudaliyar, Melamadai, Madurai, for receptions, betrothals, birthdays and company lunches, with catering from the restaurant kitchen. Call ${PHONE}.`,
ld:[{"@type":["EventVenue","Place"],"@id":SITE+"/hall/#venue",name:"Ammaiyappan Hall",alternateName:"அம்மையப்பன் ஹால்",url:SITE+"/hall/",telephone:PHONE_INTL,address:ADDRESS,containedInPlace:RESTAURANT_REF,amenityFeature:[{"@type":"LocationFeatureSpecification",name:"Air-conditioned",value:true},{"@type":"LocationFeatureSpecification",name:"In-house catering",value:true}]},faqLd('/hall/#faq',HALL_FAQ)],
body:R=>phead(hTrail,R,'Upstairs at Melamadai','Ammaiyappan Hall','அம்மையப்பன் ஹால்','An air-conditioned function hall above Hotel Mudaliyar, with food from the Mudaliyar kitchen.',`<div class="cta"><a class="btn gold" href="tel:${TEL}">Call ${PHONE} to book</a></div>`)+
`<section class="blk"><div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px">
<article class="card"><h3>Weddings &amp; betrothals</h3><p>Reception dinners and nichayathartham lunches for family and close guests.</p></article>
<article class="card"><h3>Family functions</h3><p>Birthdays, naming ceremonies, anniversaries and reunions.</p></article>
<article class="card"><h3>Company &amp; groups</h3><p>Team lunches and dinners, small meetings, and get-togethers for college and school alumni.</p></article>
</div></section>
<section class="blk" style="padding-top:0"><div class="wrap prose"><h2>Catering from the restaurant kitchen</h2><p>Choose from the restaurant's own dishes: <a href="${R('/journal/muttai-idli-madurai/')}">muttai idli</a>, idly and dosa for morning functions; veg meals or <a href="${R('/journal/seeraga-samba-biryani/')}">seeraga samba biryani</a> with Chettinad starters for lunch; parotta, <a href="${R('/journal/kothu-parotta-kizhi-parotta/')}">kothu parotta</a> and <a href="${R('/journal/madurai-curry-dosa/')}">curry dosa</a> for dinner. See the <a href="${R('/menu/')}">full menu</a>.</p>
<p><a class="more" href="${R('/journal/ammaiyappan-hall-functions/')}">Planning a function at Ammaiyappan Hall →</a></p></div></section>
<section class="blk faq" style="padding-top:0"><div class="wrap">${sh('Questions','Hall FAQ','','hfaq-h')}${faqHtml(HALL_FAQ)}</div></section>`}));

// CONTACT
var cTrail=[['/','Home'],['/contact/','Contact']];
pages.push(page({path:'/contact/',trail:cTrail,title:`Contact & Directions | Hotel Mudaliyar, Melamadai, Madurai | ${PHONE}`,
desc:`Hotel Mudaliyar, No. 1-A, Pandi Kovil Ring Road, Melamadai, near PC Perungudi, Madurai 625020. Phone ${PHONE}. Breakfast 7–11:30 am, meals 12–3:30 pm, dinner 6–11 pm.`,
ld:[{"@type":"ContactPage",name:"Contact Hotel Mudaliyar",url:SITE+"/contact/",about:RESTAURANT_REF},RESTAURANT],
body:R=>phead(cTrail,R,'Melamadai, Madurai','Contact &amp; directions','தொடர்பு கொள்ள','',`<div class="cta"><a class="btn gold" href="tel:${TEL}">Call ${PHONE}</a><a class="btn line" href="${SOCIAL.google}" rel="noopener">Open in Google Maps</a></div>`)+
`<section class="blk"><div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;align-items:start">
<div class="prose"><h2 style="margin-top:0">Address</h2><address style="font-style:normal;font-size:18px;line-height:1.8">Hotel Mudaliyar<br>No. 1-A, Pandi Kovil Ring Road,<br>Melamadai, Near PC Perungudi,<br>Madurai, Tamil Nadu 625020</address>
<h2>Phone</h2><p><a href="tel:${TEL}">${PHONE}</a>. This is the same number as the old Goripalayam kadai.</p>
<h2>Hours</h2><p>Breakfast 7:00–11:30 am<br>Meals 12:00–3:30 pm<br>Dinner 6:00–11:00 pm<br>Open all days</p>
<h2>Order &amp; follow</h2><p>Takeaway at the counter. Delivery on Swiggy and Zomato.<br><a href="${SOCIAL.instagram}" rel="noopener me">Instagram</a> · <a href="${SOCIAL.facebook}" rel="noopener me">Facebook</a> · <a href="${SOCIAL.google}" rel="noopener">Google reviews</a></p></div>
<iframe class="map" title="Map to Hotel Mudaliyar, Melamadai" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Hotel+Mudaliyar,+Pandi+Kovil+Ring+Road,+Melamadai,+Madurai+625020&amp;output=embed"></iframe>
</div></section>`}));

// JOURNAL INDEX
var jTrail=[['/','Home'],['/journal/','Journal']];
pages.push(page({path:'/journal/',trail:jTrail,title:'Journal: Madurai food stories from Hotel Mudaliyar',
desc:'Stories from Hotel Mudaliyar: the muttai idli, Madurai curry dosa, kothu and kizhi parotta, seeraga samba biryani, the Goripalayam years and Ammaiyappan Hall.',
ld:[{"@type":"Blog","@id":SITE+"/journal/#blog",name:"Hotel Mudaliyar Journal",url:SITE+"/journal/",publisher:RESTAURANT_REF,blogPost:ARTICLES.map(a=>({"@type":"BlogPosting",headline:a.h1,url:SITE+'/journal/'+a.slug+'/',datePublished:a.date}))}],
body:R=>phead(jTrail,R,'Journal','From the kitchen and the archive','','The dishes Madurai comes back for, and the story of the kadai by the Goripalayam bus stand.')+`<section class="blk"><div class="wrap">${journalCards(R,ARTICLES)}</div></section>`}));

// ARTICLES
ARTICLES.forEach(a=>{const p='/journal/'+a.slug+'/';const tr=[['/','Home'],['/journal/','Journal'],[p,a.h1]];
 const others=ARTICLES.filter(x=>x!==a).slice(0,3);
 pages.push(page({path:p,trail:tr,type:'article',image:a.image,title:a.title,desc:a.desc,
 ld:[{"@type":"BlogPosting","@id":SITE+p+"#post",headline:a.h1,description:a.desc,image:SITE+a.image,datePublished:a.date,dateModified:a.date,inLanguage:"en",author:{"@type":"Organization",name:"Hotel Mudaliyar",url:SITE+"/"},publisher:{"@type":"Organization",name:"Hotel Mudaliyar",logo:{"@type":"ImageObject",url:SITE+"/assets/logo-emblem-maroon.png"}},mainEntityOfPage:SITE+p,about:RESTAURANT_REF}],
 body:R=>phead(tr,R,a.tag,a.h1,a.ta,a.lead,`<p class="byline">Hotel Mudaliyar · <time datetime="${a.date}">8 October 2026</time></p>`)+
 `<section class="blk"><div class="wrap"><article class="prose">${a.body(R)}<div class="note" style="margin-top:36px"><strong>Hotel Mudaliyar</strong>, No. 1-A, Pandi Kovil Ring Road, Melamadai, Madurai 625020 · <a href="tel:${TEL}">${PHONE}</a> · <a href="${R('/menu/')}">Full menu</a> · <a href="${SOCIAL.google}" rel="noopener">Directions</a></div></article>
 <h2 style="font-size:26px;color:var(--text-heading);margin:56px 0 20px">More from the journal</h2>${journalCards(R,others)}</div></section>`}));});
