import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6"; // swap icons if you prefer
import logo from "../../../assets/Logo/logo.png";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer footer-horizontal footer-center bg-transparent shadow-lg p-10">
            <aside>
                <Link to="/" className="inline-block">
                    <img src={logo} alt="SwiftPick logo" className="h-14 w-auto" />
                </Link>
                <p className="font-bold text-xl">SwiftPick</p>
                <p className="text-sm">
                    Fast, reliable pickup &amp; parcel delivery for homes &amp; businesses.
                </p>
                <p className="text-xs opacity-80 mt-2">
                    © {year} SwiftPick. All rights reserved.
                </p>
            </aside>

            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a
                        href="https://twitter.com/yourhandle"
                        aria-label="SwiftPick on X (Twitter)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#008239] transition-colors"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://youtube.com/yourchannel"
                        aria-label="SwiftPick on YouTube"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#008239] transition-colors"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://facebook.com/yourpage"
                        aria-label="SwiftPick on Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#008239] transition-colors"
                    >
                        <FaFacebookF />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
