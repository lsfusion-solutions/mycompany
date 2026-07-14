---
title: Ustawienia i katalogi Produkcji
---

## Lokalizacja

Otwórz **„Produkcja”** → **„Konfiguracja”** → **„Ustawienia”**.

Formularz jest podzielony na zakładki:

- **„Podstawowe”** — parametry ogólne, w szczególności licznik numerów [zestawień materiałowych](bom.md);
- **„Typ zamówienia produkcji”** — katalog typów zamówień (zobacz niżej);
- **„Status zamówienia produkcji”** i **„Status zlecenia produkcji”** — listy statusów z flagą **„Zakaz edytowania”** (zobacz niżej).

## Typy zamówień produkcji

Zakładka **„Typ zamówienia produkcji”** zawiera katalog typów zamówień produkcji. Karta typu definiuje:

- pola **„Nazwa”**, **„ID”** i **„Licznik”** (generowanie numerów);
- w bloku **„Domyślnie”** — pole **„Lokalizacja materiałów”** (domyślna lokalizacja składowania materiałów, podstawiana do nowych zamówień tego typu);
- w bloku **„Inne informacje”** — flagę **„Demontaż”**: zamówienia tego typu wykonują [demontaż](unbuild.md) zamiast produkcji;
- w bloku **„Odpad”** — **„Typ odpadu”**: typ dokumentu [odpadu](scrap.md) tworzonego z zamówienia tego typu.

Jeśli istnieje dokładnie jeden typ, jest on domyślnie podstawiany do nowych zamówień.

Jeśli używane jest [tworzenie z zamówień sprzedaży](sales-orders.md), typ zamówienia produkcji jest także wskazywany w typie zamówienia sprzedaży (blok **„Produkcja”** z polem **„Typ zamówienia produkcji”** i flagą **„Automatycznie utwórz zamówienie produkcyjne”**).

## Statusy i flaga „Zakaz edytowania”

Zestaw statusów zamówienia produkcji jest stały — „Projekt”, „Oczekiwanie”, „Gotowy”, „W trakcie”, „Wykonano”, „Anulowano” (zobacz [przepływ pracy](workflow.md)) — nie można dodawać nowych. Jednak zakładka **„Status zamówienia produkcji”** pokazuje listę statusów, a każdy status ma edytowalną flagę **„Zakaz edytowania”**: gdy jest włączona, każde zamówienie w tym statusie staje się nieedytowalne (nagłówek i linie zablokowane). W ten sposób administratorzy zwykle blokują na przykład zamówienia w statusach „Wykonano” i „Anulowano”.

Zakładka **„Status zlecenia produkcji”** udostępnia takie same flagi **„Zakaz edytowania”** dla statusów [zleceń produkcyjnych](work-orders.md) („Gotowy”, „W trakcie”, „Wykonano”).

Ponadto każde pojedyncze zamówienie produkcji ma własną flagę **„Zakaz edytowania”**, która blokuje tylko ten dokument niezależnie od jego statusu.

## Pozostałe katalogi w grupie „Konfiguracja”

Grupa **„Konfiguracja”** zawiera również:

- **„Operacje”** — katalog [operacji zestawień materiałowych](bom.md) (nazwa, zestawienie materiałowe, stanowisko robocze, czas rozpoczęcia, czas trwania), do których odwołują się zestawienia materiałowe;
- **[„Stanowiska robocze”](work-orders.md)** — katalog stanowisk roboczych (nazwa, ID, opis) używanych przez zlecenia produkcyjne i operacje zestawień materiałowych.

## Rekomendowana kolejność konfiguracji

1. Utwórz typy zamówień produkcji oraz skonfiguruj ich liczniki i lokalizacje materiałów.
2. Jeśli używasz [demontażu](unbuild.md), utwórz typ z flagą **„Demontaż”**.
3. Jeśli rejestrujesz [odpad](scrap.md), ustaw **„Typ odpadu”** na odpowiednich typach zamówień.
4. Jeśli używasz [zleceń produkcyjnych](work-orders.md), utwórz stanowiska robocze (operacje zwykle wprowadza się bezpośrednio w zestawieniach materiałowych).
5. Jeśli zamówienia mają być blokowane po zakończeniu, włącz flagę **„Zakaz edytowania”** dla statusów „Wykonano” i „Anulowano”.
