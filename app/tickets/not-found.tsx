import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center">
      <h2>We hit a brick wall.</h2>
      <p>The Ticket you are looking for could not be found</p>
      <p>
        Go back to all <Link href="/tickets">tickets</Link>
      </p>
    </main>
  );
}

export default NotFound;
