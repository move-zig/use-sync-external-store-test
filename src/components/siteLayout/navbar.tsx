'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC, MouseEventHandler } from 'react';
import { useEffect, useRef } from 'react';

export const Navbar: FC = () => {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Close the dropdown whenever the pathname changes
  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  }, [ pathname ]);

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = () => {
    // Removes focus from the active element (the dropdown toggle/link)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="inline-flex">
          <Link href="/"><span className="font-bold font-mono">useSyncExternalStore</span></Link>
        </div>
        <div className="hidden md:inline-flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/theHook">The Hook</Link></li>
            <li><Link href="/customHooks">Custom Hooks</Link></li>
            <li>
              <details ref={detailsRef}>
                <summary>Tests</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li><Link href="/tests/tear">Tearing</Link></li>
                  <li><Link href="/tests/speed">Speed</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="/library">Library</Link></li>
          </ul>
        </div>

        <div className="dropdown dropdown-end md:hidden">
          <button tabIndex={0} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
          </button>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link onClick={handleLinkClick} href="/theHook">The Hook</Link></li>
            <li><Link onClick={handleLinkClick} href="/customHooks">Custom Hooks</Link></li>
            <li><Link onClick={handleLinkClick} href="/tests/tear">Tearing Test</Link></li>
            <li><Link onClick={handleLinkClick} href="/tests/speed">Speed Test</Link></li>
            <li><Link onClick={handleLinkClick} href="/library">Library</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
