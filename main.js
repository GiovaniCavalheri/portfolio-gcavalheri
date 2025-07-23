// Efeito de digitação no título
function typeWriter() {
    const text = "Giovani Cavalheri";
    const typingElement = document.querySelector('.typing');
    const cursorElement = document.querySelector('.cursor');
    
    let i = 0;
    typingElement.textContent = '';
    
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            typingElement.textContent += text[i];
            i++;
        } else {
            clearInterval(typingInterval);
            cursorElement.style.animation = 'blink 0.7s infinite';
        }
    }, 150);
}

// Formspree - Reset do formulário
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            this.reset();
        }, 1000);
    });
}

// Rolagem Suave para links da navegação
document.querySelectorAll('.nav-desktop a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Ativação do menu conforme scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-desktop a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});