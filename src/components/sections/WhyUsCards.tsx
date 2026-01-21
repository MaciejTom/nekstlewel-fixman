"use client"

const cards = [
  {
    icon: "thumb_up",
    number: "150+",
    label: "Pozytywnych opinii",
    title: "Zaufanie Klientów",
    description: "Nasza reputacja to nie przypadek. Każda opinia to dowód na rzetelność, terminowość i kulturę pracy naszej ekipy.",
    quote: "Najlepsza firma w regionie. Terminowo i bez ukrytych kosztów.",
    author: "Marek K.",
    showStars: true
  },
  {
    icon: "verified",
    number: "19",
    label: "Lat doświadczenia",
    title: "Wiedza i Praktyka",
    description: "Unikamy błędów nowicjuszy. Znamy specyfikę zarówno starych kamienic, jak i nowoczesnych apartamentowców.",
    quote: "Widać ogromne doświadczenie, panowie znają się na wszystkim.",
    author: "Tomasz W.",
    showStars: false
  },
  {
    icon: "construction",
    number: "212",
    label: "Realizacji",
    title: "Szeroki Zakres Usług",
    description: "Od hydrauliki po gładzie. Jedna ekipa do wszystkiego oznacza brak problemów z komunikacją i szybszy koniec remontu.",
    quote: "Zrobili hydraulikę, położyli płytki i pomalowali. Wszystko idealnie.",
    author: "Michał R.",
    showStars: false
  },
  {
    icon: "support_agent",
    number: "100%",
    label: "Wsparcia",
    title: "Fachowe Doradztwo",
    description: "Nie wiesz jakie materiały wybrać? Pomożemy Ci podjąć najlepsze decyzje, które zaoszczędzą Twój budżet i nerwy.",
    quote: "Doradzili mi tańsze i lepsze rozwiązanie niż planowałem.",
    author: "Krzysztof Z.",
    showStars: false
  }
]

export function WhyUsCards() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="about">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-8 bg-primary" />
              <h2 className="text-primary font-bold uppercase tracking-wider text-sm">Dlaczego my?</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
              Wybierz jakość popartą <br />
              <span className="relative inline-block z-10 pr-2">
                liczbami i opiniami
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-10" />
              </span>
            </h3>
          </div>
          <p className="text-text-muted font-medium max-w-md hidden md:block text-right">
            Transparentność i uczciwość to nasze fundamenty. Sprawdź, dlaczego mieszkańcy Stalowej Woli ufają właśnie nam.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col bg-background-alt rounded-3xl p-8 border border-transparent hover:border-primary/20 hover:shadow-2xl hover:bg-white transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-text-main transition-colors duration-300">
                  <span className="material-symbols-outlined text-[32px]">{card.icon}</span>
                </div>
                <div className="text-right">
                  <span className="block text-5xl font-black text-primary tracking-tight">{card.number}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">{card.label}</span>
                </div>
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-text-main mb-3">{card.title}</h4>
              <p className="text-text-muted leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>

              {/* Quote */}
              <div className="mt-auto bg-white p-6 rounded-xl border border-gray-100 relative">
                <span className="material-symbols-outlined absolute -top-3 -left-2 text-primary bg-white rounded-full p-1 text-2xl">
                  format_quote
                </span>
                <p className="text-sm font-medium italic text-text-main mb-2">&ldquo;{card.quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-text-muted uppercase">— {card.author}</span>
                  {card.showStars && (
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">star</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
