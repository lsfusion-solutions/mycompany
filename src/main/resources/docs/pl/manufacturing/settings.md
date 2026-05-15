---
title: Ustawienia i katalogi Produkcji
---

## Lokalizacja

Otwórz **„Produkcja”** → **„Konfiguracja”** → **„Ustawienia”**.

## Typy zamówień produkcji

Konfiguracja zawiera katalog typów zamówień produkcji. Zwykle typ definiuje:

- nazwę i identyfikator;
- numerator (generowanie numeru);
- lokalizację materiałów (domyślną lokalizację składowania materiałów);
- flagę **„Demontaż”** — zamówienia tego typu wykonują [demontaż](unbuild.md) zamiast produkcji;
- **typ Odpadu** — typ dokumentu [odpadu](scrap.md) tworzonego z zamówienia tego typu.

Jeśli istnieje tylko jeden typ, jest używany jako domyślny.

## Statusy i flaga „Tylko do odczytu”

Zestaw statusów zamówienia produkcji jest stały — „Projekt”, „Oczekiwanie”, „Gotowe”, „W toku”, „Wykonano”, „Anulowano” (zobacz [przepływ pracy](workflow.md)) — nie można dodawać nowych. Jednak formularz „Ustawienia” pokazuje listę statusów, a każdy status ma edytowalną flagę **„Tylko do odczytu”**: gdy jest włączona, każde zamówienie w tym statusie staje się nieedytowalne (nagłówek i linie zablokowane). W ten sposób administratorzy zwykle blokują na przykład zamówienia Wykonano i Anulowano.

Ponadto każde pojedyncze zamówienie produkcji ma własną flagę **„Tylko do odczytu”**, która blokuje tylko ten dokument niezależnie od jego statusu.

## Pozostałe katalogi w grupie „Konfiguracja”

Grupa **„Konfiguracja”** zawiera również:

- **[Operacje specyfikacji](bom.md)** — katalog operacji, do których można się odwołać ze specyfikacji materiałowej;
- **[Centra robocze](work-orders.md)** — katalog centrów roboczych używanych przez zlecenia robocze.

## Rekomendowana kolejność konfiguracji

1. Utwórz typy zamówień produkcji oraz skonfiguruj ich numeratory i lokalizacje materiałów.
2. Jeśli używasz [demontażu](unbuild.md), utwórz typ z flagą **„Demontaż”**.
3. Jeśli rejestrujesz [odpad](scrap.md), ustaw **typ Odpadu** na odpowiednich typach zamówień.
4. Jeśli używasz [zleceń roboczych](work-orders.md), utwórz centra robocze i operacje specyfikacji.
