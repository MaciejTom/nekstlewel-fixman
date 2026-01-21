"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const reasons = [
  {
    title: "150+ OPINII - WSZYSTKIE 5.0",
    description: "Każdy klient wystawił maksymalną ocenę. Nie 4.9, nie \"prawie wszystkie\" - dosłownie 100% opinii to 5 gwiazdek.",
    image: "/images/image.png"
  },
  {
    title: "19 LAT DOŚWIADCZENIA",
    description: "Prawie dwie dekady w branży remontowej. Widzieliśmy wszystko - od prostych napraw po generalne remonty. Wiemy co może pójść nie tak.",
    image: "/images/image.png"
  },
  {
    title: "212 USŁUG POD JEDNYM DACHEM",
    description: "Hydraulika, elektryka, malowanie, płytki, panele, montaż mebli. Jeden telefon zamiast koordynowania kilku ekip.",
    image: "/images/image.png"
  },
  {
    title: "DORADZAMY NA KAŻDYM KROKU",
    description: "Nie tylko naprawiamy - wyjaśniamy co robimy i dlaczego. Klienci chwalą nas za komunikację i doradztwo.",
    image: "/images/image.png"
  }
]

export function WhyUsAlternative() {
  return (
    <section id="why-us-alt" className="bg-background-alt py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            DLACZEGO MY
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-text-main mb-6 tracking-tight"
          >
            DLACZEGO KLIENCI <br/>
            <span className="text-primary border-b-4 border-primary pb-2">NAS POLECAJĄ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg leading-relaxed"
          >
            150+ pozytywnych opinii. Wszystkie 5 gwiazdek. Zero negatywnych.
            To nie przypadek - to 19 lat solidnej pracy w Stalowej Woli i okolicach.
          </motion.p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-4 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Container with Glow */}
              <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-32 h-32 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              <h3 className="text-lg font-black text-text-main mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-text-main px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-primary-dark transition-colors duration-300 rounded-lg shadow-lg shadow-primary/20"
          >
            Zadzwoń teraz
          </a>
        </div>

      </div>
    </section>
  )
}
