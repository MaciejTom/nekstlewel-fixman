"use client"

const steps = [
  {
    number: "1",
    icon: "call",
    title: "Kontakt i wycena",
    description: "Zadzwoń lub napisz. Opisz co trzeba zrobić - wycenę podamy od razu lub po oględzinach."
  },
  {
    number: "2",
    icon: "calendar_month",
    title: "Termin i szczegóły",
    description: "Ustalamy kiedy wchodzimy, co będzie potrzebne, jak długo potrwa."
  },
  {
    number: "3",
    icon: "construction",
    title: "Realizacja",
    description: "Przyjeżdżamy punktualnie, robimy robotę, sprzątamy po sobie."
  },
  {
    number: "4",
    icon: "verified",
    title: "Odbiór",
    description: "Pokazujemy co zrobiliśmy, sprawdzamy czy wszystko działa. Płatność po odbiorze."
  }
]

export function HowWeWorkSection() {
  return (
    <section className="py-20 bg-background-alt" id="process">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tagline">Proces</span>
          <h2 className="section-title">Jak wygląda współpraca</h2>
          <p className="section-description">
            Prosty proces od telefonu do odbioru. Bez niespodzianek, z pełną komunikacją na każdym etapie.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline line - positioned at top-[16px] as requested */}
          <div className="absolute top-[16px] left-0 right-0 h-1 bg-gray-200">
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary to-primary/20" />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-text-main font-black text-xl z-10 shadow-lg ring-8 ring-background-alt">
                  {step.number}
                </div>
                <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all h-full">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">
                    {step.icon}
                  </span>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-text-main font-black shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-primary mt-2" />
                )}
              </div>
              <div className={index < steps.length - 1 ? "pb-8" : ""}>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
