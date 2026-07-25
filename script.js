// ================================================================= //
// TIMING & TRANSITION ORCHESTRATION                                 //
// ================================================================= //
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  const landingPage = document.getElementById('landing-page');

  // Lock scroll during splash screen
  document.body.style.overflow = 'hidden';

  // Wait for the entrance animations (3s) + progress loading (3s) to complete
  setTimeout(() => {
    // Start splash screen fadeout
    splash.classList.add('fade-out');
    
    // Wait for fadeout animation (800ms) to complete before exposing landing page
    setTimeout(() => {
      splash.style.display = 'none';
      landingPage.classList.add('active');
      
      // Restore scroll
      document.body.style.overflow = 'auto';
      
      // Trigger animations for elements in the viewport on load
      animateOnScroll();
    }, 800);
  }, 6200); // 6.2 seconds total splash duration
});

// ================================================================= //
// MOBILE MENU NAVIGATION                                            //
// ================================================================= //
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileClose = document.querySelector('.mobile-menu-close');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (mobileBtn) mobileBtn.addEventListener('click', openMobileMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// ================================================================= //
// SCROLL SECTION HIGHLIGHTING & ACTIVE NAV LINKS                    //
// ================================================================= //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Highlight a section slightly before it reaches the center
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
  
  // Header shadow class on scroll
  const header = document.querySelector('.main-header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 10px 30px rgba(92, 6, 24, 0.05)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ================================================================= //
// ANIMATIONS ON SCROLL (REVEALS)                                    //
// ================================================================= //
const revealElements = [
  ...document.querySelectorAll('.section-title'),
  ...document.querySelectorAll('.section-tag'),
  ...document.querySelectorAll('.divider'),
  ...document.querySelectorAll('.about-text-content p'),
  ...document.querySelectorAll('.stat-box'),
  ...document.querySelectorAll('.saint-card'),
  ...document.querySelectorAll('.timeline-item'),
  ...document.querySelectorAll('.abhanga-card-item')
];

// Add CSS classes for reveal animation states
revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);

// ================================================================= //
// INTERACTIVE AUDIO PLAYER SIMULATION                              //
// ================================================================= //
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(btn => {
  let isPlaying = false;
  let intervalId = null;
  let progress = 0;
  
  const progressFill = btn.parentElement.querySelector('.progress-fill-sim');
  const icon = btn.querySelector('i');

  btn.addEventListener('click', () => {
    // Pause all other players first
    playButtons.forEach(otherBtn => {
      if (otherBtn !== btn) {
        const otherIcon = otherBtn.querySelector('i');
        const otherProgress = otherBtn.parentElement.querySelector('.progress-fill-sim');
        otherIcon.className = 'fa-solid fa-play';
        otherProgress.style.width = '0%';
        // If it was playing, trigger click to pause it
        otherBtn.dataset.playing = 'false';
      }
    });

    isPlaying = !isPlaying;
    btn.dataset.playing = isPlaying;

    if (isPlaying) {
      icon.className = 'fa-solid fa-pause';
      progress = parseFloat(progressFill.style.width) || 0;
      
      // Simulate music playback progress
      intervalId = setInterval(() => {
        if (progress >= 100) {
          clearInterval(intervalId);
          icon.className = 'fa-solid fa-play';
          progressFill.style.width = '0%';
          isPlaying = false;
          btn.dataset.playing = 'false';
        } else {
          progress += 1;
          progressFill.style.width = `${progress}%`;
        }
      }, 100);
      btn.dataset.intervalId = intervalId;
    } else {
      icon.className = 'fa-solid fa-play';
      clearInterval(parseFloat(btn.dataset.intervalId));
    }
  });
});
