import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 w-full text-center py-8 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Shahbaz Nawaz</h1>
      <p className="mt-1">MERN Stack Developer</p>
    </header>
  );
}

export default Header;
