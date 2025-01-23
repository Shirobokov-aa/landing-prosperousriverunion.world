import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-log-blue-900">
        <div className="max-w-6xl mx-auto lg:px-16 px-8 py-5">
          <div className="flex lg:flex-row flex-col justify-between text-white py-10 gap-10">
            <div className="lg:max-w-[33%]">
            <Link href={"/"}>
            <Image src="/img/logo-f.svg" alt="Logo" width={198} height={75} className="object-contain" />
          </Link>

            </div>
            <div className="lg:max-w-[33%]">
              <div className="text-3xl font-bold pb-6">LINK</div>
              <ul className="flex flex-col gap-4 text-xl">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="lg:max-w-[33%]">
              <div className="text-3xl font-bold pb-6">ADDRESS</div>
              <ul className="flex flex-col gap-6 text-lg">
                <li>
                  <Link href={"/"}>info@prosperousriverunion.world</Link>
                </li>
                <li>
                  <Link href={"/"}>Unit 704C, 7/F, Block 3, Nan Fung Industrial City, 18 Tin Hau Road, Tuen  Mun, HONGKONG</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
