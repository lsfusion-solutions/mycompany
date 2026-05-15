---
title: Zwroty i korekty
---

W „Fakturowaniu” istnieje kilka mechanizmów do rejestrowania zwrotów i korekt wcześniej zaksięgowanych dokumentów. Dzielą się one na dwie kategorie:

- **Korekty** — odrębne dokumenty, które korygują wcześniej zatwierdzoną [fakturę zakupu](bills.md) lub [fakturę](invoices.md) bez anulowania oryginału (patrz „Korekty faktur zakupu” i „Korekty faktur”).
- **Zwroty** — rejestrowane jako dokument typu przeciwnego z ustawioną flagą **„Zwrot”** na typie:
  - **nota uznaniowa** to [faktura zakupu](bills.md), na której typie ustawiona jest flaga **„Zwrot”** — odwraca [fakturę](invoices.md) sprzedaży po stronie dostawcy;
  - **zwrot** to [faktura](invoices.md), na której typie ustawiona jest flaga **„Zwrot”** — odwraca [fakturę zakupu](bills.md) po stronie nabywcy.

Dokładny zestaw dokumentów i ich nazwy zależą od konfiguracji.

## Kiedy używać

- gdy trzeba zmniejszyć (lub w inny sposób skorygować) wcześniej wystawioną kwotę → użyj **korekty**;
- gdy klient zwraca towary po wystawieniu faktury → zarejestruj **notę uznaniową**;
- gdy zwracasz towary do dostawcy po zaksięgowaniu faktury zakupu → zarejestruj **zwrot**;
- gdy trzeba skorygować [podatki](taxes.md) lub kwoty na zatwierdzonym dokumencie → użyj **korekty**.

## Powiązanie z dokumentami źródłowymi

Dokumenty korekty są zawsze powiązane z konkretnym dokumentem źródłowym przez pole **„Pierwotna faktura zakupu”** / **„Pierwotna faktura”**. Zwroty (noty uznaniowe / zwroty) przechowują pozycjowe odwołania do linii dokumentu źródłowego, dzięki czemu system może śledzić, ile z danej linii oryginału zostało już zwrócone.

## Korekty faktur zakupu

Korekty faktur zakupu służą do zmiany istniejącej [faktury zakupu](bills.md).

### Gdzie znaleźć

1. Otwórz **„Fakturowanie” -> „Operacje” -> „Faktury zakupu”**.
2. Otwórz fakturę zakupu, którą chcesz skorygować.
3. Kliknij **„Utwórz korektę”**.

System utworzy nową fakturę zakupu i powiąże ją z dokumentem źródłowym.

### Reguły walidacji

System wymusza następujące reguły:

- dostawca korekty musi być taki sam jak dostawca dokumentu źródłowego;
- firma w korekcie musi być taka sama jak firma dokumentu źródłowego;
- jako dokumentu źródłowego nie można wskazać dokumentu, który sam jest korektą.

Jeśli tworzysz korektę z dokumentu, który już jest korektą, nowa korekta nadal będzie powiązana z tym samym dokumentem źródłowym.

### Tryby korekty

#### Korekta zastępująca (domyślnie)

Użyj tego trybu, gdy korekta ma zastąpić wartości poprzedniej wersji.

- poprzednim dokumentem jest poprzednia korekta w łańcuchu;
- jeśli nie ma poprzedniej korekty, poprzednim dokumentem jest dokument źródłowy;
- **Kwota korekty** jest liczona jako `kwota bieżąca - kwota poprzednia` (efekt zastąpienia względem poprzedniego dokumentu).

#### Korekta storno

Użyj tego trybu, gdy sam dokument korekty zawiera już wartości storna/zastępujące (na przykład linie ujemne).

- włącz flagę **„Storno”** w korekcie faktury zakupu;
- w tym trybie **Kwota korekty** jest pobierana z kwoty samej korekty;
- wyliczenie nie jest wykonywane względem poprzedniego dokumentu.

### Łańcuch korekt w karcie faktury zakupu

W karcie faktury zakupu zakładka **„Korekty”** pokazuje:

- wszystkie powiązane korekty z indeksem, datą, statusem i kwotami;
- liczbę korekt w badge zakładki.

W stopce są też pokazywane sumy korekt, w tym:

- wartości z ostatniej korekty niestorno;
- sumy skorygowane o korekty storno;
- wartości korekty dla aktualnie otwartej korekty.

### Zachowanie długu

Przy zmianie kwoty korekty faktury zakupu dług jest przeliczany automatycznie:

- kwota korekty jest przekształcana na kwotę długu korekty;
- dopasowanie między dokumentem źródłowym a korektą jest aktualizowane automatycznie;
- korekty faktur zakupu są obsługiwane w dedykowanym przepływie długu korekt.

### Typowy przebieg

1. Otwórz dokument źródłowy.
2. Kliknij **„Utwórz korektę”**.
3. Zmień linie i kwoty.
4. Włączaj **„Storno”** tylko wtedy, gdy dokument korekty sam zawiera wartości storna/zastępujące.
5. Zapisz i zatwierdź dokument zgodnie z procesem w organizacji.
6. Sprawdź wartości w zakładce **„Korekty”** oraz w [Dług i kalendarz płatności](debt-and-calendar.md).

## Korekty faktur

Korekty faktur działają analogicznie do korekt faktur zakupu, ale z jedną istotną różnicą: obsługują **wyłącznie tryb zastąpienia** — na korekcie faktury nie ma flagi **„Storno”**. Formuła zastąpienia i nawigacja po łańcuchu korekt są takie same jak dla faktur zakupu.

Aby utworzyć korektę faktury:

1. Otwórz **„Fakturowanie” → „Operacje” → „Faktury”**.
2. Otwórz fakturę, którą chcesz skorygować.
3. Kliknij **„Utwórz korektę”**.
4. Zmień linie i kwoty tak, aby opisywały skorygowany stan faktury.
5. Zapisz i zatwierdź dokument.

Reguły walidacji odpowiadają regułom dla korekt faktur zakupu (zgodność klienta/firmy, brak łańcucha „korekta korekty” itp.).

## Noty uznaniowe (faktury zakupu zwrotu)

**Nota uznaniowa** jest realizowana jako [faktura zakupu](bills.md), której typ ma ustawioną flagę **„Zwrot”**. Służy do rejestrowania zwrotu od klienta — klient zwraca towary wcześniej sprzedane mu poprzez [fakturę](invoices.md).

### Jak utworzyć notę uznaniową

Na karcie faktury źródłowej akcja **„Zwrot”** pojawia się, gdy faktura zostanie przeniesiona do **„Do zapłaty”**, i pozostaje widoczna później — także po przeniesieniu faktury do **„Zapłacono”**. Pokrywa to typowy przypadek rejestrowania zwrotu już po zakończonej sprzedaży. Akcja znika tylko w statusie **„Anulowano”** i nie jest dostępna dla faktur w **„Projekt”**. Nie jest też dostępna z poziomu listy faktur — trzeba otworzyć samą fakturę. Kliknij akcję, aby utworzyć nową fakturę zakupu:

- typu faktury zakupu powiązanego z typem faktury (przez ustawienie **„Typ zwrotu”** na typie faktury);
- z klientem w roli dostawcy;
- z liniami skopiowanymi z faktury (cena i zastosowane podatki są dziedziczone).

Każda linia noty uznaniowej zachowuje odwołanie do linii faktury źródłowej, dzięki czemu system może wyliczyć **zwróconą ilość** w każdej linii faktury i (opcjonalnie) zablokować zwroty większe niż sprzedaż za pomocą flagi **„Kontrola zwróconej ilości”**.

### Cykl życia

Nota uznaniowa dalej podąża zwykłym cyklem życia faktury zakupu (Projekt → Do zapłaty → Zapłacono → Anulowano). Jej kwota zmniejsza dług klienta utworzony pierwotnie przez fakturę źródłową.

## Zwroty (faktury zwrotu)

**Zwrot** jest realizowany jako [faktura](invoices.md), której typ ma ustawioną flagę **„Zwrot”**. Służy do rejestrowania zwrotu do dostawcy — towary wcześniej przyjęte poprzez [fakturę zakupu](bills.md) są zwracane do dostawcy.

### Jak utworzyć zwrot

Na karcie faktury zakupu źródłowej akcja **„Zwrot”** pojawia się, gdy faktura zakupu zostanie przeniesiona do **„Do zapłaty”**, i pozostaje widoczna później — także po przeniesieniu faktury zakupu do **„Zapłacono”**. Pokrywa to typowy przypadek rejestrowania zwrotu już po zakończonym zakupie. Akcja znika tylko w statusie **„Anulowano”** i nie jest dostępna dla faktur zakupu w **„Projekt”**. Nie jest też dostępna z poziomu listy faktur zakupu — trzeba otworzyć samą fakturę zakupu. Kliknij akcję, aby utworzyć nową fakturę:

- typu faktury powiązanego z typem faktury zakupu (przez ustawienie **„Typ zwrotu”** na typie faktury zakupu);
- z dostawcą w roli klienta;
- z liniami skopiowanymi z faktury zakupu (cena i zastosowane podatki są dziedziczone).

Każda linia zwrotu zachowuje odwołanie do linii faktury zakupu źródłowej. Dostępny jest ten sam mechanizm **„Kontrola zwróconej ilości”**.

### Cykl życia

Zwrot dalej podąża zwykłym cyklem życia faktury (Projekt → Do zapłaty → Zapłacono → Anulowano). Jego kwota zmniejsza dług wobec dostawcy utworzony pierwotnie przez fakturę zakupu źródłową.

## Który mechanizm wybrać

| Sytuacja | Użyj |
|---|---|
| Kwota faktury/faktury zakupu jest błędna i trzeba ją poprawić | **Korekty** (faktury zakupu lub faktury) |
| Klient zwraca towary po wystawieniu faktury | **Noty uznaniowej** |
| Zwracasz towary do dostawcy po zarejestrowaniu faktury zakupu | **Zwrotu** |
| Fakturę zakupu trzeba w pełni stornować (dokument z kwotą ujemną) | **Korekty faktury zakupu** z flagą **„Storno”** |
