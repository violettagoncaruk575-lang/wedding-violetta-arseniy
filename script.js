const items=document.querySelectorAll('.reveal');const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});items.forEach(x=>io.observe(x));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const form=document.getElementById('rsvpForm'), status=document.getElementById('formStatus');
form.addEventListener('submit',async e=>{e.preventDefault();status.textContent='Отправляем…';status.className='form-status';
const data=Object.fromEntries(new FormData(form).entries());
try{const r=await fetch('/api/rsvp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});if(!r.ok)throw new Error();status.textContent='Спасибо! Ваш ответ отправлен ❤️';status.className='form-status ok';form.reset()}catch(err){status.textContent='Не удалось отправить ответ. Попробуйте ещё раз.';status.className='form-status error'}});
