/**
 * FloatingNavbar Component
 * A sleek navigation bar that provides site-wide navigation and user profile access.
 * Features a responsive design that adapts beautifully from mobile to desktop.
 * 
 * Layout Structure:
 * - Profile section (image + name)
 * - Main navigation links
 * - CV download button
 * - Mobile menu for smaller screens
 */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

/**
 * NavbarItem Component
 */
const NavbarItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href}>
    <span className="text-white hover:text-gray-300 transition-colors duration-200">
      {label}
    </span>
  </Link>
);

/**
 * ProfileSection Component
 * Displays the user's profile image and name with loading states
 * Handles navigation and dialog triggers for profile interactions
 */
const ProfileSection = () => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const handleContainerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleContainerClick}
      className="flex items-center space-x-4 cursor-pointer"
    >
      <div onClick={handleImageClick}>
        <Image
          src="/assets/images/pascal.jpg"
          alt="Azubike Pascal"
          width={300}
          height={300}
          className={`rounded-full w-9 h-9 transition-all duration-300 ${
            isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>

      <Link href="/" className="text-white font-semibold">
        Azubike Pascal
      </Link>
    </div>
  );
};

/**
 * Main navigation items configuration
 * Centralized list of all available navigation destinations
 */
const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export const FloatingNavbar = () => {
  return (
    <nav className="bg-zinc-900 w-full">
      <div className="max-w-5xl mx-auto py-4 px-6 flex items-center justify-between">
        <ProfileSection />

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <NavbarItem key={index} {...item} />
          ))}
        </div>

        {/* Desktop CV Download Button - Hidden on mobile */}
        <div className="hidden md:block">
          <a
            href="/assets/pascalResume.pdf"
            download
            className="bg-gradient-to-br from-zinc-700 to-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-br hover:from-zinc-700 hover:to-zinc-800 hover:shadow-lg hover:shadow-zinc-700/50 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Sheet
         * A slide-out menu from the top for mobile devices that includes:
         */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-zinc-900 z-[9999] text-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <span className="text-white hover:text-gray-300 transition-colors duration-200">
                      {item.label}
                    </span>
                  </Link>
                ))}
                <a
                  href="/assets/pascalResume.pdf"
                  download
                  className="bg-gradient-to-br from-zinc-700 to-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-700 transition-colors duration-200 mt-4"
                >
                  Download CV
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
