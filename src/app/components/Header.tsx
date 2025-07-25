"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

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
      menuLink: "/blog",
    },
  ];

  const [navOpened, setNavOpened] = useState(false);

  const toggleNavBar = () => {
    setNavOpened((e) => !e);
  };

  return (
    <header className=" bg-white shadow-md">
      {/* TOP BAR */}
      <div className="bg-black flex-col sm:flex-row items-center gap-4 flex justify-between p-3">
        {/* social media */}
        <div className="flex gap-3  ">
          <Link target="_blank" href="https://www.facebook.com/netwacila">
            <FaFacebookF color="white" size={20} />
          </Link>
          <Link target="_blank" href="https://x.com/netwaciila">
            <FaTwitter color="white" size={20} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/netwaciila/"
          >
            <FaLinkedinIn color="white" size={20} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/netwaciila/#">
            <FaInstagram color="white" size={20} />
          </Link>
        </div>
        {/* informations */}
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <FaPhoneAlt color="white" size={17} />
            <Link className="text-white text-sm " href={"tel:+212600000000"}>
              {" "}
              +212600000000
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <IoMail color="white" size={17} />
            <Link className="text-white text-sm" href={"mailto:test@gmail.com"}>
              {" "}
              test@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 items-center px-5 py-3 ">
        <Link className="2xl:flex-1 select-none" href="/">
          <Image
            alt="logo"
            src={"/netwaciila-logo.png"}
            width={150}
            height={70}
          />
        </Link>
        <nav
          className={`flex flex-col md:flex-row md:flex 
            ${!navOpened && "hidden"} 
            absolute md:static
            //top-[110px]
            top-[160px]
            sm:top-[130px]
            z-[9999]
            //${navOpened ? "right-[50px]" : "right-[-200px]"} 
            ${navOpened && "right-[0px]"} 
          bg-gray-50
            md:bg-transparent
            z-50
            w-full
            transition-all
            duration-500
            ease-in
            select-none
          flex-1 justify-between gap-10 items-center`}
          aria-label="Header navigation"
        >
          <ul className="flex w-full md:w-auto rounded-sm md:rounded-none flex-col md:flex-row gap-7 md:gap-3 select-none ">
            {menu.map((navLink, index) => {
              return (
                <Link
                  key={index}
                  className="text-md md:text-sm px-10 py-5  md:p-0 hover:bg-[#6e4b99] md:hover:bg-transparent font-semibold select-none"
                  href={navLink.menuLink}
                  onClick={toggleNavBar}
                >
                  {" "}
                  {navLink.menuTitle}
                </Link>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={toggleNavBar}
            className="w-full md:w-auto border bg-[#6e4b99] md:bg-transparent hover:bg-white text-center text-lg md:text-sm   md:border-2 md:hover:bg-[#6e4b99] px-3 py-4 md:py-2 md:rounded-sm"
          >
            Contactez-nous
          </Link>
        </nav>
        <div>
          <RxHamburgerMenu
            size={40}
            className={`md:hidden ${
              navOpened ? "bg-white" : "bg-[#6e4b99]"
            } border border-[#6e4b99] p-1 rounded-lg bg-[#6e4b99] cursor-pointer`}
            color={navOpened ? "black" : "white"}
            onClick={toggleNavBar}
          />
        </div>
        {/* <Link
          href="/contact"
          className=" text-sm text-white bg-[#6e4b99] p-1 rounded-sm"
        >
          Contactez-nous
        </Link> */}
      </div>
    </header>
  );
}
