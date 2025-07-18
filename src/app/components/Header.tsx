import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Header() {
  const menu = [
    {
      menuTitle: "Accueil",
      menuLink: "/",
    },
    {
      menuTitle: "Qui sommes nous",
      menuLink: "/qui-sommes-nous",
    },
    {
      menuTitle: "Nos services",
      menuLink: "/nos-services",
    },
    {
      menuTitle: "Nos realisations",
      menuLink: "/nos-realisations",
    },
    {
      menuTitle: "Blog",
      menuLink: "/Blog",
    },
  ];

  return (
    <header className=" bg-white shadow-md">
      {/* TOP BAR */}
      <div className="bg-black flex justify-between p-3">
        {/* social media */}
        <div className="flex gap-3 ">
          <Link href="/facebook">
            <FaFacebookF color="white" size={12} />
          </Link>
          <Link href="/twitter">
            <FaTwitter color="white" size={12} />
          </Link>
          <Link href="/linkedin">
            {" "}
            <FaLinkedinIn color="white" size={12} />
          </Link>
          <Link href="/instagram">
            {" "}
            <FaInstagram color="white" size={12} />
          </Link>
        </div>
        {/* informations */}
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <FaPhoneAlt color="white" size={12} />
            <Link className="text-white text-xs " href={"tel:+212600000000"}>
              {" "}
              +212600000000
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <IoMail color="white" size={12} />
            <Link className="text-white text-xs" href={"mailto:test@gmail.com"}>
              {" "}
              test@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  justify-between items-center px-5 py-3 ">
        <Link href="/">
          <Image
            alt="logo"
            src={"/netwaciila-logo.png"}
            width={100}
            height={70}
          />
        </Link>
        <nav aria-label="Header navigation">
          <ul className="flex  justify-between gap-3 ">
            {menu.map((navLink, index) => {
              return (
                <Link
                  key={index}
                  className="text-sm  font-semibold"
                  href={navLink.menuLink}
                >
                  {" "}
                  {navLink.menuTitle}
                </Link>
              );
            })}

            {/* <li>
              <Link className="text-xs  font-semibold" href="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="text-xs  font-semibold" href="/qui-sommes-nous">
                Qui sommes nous
              </Link>
            </li>
            <li>
              <Link className="text-xs  font-semibold" href="/nos-services">
                Nos services
              </Link>
            </li>
            <li>
              <Link className="text-xs  font-semibold" href="/nos-realisations">
                Nos realisations
              </Link>
            </li> */}
            {/* <li>
              <a className="text-xs  font-semibol" href="/contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
        <Link
          href="/contact"
          className=" text-sm text-white bg-[#6e4b99] p-1 rounded-sm"
        >
          Contactez-nous
        </Link>
      </div>
    </header>
  );
}
