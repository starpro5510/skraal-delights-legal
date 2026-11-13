(function(){
 'use strict';
 const btn=document.getElementById('menu-toggle'),nav=document.getElementById('navigation');
 function close(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}
 if(btn&&nav){btn.onclick=function(){const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))};nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const url=window.SKRAAL_CONFIG?.customerWebsite;
 try{const parsed=new URL(url);if(parsed.protocol==='https:')document.querySelectorAll('.customer-link').forEach(a=>a.href=parsed.href)}catch{}
 const toc=document.querySelector('.toc');
 if(!toc)return;
 const heading=toc.querySelector('h2'),list=toc.querySelector('ol'),toggle=document.createElement('button');
 list.id='policy-contents';toggle.type='button';toggle.className='toc-toggle';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls',list.id);
 toggle.innerHTML=(heading?heading.textContent:'On this page')+' <span aria-hidden="true">↓</span>';toc.insertBefore(toggle,list);
 toggle.onclick=function(){toggle.setAttribute('aria-expanded',String(toc.classList.toggle('open')))};
 toc.addEventListener('click',function(e){if(e.target.closest('a')){toc.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
 const links=[...toc.querySelectorAll('a[href^="#"]')];if(!('IntersectionObserver'in window))return;
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>{const active=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}})},{rootMargin:'-120px 0px -65% 0px'});
 document.querySelectorAll('.doc h2[id]').forEach(h=>observer.observe(h));
})();
