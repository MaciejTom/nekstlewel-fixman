"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "O nas" },
    { href: "#offer-details", label: "Oferta" },
    { href: "#portfolio", label: "Realizacje" },
    { href: "#reviews", label: "Opinie" },
    { href: "#contact", label: "Kontakt" },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-text-main group cursor-pointer">
          <div className="flex items-center justify-center size-10 bg-primary rounded-lg text-text-main">
            <span className="material-symbols-outlined">construction</span>
          </div>
          <span className="text-2xl font-black tracking-tight uppercase">FIXMAN</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-main text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="tel:739437828"
            className="btn-dark"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>739 437 828</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-text-main"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu nawigacji"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-text-main font-bold hover:bg-gray-50 hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 mt-2 border-t border-gray-200">
              <a
                href="tel:739437828"
                className="btn-dark w-full"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>739 437 828</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
