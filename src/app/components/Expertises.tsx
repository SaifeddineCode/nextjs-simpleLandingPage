import Image from "next/image";
import Link from "next/link";

export default function Expertises() {
  const Expertises = [
    {
      title: "Consulting",
      subTitle: "L'expertise qui transforme vos défis en solutions",
      text: "Netwaciila accompagne votre entreprise dans la transformation digitale de vos processus clés. Nos consultants expérimentés analysent vos besoins métiers pour concevoir des solutions informatiques parfaitement adaptées à vos enjeux opérationnels et à votre stratégie globale. Nous traduisons vos exigences spécifiques en architectures techniques performantes et évolutives.Notre méthodologie collaborative nous permet de comprendre en profondeur vos défis uniques et vos contraintes organisationnelles. Nous combinons expertise sectorielle et connaissance des dernières technologies pour vous proposer des recommandations pragmatiques et immédiatement actionnables. Chaque solution est pensée pour s'intégrer harmonieusement à votre écosystème existant.De l'analyse initiale à la mise en œuvre, Netwaciila garantit des résultats concrets et mesurables pour votre entreprise. Nos interventions visent systématiquement à créer de la valeur durable, que ce soit par l'optimisation des coûts, l'amélioration de la productivité ou le renforcement de votre position concurrentielle. Nous matérialisons votre vision technologique avec des livrables opérationnels et des bénéfices tangibles.",
      image: "/consulting.png",
    },
    {
      title: "Designing",
      subTitle: "L'art de donner vie à votre identité digitale",
      text: "Netwaciila allie expertise en UX design, ergonomie web et création graphique pour concevoir des interfaces qui incarnent parfaitement votre identité visuelle. Nos designers transforment vos valeurs et votre ADN en expériences utilisateur fluides et mémorables.Nous appliquons une méthodologie centrée sur l'utilisateur, depuis les wireframes jusqu'aux maquettes haute-fidélité. Chaque élément graphique est pensé pour guider naturellement l'utilisateur tout en renforçant votre image de marque.De la conception à l'implémentation, nous veillons à ce que le rendu final soit à la fois esthétique, fonctionnel et parfaitement aligné avec vos objectifs business. Nos créations allient beauté visuelle et performance technique.",
      image: "/designing.png",
    },
    {
      title: "Coding",
      subTitle: "Des lignes de code qui créent de la valeur",
      text: "Netwaciila développe des applications web et mobiles haute performance pour Android et iOS. Nos solutions techniques s'appuient sur les dernières technologies et des architectures robustes, garantissant évolutivité et sécurité.Notre équipe pluridisciplinaire rassemble développeurs full-stack, spécialistes DevOps, testeurs QA et chefs de projet agile. Cette synergie nous permet de livrer des produits stables, optimisés et parfaitement adaptés à vos besoins.Nous combinons excellence technique et approche métier pour transformer vos idées en solutions concrètes. Du MVP aux applications complexes, chaque ligne de code est écrite dans l'optique de créer de la valeur durable.",
      image: "/coding.png",
    },
    {
      title: "Sous-traitance informatique",
      subTitle: "Vos projets entre des mains expertes",
      text: "Netwaciila vous offre l'accès à des compétences IT pointues sans les contraintes de recrutement en interne. Nos équipes expérimentées deviennent le prolongement de vos services techniques.Nous prenons en charge tout ou partie de vos projets informatiques, avec une gestion transparente et des coûts maîtrisés. Cette flexibilité vous permet de vous concentrer sur votre cœur de métier en toute sérénité.Notre modèle s'adapte à vos besoins : staff augmentation, forfait au projet ou gestion complète. Nous garantissons qualité, respect des délais et alignement parfait avec vos processus internes.",
      image: "/sous-traitance.jpg",
    },
    {
      title: "Marketing Digital",
      subTitle: "Boostez votre visibilité en ligne",
      text: "Netwaciila construit des stratégies digitales sur-mesure pour booster votre visibilité en ligne. Notre approche data-driven optimise votre présence sur les moteurs de recherche (SEO et SEA) et les réseaux sociaux.Nous combinons expertise technique et créativité pour développer votre notoriété digitale. Campagnes ciblées, contenu engageant et analyse fine des performances : chaque action est mesurable et ajustée en temps réel.Notre objectif : transformer votre trafic en leads qualifiés et fidéliser votre audience. Nous mettons en place des dispositifs complets qui alignent référencement naturel, publicité payante et expérience utilisateur.",
      image: "/marketing-digital.jpg",
    },
    {
      title: "Formation, Coaching et Certifications",
      subTitle: "Montez en compétences avec les meilleurs",
      text: "Grâce à notre partenariat avec l'Université Universiapolis d'Agadir, Netwaciila prépare vos équipes aux certifications les plus recherchées (Cisco, Google, Microsoft...). Nos programmes sur-mesure combinent théorie et mise en pratique.Nos formateurs experts accompagnent vos collaborateurs dans l'acquisition de compétences techniques pointues. Méthodologie adaptative, cas concrets et suivi personnalisé garantissent une montée en compétences efficace.Que ce soit en présentiel ou en distanciel, nous proposons des parcours certifiants qui valorisent votre capital humain. Une approche gagnant-gagnant qui renforce à la fois les compétences individuelles et la performance organisationnelle.",
      image: "/formation-coaching-certifications.jpg",
    },
  ];

  return (
    <div className="flex my-[100px] px-40 flex-col justify-center items-center ">
      {/* <div className="flex flex-col justify-center items-center my-5">
        <h2 className=" text-black text-3xl font-bold">Expertises</h2>
        <p className="text-gray-500 text-sm ">
          Plusieurs domaines de compétences. Avec une seul mission.. Accélerer
          votre transformation vers le digital.
        </p>
      </div> */}
      <div className="flex min-h-screen flex-col flex-wrap justify-between w-full gap-16  ">
        {Expertises.map((e, index) => {
          return (
            <div
              key={index}
              className={`bg-white  h-full  flex gap-10 items-start ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }  justify-between `}
            >
              <div className=" relative h-[300px] w-1/2  overflow-hidden ">
                <Image
                  title={e.title}
                  fill
                  className="object-cover hover:scale-105 duration-500 transition-all "
                  alt="expertise-image"
                  src={e.image}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-2 text-black">
                <div className=" text-[10px] flex gap-2 justify-start  items-center ">
                  <span className="text-sm">{e.subTitle}</span>
                  <div className="w-1/3 h-[0.1px] bg-[#c27def] "></div>
                </div>
                <h3 className="text-4xl font-bold mb-5">{e.title}</h3>
                <p className="text-sm leading-6 text-justify ">{e.text}</p>
                <Link
                  href={"/contact"}
                  className="bg-[#c27def] hover:border hover:bg-white hover:text-[#c27def]   font-bold text-xs text-white text-center  py-2 rounded-md"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
