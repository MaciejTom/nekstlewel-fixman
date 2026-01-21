"use client"

export function CtaBannerSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
          Masz usterkę? Potrzebujesz remontu?
        </h2>
        <p className="text-lg text-text-main/80 mb-8">
          Zadzwoń lub napisz. Opowiedz co trzeba zrobić - doradzimy i podamy wycenę.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:739437828"
            className="btn-dark"
          >
            <span className="material-symbols-outlined">call</span>
            Zadzwoń: 739 437 828
          </a>
          <a
            href="#contact"
            className="btn-secondary"
          >
            <span className="material-symbols-outlined">mail</span>
            Napisz wiadomość
          </a>
        </div>
      </div>
    </section>
  )
}
