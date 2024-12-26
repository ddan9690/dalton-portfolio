const navbar = document.querySelector('.navbar');
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 
 // Scroll handling
 let lastScrollY = window.scrollY;
 const scrollThreshold = 100; // Minimum scroll before hiding navbar
 window.addEventListener('scroll', () => {
 if (window.scrollY > scrollThreshold) {
 if (window.scrollY > lastScrollY) {
 // Scrolling down
 navbar.classList.add('hidden');
 } else {
 // Scrolling up
 navbar.classList.remove('hidden');
 }
 lastScrollY = window.scrollY;
 }
 }); 

 // Hamburger menu handling
 hamburger.addEventListener('click', () => {
 hamburger.classList.toggle('active');
 navLinks.classList.toggle('active');
 }); 

 // Close mobile menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
 link.addEventListener('click', () => {
 hamburger.classList.remove('active');
 navLinks.classList.remove('active');
 });
 }); 

 // Close mobile menu when clicking outside
 document.addEventListener('click', (e) => {
 if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
 hamburger.classList.remove('active');
 navLinks.classList.remove('active');
 }
 });

//  ---------SECTION 4:SLIDER MENU-------------
const slider = document.querySelector('.slider');
 const slides = document.querySelectorAll('.slide');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');
 const dotsContainer = document.querySelector('.dots-container'); 

 let currentSlide = 0;
 const totalSlides = slides.length; 

 // Create dots
 slides.forEach((_, index) => {
 const dot = document.createElement('div');
 dot.classList.add('dot');
 if (index === 0) dot.classList.add('active');
 dot.addEventListener('click', () => goToSlide(index));
 dotsContainer.appendChild(dot);
 }); 

 const dots = document.querySelectorAll('.dot'); 

 // Add touch support
 let touchStartX = 0;
 let touchEndX = 0; 

 slider.addEventListener('touchstart', e => {
 touchStartX = e.changedTouches[0].screenX;
 }, false); 

 slider.addEventListener('touchend', e => {
 touchEndX = e.changedTouches[0].screenX;
 handleSwipe();
 }, false); 

 function handleSwipe() {
 const swipeThreshold = 50; // minimum distance for swipe
 const diff = touchStartX - touchEndX; 

 if (Math.abs(diff) > swipeThreshold) {
 if (diff > 0) {
 nextSlide(); // Swipe left
 } else {
 prevSlide(); // Swipe right
 }
 }
 } 

 function updateDots() {
 dots.forEach((dot, index) => {
 dot.classList.toggle('active', index === currentSlide);
 });
 } 

 function goToSlide(slideIndex) {
 currentSlide = slideIndex;
//  slider.style.transform = translateX(-$ {currentSlide * 100}%);
 updateDots();
 } 

 function nextSlide() {
 currentSlide = (currentSlide + 1) % totalSlides;
 goToSlide(currentSlide);
 } 

 function prevSlide() {
 currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
 goToSlide(currentSlide);
 } 

 prevBtn.addEventListener('click', prevSlide);
 nextBtn.addEventListener('click', nextSlide); 

 // Optional: Auto-advance slides
 const autoAdvance = setInterval(nextSlide, 5000); 

 // Pause auto-advance on hover
 slider.addEventListener('mouseenter', () => clearInterval(autoAdvance));
 slider.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));

