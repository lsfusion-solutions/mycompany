---
title: Wydania i przemieszczenia
---

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Operacje” → „Wydania”**.

## Cel

Dokument **Wydanie** służy do:

- wydania towaru z [lokalizacji](locations.md) (zwykłe wydanie);
- utworzenia [przemieszczania](transfers.md) pomiędzy [lokalizacjami](locations.md) (jeśli wybrano typ z flagą „Przemieszczanie”).

Ten sam formularz jest używany zarówno dla wydań, jak i przemieszczeń — zachowanie zależy od wybranego **typu**.

## Lista wydań

Lista zwykle pokazuje:

- numer;
- planowaną datę i czas;
- typ;
- partnera (dla zwykłego wydania);
- źródłową [lokalizację](locations.md) oraz (dla przemieszczeń) docelową lokalizację;
- notatkę;
- liczbę pozycji.

### Zakładka „Totals” na liście

Jeśli **zaznaczysz** jedno lub więcej wydań na liście, pojawi się zakładka **„Totals”**.

Cel zakładki:

- pokazać listę towarów występujących w wybranych wydaniach;
- pokazać łączną **planowaną ilość** na towar dla zaznaczonych dokumentów;
- umożliwić szybkie korygowanie planowanych ilości dla kilku wydań jednocześnie.

Jak działa edycja:

- zakładka wyświetla tabelę, gdzie **wiersze** to towary, a **kolumny** to wybrane wydania;
- można **edytować planowaną ilość** w komórce dla odpowiedniego wydania i towaru;
- edycja jest dostępna tylko dla wydań w statusie **Projekt** lub **Oczekiwanie**; dla pozostałych statusów wartości są tylko do odczytu.

Dodatkowo zakładka może pokazywać podpowiedzi o stanie w źródłowej [lokalizacji](locations.md) oraz wyróżniać przypadki, gdy łączna planowana ilość przekracza dostępny stan.

## Karta wydania

### Nagłówek dokumentu

W nagłówku wydania zwykle podaje się:

- **Typ** — wpływa na numerację, domyślne [lokalizacje](locations.md) i ograniczenia;
- **Zaplanowana data**;
- **Numer**;
- **Partner** (dla zwykłego wydania);
- **Lokalizacja (skąd)** — wymagane;
- **Lokalizacja (dokąd)** — wymagane dla przemieszczenia;
- **Adres dostawy** (jeśli używane);
- **Kod klienta** (jeśli używane);
- **Komentarz**.

#### Wydanie vs przemieszczanie

Typ wydania może być oznaczony jako **Przemieszczanie** (tzn. typ ma włączoną flagę „Przemieszczanie”). W takim przypadku:

- partner może być opcjonalny;
- docelowa lokalizacja staje się wymagana;
- system nie pozwala wybrać tej samej lokalizacji źródłowej i docelowej.

### Pozycje wydania

Pozycje zawierają:

- **Towar**;
- **JM**;
- **Kod kreskowy**, **kod towaru**, **odnośnik wewnętrzny/SKU** (jeśli używane);
- **Zaplanowana ilość** (patrz niżej).

#### Pole „Zaplanowana ilość”

Dla wydań, które nie są realizowane natychmiast, pozycja używa pola **„Zaplanowana ilość”**:

- to planowana ilość do wydania dla pozycji;
- pole może być wyróżniane w statusie Projekt.

Ograniczenie:

- wartość musi mieścić się pomiędzy `0` a **maksymalną ilością** określoną w typie wydania;
- po przekroczeniu dokumentu nie da się zapisać.

#### Ograniczenie „Tylko jedna linia dla jednego towaru”

Dla niektórych typów wydań można włączyć regułę:

- ten sam towar nie może być dodany w dwóch pozycjach.

## Statusy (dokładnie jak w kodzie źródłowym)

Poniżej znajduje się dokładny zestaw statusów zdefiniowany w kodzie źródłowym.

1. **Projekt** — wprowadzanie danych.
2. **Oczekiwanie** — dokument oznaczony do przetworzenia (z Projekt) i oczekuje na dostępność.
3. **Gotowy** — dostępność/rezerwacja jest zapewniona dla pozycji.
4. **Wykonano** — fakt wydania potwierdzony; zapisywana jest data zakończenia.
5. **Zaakceptowane** — potwierdzenie [przyjęcia](receipts.md) w docelowej [lokalizacji](locations.md).
   - ten status jest używany, gdy przemieszczenie wymaga potwierdzenia po stronie miejsca docelowego;
   - po **Wykonano** staje się dostępna akcja potwierdzenia przyjęcia.
6. **Anulowan** — dokument anulowany.

Ważne: na liście statusów nie ma osobnego statusu „Picking”. Kompletacja jest zrealizowana jako tryb pracy lokalizacji dla typów wydań z włączoną kompletacją (patrz niżej).

## Sprawdzenie dostępności i rezerwacja

Przed realizacją wydania system zwykle sprawdza dostępność po pozycjach.

Jeśli rezerwacja jest włączona:

- część ilości może zostać zarezerwowana dla wydania;
- jeśli stan nie jest wystarczający, wydanie pozostaje w Oczekiwanie/Gotowy aż do uzupełnienia.

## Kompletacja

Jeśli włączone są zadania kompletacyjne:

- wydanie przechodzi do etapu kompletacji;
- tworzone są zadania dla pracownika magazynu;
- na podstawie wykonanych zadań rejestrowany jest fakt skompletowanej ilości.

Szczegóły: [Zadania kompletacyjne](picking.md).

### Kompletacja wg lokalizacji (tryb typu wydania)

Kod źródłowy udostępnia flagę typu wydania, która włącza kompletację wg konkretnych lokalizacji.

Jak wygląda to dla użytkownika:

- w karcie wydania pojawia się zakładka „Picking”;
- dla każdej pozycji można zobaczyć dostępność i rezerwację wg lokalizacji (w tym lokalizacji zagnieżdżonych);
- można wskazać, z których lokalizacji realizowana jest ilość.

Jednocześnie status dokumentu pozostaje jednym ze statusów wymienionych powyżej (np. Oczekiwanie, Gotowy, Wykonano).

## Typowe problemy

- **Nie można zapisać pozycji** — wartość „Zaplanowana ilość” jest poza zakresem zdefiniowanym w typie wydania.
- **Nie można dodać tego samego towaru jako drugiej pozycji** — w typie wydania włączono regułę „Tylko jedna linia dla jednego towaru”.
- **Nie można przejść do realizacji** — niewystarczający dostępny stan lub kompletacja nie została zakończona.
- **Nie można utworzyć przemieszczenia** — wybrano tę samą lokalizację źródłową i docelową.