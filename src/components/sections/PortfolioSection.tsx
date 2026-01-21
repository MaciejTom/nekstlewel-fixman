"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    image: "/images/1228300-413fa9a06d3c0b45baef359721b4aa24.jpg",
    location: "Stalowa Wola",
    title: "Remont łazienki - z PRL-owskiej w nowoczesną",
    category: "lazienki"
  },
  {
    image: "/images/1228300-658857cd0d8459ee41d1d04ba598c568.jpg",
    location: "Nisko",
    title: "Remont kuchni - projekt klienta 1:1",
    category: "kuchnie"
  },
  {
    image: "/images/1228300-07a500c33fa652b7fb1342e764300325.jpg",
    location: "Stalowa Wola",
    title: "Malowanie mieszkania - 65 m², 4 dni",
    category: "wykonczenia"
  },
  {
    image: "/images/1228300-657b1f0b1051af0671f2c4b313a3c633.jpg",
    location: "Stalowa Wola",
    title: "Wymiana instalacji elektrycznej",
    category: "elektryka"
  },
  {
    image: "/images/1228300-cc29dfc46bdd0de18dbf241a6a9502a2.jpg",
    location: "Tarnobrzeg",
    title: "Łazienka premium - czarny marmur",
    category: "lazienki"
  },
  {
    image: "/images/1228300-17acaa71302208da75cd09ec0c9e3b29.jpg",
    location: "Rozwadów",
    title: "Łazienka z wanną - drewno i kamień",
    category: "lazienki"
  }
]

const filters = ["Wszystkie", "Łazienki", "Kuchnie", "Wykończenia"]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function PortfolioSection() {
  return (
    <section className="py-20 bg-background-alt" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="section-tagline">Portfolio</span>
          <h2 className="section-title">Przykładowe prace</h2>
          <p className="section-description">
            Zdjęcia z naszych realizacji. Remonty, naprawy, wykończenia - efekty pracy naszego zespołu.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                index === 0
                  ? "bg-primary text-text-main"
                  : "bg-white text-text-main border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid - masonry layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                  {project.location}
                </span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
