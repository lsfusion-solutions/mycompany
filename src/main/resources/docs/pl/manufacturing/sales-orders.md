---
title: Tworzenie zamówień produkcji z zamówień sprzedaży
---

System wspiera scenariusz, w którym **[zamówienia produkcji](orders.md) są tworzone na podstawie linii zamówienia sprzedaży**.

Jest to użyteczne, gdy sprzedajesz towary, które muszą zostać wyprodukowane pod konkretne zamówienie.

## Warunki tworzenia

[Zamówienia produkcji](orders.md) są tworzone z zamówienia sprzedaży, gdy spełnione są wszystkie warunki:

1. **Typ zamówienia sprzedaży** ma wskazany **[typ zamówienia produkcji](settings.md)**.
2. Zamówienie sprzedaży ma status **„Potwierdzone”**.
3. Zamówienie sprzedaży zawiera linie, w których:
   - wskazano **[Zestawienie materiałów](bom.md)**;
   - nie utworzono jeszcze [zamówienia produkcji](orders.md).

Jeśli któryś warunek nie jest spełniony, przycisk tworzenia może nie być widoczny lub akcja nie utworzy niczego.

## Jak wybrać [Zestawienie materiałów](bom.md) w linii zamówienia sprzedaży

Linia zamówienia sprzedaży ma pole [Zestawienie materiałów](bom.md).

Zasady:

- Zestawienie materiałów musi pasować do towaru w linii (w przeciwnym razie system nie pozwoli zapisać linii);
- jeśli towar ma domyślne [Zestawienie materiałów](bom.md), może zostać wybrane automatycznie.

## Ręczne tworzenie

W karcie zamówienia sprzedaży może być dostępna akcja **„Zamówienia produkcji”**.

Jak to działa:

1. Użytkownik uruchamia akcję tworzenia.
2. System przechodzi po liniach zamówienia.
3. Dla każdej linii, w której wskazano [Zestawienie materiałów](bom.md) i nie istnieje jeszcze [zamówienie produkcji](orders.md), tworzone jest nowe zamówienie produkcji.

## Co jest wypełniane w utworzonym zamówieniu produkcji

[Zamówienie produkcji](orders.md) jest tworzone **dla każdej linii zamówienia sprzedaży**.

Automatycznie wypełniane są pola:

- link do źródłowej linii zamówienia sprzedaży;
- status oczekujący (zamówienie jest tworzone jako oczekujące);
- **[typ zamówienia produkcji](settings.md)** — pobierany z typu zamówienia sprzedaży;
- **data rozpoczęcia** — pobierana z zamówienia sprzedaży;
- **lokalizacja magazynowa wyrobów gotowych** — pobierana z lokalizacji / lokalizacji magazynowej zamówienia sprzedaży;
- **towar** — pobierany z linii zamówienia sprzedaży;
- **[Zestawienie materiałów](bom.md)** — pobierane z linii zamówienia sprzedaży;
- linie materiałów i wyjścia są generowane na podstawie ilości z linii zamówienia sprzedaży.

Dodatkowo może być wykonane dodatkowe, konfigurowalne wypełnianie (w zależności od ustawień).

## Automatyczne tworzenie przy potwierdzaniu

Typ zamówienia sprzedaży może mieć ustawienie **automatycznego tworzenia zamówień produkcji**.

Jeśli jest włączone, podczas potwierdzenia zamówienia sprzedaży:

- system automatycznie tworzy [zamówienia produkcji](orders.md) dla linii zamówienia.

## Synchronizacja zmian

Jeśli automatyczne tworzenie jest włączone, zmiany w liniach zamówienia sprzedaży są synchronizowane z [zamówieniem produkcji](orders.md) do momentu jego uruchomienia:

- gdy zmienia się ilość w linii — przeliczane są linie materiałów i wyjścia zamówienia produkcji;
- gdy zmienia się towar w linii — aktualizowany jest towar zamówienia produkcji i linie są przeliczane;
- gdy zmienia się Zestawienie materiałów — aktualizowane jest Zestawienie w zamówieniu produkcji i linie są przeliczane.

Ograniczenia:

- jeśli zamówienie produkcji zostało już rozpoczęte, zmiana ilości/towaru/Zestawienia w linii źródłowej jest zabroniona.

## Anulowanie zamówienia sprzedaży

Jeśli zamówienie sprzedaży jest anulowane i automatyczne tworzenie jest włączone:

- powiązane zamówienia produkcji są automatycznie ustawiane w status **„Anulowan”**.

Istnieje też ograniczenie:

- nie można anulować zamówienia sprzedaży, jeśli ma rozpoczęte zamówienia produkcji.

## Gdzie zobaczyć powiązane zamówienia produkcji

Karta zamówienia sprzedaży pokazuje blok powiązanych zamówień produkcji:

- numer, data rozpoczęcia, status, typ;
- można otworzyć zamówienie produkcji.

Samo zamówienie produkcji zawiera link do źródłowego zamówienia sprzedaży.

## Typowe błędy

- **Przycisk tworzenia nie jest widoczny** — zamówienie sprzedaży nie jest potwierdzone lub typ zamówienia sprzedaży nie ma ustawionego typu zamówienia produkcji.
- **Nic się nie tworzy** — nie wskazano Zestawień materiałów w liniach lub zamówienia produkcji już istnieją dla linii.
- **Nie można usunąć linii** — zamówienie produkcji zostało już utworzone z tej linii.
- **Nie można zmienić ilości/towaru/Zestawienia** — zamówienie produkcji zostało już rozpoczęte dla tej linii.