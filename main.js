/* Language toggle and copy-email button */
(function(){
  var site=document.getElementById('site'), ar=document.getElementById('btn-ar'), en=document.getElementById('btn-en');
  function set(l){
    site.dataset.lang=l; site.dir=(l==='ar')?'rtl':'ltr'; site.lang=l; document.documentElement.lang=l; document.documentElement.dir=site.dir;
    ar.setAttribute('aria-pressed', l==='ar'); en.setAttribute('aria-pressed', l==='en');
    try{localStorage.setItem('lang', l)}catch(e){}
  }
  var saved=null; try{saved=localStorage.getItem('lang')}catch(e){}
  if(saved==='en'||saved==='ar') set(saved);
  ar.addEventListener('click', function(){set('ar')});
  en.addEventListener('click', function(){set('en')});
  var btn=document.getElementById('copy'), em=document.getElementById('email');
  btn.addEventListener('click', function(){
    var t=em.textContent;
    function sel(){var r=document.createRange(); r.selectNodeContents(em); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r);}
    var done=function(){var l=site.dataset.lang; btn.querySelector('.ar').textContent='تم النسخ'; btn.querySelector('.en').textContent='Copied';};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done, sel)} else sel();
  });
})();
