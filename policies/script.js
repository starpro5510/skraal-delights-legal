(function(){
  var btn=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});}
  var toc=document.querySelector('.toc');
  if(toc){var h2=toc.querySelector('h2'),tb=document.createElement('button');
    tb.type='button';tb.className='toc-toggle';tb.setAttribute('aria-expanded','false');
    tb.innerHTML=(h2?h2.textContent:'On this page')+' <span aria-hidden="true">▾</span>';
    toc.insertBefore(tb,toc.firstChild);
    tb.addEventListener('click',function(){var o=toc.classList.toggle('open');tb.setAttribute('aria-expanded',o);});
    toc.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('a')){toc.classList.remove('open');tb.setAttribute('aria-expanded','false');}});}
  var links=[].slice.call(document.querySelectorAll('.toc a'));
  if(!links.length||!('IntersectionObserver' in window))return;
  var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
  var obs=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){links.forEach(function(a){a.classList.remove('active');});
        var a=map[e.target.id];if(a)a.classList.add('active');}
    });
  },{rootMargin:'-90px 0px -70% 0px'});
  document.querySelectorAll('.doc h2[id]').forEach(function(h){obs.observe(h);});
})();
