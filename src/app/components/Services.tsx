import { CgSoftwareDownload } from "react-icons/cg";
import { CiDatabase } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineManageHistory } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { RiMenuSearchLine } from "react-icons/ri";

export default function Services() {
  const Services = [
    {
      ServiceTitle: "Web & Mobile",
      ServiceIcon: <FaLaptopCode size={60} />,
    },
    {
      ServiceTitle: "integration",
      ServiceIcon: <CiDatabase size={60} />,
    },
    {
      ServiceTitle: "Bi",
      ServiceIcon: <FaLaptopCode size={60} />,
    },
    {
      ServiceTitle: "IA",
      ServiceIcon: <LuBrainCircuit size={60} />,
    },
    {
      ServiceTitle: "IOT",
      ServiceIcon: <CgSoftwareDownload size={60} />,
    },
    {
      ServiceTitle: "Consulting",
      ServiceIcon: <FaLaptopCode size={60} />,
    },
    {
      ServiceTitle: "Gestion de projet",
      ServiceIcon: <MdOutlineManageHistory size={60} />,
    },
    {
      ServiceTitle: "Referencement Web",
      ServiceIcon: <RiMenuSearchLine size={60} />,
    },
    {
      ServiceTitle: "Formation",
      ServiceIcon: <PiCertificateFill size={60} />,
    },
  ];

  return (
    <div className="flex py-5 px-10 flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center my-5">
        <h2 className=" text-2xl font-bold">SERVICES</h2>
        <p>
          Société de Services en Ingénierie Informatique, basée à Agadir au
          Maroc.
        </p>
      </div>
      <div className="flex flex-wrap justify-between w-full gap-4  ">
        {Services.map((e, index) => {
          return (
            <div
              key={index}
              className="flex flex-1  min-w-[calc(33.33%-12px)] flex-col justify-center items-center border hover:border-gray-400  border-gray-200 p-10 rounded-lg "
            >
              {e.ServiceIcon}
              <span>{e.ServiceTitle}</span>
            </div>
          );
        })}
        {/* <div className="flex w-1/3 flex-col justify-center items-center border  border-gray-400 p-10 rounded-lg ">
          <FaLaptopCode size={60} />
          <span>Web & Mobile</span>
        </div>
        <div className="flex w-1/3 flex-col justify-center items-center border  border-gray-400 p-10 rounded-lg ">
          <FaLaptopCode size={60} />
          <span>Web & Mobile</span>
        </div>
        <div className="flex w-1/3 flex-col justify-center items-center border  border-gray-400 p-10 rounded-lg ">
          <FaLaptopCode size={60} />
          <span>Web & Mobile</span>
        </div> */}
      </div>
    </div>
  );
}
