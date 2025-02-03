import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT POSITION
          </Link>
          <Link className="navbar__link relative" href="#">
            ABOUT US
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            CONTACTS
          </Link>
        </div>
      </div>
    </div>
  );
};
