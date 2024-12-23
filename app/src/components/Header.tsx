import Link from "next/link";
import NavMenuMobile from "./navMenu-mobile";

export default function Header() {
  return (
    <header>
      <div className="max-w-6xl mx-auto px-16 py-5">
        <div className="flex items-center justify-between">
          <div className="logo w-20 h-12">
            <span className="text-3xl font-bold text-log-blue-900">Logo</span>
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
