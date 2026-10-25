(function(){
  var btn=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});}
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
