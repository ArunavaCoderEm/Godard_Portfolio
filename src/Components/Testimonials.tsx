import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Testlist {
  text: string;
  name: string;
  position: string;
  imgSrc: string;
  link: string;
}

const testimonials: Testlist[] = [
  {
    text: "Very supportive teammate! Impressed by innovative and original approach.",
    name: 'Satyaki Dey',
    position: 'DevOps, App, Web Developer',
    imgSrc: './satyaki.jpg',
    link: "https://www.linkedin.com/in/satyaki-dey/"
  },
  {
    text: "Very Helpful! Sufficiently satisfied! Uniqueness is the best part.",
    name: 'Sohan Karfa',
    position: 'App Developer, Coder',
    imgSrc: './sohan.jpg',
    link: "https://www.linkedin.com/in/sohan-karfa/"
  },
  {
    text: "Incredibly supportive! Loved the innovative approach.",
    name: 'Priyanshu Dutta',
    position: 'App, ML Engineer',
    imgSrc: './priyan.jpg',
    link: "https://www.linkedin.com/in/priyanshudutta04/"
  },
  {
    text: "Quite beneficial! Quite satisfied with the creative and original approach.",
    name: 'Rishi Bhattasali',
    position: 'ML Engineer',
    imgSrc: './rishi.jpg',
    link: "https://www.linkedin.com/in/rishi-bhattasali-8ab905253/"
  },
];

const TestimonialSlider = ():React.ReactNode => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center absolute w-5/6 mx-auto rounded-lg h-64 mt-10 bg-gradient-to-bl from-[#D29EFB] to-[#6e0eb7] p-1 left-0 right-0 gap-3 overflow-hidden">
      <div className='text-center text-xl font-extrabold backdrop-blur-sm bg-white/30 inssha p-1 rounded-full mukta my-3'>🔈Testimonials 🔈</div>
      <ul className="relative w-full h-48 rounded-lg p-2">
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Link to={testimonials[currentIndex].link} target='_blank' className="relative flex items-center">
              <div className="w-3/4 p-8 pr-20 h-48 text-white rounded-xl opacity-0 transform translate-x-32 animate-slide-in">
                <p className="font-bold text-xs lg:text-md lg:text-lg">{testimonial.text}</p>
                <p className="italic text-sm mt-4 text-white/70">{testimonial.name}</p>
                <p className="text-white/70 text-xs">{testimonial.position}</p>
              </div>
              <img
                className="absolute sha right-5 z-10 w-28 h-28 rounded-full object-cover transform -translate-x-0 animate-image-in"
                src={testimonial.imgSrc}
                alt={`${testimonial.name}`}
              />
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mb-4 rounded-full bg-[#FFF250] mx-1 transition-all ${currentIndex === index ? 'w-7' : ''}`}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
      </nav>
    </main>
  );
};

export default TestimonialSlider;
