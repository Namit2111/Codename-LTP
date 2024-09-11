import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#D2E0FB] flex flex-row items-center justify-between p-4 py-8">
      <h1 className="julius text-2xl font-bold text-center">Linkfolio</h1>
      <nav>
        <ul className="quicksand flex justify-center text-[#474747] space-x-4">
          <li>
            <Link href="/" className="hover:text-[#000]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#000]">
              About
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#000]">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#000]">
              Login/Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
