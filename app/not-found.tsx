import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem</h2>
      <p>Page is found</p>
      <p>
        Go back <Link href="/">Dashboard</Link>
      </p>
    </main>
  );
};

export default NotFound;
