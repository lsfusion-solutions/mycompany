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
- **Przedsiębiorstwo**;
- **Okres**.

## Linie naliczeń

Linie naliczeń pokazują **jak została utworzona kwota**. Linia zwykle ma:

- **typ naliczenia** (np. wynagrodzenie, premia, podatek, przychody na podstawie czasu);
- **ilość** (np. godziny);
- **kwota** (np. stawka godzinowa);
- **suma** (suma linii).

Linia może być **przychodem** lub **potrąceniem**. Potrącenia zmniejszają „Wynagrodzenie netto”.

### Flagi „Pomiń” i „Ukryj”

- **„Pomiń”** — linia nie uczestniczy w obliczaniu „Wynagrodzenie netto”.
- **„Ukryj”** — linia nie jest pokazywana w tabeli, ale może uczestniczyć w obliczeniu (jeśli nie jest oznaczona jako „Pomiń”).

Szczegółowa reguła: [Jak obliczana jest suma „Wynagrodzenie netto”](net-wage.md).

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