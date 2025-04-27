document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('hm-button');
  const menu = document.getElementById('hm-menu');
  const bars = document.querySelectorAll('.hm-bar');
  const links = document.querySelectorAll('.hm-link');
  let isOpen = false;

  button.addEventListener('click', function() {
    if (!isOpen) {
      menu.style.left = '0';
      bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';

      links.forEach((link, i) => {
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateX(0)';
        }, i * 100);
      });
    } else {
      menu.style.left = '-250px';
      bars[0].style.transform = 'rotate(0) translate(0, 0)';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'rotate(0) translate(0, 0)';

      links.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
      });
    }
    isOpen = !isOpen;
  });

  // Close when clicking outside
  document.addEventListener('click', function(e) {
    if (isOpen && !menu.contains(e.target) && e.target !== button && !button.contains(e.target)) {
      button.click();
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Create container
  const container = document.createElement('div');
  container.id = 'hm-js-container';
  document.body.appendChild(container);

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'hm-js-overlay';
  container.appendChild(overlay);

  // Create button
  const button = document.createElement('button');
  button.id = 'hm-js-button';
  button.innerHTML = `
    <div class="hm-js-bar" style="top: 0;"></div>
    <div class="hm-js-bar" style="top: 50%; transform: translateY(-50%);"></div>
    <div class="hm-js-bar" style="bottom: 0;"></div>
  `;
  container.appendChild(button);

  // Create menu
  const menu = document.createElement('div');
  menu.id = 'hm-js-menu';
  menu.innerHTML = `
    <div style="padding-top: 80px;">
      <a href="#" class="hm-js-link">Home</a>
      <a href="#" class="hm-js-link">Menu</a>
      <a href="#" class="hm-js-link">About</a>
      <a href="#" class="hm-js-link">Pages</a>
      <a href="#" class="hm-js-link">Contact</a>
    </div>
  `;
  container.appendChild(menu);

  // Create and inject styles dynamically
  const styles = `
    #hm-js-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10000;
    }

    #hm-js-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 9998;
    }

    #hm-js-button {
      position: fixed;
      top: 20px;
      left: 20px;
      width: 30px;
      height: 24px;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 10001;
      padding: 0;
      display: none;
    }

    .hm-js-bar {
      position: absolute;
      width: 100%;
      height: 3px;
      background: gray;
      transition: all 0.3s ease;
      left: 0;
    }

    #hm-js-menu {
      position: fixed;
      top: 0;
      left: -250px;
      width: 250px;
      height: 100%;
      background: #333;
      transition: left 0.4s ease;
      z-index: 10002;
      box-shadow: 2px 0 10px rgba(0,0,0,0.2);
    }

    .hm-js-link {
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      padding: 15px 30px;
      opacity: 0;
      transform: translateX(-20px);
      transition: all 0.3s ease;
    }

    .hm-js-link:hover {
      background: #444;
    }

    /* Only show hamburger on mobile */
    @media (max-width: 768px) {
      #hm-js-button {
        display: block;
        pointer-events: auto;
      }
    }
  `;

  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);

  // Functionality
  const bars = document.querySelectorAll('.hm-js-bar');
  const links = document.querySelectorAll('.hm-js-link');
  let isOpen = false;

  button.addEventListener('click', function(e) {
    e.stopPropagation(); // Stop click from closing instantly
    if (!isOpen) {
      menu.style.left = '0';
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';

      bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';

      links.forEach((link, i) => {
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateX(0)';
        }, i * 100);
      });
    } else {
      menu.style.left = '-250px';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';

      bars[0].style.transform = 'rotate(0) translate(0, 0)';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'rotate(0) translate(0, 0)';

      links.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
      });
    }
    isOpen = !isOpen;
  });

  document.addEventListener('click', function(e) {
    if (isOpen && !menu.contains(e.target) && e.target !== button && !button.contains(e.target)) {
      button.click();
    }
  });
});


