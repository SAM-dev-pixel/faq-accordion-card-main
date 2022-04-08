const root = document.querySelector(':root');
const faqContains = document.querySelectorAll('.faq-contain');
const textAnswers = document.querySelectorAll('.text');

((faqs)=> {
  faqs.forEach(faq => faq.addEventListener('click', (e)=> {
    
    const faqHeight = faq.children[1].clientHeight + 24 + 'px';
    root.style.setProperty('--faq-height', faqHeight);

    if (faq.classList.toggle('active')) {
      faqs.forEach(li => li.classList.toggle('active', faq === li))
    }
    
  }));
})(document.querySelectorAll('.faq-contain'));

//==-- ANIMATIONS 
const loadAnimations =()=> {
  
  const bgSliderPurple = document.querySelector('.bg-slider-purple');
  const bgSliderOrange = document.querySelector('.bg-slider-orange');
  const faqSection = document.querySelector('.faq-section');
  const box = document.querySelector('.box');
  const womanContain = document.querySelector('.woman-contain');
  const shadowContain = document.querySelector('.shadow-contain');
  
  bgSliderPurple.classList.add('active');
  bgSliderOrange.classList.add('active');
  box.classList.add('active');
  womanContain.classList.add('active');
  shadowContain.classList.add('active');
  
}
