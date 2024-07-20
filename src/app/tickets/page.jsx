import { Suspense } from "react";
import Ticketlist from "./Ticketlist";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <small>Currently available tickets</small>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <Ticketlist />
      </Suspense>
    </main>
  );
}
