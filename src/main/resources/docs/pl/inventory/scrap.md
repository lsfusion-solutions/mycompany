---
title: Odpad
---

Odpad służy do rejestrowania zmniejszeń stanów magazynowych z przyczyn niezwiązanych ze sprzedażą:

- uszkodzenia;
- straty;
- wady;
- przeterminowanie;
- zużycie wewnętrzne.

Przyczyna odpisu jest reprezentowana przez **typ** dokumentu (katalog typów odpadu — na przykład „Uszkodzenia”, „Straty”, „Przeterminowanie”), a nie przez osobne pole w pozycji.

Dokument odpadu przechodzi przez statusy **„Projekt” → „Wykonano”**, z **„Anulowano”** jako alternatywnym stanem końcowym.

## Typowy scenariusz

1. Utwórz dokument odpad.
2. Wybierz **„Typ”** — to klasyfikuje przyczynę odpisu.
3. Wskaż [lokalizację](locations.md).
4. Wypełnij pozycje: towar i ilość. Jeżeli dla towaru włączone są [partie](lots-and-packages.md), wskaż również partię w pozycji.
5. Przenieś dokument do statusu **„Wykonano”**.

## Powiązanie z innymi modułami

Odpad może być tworzony na podstawie innych dokumentów (np. zlecenia produkcyjnego, jeśli odpowiedni scenariusz jest włączony).