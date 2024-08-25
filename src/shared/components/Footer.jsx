import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-12">
        {/* Logo and Description */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <div className="flex items-center mb-4">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </div>
          <p className="text-sm">
            We work with a passion of taking challenges and creating new ones in
            the advertising sector.
          </p>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get our latest updates & news.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600">
              <FaDribbble />
            </a>
            <a href="#" className="text-blue-500">
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Official Info */}
        <div className="col-span-1 space-y-2 md:lg:space-y-6">
          <h4 className="text-xl font-bold mb-4">Official info:</h4>
          <p className="text-sm">
            <span className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-orange-600 mr-2" /> Dubai UAE
            </span>
            <span className="flex items-center mb-2">
              <FaPhoneAlt className="text-orange-600 mr-2" /> 1-888-452-1505
            </span>
          </p>
          <p className="text-sm font-bold">Open Hours:</p>
          <span>
            Mon - Sat: 8 am - 5 pm,
            <br />
            Sunday: CLOSED
          </span>
        </div>

        {/* Gallery */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {/* Placeholder images */}
            <Image
              src="/gallery-1.jpg"
              alt="Gallery 1"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/gallery-2.jpg"
              alt="Gallery 2"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/gallery-3.jpg"
              alt="Gallery 3"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/gallery-4.jpg"
              alt="Gallery 4"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/gallery-5.jpg"
              alt="Gallery 5"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/gallery-6.jpg"
              alt="Gallery 6"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-6 px-4 bg-black text-center text-white text-sm text-gray-500">
        <p className="font-semibold text-md tracking-wide">
          2024 © All rights reserved by Learn Digital Marketing. Powered by{" "}
          <span className="text-orange-color ">Bab el Najah</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
