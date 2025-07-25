import Link from "next/link";

interface ChildProps {
  pageName: string;
}

export default function UnderConstrutcion({ pageName }: ChildProps) {
  return (
    <div className="m-5 flex flex-col items-center  gap-1">
      <h1 className="text-4xl sm:text-[120px] font-bold text-center">
        <span className="text-lg mr-2">
          la Page{" "}
          <span className="text-[#c27def] uppercase mr-2">{pageName}</span>
          est
        </span>
        En Construction
      </h1>
      <p className="text-gray-700 font-semibold text-xl sm:text-4xl">
        La magie va se produire
      </p>
      <Link
        className="bg-[#c27def] text-lg px-3 py-2 mt-5 sm:mt-10 text-center "
        href={"/contact"}
      >
        Contactez-nous
      </Link>
    </div>
  );
}
