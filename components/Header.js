import React, { useContext } from "react";
import Link from "next/link";
import AuthContext from "./AuthContext";

export default function Header() {
  const { doLogin } = useContext(AuthContext);
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      <Link href="/blog">
        <a>Blog</a>
      </Link>{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <button onClick={doLogin}>Log in</button>
    </header>
  );
}
