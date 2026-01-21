"use client"

const services = [
  {
    icon: "home_repair_service",
    title: "Remonty",
    description: "Łazienki, kuchnie, pokoje, całe mieszkania. Remont pod klucz lub wybrane prace."
  },
  {
    icon: "water_drop",
    title: "Hydraulika",
    description: "Pogotowie hydrauliczne, instalacje wodne i kanalizacyjne, montaż armatury."
  },
  {
    icon: "bolt",
    title: "Elektryka",
    description: "Wymiana instalacji, gniazdka, włączniki, bruzdowanie, naprawa usterek."
  },
  {
    icon: "format_paint",
    title: "Malowanie",
    description: "Malowanie ścian i sufitów, szpachlowanie, gładzie, tapetowanie."
  },
  {
    icon: "handyman",
    title: "Montaż i naprawy",
    description: "Montaż mebli i szafek, układanie paneli, montaż drzwi, drobne naprawy."
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background-dark text-white" id="services">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            Nasza oferta
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Czym się zajmujemy</h2>
          <p className="text-gray-400 text-lg">
            212 usług w 5 kategoriach. Od drobnej naprawy po remont generalny - nasz zespół pomoże.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2a271d] p-6 rounded-xl border border-white/5 hover:bg-primary hover:text-text-main group transition-colors duration-300 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[40px] text-primary mb-4 group-hover:text-text-main">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 group-hover:text-text-main/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
