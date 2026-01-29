// aosAnimations.js

import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

const generateAosData = (animation, offset = 0, easing = 'ease', once = false) => {
  return {
    'data-aos': animation,
    'data-aos-offset': offset,
    'data-aos-easing': easing,
    'data-aos-once': once.toString()
  };
};

export const fadeRightWithOptions = (offset = 80, easing = 'ease-in-sine', once = false) => {
  return generateAosData('fade-right', offset, easing, once);
};

export const fadeLeftWithOptions = (offset = 80, easing = 'ease-in-sine', once = false) => {
  return generateAosData('fade-left', offset, easing, once);
};

// Add more animation functions with options as needed
