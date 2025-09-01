window.addEventListener('scroll', () => {
  document.querySelectorAll('.hero-section').forEach((hero-section) => {
    const speed = 0.5; // lower = slower movement
    const yPos = -(window.scrollY * speed) + 'px';
    hero-section.style.backgroundPosition = center ${yPos};
  });
});