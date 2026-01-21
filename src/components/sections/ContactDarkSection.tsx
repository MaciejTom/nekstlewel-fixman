"use client"

import { useState, FormEvent } from "react"

export function ContactDarkSection() {
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

    if (!formData.service || formData.service === "Wybierz usługę...") {
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
    <section className="bg-text-main text-white py-20 lg:py-28 relative overflow-hidden" id="contact-dark">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[150px] opacity-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-wider mb-2 text-sm">Kontakt</h2>
              <h3 className="text-5xl font-black mb-6">
                Skontaktuj się <br />z nami
              </h3>
              <p className="text-gray-400 text-lg max-w-md">
                Masz pytania dotyczące remontu? Potrzebujesz szybkiej wyceny? Zadzwoń lub napisz do nas.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="tel:739437828"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-[#2a271d] border border-white/5 hover:bg-primary transition-colors duration-300"
              >
                <div className="bg-primary group-hover:bg-white text-text-main w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-colors">
                  <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wide group-hover:text-text-main/70">
                    Zadzwoń teraz
                  </p>
                  <p className="text-3xl font-bold text-white group-hover:text-text-main">739 437 828</p>
                </div>
              </a>

              <a
                href="mailto:kontakt@fixman.pl"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-[#2a271d] border border-white/5 hover:bg-white transition-colors duration-300"
              >
                <div className="bg-white/10 group-hover:bg-primary text-white group-hover:text-text-main w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-colors">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wide group-hover:text-text-muted">
                    Napisz e-mail
                  </p>
                  <p className="text-2xl font-bold text-white group-hover:text-text-main">kontakt@fixman.pl</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-400 mt-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>Stalowa Wola, ul. Okulickiego 12, 37-450</span>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 text-text-main shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Darmowa wycena</h4>

            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <p className="text-green-700 font-medium">Dziękujemy! Oddzwonimy wkrótce.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold" htmlFor="name-dark">
                    Imię i nazwisko <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`h-12 px-4 rounded-lg bg-gray-50 border ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:ring-1 outline-none transition-all`}
                    id="name-dark"
                    placeholder="Jan Kowalski"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: "" })
                    }}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold" htmlFor="phone-dark">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`h-12 px-4 rounded-lg bg-gray-50 border ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:ring-1 outline-none transition-all`}
                    id="phone-dark"
                    placeholder="739 437 828"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      if (errors.phone) setErrors({ ...errors, phone: "" })
                    }}
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold" htmlFor="service-dark">
                  Rodzaj usługi <span className="text-red-500">*</span>
                </label>
                <select
                  className={`h-12 px-4 rounded-lg bg-gray-50 border ${errors.service ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:ring-1 outline-none transition-all text-gray-500`}
                  id="service-dark"
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value })
                    if (errors.service) setErrors({ ...errors, service: "" })
                  }}
                >
                  <option value="">Wybierz usługę...</option>
                  <option value="remont-lazienki">Remont łazienki</option>
                  <option value="malowanie">Malowanie</option>
                  <option value="hydraulika">Hydraulika</option>
                  <option value="inne">Inne</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold" htmlFor="message-dark">
                  Wiadomość
                </label>
                <textarea
                  className="p-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  id="message-dark"
                  placeholder="Opisz krótko co jest do zrobienia..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                className="mt-2 h-14 bg-primary text-text-main font-bold text-lg rounded-lg shadow-lg hover:bg-primary-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Wyślij wiadomość
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-2">
                Odpowiadamy zazwyczaj w ciągu 2 godzin.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
