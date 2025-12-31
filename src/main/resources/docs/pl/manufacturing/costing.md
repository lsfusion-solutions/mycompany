---
title: "Koszt wytworzenia: jak jest liczony"
---

Ta sekcja opisuje, w jaki sposób system liczy koszt towaru, gdy realizowane jest [zamówienie produkcji](orders.md).

Opis jest oparty o logikę zaimplementowaną w module kosztowania [zamówień produkcji](orders.md).

## Ogólna idea

Koszt jest liczony **na podstawie danych faktycznych**:

1. Najpierw w [zamówieniu produkcji](orders.md) rejestrowane jest **faktyczne zużycie materiałów**.
2. Na podstawie zużycia wyznaczany jest **koszt rozchodu materiałów**.
3. Suma rozchodów (oraz koszty dodatkowe i robocizny, jeśli są uzupełnione) tworzy **koszt zamówienia produkcji**.
4. Koszt zamówienia jest **rozdzielany na wyjście** (linie wyjścia) przy użyciu współczynników dystrybucji.

## Co jest uwzględniane w obliczeniu

### 1) Faktyczne zużycie materiałów

[Zamówienie produkcji](orders.md) ma linie materiałów. Dla każdej linii rejestrowana jest faktyczna ilość **„Zużyte”**.

W kosztowaniu uwzględniane są tylko linie, dla których:

- faktyczne zużycie jest wypełnione;
- towar jest towarem magazynowym/materiałowym (uczestniczy w ewidencji magazynowej).

### 2) Lokalizacja materiałów i Data wykonania

Koszt zużycia jest określany z uwzględnieniem:

- **Lokalizacji materiałów** (lokalizacja, z której następuje rozchód);
- **Daty wykonania** [zamówienia produkcji](orders.md).

Znaczenie praktyczne:

- jeśli różne lokalizacje mają różne koszty, rozchód jest wyceniany wg lokalizacji materiałów;
- data **wykonania** ustala „moment wyceny”, tj. jaką datę system używa do pobrania kosztu.

### 3) Koszty dodatkowe i koszty robocizny

Koszt zamówienia produkcji może obejmować:

- **koszty dodatkowe**;
- **koszty robocizny**.

Kwoty te są uwzględniane tylko wtedy, gdy są skonfigurowane i wypełnione w Twojej konfiguracji.

## Wzory

### Koszt materiałów

Koszt materiałów dla zamówienia to suma kosztów rozchodu dla wszystkich linii materiałów.

Innymi słowy:

- dla każdej linii materiału liczona jest kwota rozchodu;
- następnie kwoty te są sumowane do kosztu zamówienia.

### Całkowity koszt zamówienia produkcji

**Całkowity koszt zamówienia** składa się z:

1. kosztu materiałów;
2. kosztów dodatkowych;
3. kosztów robocizny.

## Jak koszt jest rozdzielany na wyjście

Zamówienie ma linie wyjścia (jakie towary/półprodukty są wytwarzane). Koszt zamówienia jest rozdzielany pomiędzy linie wyjścia.

### Współczynnik dystrybucji

Linia wyjścia może mieć wypełniony **„Współczynnik alokacji kosztów”**.

Wyliczanie udziału linii:

- jeśli współczynniki są wypełnione przynajmniej na jednej linii, udział linii = współczynnik linii / suma współczynników dla zamówienia;
- jeśli współczynniki nie są wypełnione, cały koszt jest przypisywany do głównego towaru zamówienia (linii wyjścia, gdzie towar jest równy towarowi z zamówienia).

### Koszt linii wyjścia

Kwota przypisana do konkretnej linii wyjścia:

**koszt linii wyjścia = całkowity koszt zamówienia × udział linii**

### Koszt jednostkowy

Aby uzyskać koszt jednostkowy dla linii wyjścia:

**koszt jednostkowy = koszt linii wyjścia / faktycznie wyprodukowane na linii**

Jeśli faktycznie wyprodukowane wynosi zero, koszt jednostkowy nie może zostać obliczony — najpierw zarejestruj produkcję.

## Gdzie zobaczyć koszt

Zwykle koszt jest widoczny:

- na liście [zamówień produkcji](orders.md) — pola typu „Koszt”, „Koszty dodatkowe”, „Koszty robocizny”, „Koszt całkowity”;
- w [raportach produkcyjnych](reports.md) (np. w raporcie zamówień, jeśli jest włączony w raportowaniu).

## Typowe sytuacje i kontrole

#### Koszt całkowity wynosi zero

Sprawdź:

- czy „Zużyte” jest wypełnione na liniach materiałów;
- czy wybrano lokalizację materiałów;
- czy ustawiona jest **Data wykonania** (zwykle pojawia się, gdy zamówienie jest **Wykonano**).

#### Cały koszt został przypisany do jednej linii wyjścia

To jest normalne, jeśli współczynniki dystrybucji nie są wypełnione. Wtedy system przypisuje całą kwotę do głównego towaru.

#### Dystrybucja kosztu jest „inna niż oczekiwana”

Sprawdź:

- współczynniki dystrybucji w liniach wyjścia;
- faktyczne ilości wyprodukowane;
- czy dodano koszty dodatkowe/robocizny.