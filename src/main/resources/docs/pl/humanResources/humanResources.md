---
title: Kadry — dokumentacja użytkownika
---

Ta dokumentacja opisuje sekcję **„Kadry”**: rekrutację (aplikacje kandydatów, rozmowy kwalifikacyjne, decyzje o zatrudnieniu), rejestrację czasu (Check In / Check Out) oraz naliczanie i wypłatę wynagrodzeń (partie odcinków płacowych i odcinki płacowe).

## Spis treści

- [Szybki start](#szybki-start)
- [Nawigacja](#nawigacja)
- [Role użytkowników i uprawnienia](#role-użytkowników-i-uprawnienia)
- [Pojęcia](#pojęcia)

Sekcje:

- [Rekrutacja](recruitment.md)
- [Rejestracja czasu](attendance.md)
- [Płace: naliczanie i wypłata](payroll.md)
  - [Partia odcinków płacowych](payroll-batch.md)
  - [Odcinek płacowy](payslip.md)
  - [Jak obliczana jest suma „Wynagrodzenie netto”](net-wage.md)
  - [Wypłata na podstawie przepracowanego czasu (Projekty)](payroll-time-entries.md)
  - [Wypłata wynagrodzenia i kontrola płatności](payroll-payments.md)
- [Ustawienia](settings.md)

## Szybki start

Typowy scenariusz „otrzymanie aplikacji kandydata → umówienie rozmowy kwalifikacyjnej → decyzja”:

1. Otwórz **„Kadry” → „Operacje” → „Aplikacje”**.
2. Utwórz aplikację i wypełnij podstawowe dane (temat, stanowisko, dział, dane kontaktowe kandydata).
3. Dołącz pliki, jeśli potrzeba (np. CV).
4. Umów rozmowę kwalifikacyjną i wybierz uczestników.
5. Po rozmowie kwalifikacyjnej:
   - wykonaj **„Zatrudnij”**, aby utworzyć pracownika;
   - albo wykonaj **„Odmów”** i podaj powód odmowy.

Typowy scenariusz „rejestrowanie czasu”:

1. Otwórz **„Kadry” → „Procesy”** i wybierz metodę rejestracji:
   - **mobilna rejestracja czasu** (z geolokacją, jeśli jest używana);
   - **kiosk rejestracji czasu** z użyciem identyfikatora.
2. Zarejestruj **„Check In”** i **„Check Out”**.
3. Utworzone wpisy można przeglądać w **„Kadry” → „Operacje” → „Rejestracji czasu”**.

Typowy scenariusz „naliczenie płac i przygotowanie wypłaty”:

1. Otwórz **„Kadry” → „Operacje” → „Partii odcinków płacowych”**.
2. Utwórz partię, wskaż firmę, okres oraz typ.
3. Uruchom **„Wygeneruj”** — system utworzy odcinki płacowe dla pracowników.
4. Sprawdź odcinki płacowe i sumę **„Wynagrodzenie netto”**.
5. Jeśli w organizacji rejestrowane są płatności w systemie — zarejestruj płatność z odcinka płacowego.

## Nawigacja

Sekcja **„Kadry”** zawiera trzy grupy:

- **Operacje** — praca bieżąca: aplikacje, rejestracja czasu, odcinki płacowe i partie odcinków płacowych.
- **Procesy** — kiosk rejestracji czasu i mobilna rejestracja czasu.
- **Konfiguracja** — formularz **„Ustawienia”**; katalogi sekcji (typy odcinków płacowych, kategorie wynagrodzenia, powody odmowy, tagi i statusy aplikacji) znajdują się na jego zakładkach.

Dostępne pozycje menu i akcje zależą od konfiguracji i uprawnień użytkownika.

## Role użytkowników i uprawnienia

Dokładny zestaw uprawnień zależy od ustawień w Twojej organizacji. Typowy podział odpowiedzialności:

- **Rekruter** — prowadzi aplikacje, umawia rozmowy kwalifikacyjne, zapisuje wyniki, przygotowuje decyzje.
- **Uczestnik rozmowy kwalifikacyjnej** — bierze udział w rozmowach i zapisuje wynik (jeśli jest dozwolone).
- **Specjalista HR** — zajmuje się onboardingiem i utrzymaniem danych kadrowych.
- **Pracownik** — rejestruje czas (mobilnie lub w kiosku) i przegląda własne wpisy (jeśli jest dozwolone).
- **Księgowy / specjalista ds. płac** — generuje partie odcinków płacowych, weryfikuje odcinki płacowe i rejestruje płatności (jeśli są używane).

Jeśli niektóre akcje nie są dostępne (np. „Zatrudnij”, „Odmów”, „Wygeneruj” lub rejestracja płatności), zwykle wynika to z ograniczeń uprawnień lub konfiguracji sekcji.

## Pojęcia

#### Aplikacja

Karta kandydata: zawiera dane kandydata, stanowisko, dane kontaktowe, dołączone pliki oraz historię rekrutacji.

#### Rozmowa kwalifikacyjna

Rekord rozmowy kwalifikacyjnej z kandydatem: przechowuje uczestników oraz podsumowanie/wynik.

#### Rekruter

Odpowiada za prowadzenie rekrutacji w ramach aplikacji.

#### Uczestnik rozmowy kwalifikacyjnej

Użytkownik, który bierze udział w rozmowie kwalifikacyjnej z kandydatem.

#### Rejestracja czasu

Rejestrowanie Check In / Check Out pracownika. W zależności od ustawień może być zapisywana geolokacja i/lub zdjęcie.

#### Kiosk rejestracji czasu

Ekran/urządzenie do szybkiego Check In / Check Out, gdy pracownicy identyfikują się identyfikatorem.

#### Partia odcinków płacowych

Dokument do generowania odcinków płacowych dla wielu pracowników w okresie i typie.

#### Odcinek płacowy

Dokument naliczenia wynagrodzenia pracownika za okres z sumą **„Wynagrodzenie netto”**.