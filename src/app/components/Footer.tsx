import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white relative flex flex-col justify-center items-center  ">
      <div className=" w-2/3 p-25 bg-[#231e1f] flex flex-col items-start gap-5">
        <div>
          <h4 className="text-4xl font-extrabold text-white">
            Travaillons ensemble
          </h4>
          <div className="w-[70px] mt-3 h-0.5 bg-[#c27def]"></div>
        </div>
        <p className="text-white text-sm">
          Nous sommes passionnés par l'innovation, les idées brillantes et la
          mise en œuvre qui les rassemble pour créer une expérience unique et
          enrichissante. Si vous l'êtes aussi, appelez-nous ou envoyez-nous un
          e-mail pour commencer.
        </p>
        <Link
          href={"/contact"}
          className="transition-all duration-200 ease-in-out text-center bg-[#c27def] px-3 py-2 hover:bg-white  "
        >
          {" "}
          Contactez-nous
        </Link>
      </div>
      <div className="p-10 w-full flex items-end justify-between ">
        <div className="flex items-end gap-5">
          <Link href={"/"}>
            <Image
              alt="logo"
              width={200}
              height={100}
              src={"/netwaciila-logo.png"}
            />
          </Link>
          <div>
            <span className="text-black">
              Copyright 2025 ©{" "}
              <Link className="text-[#c27def] font-bold" href={"/"}>
                NetWaciila
              </Link>
              . Tous droits réservés.
            </span>
          </div>
        </div>
        <div className="flex gap-3 ">
          <Link href="/facebook">
            <FaFacebookF
              title="Facebook"
              className="border hover:bg-[#c27def] rounded-full p-1"
              color="black"
              size={30}
            />
          </Link>
          <Link href="/twitter">
            <FaTwitter
              title="Twitter"
              color="black"
              className="border hover:bg-[#c27def]  rounded-full p-1"
              size={30}
            />
          </Link>
          <Link href="/linkedin">
            <FaLinkedinIn
              title="Linkedin"
              color="black"
              className="border hover:bg-[#c27def]  rounded-full p-1"
              size={30}
            />
          </Link>
          <Link href="/instagram">
            <FaInstagram
              title="Instagram"
              color="black"
              className="border hover:bg-[#c27def]  rounded-full p-1"
              size={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
