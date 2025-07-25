"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// import { useState } from "react";
// import Image from "next/image";

// const slides = [
//   {
//     background: "/slide1.avif",
//     title: "Welcome to Slide 1",
//   },
//   {
//     background: "/slide2.avif",
//     title: "Explore Slide 2",
//   },
//   {
//     background: "/slide3.avif",
//     title: "Discover Slide 3",
//   },
// ];

// export default function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full h-[400px] overflow-hidden">
//       <Image
//         src={slides[currentIndex].background}
//         alt={slides[currentIndex].title}
//         layout="fill"
//         objectFit="cover"
//         className="transition-all duration-500"
//       />
//       <div className="absolute top-1/2 left-1/2 text-white text-xl font-bold -translate-x-1/2 -translate-y-1/2">
//         {slides[currentIndex].title}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//       >
//         ▶
//       </button>
//     </div>
//   );
// }
export default function slider() {
  const slides = [
    {
      background: "/slide1.jpg",
      title: "Ingénierie & services informatiques",
      text: "Des solutions sur mesure pour optimiser votre infrastructure IT et améliorer votre productivité.",
    },
    {
      background: "/slide2.jpg",
      title: "Spécialisé dans la transformation digitale",
      text: "Accompagnement complet pour moderniser vos processus et adopter les dernières technologies.",
    },
    {
      background: "/slide3.jpg",
      title: "Empruntez la voie du digital",
      text: "Stratégies innovantes pour propulser votre entreprise à l'ère numérique.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // const nextSlide = () => {
  //   setIsChanging(true);
  //   setCurrentIndex((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  //   setIsChanging(false);
  // };
  const nextSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
      setIsChanging(false);
    }, 500); // Match this duration with your CSS transition
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  const prevSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsChanging(false);
    }, 500);
  };

  //  this code is for autonextslide, currently i disabled it

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 3000); // change every 3 seconds
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div>
      <div className="relative h-[700px] sm:h-screen select-none flex justify-center items-center">
        <Image
          key={currentIndex}
          alt="slideImage"
          src={slides[currentIndex].background}
          fill
          className={` object-cover transition-opacity duration-500  ${
            isChanging ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute px-10 flex flex-col items-start gap-2 ">
          <h1 className="text-[50px] sm:text-4xl   text-white font-bold">
            {slides[currentIndex].title}
          </h1>
          <p className="text-white"> {slides[currentIndex].text} </p>
          <Link className="bg-[#c27def] px-3 py-2 " href={"/nos-services"}>
            En savoir plus
          </Link>
        </div>
        <div className=" px-2 absolute w-full  flex flex-row-reverse justify-between items-center">
          <button
            className="bg-white p-1 opacity-50 sm:opacity-100  cursor-pointer rounded-full "
            onClick={nextSlide}
          >
            <FaAngleRight size={40} />
          </button>
          <button
            className="bg-white opacity-50 sm:opacity-100  cursor-pointer p-1 rounded-full"
            onClick={prevSlide}
          >
            <FaAngleLeft size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}
