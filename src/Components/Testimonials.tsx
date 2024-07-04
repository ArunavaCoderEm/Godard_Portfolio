import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface testlist {
    text: string;
    author: string;
    image: string;
    link: string;
}

const testimonials : testlist[] = [
  {
    text: 'Very Helpful ! Sufficiently satisfied ! Creativity and uniqueness is the best part.',
    author: 'Sohan Karfa',
    image: './sohan.jpg',
    link : "https://www.linkedin.com/in/sohan-karfa/"
  },
  {
    text: "Very supportive friend and teammate! Impressed by the innovative and original approach.",
    author: 'Satyaki Dey',
    image: './satyaki.jpg',
    link : "https://www.linkedin.com/in/satyaki-dey/"
  },
  {
    text: 'Incredibly supportive! Completely satisfied! Loved the innovative approach.',
    author: 'Priyanshu Dutta',
    image: './priyan.jpg',
    link : "https://www.linkedin.com/in/priyanshudutta04/   "
  },
  {
    text: 'Quite beneficial! Quite satisfied with the creative and original approach',
    author: 'Rishi Bhattasali',
    image: './rishi.jpg',
    link : "https://www.linkedin.com/in/rishi-bhattasali-8ab905253/"
  },
];

const TestimonialCarousel = ():React.ReactNode => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
      }, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
  
    const { text, author, image, link } = testimonials[currentTestimonial];


  return (
    <>
    <div className="bg-gradient-to-bl sha from-[#D29EFB] to-[#6e0eb7] absolute right-0 left-0 mx-auto w-5/6 h-60 p-2 flex rounded-lg mt-10 flex-col items-center justify-center">
      <section className="py-2 md:py-3 w-full">
      <h2 className='text-center text-xl font-extrabold backdrop-blur-sm bg-white/30 inssha p-1 rounded-full mukta mb-3 w-72 mx-auto'>🔈 Testimonials 🔈</h2>
        <div className="w-full max-w-2xl flex flex-col mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentTestimonial}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              className="flex w-full mt-[-20px] flex-col items-center justify-center"
              transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  duration: 0.5,
                }}
                >
              <img src={image} alt={author} className="h-10 w-10 m-5 sha rounded-full" />
              <p className="mt-[-10px] text-center text-[#FFF250] text-lg font-medium tracking-tight">
                &quot;{text}&quot;
              </p>
              <div className="mx-auto">
                <div className="flex flex-col items-center justify-center space-x-3">
                  <Link to={link} target='_blank' className="font-regular text-sm text-gray-900">
                    - {author}
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
    </>
  );
};

export default TestimonialCarousel;
