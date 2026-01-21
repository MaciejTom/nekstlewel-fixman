"use client"

import { motion } from "framer-motion"

const reviews = [
  {
    quote: "Ogromnie polecam Pana Wojtka! Bardzo rzetelny, uczciwy, sympatyczny w kontakcie. Krok po kroku objaśniał i doradzał co było ogromnym wsparciem w całym procesie remontu. Jestem bardzo zadowolona.",
    author: "Małgorzata",
    location: "Stalowa Wola",
    service: "Remont mieszkania",
    featured: false
  },
  {
    quote: "Pan Wojciech bardzo rzetelnie i fachowo podchodzi do każdej zleconej mu pracy. Przed wykonaniem każdej pracy otrzymywałem cały plan działania. Pan Wojciech przed malowaniem zabezpieczył wszystkie kontakty, listwy, żyrandole. Nic nie zostało zabrudzone.",
    author: "Paweł",
    location: "Lubzina",
    service: "Malowanie ścian",
    featured: true
  },
  {
    quote: "Po raz kolejny korzystam z usług Pana Wojciecha, profesjonalista w każdym calu, dobrze doradzi, sympatyczny, sumienny, dokładny. Na pewno jeszcze nie raz skorzystam z jego usług.",
    author: "Maciek",
    location: "Stalowa Wola",
    service: "Remont łazienki",
    featured: false
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function ReviewsSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-200" id="reviews">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-tagline">Opinie</span>
          <h2 className="section-title">Co mówią klienci</h2>
          <p className="section-description">
            Ponad 150 opinii w internecie - Wszystkie 5 gwiazdek.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-8 items-start"
        >
          {reviews.map((review, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className={`bg-background-alt p-8 rounded-2xl relative ${
                review.featured
                  ? "border-2 border-primary shadow-lg"
                  : "border border-transparent"
              }`}
            >
              {/* Quote icon */}
              <span className="material-symbols-outlined text-4xl text-primary/30 absolute top-6 right-6">
                format_quote
              </span>

              {/* Stars */}
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined filled text-sm">
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className={`text-text-main mb-6 ${
                  review.featured ? "font-bold text-lg" : "font-medium"
                }`}
              >
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-text-main font-bold text-sm">
                    {review.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">
                    {review.author}{review.location && `, ${review.location}`}
                  </p>
                  <p className="text-xs text-text-muted">{review.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See all reviews link */}
        <div className="flex justify-center mt-10">
          <a
            href="https://fixly.pl/profil/wojciech-belzak-1228300"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-main font-bold border-b-2 border-primary hover:text-primary transition-colors pb-0.5"
          >
            Zobacz wszystkie opinie na Fixly
            <span className="material-symbols-outlined text-sm" aria-hidden="true">open_in_new</span>
          </a>
        </div>
      </div>
    </section>
  )
}
