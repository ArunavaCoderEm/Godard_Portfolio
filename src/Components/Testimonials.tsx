import { motion } from "framer-motion";
import React from "react";

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
    name: "Satyaki Dey",
    position: "DevOps, App, Web Developer",
    imgSrc: "./satyaki.jpg",
    link: "https://www.linkedin.com/in/satyaki-dey/",
  },
  {
    text: "Very Helpful! Sufficiently satisfied! Uniqueness is the best part.",
    name: "Sohan Karfa",
    position: "App Developer, Coder",
    imgSrc: "./sohan.jpg",
    link: "https://www.linkedin.com/in/sohan-karfa/",
  },
  {
    text: "Incredibly supportive! Loved the innovative approach.",
    name: "Priyanshu Dutta",
    position: "App, ML Engineer",
    imgSrc: "./priyan.jpg",
    link: "https://www.linkedin.com/in/priyanshudutta04/",
  },
  {
    text: "Quite beneficial! Quite satisfied with the creative and original approach.",
    name: "Rishi Bhattasali",
    position: "ML Engineer",
    imgSrc: "./rishi.jpg",
    link: "https://www.linkedin.com/in/rishi-bhattasali-8ab905253/",
  },
];

const TestimonialCards = (): React.ReactNode => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.0,
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <button className="flex items-center mt-12 mb-4 px-4 py-1 w-36 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold rounded-full sha focus:outline-none mukta">
        <span className="mr-2">✨</span> Reference{" "}
        <span className="ml-2">✨</span>
      </button>
      <motion.main
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.0,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="grid grid-cols-1 mukta md:grid-cols-2 lg:grid-cols-4 p-5 justify-center gap-6 mt-7"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-bl from-[#6EACDA] to-[#6EACDA]/60 p-5 rounded-lg shadow-lg w-80 text-center text-white mx-auto"
          >
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-lg font-bold">{testimonial.name}</p>
            <p className="italic text-sm">{testimonial.position}</p>
            <p className="text-sm mt-2 mb-4">{testimonial.text}</p>
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#000] text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-black/70 transition-all duration-300"
            >
              Visit →
            </a>
          </div>
        ))}
      </motion.main>
    </motion.div>
  );
};

export default TestimonialCards;
