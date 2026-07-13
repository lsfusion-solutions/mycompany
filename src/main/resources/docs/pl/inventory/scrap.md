---
title: Odpad
---

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Operacje” → „Odpady”**.

## Cel

Odpad służy do rejestrowania zmniejszeń stanów magazynowych z przyczyn niezwiązanych ze sprzedażą:

- uszkodzenia;
- straty;
- wady;
- przeterminowanie;
- zużycie wewnętrzne.

Przyczyna odpisu jest reprezentowana przez **typ** dokumentu (katalog typów odpadu — na przykład „Uszkodzenia”, „Straty”, „Przeterminowanie”), a nie przez osobne pole w pozycji. Typy odpadu konfiguruje się w **„Magazynowanie” → „Konfiguracja” → „Ustawienia”**; każdy typ ma własny **licznik** (regułę numeracji) i domyślną **lokalizację**.

Dokument odpadu przechodzi przez statusy **„Projekt” → „Wykonano”**, z **„Anulowan”** jako alternatywnym stanem końcowym.

## Karta odpadu

W nagłówku wypełnia się:

- **Typ** — wymagane; klasyfikuje przyczynę odpisu i określa numerację;
- **Data**, **Numer**;
- **Lokalizacja** — wymagane; skąd towar jest odpisywany;
- **Notatka**.

Pozycje zawierają **towar**, jego **JM**, **kod kreskowy/ID/odnośnik** oraz **ilość** do odpisania.

Przyciski akcji:

- **„Zatwierdź”** — potwierdza odpis (widoczny w statusie Projekt);
- **„Anuluj”** — przenosi dokument do statusu Anulowan;
- **„Kopiuj”** — tworzy nowy odpad w statusie Projekt z tym samym nagłówkiem i pozycjami;
- **„Drukuj”** — drukuje dokument według konfigurowalnego szablonu (szablony można przypisywać per typ odpadu);
- **„Etykiety”** — drukuje etykiety towarów.

Podobnie jak inne dokumenty Magazynowania, karta ma zakładki **„Wyszukaj”** (wyszukiwanie towarów według kategorii z ilościami na stanie i szybkim wprowadzaniem, plus pole wprowadzania kodu kreskowego), **„Historia”** i **„Komentarze”**.

## Typowy scenariusz

1. Utwórz dokument odpad.
2. Wybierz **„Typ”** — to klasyfikuje przyczynę odpisu.
3. Wskaż [lokalizację](locations.md).
4. Wypełnij pozycje: towar i ilość. Jeżeli dla towaru włączone są [partie](lots-and-packages.md), wskaż również partię w pozycji — zakładka **„Partie”** pokazuje rozbicie na partie, a kody kreskowe partii można skanować.
5. Przenieś dokument do statusu **„Wykonano”**.

## Wpływ na stan i koszt

Gdy dokument zostaje przeniesiony do statusu **„Wykonano”**:

- do rejestru stanów zapisywany jest zapis rozchodowy — ilość na stanie w lokalizacji maleje;
- do [rejestru kosztów](costing.md) zapisywany jest zapis rozchodowy — kwota odpisu jest liczona automatycznie zgodnie z metodą kalkulacji kosztu towaru (FIFO/średni/planowany).

## Powiązanie z innymi modułami

Odpad może być tworzony na podstawie innych dokumentów:

- z **[przyjęcia](receipts.md)** — akcja **„Odpad”** na zakończonym przyjęciu otwiera nowy odpad wstępnie wypełniony lokalizacją i towarami przyjęcia (przydatne przy odpisywaniu towaru uszkodzonego w transporcie);
- ze zlecenia produkcyjnego, jeśli odpowiedni scenariusz jest włączony.
