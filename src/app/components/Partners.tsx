import Image from "next/image";
import Link from "next/link";
// bg-[#c27def]
export default function Partners() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col bg-[#231e1f]  flex-1 max-w-2/3 p-10 justify-center items-center gap-10  ">
        <h3 className="text-white text-xl">Ils nous font Confiance</h3>
        <div className="flex w-full justify-center items-center gap-10 ">
          <Link href={"https://universiapolis.ma/"}>
            <Image
              alt="universiapolis"
              width={300}
              height={50}
              src={"/universiapolis.png"}
              className="bg-white transition-all"
            />
          </Link>
          <Link href={"https://www.yves-rocher.ma/"}>
            <Image
              alt="universiapolis"
              width={300}
              height={100}
              src={"/rocher.png"}
              className="bg-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
