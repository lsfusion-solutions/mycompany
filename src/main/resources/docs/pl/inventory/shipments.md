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

Nad listą znajdują się filtry według **przedziału dat**, **typu**, **lokalizacji** i **partnera**.

### Akcje listy

Oprócz tworzenia/otwierania/usuwania dostępne są akcje masowe dla **zaznaczonych** dokumentów: **„Oznacz jako Do zrobenia”**, **„Sprawdź dostępność”**, **„Zatwierdź”**, **„Zaakceptowane”** (dla przemieszczeń z potwierdzeniem w miejscu docelowym), **„Kopiuj”** i **„Usuń”**. Akcja **„Utwórz przemieszczanie”** tworzy zbiorczo dokumenty przemieszczeń (zobacz [Zbiorcze tworzenie przemieszczeń](transfer-bulk-create.md)).

### Zakładka „Totals” na liście

Jeśli **zaznaczysz** jedno lub więcej wydań na liście, pojawi się zakładka **„Totals”**.

Cel zakładki:

- pokazać listę towarów występujących w wybranych wydaniach;
- pokazać łączną **planowaną ilość** na towar dla zaznaczonych dokumentów;
- umożliwić szybkie korygowanie planowanych ilości dla kilku wydań jednocześnie.

Jak działa edycja:

- zakładka wyświetla tabelę, gdzie **wiersze** to towary, a **kolumny** to wybrane wydania;
- można **edytować planowaną ilość** w komórce dla odpowiedniego wydania i towaru;
- edycja jest dostępna tylko dla wydań w statusie **„Projekt”** lub **„Oczekiwanie”**; dla pozostałych statusów wartości są tylko do odczytu.

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
- **Notatka**.

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
- **Zaplanowana ilość** (patrz niżej);
- kolumny opakowań (**„Typ opakowania”**, **„Liczba pakietów”**, **„Ilość w pakiecie”**) — pokazywane, gdy typ wydania ma flagę **„Pokaż pakiety”** (zobacz [Liczba pakietów](product-sku.md#alternatywa-ewidencja-w-opakowaniach-pakietach-w-dokumentach)).

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

### Zakładka wyszukiwania i wprowadzanie kodem kreskowym

Podobnie jak przyjęcie, karta wydania ma zakładkę **„Wyszukaj”** (wyszukiwanie towarów według kategorii/atrybutów z ilościami na stanie i dostępnymi, szybkie wprowadzanie ilości) oraz pole wprowadzania kodu kreskowego na zakładce **„Linie”**. Karta ma także zakładki **„Historia”**, **„Komentarze”** i **„Pliki”**.

## Statusy (dokładnie jak w kodzie źródłowym)

Poniżej znajduje się dokładny zestaw statusów zdefiniowany w kodzie źródłowym.

1. **„Projekt”** — wprowadzanie danych.
2. **„Oczekiwanie”** — dokument oznaczony do przetworzenia (z Projekt) i oczekuje na dostępność.
3. **„Gotowy”** — dostępność/rezerwacja jest zapewniona dla pozycji.
4. **„Wykonano”** — fakt wydania potwierdzony; zapisywana jest data zakończenia.
5. **„Zaakceptowane”** — potwierdzenie [przyjęcia](receipts.md) w docelowej [lokalizacji](locations.md).
   - ten status jest używany, gdy przemieszczenie wymaga potwierdzenia po stronie miejsca docelowego;
   - po **„Wykonano”** staje się dostępna akcja potwierdzenia przyjęcia.
6. **„Anulowan”** — dokument anulowany.

Ważne: na liście statusów nie ma osobnego statusu „Kompletacja”. Kompletacja jest zrealizowana jako tryb pracy wg lokalizacji dla typów wydań z włączoną kompletacją (patrz niżej).

### Akcje przejścia statusu

- **„Oznacz jako Do zrobenia”** — przenosi dokument z **„Projekt”** do **„Oczekiwanie”**.
- **„Sprawdź dostępność”** — sprawdza/rezerwuje stan i przenosi dokument z **„Oczekiwanie”** do **„Gotowy”**.
- **„Zatwierdź”** — potwierdza wydanie i przenosi je do **„Wykonano”**; data wykonania ustawia się automatycznie. Polecenie pomocnicze **„Wypełnij ilości (wykonane)”** kopiuje ilość planowaną do ilości wykonanej dla wszystkich pozycji. Jeżeli wydana ilość różni się od zaplanowanej, system ostrzega — chyba że na typie ustawiono **„Nie sprawdzaj wydanej ilości”**.
- **„Zaakceptowane”** — dla przemieszczeń z potwierdzeniem w miejscu docelowym przenosi dokument z **„Wykonano”** do **„Zaakceptowane”**.
- **„Anuluj”** — przenosi dokument do **„Anulowan”**.
- **„Kopiuj”** — tworzy nowy dokument w statusie Projekt z tym samym nagłówkiem i pozycjami.

### Wydania natychmiastowe

Wydanie z ustawioną flagą **„Nieplanowane”** (na przykład utworzone przez [Przemieszczanie mobilny](transfers.md#przemieszczanie-mobilne)) pomija etapy pośrednie: może zostać zatwierdzone (**„Wykonano”**) bezpośrednio ze statusu **„Projekt”**, bez sprawdzania dostępności.

## Sprawdzenie dostępności i rezerwacja

Przed realizacją wydania system zwykle sprawdza dostępność po pozycjach.

Jeśli rezerwacja jest włączona:

- część ilości może zostać zarezerwowana dla wydania;
- jeśli stan nie jest wystarczający, wydanie pozostaje w statusie **„Oczekiwanie”** aż do uzupełnienia stanu (do **„Gotowy”** przechodzi dopiero po udanej rezerwacji).

## Akceptacja w miejscu docelowym

Dla [przemieszczeń](transfers.md) system wspiera potwierdzenie dwustronne:

- gdy bieżący użytkownik nie ma dostępu do docelowej [lokalizacji](locations.md), na wydaniu automatycznie ustawiana jest flaga **„Potwierdzenie akceptacji”** (można nią też zarządzać ręcznie);
- po zatwierdzeniu takiego wydania (**„Wykonano”**) dla personelu docelowej lokalizacji staje się dostępna akcja **„Zaakceptowane”**; przenosi ona dokument do statusu **„Zaakceptowane”**;
- oczekujące przychodzące przemieszczenia są widoczne na zakładce **„Potwierdzenie akceptacji”** listy [przyjęć](receipts.md) w miejscu docelowym.

Do momentu akceptacji przemieszczona ilość nie jest liczona jako stan w miejscu docelowym.

## Zwroty od klienta

Jeżeli typ wydania jest powiązany z typem [przyjęcia](receipts.md) zwrotnego (sekcja **„Zwrot”** w ustawieniach typu), na aktywnych wydaniach dostępna jest akcja **„Zwrot”**:

- otwiera ona nowe przyjęcie zwrotne wstępnie wypełnione danymi wydania;
- kolumna **„Zwrócone”** w pozycjach wydania pokazuje ilość już zwróconą, a powiązane przyjęcia zwrotne wyświetla osobne okno (w interfejsie nosi ono nazwę **„Korekty zakupu”** — wspólną dla obu kierunków zwrotów);
- przy włączonej fladze **„Sprawdź zwróconą ilość”** na typie wydania system zabrania zwrócić więcej, niż wydano.

## Kompletacja

Jeśli włączone są zadania kompletacyjne:

- wydanie przechodzi do etapu kompletacji;
- tworzone są zadania dla pracownika magazynu;
- na podstawie wykonanych zadań rejestrowany jest fakt skompletowanej ilości.

Szczegóły: [Zadania kompletacyjne](picking.md).

### Kompletacja wg lokalizacji (tryb typu wydania)

Kod źródłowy udostępnia flagę typu wydania, która włącza kompletację wg konkretnych lokalizacji.

Jak wygląda to dla użytkownika:

- w karcie wydania pojawia się zakładka **„Kompletacja”**;
- dla każdej pozycji można zobaczyć dostępność i rezerwację wg lokalizacji (w tym lokalizacji zagnieżdżonych);
- można wskazać, z których lokalizacji realizowana jest ilość;
- gdy używane są [partie](lots-and-packages.md), skompletowaną ilość można uszczegółowić według partii w ramach każdej lokalizacji.

Jednocześnie status dokumentu pozostaje jednym ze statusów wymienionych powyżej (np. Oczekiwanie, Gotowy, Wykonano).

## Drukowanie

Akcja **„Drukuj”** drukuje wydanie według konfigurowalnego szablonu (szablony są utrzymywane w ustawieniach). Gdy używane są partie, z pozycji można także drukować etykiety partii.

## Tworzenie wydań z zamówień sprzedaży

Jeżeli używany jest moduł Sprzedaż, a typ zamówienia sprzedaży jest powiązany z typem wydania, zatwierdzenie zamówienia sprzedaży tworzy powiązane wydanie z pozycjami zamówienia. Dokumenty odwołują się wtedy do siebie nawzajem (zamówienie pokazuje swoje wydania, a wydanie — źródłowe zamówienie).

## Typowe problemy

- **Nie można zapisać pozycji** — wartość „Zaplanowana ilość” jest poza zakresem zdefiniowanym w typie wydania.
- **Nie można dodać tego samego towaru jako drugiej pozycji** — w typie wydania włączono regułę „Tylko jedna linia dla jednego towaru”.
- **Nie można przejść do realizacji** — niewystarczający dostępny stan lub kompletacja nie została zakończona.
- **Nie można utworzyć przemieszczenia** — wybrano tę samą lokalizację źródłową i docelową.
- **Przemieszczenie jest w statusie „Wykonano”, ale miejsce docelowe nie widzi stanu** — dokument wymaga akceptacji; sprawdź zakładkę **„Potwierdzenie akceptacji”** w miejscu docelowym.
