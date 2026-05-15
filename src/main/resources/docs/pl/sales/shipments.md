---
title: Wydania do zamówień
---

[Wydanie](../inventory/shipments.md) rejestruje przekazanie towarów klientowi oraz ruch magazynowy.

## Gdzie znaleźć

Wydania należą do modułu **„Magazyn”** — lista wydań znajduje się w **„Magazyn” → „Operacje” → „Wydania”**. Wydanie powiązane z zamówieniem jest tworzone z zamówienia automatycznie (zob. niżej).

## Powiązanie z zamówieniem

Wydanie może być utworzone na podstawie zamówienia. Wtedy:

- [klient](../masterdata/partners.md) i adres dostawy są uzupełnione automatycznie;
- [lokalizacja](../inventory/locations.md) jest uzupełniona automatycznie;
- linie wydania są tworzone na podstawie linii zamówienia.

## Relacja pomiędzy wydaniami a zamówieniami: jak to działa w systemie

Poniżej opisano logikę połączenia „zamówienie ↔ wydania”.

### Relacja na poziomie linii

Powiązanie wydania z zamówieniem jest przechowywane nie tylko na „nagłówku”, ale również **przez linie**:

- każda linia wydania jest powiązana z konkretną linią zamówienia;
- na podstawie tego powiązania system oblicza:
  - ile jest zarezerwowane dla linii zamówienia;
  - ile zostało już wydane;
  - ile pozostało do wydania.

Znaczenie praktyczne: jedno zamówienie może być realizowane wieloma wydaniami i partiami.

### Pozostało do wydania

Dla linii zamówienia system oblicza:

- **Wydano** — suma po aktywnych wydaniach;
- **Pozostało do wydania** = ilość w linii zamówienia (z uwzględnieniem przeliczeń opakowań/jednostek) − wydano.

Jeśli wydano więcej niż zamówiono, system pokaże błąd.

### Statusy wydania i wpływ na zapasy

Wydanie przechodzi przez statusy **„Projekt” → „Oczekiwanie” → „Gotowe” → „Wykonano”** (i może zostać **anulowane**). Automatycznie tworzone wydanie rezerwacyjne startuje w statusie „Oczekiwanie”.

- W statusach „Oczekiwanie” i „Gotowe” wydanie tylko **rezerwuje** zapas dla zamówienia — towar nie jest jeszcze rozchodowany.
- Rozchód towaru z lokalizacji następuje dopiero przy oznaczeniu wydania jako „Wykonano”.

Wydanie przesuwają dalej akcje **„Sprawdź dostępność”**, **„Oznacz jako gotowe”** i **„Oznacz jako wykonane”**.

### „Rezerwacyjne” wydanie dla zamówienia (status `Waiting`)

System udostępnia mechanizm automatycznego „rezerwacyjnego” wydania, które jest utrzymywane na bieżąco dla zamówienia.

Warunki utworzenia/aktualizacji:

- zamówienie ma status potwierdzony;
- w typie zamówienia ustawiono typ wydania;
- w zamówieniu wybrano lokalizację;
- dla zamówienia jest co wydawać (wartość „pozostało do wydania” jest większa niż zero).

Jak wygląda to dla użytkownika:

1. Potwierdzasz zamówienie.
2. System tworzy (lub znajduje) rezerwacyjne wydanie dla tego zamówienia w statusie `Waiting`.
3. W tym wydaniu system automatycznie utrzymuje aktualne:
   - [klienta](../masterdata/partners.md);
   - dział (jeśli używany);
   - planowaną datę;
   - adres dostawy;
   - [lokalizację](../inventory/locations.md).

### Jak tworzone są linie w rezerwacyjnym wydaniu

Tworząc/aktualizując rezerwacyjne wydanie, system:

- dodaje linie wydania dla tych linii zamówienia, które mają niezerową wartość „pozostało do wydania”;
- uzupełnia towar (z uwzględnieniem transformacji towarów, jeśli są używane);
- zapisuje „początkowe zapotrzebowanie” linii wydania równe aktualnej wartości „pozostało do wydania”.

Jeśli wartość „pozostało do wydania” dla linii zamówienia staje się zerowa (wszystko wydano), odpowiednia linia wydania jest usuwana.
Jeśli w rezerwacyjnym wydaniu nie ma już linii, wydanie jest usuwane.

Po utworzeniu linii system wykonuje wstępną kontrolę dostępności dla rezerwacyjnego wydania.

### Wiele wydań dla jednego zamówienia

Jedno zamówienie może być powiązane z wieloma wydaniami. Dzieje się tak np. dla wydań częściowych lub przy podziale wg lokalizacji.

Karta zamówienia pokazuje listę powiązanych wydań.
Karta wydania również pokazuje listę powiązanych zamówień.

### Ograniczenia przy blokowaniu zamówienia

Typ zamówienia może mieć włączone dodatkowe ograniczenia:

- zabroń blokowania zamówienia, jeśli ma aktywne wydania;
- zabroń blokowania zamówienia, jeśli nie zostało w pełni wydane.

Jeśli ograniczenia są włączone, system nie pozwoli zablokować zamówienia.

### Koszt i narzut

Gdy wydanie jest powiązane z zamówieniem, w liniach zamówienia dostępne są również **kwota kosztu**, **kwota narzutu** i **narzut** towaru (koszt pochodzi z rozchodu wydania lub z kosztu standardowego towaru). Wartości te trafiają do [raportu zamówień](reports.md).

## Tworzenie wydania na podstawie faktury

Scenariusz „wydanie z faktury” jest opisany na osobnej stronie: [Tworzenie wydania na podstawie faktury](../invoicing/shipments-from-invoice.md).

## Typowy scenariusz

1. Otwórz zamówienie.
2. Utwórz wydanie dla zamówienia.
3. Sprawdź ilości w liniach.
4. Wykonaj **„Sprawdź dostępność”**, następnie **„Oznacz jako gotowe”** i **„Oznacz jako wykonane”**, aby rozchodować towar z lokalizacji.