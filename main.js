let currentIndex = 0;

function showTestimonial(index) {
  const testimonials = document.querySelector('.carousel-wrapper');
  const testimonialWidth = document.querySelector('.testimonial').offsetWidth;

  currentIndex = index;
  const newTranslateValue = -testimonialWidth * currentIndex;
  testimonials.style.transform = `translateX(${newTranslateValue}px)`;
}

function nextTestimonial() {
  const totalTestimonials = document.querySelectorAll('.testimonial').length;
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  const totalTestimonials = document.querySelectorAll('.testimonial').length;
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentIndex);
}

// Initial display
showTestimonial(currentIndex);