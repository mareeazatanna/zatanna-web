// === IMAGE ZOOM ===
const zoomModal = document.getElementById('zoomModal');
const zoomedImage = document.getElementById('zoomedImage');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    zoomedImage.src = img.src;
    zoomModal.style.display = 'flex';
  });
});

zoomModal.addEventListener('click', () => {
  zoomModal.style.display = 'none';
});

// === LONG PRESS CAPTION ===
document.querySelectorAll('.img-box').forEach(box => {
  const caption = box.querySelector('.caption');
  let pressTimer;

  box.addEventListener('touchstart', () => {
    pressTimer = setTimeout(() => {
      caption.style.opacity = '1';
    }, 400); // hold for 0.4s
  });

  box.addEventListener('touchend', () => {
    clearTimeout(pressTimer);
    caption.style.opacity = '0';
  });

  box.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
    caption.style.opacity = '0';
  });
});
