
  function toggleUnit(header) {
    const body = header.nextElementSibling;
    const btn  = header.querySelector('.toggle-btn');
    if (body.classList.contains('collapsed')) {
      body.classList.remove('collapsed');
      btn.style.transform = 'rotate(0deg)';
    } else {
      body.classList.add('collapsed');
      btn.style.transform = 'rotate(-90deg)';
    }
  }

  function toggleImp(header) {
    const body = header.nextElementSibling;
    const btn  = header.querySelector('.toggle-btn');
    if (body.classList.contains('collapsed')) {
      body.classList.remove('collapsed');
      btn.style.transform = 'rotate(0deg)';
    } else {
      body.classList.add('collapsed');
      btn.style.transform = 'rotate(-90deg)';
    }
  }

  function toggleTenMark(header) {
    const body = header.nextElementSibling;
    const btn  = header.querySelector('.toggle-btn');
    if (body.classList.contains('collapsed')) {
      body.classList.remove('collapsed');
      btn.style.transform = 'rotate(0deg)';
    } else {
      body.classList.add('collapsed');
      btn.style.transform = 'rotate(-90deg)';
    }
  }

  window.addEventListener('scroll', () => {
    const scrollTop    = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById('progress-bar').style.width = (scrollTop / scrollHeight * 100) + '%';
    const btn = document.getElementById('scrollTop');
    btn.style.display = scrollTop > 400 ? 'flex' : 'none';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.unit-card, .imp-unit-card, .tenmark-wrap').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(card);
  });

  const navLinks = document.querySelectorAll('.nav-wrap a');
  window.addEventListener('scroll', () => {
    const pos = window.scrollY + 120;
    navLinks.forEach(link => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const top = target.offsetTop;
        const bot = top + target.offsetHeight;
        if (pos >= top && pos < bot) {
          link.style.background = 'rgba(255,255,255,.18)';
          link.style.color = '#fff';
        } else {
          link.style.background = '';
          link.style.color = '';
        }
      }
    });
  });
