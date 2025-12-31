---
title: Kadry — dokumentacja użytkownika
---

Ta dokumentacja opisuje sekcję **„Kadry”**: rekrutację (aplikacje kandydatów, rozmowy kwalifikacyjne, decyzje o zatrudnieniu), rejestrację czasu (Check In / Check Out) oraz naliczanie i wypłatę wynagrodzeń (partie odcinków płacowych i odcinki płacowe).

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [User roles and permissions](#user-roles-and-permissions)
- [Terms](#terms)

Sections:

- [Rekrutacja](recruitment.md)
- [Rejestracja czasu](attendance.md)
- [Płace: naliczanie i wypłata](payroll.md)
  - [Partia odcinków płacowych](payroll-batch.md)
  - [Odcinek płacowy](payslip.md)
  - [Jak obliczana jest suma „Wynagrodzenie netto”](net-wage.md)
  - [Wypłata na podstawie przepracowanego czasu (Projekty)](payroll-time-entries.md)
  - [Wypłata wynagrodzenia i kontrola płatności](payroll-payments.md)
- [Ustawienia](settings.md)

## Quick start

Typowy scenariusz „otrzymanie aplikacji kandydata → umówienie rozmowy kwalifikacyjnej → decyzja”:

1. Otwórz **„Kadry” → „Operacje” → „Aplikacje”**.
2. Utwórz aplikację i wypełnij podstawowe dane (temat/opis, stanowisko, dział, dane kontaktowe kandydata).
3. Dołącz pliki, jeśli potrzeba (np. CV).
4. Umów rozmowę kwalifikacyjną i wybierz uczestników.
5. Po rozmowie kwalifikacyjnej:
   - wykonaj **„Zatrudnij”**, aby utworzyć pracownika;
   - albo wykonaj **„Odmów”** i podaj powód odmowy.

Typowy scenariusz „rejestrowanie czasu”:

1. Otwórz **„Kadry” → „Operacje” → „Rejestracja czasu”**.
2. Zarejestruj **„Check In”** i **„Check Out”** jedną z metod:
   - przez rejestrację czasu na urządzeniu mobilnym (z geolokacją, jeśli jest używana);
   - przez **kiosk rejestracji czasu** z użyciem identyfikatora.

Typowy scenariusz „naliczenie płac i przygotowanie wypłaty”:

1. Otwórz **„Kadry” → „Operacje” → „Partii odcinków płacowych”**.
2. Utwórz partię, wskaż przedsiębiorstwo i okres.
3. Uruchom **„Wygeneruj”** — system utworzy odcinki płacowe dla pracowników.
4. Sprawdź odcinki płacowe i sumę **„Wynagrodzenie netto”**.
5. Jeśli w organizacji rejestrowane są płatności w systemie — zarejestruj płatność z odcinka płacowego.

## Navigation

Sekcja **„Kadry”** zwykle zawiera grupy:

- **Operacje** — praca bieżąca (aplikacje, rozmowy kwalifikacyjne, rejestracja czasu, odcinki płacowe i partie odcinków płacowych).
- **Procesy** — widoki kontrolne i przetwarzania (np. listy zbiorcze, przetwarzanie wiadomości przychodzących, jeśli jest podłączone).
- **Ustawienia** — dane referencyjne i parametry.

Dostępne pozycje menu i akcje zależą od konfiguracji i uprawnień użytkownika.

## User roles and permissions

Dokładny zestaw uprawnień zależy od ustawień w Twojej organizacji. Typowy podział odpowiedzialności:

- **Rekruter** — prowadzi aplikacje, umawia rozmowy kwalifikacyjne, zapisuje wyniki, przygotowuje decyzje.
- **Uczestnik rozmowy kwalifikacyjnej** — bierze udział w rozmowach i zapisuje wynik (jeśli jest dozwolone).
- **Specjalista HR** — zajmuje się onboardingiem i utrzymaniem danych kadrowych.
- **Pracownik** — rejestruje czas (mobilnie lub w kiosku) i przegląda własne wpisy (jeśli jest dozwolone).
- **Księgowy / specjalista ds. płac** — generuje partie odcinków płacowych, weryfikuje odcinki płacowe i rejestruje płatności (jeśli są używane).

Jeśli niektóre akcje nie są dostępne (np. „Zatrudnij”, „Odmów”, „Wygeneruj” lub rejestracja płatności), zwykle wynika to z ograniczeń uprawnień lub konfiguracji sekcji.

## Terms

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

Dokument do generowania odcinków płacowych dla wielu pracowników w okresie.

#### Odcinek płacowy

Dokument naliczenia wynagrodzenia pracownika za okres z sumą **„Wynagrodzenie netto”**.