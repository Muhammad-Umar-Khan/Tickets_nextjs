import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/dojo-logo.png";

function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Dojo Help Desk Logo" width={70} />
      <h1>DOJO Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default Navbar;
