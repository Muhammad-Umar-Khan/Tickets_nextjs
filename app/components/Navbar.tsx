import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <h1>DOJO Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default Navbar;
