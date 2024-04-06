import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-4 left-5 p-3 flex flex-col gap-4 w-40 h-50 bg-slate-200">
      <Link className="hover:text-blue-600" href="/">
        Home
      </Link>
      <Link className="hover:text-blue-600" href="/Dashboard">
        Experience
      </Link>
      <Link className="hover:text-blue-600" href="/Dashboard/Settings">
        Projects
      </Link>
      <Link className="hover:text-blue-600" href="/Blog">
        Education
      </Link>
    </div>
  );
}

export default Header;
