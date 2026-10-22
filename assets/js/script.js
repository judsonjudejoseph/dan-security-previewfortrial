document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const note = document.createElement('p');
            note.className = 'prototype-note';
            note.textContent = 'This is a prototype form only. No message has been sent or stored.';

            const existingNote = form.querySelector('.prototype-note');
            if (existingNote) {
                existingNote.replaceWith(note);
            } else {
                form.prepend(note);
            }
        });
    }
});
