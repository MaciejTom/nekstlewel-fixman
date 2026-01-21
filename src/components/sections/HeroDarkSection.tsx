"use client"

export function HeroDarkSection() {
  return (
    <section className="relative w-full bg-background-dark text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/vanLogo.png')`
          }}
        />
      </div>

      <div className="relative z-20 max-w-[1280px] mx-auto px-4 md:px-10 py-20 md:py-32 flex flex-col justify-center min-h-[600px]">
        <div className="flex flex-col gap-6 max-w-[640px]">
          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full w-fit">
            <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Profesjonalne usługi w Stalowej Woli
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-white drop-shadow-md">
            Twój dom w <br />
            <span className="text-primary">dobrych rękach.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-[540px]">
            Kompleksowe remonty i naprawy. 19 lat doświadczenia i ponad 106 zadowolonych klientów potwierdza naszą jakość.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#contact"
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark text-text-main text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"
            >
              Darmowa Wycena
            </a>
            <a
              href="tel:123456789"
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-base font-bold transition-colors"
            >
              <span className="material-symbols-outlined mr-2">phone_in_talk</span>
              Zadzwoń teraz
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
            <div className="flex -space-x-3">
              <div className="size-10 rounded-full border-2 border-background-dark bg-gray-400" />
              <div className="size-10 rounded-full border-2 border-background-dark bg-gray-500" />
              <div className="size-10 rounded-full border-2 border-background-dark bg-gray-600" />
            </div>
            <div className="flex flex-col">
              <div className="flex text-primary text-[14px]">
                <span className="material-symbols-outlined text-[16px]">star</span>
                <span className="material-symbols-outlined text-[16px]">star</span>
                <span className="material-symbols-outlined text-[16px]">star</span>
                <span className="material-symbols-outlined text-[16px]">star</span>
                <span className="material-symbols-outlined text-[16px]">star</span>
              </div>
              <span className="text-sm font-medium text-gray-300">106 pozytywnych opinii</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
