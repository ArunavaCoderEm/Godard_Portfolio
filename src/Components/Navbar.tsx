import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar():React.ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex h-20 w-full items-center px-4 md:px-6">
        <Link to="#" className="mr-6 flex items-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="ml-auto flex items-center md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {menuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <HamburgerIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex ml-auto">
          <Link
            to="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contact
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Link
              to="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function MountainIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function HamburgerIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
