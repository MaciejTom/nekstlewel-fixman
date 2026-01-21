"use client"

import { useState, FormEvent } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Imię i nazwisko jest wymagane"
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Imię musi mieć min. 3 znaki"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Numer telefonu jest wymagany"
    } else if (!/^[\d\s\-+]{9,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Podaj prawidłowy numer telefonu"
    }

    if (!formData.service || formData.service === "Wybierz rodzaj usługi...") {
      newErrors.service = "Wybierz rodzaj usługi"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: "", phone: "", service: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section className="bg-background-alt py-20 lg:py-28 relative overflow-hidden" id="contact">
      {/* Decorative blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left - Contact info */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-text-muted mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Jesteśmy dostępni
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight mb-6">
              Umów termin
            </h2>

            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              Zadzwoń lub napisz. Opowiedz co trzeba zrobić - doradzimy i podamy wycenę.
            </p>

            <div className="flex flex-col gap-8">
              {/* Phone CTA */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-primary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <a
                  href="tel:739437828"
                  className="relative flex items-center gap-5 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-primary text-text-main rounded-lg shadow-md shrink-0">
                    <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Zadzwoń teraz</span>
                    <span className="text-3xl font-black text-text-main tracking-tight group-hover:text-primary-dark transition-colors">
                      739 437 828
                    </span>
                  </div>
                </a>
              </div>

              {/* Additional info */}
              <div className="flex flex-col gap-4 pl-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100 text-primary shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </span>
                  <div>
                    <p className="font-bold text-text-main">Odpowiadamy codziennie</p>
                    <p className="text-sm text-text-muted">Przy awariach - telefon najszybszy</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100 text-primary shrink-0">
                    <span className="material-symbols-outlined">star</span>
                  </span>
                  <div>
                    <p className="font-bold text-text-main">150+ pozytywnych opinii</p>
                    <p className="text-sm text-text-muted">Wszystkie 5 gwiazdek</p>
                  </div>
                </div>
              </div>

              {/* Location tags */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Nasz zasięg</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-text-main">Stalowa Wola</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-text-muted">Tarnobrzeg</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-text-muted">Sandomierz</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-text-muted">Nisko</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-text-muted">Janów Lubelski</span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-text-muted">Nowa Dęba</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 lg:p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />

              <h3 className="text-2xl font-black text-text-main mb-2 relative z-10">Formularz wyceny</h3>
              <p className="text-text-muted mb-8 relative z-10">Wypełnij formularz, a oddzwonimy z konkretną propozycją.</p>

              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 relative z-10">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  <p className="text-green-700 font-medium">Dziękujemy! Oddzwonimy wkrótce.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-main ml-1" htmlFor="contact-name">
                      Imię i nazwisko <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        className={`w-full h-12 pl-11 pr-4 rounded-lg bg-gray-50 border ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:ring-1 outline-none transition-all placeholder:text-gray-400`}
                        id="contact-name"
                        placeholder="Jan Kowalski"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value })
                          if (errors.name) setErrors({ ...errors, name: "" })
                        }}
                      />
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">person</span>
                    </div>
                    {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-main ml-1" htmlFor="contact-phone">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        className={`w-full h-12 pl-11 pr-4 rounded-lg bg-gray-50 border ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:ring-1 outline-none transition-all placeholder:text-gray-400`}
                        id="contact-phone"
                        placeholder="739 437 828"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value })
                          if (errors.phone) setErrors({ ...errors, phone: "" })
                        }}
                      />
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">call</span>
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-main ml-1" htmlFor="contact-service">
                    Rodzaj usługi <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={`w-full h-12 px-4 rounded-lg bg-gray-50 border ${errors.service ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:ring-1 outline-none transition-all text-gray-600`}
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value })
                      if (errors.service) setErrors({ ...errors, service: "" })
                    }}
                  >
                    <option value="">Wybierz rodzaj usługi...</option>
                    <option value="remont-mieszkania">Remont mieszkania</option>
                    <option value="remont-lazienki">Remont łazienki</option>
                    <option value="remont-kuchni">Remont kuchni</option>
                    <option value="hydraulika">Hydraulika</option>
                    <option value="elektryka">Elektryka</option>
                    <option value="malowanie">Malowanie</option>
                    <option value="montaz">Montaż / Naprawa</option>
                    <option value="inne">Inne</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs ml-1">{errors.service}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-main ml-1" htmlFor="contact-message">
                    Opis zlecenia
                  </label>
                  <textarea
                    className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-gray-400"
                    id="contact-message"
                    placeholder="Opisz krótko co jest do zrobienia..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Wyślij zapytanie
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Odpowiadamy zazwyczaj w ciągu 2 godzin w godzinach pracy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
