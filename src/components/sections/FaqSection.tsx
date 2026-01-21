"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Jaki jest zasięg działania?",
    answer: "Stalowa Wola i okolice - Tarnobrzeg, Sandomierz, Nisko, Janów Lubelski, Nowa Dęba. Przy większych zleceniach dojeżdżamy dalej."
  },
  {
    question: "Jak szybko możecie przyjechać?",
    answer: "Przy awariach (hydraulika, elektryka) - zwykle tego samego lub następnego dnia. Remonty planujemy z wyprzedzeniem, zależy od obłożenia."
  },
  {
    question: "Czy robicie małe naprawy czy tylko duże remonty?",
    answer: "Jedno i drugie. Przyjedziemy powiesić szafkę albo zrobić remont całego mieszkania. Ponad 200 usług to nie przypadek."
  },
  {
    question: "Jak wygląda wycena?",
    answer: "Małe naprawy wyceniamy od razu przez telefon. Większe remonty - po oględzinach, żeby podać realną cenę bez niespodzianek."
  },
  {
    question: "Czy sprzątacie po sobie?",
    answer: "Tak. Zabezpieczamy meble i podłogi przed rozpoczęciem, sprzątamy po zakończeniu. Klienci chwalą nas właśnie za to."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="section-tagline">FAQ</span>
          <h2 className="section-title">Najczęściej zadawane pytania</h2>
          <p className="section-description">
            Odpowiedzi na pytania, które najczęściej słyszymy od klientów.
          </p>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">help</span>
                  <span className="font-bold text-text-main">{faq.question}</span>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-outlined text-text-muted"
                  aria-hidden="true"
                >
                  expand_more
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-10 text-text-muted">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-text-muted mb-4">Masz inne pytanie?</p>
          <a
            href="tel:739437828"
            className="btn-primary"
          >
            <span className="material-symbols-outlined">call</span>
            Zadzwoń: 739 437 828
          </a>
        </motion.div>
      </div>
    </section>
  )
}
