import Image from "next/image";

export default function Tools() {
  return (
    <div className="bg-gray-50 p-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-black font-bold text-4xl mb-5">Notre Approche</h3>
        <span className="text-black">
          Nous gérons vos Systèmes d'Information Clés en Main, vous permettant
          de vous concentrer sur le coeur de vos Métiers.
        </span>
      </div>
      <div className="flex flex-wrap p-10 items-center gap-10 ">
        <div className="w-[calc(25%-40px)] flex justify-center items-center ">
          <Image alt="" src={"/vscode.png"} width={150} height={50} />
        </div>
        <div className="w-[calc(25%-40px)]  flex justify-center items-center ">
          <Image alt="" src={"/nodejs.png"} width={150} height={50} />
        </div>
        <div className="w-[calc(25%-40px)]  flex justify-center items-center ">
          <Image alt="" src={"/Elementor.png"} width={150} height={50} />
        </div>
        <div className="w-[calc(25%-40px)]  flex justify-center items-center ">
          <Image alt="" src={"/Adobexd.png"} width={150} height={50} />
        </div>
        <div className="w-[calc(25%-40px)]  flex justify-center items-center ">
          <Image alt="" src={"/firebaseofficial.png"} width={150} height={50} />
        </div>
        <div className="w-[calc(25%-40px)]  flex justify-center items-center ">
          <Image alt="" src={"/react.png"} width={150} height={50} />
        </div>
        <div className="w-[calc(25%-40px)]  flex justify-center items-center ">
          <Image alt="" src={"/drupal.png"} width={150} height={50} />
        </div>
        <div className="w-[calc(25%-40px)]  flex justify-center items-center ">
          <Image alt="" src={"/python.png"} width={150} height={50} />
        </div>
      </div>
    </div>
  );
}
