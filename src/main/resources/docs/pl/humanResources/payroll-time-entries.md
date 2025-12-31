---
title: Wypłata na podstawie przepracowanego czasu (Projekty)
---

W niektórych organizacjach część przychodów może być naliczana na podstawie **przepracowanego czasu** z sekcji **„Zarządzanie projektami”** (ewidencja nakładu pracy wg projektów i zadań).

Z reguły takie przychody pojawiają się w odcinku płacowym jako osobne linie (np. per projekt), a rekordy źródłowe można zobaczyć w zakładce **„Przepracowany czas”**.

## Co jest uwzględniane w obliczeniu

Podczas generowania odcinka płacowego za okres system bierze **wszystkie wpisy przepracowanego czasu pracownika** dla tego okresu, w których wybrany jest **projekt**, i sumuje godziny **per projekt**.

Jeśli wpis przepracowanego czasu został utworzony **bez projektu**, **nie uczestniczy** w naliczaniu wynagrodzenia na podstawie czasu.

## Jak obliczana jest kwota

Dla każdego projektu wyliczany jest przychód:

- **godziny** — łączna liczba godzin wg wpisów przepracowanego czasu pracownika za okres (dla danego projektu);
- **kwota** — `hours × „Wynagrodzenie za godzinę”`.

Kwota przychodu jest zaokrąglana do 2 miejsc po przecinku.

## Skąd pochodzi „Wynagrodzenie za godzinę”

Stawka **„Wynagrodzenie za godzinę”** może być ustawiana zależnie od modelu w Twojej organizacji:

- na poziomie pracownika;
- na przypisaniu pracownika do projektu;
- na poziomie zespołu (jeśli używane).

Dla konkretnego wpisu przepracowanego czasu używana jest stawka dopasowana do pracownika i projektu **na dzień wpisu**.

## Gdzie zweryfikować dane źródłowe

Jeśli kwota naliczana na podstawie czasu jest błędna lub nie została wygenerowana:

1. Sprawdź, czy istnieją wpisy przepracowanego czasu dla wymaganego okresu i czy mają wybrany projekt.
2. Sprawdź stawkę **„Wynagrodzenie za godzinę”** dla pracownika/projektu.
3. Otwórz odcinek płacowy i sprawdź zakładkę **„Przepracowany czas”** — pokazuje rekordy źródłowe za okres.

Szczegóły wprowadzania przepracowanego czasu w dokumentacji Zarządzania projektami: [Przepracowany czas](../projectManagement/time-entries.md).