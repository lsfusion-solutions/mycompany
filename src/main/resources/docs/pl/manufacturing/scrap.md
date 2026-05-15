---
title: Odpad
---

W ramach [zamówienia produkcji](orders.md) można utworzyć dokument **Odpad** powiązany z zamówieniem.

## Kiedy używać

Używaj **Odpadu**, jeśli chcesz zarejestrować odpad materiałów lub produktów z powodu wad i ważne jest zachowanie powiązania z [zamówieniem produkcji](orders.md).

## Jak utworzyć Odpad z zamówienia produkcji

W karcie [zamówienia produkcji](orders.md) może być dostępna akcja **„Odpad”**.

Specyfika:

- akcja jest dostępna, jeśli dla typu zamówienia produkcji wskazano **typ Odpadu**;
- utworzony dokument automatycznie zawiera powiązane [zamówienie produkcji](orders.md);
- lokalizacja magazynowa jest pobierana z lokalizacji materiałów zamówienia.

## Wpływ na zapasy i koszt

Odpad to pełnoprawny dokument [odpadu magazynowego](../inventory/scrap.md): po jego zakończeniu odpisywane pozycje są zdejmowane z lokalizacji składowania przez rejestr stanów. Gdy odpad jest powiązany z zamówieniem produkcji, jego koszt jest również dodawany do kosztu tego zamówienia, więc wartość odpisanego odpadu jest odzwierciedlona w koszcie wyprodukowanych towarów.

## Gdzie zobaczyć powiązane odpady

Karta [zamówienia produkcji](orders.md) pokazuje blok powiązanych **Odpadów**. Z niego możesz otworzyć dokument do podglądu i edycji.

## Rekomendacje

- utwórz **Odpad** przed ustawieniem zamówienia na **Wykonano**, aby dane faktyczne były spójne;
- upewnij się, że wybrano właściwą lokalizację materiałów.