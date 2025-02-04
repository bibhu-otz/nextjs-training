import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
