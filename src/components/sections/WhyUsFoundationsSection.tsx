"use client"

const foundations = [
  {
    number: "01",
    icon: "verified",
    title: "19 Lat Doświadczenia",
    description: "Nie uczymy się na błędach u Ciebie. Przez dwie dekady wypracowaliśmy metody, które gwarantują trwałość i estetykę wykonania.",
    quote: "\"Widać ogromną wiedzę. Doradzili rozwiązania, o których nawet nie pomyślałem.\""
  },
  {
    number: "02",
    icon: "handyman",
    title: "Kompleksowa Obsługa",
    description: "My pracujemy, Ty odpoczywasz. Przejmujemy pełną odpowiedzialność za logistykę, materiały i sprzątanie po remoncie.",
    quote: "\"Oddałem klucze i wyjechałem na urlop. Po powrocie mieszkanie było gotowe.\""
  },
  {
    number: "03",
    icon: "gavel",
    title: "Pisemna Gwarancja",
    description: "Nasza odpowiedzialność nie kończy się z chwilą wyjścia z budowy. Dajemy Ci pisemną gwarancję na wykonane usługi.",
    quote: "\"Śpię spokojnie wiedząc, że w razie problemów mam gwarancję na papierze.\""
  },
  {
    number: "04",
    icon: "savings",
    title: "Przejrzysta Wycena",
    description: "Żadnych ukrytych kosztów. Przed rozpoczęciem prac otrzymujesz szczegółowy kosztorys, który jest dla nas wiążący.",
    quote: "\"Kwota na fakturze zgadzała się co do grosza z początkową wyceną. Szok!\""
  }
]

export function WhyUsFoundationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-primary font-bold uppercase tracking-wider mb-3 text-sm">Dlaczego My?</h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main leading-tight mb-6">
            Fundamenty Twojego<br />Spokoju
          </h3>
          <p className="text-lg text-text-muted leading-relaxed">
            Wybór ekipy remontowej to decyzja na lata. Zobacz, co sprawia, że klienci wracają do nas przy każdej kolejnej inwestycji.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {foundations.map((item) => (
            <div
              key={item.number}
              className="group relative bg-background-alt rounded-3xl p-8 lg:p-12 overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              {/* Big number background */}
              <span className="absolute -top-6 -right-6 text-[180px] font-black text-primary/10 leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/15">
                {item.number}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-text-main text-primary rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-primary group-hover:text-text-main transition-colors">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-black text-text-main mb-4">{item.title}</h4>

                {/* Description */}
                <p className="text-text-muted text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Quote */}
                <div className="mt-auto bg-white p-6 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm relative">
                  <span className="material-symbols-outlined absolute -top-3 left-0 text-primary text-4xl drop-shadow-sm transform -translate-y-1/3">
                    format_quote
                  </span>
                  <p className="text-text-main font-medium italic relative z-10 pl-2">{item.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
