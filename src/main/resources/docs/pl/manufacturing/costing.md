---
title: "Koszt wytworzenia: jak jest liczony"
---

Ta sekcja opisuje, w jaki sposób system liczy koszt towaru, gdy realizowane jest [zamówienie produkcji](orders.md).

Opis jest oparty o logikę zaimplementowaną w module kosztowania [zamówień produkcji](orders.md).

## Ogólna idea

Koszt jest liczony **na podstawie danych faktycznych**:

1. Najpierw w [zamówieniu produkcji](orders.md) rejestrowane jest **faktyczne zużycie materiałów**.
2. Na podstawie faktycznego zużycia wyznaczany jest **koszt rozchodu materiałów**.
3. Suma rozchodów (plus dodatkowe składniki kosztu, jeśli występują) tworzy **koszt zamówienia produkcji**.
4. Koszt zamówienia jest **rozdzielany na wyjście** (linie wyjścia) przy użyciu udziałów kosztów.

## Co jest uwzględniane w obliczeniu

### 1) Faktyczne zużycie materiałów

[Zamówienie produkcji](orders.md) ma linie materiałów. Dla każdej linii rejestrowana jest faktyczna ilość **„Zużyte”**.

W kosztowaniu uwzględniane są tylko linie, dla których:

- faktyczne zużycie jest wypełnione;
- towar jest towarem magazynowym/materiałowym (uczestniczy w ewidencji magazynowej).

Kwota rozchodu materiału danej linii jest pokazywana w jej kolumnie **„Koszt”**.

### 2) Lokalizacja materiałów i data wykonania

Koszt zużycia jest określany z uwzględnieniem:

- pola **„Lokalizacja materiałów”** (lokalizacja, z której następuje rozchód);
- **„Daty wykonania”** [zamówienia produkcji](orders.md).

Znaczenie praktyczne:

- jeśli różne lokalizacje mają różne koszty, rozchód jest wyceniany wg lokalizacji materiałów;
- **„Data wykonania”** ustala „moment wyceny”, tj. na jaką datę pobierany jest koszt.

### 3) Dodatkowe składniki kosztu (typy kosztów)

Poza rozchodem materiałów koszt zamówienia produkcji może obejmować dodatkowe składniki. Wewnętrznie są one ujednolicone jako **typy kosztów** (**„Typ kosztu”**): każdy typ to osobne źródło, które kumuluje swoją kwotę na zamówieniu, a konfiguracje mogą dodawać własne typy. Są to **wartości wyliczane**, pokazywane na zamówieniu tylko do odczytu — a nie pola, które wprowadza się bezpośrednio. Standardowe typy to:

- **„Dodatkowy koszt”** — kumuluje koszt dokumentów [odpadu](scrap.md) powiązanych z zamówieniem;
- **„Koszt pracy”** — kumuluje kwoty robocizny z wpisów czasu [projektów](../projectManagement/projectManagement.md) powiązanych z zamówieniem (gdy używany jest kontur zarządzania projektami);
- **„Koszt usług”** — kumuluje koszty z [faktur zakupu](../invoicing/bills.md) dostawców: linia usługowa faktury zakupu, rozdzielona na zamówienie, dodaje swój udział.

Każdy składnik pojawia się tylko wtedy, gdy w Twojej konfiguracji istnieją odpowiednie dane źródłowe.

> Koszty usług z faktur zakupu używają standardowego mechanizmu rozdziału kosztów (zobacz [Rozdział kosztów](../invoicing/bill-cost.md) w „Fakturowaniu”): w bloku rozdziału kosztów faktury zakupu jest zakładka **„Zamówienia produkcji”**, gdzie linię usługową faktury można oznaczyć do rozdziału (**„Przydział”**) na otwarte zamówienia produkcji; bazą rozdziału może być kwota, koszt, cena sprzedaży, waga, objętość lub ilość zamówienia, a udział **„Przydzielone”**, który przypada na dane zamówienie, staje się jego kosztem usług.

## Wzory

### Koszt materiałów

Koszt materiałów dla zamówienia (kolumna **„Koszt”**) to suma kosztów rozchodu dla wszystkich linii materiałów.

Innymi słowy:

- dla każdej linii materiału liczona jest kwota rozchodu;
- następnie kwoty te są sumowane do kosztu zamówienia.

### Łączny koszt zamówienia produkcji

**„Łączny koszt”** zamówienia składa się z:

1. kosztu materiałów (**„Koszt”**);
2. plus wszystkie składniki typów kosztów: **„Dodatkowy koszt”**, **„Koszt pracy”**, **„Koszt usług”** (oraz ewentualne typy dodane w Twojej konfiguracji).

**Koszt materiałów** oraz koszty poszczególnych linii wyjścia są formowane **przy przejściu zamówienia w status „Wykonano”** — wpisy rejestru kosztów wyceniające rozchód materiałów są tworzone tylko dla zakończonych zamówień (status „Wykonano”, nie „Anulowano”), dlatego koszt materiałów pozostaje pusty, dopóki zamówienie jest w statusie „Projekt” / „Oczekiwanie” / „Gotowy” / „W trakcie”. Dodatkowe składniki zachowują się inaczej: są kumulowane z powiązanych zapisów (dokumentów odpadu, wpisów czasu, rozdziałów z faktur) niezależnie od statusu zamówienia, więc one — a zatem i łączny koszt — mogą być niezerowe jeszcze zanim zamówienie zostanie oznaczone jako „Wykonano”. Oznaczenie zamówienia jako „Wykonano” ustala także **„Datę wykonania”**, która wyznacza moment wyceny rozchodu materiałów.

## Jak koszt jest rozdzielany na wyjście

Zamówienie ma linie wyjścia (jakie towary/półprodukty są wytwarzane). Koszt zamówienia jest rozdzielany pomiędzy linie wyjścia.

### Udział kosztów

Linia wyjścia może mieć wypełniony **„Udział kosztów”** (współczynnik rozdziału).

Wyliczanie udziału linii:

- jeśli udziały kosztów są wypełnione przynajmniej na jednej linii, udział linii = współczynnik linii / suma współczynników dla zamówienia;
- jeśli udziały kosztów nie są wypełnione, cały koszt jest przypisywany do głównego towaru zamówienia (linii wyjścia, w której towar jest równy towarowi z zamówienia). Dla zamówień [demontażu](unbuild.md) takiej linii nie ma, więc bez udziałów kosztów koszt w ogóle nie jest rozdzielany na komponenty — wypełnij udziały (są kopiowane z komponentów zestawienia materiałowego).

### Koszt linii wyjścia

Kwota przypisana do konkretnej linii wyjścia:

**koszt linii wyjścia = łączny koszt zamówienia × udział linii**

### Koszt jednostkowy

Aby uzyskać koszt jednostkowy dla linii wyjścia:

**koszt jednostkowy = koszt linii wyjścia / faktycznie wyprodukowane na linii**

Jeśli faktycznie wyprodukowane wynosi zero, koszt jednostkowy nie może zostać obliczony — najpierw zarejestruj produkcję.

## Gdzie zobaczyć koszt

Zwykle koszt jest widoczny:

- na liście [zamówień produkcji](orders.md) — kolumny tylko do odczytu **„Koszt”**, **„Dodatkowy koszt”**, **„Łączny koszt”**, a także **„Koszt pracy”** i **„Koszt usług”**, gdy używane są odpowiednie kontury;
- w zakładce **„Suma”** listy (dla wybranych zamówień) — zagregowany koszt materiałów (**„Koszt”**) w podziale na towary;
- w [raportach produkcyjnych](reports.md) — te same miary kosztowe w raporcie przestawnym.

## Typowe sytuacje i kontrole

#### Łączny koszt wynosi zero

Sprawdź:

- czy **„Zużyte”** jest wypełnione na liniach materiałów;
- czy wybrano lokalizację materiałów;
- czy zamówienie jest w statusie **„Wykonano”** (ustawiona jest **„Data wykonania”**) — koszt materiałów jest wyceniany dopiero przy zakończeniu.

#### Cały koszt został przypisany do jednej linii wyjścia

To jest normalne, jeśli udziały kosztów nie są wypełnione. Wtedy system przypisuje całą kwotę do towaru głównego.

#### Rozdział kosztu jest „inny niż oczekiwany”

Sprawdź:

- udziały kosztów w liniach wyjścia;
- faktyczne ilości wyprodukowane;
- czy dodano dodatkowe koszty / koszty pracy / koszty usług.
