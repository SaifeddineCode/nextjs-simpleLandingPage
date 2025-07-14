import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3">
      <div>
        <Image
          alt="logo"
          src={"/netwaciila-logo.png"}
          width={100}
          height={70}
        />
      </div>
      <nav>
        <ul className="flex  justify-between gap-3 ">
          <li>
            <a className="text-xs text-white font-semibol" href="/">
              Accueil
            </a>
          </li>
          <li>
            <a
              className="text-xs text-white font-semibol"
              href="/qui-sommes-nous"
            >
              Qui sommes nous
            </a>
          </li>
          <li>
            <a className="text-xs text-white font-semibol" href="/nos-services">
              Nos services
            </a>
          </li>
          <li>
            <a
              className="text-xs text-white font-semibol"
              href="/nos-realisations"
            >
              Nos realisations
            </a>
          </li>
          {/* <li>
            <a className="text-xs text-white font-semibol" href="/contact">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
      <a href="#" className="text-white text-xs bg-[#6e4b99] p-1 rounded-sm">
        Contactez-nous
      </a>
    </div>
  );
}
