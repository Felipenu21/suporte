// scripts.js

// Gerencia tema claro/escuro com persistência localStorage
const btn = document.getElementById('toggle-theme');
const body = document.body;

// Aplica o tema salvo ou detecta preferencia do sistema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  btn.textContent = 'Modo Escuro';
  btn.setAttribute('aria-pressed', 'true');
} else {
  btn.textContent = 'Modo Claro';
  btn.setAttribute('aria-pressed', 'false');
}

btn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    btn.textContent = 'Modo Escuro';
    btn.setAttribute('aria-pressed', 'true');
    localStorage.setItem('theme', 'light');
  } else {
    btn.textContent = 'Modo Claro';
    btn.setAttribute('aria-pressed', 'false');
    localStorage.setItem('theme', 'dark');
  }
});

// Animação de fade ao mudar página pelo menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    // Só ativa se for página diferente da atual
    if (href && href !== window.location.pathname.split('/').pop()) {
      e.preventDefault();
      body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});
