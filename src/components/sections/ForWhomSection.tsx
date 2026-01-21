"use client"

const segments = [
  {
    number: "01",
    title: "Remonty mieszkań i domów",
    description: "Łazienki, kuchnie, pokoje, całe mieszkania. Remont pod klucz lub wybrane prace. Pilnujemy terminów i budżetu.",
    highlight: "Remont pod klucz",
    features: ["Remont łazienki (płytki, hydraulika, armatura)", "Remont kuchni (zabudowa, instalacje)", "Remont mieszkania (wszystkie prace)", "Wykończenie pod klucz"],
    cta: "Zamów wycenę remontu",
    image: "/images/1228300-445e982461b7048669d6bed7cfac9ee5.jpg",
    bgClass: "bg-primary"
  },
  {
    number: "02",
    title: "Hydraulik - naprawy i instalacje",
    description: "Cieknący kran, zatkana rura, wymiana instalacji. Pogotowie hydrauliczne i planowane prace.",
    highlight: "Pogotowie hydrauliczne",
    features: ["Pogotowie hydrauliczne (awarie)", "Instalacja wodna i kanalizacyjna", "Montaż armatury (krany, baterie)", "Naprawa spłuczek i WC"],
    featureIcons: ["emergency", "water_drop", "faucet", "wc"],
    cta: "Zgłoś awarię",
    image: "/images/1228300-eebf24d6e6777d6bef3fbdb9d83245a8.jpg",
    bgClass: "bg-text-main text-white"
  },
  {
    number: "03",
    title: "Elektryk - bezpiecznie i zgodnie z przepisami",
    description: "Wymiana instalacji, nowe gniazdka, naprawa usterek. Prace elektryczne wymagają doświadczenia - mamy je od 19 lat.",
    highlight: "19 lat",
    features: ["Wymiana instalacji elektrycznej", "Montaż gniazdek i włączników", "Bruzdowanie pod instalację", "Naprawa usterek elektrycznych"],
    featureIcons: ["bolt", "electrical_services", "construction", "build"],
    cta: "Zleć naprawę",
    image: "/images/1228300-657b1f0b1051af0671f2c4b313a3c633.jpg",
    bgClass: "bg-primary"
  },
  {
    number: "04",
    title: "Malowanie ścian i sufitów",
    description: "Malowanie, szpachlowanie, tapetowanie. Zabezpieczamy meble i podłogi - nic nie zostanie zabrudzone.",
    highlight: "nic nie zostanie zabrudzone",
    features: ["Malowanie ścian i sufitów", "Szpachlowanie i gładzie", "Tapetowanie", "Malowanie elewacji"],
    featureIcons: ["format_paint", "layers", "wallpaper", "home"],
    cta: "Umów malowanie",
    image: "/images/1228300-402a47faaed765aa87a9f19514057db8.jpg",
    bgClass: "bg-text-main text-white"
  },
  {
    number: "05",
    title: "Drobne naprawy i montaż",
    description: "Wieszanie szafek, montaż mebli, listwy, drzwi. Wszystko co wymaga złotej rączki - załatwimy.",
    highlight: "złotej rączki",
    features: ["Montaż mebli i szafek", "Układanie paneli i listew", "Montaż drzwi", "Drobne naprawy domowe"],
    featureIcons: ["handyman", "view_module", "door_front", "home_repair_service"],
    cta: "Zleć montaż",
    image: "/images/1228300-07a500c33fa652b7fb1342e764300325.jpg",
    bgClass: "bg-primary"
  }
]

export function ForWhomSection() {
  return (
    <section className="py-20 lg:py-32 bg-background-alt overflow-hidden" id="offer-details">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="section-tagline">Nasza oferta</span>
          <h2 className="section-title">Czym się zajmujemy</h2>
          <p className="section-description">
            Ponad 200 usług pod jednym dachem. Od drobnej naprawy po remont generalny - nasz zespół pomoże.
          </p>
        </div>

        {/* Segments */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`flex items-center justify-center w-12 h-12 rounded-lg font-bold text-xl ${
                      index % 2 === 0
                        ? "bg-primary text-text-main"
                        : "bg-text-main text-white"
                    }`}
                  >
                    {segment.number}
                  </span>
                  <h3 className="text-3xl font-black text-text-main">{segment.title}</h3>
                </div>

                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {segment.description.split(segment.highlight)[0]}
                  <span className="bg-primary/30 px-1 font-semibold text-text-main">{segment.highlight}</span>
                  {segment.description.split(segment.highlight)[1]}
                </p>

                <ul className="space-y-3 mb-8">
                  {segment.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        {segment.featureIcons ? segment.featureIcons[i] : "check_circle"}
                      </span>
                      <span className="font-medium text-text-main">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-text-main font-bold border-b-2 border-primary hover:bg-primary/10 px-2 py-1 transition-colors"
                >
                  {segment.cta}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>

              {/* Image */}
              <figure className="lg:w-1/2">
                <img
                  src={segment.image}
                  alt={segment.title}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-xl"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
