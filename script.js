// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
mobileBtn && mobileBtn.addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  const open = nav.style.display === 'block';
  nav.style.display = open ? '' : 'block';
  mobileBtn.setAttribute('aria-expanded', String(!open));
});

// Filter buttons
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#items .card').forEach(card => {
      if(filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Smooth scroll for all in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Simple lightbox
document.querySelectorAll('.btn-lightbox').forEach(btn=>{
  btn.addEventListener('click', () => {
    const src = btn.dataset.img;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lb-img');
    img.src = src;
    lb.style.display = 'flex';
    lb.setAttribute('aria-hidden','false');
  });
});
document.getElementById('lb-close').addEventListener('click', ()=>{
  const lb = document.getElementById('lightbox');
  lb.style.display = 'none';
  lb.setAttribute('aria-hidden','true');
});

// Mailto fallback for feedback
document.getElementById('mailto-btn').addEventListener('click', ()=>{
  const form = document.getElementById('feedback-form');
  const name = form.name.value || 'Anonim';
  const email = form.email.value || '';
  const message = encodeURIComponent(form.message.value || '');
  window.location.href = `mailto:coffeegarden@gmail.com?subject=Feedback%20de%20la%20${encodeURIComponent(name)}&body=${message}%0A%0AEmail:%20${encodeURIComponent(email)}`;
});
