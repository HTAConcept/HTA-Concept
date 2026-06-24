// ===== MENU MOBILE =====
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// ===== PROTECTION DES PHOTOS =====
// Désactive clic droit sur toutes les images
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    return false;
  }
});

// Désactive le drag & drop des images
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    return false;
  }
});

// Désactive les raccourcis clavier de sauvegarde (Ctrl+S, Ctrl+U)
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u')) {
    e.preventDefault();
  }
});
