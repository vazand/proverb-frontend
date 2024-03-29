import React from "react";

function Header({ title }) {
  return (
    <header className="text-center bg-orange-400 text-black p-2">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
