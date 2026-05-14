---
title: Ustawienia magazynowania
---

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Konfiguracja” → „Ustawienia”**.

## Co zwykle jest konfigurowane

- typy [przyjęć](receipts.md) i [wydań](shipments.md) (ich numeracja, domyślne lokalizacje, maksymalna ilość);
- użycie [przemieszczeń](transfers.md) (typ [wydania](shipments.md) z flagą **„Przemieszczanie”**);
- typy [korekt zapasów](adjustments.md) i [odpadu](scrap.md);
- globalna flaga włączenia **[partii](lots-and-packages.md)** oraz opcje partii/numerów seryjnych na poziomie towaru;
- przekrojowe flagi, takie jak **„Zabroń wielu lokalizacji głównych”**, oraz przelokacyjne flagi **„Tylko dodatni stan”** i **„Tylko dodatni stan dostępny”** (zobacz poniżej o rejestrach).

## Typy przyjęć

Ustawienia zawierają katalog **typów przyjęć**. Typ przyjęcia określa, jak użytkownicy pracują z dokumentem.

Typ przyjęcia zwykle definiuje:

- **Numeracja** — jak generowany jest numer;
- **Domyślna lokalizacja** — jaka [lokalizacja](locations.md) jest ustawiana w nowych dokumentach;
- **Maksymalna ilość** — górny limit dla pola „Zaplanowana ilość” w pozycjach.

Jeżeli w systemie jest dokładnie jeden typ przyjęcia, może on być podstawiany automatycznie.

## Typy wydań

Ustawienia zawierają katalog **typów wydań**.

Typ wydania zwykle definiuje:

- **Numeracja**;
- **Domyślna lokalizacja (skąd)**;
- **Domyślna lokalizacja (dokąd)** (istotne dla przemieszczeń);
- flaga **„Przemieszczanie”** — włącza tryb „lokalizacja źródłowa → lokalizacja docelowa”;
- **Maksymalna ilość** — górny limit dla pola „Zaplanowana ilość” w pozycjach.

Walidacja:

- dla przemieszczeń, lokalizacja źródłowa i docelowa nie mogą być takie same.

## Ograniczenia rejestrów (na lokalizację)

Na każdej [lokalizacji](locations.md) można włączyć dwa opcjonalne ograniczenia:

- **„Tylko dodatni stan”** — system nie zezwoli na operacje, które sprowadzą fizyczny stan towaru w tej lokalizacji poniżej zera.
- **„Tylko dodatni stan dostępny”** — system nie zezwoli, aby stan dostępny (fizyczny minus rezerwacje) w tej lokalizacji spadł poniżej zera.

Po włączeniu odpowiednie zapisy w rejestrze stanów lub rejestrze rezerwacji są blokowane z odpowiednim komunikatem.

## Rekomendowana kolejność konfiguracji

1. Skonfiguruj [lokalizacje](locations.md).
2. Skonfiguruj typy dokumentów ([przyjęcia](receipts.md)/[wydania](shipments.md)/[przemieszczenia](transfers.md)/[odpad](scrap.md)/[korekty](adjustments.md)).
3. Jeśli potrzebne, włącz [partie](lots-and-packages.md) globalnie i skonfiguruj opcje partii/numerów seryjnych na poziomie towaru.
4. Zdecyduj o ograniczeniach rejestrów na poziomie lokalizacji (zobacz wyżej).
5. Przejrzyj [raporty i rejestry](reports-and-ledgers.md) oraz prawa dostępu.