---
title: Produkcja — dokumentacja użytkownika
---

Dokumentacja opisuje, jak działa sekcja **„Produkcja”**: prowadzenie [zestawień materiałowych](bom.md), tworzenie i realizację [zamówień produkcji](orders.md), rezerwację materiałów, produkcję wyrobów gotowych, rejestrowanie **[odpadu](scrap.md)**, drukowanie i raporty.

## Spis treści

- [Szybki start](#szybki-start)
- [Nawigacja](#nawigacja)
- [Terminy](#terminy)

Dokumenty powiązane:

- [Zestawienia materiałowe](bom.md)
- [Zamówienia produkcji: lista i karta](orders.md)
- [Tworzenie zamówień produkcji z zamówień sprzedaży](sales-orders.md)
- [Proces i statusy zamówienia produkcji](workflow.md)
- [Produkcja i zużycie](production-and-consumption.md)
- [Koszt wytworzenia: jak jest liczony](costing.md)
- [Demontaż](unbuild.md)
- [Produkty uboczne](by-products.md)
- [Partie i drukowanie](lots-and-printing.md)
- [Odpad](scrap.md)
- [Stanowiska robocze i zlecenia produkcyjne](work-orders.md)
- [Raporty](reports.md)
- [Ustawienia i katalogi Produkcji](settings.md)

Powiązane integracje:

- [Autodesk](../masterdata/autodesk/autodesk.md) — łączenie modeli 3D z Autodesk Platform Services (APS) z zestawieniami materiałowymi i zamówieniami produkcji.

## Szybki start

Poniżej znajduje się typowy scenariusz „od [zestawienia materiałowego](bom.md) do [produkcji i zużycia](production-and-consumption.md)”.

1. Upewnij się, że dla towaru istnieje **zestawienie materiałowe** (zobacz: [Zestawienie materiałowe](bom.md)).
2. Utwórz **[zamówienie produkcji](orders.md)**:
   - wybierz typ zamówienia;
   - wskaż towar do wytworzenia;
   - ustaw planowaną datę rozpoczęcia;
   - jeśli trzeba, wybierz [zestawienie materiałowe](bom.md).
3. Uzupełnij planowane ilości — uruchom **„Utwórz linie”** i podaj ilość do wyprodukowania; linie materiałów i linie produktów zostaną wygenerowane na podstawie zestawienia materiałowego.
4. Uruchom **„Oznacz jako Do zrobienia”**, a następnie sprawdź dostępność materiałów i zarezerwuj:
   - uruchom akcję **„Sprawdź dostępność”**;
   - jeśli kontrola przebiegnie pomyślnie, zamówienie przejdzie do statusu **„Gotowy”**.
5. Uruchom **„Produkcja”** (przenieś zamówienie do statusu **„W trakcie”**) i zarejestruj wytworzenie.
6. Uruchom **„Zatwierdź”** i wskaż pole **„Lokalizacja produktów”** (lokalizację magazynową wyrobów gotowych).

## Nawigacja

Sekcja jest widoczna w drzewie nawigacji jako **„Produkcja”** i zwykle zawiera cztery grupy:

- **„Operacje”** — **„Zestawienia materiałowe”** ([lista zestawień](bom.md)), **„Zamówienia produkcji”** ([zamówienia](orders.md)) i **„Zlecenia produkcyjne”** ([zlecenia produkcyjne](work-orders.md)).
- **„Procesy”** — panele kontrolne, w szczególności [tablica](work-orders.md) **„Obciążenie stanowisk roboczych”**.
- **„Raportowanie”** — **„Raport zamówień”** ([raporty produkcyjne](reports.md)).
- **„Konfiguracja”** — katalogi i parametry: formularz **„Ustawienia”** (z [typami zamówień](settings.md) i flagami statusów), **„Operacje”** ([operacje zestawień materiałowych](bom.md)) oraz **„Stanowiska robocze”** ([stanowiska robocze](work-orders.md)).

## Terminy

#### [Zamówienie produkcji](orders.md)

Dokument, w którym planujesz i rejestrujesz produkcję towaru (lub [demontaż](unbuild.md), jeśli wybrano odpowiedni typ).

#### [Zestawienie materiałowe](bom.md)

Opis struktury towaru: jakie materiały i w jakich ilościach są potrzebne do wytworzenia.

#### Rezerwacja materiałów

Procedura, w której system zapisuje, że wymagana ilość materiałów będzie użyta dla konkretnego zamówienia produkcji.

#### [Produkcja i zużycie](production-and-consumption.md)

Produkcja to rejestracja wytworzonej ilości. Zużycie to rejestracja faktycznie zużytych materiałów.
