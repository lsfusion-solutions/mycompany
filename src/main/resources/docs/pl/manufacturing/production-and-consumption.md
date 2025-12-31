---
title: Produkcja i zużycie
---

W [zamówieniu produkcji](orders.md) są dwie grupy linii:

- linie **wyjścia** (co i ile jest produkowane);
- linie **materiałów** (co i ile jest zużywane).

## Plan i wykonanie

Zamówienie zwykle zawiera ilości planowane:

- **Do produkowania** (łączna planowana ilość dla zamówienia);
- **Do produkowania** w liniach wyjścia;
- **Do zużycia** w liniach materiałów.

W trakcie realizacji rejestrowane są ilości faktyczne:

- **Wyprodukowane** w liniach wyjścia;
- **Zużyte** w liniach materiałów.

## Wprowadzanie faktycznej produkcji

W statusie „W trakcie” można wprowadzić ilość wyprodukowaną. System może rozdzielić produkcję i zużycie proporcjonalnie do planu.

## Kontrola dostępności i rezerwacja

Przed rozpoczęciem produkcji uruchom **„Sprawdź dostępność”** dla materiałów.

Linie materiałów zwykle pokazują:

- na stanie;
- oczekiwane;
- dostępne;
- zarezerwowane.

Jeśli wymagane ilości mogą zostać zarezerwowane, zamówienie przechodzi do statusu gotowości.

## Wycofanie rezerwacji

Jeśli start jest przesunięty lub zamówienie jest **Anulowan**, możesz uruchomić **„Wycofaj rezerwę”**.

## Rekomendacje

- Zawsze sprawdź, czy wybrano lokalizację materiałów / lokalizację magazynową.
- Przy zakończeniu zamówienia wskaż lokalizację wyrobów gotowych.
- Jeśli faktyczne zużycie różni się od planu, skoryguj linie materiałów przed zakończeniem zamówienia.