import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jaki jest zasięg działania?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stalowa Wola i okolice - Tarnobrzeg, Sandomierz, Nisko, Janów Lubelski, Nowa Dęba. Przy większych zleceniach dojeżdżamy dalej."
      }
    },
    {
      "@type": "Question",
      "name": "Jak szybko możecie przyjechać?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Przy awariach (hydraulika, elektryka) - zwykle tego samego lub następnego dnia. Remonty planujemy z wyprzedzeniem, zależy od obłożenia."
      }
    },
    {
      "@type": "Question",
      "name": "Czy robicie małe naprawy czy tylko duże remonty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jedno i drugie. Przyjedziemy powiesić szafkę albo zrobić remont całego mieszkania. Ponad 200 usług to nie przypadek."
      }
    },
    {
      "@type": "Question",
      "name": "Jak wygląda wycena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Małe naprawy wyceniamy od razu przez telefon. Większe remonty - po oględzinach, żeby podać realną cenę bez niespodzianek."
      }
    },
    {
      "@type": "Question",
      "name": "Czy sprzątacie po sobie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak. Zabezpieczamy meble i podłogi przed rozpoczęciem, sprzątamy po zakończeniu. Klienci chwalą nas właśnie za to."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FIXMAN - Wojciech Bełzak",
  description: "Remonty, hydraulika, elektryka, malowanie. 150+ pozytywnych opinii - wszystkie 5 gwiazdek. 19 lat doświadczenia. Stalowa Wola, Tarnobrzeg, Sandomierz.",
  url: "https://fixman.pl",
  telephone: "+48739437828",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stalowa Wola",
    addressRegion: "Podkarpackie",
    addressCountry: "PL"
  },
  areaServed: [
    { "@type": "City", name: "Stalowa Wola" },
    { "@type": "City", name: "Tarnobrzeg" },
    { "@type": "City", name: "Sandomierz" },
    { "@type": "City", name: "Nisko" },
    { "@type": "City", name: "Janów Lubelski" },
    { "@type": "City", name: "Nowa Dęba" }
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-18:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150"
  },
  sameAs: []
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Remont mieszkania Stalowa Wola | FIXMAN - 150+ opinii 5.0, 19 lat doświadczenia",
  description: "Remonty, hydraulika, elektryka, malowanie. 150+ pozytywnych opinii - wszystkie 5 gwiazdek. 19 lat doświadczenia. Stalowa Wola, Tarnobrzeg, Sandomierz. Zadzwoń!",
  metadataBase: new URL('https://fixman.pl'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FIXMAN - Remonty Stalowa Wola | 150+ opinii 5.0',
    description: 'Remonty, hydraulika, elektryka, malowanie. 150+ pozytywnych opinii - wszystkie 5 gwiazdek. 19 lat doświadczenia.',
    url: 'https://fixman.pl',
    siteName: 'FIXMAN',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/samochodLogo.jpg',
        width: 1200,
        height: 630,
        alt: 'FIXMAN - Remonty Stalowa Wola',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIXMAN - Remonty Stalowa Wola',
    description: 'Remonty, hydraulika, elektryka, malowanie. 150+ opinii 5.0.',
    images: ['/images/samochodLogo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
