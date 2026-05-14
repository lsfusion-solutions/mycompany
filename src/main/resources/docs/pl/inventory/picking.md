---
title: Zadania kompletacyjne
---

Zadania kompletacyjne służą do organizacji kompletacji w [lokalizacji](locations.md) podczas realizacji [wydania](shipments.md).

## Kiedy powstaje zadanie kompletacyjne

Zadanie kompletacyjne jest tworzone automatycznie dla wydania spełniającego jednocześnie oba warunki:

- **typ wydania** ma włączoną kompletację;
- wydanie zostało przeniesione do statusu **„Gotowe”**.

Kompletacja nie jest więc osobną pozycją menu — to scenariusz uruchamiany na bazie istniejącego wydania.

## Struktura

Każde zadanie kompletacyjne zawiera jedną lub więcej **pozycji kompletacji**. Pozycja kompletacji niesie:

- towar i wymaganą ilość;
- ilość już skompletowaną oraz ilość **pozostającą** (wymagana minus skompletowana);
- pracownika, który wykonał akcję, i czas akcji;
- opcjonalnie odniesienie do kodu kreskowego towaru dla szybkiego skanowania.

## Typowy przebieg

1. Pracownik magazynu otwiera formularz **„Mobilne zadanie kompletacyjne”** z grupy **„Procesy”**.
2. Wybiera zadanie odpowiadające obsługiwanemu wydaniu.
3. Dla każdej pozycji:
   - skanuje kod kreskowy miejsca składowania/towaru (jeśli włączone);
   - wprowadza faktycznie skompletowaną ilość.
4. Po zakończeniu wszystkich pozycji pracownik potwierdza zadanie. Skompletowane ilości trafiają do wydania źródłowego.

## Powiązanie z wydaniem

W karcie wydania zakładka **„Kompletacja”** pokazuje rezerwacje oraz skompletowane ilości z rozbiciem na [lokalizację](locations.md) źródłową. Zakładka jest widoczna, gdy wydanie jest w statusie **„Oczekiwanie”** lub **„Wykonano”**, a w typie wydania jest włączona kompletacja.
