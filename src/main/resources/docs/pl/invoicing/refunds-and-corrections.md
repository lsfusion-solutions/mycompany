---
title: Zwroty i korekty
---

W „Fakturowaniu” mogą być dostępne dokumenty do korygowania zobowiązań:

- zwrot;
- dokument korekty.

Nazwy dokumentów i dokładny zestaw zależą od konfiguracji.

## Kiedy używać

- gdy trzeba zmniejszyć wcześniej wystawioną kwotę;
- gdy zwrócono towary;
- gdy trzeba skorygować [podatki](taxes.md) lub kwoty.

## Powiązanie z dokumentami źródłowymi

Dokumenty zwrotu/korekty są zwykle powiązane:

- z [fakturą](invoices.md);
- z [kontraktem](../masterdata/contracts.md);
- z [płatnościami](payments.md) (gdy środki są zwracane).

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
