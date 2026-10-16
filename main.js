/**
 * SLG Transportes - Funcionalidades interactivas
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú móvil hamburguesa
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('#navegacion');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.classList.toggle('abierto');
            navMenu.classList.toggle('abierto');
        });

        // Cerrar menú al hacer clic en un enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('abierto');
                navMenu.classList.remove('abierto');
            });
        });
    }

    // 2. Acordeón para Preguntas Frecuentes (FAQ en servicios)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-pregunta');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isOpen = item.classList.contains('activo');
                
                // Cierra otros items abiertos (estilo acordeón limpio)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('activo');
                        const otherBtn = otherItem.querySelector('.faq-pregunta');
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    }
                });

                item.classList.toggle('activo', !isOpen);
                questionBtn.setAttribute('aria-expanded', !isOpen);
            });
        }
    });

    // 3. Manejo interactivo del formulario de presupuesto / contacto
    const contactForm = document.querySelector('#formulario-contacto');
    const formFeedback = document.querySelector('#form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Nota: Si usas Formspree o un backend real, quita e.preventDefault() o usa fetch.
            // Para demostración estática en cliente:
            if (!contactForm.getAttribute('action') || contactForm.getAttribute('action') === '#') {
                e.preventDefault();

                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn ? submitBtn.innerText : 'Enviar';
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerText = 'Enviando solicitud...';
                }

                setTimeout(() => {
                    if (formFeedback) {
                        formFeedback.className = 'feedback-mensaje feedback-exito';
                        formFeedback.innerHTML = `
                            <strong>✅ ¡Solicitud enviada con éxito!</strong>
                            <p>Hemos recibido tus datos correctamente. Nuestro equipo logístico analizará la ruta y te contactará en menos de 2 horas hábiles con el presupuesto más competitivo.</p>
                        `;
                        formFeedback.style.display = 'block';
                        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    contactForm.reset();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalText;
                    }
                }, 700);
            }
        });
    }
});
