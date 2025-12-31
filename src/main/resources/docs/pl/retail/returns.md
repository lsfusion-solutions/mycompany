---
title: Zwroty detaliczne
---

Ta strona opisuje typowy proces zwrotu towarów przez klienta w **[POS](pos.md)**: jak znaleźć oryginalny paragon, utworzyć zwrot według pozycji paragonu oraz wypłacić środki.

> Jeśli w Twojej konfiguracji brakuje niektórych akcji lub pól, jest to normalne: zestaw dostępnych funkcji zależy od włączonych modułów i ustawień.

## Gdzie to znaleźć

- POS: **„Sprzedaż detaliczna” → „Operacje”**.

## Zanim przetworzysz zwrot

1. Upewnij się, że dla kasy jest otwarta sesja (zobacz [Sesje](sessions.md)).
2. Przygotuj informacje o oryginalnej sprzedaży:
   - numer paragonu (jeśli jest znany);
   - data/godzina zakupu;
   - kupione towary i przybliżone ilości.

## Zwrot na podstawie oryginalnego paragonu

To główny scenariusz: zwrot jest przetwarzany na podstawie wcześniej wystawionego paragonu sprzedaży.

### Krok 1. Znajdź oryginalny paragon

POS zwykle udostępnia listę paragonów. Przełącz filtr listy, aby zobaczyć wymagany paragon:

- **według bieżącej sesji**;
- **według kasy**.

Wybierz na liście oryginalny paragon sprzedaży.

### Krok 2. Utwórz zwrot

Uruchom akcję **„Zwrot”**.

System utworzy zwrot dla wybranego paragonu i zazwyczaj:

- uzupełni klienta z oryginalnego paragonu;
- uzupełni pozycje zwrotu towarami z oryginalnego paragonu;
- skopiuje ceny/rabaty tak, aby kwota zwrotu odpowiadała wybranym towarom i ilościom.

### Krok 3. Dostosuj towary i ilości zwracane

Sprawdź pozycje zwrotu:

1. Jeśli nie wszystko jest zwracane, zmniejsz ilość dla wymaganych pozycji.
2. Jeśli pozycja nie powinna być zwrócona, usuń ją ze zwrotu.

Jeśli w Twojej konfiguracji jest włączona kontrola ilości zwrotu, system nie pozwoli zwrócić więcej, niż sprzedano na oryginalnym paragonie.

### Krok 4. Wypłać środki (płatność zwrotu)

Wypłata jest realizowana w oddzielnym formularzu płatności zwrotu:

1. Sprawdź kwotę zwrotu.
2. Wprowadź kwoty dla jednej lub kilku metod płatności.
3. Potwierdź wypłatę.

#### Ważna zasada dotycząca metod płatności

W niektórych konfiguracjach obowiązuje ograniczenie: **nie możesz zwrócić większej kwoty daną metodą płatności, niż została zapłacona tą metodą płatności w oryginalnym paragonie**.

Przykład: jeśli zakup został opłacony częściowo gotówką, a częściowo kartą bankową, zwrot zwykle również musi zostać rozdzielony na te same metody płatności w ramach zapłaconych kwot.

Po potwierdzeniu płatności zwrotu POS zwykle tworzy nowy paragon do dalszej pracy.

## Typowe przypadki

### Nie można zrealizować zwrotu: brak otwartej sesji

Otwórz sesję dla wymaganej kasy i spróbuj ponownie. Zwroty są realizowane w ramach sesji.

### Nie można potwierdzić kwoty płatności zwrotu

Sprawdź, czy:

- łączna kwota dla wszystkich wybranych metod płatności jest **równa** kwocie zwrotu;
- dla każdej metody płatności kwota zwrotu nie przekracza kwoty zapłaconej tą metodą płatności w oryginalnym paragonie (jeśli takie ograniczenie jest włączone).

### Brak oryginalnego paragonu

W podstawowym scenariuszu zwrot jest realizowany na podstawie oryginalnego paragonu. Jeśli nie masz paragonu:

1. Spróbuj znaleźć sprzedaż według daty/godziny i kasy.
2. Jeśli sprzedaży nie ma na liście, skontaktuj się z administratorem (możesz potrzebować dodatkowych uprawnień lub innego scenariusza zwrotu w Twojej konfiguracji).