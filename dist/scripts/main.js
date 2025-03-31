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

    // ---

    const buttons = document.querySelectorAll(".js-item-ser");
    const cards = document.querySelectorAll(".js-card-s");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach((but) => {
                but.classList.remove("active");
            });

            button.classList.add('active')

            const target = button.getAttribute("data-item");

            cards.forEach(card => {
                card.classList.remove("active");
            });


            const activeCard = document.querySelector(`.card-s[data-item="${target}"]`);

            if (activeCard) {
                activeCard.classList.add("active");
            }
        });
    });
}