import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white relative flex flex-col justify-center items-center  ">
      <div className=" w-2/3 absolute top-[-150px] p-25 bg-[#231e1f] flex flex-col items-start gap-5">
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
          className="text-white transition-all duration-500 ease-in-out text-center bg-[#c27def] px-3 py-2 hover:bg-white hover:text-[#c27def]  "
        >
          {" "}
          Contactez-nous
        </Link>
      </div>
      <div></div>
    </div>
  );
}
