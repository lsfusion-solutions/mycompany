---
title: Zadania kompletacyjne
---

Zadania kompletacyjne służą do organizacji kompletacji w [lokalizacji](locations.md) podczas realizacji [wydania](shipments.md).

## Kiedy powstaje zadanie kompletacyjne

Są tu dwie powiązane flagi, które robią różne rzeczy:

- **„Kompletacja”** (na **typie wydania**) — włącza na karcie wydania zakładkę **„Kompletacja”**, na której widoczne są rezerwacje i skompletowane ilości w rozbiciu na źródłową [lokalizację](locations.md).
- **„Zadanie kompletacyjne”** — tworzy odrębny rekord **zadania kompletacyjnego** dla pracownika magazynu. Ta flaga istnieje zarówno na **typie wydania**, jak i **na samym wydaniu**. Flaga na typie jedynie **ustawia wartość domyślną** dla odpowiedniej flagi na wydaniu w momencie wyboru typu; system sprawdza flagę **na wydaniu**, gdy decyduje, czy utworzyć zadanie. W efekcie zmiana flagi na typie nie wpływa wstecz na już istniejące wydania, a flagę można też wyłączyć na konkretnym wydaniu, aby zablokować tworzenie zadania.

Zadanie kompletacyjne jest tworzone automatycznie dla wydania spełniającego jednocześnie oba warunki:

- na samym **wydaniu** włączona jest flaga **„Zadanie kompletacyjne”** (domyślnie podstawiana z typu przy wyborze typu);
- wydanie zostało przeniesione do statusu **„Gotowy”**.

Jeżeli na typie wydania włączona jest tylko **„Kompletacja”**, a **„Zadanie kompletacyjne”** jest wyłączone, zakładka „Kompletacja” jest widoczna, ale odrębny rekord zadania nie powstaje.

Kompletacja nie jest więc osobną pozycją menu — to scenariusz uruchamiany na bazie istniejącego wydania.

## Struktura

Każde zadanie kompletacyjne zawiera jedną lub więcej **pozycji kompletacji**. Pozycja kompletacji niesie:

- towar do skompletowania i wymaganą ilość;
- ilość już skompletowaną oraz ilość **pozostającą** (wymagana minus skompletowana);
- pracownika, który wykonał akcję, i czas akcji;
- opcjonalnie odniesienie do kodu kreskowego towaru dla szybkiego skanowania.

## Typowy przebieg

1. Pracownik magazynu otwiera formularz **„Mobilna kompletacja”** z grupy **„Procesy”** (**„Magazynowanie” → „Procesy” → „Mobilna kompletacja”**).
2. Wybiera zadanie odpowiadające obsługiwanemu wydaniu.
3. Dla każdej pozycji:
   - skanuje kod kreskowy miejsca składowania/towaru (jeśli włączone);
   - wprowadza faktycznie skompletowaną ilość.
4. Po skompletowaniu wszystkiego pracownik potwierdza zadanie przyciskiem **„Zatwierdź”**. Skompletowane ilości trafiają do wydania źródłowego.

Skompletowane ilości można wprowadzić także bez formularza mobilnego — bezpośrednio na karcie wydania.

## Powiązanie z wydaniem

W karcie wydania zakładka **„Kompletacja”** pokazuje rezerwacje oraz skompletowane ilości z rozbiciem na [lokalizację](locations.md) źródłową. Zakładka jest widoczna od momentu oznaczenia wydania do obsługi (status **„Oczekiwanie”** i wszystkie późniejsze, w tym **„Gotowy”** i **„Wykonano”**), jeśli w typie wydania jest włączona kompletacja. Gdy używane są [partie](lots-and-packages.md), skompletowaną ilość w ramach lokalizacji można dodatkowo uszczegółowić według partii.
