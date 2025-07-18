import Image from "next/image";

export default function Tools() {
  return (
    <div className="bg-[#06192a] p-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-bold text-4xl mb-5">Notre Approche</h3>
        <span className="text-white">
          Nous gérons vos Systèmes d'Information Clés en Main, vous permettant
          de vous concentrer sur le coeur de vos Métiers.
        </span>
      </div>
      <div className="flex items-center ">
        <Image alt="" src={"/vscode.png"} width={150} height={50} />
        <Image alt="" src={"/nodejs.png"} width={150} height={50} />
      </div>
    </div>
  );
}
