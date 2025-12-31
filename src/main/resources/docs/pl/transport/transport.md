---
title: Transport — dokumentacja użytkownika
---

Ta dokumentacja opisuje, jak pracować z sekcją **„Flota”**: utrzymywanie listy pojazdów, przypisywanie kierowców, rejestrowanie serwisów pojazdów i powiązanych kosztów oraz konfigurację katalogów referencyjnych.

## Spis treści

- [Szybki start](#quick-start)
- [Nawigacja](#navigation)
- [Role użytkowników i uprawnienia](#user-roles-and-permissions)
- [Terminy](#terms)

Sekcje:

- [Pojazdy](vehicles.md)
- [Kierowcy](drivers.md)
- [Serwisy pojazdów](service.md)
- [Umowy na pojazdy](contracts.md)
- [Konfiguracja](settings.md)

## Szybki start

Typowy scenariusz „dodać pojazd i zacząć śledzić”:

1. Otwórz **„Flota” → „Operacje” → „Pojazdy”**.
2. Jeśli na listach wyboru brakuje wymaganych wartości (np. modelu, kategorii lub typu paliwa), najpierw uzupełnij katalogi w **„Flota” → „Konfiguracja”** (zobacz [Konfiguracja](settings.md)).
3. Kliknij **Nowy** i wypełnij główne pola (zwykle: model pojazdu, numer rejestracyjny, firma).
4. W razie potrzeby dodaj **[tagi](vehicles.md)** i dołącz **[pliki](vehicles.md)** (zdjęcia/skany dokumentów).
5. Przypisz kierowcę (zobacz **„Flota” → „Operacje” → „Kierowcy”**) i określ okres przypisania.
6. Gdy wykonywane są prace/usługa, utwórz rekord serwisu pojazdu (zobacz **„Flota” → „Operacje” → „Serwisy pojazdów”**) i wpisz datę, **[Typ](settings.md)** oraz **[Wskazanie drogomierza](service.md)**.

Typowy scenariusz „zarejestrować koszty serwisu”:

1. Kliknij **Nowy**, aby utworzyć rekord serwisu pojazdu i wprowadź koszt (cena/kwota).
2. Jeśli w systemie używane są dokumenty **[Faktura zakupu](../invoicing/bills.md)** dla wydatków serwisowych, wskaż **[Dostawcę](../masterdata/partners.md)** oraz **[Fakturę zakupu](../invoicing/bills.md)** (jeśli jest używana w Twojej organizacji).
3. Aby przeglądać historię, używaj karty pojazdu: zbiera ona przypisania kierowców, serwisy i powiązane umowy.

## Nawigacja

Sekcja **„Flota”** zwykle zawiera grupy:

- **Operacje** — praca bieżąca (pojazdy, kierowcy, serwisy, umowy).
- **Raportowanie** — raporty i widoki (zestaw zależy od konfiguracji).
- **Konfiguracja** — parametry i katalogi sekcji.

Pozycje menu oraz dostępne akcje zależą od konfiguracji i uprawnień użytkownika.

## Role użytkowników i uprawnienia

Dokładny zestaw uprawnień zależy od ustawień Twojej organizacji. Typowy podział odpowiedzialności:

- **Specjalista ds. floty** — utrzymuje pojazdy, przypisania kierowców i rejestruje serwisy.
- **Księgowy / kontroler kosztów** — kontroluje księgowanie wydatków i łączenie serwisów z dokumentami rozliczeniowymi (jeśli używane).
- **Administrator** — konfiguruje katalogi i parametry sekcji.

Jeśli niektóre akcje nie są dostępne (nowy/edycja/usuwanie, dołączanie plików), zwykle wynika to z ograniczeń uprawnień lub ustawień sekcji.

Najczęściej ograniczenia wyglądają tak:

- w listach nie ma przycisków **Nowy/Edytuj/Usuń**;
- nie można dodać ani usunąć pliku w karcie;
- nie można tworzyć rekordów powiązanych (np. przypisania kierowcy lub serwisu pojazdu) z karty pojazdu.

## Terminy

#### [Pojazd](vehicles.md)

Karta pojazdu z podstawowymi cechami i powiązaną historią (przypisania kierowców, serwisy, umowy).

#### [Kierowca](drivers.md)

Pracownik przypisany do pojazdu na określony okres.

#### [Serwis pojazdu](service.md)

Rekord prac/usług wykonanych dla pojazdu z datą, **Wskazaniem drogomierza** i kosztem.

#### [Typ serwisu pojazdu](settings.md)

Katalog do klasyfikacji serwisów (np. przegląd okresowy, naprawa, serwis opon itp.).

#### [Wskazanie drogomierza](service.md)

Wartość przebiegu w momencie zdarzenia (np. przypisania kierowcy lub serwisu).

#### [Tag pojazdu](settings.md)

Dodatkowa etykieta pojazdu (np. „Leasing”, „Rezerwa”, „Samochód służbowy”).

#### [Umowa na pojazd](contracts.md)

Dokument/rekord umowy powiązany z pojazdem (np. wynajem, leasing, ubezpieczenie) z datami i kwotami.

#### Karta

Ekran do podglądu i edycji wybranego rekordu (np. karta pojazdu, serwisu lub przypisania kierowcy).