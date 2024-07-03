import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    text: 'First testimonial goes here. Praising your product or service and expressing satisfaction.',
    author: 'Sohan Karfa',
    image: './me.jpg',
  },
  {
    text: 'Another testimonial goes here. Praising your product or service and expressing satisfaction.',
    author: 'Satyaki Dey',
    image: './me.jpg',
  },
  {
    text: 'Third testimonial goes here. Praising your product or service and expressing satisfaction.',
    author: 'Priyanshu Dutta',
    image: './me.jpg',
  },
  {
    text: 'Fourth testimonial goes here. Praising your product or service and expressing satisfaction.',
    author: 'Rishi Bhattasali',
    image: './me.jpg',
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

  const { text, author, image } = testimonials[currentTestimonial];

  const variants = {
    initial: { opacity: 0, y: '100%', scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '100%', scale: 0.1 },
  };


  return (
    <>
    <div className="bg-gradient-to-bl sha from-[#D29EFB] to-[#6e0eb7] absolute right-0 left-0 mx-auto w-3/4 h-60 p-2 flex rounded-lg mt-10 flex-col items-center justify-center">
      <section className="py-2 md:py-3 w-full">
        <h2 className='text-center text-xl bg-clip-text text-transparent bg-gradient-to-bl from-gray-800 to-black font-extrabold mukta mb-3'>Testimonials</h2>
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
              <p className="mt-[-10px] text-center text-lg font-medium tracking-tight">
                &quot;{text}&quot;
              </p>
              <div className="mx-auto">
                <div className="flex flex-col items-center justify-center space-x-3">
                  <div className="font-regular text-sm text-gray-900">
                    - {author}
                  </div>
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
