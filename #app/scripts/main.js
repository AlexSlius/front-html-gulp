'use strict';

document.addEventListener('DOMContentLoaded', domLoad);

function domLoad() {
    const header = document.querySelector('.js-header');
    header.classList.add('transit');

    document.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}