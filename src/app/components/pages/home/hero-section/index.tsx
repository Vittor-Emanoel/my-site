import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full flex max-sm:px-6 px-[115px] py-6 h-[897px] bg-gradient-to-b from-custom-dark to-custom-light">
      <div>
        <div>
          <span className="text-neutral-400 text-base font-medium font-Headings leading-tight tracking-widest">
            Hi, I`m
          </span>

          <span className="text-neutral-100 text-base font-semibold font-Headings leading-tight tracking-widest">
            Vittor Emanoel 👋🏻
          </span>
        </div>
        <h1>Especialista em Desenvolvimento Front-end</h1>
        <p>
          Trabalhei em diversos projetos front-end, desde pequenos websites até
          grandes aplicações web. Essa experiência prática me permitiu
          desenvolver habilidades que me ajudam a criar soluções eficientes e
          eficazes.
        </p>
      </div>
      <Image
        src="./section-image.svg"
        width={520}
        height={473}
        alt="foto do Vittor com o terno azul"
      />
    </section>
  );
};
