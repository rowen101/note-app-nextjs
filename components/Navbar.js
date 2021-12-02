import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">FSC Monitoring</a>
      </Link>
      <Link href="/new">
        <a className="navbar-brand">Create Ticket</a>
      </Link>
    </nav>
  );
};
export default Navbar;
