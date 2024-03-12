let currentIndex = 0;
const intervalTime = 5000; // Waktu geser otomatis dalam milidetik
let slideInterval;

function startSlide() {
    slideInterval = setInterval(() => {
        slide(1); // Geser ke kanan setiap interval
    }, intervalTime);
}

function stopSlide() {
    clearInterval(slideInterval);
}

function slide(direction) {
    const slides = document.querySelectorAll('.card');
    const slider = document.querySelector('.isi');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    const translateValue = currentIndex * -380 + 'px'; // Sesuaikan dengan lebar kartu

    slider.style.transform = 'translateX(' + translateValue + ')';
}

// Memulai slider otomatis
startSlide();

// Memberhentikan slider otomatis saat mouse hover (opsional)
const sliderContainer = document.querySelector('.isi');
sliderContainer.addEventListener('mouseenter', stopSlide);
sliderContainer.addEventListener('mouseleave', startSlide);
