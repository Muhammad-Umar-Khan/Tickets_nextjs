import Link from "next/link";
import { Fragment } from "react";

const getTicketsList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 300 },
  });
  return res.json();
};
const TicketsList = async () => {
  const posts = await getTicketsList();
  return (
    <Fragment>
      {posts.map(
        (post: { userId: number; id: number; title: string; body: string }) => (
          <Link key={post.id} href={`http://localhost:3000/tickets/${post.id}`}>
            <div className="card my-5">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="pill low">
                <p>Low priority</p>
              </div>
            </div>
          </Link>
        )
      )}
      {posts.lenght === 0 && <p>No open tickets </p>}
    </Fragment>
  );
};

export default TicketsList;
