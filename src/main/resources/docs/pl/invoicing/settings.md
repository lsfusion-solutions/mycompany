---
title: Ustawienia i katalogi
---

## Gdzie znaleźć

Otwórz **„Fakturowanie” → „Konfiguracja” → „Ustawienia”**.

## Co zwykle jest konfigurowane

- typy dokumentów — typy faktur zakupu, faktur, płatności przychodzących i wychodzących — z numeratorami, walutą domyślną, trybem podatku (wliczony w cenę czy nie) oraz (dla typów zwrotnych) flagą **„Zwrot”** / „powiązany typ zwrotu” opisanymi w sekcji [Zwroty i korekty](refunds-and-corrections.md);
- reguły numeracji (numerator przypięty do typu dokumentu);
- konta bankowe i kasy (zobacz „Banki i konta” poniżej);
- warunki płatności dla sprzedaży i zakupów (zobacz [Dług i kalendarz płatności](debt-and-calendar.md));
- [podatki](taxes.md) i grupy podatków;
- [bazy rozdziału kosztów](bill-cost.md) dla usług na fakturach zakupu;
- parametry rozpoznawania faktur zakupu z pliku z użyciem OpenAI (jeśli używane, zobacz „Import faktur zakupu z pliku” poniżej);
- szablony wydruku (zobacz [Raporty i drukowanie](reports-and-printing.md)).

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

- w ogólnych ustawieniach integracji OpenAI uzupełnij klucz API. Jeśli chcesz sterować modelem, rozumowaniem albo wspólnymi dodatkowymi instrukcjami, utwórz konfiguracje GPT (zobacz [OpenAI i konfiguracje GPT](../administration/openai.md)). Jeśli model nie jest podany ani w żądaniu, ani w konfiguracji, używany jest `gpt-5`;
- w karcie **typu faktury zakupu** uzupełnij opis rozpoznawania. Przy pierwszej konfiguracji wygodnie jest najpierw wstawić tekst **domyślny**, a potem dopasować go do własnych dokumentów.

Jeśli dostępnych jest kilka konfiguracji GPT, podczas importu system poprosi o wybór konfiguracji przed wysłaniem pliku. Jeśli istnieje jedna konfiguracja, zostanie wybrana automatycznie.

Przed uruchomieniem rozpoznawania sprawdź też dane słownikowe:

- dostawcy oraz [towary](../masterdata/items.md) muszą być wcześniej wprowadzone i aktywne;
- [waluty](../masterdata/currencies.md) i [podatki](taxes.md) muszą już istnieć w systemie.

Działanie importu pojawia się na karcie faktury zakupu tylko dla tych typów, dla których uzupełniono opis rozpoznawania.
