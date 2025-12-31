---
title: "Rabaty: logika naliczania"
---

W systemie rabat jest osobnym obiektem **„Rabat”**, który można zastosować do linii dokumentów sprzedaży (przede wszystkim do linii [zamówienia](orders.md)).

Rabat może być zdefiniowany:

- jako **procent rabatu**;
- jako **cena z typu ceny** (czyli „ustal cenę wg innego typu ceny”).

## Gdzie konfiguruje się rabaty

Zwykle lista rabatów jest w **„Sprzedaż” → „Operacje” → „Rabaty”**.

W karcie rabatu podajesz:

- okres obowiązywania;
- warunki zastosowania;
- do jakich [towarów](../masterdata/items.md)/kategorii ma zastosowanie;
- jakie [typy cen](pricelists.md) są dozwolone;
- jeśli trzeba — do jakich [lokalizacji](../inventory/locations.md) ma zastosowanie;
- wartość rabatu (procent) albo typ ceny (jeśli rabat jest definiowany przez cenę).

## Jak system decyduje, czy rabat pasuje do linii

Dla linii zamówienia system sprawdza rabat wg zestawu warunków.

### 1) Po towarach i kategoriach

Rabat może być powiązany:

- z konkretnymi towarami;
- z kategoriami towarów (hierarchia kategorii).

Jeśli w rabacie nie wybrano ani kategorii, ani towarów, rabat jest uznawany za błędnie skonfigurowany i system nie pozwoli go zapisać.

### 2) Po okresie obowiązywania

Rabat jest stosowany tylko wtedy, gdy data linii mieści się w przedziale:

- data linii nie jest wcześniejsza niż data początkowa;
- data linii nie jest późniejsza niż data końcowa.

### 3) Po typie ceny

Rabat może być ograniczony typami cen:

- jeśli w rabacie wskazano typy cen, rabat dotyczy tylko linii z jednym z tych typów;
- jeśli nie wskazano typów cen, ograniczenie nie obowiązuje.

### 4) Po lokalizacji

Rabat może być ograniczony lokalizacjami:

- jeśli w rabacie wskazano lokalizacje, rabat dotyczy tylko linii z pasującą lokalizacją;
- jeśli nie wskazano lokalizacji, ograniczenie nie obowiązuje.

### 5) Po minimalnej ilości i kwocie linii

Rabat może wymagać, aby linia miała co najmniej:

- minimalną ilość;
- minimalną kwotę.

Jeśli linia nie spełnia progu, rabat nie jest stosowany.

Ważne: do sprawdzenia progu używana jest „pełna kwota” (wyliczona z ilości i ceny; w razie potrzeby może obejmować podatek).

### 6) Po warunkach kumulacyjnych wg klienta

Rabat może być kumulacyjny i włączany dopiero, jeśli [klient](../masterdata/partners.md) ma:

- łączny wolumen wcześniejszych zakupów powyżej progu;
- albo wolumen zakupów za poprzedni miesiąc powyżej progu.

Wartości te pochodzą z historii sprzedaży klienta.

## Jak wyliczana jest cena dla rabatu

Dla każdego pasującego rabatu system oblicza „cenę po rabacie”.

### Opcja 1: rabat procentowy

Jeśli rabat ma podany procent, cena po rabacie jest wyliczana jako:

`cena po rabacie = cena bazowa × (100 − procent rabatu) / 100`

### Opcja 2: rabat przez typ ceny

Jeśli rabat ma podany typ ceny, cena po rabacie jest pobierana z tego typu ceny dla daty linii.

Znaczenie praktyczne:

- możesz zdefiniować rabat jako „sprzedawaj po cenie hurtowej” lub „sprzedawaj po cenie z cennika specjalnego”.

## Jak wybierany jest automatyczny rabat

Jeśli do linii pasuje kilka rabatów, system automatycznie wybiera spośród automatycznych rabatów ten, który jest **najkorzystniejszy dla klienta**.

Reguła wyboru:

- spośród wszystkich pasujących automatycznych rabatów wybierany jest rabat o **minimalnej cenie po rabacie**.

Odpowiada to logice w kodzie: wybierany jest rabat o minimalnej wyliczonej cenie.

Ważne:

- rabaty nie sumują się;
- wybierany jest jeden rabat, który daje minimalną cenę (czyli „najlepszą korzyść” w ramach skonfigurowanych rabatów).

## Ręczny wybór rabatu w linii

W linii zamówienia użytkownik może ręcznie wybrać rabat (pole „Rabat”).

Jak to działa:

1. Użytkownik otwiera wybór rabatu.
2. System pokazuje tylko rabaty, które spełniają warunki dla linii.
3. Użytkownik wybiera rabat.

Jeśli wybrany rabat jest procentowy, system wypełnia procent w linii (jeśli użytkownik nie wpisał procentu ręcznie).

Jeśli wybrany rabat jest zdefiniowany przez typ ceny, system wypełnia cenę wg tego typu ceny i przelicza rabat/kwotę linii.

## Automatyczne przeliczanie rabatów

Jeśli automatyczne przeliczanie rabatów jest włączone, system przelicza rabat dla linii, gdy zmieniają się te wartości:

- data dokumentu/linii;
- klient;
- towar;
- ilość;
- cena;
- typ dokumentu;
- lokalizacja;
- łączna kwota dokumentu.

Automatyczne przeliczenie jest wykonywane tylko dla rabatów, które nie są oznaczone jako „ręczne”.

W zamówieniu dostępna jest również akcja **„Oblicz rabaty”**, która wymusza przeliczenie rabatów dla wszystkich linii (poza ręcznymi).

### Jak wyłączyć automatyczne przeliczanie

W ustawieniach istnieje parametr **„Nie obliczaj automatycznie rabatów w kolejności”**.

Jeśli jest włączony:

- automatyczne przeliczanie po zmianach nie jest wykonywane;
- użytkownik stosuje rabaty ręcznie i/lub przez przycisk „Oblicz rabaty”.

## Gdzie widać rabaty

Rabaty są zwykle widoczne:

- w liniach zamówienia (wybrany rabat, procent/cena);
- w podsumowaniu zamówienia (kwota rabatu dla dokumentu);
- w fakturach (jeśli rabaty są przenoszone na fakturę);
- w raportach sprzedaży.

## Typowe problemy

- **Rabat nie jest naliczany** — sprawdź datę, typ ceny, lokalizację, progi ilości/kwoty oraz ograniczenia towarów/kategorii.
- **Pasuje kilka rabatów, ale wybierany jest „zły”** — system wybiera rabat o minimalnej cenie po rabacie. Jeśli potrzebujesz innego, użyj ręcznego wyboru rabatu w linii.
- **Rabat „znika” po zmianie linii** — automatyczne przeliczanie jest włączone, a wybrany rabat nie jest ręczny.

## Przykłady

Poniżej kilka uproszczonych przykładów ilustrujących zasady.

### Przykład 1. Rabat procentowy z progiem ilości

Warunki rabatu:

- towary: „Kabel” (lub kategoria „Kable”);
- obowiązywanie: bieżący miesiąc;
- minimalna ilość w linii: `10`;
- rabat: `5%`.

Sytuacja w zamówieniu:

- linia: „Kabel”, ilość `8`, cena `100`.

Wynik:

- rabat **nie jest naliczany**, ponieważ ilość jest mniejsza niż `10`.

Jeśli zmienisz ilość na `10`:

- cena po rabacie = `100 × (100 − 5) / 100 = 95`;
- w linii zostanie użyta cena `95` (albo procent `5%`, zależnie od tego, jak formularz jest skonfigurowany do prezentacji).

### Przykład 2. Rabat przez typ ceny

Warunki rabatu:

- towary: kategoria „AGD”;
- rabat jest zdefiniowany przez typ ceny: „Hurt”;
- obowiązywanie: bez ograniczeń.

Sytuacja w zamówieniu:

- linia: „Czajnik”, ilość `1`;
- bieżąca cena w zamówieniu (np. wg bazowego typu ceny) — `3,000`;
- cena wg typu ceny „Hurt” na datę zamówienia — `2,700`.

Wynik:

- po zastosowaniu tego rabatu system wypełni cenę `2,700`.

Znaczenie praktyczne: zamiast wyliczać „procent”, ustalasz, że dla tej grupy towarów mają być używane ceny z innego typu ceny.

### Przykład 3. Pasują dwa rabaty — wybierany jest najkorzystniejszy

Niech do linii pasują dwa automatyczne rabaty:

1. Rabat A: `10%`
2. Rabat B: `5%`

Cena bazowa w linii: `100`.

Cena po rabacie:

- dla rabatu A: `100 × (100 − 10) / 100 = 90`;
- dla rabatu B: `100 × (100 − 5) / 100 = 95`.

Wybór automatyczny:

- system wybierze rabat A, ponieważ cena po rabacie `90` jest **niższa** niż `95`.

Jeśli reguły biznesowe wymagają zastosowania innego rabatu (nie najkorzystniejszego), użyj ręcznego wyboru rabatu w linii.