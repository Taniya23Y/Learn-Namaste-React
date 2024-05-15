import { LOGO_URL } from "../utils/constants";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"; // Combine imports

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-500 text-gray-900 py-8  ">
      <div className="container px-8 mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="text-center md:text-left">
          <div className="flex items-center mb-4 md:mb-0">
            <img className="h-10 mr-4" src={LOGO_URL} alt="logo-foodLogo" />
            <span className="text-black text-xl font-bold">TasteTrek</span>
          </div>
          <p className="text-sm mt-2">Bringing flavor to your doorstep!</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex justify-center items-center gap-2">
              <MdMarkEmailRead /> Email
            </h3>
            <h3 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex justify-center items-center gap-2">
              <IoIosContact /> Contact us
            </h3>
            <h3 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex justify-center items-center gap-2">
              <MdPlace /> Avenue
            </h3>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <span className="text-black text-xl font-bold">Our Menu</span>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Breakfast
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Lunch
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Dinner
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Cuisines
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <span className="text-black text-xl font-bold">Information</span>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                About us
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Testimonial
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Contact us
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Blog
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <span className="text-black text-xl font-bold">Useful Links</span>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Services
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Help & Support
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Terms & Conditions
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                Privacy
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <span className="text-black text-xl font-bold">Socials</span>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex justify-center items-center gap-2">
                <FaFacebook />
                Facebook
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex justify-center items-center gap-2">
                <FaInstagram />
                Instagram
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex justify-center items-center gap-2">
                <FaLinkedin />
                LinkedIn
              </h2>
              <h2 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex justify-center items-center gap-2">
                <FaYoutube />
                Youtube
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black border-solid border-2 my-8 mx-8"></div>

      <div className="text-center">
        <p className="text-sm">
          &copy; {currYear} TasteTrek. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
