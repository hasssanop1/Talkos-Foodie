document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('hm-js-button');
  const menu = document.getElementById('hm-js-menu');
  const overlay = document.getElementById('hm-js-overlay');
  const bars = document.querySelectorAll('.hm-js-bar');
  const links = document.querySelectorAll('.hm-js-link');
  let isOpen = false;

  button.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click from closing the menu immediately
    if (!isOpen) {
      // Open the menu
      menu.style.left = '0';
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';

      // Hamburger to X animation
      bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';

      // Animate menu links
      links.forEach((link, i) => {
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateX(0)';
        }, i * 100);
      });
    } else {
      // Close the menu
      menu.style.left = '-250px';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';

      // Hamburger back to normal animation
      bars[0].style.transform = 'rotate(0) translate(0, 0)';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'rotate(0) translate(0, 0)';

      // Animate menu links out
      links.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
      });
    }
    isOpen = !isOpen;
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function(e) {
    if (isOpen && !menu.contains(e.target) && e.target !== button && !button.contains(e.target)) {
      button.click(); // This will toggle the menu close
    }
  });

  // Prevent the menu from closing when clicking on the links
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent click from triggering the document-level event
    });
  });
});
