---
title: Kalkulacja kosztu pozycji (Magazynowanie)
---

## Gdzie znaleźć

Główne formularze do pracy z kosztami znajdują się w **„Magazynowanie” → „Raportowanie”**:

- **„Koszt stanów towarów”** — pokazuje bieżący stan i wycenę.
- **„Raport kosztów”** — pokazuje ruchy, które tworzą koszt.

Przeliczenie jest również dostępne z poziomu **„Koszt stanów towarów”** poprzez akcję **„Ponowne oblicz koszty”**.

## Cel

Kalkulacja kosztów służy do:

- wyceny zapasów w [lokalizacjach](locations.md) (ile kosztuje bieżący stan towaru);
- obliczania kosztu [wydań](shipments.md) / [odpisów](scrap.md);
- przenoszenia kosztu razem z ilością podczas przemieszczeń pomiędzy kosztowymi [lokalizacjami](locations.md);
- tworzenia kosztu wyrobu gotowego (jeśli używany jest moduł Produkcja / Manufacturing).

## Co system uważa za „koszt”

Koszt jest utrzymywany **dla**:

- **lokalizacji** (kosztowej lokalizacji ewidencyjnej),
- **towaru**.

Dla każdej pary „lokalizacja–towar” system przechowuje i oblicza:

- **ilość zapasu**;
- **koszt zapasu**;
- **koszt za jednostkę**;
- **ostatni koszt**.

Ważne: **koszt za jednostkę** to cena wyliczona zgodnie z wybraną metodą (patrz niżej), natomiast **ostatni koszt** to cena ostatniego przyjęcia (ostatniej operacji przychodowej) i może różnić się od średniej.

## Metody kalkulacji kosztów

Metoda jest ustawiana dla kategorii towaru (i dziedziczona przez hierarchię). Domyślnie dla towaru używany jest **FIFO**.

Nazwa w UI: **„Metoda kalkulacji kosztów”**.

Dostępne metody:

1. **Planowany koszt**
   - koszt wydań/odpisów jest liczony na podstawie planowanej/standardowej ceny na dzień operacji;
   - używane tam, gdzie utrzymywane są ceny planowane/standardy.

2. **Średni koszt**
   - odpis jest wyceniany wg **średniego** kosztu jednostkowego w momencie operacji.

3. **FIFO**
   - odpis jest wykonywany wg partii przychodowych: ilość jest zdejmowana z najwcześniejszych [przyjęć](receipts.md) jako pierwszych.

## Które dokumenty wpływają na koszt

Poniżej znajduje się opis na poziomie użytkownika, które operacje tworzą koszt.

### [Przyjęcia](receipts.md)

Przyjęcia tworzą operację **przychodową** i zwiększają stan:

- ilość w [lokalizacji](locations.md) rośnie;
- koszt zapasu rośnie.

W niektórych typach przyjęć można wprowadzić koszt ręcznie, używając flagi **„Pokaż koszt”**.

### [Wydania](shipments.md) ([odpisy](scrap.md))

Wydanie tworzy operację **rozchodową**:

- ilość w [lokalizacji](locations.md) maleje;
- koszt zapasu maleje;
- kwota odpisu jest liczona automatycznie zgodnie z metodą kosztu towaru.

### [Przemieszczania](transfers.md)

Jeśli przemieszczenie jest wykonywane pomiędzy różnymi **kosztowymi [lokalizacjami](locations.md)**, koszt jest przenoszony razem z ilością:

- w źródle tworzona jest operacja rozchodowa;
- w celu tworzona jest operacja przychodowa na tę samą kwotę.

Jeśli przemieszczenie odbywa się w ramach jednej kosztowej lokalizacji, koszt nie jest przenoszony pomiędzy podlokalizacjami (pozostaje w tej samej lokalizacji ewidencyjnej).

### [Korekty zapasów](adjustments.md)

Korekty zapasów mogą:

- odpisać ilość (rozchód) — kwota odpisu jest liczona metodą (FIFO/średni/planowany);
- przyjąć ilość (przychód) z kosztem zdefiniowanym przez użytkownika.

W korektach może być wyświetlana podpowiedź **„Bieżący koszt za jednostkę”** — koszt jednostkowy w momencie operacji.

### Produkcja (jeśli używane)

Zlecenie produkcyjne wpływa na koszt w następujący sposób:

- materiały są odpisywane z lokalizacji jak zwykła operacja rozchodowa zgodnie z wybraną metodą;
- wyrób gotowy jest przyjmowany do lokalizacji;
- koszt wyrobu jest rozdzielany z łącznego kosztu zlecenia (materiały + koszty dodatkowe + robocizna) na pozycje produkcji.

## Jak przeglądać koszt

### 1) Formularz „Koszt stanów towarów”

Otwórz **„Magazynowanie” → „Raportowanie” → „Koszt stanów towarów”**.

Co można zobaczyć:

- ilość zapasu;
- koszt zapasu;
- koszt za jednostkę;
- ostatni koszt;
- opcjonalnie wycenę **na dzień** (parametrem daty).

Także na dole (lub w osobnym obszarze szczegółów) można zobaczyć:

- listę operacji przychodowych/rozchodowych,
- a dla FIFO — rozbicie „które przyjęcia zostały użyte do odpisu”.

### 2) Formularz „Raport kosztów”

Otwórz **„Magazynowanie” → „Raportowanie” → „Raport kosztów”**.

Raport pokazuje ruchy tworzące koszt (przychód/rozchód) z ilościami i kwotami.

## Ponowne przeliczenie kosztu

### Kiedy jest potrzebne

Ponowne przeliczenie może być potrzebne, jeśli:

- zmieniono dane w przeszłości (daty/ilości/koszt przyjęć);
- zmieniono metodę kosztu dla towaru/kategorii;
- skorygowano dokumenty wpływające na koszt.

### Jak przeliczyć

1. Otwórz **„Koszt stanów towarów”**.
2. Kliknij **„Ponowne oblicz koszty”**.
3. W parametrach wskaż datę, **od której** należy wykonać przeliczenie (i opcjonalnie ogranicz przeliczenie do lokalizacji/towaru).

Wskazówka: jeśli zmiany dotyczą konkretnego towaru lub lokalizacji, wskaż je w parametrach, aby przyspieszyć przeliczenie.

## Typowe pytania

### Dlaczego „Ostatni koszt” różni się od „Koszt za jednostkę”?

- **Ostatni koszt** to cena ostatniego przyjęcia.
- **Koszt za jednostkę** to cena wyliczona metodą (FIFO/średni/planowany), uwzględniająca historię ruchów.

### Dlaczego koszt nie zmienił się po przemieszczeniu?

Jeżeli przemieszczenie zostało wykonane w ramach jednej kosztowej lokalizacji (gdy lokalizacje należą do jednej grupy kosztowej), system nie przenosi kosztu pomiędzy nimi.

### Dlaczego koszt nie został „przeliczony” od razu?

Zwykle przeliczenie odbywa się automatycznie przy zmianie danych, ale po masowych edycjach lub zmianach z datą wsteczną może być potrzebne ręczne przeliczenie poprzez **„Ponowne oblicz koszty”**.

## Zobacz też

- [Wydania i przemieszczenia](shipments.md)