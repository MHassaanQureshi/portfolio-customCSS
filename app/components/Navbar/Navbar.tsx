"use client";

import { useState } from "react";
import Link from "next/link";
import "./style.css"
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="container">
            <div className="container2">
                <h1 className="logo">HQ</h1>
                
                <div className="block">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="whitetext"
                    >
                        {menuOpen ? (
                            <svg
                                className="size"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="size"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
               
                <ul className="Nav Navtext">
                    <li>
                        <Link href="/" className="Links">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/Aboutpage" className="Links">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/skillspage" className="Links">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/projectspage" className="Links">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contactpage" className="Links">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            
            {menuOpen && (
                <div >
                    <ul className="mobile">
                        <li>
                        <Link href="/" className="Links-mobile">
                            Home
                        </Link>
                        </li>
                        <li>
                            <Link href="/Aboutpage" className="links-mobile">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/skillspage"  className="links-mobile" >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="/projectspage"  className="links-mobile" >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contactpage"  className="links-mobile">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}