import Link from "next/link";
import Image from "next/image";
import NavMenuMobile from "./navMenu-mobile";

export default function Header() {
  return (
    <header>
      <div className="max-w-6xl mx-auto lg:px-16 px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="logo">
          <Link href={"/"}>
            <Image src="/img/logo-h.svg" alt="Logo" width={198} height={75} className="object-contain" />
          </Link>
          </div>
          <nav>
            <ul className="lg:flex hidden gap-4 text-lg font-semibold">
              <li className="hover:text-log-blue-950">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-log-blue-950">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="hover:text-log-blue-950">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
            <NavMenuMobile />
          </nav>
        </div>
      </div>
    </header>
  );
}
