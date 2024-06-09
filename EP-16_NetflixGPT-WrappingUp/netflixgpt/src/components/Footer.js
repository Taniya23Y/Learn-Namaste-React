import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { PAGE } from "../router/routs";

const Footer = () => {
  return (
    <footer className="bg-black shadow ">
      <div className="w-full max-w-screen mx-auto md:py-8 p-6">
        <div className="bg-[#141414] rounded p-2">
          <div className="flex items-center flex-col md:flex-row justify-between">
            <a href="#!" className="flex items-center mb-6 md:mb-2">
              <img src={LOGO} className="h-15 w-28 mr-3" alt="Netflix Logo" />
            </a>
            <ul className="flex flex-wrap  justify-between items-center mb-2 text-sm font-medium text-gray-500">
              <li>
                <Link
                  to="/about"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 hover:underline md:mr-6"
                >
                  About
                </Link>
              </li>
              <li>
                <a href="#!" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/taniyay/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 sm:mx-2 border-gray-500 lg:my-8" />
          <span className="p-2 block text-sm text-gray-500 text-center dark:text-gray-400">
            Crafted By{" "}
            <a
              href="https://github.com/Taniya23Y"
              rel="noreferrer"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Taniya Yadav
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
