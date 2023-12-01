import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center gap-6 py-28 px-6 bg-gradient-to-b from-custom-dark to-custom-light">
      <div className="flex flex-col justify-center">
        <div className="flex gap-2">
          <span className="text-neutral-400 text-base font-medium font-Headings leading-tight tracking-widest">
            Hi, I`m
          </span>

          <span className="text-neutral-100 text-base font-semibold font-Headings leading-tight tracking-widest">
            Vittor Emanoel 👋🏻
          </span>
        </div>

        <div className="w-[645px] text-neutral-100 mt-6">
          <h1 className="text-[64px] font-semibold font-Headings leading-[76.80px]">
            Especialista em Desenvolvimento Front-end
          </h1>
          <p className="w-[540px] text-neutral-400 text-lg font-normal font-Text leading-[27px] mt-4">
            Trabalhei em diversos projetos front-end, desde pequenos websites
            até grandes aplicações web. Essa experiência prática me permitiu
            desenvolver habilidades que me ajudam a criar soluções eficientes e
            eficazes.
          </p>

          <div className="mt-16 flex items-center gap-4 cursor-pointer">
            <a href="" className="border-b font-bold">
              Comece um projeto
            </a>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7188 6.71875C13.9062 6.51042 14 6.27083 14 6C14 5.72917 13.9062 5.48958 13.7188 5.28125L8.71875 0.28125C8.51042 0.09375 8.27083 0 8 0C7.72917 0 7.48958 0.09375 7.28125 0.28125C7.09375 0.489583 7 0.729167 7 1C7 1.27083 7.09375 1.51042 7.28125 1.71875L10.5938 5H1C0.708333 5 0.46875 5.09375 0.28125 5.28125C0.09375 5.46875 0 5.70833 0 6C0 6.29167 0.09375 6.53125 0.28125 6.71875C0.46875 6.90625 0.708333 7 1 7H10.5938L7.28125 10.2812C7.09375 10.4896 7 10.7292 7 11C7 11.2708 7.09375 11.5104 7.28125 11.7188C7.48958 11.9062 7.72917 12 8 12C8.27083 12 8.51042 11.9062 8.71875 11.7188L13.7188 6.71875Z"
                fill="#F7F7F7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[560px] flex items-center justify-center relative">
        <Image
          className="object-cover absolute top-10 -left-10 "
          src="./stronk1.svg"
          width={120}
          height={57}
          alt="foto do Vittor com o terno azul"
        />

        <Image
          className="object-cover absolute -right-2 bottom-16"
          src="./stronk2.svg"
          width={120}
          height={57}
          alt="foto do Vittor com o terno azul"
        />

        <Image
          className="object-cover"
          src="./section-image.svg"
          width={520}
          height={673}
          alt="foto do Vittor com o terno azul"
        />
      </div>
    </section>
  );
};
