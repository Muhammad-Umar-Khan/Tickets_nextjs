const getTicketsList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const TicketsList = async () => {
  const posts = await getTicketsList();
  return <h1>All Tickets list</h1>;
};

export default TicketsList;
