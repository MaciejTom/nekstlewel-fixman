"use client"

const uspItems = [
  {
    title: "1. 150+ opinii - wszystkie 5.0",
    description: "Każdy klient wystawił maksymalną ocenę. Nie 4.9, nie \"prawie wszystkie\" - dosłownie 100% opinii to 5 gwiazdek.",
    quote: "\"Całokształt prac remontowych mieszkania został wykonany perfekcyjnie, bez zastrzeżeń.\"",
    author: "Jacek",
    service: "Remont kuchni"
  },
  {
    title: "2. 19 lat doświadczenia",
    description: "Prawie dwie dekady w branży remontowej. Widzieliśmy wszystko - od prostych napraw po generalne remonty. Wiemy co może pójść nie tak i jak temu zapobiec.",
    quote: "\"Profesjonalnie, rzetelnie bardzo dokładnie i co najważniejsze, z szacunkiem do klienta.\"",
    author: "Marek",
    service: "Adaptacja poddasza"
  },
  {
    title: "3. 212 usług pod jednym dachem",
    description: "Hydraulika, elektryka, malowanie, płytki, panele, montaż mebli. Jeden telefon zamiast koordynowania kilku ekip.",
    quote: "\"Trafiłam na bardzo solidną i profesjonalną firmę. Usługa została wykonana terminowo i sprawnie.\"",
    author: "Ewa",
    service: "Instalacja wodna"
  },
  {
    title: "4. Doradzamy na każdym kroku",
    description: "Nie tylko naprawiamy - wyjaśniamy co robimy i dlaczego. Klienci chwalą nas za komunikację i doradztwo.",
    quote: "\"Krok po kroku objaśniał i doradzał co było ogromnym wsparciem w całym procesie remontu.\"",
    author: "Małgorzata",
    service: "Remont mieszkania"
  }
]

export function WhyUsStickySection() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="about">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
          {/* Left - Sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background-alt border border-gray-100 text-xs font-bold uppercase tracking-wider text-text-muted mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Dlaczego my?
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-text-main tracking-tight leading-[0.95] mb-8">
                Dlaczego <br />nas <span className="text-primary">polecają?</span>
              </h2>
              <p className="text-lg text-text-muted font-medium leading-relaxed max-w-md mb-10">
                150+ opinii. Wszystkie 5 gwiazdek. Zero negatywnych. To nie przypadek - to 19 lat pracy i podejście, które doceniają klienci.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-300" />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-400" />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-500" />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-text-main text-white flex items-center justify-center text-xs font-bold pl-1">
                    +150
                  </div>
                </div>
                <div className="text-sm font-bold text-text-main">
                  Zadowolonych <br />klientów
                </div>
              </div>
            </div>
          </div>

          {/* Mobile header */}
          <div className="lg:hidden mb-8">
            <span className="text-primary font-bold uppercase tracking-wider mb-2 block text-sm">Dlaczego my?</span>
            <h2 className="text-4xl font-black text-text-main mb-6">Dlaczego nas polecają?</h2>
            <p className="text-text-muted mb-8">150+ opinii. Wszystkie 5 gwiazdek. Zero negatywnych. To nie przypadek - to 19 lat pracy.</p>
          </div>

          {/* Right - Scrollable */}
          <div className="flex flex-col gap-20 lg:py-12">
            {uspItems.map((item, index) => (
              <div key={index} className="group">
                <h3 className="text-2xl lg:text-3xl font-black text-text-main mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed mb-6 pl-4 border-l border-gray-200">
                  {item.description}
                </p>
                <div className="bg-background-alt p-6 rounded-r-xl border-l-4 border-primary relative transform transition-transform duration-300 hover:translate-x-2">
                  <span className="material-symbols-outlined absolute top-4 right-4 text-gray-300">format_quote</span>
                  <p className="text-text-main italic font-medium mb-3 relative z-10">{item.quote}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-400 text-lg">person</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted">{item.author} | {item.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
