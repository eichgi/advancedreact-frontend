import React from 'react';
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href='/sell'>
        <a>SELL!</a>
      </Link>
      <Link href='/'>
        <a>HOME!</a>
      </Link>
    </div>
  );
};

export default Nav;