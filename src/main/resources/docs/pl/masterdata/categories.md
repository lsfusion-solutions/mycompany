---
title: Kategorie
---

Słownik **„Kategorie”** służy do grupowania towarów. Kategorie mogą być hierarchiczne (drzewo): kategoria może mieć kategorię nadrzędną.

## Lista i drzewo

Zwykle dostępne są dwa widoki:

- **Lista** — płaska lista kategorii;
- **Drzewo** — hierarchia kategorii.

## Karta kategorii

Typowe pola:

- **Nazwa**;
- **ID** (może być generowane automatycznie);
- **Rodzic** — pole wymagane: każda kategoria oprócz korzenia ma kategorię nadrzędną;
- **Zarchiwizowane**.

Karta zawiera pole **„Prefiks”** nazwy — jest ono dodawane na początku **pełnej nazwy** wszystkich pozycji tej kategorii. Zakładka **„Wartości domyślne”** przechowuje domyślną **jednostkę miary**: jest ona podstawiana (z uwzględnieniem najbliższej kategorii nadrzędnej, w której ją określono) przy ustawianiu kategorii pozycji z pustą jednostką; nie zmienia pozycji, które już mają jednostkę, a późniejsza zmiana wartości domyślnej nie aktualizuje istniejących pozycji.

## Tworzenie podkategorii

W widoku **„Drzewo”** wybierz kategorię nadrzędną i kliknij przycisk **„Kategoria”** na pasku narzędzi — nowa kategoria zostanie utworzona jako podrzędna wybranej. W widoku **„Lista”** utwórz nową pozycję i wskaż nadrzędną ręcznie.

## Ograniczenia

Jeśli kategoria jest używana w innych kategoriach (jako nadrzędna) lub w towarach, usunięcie może być zabronione. W takim przypadku użyj archiwizacji.