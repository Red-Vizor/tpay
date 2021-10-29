const swiperPartner = new Swiper('.swiper-partner', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

const swiperVision = new Swiper('.swiper-vision', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});


const swiperFeatures = new Swiper('.swiper-features', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});