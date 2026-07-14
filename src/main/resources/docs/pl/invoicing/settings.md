---
title: Ustawienia i katalogi
---

## Gdzie znaleźć

Otwórz **„Fakturowanie” → „Konfiguracja” → „Ustawienia”**.

## Formularz „Ustawienia”

Sam formularz **„Ustawienia”** (**„Konfiguracja” → „Ustawienia”**) zawiera:

- katalogi **typów dokumentów** — **typy faktur zakupu**, **typy faktur**, **typy płatności przychodzących**, **typy płatności wychodzących** — każdy z numeratorem, partnerem domyślnym, ustawieniem, czy **cena zawiera podatki**, zachowaniem płatności/wydań oraz (dla zwrotów) flagą **„Zwrot” (Return)** i powiązanym **„Typem zwrotu” (Return type)** opisanymi w sekcji [Zwroty i korekty](refunds-and-corrections.md);
- katalog **grup podatków**;
- przełącznik **„Nie przeliczaj długu na walutę domyślną” (Skip converting debt to default currency)** — po włączeniu wartości długu są utrzymywane w walucie własnej każdego dokumentu, zamiast być przeliczane na walutę domyślną.

Każdy typ dokumentu może również określać **walutę domyślną** podstawianą do jego dokumentów. Jest to niezależne od ogólnosystemowej **waluty domyślnej**, na którą przeliczane są wartości długu (o ile nie włączono przełącznika powyżej).

## Katalogi konfiguracji (osobne pozycje nawigatora)

Obok formularza „Ustawienia” grupa **„Konfiguracja”** zawiera te katalogi jako własne pozycje menu:

- **[Podatki](taxes.md)** — podatki i stawki podatków;
- **Warunki płatności** — zobacz poniżej;
- **Banki** — katalog banków;
- **Konta** — jeden katalog przechowujący zarówno **konta bankowe**, jak i **kasy** (dodawane odpowiednimi przyciskami);
- **Konta analityczne** (pozycje przepływów pieniężnych) — służą do klasyfikacji płatności; dopuszczone per typ płatności.

Typy płatności dodatkowo mają flagę **„Płatność wewnętrzna” (Internal payment)** oraz ustawienie **dopuszczonych typów kont** (kasa / bank, wymagany co najmniej jeden).

[Bazy alokacji kosztów](bill-cost.md) do rozdziału kosztów usług ustawia się na towarach usługowych, a szablony wydruku konfiguruje się per typ dokumentu (zobacz [Raporty i drukowanie](reports-and-printing.md)).

## Warunki płatności

Warunki płatności przechowują liczbę **dni**; przypisane do partnera (osobno dla sprzedaży i zakupów) i kopiowane na dokumenty, sterują:

- obliczaniem daty **„Zapłać do” (Pay before)**;
- generowaniem [kalendarza płatności](debt-and-calendar.md);
- kontrolą przeterminowań.

## Import faktur zakupu z pliku

Jeśli w konfiguracji używane jest rozpoznawanie faktur zakupu z pliku, przygotuj wcześniej dwie grupy ustawień:

- w ogólnych ustawieniach integracji OpenAI uzupełnij klucz API. Jeśli chcesz sterować modelem, rozumowaniem albo wspólnymi dodatkowymi instrukcjami, utwórz konfiguracje GPT (zobacz [OpenAI i konfiguracje GPT](../administration/openai.md)). Jeśli model nie jest podany ani w żądaniu, ani w konfiguracji, używany jest `gpt-5`;
- w karcie **typu faktury zakupu** uzupełnij opis rozpoznawania. Przy pierwszej konfiguracji wygodnie jest najpierw wstawić tekst **domyślny**, a potem dopasować go do własnych dokumentów.

Jeśli dostępnych jest kilka konfiguracji GPT, podczas importu system poprosi o wybór konfiguracji przed wysłaniem pliku. Jeśli istnieje jedna konfiguracja, zostanie wybrana automatycznie.

Przed uruchomieniem rozpoznawania sprawdź też dane słownikowe:

- dostawcy oraz [towary](../masterdata/items.md) muszą być wcześniej wprowadzone i aktywne;
- [waluty](../masterdata/currencies.md) i [podatki](taxes.md) muszą już istnieć w systemie.

Działanie importu pojawia się na karcie faktury zakupu tylko dla tych typów, dla których uzupełniono opis rozpoznawania.
