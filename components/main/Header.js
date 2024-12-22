"use client";

import { useRef } from "react";
import { CgMenuGridO } from "react-icons/cg";

import classes from "./Header.module.css";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  const navRef = useRef(null);

  const handleShowNav = () => {
    navRef.current.classList.toggle(classes.display);
  };

  return (
    <header className={classes.header}>
      <Link href="/">
        <h2>JahByte</h2>
      </Link>
      <CgMenuGridO className={classes.menu} onClick={handleShowNav} />
      <div className={classes.nav} ref={navRef}>
        <Nav />
      </div>
    </header>
  );
}
