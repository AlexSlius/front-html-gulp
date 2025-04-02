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

    // ---

    var swiper = new Swiper(".js-team-swipre", {
        direction: "vertical",
        pagination: false,
        slidesPerView: 3,
        spaceBetween: 1,
    });

    const itemsBtnsTeam = document.querySelectorAll('.js-item-card-btn');
    const cardsTeam = document.querySelectorAll(".js-team-card");

    itemsBtnsTeam.forEach((itemBtnTeam) => {
        itemBtnTeam.addEventListener('click', function () {
            itemsBtnsTeam.forEach((it) => it.classList.remove('active'));

            itemBtnTeam.classList.add('active')

            const target = itemBtnTeam.getAttribute("data-item");

            cardsTeam.forEach(card => {
                card.classList.remove("active");
            });

            const activeCard = document.querySelector(`.js-team-card[data-item="${target}"]`);

            if (activeCard) {
                activeCard.classList.add("active");
            }
        });

    });

    // -- 

    document.querySelectorAll('.js-swiper-cop').forEach((itemSlider) => {
        const swiperInnow = new Swiper(itemSlider.querySelector('.js-swipre-innov'), {
            loop: true,
            pagination: {
                el: itemSlider.querySelector(".js-custom-pagination-innov"),
                clickable: true,
            },
            navigation: {
                nextEl: itemSlider.querySelector(".js-custom-next-innov"),
                prevEl: itemSlider.querySelector(".js-custom-prev-innov"),
            },
            on: {
                activeIndexChange: function () {
                    setTimeout(() => {
                        const activeSlideIndex = swiperInnow.realIndex || 0;

                        itemSlider.querySelectorAll('.js-img-innow').forEach((im) => {
                            im.classList.remove('active');
                        });

                        const activeImg = itemSlider.querySelector(`.js-img-innow[data-index="${activeSlideIndex}"]`);

                        if (activeImg) {
                            activeImg.classList.add("active");
                        }
                    }, 50);
                },
            },
        });
    })
}