---
title: Ustawienia i katalogi
---

## Gdzie znaleźć

Otwórz **„Fakturowanie” → „Ustawienia” → „Ustawienia”**.

## Co zwykle jest konfigurowane

- typy dokumentów ([faktury zakupu](bills.md), [faktury](invoices.md), [płatności](payments.md));
- reguły numeracji;
- konta bankowe i kasy;
- warunki płatności (zobacz [Dług i kalendarz płatności](debt-and-calendar.md));
- [podatki](taxes.md);
- parametry rozpoznawania faktur zakupu z pliku z użyciem OpenAI (jeśli używane);
- szablony wydruku (zobacz [Raporty i drukowanie](reports-and-printing.md));
- reguły dopasowania/rozliczania płatności (jeśli włączone).

## Banki i konta

Katalogi zwykle obejmują:

- banki;
- konta bankowe;
- kasy;
- konta analityczne (jeśli używane do dopasowania płatności).

## Warunki płatności

Warunki płatności są używane do:

- obliczania planowanej daty płatności;
- generowania [kalendarza płatności](debt-and-calendar.md);
- kontroli przeterminowań.

## Import faktur zakupu z pliku

Jeśli w konfiguracji używane jest rozpoznawanie faktur zakupu z pliku, przygotuj wcześniej dwie grupy ustawień:

- w ogólnych ustawieniach integracji OpenAI uzupełnij klucz API. **Model domyślny** możesz podać dodatkowo; jeśli nie jest ustawiony, używany jest standardowy model usługi;
- w karcie **typu faktury zakupu** uzupełnij opis rozpoznawania. Przy pierwszej konfiguracji wygodnie jest najpierw wstawić tekst **domyślny**, a potem dopasować go do własnych dokumentów.

Przed uruchomieniem rozpoznawania sprawdź też dane słownikowe:

- dostawcy oraz [towary](../masterdata/items.md) muszą być wcześniej wprowadzone i aktywne;
- [waluty](../masterdata/currencies.md) i [podatki](taxes.md) muszą już istnieć w systemie.

Działanie importu pojawia się na karcie faktury zakupu tylko dla tych typów, dla których uzupełniono opis rozpoznawania.
