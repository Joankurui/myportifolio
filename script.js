

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to top button (optional)
const backToTop = document.createElement('button');
backToTop.textContent = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
function openContactForm() {
  document.getElementById('contactPopup').style.display = 'block';
}

function closeContactForm() {
  document.getElementById('contactPopup').style.display = 'none';
}

