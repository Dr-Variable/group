
// Theme toggle and persistence
(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem('qc_theme');
  if(stored) document.documentElement.setAttribute('data-theme', stored);
  else document.documentElement.setAttribute('data-theme', 'dark');
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', cur);
      localStorage.setItem('qc_theme', cur);
      btn.innerText = cur === 'light' ? '🌙 Dark' : '☀️ Light';
    });
    // set initial label
    const cur = document.documentElement.getAttribute('data-theme');
    btn.innerText = cur === 'light' ? '🌙 Dark' : '☀️ Light';
  }
})();

// Small helper to set active nav link
(function(){
  const links = document.querySelectorAll('.navlinks a');
  links.forEach(a => {
    if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))) a.classList.add('active');
  });
})();
