"use client"

import { motion } from "framer-motion"

const projects = [
  {
    image: "/images/1228300-413fa9a06d3c0b45baef359721b4aa24.jpg",
    location: "Stalowa Wola",
    title: "Remont łazienki - z PRL-owskiej w nowoczesną",
    wide: true
  },
  {
    image: "/images/1228300-658857cd0d8459ee41d1d04ba598c568.jpg",
    location: "Nisko",
    title: "Remont kuchni - projekt klienta 1:1",
    wide: true
  },
  {
    image: "/images/1228300-cc29dfc46bdd0de18dbf241a6a9502a2.jpg",
    location: "Tarnobrzeg",
    title: "Łazienka premium - czarny marmur",
    wide: false
  },
  {
    image: "/images/1228300-17acaa71302208da75cd09ec0c9e3b29.jpg",
    location: "Rozwadów",
    title: "Łazienka z wanną - drewno i kamień",
    wide: false
  },
  {
    image: "/images/1228300-07a500c33fa652b7fb1342e764300325.jpg",
    location: "Stalowa Wola",
    title: "Wykończenie mieszkania - panele i drzwi",
    wide: false
  },
  {
    image: "/images/1228300-657b1f0b1051af0671f2c4b313a3c633.jpg",
    location: "Stalowa Wola",
    title: "Wykończenie - LED i panele jodełka",
    wide: false
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

        {/* Projects grid - clean CSS Grid approach */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <figure className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <figcaption className="mt-3">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  {project.location}
                </span>
                <h3 className="text-text-main text-lg font-bold mt-1">{project.title}</h3>
              </figcaption>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
