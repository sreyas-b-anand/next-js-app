import Link from "next/link";


async function getTickets() {
  await new Promise(resolve => setTimeout(resolve , 3000))
  const response = await fetch("http://localhost:4000/tickets" , {next : {revalidate : 0}});
  return response.json();
}

export default async function Ticketlist() {
  const tickets = await getTickets();
  return (
    <>
      <div>
        {tickets.map((ticket) => (
          <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
          <div key={ticket.id} className="card my-3">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
          </div></Link>
        ))}
        {tickets.length === 0 && <p>There are no tickets...!!!</p>}
      </div>
    </>
  );
}
