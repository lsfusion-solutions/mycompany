---
title: "Stanowiska robocze i zlecenia produkcyjne"
---

Ta sekcja opisuje, jak korzystać ze **stanowisk roboczych** i **zleceń produkcyjnych** do planowania i zarządzania operacjami produkcyjnymi.

## Stanowiska robocze

**Stanowisko robocze** to jednostka produkcyjna (maszyna, grupa maszyn lub określony obszar), w której wykonywane są operacje produkcyjne.

### Zarządzanie stanowiskami roboczymi

Aby zarządzać stanowiskami roboczymi, przejdź do **„Produkcja”** → **„Konfiguracja”** → **„Stanowiska robocze”**.

Dla każdego stanowiska roboczego możesz określić:
- **„Nazwa”** — opisowa nazwa (np. „Linia montażowa A”, „Maszyna CNC 1”).
- **„ID”** — unikalny kod wewnętrzny stanowiska roboczego.
- **„Opis”** — szczegółowe informacje o możliwościach lub lokalizacji stanowiska.

### Zastosowanie praktyczne
Stanowiska robocze służą do grupowania zleceń produkcyjnych i analizy całkowitego obciążenia produkcyjnego. Definiując odrębne stanowiska robocze, możesz zidentyfikować wąskie gardła i zrównoważyć obciążenie w całym zakładzie.

---

## Zlecenia produkcyjne

**Zlecenie produkcyjne** reprezentuje konkretną operację lub zadanie wykonywane na stanowisku roboczym w ramach [zamówienia produkcji](orders.md). Podczas gdy zamówienie produkcji definiuje *co* jest produkowane, zlecenia produkcyjne określają *jak* i *gdzie* praca jest wykonywana.

### Tworzenie zleceń produkcyjnych

Zlecenia produkcyjne mogą być wprowadzane ręcznie, ale są też automatycznie generowane z operacji zestawienia materiałowego, gdy linie zamówienia produkcji są generowane lub przeliczane. Generowanie obejmuje także operacje z zagnieżdżonych przejściowych zestawień materiałowych, a każde wygenerowane zlecenie zachowuje powiązanie z zestawieniem materiałowym, z którego zostało utworzone.

Zlecenia produkcyjne są zazwyczaj tworzone w kontekście **zamówienia produkcji**. Możesz podzielić pojedynczy proces produkcyjny na wiele sekwencyjnych lub równoległych operacji.

#### Kroki dodawania zlecenia produkcyjnego:
1. Otwórz kartę **zamówienia produkcji**.
2. Przejdź do zakładki **„Zlecenia produkcyjne”**.
3. Kliknij **Dodaj** (Nowy), aby utworzyć nową linię.
4. Wypełnij następujące szczegóły:
   - **„Nazwa”** — nazwa operacji (np. „Cięcie”, „Spawanie”).
   - **„Stanowisko robocze”** — wybierz jednostkę, w której odbędzie się ta operacja (obowiązkowe).
   - **„Data rozpoczęcia”** — dzień, w którym zaplanowano rozpoczęcie operacji (domyślnie planowana data zamówienia produkcji).
   - **„Czas rozpoczęcia”** — konkretna godzina, o której powinna rozpocząć się operacja.
   - **„Czas trwania”** — szacowany czas potrzebny na operację (w godzinach).

Automatycznie wygenerowane zlecenia produkcyjne dodatkowo przechowują wewnętrzne powiązanie ze źródłową operacją zestawienia materiałowego, a kolumna **„Zestawienie materiałowe”** na liście zleceń pokazuje, skąd pochodzi operacja.

### Zarządzanie wszystkimi zleceniami produkcyjnymi

Aby zobaczyć globalny widok wszystkich zadań produkcyjnych, przejdź do **„Produkcja”** → **„Operacje”** → **„Zlecenia produkcyjne”**.

Lista ta pozwala kierownikom:
- Śledzić postęp operacji w różnych zamówieniach produkcji.
- Filtrować zadania według stanowiska roboczego, daty rozpoczęcia lub towaru (z zamówienia produkcji).
- Masowo aktualizować zlecenia produkcyjne przy użyciu multi-selekcji: wybierz wiele linii i użyj akcji **„Start”** lub **„Zatwierdź”**.
- Edytować szczegóły operacji bez otwierania poszczególnych zamówień produkcji.

### Statusy zleceń produkcyjnych

Każde zlecenie produkcyjne przechodzi przez określony przepływ w celu śledzenia postępów:
- **„Gotowy”**: stan początkowy nowych zleceń produkcyjnych.
- **„W trakcie”**: stan aktywny po rozpoczęciu pracy (oznaczony żółtym tłem).
- **„Wykonano”**: stan końcowy po zakończeniu operacji.

#### Akcje:
- **„Start”**: przenosi zlecenie produkcyjne ze stanu *„Gotowy”* do *„W trakcie”*.
- **„Zatwierdź”**: przenosi zlecenie produkcyjne ze stanu *„W trakcie”* do *„Wykonano”*.

Akcje te są dostępne zarówno na formularzu zlecenia produkcyjnego, jak i na globalnej liście zleceń produkcyjnych.

Uwaga: jeśli produkowany towar jest objęty śledzeniem partii, karta zlecenia produkcyjnego pokazuje także (tylko do odczytu) [partie](lots-and-printing.md) do wyprodukowania w jego zamówieniu produkcji.

### Filtrowanie i wybór

Lista **„Zlecenia produkcyjne”** zawiera rozszerzone filtrowanie:
- **„Otwarta”**: wyświetla zlecenia produkcyjne w statusie *„Gotowy”* lub *„W trakcie”*.
- **„Zamknięta”**: wyświetla zlecenia produkcyjne w statusie *„Wykonano”*.
- **Filtry według daty, stanowiska roboczego i towaru**: użyj panelu filtrów, aby zawęzić listę operacji.

**Multi-selekcja** jest obsługiwana w widoku listy, co umożliwia wykonywanie operacji masowych na wielu zleceniach produkcyjnych jednocześnie.

### Synchronizacja i zachowanie przy kopiowaniu

- Gdy linie zamówienia produkcji są generowane/przeliczane, istniejące zlecenia produkcyjne w tym zamówieniu są przebudowywane na podstawie operacji zestawienia materiałowego, w tym operacji z zagnieżdżonych przejściowych zestawień materiałowych.
- Gdy zamówienie produkcji jest kopiowane, kopiowane są również jego zlecenia produkcyjne, w tym powiązanie z operacją, powiązanie ze źródłowym zestawieniem materiałowym, data/czas rozpoczęcia oraz czas trwania.

---

## Pulpit obciążenia stanowisk roboczych

Pulpit **„Obciążenie stanowisk roboczych”** to potężne narzędzie do wizualnego harmonogramowania i planowania zdolności produkcyjnych.

### Dostęp do pulpitu
Przejdź do **„Produkcja”** → **„Procesy”** → **„Obciążenie stanowisk roboczych”**.

### Przegląd interfejsu

Pulpit posiada widok macierzowy:
- **Wiersze**: lista wszystkich skonfigurowanych **stanowisk roboczych**.
- **Kolumny**: dni wybranego miesiąca.
- **Nagłówek**: zawiera elementy sterujące nawigacją i filtrowaniem.

#### Elementy sterujące nawigacją
- Użyj pola **Interwał**, aby zobaczyć bieżący zakres dat.
- Klikaj przyciski `<` i `>`, aby poruszać się między miesiącami.

#### Wskaźniki wizualne
Siatka wykorzystuje kodowanie kolorami dla szybkiej orientacji:
- **Zielone tło**: reprezentuje bieżącą datę.
- **Różowe tło**: wskazuje weekendy (sobota i niedziela).
- **Niebieskie tło**: wyróżnia pracę zaplanowaną dla **zamówienia produkcji** aktualnie wybranego w nagłówku pulpitu.
- **Pogrubione liczby**: czas trwania pracy dla wybranego zamówienia produkcji.
- **Małe liczby w nawiasach**: łączny czas trwania *wszystkich* zleceń produkcyjnych dla tego stanowiska roboczego w tym dniu.

### Harmonogramowanie i edycja z poziomu pulpitu

Pulpit jest interaktywny i pozwala na szybkie korekty:

#### Scenariusz A: Planowanie konkretnego zamówienia produkcji
1. Wybierz **zamówienie produkcji** w nagłówku pulpitu.
2. Znajdź przecięcie pożądanego **stanowiska roboczego** i **daty**.
3. **Kliknij w komórkę**:
   - Wprowadź wartość liczbową, aby ustawić lub zaktualizować **„Czas trwania”**.
   - Jeśli dla tego zamówienia produkcji w tej komórce nie istniało żadne zlecenie produkcyjne, zostanie ono utworzone automatycznie.
   - Aby **usunąć** zlecenie produkcyjne, wpisz `0` lub wyczyść wartość.

#### Scenariusz B: Ogólne zarządzanie obciążeniem
1. Upewnij się, że w nagłówku **nie wybrano żadnego zamówienia produkcji**.
2. **Kliknij w komórkę**, aby otworzyć okno pop-up pokazujące wszystkie zlecenia produkcyjne dla tego stanowiska/dnia.
3. W tym oknie możesz przeglądać, edytować lub usuwać istniejące zlecenia produkcyjne, a także tworzyć nowe dla dowolnego zamówienia produkcji.

### Ograniczenia i walidacje
- **Zamknięte zamówienia**: nie można tworzyć ani modyfikować zleceń produkcyjnych dla zamówienia produkcji, które jest już zamknięte. System wyświetli komunikat: *„Zamówienie produkcji jest już zamknięte”*.
- **Obowiązkowe stanowisko robocze**: każde zlecenie produkcyjne musi być przypisane do stanowiska roboczego.
