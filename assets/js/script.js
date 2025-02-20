const handleTopBar = () => {
    const cancelTopBar = document.getElementById("cancelTopBar");
    if (!cancelTopBar) {
        cancelTopBar.style.display = 'block';
    }
    else {
        cancelTopBar.style.display = 'none';
    }
};

const handleToggleBtn = () => {
    const collapes = document.getElementById("collapesId");
    if (collapes.classList.contains("show")) {
        collapes.classList.remove('show')
    }
    else {
        collapes.classList.add('show');
    }
}

// swiper slides
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination-counting",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return number < 10 ? "0" + number : number; // Adds "0" for single digits
        },
        formatFractionTotal: function (number) {
            return number < 10 ? "0" + number : number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span> of <span class="' + totalClass + '"></span>';
        },
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
            spaceBetween:20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },

});