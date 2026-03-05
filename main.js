// Login button toggle
function handleLogin() {
  const btn = document.getElementById('loginBtn');
  if (btn.textContent === 'no login') {
    const user = prompt('请输入你的学号或用户名：');
    if (user && user.trim()) {
      btn.textContent = user.trim().slice(0, 8);
      btn.style.background = '#000';
      btn.style.color = '#fff';
    }
  } else {
    if (confirm('确认退出登录？')) {
      btn.textContent = 'no login';
      btn.style.background = '';
      btn.style.color = '';
    }
  }
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.opacity = '0.45';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.opacity = '1';
          link.style.fontWeight = '600';
        } else {
          link.style.fontWeight = '';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => observer.observe(sec));

// Navbar background on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Bind login button
document.getElementById('loginBtn').addEventListener('click', handleLogin);
