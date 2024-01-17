// interface TicketDetailsProps {
//   params: {
//     id: number;
//   };
// }
//react-query
const getPostById = async (p_id: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${p_id}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};
async function TicketDetails({ params }: { params: { id: number } }) {
  const { id } = params;
  const post = await getPostById(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{post.title}</h3>
        <p>
          <small>Created by </small>
          {post.userId}
        </p>
        <p>{post.body}</p>
      </div>
    </main>
  );
}

export default TicketDetails;
