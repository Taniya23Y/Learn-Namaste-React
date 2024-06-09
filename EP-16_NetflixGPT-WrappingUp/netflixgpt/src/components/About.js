import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about-us px-4 md:px-24 py-8 bg-black text-white">
      <h1 className="text-5xl text-center mb-6 font-extrabold text-red-600">
        About NetflixGPT
      </h1>
      <p className="text-gray-300 mb-8 text-center text-lg leading-relaxed">
        NetflixGPT is a cutting-edge web application designed to provide a
        seamless and engaging movie streaming experience. Powered by a
        sophisticated tech stack including React, Redux, and Firebase,
        NetflixGPT combines the best of modern web development to deliver a
        platform that's both powerful and user-friendly.
        <br />
        <br />
        Whether you're browsing on a desktop or a mobile device, NetflixGPT's
        intuitive interface and robust features ensure you can enjoy your
        favorite movies and shows effortlessly. Join us as we explore the future
        of digital entertainment with NetflixGPT!
      </p>

      <div className="mb-8 text-gray-400 text-center text-sm">
        <p>Explore More:</p>
        <a
          href="https://github.com/okNeeraj/netflix-gpt"
          className="hover:text-red-600 ml-3 text-red-500"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
        <br />
        <a
          href="https://github.com/Taniya23Y/Learn-Namaste-React"
          target="_blank"
          className="hover:text-red-600 ml-3 text-red-500"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/taniyay/"
          className="hover:text-red-600 ml-3 text-red-500"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="screen rounded overflow-hidden shadow-xl">
          <img
            src="/netflix-background.jpg" // Replace with the actual screenshot path
            alt="Screenshot 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <img
            src="/netflix-bg-cover.jpg" // Replace with the actual screenshot path
            alt="Screenshot 2"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
