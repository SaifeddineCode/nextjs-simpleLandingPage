import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between flex-1 max-w-2/3 py-5 ">
        <div className="w-1/2">
          <h3 className="text-4xl font-bold text-gray-700 ">NetWaciila</h3>
          <p className="text-sm text-justify leading-6">
            Nous Accélérons votre transformation vers le Digital. Ainsi que nous
            Concevons pour vous des solutions digitales innovantes et
            performantes,tout en Accompagnant vos Equipes dans leurs
            Transformations.
          </p>
          <p className="text-sm text-justify leading-6">
            Entreprise d'ingénierie et services informatiques, composée
            d'experts internationaux dans des technologies de développement
            d'application web & desktop. Nous accompagnons nos clients dans
            leurs transformations digitales, dans la phase d'étude ou la phase
            d'implémentation. Depuis 2015, nos clients bénéficient de notre
            créativité ergonomique, de notre maîtrise du métier et de notre
            puissance de travail.
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            alt="netwaciila-ceo"
            width={350}
            height={100}
            src={"/ceo.png"}
            className=" border-[15px] border-r-[#3a0a6b] border-b-[#3a0a6b] border-t-[#0f0038] border-l-[#0f0038]"
          />
        </div>
      </div>
    </div>
  );
}
