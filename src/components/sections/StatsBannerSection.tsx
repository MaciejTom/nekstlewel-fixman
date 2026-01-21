"use client"

const stats = [
  {
    icon: "calendar_month",
    value: "19",
    label: "Lat doświadczenia"
  },
  {
    icon: "groups",
    value: "150+",
    label: "Pozytywnych Opinii"
  },
  {
    icon: "location_on",
    value: "6",
    label: "Miast w zasięgu"
  }
]

export function StatsBannerSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start gap-4 px-4 py-2">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <span className="material-symbols-outlined text-[32px]">{stat.icon}</span>
              </div>
              <div>
                <p className="text-3xl font-black text-text-main">{stat.value}</p>
                <p className="text-sm text-text-muted font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
