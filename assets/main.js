const menu=document.querySelector('.menu'), links=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target);}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

// Every project gallery is automatically presented as a swipeable carousel.
// Add another .detail-image item to any .detail-gallery and controls update automatically.
document.querySelectorAll('.detail-gallery').forEach((gallery)=>{
  const slides=[...gallery.querySelectorAll('.detail-image')];
  if(slides.length<2)return;

  const controls=document.createElement('div');
  controls.className='carousel-controls';
  controls.setAttribute('aria-label','Project gallery navigation');

  const prev=document.createElement('button');
  prev.className='carousel-arrow'; prev.type='button';
  prev.setAttribute('aria-label','Previous artwork'); prev.textContent='‹';

  const dots=document.createElement('div');
  dots.className='carousel-dots';
  dots.setAttribute('role','group'); dots.setAttribute('aria-label','Choose artwork');

  const count=document.createElement('span');
  count.className='carousel-count'; count.setAttribute('aria-live','polite');

  const next=document.createElement('button');
  next.className='carousel-arrow'; next.type='button';
  next.setAttribute('aria-label','Next artwork'); next.textContent='›';

  let active=0;
  const dotButtons=slides.map((slide,index)=>{
    const dot=document.createElement('button');
    dot.type='button'; dot.className='carousel-dot';
    dot.setAttribute('aria-label',`Go to artwork ${index+1}`);
    dot.addEventListener('click',()=>goTo(index));
    dots.appendChild(dot); return dot;
  });

  function update(){
    const center=gallery.scrollLeft+gallery.clientWidth/2;
    active=slides.reduce((best,slide,index)=>{
      const distance=Math.abs(slide.offsetLeft+slide.offsetWidth/2-center);
      return distance<best.distance?{index,distance}:best;
    },{index:0,distance:Infinity}).index;
    dotButtons.forEach((dot,index)=>dot.setAttribute('aria-current',String(index===active)));
    count.textContent=`${String(active+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
    prev.disabled=active===0; next.disabled=active===slides.length-1;
    prev.style.opacity=prev.disabled?'.35':'1'; next.style.opacity=next.disabled?'.35':'1';
  }
  function goTo(index){
    const target=Math.max(0,Math.min(slides.length-1,index));
    gallery.scrollTo({left:slides[target].offsetLeft-gallery.offsetLeft,behavior:'smooth'});
  }
  prev.addEventListener('click',()=>goTo(active-1));
  next.addEventListener('click',()=>goTo(active+1));
  gallery.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
  window.addEventListener('resize',update);
  controls.append(prev,dots,count,next);
  gallery.insertAdjacentElement('afterend',controls);
  update();
});
