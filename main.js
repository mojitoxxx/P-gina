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

    // 3. Manejo interactivo del formulario de presupuesto / contacto (Formspree / Web3Forms / Demo)
    const contactForm = document.querySelector('#formulario-contacto');
    const formFeedback = document.querySelector('#form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : 'Enviar';
            const actionUrl = contactForm.getAttribute('action');

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Enviando solicitud...';
            }

            // Caso A: Si está configurado con Formspree, endpoint externo o script PHP propio
            if (actionUrl && actionUrl !== '#' && actionUrl.trim() !== '') {
                try {
                    const formData = new FormData(contactForm);
                    const response = await fetch(actionUrl, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        if (formFeedback) {
                            formFeedback.className = 'feedback-mensaje feedback-exito';
                            formFeedback.innerHTML = `
                                <strong>✅ ¡Solicitud enviada con éxito a nuestro equipo!</strong>
                                <p>Hemos recibido tus datos correctamente en nuestro buzón. Nuestro equipo logístico te contactará en menos de 2 horas hábiles con el presupuesto cerrado.</p>
                            `;
                            formFeedback.style.display = 'block';
                            formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                        contactForm.reset();
                    } else {
                        const data = await response.json().catch(() => ({}));
                        throw new Error(data.error || 'Error en el envío');
                    }
                } catch (error) {
                    if (formFeedback) {
                        formFeedback.className = 'feedback-mensaje feedback-error';
                        formFeedback.innerHTML = `
                            <strong>⚠️ No se pudo enviar el formulario automáticamente</strong>
                            <p>Por favor, contáctanos directamente por teléfono al <a href="tel:900000000">900 000 000</a> o por WhatsApp para atenderte de inmediato.</p>
                        `;
                        formFeedback.style.display = 'block';
                        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                    }
                }
            } else {
                // Caso B: Modo demostración local (cuando action="#")
                setTimeout(() => {
                    if (formFeedback) {
                        formFeedback.className = 'feedback-mensaje feedback-exito';
                        formFeedback.innerHTML = `
                            <strong>✅ ¡Solicitud enviada con éxito! (Modo demostración)</strong>
                            <p>Hemos recibido tus datos correctamente. Nuestro equipo logístico analizará la ruta y te contactará en menos de 2 horas hábiles con el presupuesto más competitivo.</p>
                        `;
                        formFeedback.style.display = 'block';
                        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    contactForm.reset();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                    }
                }, 700);
            }
        });
    }

    // 4. Lógica de Instalación de Aplicación (PWA)
    let deferredPrompt = null;
    const btnInstalarTriggers = document.querySelectorAll('.btn-instalar-trigger');
    const modalInstalar = document.querySelector('#modal-instalar-app');
    const btnCerrarModal = document.querySelector('#modal-cerrar-btn');

    // Capturar el evento de instalación de Chrome / Edge / Android
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
    });

    function abrirInstalador() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('App instalada con éxito');
                }
                deferredPrompt = null;
            });
        } else {
            // Si el navegador no permite disparo automático (ej. iPhone Safari o ya instalada)
            if (modalInstalar) {
                modalInstalar.classList.add('abierto');
            }
        }
    }

    btnInstalarTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            abrirInstalador();
        });
    });

    if (btnCerrarModal && modalInstalar) {
        btnCerrarModal.addEventListener('click', () => {
            modalInstalar.classList.remove('abierto');
        });
        modalInstalar.addEventListener('click', (e) => {
            if (e.target === modalInstalar) {
                modalInstalar.classList.remove('abierto');
            }
        });
    }

    // Registro de Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swPath = window.location.pathname.includes('/About/') ||
                           window.location.pathname.includes('/Contact/') ||
                           window.location.pathname.includes('/Service/') ? '../sw.js' : './sw.js';
            navigator.serviceWorker.register(swPath).catch(() => {});
        });
    }
});

