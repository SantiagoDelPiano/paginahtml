document.addEventListener('DOMContentLoaded', function() {
  // Animación del texto en la sección hero si existe
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.5 });
      observer.observe(heroText);
  }
});

// Slider automático en loop (cada slide se muestra durante 5 segundos)
let currentIndex = 0;
setInterval(() => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideCount = slides.length;
  if (slider && slideCount > 0) {
      currentIndex = (currentIndex + 1) % slideCount;
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  }
}, 5000);

// Menú hamburguesa para dispositivos móviles
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.navigation').classList.toggle('active');
});

// Validación del formulario (si existe)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let responseMessage = document.getElementById('response');
  
      if (!name || !email.includes('@')) {
          responseMessage.textContent = "Por favor, ingresa datos válidos.";
          responseMessage.style.color = "red";
      } else {
          responseMessage.textContent = "¡Formulario enviado con éxito!";
          responseMessage.style.color = "green";
      }
  });
}
