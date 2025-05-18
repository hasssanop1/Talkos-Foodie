document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('hm-button');
  const menu = document.getElementById('hm-menu');
  const bars = document.querySelectorAll('.hm-bar');
  const links = document.querySelectorAll('.hm-link');
  let isOpen = false;

  // Simplified z-index
  button.style.zIndex = '1001';
  menu.style.zIndex = '1000';

  button.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event from bubbling up
    
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
    if (isOpen && !menu.contains(e.target) && e.target !== button) {
      button.click();
    }
  });
});
