import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#333] text-[#fff] py-[10px] px-[20px]">
      <nav>
        <ul className="list-none p-0">
          <li className="inline mr-[10px]">
            <Link href="/" className="text-[#fff]">
              Home
            </Link>
          </li>
          <li className="inline mr-[10px]">
            <Link href="/About" className="text-[#fff]">
              About
            </Link>
          </li>
          <li className="inline mr-[10px]">
            <Link href="/Projects" className="text-[#fff]">
              Projects
            </Link>
          </li>
          <li className="inline mr-[10px]">
            <Link href="/blog" className="text-[#fff]">
              Blog
            </Link>
          </li>
          <li className="inline mr-[10px]">
            <Link href="/Contact" className="text-[#fff]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
