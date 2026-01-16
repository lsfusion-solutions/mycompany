---
title: "Stanowiska robocze i zlecenia produkcyjne"
---

Ta sekcja opisuje, jak korzystać ze **Stanowisk roboczych** i **Zleceń produkcyjnych** do planowania i zarządzania operacjami produkcyjnymi.

## Stanowiska robocze

**Stanowisko robocze** to jednostka produkcyjna (maszyna, grupa maszyn lub określony obszar), w której wykonywane są operacje produkcyjne.

### Zarządzanie stanowiskami roboczymi

Aby zarządzać stanowiskami roboczymi, przejdź do **Produkcja** → **Ustawienia** → **Stanowiska robocze**.

Dla każdego stanowiska roboczego możesz określić:
- **Nazwa** — opisowa nazwa stanowiska roboczego (np. "Linia montażowa A", "Maszyna CNC 1").
- **ID** — unikalny kod wewnętrzny stanowiska.
- **Opis** — szczegółowe informacje o możliwościach lub lokalizacji stanowiska.

### Zastosowanie praktyczne
Stanowiska robocze służą do grupowania zleceń produkcyjnych i analizy całkowitego obciążenia produkcyjnego. Definiując odrębne stanowiska, możesz zidentyfikować "wąskie gardła" i zrównoważyć obciążenie w całym zakładzie.

---

## Zlecenia produkcyjne

**Zlecenie produkcyjne** reprezentuje konkretną operację lub zadanie wykonywane w stanowisku roboczym w ramach [zamówienia produkcji](orders.md). Podczas gdy zamówienie produkcji definiuje *co* jest produkowane, zlecenia produkcyjne określają *jak* i *gdzie* praca jest wykonywana.

### Tworzenie zleceń produkcyjnych

Zlecenia produkcyjne są zazwyczaj tworzone w kontekście **Zamówienia produkcji**. Możesz podzielić pojedynczy proces produkcyjny na wiele sekwencyjnych lub równoległych operacji.

#### Kroki dodawania zlecenia produkcyjnego:
1. Otwórz kartę **Zamówienia produkcji**.
2. Przejdź do zakładki **Zlecenia produkcyjne**.
3. Kliknij **Dodaj** (Nowy), aby utworzyć nową linię.
4. Wypełnij następujące szczegóły:
   - **Nazwa** — nazwa operacji (np. "Cięcie", "Spawanie").
   - **Stanowisko robocze** — wybierz jednostkę, w której odbędzie się ta operacja (Obowiązkowe).
   - **Data rozpoczęcia** — dzień, w którym zaplanowano rozpoczęcie operacji (domyślnie data zaplanowana zamówienia produkcji).
   - **Godzina rozpoczęcia** — konkretna godzina, o której powinna rozpocząć się operacja.
   - **Czas trwania** — szacowany czas potrzebny na operację (w godzinach).

### Zarządzanie wszystkimi zleceniami produkcyjnymi

Aby zobaczyć globalny widok wszystkich zadań produkcyjnych, przejdź do **Produkcja** → **Operacje** → **Zlecenia produkcyjne**. Lista ta pozwala kierownikom:
- Śledzić postęp operacji w różnych zamówieniach produkcji.
- Filtrować zadania według stanowiska roboczego lub daty.
- Edytować szczegóły operacji bez otwierania poszczególnych zamówień produkcji.

---

## Pulpit obciążenia stanowisk roboczych

Pulpit **Obciążenie stanowisk roboczych** to potężne narzędzie do wizualnego harmonogramowania i planowania zdolności produkcyjnych.

### Dostęp do pulpitu
Przejdź do **Produkcja** → **Pulpity** → **Obciążenie stanowisk roboczych**.

### Przegląd interfejsu

Pulpit posiada widok macierzowy:
- **Wiersze**: Lista wszystkich skonfigurowanych **Stanowisk roboczych**.
- **Kolumny**: Dni wybranego miesiąca.
- **Nagłówek**: Zawiera elementy sterujące nawigacją i filtrowaniem.

#### Elementy sterujące nawigacją
- Użyj pola **Interwał**, aby zobaczyć bieżący zakres dat.
- Klikaj przyciski `<` i `>`, aby poruszać się między miesiącami.

#### Wskaźniki wizualne
Siatka wykorzystuje kodowanie kolorami dla szybkiej orientacji:
- **Zielone tło**: Reprezentuje bieżącą datę.
- **Różowe tło**: Wskazuje weekendy (sobota i niedziela).
- **Niebieskie tło**: Wyróżnia pracę zaplanowaną dla **Zamówienia produkcji** aktualnie wybranego w nagłówku pulpitu.
- **Pogrubione liczby**: Czas trwania pracy dla wybranego zamówienia produkcji.
- **Małe liczby w nawiasach**: Całkowity czas trwania *wszystkich* zleceń produkcyjnych dla tego stanowiska w tym dniu.

### Harmonogramowanie i edycja z poziomu pulpitu

Pulpit jest interaktywny i pozwala na szybkie korekty:

#### Scenariusz A: Planowanie konkretnego Zamówienia produkcji
1. Wybierz **Zamówienie produkcji** w nagłówku pulpitu.
2. Znajdź przecięcie pożądanego **Stanowiska roboczego** i **Daty**.
3. **Kliknij w komórkę**:
   - Wprowadź wartość numeryczną, aby ustawić lub zaktualizować **Czas trwania**.
   - Jeśli dla tego zamówienia produkcji w tej komórce nie istniało żadne zlecenie produkcyjne, zostanie ono utworzone automatycznie.
   - Aby **usunąć** zlecenie produkcyjne, wpisz `0` lub wyczyść wartość.

#### Scenariusz B: Ogólne zarządzanie obciążeniem
1. Upewnij się, że **nie wybrano żadnego zamówienia produkcji** w nagłówku.
2. **Kliknij w komórkę**, aby otworzyć okno pop-up pokazujące wszystkie zlecenia produkcyjne dla tego stanowiska/dnia.
3. W tym oknie możesz przeglądać, edytować lub usuwać istniejące zlecenia produkcyjne, a także tworzyć nowe dla dowolnego zamówienia produkcji.

### Ograniczenia i walidacje
- **Zamknięte zamówienia**: Nie można tworzyć ani modyfikować zleceń produkcyjnych dla zamówienia produkcji, które jest już zamknięte. System wyświetli komunikat: *"Zamówienie produkcji jest już zamknięte"*.
- **Obowiązkowe stanowisko**: Każde zlecenie produkcyjne musi być przypisane do stanowiska roboczego.
