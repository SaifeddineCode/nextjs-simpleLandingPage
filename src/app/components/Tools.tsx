import Image from "next/image";

export default function Tools() {
  const tools = [
    {
      toolTitle: "vscode",
      toolImage: "/vscode.png",
    },
    {
      toolTitle: "/nodejs",
      toolImage: "/nodejs.png",
    },
    {
      toolTitle: "/Elementor",
      toolImage: "/Elementor.png",
    },
    {
      toolTitle: "/Adobexd",
      toolImage: "/Adobexd.png",
    },
    {
      toolTitle: "/firebaseofficial",
      toolImage: "/firebaseofficial.png",
    },
    {
      toolTitle: "/react",
      toolImage: "/react.png",
    },
    {
      toolTitle: "/drupal",
      toolImage: "/drupal.png",
    },
    {
      toolTitle: "/python",
      toolImage: "/python.png",
    },
  ];

  return (
    <div className="bg-gray-50 p-10 md:p-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-black font-bold text-3xl md:text-4xl mb-5">
          Notre Approche
        </h3>
        <span className="text-black text-sm text-center">
          Nous gérons vos Systèmes d'Information Clés en Main, vous permettant
          de vous concentrer sur le coeur de vos Métiers.
        </span>
      </div>
      <div className="flex flex-wrap p-5 md:p-10 items-center gap-10 ">
        {tools.map((tool, index) => {
          return (
            <div
              key={index}
              className="w-[calc(50%-40px)]  md:w-[calc(25%-40px)] flex justify-center items-center "
            >
              <Image
                alt={tool.toolTitle}
                src={tool.toolImage}
                width={150}
                height={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
