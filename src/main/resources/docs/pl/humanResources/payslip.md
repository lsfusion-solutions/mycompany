---
title: Odcinek płacowy
---

Odcinek płacowy jest dokumentem naliczenia wynagrodzenia pracownika za okres. Zawiera:

- linie naliczeń (przychody i potrącenia);
- sumę **„Wynagrodzenie netto”**;
- (jeśli używane) szczegóły danych źródłowych, np. listę wpisów przepracowanego czasu.

## Pola odcinka płacowego

Przed analizą naliczeń upewnij się, że w odcinku płacowym poprawnie wskazano:

- **Pracownik**;
- **Firma**;
- **Okres**;
- **Typ** (na przykład Standardowy);
- **Waluta** i **Termin**.

Jeśli w systemie istnieje tylko jeden typ odcinka płacowego, zostanie domyślnie ustawiony automatycznie.

## Obliczanie wynagrodzenia

Wiersze **„Obliczanie wynagrodzenia”** pokazują, **jak została utworzona kwota**. Wiersz zwykle ma:

- **kategorię** (na przykład Wynagrodzenie, Premia, Podatek);
- **ilość** (np. godziny);
- **kwotę** (np. stawka godzinowa);
- **sumę** — obliczaną jako `ilość × kwota` (sumę można też wpisać bezpośrednio — wtedy kwota jest przeliczana wstecz).

To, czy wiersz jest **przychodem** czy **potrąceniem**, zależy od jego **kategorii**: kategoria oznaczona jako potrącenie zmniejsza „Wynagrodzenie netto”.

Ręczne wiersze dodaje się przyciskiem **„Add”** (klawisz `Insert`), a usuwa akcją **„Usuń”** wiersza.

### Flagi „Pomiń” i „Ukryj”

Flagi te należą do **kategorii**, a nie do pojedynczego wiersza:

- **„Pomiń”** — wiersze tej kategorii nie uczestniczą w obliczaniu „Wynagrodzenia netto”.
- **„Ukryj”** — wiersze tej kategorii nie są pokazywane w tabeli, ale uczestniczą w obliczeniu (chyba że kategoria jest też oznaczona jako „Pomiń”).

Szczegółowa reguła: [Jak obliczana jest suma „Wynagrodzenie netto”](net-wage.md).

## Kopiowanie odcinka płacowego

Akcja **„Kopiuj”** tworzy nowy odcinek płacowy na podstawie bieżącego, kopiując **okres**, **pracownika**, **firmę**, **typ** oraz ręcznie wprowadzone wiersze. Numer jest nadawany na nowo; termin, powiązanie z partią odcinków płacowych i waluta (ustawiana na domyślną) nie są przenoszone. Przychody wygenerowane z wpisów przepracowanego czasu z projektów nie są kopiowane; akcja **„Wygeneruj”** jest dostępna tylko w partii odcinków płacowych, więc aby je przeliczyć, powiąż nowy odcinek z partią (pole **„Partia odcinków płacowych”**) i uruchom tam **„Wygeneruj”** — albo wprowadź wiersze ręcznie. Po skopiowaniu sprawdź okres.

## Gdzie sprawdzać dane przepracowanego czasu

Jeśli w organizacji część przychodów jest naliczana na podstawie przepracowanego czasu z sekcji „Zarządzanie projektami”, odcinek płacowy może zawierać zakładkę **„Przepracowany czas”**.

Wygodnie jest sprawdzić:

- które rekordy weszły do naliczenia;
- datę, projekt, typ i liczbę godzin;
- „Wynagrodzenie za godzinę” oraz kwotę dla rekordu.

Zobacz: [Wypłata na podstawie przepracowanego czasu](payroll-time-entries.md).

## Rejestruj płatność (jeśli używane)

Jeśli włączona jest rejestracja płatności po odcinkach płacowych, odcinek płacowy ma akcję **„Rejestruj płatność”**.

Zalecany przebieg:

1. Otwórz odcinek płacowy i upewnij się, że **„Wynagrodzenie netto”** jest poprawne.
2. Uruchom **„Rejestruj płatność”**.
3. Sprawdź kwotę płatności i w razie potrzeby dostosuj ją (w ramach dostępnego salda).
4. Zapisz płatność.

Zobacz: [Wypłata wynagrodzenia i kontrola płatności](payroll-payments.md).