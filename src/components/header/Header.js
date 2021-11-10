import React from "react";
import { Link } from "react-router-dom";

import ThemeSelect from "./ThemeSelect";

export default function Header() {
  return (
    <nav className="flex py-10 justify-between w-11/12 mx-auto">
      <div className="text-3xl font-bold text-white tracking-widest">
        <Link to="/">Stonk Watch</Link>
      </div>

      <div>
        <ThemeSelect />
      </div>
    </nav>
  );
}
