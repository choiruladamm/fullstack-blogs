import Link from "next/link";
import React from "react";
import { links } from "./links";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Jamess</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
