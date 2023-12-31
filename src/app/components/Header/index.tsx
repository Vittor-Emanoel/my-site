import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Quem sou",
    href: "#about",
  },

  {
    label: "Projetos",
    href: "#about",
  },

  {
    label: "Contato",
    href: "#about",
  },
];

export function Header() {
  return (
    <header className="bg-[#050610] w-full fixed top-0 z-[100]">
      <div className="py-6 px-32  flex items-center justify-between ">
        <div>
          <Image
            className="max-sm:w-20 max-sm:h-50"
            src="/logo.svg"
            width={110}
            height={34}
            alt="Vittor Logo"
          />
        </div>
        <nav className="flex gap-6 max-sm:hidden ">
          {NAV_ITEMS.map((item, index) => (
            <Link
              className="cursor-pointer text-center text-neutral-100 text-base font-normal font-Text"
              key={index}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
