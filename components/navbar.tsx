"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// -------------------------
// NAVIGATIONS V1
// -------------------------
// const navigationLinks = [
//   { name: "Home", href: "/" },
//   { name: "Mobile Development", href: "/mobile-development" },
//   { name: "APK Development", href: "/apk-development" },
//   { name: "CCTV Installation", href: "/cctv-installation" },
//   { name: "GPS Tracking", href: "/gps-tracking" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// -------------------------
// MEGA MENU OBJECT
// -------------------------

type MegaMenuItem = {
  name: string;
  href: string;
};

type MegaMenuSection = {
  title: string;
  links: MegaMenuItem[];
};

type MegaMenus = {
  [key: string]: MegaMenuSection[];
};


// -------------------------
// MEGA MENU DATA
// -------------------------
const megaMenus: MegaMenus = {
  Solutions: [
    {
      title: "ERP Solutions",
      links: [
        { name: "School ERP", href: "/school-erp" },
        { name: "College ERP", href: "/college-erp" },
        { name: "Hospital ERP", href: "/hospital-erp" },
      ],
    },
    {
      title: "Enterprise Solutions",
      links: [
        { name: "ERP Systems", href: "/erp-systems" },
        { name: "POS Software", href: "/pos-software" },
      ],
    },
    {
      title: "Information Management",
      links: [
        { name: "Document Management", href: "/document-management" },
        { name: "Inventory Management", href: "/inventory-management" },
      ],
    },
  ],

  Services: [
    {
      title: "Security Systems",
      links: [
        { name: "CCTV Installation", href: "/cctv-installation" },
        { name: "Access Control", href: "/access-control" },
      ],
    },
    {
      title: "Tracking Systems",
      links: [
        { name: "GPS Tracking", href: "/gps-tracking" },
      ],
    },
  ],

  "AI Services": [
    {
      title: "AI Products",
      links: [
        { name: "AI Surveillance", href: "/ai-surveillance" },
        { name: "AI Automation", href: "/ai-automation" },
      ],
    },
  ],
};


// -------------------------
// NAVIGATIONS V2
// -------------------------
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },

  { name: "Solutions", megaMenu: true },
  { name: "Services", megaMenu: true },

  { name: "Clients", href: "/clients" },
  { name: "AI Services", megaMenu: true },

  { name: "Career", href: "/career" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/nav-logo.png"
              alt="AmSecureTech"
              width={210}
              height={40}
              priority
            />
          </Link>

          {/* 
          // default header logo
          <Link href="/" className="font-semibold text-lg text-primary flex-shrink-0">
            AM SecureTech
          </Link> 
          */}

          {/* ------------------------------------ */}
          {/* DESKTOP NAV V1 */}
          {/* ------------------------------------ */}
          {/* 
          <div className="hidden md:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div> 
          */}

          {/* ------------------------------------ */}
          {/* DESKTOP NAV V2 (MEGA MENU SUPPORT) */}
          {/* ------------------------------------ */}
          <div className="hidden md:flex items-center gap-4">

            {navigationLinks.map((link) => {

              if (link.megaMenu) {
                return (
                  <div key={link.name} className="relative group">

                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-accent">
                      {link.name}
                      <ChevronDown size={16} />
                    </button>

                    {/* Mega Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-[720px] bg-white shadow-xl border border-border rounded-xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                      <div className="grid grid-cols-3 gap-10">

                        {megaMenus[link.name]?.map((section: MegaMenuSection) => (

                          <div key={section.title}>

                            <h4 className="text-sm font-semibold text-gray-900 mb-3">
                              {section.title}
                            </h4>

                            <ul className="space-y-2 text-sm text-gray-600">

                              {section.links.map((item: MegaMenuItem) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="hover:text-accent transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}

                            </ul>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href || "/"}
                  className="px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              );

            })}

          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/contact"
              className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-primary hover:bg-secondary transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">

            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href || "/"}
                className="block px-3 py-2 text-sm font-medium text-primary hover:bg-secondary rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block bg-accent text-white px-3 py-2 rounded-md font-medium text-sm hover:bg-orange-600 transition-colors duration-200 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}