# Physiocare - Strona Internetowa

Nowoczesna, responsywna strona internetowa dla kliniki fizjoterapii Physiocare, zbudowana z wykorzystaniem Next.js i React. Projekt wspiera wielojęzyczną treść (polski, angielski, niemiecki).

## 🎯 Funkcje

- **Wielojęzyczność**: Wsparcie dla polskiego, angielskiego i niemieckiego
- **SEO Optimized**: Dynamiczne sitemap i robots.txt
- **Responsywny Design**: Dostosowany do urządzeń mobilnych, tabletów i desktopów
- **Formularze Kontaktowe**: Integracja z Resend do wysyłania wiadomości e-mail
- **Galereria Zdjęć**: Slider z technologią Swiper
- **FAQ Section**: Interaktywna sekcja często zadawanych pytań

## 📁 Struktura Projektu

```
physiocare/
├── app/                       # Next.js App Router
│   ├── [locale]/             # Dynamic routing dla lokalizacji
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Strona główna
│   │   ├── cennik/           # Substrona cennika
│   │   ├── faq/              # Substrona FAQ
│   │   ├── oferta/           # Substrona oferty
│   │   └── zespol/           # Substrona zespołu
│   ├── api/                  # API Routes
│   │   └── send/             # Endpoint do wysyłania wiadomości
│   ├── robots.ts             # Konfiguracja robots.txt
│   └── sitemap.ts            # Dynamiczny sitemap
├── components/               # Komponenty React
│   ├── homepage/             # Komponenty strony głównej
│   │   ├── AboutUs.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Important.tsx
│   │   ├── PhotoShowcase.tsx
│   │   ├── PointsOfInterest.tsx
│   │   └── TeamItem.tsx
│   └── utils/                # Komponenty użytkowe
│       ├── ActiveLink.tsx
│       ├── ButtonStyle.tsx
│       ├── ContactForm.tsx
│       ├── FaqItem.tsx
│       ├── LangSelect.tsx
│       ├── Map.tsx
│       ├── OfertaItem.tsx
│       ├── RoundImg.tsx
│       ├── Slide.tsx
│       └── TeamItem.tsx
├── i18n/                     # Konfiguracja internacjonalizacji
│   ├── request.ts
│   └── routing.ts
├── lib/                      # Funkcje utility i typy
│   └── types.ts
├── messages/                 # Pliki tłumaczeń
│   ├── en.json
│   ├── de.json
│   └── pl.json
├── style/                    # CSS Modules
├── public/                   # Zasoby publiczne
│   ├── curve.tsx             # SVG curves
│   ├── waves.tsx             # SVG waves
│   ├── locales/              # Flagi i ikony lokalizacji
│   └── showcase/             # Zdjęcia galerii
├── package.json
├── tsconfig.json
├── next.config.ts
└── middleware.ts             # Middleware Next.js
```

## 🛠️ Dostępne Skrypty

```bash
# Uruchamia serwer deweloperski
npm run dev

# Buduje projekt do produkcji
npm run build

# Uruchamia built projekt
npm start

# Sprawdza linting
npm run lint
```

## 🌍 Internacjonalizacja

Projekt wspiera trzy języki:

- **PL** - Polski
- **EN** - Angielski
- **DE** - Niemiecki

Tłumaczenia przechowywane są w katalogach `messages/`:

- `messages/pl.json` - Polskie tłumaczenia
- `messages/en.json` - Angielskie tłumaczenia
- `messages/de.json` - Niemieckie tłumaczenia

Routing obsługiwany jest automatycznie przez Next.js - trasy zawierają parametr `[locale]`.

## 📧 Wysyłanie E-maili

Projekt używa `Resend` do wysyłania wiadomości e-mail z formularza kontaktowego. Endpoint: `/api/send`

Konfiguracja wymaga ustawienia klucza API w zmiennych środowiskowych:

```
RESEND_API_KEY=your_api_key_here
```

## 🎨 Styling

Projekt używa **CSS Modules** do stylowania komponentów. Każdy komponent ma odpowiadający plik `.module.css`.

Dostęp do stylów:

```typescript
import styles from './Component.module.css';

export default function Component() {
  return <div className={styles.container}></div>;
}
```

## 📱 SEO

Projekt zawiera:

- Dynamiczny `sitemap.ts` dla SEO
- `robots.ts` do kontroli webcrawlerów
- Metadata w layoutach Next.js

## 🔧 TypeScript

Projekt jest w pełni napisany w TypeScript. Konfiguracja znajduje się w `tsconfig.json`.

## 📝 Linting

Projekt używa ESLint do kontroli jakości kodu:

```bash
npm run lint
```

## Kontakt

Jeśli chcesz nawiązać współpracę lub masz pytania, skontaktuj się ze mną:

- Imię i nazwisko: Cezary Makowski
- E-mail: cezary.makowski96@gmail.com
