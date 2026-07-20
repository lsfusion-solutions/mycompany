---
title: Ustawienia
---

Sekcja „Ustawienia” zawiera parametry i katalogi definiujące zachowanie Kadry: katalogi i statusy rekrutacji oraz parametry naliczania/wypłaty wynagrodzeń.

Dostępne ustawienia zależą od konfiguracji w Twojej organizacji oraz uprawnień użytkownika.

## Rekrutacja

Zwykle konfigurowane są:

- **powody odmowy** — każdy może mieć szablon e-maila wysyłanego przy odmowie z tego powodu;
- **tagi aplikacji** do klasyfikowania aplikacji;
- skrzynka pocztowa do automatycznego przetwarzania przychodzących wiadomości o aplikacjach (jeśli używane).

**Szablony e-maili** do komunikacji z kandydatem są utrzymywane w ustawieniach sekcji „Dane podstawowe” (zakładka **„Szablony e-mail”**).

Zestaw statusów aplikacji jest stały („Nowy”, „Rozmowa kwalifikacyjna”, „Zatrudniony”, „Odmówiono”); na zakładce **„Status aplikacji”** dla statusu można włączyć flagę **„Zakaz edytowania”** — główne pola aplikacji w tym statusie stają się dostępne tylko do odczytu (dostępność akcji jest regulowana osobno). Kolor statusu jest predefiniowany i pokazywany informacyjnie.

## Rejestracja czasu

Rejestracja czasu nie ma osobnych parametrów na formularzu „Ustawienia”:

- pozwolenie na rejestrowanie czasu **bez geolokacji** włącza się indywidualnie — opcją **„Rejestracja czasu bez geolokacji”** na karcie pracownika;
- zdjęcie w kiosku jest wykonywane automatycznie, jeśli urządzenie kiosku ma kamerę — osobne ustawienie nie jest wymagane;
- identyfikatory pracowników drukuje się z karty pracownika; układy identyfikatorów są utrzymywane jako **szablony wydruku dla pracownika** na formularzu **„Dane podstawowe” → „Ustawienia”**.

## Płace: naliczanie i wypłata

Zwykle konfigurowane są:

- **typy odcinków płacowych** (na przykład „Standardowy”) oraz ich numeracja;
- **kategorie wynagrodzenia** — kategorie przychodów i potrąceń używane w wierszach odcinka płacowego. Flaga **„Edytowalne”** pozwala wpisywać sumę kategorii bezpośrednio w tabeli partii odcinków płacowych, a **„Indeks”** określa kolejność kolumn w niej. Karta kategorii zawiera też flagi **„Pomiń”** i **„Ukryj”** — zobacz [Jak obliczana jest suma „Wynagrodzenie netto”](net-wage.md);
- **typ płatności wychodzącej** używany przy rejestracji płatności po odcinkach płacowych (jeśli Twoja organizacja rejestruje płatności w systemie). Płatności tego typu są zawsze uwzględniane w sumie „Opłacono” listy odcinków płacowych. Aby uwzględniane były także płatności innych typów (na przykład pożyczki wypłacone pracownikom i rozliczone z odcinkami płacowymi), włącz flagę **„Uwzględniaj w zadłużeniu z tytułu wynagrodzeń”** na karcie danego typu płatności wychodzącej — zobacz [Wypłata wynagrodzenia i kontrola płatności](payroll-payments.md).