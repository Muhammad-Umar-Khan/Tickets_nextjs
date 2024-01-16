import TicketsList from "./TicketsList";

function Tickets() {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <p>
          <small className="text-center">Currently open tickets</small>
        </p>
      </nav>
      <TicketsList />
    </main>
  );
}

export default Tickets;
