// interface TicketDetailsProps {
//   params: {
//     id: number;
//   };
// }
function TicketDetails({ params }: { params: { id: number } }) {
  const { id } = params;
  return <p>{id}</p>;
}

export default TicketDetails;
