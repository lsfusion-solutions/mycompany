---
title: Tworzenie zamówień produkcji z zamówień sprzedaży
---

System wspiera scenariusz, w którym **[zamówienia produkcji](orders.md) są tworzone na podstawie linii zamówienia sprzedaży**.

Jest to użyteczne, gdy sprzedajesz towary, które muszą zostać wyprodukowane pod konkretne zamówienie.

## Warunki tworzenia

[Zamówienia produkcji](orders.md) są tworzone z zamówienia sprzedaży, gdy spełnione są wszystkie warunki:

1. **Typ zamówienia sprzedaży** ma wskazany **[typ zamówienia produkcji](settings.md)** (blok **„Produkcja”** na karcie typu zamówienia sprzedaży).
2. Zamówienie sprzedaży ma status **potwierdzony**.
3. Zamówienie sprzedaży zawiera linie, w których:
   - wskazano **[zestawienie materiałowe](bom.md)**;
   - nie utworzono jeszcze [zamówienia produkcji](orders.md).

Jeśli któryś warunek nie jest spełniony, przycisk tworzenia może nie być widoczny lub akcja nie utworzy niczego.

## Jak wybrać [zestawienie materiałowe](bom.md) w linii zamówienia sprzedaży

Linia zamówienia sprzedaży ma pole **„Zestawienie materiałowe”** (jest ono widoczne, gdy typ zamówienia sprzedaży ma wskazany typ zamówienia produkcji).

Zasady:

- zestawienie materiałowe musi pasować do towaru w linii (w przeciwnym razie system nie pozwoli zapisać linii);
- po wybraniu towaru automatycznie podstawiane jest jego domyślne [zestawienie materiałowe](bom.md);
- gdy dla linii utworzono już zamówienie produkcji, pole staje się tylko do odczytu, a jego tło odzwierciedla status zamówienia produkcji.

## Ręczne tworzenie

W karcie zamówienia sprzedaży dostępna jest akcja **„Zamówienia produkcji”**.

Jak to działa:

1. Użytkownik uruchamia akcję tworzenia.
2. System przechodzi po liniach zamówienia.
3. Dla każdej linii, w której wskazano [zestawienie materiałowe](bom.md) i nie istnieje jeszcze [zamówienie produkcji](orders.md), tworzone jest nowe zamówienie produkcji.

## Co jest wypełniane w utworzonym zamówieniu produkcji

[Zamówienie produkcji](orders.md) jest tworzone **dla każdej linii zamówienia sprzedaży**.

Automatycznie wypełniane są pola:

- link do źródłowej linii zamówienia sprzedaży;
- status — zamówienie jest tworzone od razu w statusie **„Oczekiwanie”**;
- **[typ zamówienia produkcji](settings.md)** — pobierany z typu zamówienia sprzedaży;
- **data rozpoczęcia** — pobierana z zamówienia sprzedaży;
- **lokalizacja magazynowa wyrobów gotowych** — pobierana z lokalizacji / lokalizacji magazynowej zamówienia sprzedaży;
- **towar** — pobierany z linii zamówienia sprzedaży;
- **[zestawienie materiałowe](bom.md)** — pobierane z linii zamówienia sprzedaży;
- linie materiałów i produktów są generowane na podstawie ilości z linii zamówienia sprzedaży;
- zlecenia produkcyjne są generowane na podstawie operacji zestawienia materiałowego, w tym operacji z zagnieżdżonych przejściowych zestawień materiałowych.

Dodatkowo może być wykonane dodatkowe, konfigurowalne wypełnianie (w zależności od ustawień).

## Automatyczne tworzenie przy potwierdzaniu

Typ zamówienia sprzedaży może mieć ustawienie **„Automatycznie utwórz zamówienie produkcyjne”**.

Jeśli jest włączone, podczas potwierdzenia zamówienia sprzedaży:

- system automatycznie tworzy [zamówienia produkcji](orders.md) dla linii zamówienia.

## Synchronizacja zmian

Jeśli automatyczne tworzenie jest włączone, zmiany w liniach zamówienia sprzedaży są synchronizowane z [zamówieniem produkcji](orders.md) do momentu jego uruchomienia:

- gdy zmienia się ilość w linii — przeliczane są linie materiałów i produktów zamówienia produkcji;
- gdy zmienia się towar w linii — aktualizowany jest towar zamówienia produkcji i linie są przeliczane;
- gdy zmienia się zestawienie materiałowe — aktualizowane jest zestawienie w zamówieniu produkcji i linie są przeliczane;
- przy każdym przeliczeniu linii zlecenia produkcyjne są generowane na nowo na podstawie aktualnych operacji zestawienia materiałowego, w tym operacji z zagnieżdżonych przejściowych zestawień materiałowych.

Ograniczenia:

- jeśli zamówienie produkcji zostało już rozpoczęte, zmiana ilości/towaru/zestawienia materiałowego w linii źródłowej jest zabroniona.

## Anulowanie zamówienia sprzedaży

Jeśli zamówienie sprzedaży jest anulowane i automatyczne tworzenie jest włączone:

- powiązane zamówienia produkcji są automatycznie przenoszone do statusu **„Anulowano”**.

Istnieje też ograniczenie:

- nie można anulować zamówienia sprzedaży, jeśli ma rozpoczęte zamówienia produkcji.

## Gdzie zobaczyć powiązane zamówienia produkcji

Karta zamówienia sprzedaży pokazuje blok **„Zamówienia produkcji”** (z licznikiem dokumentów) z listą powiązanych zamówień produkcji:

- numer, data rozpoczęcia, status, typ;
- można otworzyć zamówienie produkcji.

Samo zamówienie produkcji zawiera link do **zamówienia sprzedaży** (w stopce karty oraz jako kolumna listy).

## Typowe błędy

- **Przycisk tworzenia nie jest widoczny** — zamówienie sprzedaży nie jest potwierdzone lub typ zamówienia sprzedaży nie ma ustawionego typu zamówienia produkcji.
- **Nic się nie tworzy** — nie wskazano zestawień materiałowych w liniach lub zamówienia produkcji już istnieją dla linii.
- **Nie można usunąć linii** — zamówienie produkcji zostało już utworzone z tej linii.
- **Nie można zmienić ilości/towaru/zestawienia materiałowego** — zamówienie produkcji zostało już rozpoczęte dla tej linii.
