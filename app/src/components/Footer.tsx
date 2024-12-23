import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-log-blue-900">
        <div className="max-w-6xl mx-auto px-16 py-5">
          <div className="flex lg:flex-row flex-col justify-between text-white py-10 gap-10">
            <div className="lg:max-w-[33%]">
              <div className="text-3xl font-bold pb-6">KARGOPASS</div>
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
              <div className="text-3xl font-bold pb-6">INSTITUTIONAL</div>
              <ul className="flex flex-col gap-4 text-xl">
                <li>
                  <Link href={"/"}>Bank account information</Link>
                </li>
                <li>
                  <Link href={"/"}>Conditions of Carriage</Link>
                </li>
                <li>
                  <Link href={"/"}>Vision and Mission</Link>
                </li>
              </ul>
            </div>
            <div className="lg:max-w-[33%]">
              <div className="text-3xl font-bold pb-6">ADDRESS</div>
              <ul className="flex flex-col gap-4 text-xl">
                <li>
                  <Link href={"/"}>Address goes here</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact : 0850 888 72 77</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
