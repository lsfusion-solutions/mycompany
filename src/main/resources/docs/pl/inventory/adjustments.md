---
title: Korekta zapasów
---

Korekta zapasów (liczenie zapasów) służy do porównania stanu systemowego z faktyczną ilością w [lokalizacji](locations.md).

Otwórz **„Magazynowanie” → „Operacje” → „Korekty zapasów”**.

Korekta przechodzi przez statusy: **„Projekt”** → **„W trakcie”** → **„Wykonano”**, z **„Anulowan”** jako alternatywnym stanem końcowym. Rozbieżność dla każdej pozycji jest przeliczana automatycznie, gdy dokument jest **„W trakcie”** (jako ilość zliczona minus ilość na stanie), a odpowiednie zapisy w rejestrze stanów są tworzone, gdy dokument przechodzi do **„Wykonano”**.

## Typy korekt

Pole **„Typ”** steruje sposobem wypełniania pozycji:

- **„Wszystkie”** — akcja **„Wypełnić”** dodaje wszystkie towary, które mają stan w lokalizacji;
- **„Według kategorii”** — w nagłówku pojawia się dodatkowe pole **„Kategoria”**, a **„Wypełnić”** dodaje tylko towary tej kategorii;
- **„Ręcznie”** — pozycje wprowadza się ręcznie; gdy dokument jest **„W trakcie”**, dostępna jest zakładka **„Wyszukaj”** z drzewem lokalizacji i szybkim wprowadzaniem zliczonych ilości (w tym skanowaniem kodów kreskowych).

## Ilości w pozycji

Każda pozycja niesie dwie ilości:

- **„Ilość na stanie”** — stan systemowy w momencie dodania pozycji (wypełniany automatycznie);
- **„Zliczona ilość”** — ilość policzona, edytowalna, gdy dokument jest **„W trakcie”**.

Dopóki dokument jest jeszcze w statusie **„Projekt”**, zliczona ilość jest wstępnie wypełniana ilością na stanie, więc wystarczy poprawić tylko te pozycje, w których liczenie fizyczne dało inny wynik. Kolumna **„Różnica”** pokazuje ilość zliczoną minus ilość na stanie; pozycje z nadwyżką są wyróżniane na zielono, a pozycje z brakiem — na różowo.

W przeglądzie pomagają szybkie filtry pozycji: **„Różnica”** (F10), **„Nadwyżka”** (F9) i **„Brak”** (F8).

## Akcje przejścia statusu

- **„Oznacz jako Do zrobenia”** — przenosi dokument z **„Projekt”** do **„W trakcie”**;
- **„Zatwierdź”** — przenosi go z **„W trakcie”** do **„Wykonano”** i księguje rozbieżności;
- **„Anuluj”** — przenosi dokument do **„Anulowan”**.

## Typowy przebieg

Poniżej znajduje się rekomendowana sekwencja kroków. Działa zarówno dla pełnej korekty lokalizacji (liczenia), jak i dla liczenia strefy/miejsca składowania.

1. **Przygotowanie**
   - Zdefiniuj **zakres**: [lokalizacja](locations.md)/strefa/miejsce składowania, grupy towarowe, czy potrzebujesz ewidencji [partii/pakietów](lots-and-packages.md).
   - Ustal moment „migawki”:
     - jeśli to możliwe, zakończ otwarte **[przyjęcia](receipts.md)/[wydania](shipments.md)/[przemieszczenia](transfers.md)** dla wybranej [lokalizacji](locations.md);
     - uzgodnij zasady operacyjne na okres liczenia (np. nie księgować dokumentów dla tej lokalizacji lub rejestrować operacje osobno).
2. **Utworzenie dokumentu**
   - Utwórz **korektę zapasów**, wybierz **typ** („Wszystkie” / „Według kategorii” / „Ręcznie”) i wskaż **[lokalizację](locations.md)**.
   - W razie potrzeby ustaw dodatkowe parametry (np. włącz [partie](lots-and-packages.md), **„Pokaż koszt”** lub **„Spisy inwentaryzacyjne”** — patrz niżej).
   - Użyj akcji **„Wypełnić”**, aby wypełnić pozycje (dla typów „Wszystkie” / „Według kategorii”).
3. **Przejście do statusu `W trakcie`**
   - Przenieś korektę do statusu **`W trakcie`** (przycisk **„Oznacz jako Do zrobenia”**).
   - Następnie użyj wybranej metody liczenia: przez spisy inwentaryzacyjne (patrz niżej), zakładkę „Wyszukaj” albo ręczne wprowadzanie.
4. **Wprowadzenie ilości faktycznych**
   - Wypełnij **zliczone ilości** dla towarów.
   - Jeżeli włączona jest ewidencja partii/serii, wprowadź ilości **wg [partii](lots-and-packages.md)** na zakładce **„Partie”** (to samo wyróżnianie nadwyżek/braków działa per partia).
   - Jeżeli używana jest ewidencja adresowa, upewnij się, że wprowadzasz ilości dla **wymaganej strefy/miejsca składowania** (każda pozycja ma własną podlokalizację).
5. **Przegląd i uzgodnienie**
   - System na bieżąco pokazuje **rozbieżność** dla każdej pozycji — ilość zliczoną minus ilość na stanie — oraz udostępnia szybkie filtry **„Różnica”**, **„Nadwyżka”** i **„Brak”**.
   - Sprawdź pozycje z zerowymi/nietypowymi wartościami.
   - Jeśli rozbieżności są duże:
     - ponownie sprawdź **jednostki miary**;
     - zweryfikuj, że wybrana **[lokalizacja](locations.md)** odpowiada fizycznej.
   - Jeśli wymagane, uzgodnij rozbieżności z osobą odpowiedzialną.
6. **Zakończenie (przejście do „Wykonano”)**
   - Przenieś korektę do statusu **„Wykonano”**.
   - W tym momencie system księguje rozbieżności w rejestrze stanów, doprowadzając stany do ilości zliczonych (w ramach zasad księgowych Twojej konfiguracji). Zakładka **„Zmiany”** zakończonego dokumentu pokazuje dokładnie, co zostało zaksięgowane.

## Spisy inwentaryzacyjne

Dla dużych liczeń włącz na korekcie flagę **„Spisy inwentaryzacyjne”** — na zakładce **„Spisy inwentaryzacyjne”** staje się dostępny osobny mechanizm „list spisowych”:

- utwórz jedną lub więcej **list** (każda z własnym numerem) i rozdaj je zespołom liczącym;
- każda lista rejestruje zliczone ilości per towar i podlokalizacja; wspierane jest skanowanie kodów kreskowych;
- wyniki ze wszystkich list są automatycznie sumowane do **zliczonych ilości** pozycji korekty;
- listy stają się tylko do odczytu, gdy korekta opuszcza status **„W trakcie”**.

To oddziela liczenie fizyczne (kilka zespołów, kilka list) od wyliczania rozbieżności (jeden dokument korekty).

## Wycena nadwyżek („Pokaż koszt”)

Jeżeli na korekcie włączona jest flaga **„Pokaż koszt”**, pozycje pokazują **„Bieżący koszt za jednostkę”** i pozwalają ręcznie wprowadzić **koszt jednostkowy**. Wprowadzony koszt jest używany do wyceny nadwyżek (przychodowe zapisy w rejestrze kosztów); braki są odpisywane automatycznie zgodnie z metodą kalkulacji kosztu towaru — zobacz [kalkulacja kosztu pozycji](costing.md).

## Tworzenie zbiorcze

Lista korekt ma zakładkę **„Utwórz”**, która pokazuje wszystkie aktywne lokalizacje wraz z datą, typem i statusem ich ostatniej korekty. Stamtąd można jednym kliknięciem utworzyć korektę dla lokalizacji (i od razu zobaczyć, które towary ze stanem obejmie). Jest to wygodne przy organizacji liczenia cyklicznego lokalizacja po lokalizacji.

## Drukowanie

- **„Drukuj”** — drukuje arkusz spisowy / wyniki korekty według konfigurowalnego szablonu;
- **„Etykiety”** — drukuje etykiety towarów ze zliczonymi ilościami.

## Typowe problemy

- **Nie można zakończyć** — zliczone ilości nie są uzupełnione lub rozbieżności nie zostały obliczone.
- **Rozbieżności są zbyt duże** — sprawdź jednostki miary i wybraną [lokalizację](locations.md).
- **Zliczone ilości wprowadzone w listach nie są widoczne w pozycjach** — upewnij się, że listy należą do bieżącej korekty, a dokument jest nadal w statusie **„W trakcie”**.
