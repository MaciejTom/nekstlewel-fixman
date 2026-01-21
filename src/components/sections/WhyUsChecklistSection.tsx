"use client"

const checklistItems = [
  "Darmowa wycena w 24h",
  "Czystość po pracy",
  "Przejrzysty cennik",
  "Terminowość realizacji",
  "Faktura VAT",
  "Ubezpieczenie OC"
]

export function WhyUsChecklistSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Dlaczego my?</span>
              <h2 className="text-3xl md:text-4xl font-black text-text-main leading-tight">
                Gwarancja jakości i spokoju ducha
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Wiemy, że remont to stres. Dlatego FIXMAN stawia na jasne zasady, punktualność i porządek. Nie martw się o sprzątanie po pracy – to nasz standard.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-text-main font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="w-fit mt-4 flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark text-text-main text-base font-bold shadow-lg shadow-primary/20 transition-all"
            >
              Umów spotkanie
            </a>
          </div>

          {/* Right - Image */}
          <div className="flex-1 w-full h-full min-h-[400px] rounded-xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div
              className="w-full h-full min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/1228300-053524b2f7dd2b090ab82fe739ec74d2.jpg')`
              }}
            />
            {/* Quote overlay */}
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                <p className="font-bold text-lg">&quot;Najlepsi w Stalowej Woli!&quot;</p>
                <div className="flex text-primary mt-1">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
