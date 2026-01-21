"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    number: "150+",
    title: "Opinii - wszystkie 5.0",
    description: "Każdy klient wystawił maksymalną ocenę. Nie 4.9, nie \"prawie wszystkie\" - dosłownie 100% opinii to 5 gwiazdek.",
    quote: "Całokształt prac remontowych mieszkania został wykonany perfekcyjnie, bez zastrzeżeń.",
    author: "Jacek",
    service: "Remont kuchni",
    icon: "star",
    filled: true
  },
  {
    number: "19",
    title: "Lat doświadczenia",
    description: "Prawie dwie dekady w branży remontowej. Widzieliśmy wszystko - od prostych napraw po generalne remonty.",
    quote: "Profesjonalnie, rzetelnie, bardzo dokładnie i co najważniejsze, z szacunkiem do klienta.",
    author: "Marek",
    service: "Adaptacja poddasza",
    icon: "verified",
    filled: false
  },
  {
    number: "200+",
    title: "Usług pod jednym dachem",
    description: "Hydraulika, elektryka, malowanie, płytki, panele, montaż mebli. Jeden telefon zamiast koordynowania kilku ekip.",
    quote: "Trafiłam na bardzo solidną i profesjonalną firmę. Usługa została wykonana terminowo i sprawnie.",
    author: "Ewa",
    service: "Instalacja wodna",
    icon: "handyman",
    filled: false
  },
  {
    number: null,
    title: "Doradzamy na każdym kroku",
    description: "Nie tylko naprawiamy - wyjaśniamy co robimy i dlaczego. Klienci chwalą nas za komunikację i doradztwo.",
    quote: "Krok po kroku objaśniał i doradzał co było ogromnym wsparciem w całym procesie remontu.",
    author: "Małgorzata",
    service: "Remont mieszkania",
    icon: "support_agent",
    filled: false
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export function WhyUsSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-tagline">Dlaczego my?</span>
          <h2 className="section-title">Dlaczego klienci nas polecają</h2>
          <p className="section-description">
            150+ pozytywnych opinii. Wszystkie 5 gwiazdek. Zero negatywnych. To nie przypadek - to 19 lat pracy.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-background-alt rounded-2xl p-8 overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-primary/20"
            >
              {/* Big number background */}
              <span className="absolute -top-6 -right-6 text-[180px] font-black text-primary/10 leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-text-main text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-text-main transition-colors">
                  <span className={`material-symbols-outlined ${reason.filled ? 'filled' : ''} text-3xl`}>
                    {reason.icon}
                  </span>
                </div>

                {/* Title with number */}
                <h3 className="text-2xl font-black mb-4">
                  {reason.number && <span className="text-primary">{reason.number} </span>}
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-lg mb-8">{reason.description}</p>

                {/* Quote card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <p className="text-text-main italic">&ldquo;{reason.quote}&rdquo;</p>
                  <p className="text-xs text-text-muted mt-2">— {reason.author} | {reason.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
