import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default Navbar;
