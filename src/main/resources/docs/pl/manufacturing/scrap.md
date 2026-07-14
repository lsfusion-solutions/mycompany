---
title: Odpad
---

W ramach [zamówienia produkcji](orders.md) można utworzyć dokument **Odpad** powiązany z zamówieniem.

## Kiedy używać

Używaj **Odpadu**, jeśli chcesz zarejestrować odpad materiałów lub produktów z powodu wad i ważne jest zachowanie powiązania z [zamówieniem produkcji](orders.md).

## Jak utworzyć Odpad z zamówienia produkcji

W karcie [zamówienia produkcji](orders.md) dostępna jest akcja **„Odpad”**.

Specyfika:

- akcja jest widoczna tylko wtedy, gdy dla [typu zamówienia produkcji](settings.md) wskazano **„Typ odpadu”**;
- utworzony dokument automatycznie zawiera link do [zamówienia produkcji](orders.md);
- lokalizacja magazynowa jest pobierana z pola **„Lokalizacja materiałów”** zamówienia.

## Wpływ na zapasy i koszt

**Odpad** to pełnoprawny dokument [odpadu magazynowego](../inventory/scrap.md): po jego zakończeniu odpisywane pozycje są zdejmowane z lokalizacji magazynowej przez rejestr stanów. Gdy odpad jest powiązany z zamówieniem produkcji, jego koszt jest dodawany do składnika **„Dodatkowy koszt”** zamówienia, dzięki czemu wartość odpisanego odpadu jest odzwierciedlona w [łącznym koszcie](costing.md) wyprodukowanych towarów.

## Gdzie zobaczyć powiązane odpady

Karta [zamówienia produkcji](orders.md) pokazuje blok **„Odpady”** (z licznikiem dokumentów) z listą powiązanych odpadów wraz z ich numerem, datą, statusem i typem. Z niego możesz otworzyć dokument do podglądu i edycji.

## Rekomendacje

- utwórz **Odpad** przed zatwierdzeniem zamówienia (statusem **„Wykonano”**), aby dane faktyczne były spójne;
- upewnij się, że wybrano właściwą lokalizację materiałów.
