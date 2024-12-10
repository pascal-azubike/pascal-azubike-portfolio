import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./footer/social-links";

/**
 * Footer Component
 * Main footer section of the website containing branding, navigation,
 * copyright information, and social media links.
 * 
 * Layout Structure:
 * - Brand section (logo + name)
 * - Navigation links
 * - Copyright notice
 * - Social media links
 */
const Footer = () => {
  return (
    <footer className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8 mt-40">
      <div className="flex flex-col justify-center items-center py-10 relative">
        {/* Brand Section - Links to homepage */}
        <Link href={"/"} className="flex items-center mb-4">
          <div className="font-bold text-sm flex items-center justify-center text-white space-x-2 md:text-xl">
            <Image
              src="/assets/images/pascal.jpg"
              alt="Azubike"
              width={32}
              height={32}
              className="rounded-full h-8 w-8 mr-2"
            />
          </div>
          <h2 className="text-xl font-bold">Azubike Pascal</h2>
        </Link>

        {/* Navigation Menu - Responsive layout (stack on mobile, row on desktop) */}
        <div className="flex items-center flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <Link className="text-zinc-100 text-sm relative" href="/about">
            <span className="relative z-10 px-2 py-2 inline-block">About</span>
          </Link>
          <Link className="text-zinc-100 text-sm relative" href="/projects">
            <span className="relative z-10 px-2 py-2 inline-block">Projects</span>
          </Link>
         
        </div>

        {/* Copyright Notice - Updates year automatically */}
        <p className="text-zinc-200 text-sm font-light text-center max-w-fit mx-auto mt-8 border-t border-zinc-800 pt-4">
          © {new Date().getFullYear()} Azubike Pascal. All rights reserved.
        </p>

        {/* Social Media Links Section */}
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
