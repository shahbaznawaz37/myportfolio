import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex bg-slate-200 p-3 gap-4">
      <Link className="ml-12" href="/">
        Home
      </Link>
      <Link href="/Dashboard">Dashboard</Link>
      <Link href="/Dashboard/Settings">Settings</Link>
      <Link href="/Blog">Blogs</Link>
    </div>
  );
}

export default Header;
