---
title: Raporty i rejestry
---

Raporty znajdują się w **„Magazynowanie” → „Raportowanie”**. Dostępne są cztery formularze: **„Bieżące stany towarów”**, **„Koszt stanów towarów”**, **„Historia ruchów produktu”** i **„Raport kosztów”**.

## Bieżące stany towarów

Stany magazynowe z filtrami i rozbiciami.

- Filtry: opcjonalna **data** (widok „na dzień”), przełącznik **„Pojedyncza lokalizacja”** oraz zakładki filtrów **lokalizacji** (drzewo), **kategorii** i **atrybutów**.
- Kolumny per lokalizacja/towar: **„Oczekiwane”**, **„Zarezerwowane”**, **„Dostępne”** (z rejestru rezerwacji), **„Na stanie”**, **„Na stanie (w tym zagnieżdżone)”** — tzn. razem z lokalizacjami podrzędnymi, stan **na wybraną datę**, a także daty ostatniego przyjęcia i ostatniego wydania.
- Obok głównej tabeli dostępna jest zakładka przestawna (pivot).
- Dolna część pokazuje szczegóły dla wybranego towaru:
  - zakładka **„Rejestr zmian stanu towarów”** — każdy ruch (klasa dokumentu, typ, czas, numer, partner, lokalizacja źródłowa/docelowa, ilość) z wynikowym stanem po operacji;
  - zakładka **„Rejestr rezerwacji”** — rezerwacje i ilości oczekiwane per dokument;
  - zakładka **„Partia”** (gdy włączone są [partie](lots-and-packages.md)) — stan w rozbiciu na partie;
  - zakładka **„Zdjęcie”** — obraz towaru.

## Koszt stanów towarów

Ilość, koszt jednostkowy i koszt całkowity per towar/lokalizacja — szczegóły w [kalkulacji kosztu pozycji](costing.md). Zawiera akcję **„Ponowne oblicz koszty”**, opcjonalny widok „na dzień”, szczegóły przychodowych/rozchodowych operacji kosztowych oraz widok przestawny (pivot).

## Historia ruchów produktu

Ruchy towarów między lokalizacjami za okres: każdy wiersz to ruch (klasa dokumentu, typ, czas, numer, towar, ilość, lokalizacja źródłowa i docelowa z wynikowym stanem po obu stronach, partner). Przydatne do prześledzenia, skąd wzięło się saldo.

## Raport kosztów

Zapisy rejestru kosztów (zobacz także [kalkulacja kosztu pozycji](costing.md)) w układzie przestawnym: ilość i kwota ze znakiem zależnym od kierunku (przychód dodatni, rozchód ujemny), z kategoriami i atrybutami towarów dostępnymi jako wymiary oraz filtrem przedziału dat.

## Rejestry

Pod spodem wszystkie raporty są zbudowane na trzech rejestrach:

- **rejestr stanów** (**„Rejestr zmian stanu towarów”**) — fizyczne ruchy zapasów; każde zakończone [przyjęcie](receipts.md), [wydanie](shipments.md), [przemieszczenie](transfers.md), [odpad](scrap.md) i [korekta zapasów](adjustments.md) zapisuje tu swoje operacje;
- **rejestr rezerwacji** — rezerwacje (przygotowywane wydania) i ilości oczekiwane (przyjęcia w statusie Gotowy z flagą **„Zwiększ dostępny stan”**); *dostępne = na stanie − zarezerwowane + oczekiwane*;
- **rejestr kosztów** — przychodowe/rozchodowe zapisy kosztowe (zobacz [kalkulacja kosztu pozycji](costing.md)).

Praktyczny cel rejestrów:

- wyjaśnić, skąd bierze się saldo;
- pokazać historię ruchów;
- pomóc znaleźć przyczynę rozbieżności.

Rejestry nie są osobnymi pozycjami menu — są pokazywane jako zakładki szczegółów raportów (oraz kart towaru/partii).

## Integracja

Bieżące stany mogą być także odpytywane przez systemy zewnętrzne poprzez HTTP API (`Inventory.getInventory`), które zwraca ilości na stanie jako JSON, opcjonalnie filtrowane według kategorii i lokalizacji.

## Rekomendacje

1. Analizując ruchy, zawsze ustaw przedział dat.
2. Dla problematycznych towarów użyj rozbicia wg [lokalizacji](locations.md) i [partii](lots-and-packages.md).