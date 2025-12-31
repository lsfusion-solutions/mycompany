---
title: Produkcja — dokumentacja użytkownika
---

Ta dokumentacja opisuje, jak działa sekcja **„Produkcja”**: prowadzenie [zestawień materiałów](bom.md), tworzenie i realizację [zamówień produkcji](orders.md), rezerwacje materiałów, produkcję wyrobów gotowych, rejestrowanie **[odpadu](scrap.md)**, drukowanie i raporty.

## Spis treści

- [Szybki start](#quick-start)
- [Nawigacja](#navigation)
- [Terminy](#terms)

Dokumenty powiązane:

- [Zestawienia materiałów](bom.md)
- [Zamówienia produkcji: lista i karta](orders.md)
- [Tworzenie zamówień produkcji z zamówień sprzedaży](sales-orders.md)
- [Proces i statusy zamówienia produkcji](workflow.md)
- [Produkcja i zużycie](production-and-consumption.md)
- [Koszt wytworzenia: jak jest liczony](costing.md)
- [Demontaż](unbuild.md)
- [Produkty uboczne](by-products.md)
- [Partie i drukowanie](lots-and-printing.md)
- [Odpad](scrap.md)
- [Raporty](reports.md)
- [Ustawienia i katalogi Produkcji](settings.md)

## Szybki start

Poniżej znajduje się typowy scenariusz „od [Zestawienia materiałów](bom.md) do [produkcji i zużycia](production-and-consumption.md)”.

1. Upewnij się, że istnieje **Zestawienie materiałów** dla towaru (zobacz: [Zestawienie materiałów](bom.md)).
2. Utwórz **[zamówienie produkcji](orders.md)**:
   - wybierz typ zamówienia;
   - wskaż towar do wytworzenia;
   - ustaw planowaną datę rozpoczęcia;
   - jeśli trzeba, wybierz [Zestawienie materiałów](bom.md).
3. Uzupełnij planowane ilości:
   - ile sztuk/jednostek wyprodukować;
   - jakie materiały będą zużywane i w jakich ilościach.
4. Sprawdź dostępność materiałów i zarezerwuj:
   - uruchom akcję **„Sprawdź dostępność”**;
   - jeśli kontrola przebiegnie pomyślnie, zamówienie przejdzie do stanu **„Gotowy”**.
5. Uruchom **„Produkcja”** (przenieś zamówienie do **„W trakcie”**) i zarejestruj wytworzenie.
6. Uruchom **„Zatwierdż”** i wskaż **„Lokalizacja produktów”** (lokalizacja magazynowa wyrobów gotowych).

## Nawigacja

Sekcja jest widoczna w drzewie nawigacji jako **„Produkcja”** i zwykle zawiera grupy:

- **Operacje** — zamówienia produkcji i powiązane akcje.
- **Raportowanie** — raporty produkcyjne.
- **Ustawienia** — katalogi i parametry Produkcji.

## Terminy

#### [Zamówienie produkcji](orders.md)

Dokument, w którym planujesz i rejestrujesz produkcję towaru (lub [demontaż](unbuild.md), jeśli wybrano odpowiedni typ).

#### [Zestawienie materiałów](bom.md)

Opis struktury towaru: jakie materiały i w jakich ilościach są potrzebne do wytworzenia.

#### Rezerwacja materiałów

Procedura, w której system zapisuje, że wymagana ilość materiałów będzie użyta dla konkretnego zamówienia produkcji.

#### [Produkcja i zużycie](production-and-consumption.md)

Produkcja to rejestracja wytworzonej ilości. Zużycie to rejestracja faktycznie zużytych materiałów.