import React from 'react';

const ContactForm = ():React.ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

      <button className="flex items-center mb-8 px-4 py-1 w-36 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold rounded-full sha focus:outline-none">
        <span className="mr-2">✨</span> Contact <span className="ml-2">✨</span>
      </button>

      <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-4xl bg-gradient-to-bl from-[#FFF250] to-[#a09606] sha rounded-lg overflow-hidden">

        <div className="w-full md:w-1/3 bg-[#121316] text-white p-6 flex flex-col items-start justify-center">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-sm mb-2">
            <span className="font-semibold">Email:</span> meard@gmail.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> +91 8695260699
          </p>
        </div>


        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
                placeholder="your-email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
                rows={4}
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-bl from-[#D29EFB] to-[#590797] text-white font-semibold px-4 py-2 transition-all divide-neutral-300 hover:scale-95 rounded-lg focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
