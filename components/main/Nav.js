import Link from "next/link";

import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <Link href="/">HOME</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/projects">PROJECTS</Link>
      <Link href="/certifications">CERTIFICATIONS</Link>
      <Link href="/contact">CONTACT</Link>
    </nav>
  );
}
