"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background-dark text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center size-10 bg-primary rounded-lg text-text-main">
                <span className="material-symbols-outlined">construction</span>
              </div>
              <span className="text-2xl font-black uppercase">Fixman</span>
            </div>
            <p className="text-gray-400 mb-4">
              Remonty i naprawy w Stalowej Woli i okolicach. 19 lat doświadczenia, 150+ pozytywnych opinii.
            </p>
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined filled text-sm">star</span>
              ))}
              <span className="text-gray-400 ml-2 text-sm">5.0 (150+ opinii)</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="#offer-details" className="text-gray-400 hover:text-primary transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Realizacje
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-gray-400 hover:text-primary transition-colors">
                  Opinie
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Remonty mieszkań</li>
              <li>Hydraulika</li>
              <li>Elektryka</li>
              <li>Malowanie</li>
              <li>Montaż i naprawy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <a href="tel:739437828" className="text-gray-400 hover:text-primary transition-colors">
                  739 437 828
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-gray-400">Stalowa Wola</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span className="text-gray-400">Pon-Sob: 7:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 FIXMAN - Wojciech Bełzak. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
