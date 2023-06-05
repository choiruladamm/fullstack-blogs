import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const Button = ({ children, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{children}</button>
    </Link>
  );
};

export default Button;
