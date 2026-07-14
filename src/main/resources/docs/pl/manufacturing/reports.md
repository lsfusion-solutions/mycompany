---
title: Raporty Produkcji
---

Sekcja raportowania służy do analizy [zamówień produkcji](orders.md). Otwórz **„Produkcja” → „Raportowanie” → „Raport zamówień”**.

## Co pokazuje raport

Raport to widok przestawny (pivot) z następującymi zakładkami:

- **„Zamówienia produkcji”** — jeden wiersz na zamówienie: numer, daty (rozpoczęcia/wykonania), towar, status, typ, firma, lokalizacje, zestawienie materiałowe oraz miary: produkcja planowana vs faktyczna (**„Produkcja”** / **„Wyprodukowano”**) i kolumny kosztów (**„Koszt”**, **„Dodatkowy koszt”**, **„Łączny koszt”**, a także **„Koszt pracy”** i **„Koszt usług”**, gdy używane są odpowiednie kontury). Dla zamówień utworzonych [z zamówień sprzedaży](sales-orders.md) dostępne są także miary sprzedażowe (kwota, podatki, kwota łączna, marża);
- **„Materiały”** — jeden wiersz na linię materiału: materiał (kolumna **„Material”**) i atrybuty jego zamówienia oraz miary **„Do zużycia”**, **„Zarezerwowane”**, **„Zużyte”** i **„Koszt”**;
- **„Koszt pracy”** — jeden wiersz na wpis czasu: pracownik (**„Pracownik”**), projekt (**„Projekt”**) oraz miary: przepracowane godziny (**„Godziny”**), stawka i kwota robocizny. Zakładka jest dostępna, gdy używany jest kontur zarządzania projektami.

## Filtry i grupowanie

- panel **„Filtry”** u góry ustawia zakres dat według daty rozpoczęcia zamówienia;
- wiersze można grupować po dowolnych kolumnach wymiarów: towarze, kategoriach towaru (**„Kategoria 1”**–**„Kategoria 4”**, **„Grupa kanoniczna”**), atrybutach towaru, statusie, typie, firmie, lokalizacjach;
- datę rozpoczęcia można agregować standardowymi okresami (rok/kwartał/miesiąc/…) do analizy szeregów czasowych.

## Co zwykle się analizuje

- liczbę zamówień w okresie;
- planowaną vs faktyczną produkcję;
- dostępność i zużycie materiałów;
- koszt wyprodukowanych towarów;
- zamówienia **„Wykonano”** i **„Anulowano”**.

## Rekomendacje użycia

1. Ustaw przedział dat.
2. Grupuj wg towaru lub kategorii, aby zobaczyć strukturę produkcji.
3. Porównuj ilości planowane i faktyczne, aby analizować odchylenia.