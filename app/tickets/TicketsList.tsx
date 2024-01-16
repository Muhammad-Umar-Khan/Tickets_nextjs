import { Fragment } from "react";

const getTicketsList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const TicketsList = async () => {
  const posts = await getTicketsList();
  return (
    <Fragment>
      {posts.map(
        (post: { userId: number; id: number; title: string; body: string }) => (
          <div key={post.id} className="card my-5">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="pill low">
              <p>Low priority</p>
            </div>
          </div>
        )
      )}
    </Fragment>
  );
};

export default TicketsList;
