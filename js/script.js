window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const logoContainer = document.querySelector('.logo-container');

  const logoBottom = logoContainer.offsetTop + logoContainer.offsetHeight;

  if (window.scrollY >= logoBottom) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

document.querySelectorAll('.side-menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
});

function toggleService(item) {
  const details = item.nextElementSibling;
  const isOpen = details.classList.contains('open');

  if (isOpen) {
    details.classList.remove('open');
    item.classList.remove('active'); // 🔄 Remove active
    item.querySelector('.arrow').classList.remove('rotate');
  } else {
    // Close all other items
    document.querySelectorAll('.service-details').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.service-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.arrow').forEach(a => a.classList.remove('rotate'));

    // Open current
    details.classList.add('open');
    item.classList.add('active'); // ✅ Add active
    item.querySelector('.arrow').classList.add('rotate');
  }
}


document.querySelectorAll('.image-slider').forEach((slider) => {
  const track = slider.querySelector('.slider-track');
  let images = Array.from(track.querySelectorAll('img'));
  let index = 0;

  const showImage = () => {
    track.style.transition = 'none'; // no animation during reorder
    track.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
      track.appendChild(images[(index + i) % images.length].cloneNode(true));
    }
    track.style.transform = 'translateX(0%)';
    setTimeout(() => {
      track.style.transition = 'transform 0.4s ease-in-out';
    }, 10);
  };

  slider.querySelector('.arrow-right').addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage();
  });

  slider.querySelector('.arrow-left').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage();
  });

  showImage(); // Initial setup
});

const items = document.querySelectorAll('.hover-item');

items.forEach(item => {
  const originalText = item.innerHTML; // Save original HTML
  const hoverText = item.getAttribute('data-text');
  
  item.addEventListener('mouseenter', () => {
    item.innerHTML = hoverText; // ✅ Renders <br> correctly
  });

  item.addEventListener('mouseleave', () => {
    item.innerHTML = originalText; // ✅ Restores original HTML
  });
});



