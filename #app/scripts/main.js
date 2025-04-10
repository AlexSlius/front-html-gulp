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

    new Swiper(".js-team-swipre", {
        direction: "vertical",
        pagination: false,
        slidesPerView: 3,
        spaceBetween: 1,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
            },
        },
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
    new Swiper(".js-swipre-social-mob", {
        pagination: {
            el: document.querySelector(".js-custom-pagination-social-mob"),
            clickable: true,
        },
        navigator: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
    });

    // ---

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
    });

    const openModalContact = () => {
        document.querySelector('.js-modale').classList.add('open');

        setTimeout(() => {
            document.querySelector('.js-modale-opas').classList.add('open');

            setTimeout(() => {
                document.querySelector('.js-modale-cont').classList.add('open');
            }, 300);
        }, 0);
    }

    document.querySelectorAll('.js-btn-open-modal').forEach((el) => {
        console.log(2)
        el.addEventListener('click', function (eve) {
            eve.preventDefault();

            openModalContact();
        });
    })

    const closeModal = () => {
        document.querySelector('.js-modale-cont').classList.remove('open');

        setTimeout(() => {
            document.querySelector('.js-modale-opas').classList.remove('open');

            setTimeout(() => {
                document.querySelector('.js-modale').classList.remove('open');
            }, 500);
        }, 0);
    }

    document.querySelectorAll('.js-btn-close-modal').forEach((el) => {
        el.addEventListener('click', function (eve) {
            eve.preventDefault();

            closeModal();
        });
    });

    // -----------

    const forms = document.querySelectorAll(".js-form-cont");

    forms.forEach((itemFor) => {
        itemFor.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = {};
            let isValid = true;

            document.querySelectorAll(".ite-error").forEach(el => el.remove());

            const inputs = itemFor.querySelectorAll("input, textarea");

            inputs.forEach(input => {
                const { name, value } = input;
                formData[name] = value.trim();
                const parent = input.closest(".ite-in-w");

                if (input.hasAttribute("required") && value.trim() === "") {
                    showError(parent, "This field is required");
                    isValid = false;
                }

                if (name === "email" && value.trim() !== "") {
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        showError(parent, "Enter a valid email");
                        isValid = false;
                    }
                }

                if (name === "phone" && value.trim() !== "") {
                    if (!/^[\d\s+\-()]+$/.test(value)) {
                        showError(parent, "Enter a valid phone number");
                        isValid = false;
                    }
                }
            });

            if (isValid) {
                console.log("Form Data:", formData);
                itemFor.reset();
            }
        });
    });

    function showError(parent, message) {
        const errorElement = document.createElement("p");
        errorElement.className = "ite-error";
        errorElement.textContent = message;
        parent.appendChild(errorElement);
    }

    // ---
    const menuMob = document.querySelector('.js-mob-menu');

    document.querySelector('.js-burger').addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            menuMob.classList.add('active');
        } else {
            this.classList.remove('active');
            menuMob.classList.remove('active');
        }
    });

    // ---
    new Swiper(".js-mob-swip-abo", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 8,
        centeredSlides: true,
    });

    // ----
    const servListMob = document.querySelectorAll('.js-item-serv-mob');

    if (servListMob.length > 0) {
        servListMob.forEach((toggleBtn) => {
            toggleBtn.querySelector('.js-top-ser-mob').addEventListener('click', () => {

                servListMob.forEach((it) => {
                    it.classList.remove('open');

                    it.querySelector('.item-serv-mob_bot').style.height = '0px';
                });

                const textBlock = toggleBtn.querySelector('.item-serv-mob_bot');

                if (toggleBtn.classList.contains("open")) {
                    textBlock.style.height = '0px';
                    toggleBtn.classList.remove('open')
                } else {
                    textBlock.style.height = textBlock.scrollHeight + 'px';
                    toggleBtn.classList.add('open')
                }
            });
        });
    }
}