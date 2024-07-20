import Link from "next/link";
import logo from './dojo-logo.png';
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
        <Image src={logo} alt="logo" width={70} placeholder='blur' quality={100}/>
      <h1>Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">New</Link>
    </nav>
  );
}
