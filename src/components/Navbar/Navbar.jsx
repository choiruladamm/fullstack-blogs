import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { links } from "./links";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Jamess
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
