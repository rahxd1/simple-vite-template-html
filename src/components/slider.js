// import Swiper JS
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation]);
Swiper.use([Pagination]);
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".mySwiper", {
    // Optional parameters
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
    },

    // // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
