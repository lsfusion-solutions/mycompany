---
title: Karty pracy (Timesheet)
---

Ta strona opisuje dwa formularze kart pracy:

- **Karta pracy menedżera** — do kontroli i korygowania nakładu pracy pracowników wg dni w ramach wybranego projektu.
- **Karta pracy pracownika** — do wprowadzania i podglądu nakładu pracy wg zagadnień (zwykle w ramach wybranego projektu).

Karty pracy działają na podstawie danych **przepracowanego czasu**. Jeśli w Twojej organizacji czas jest ewidencjonowany ściśle wg zagadnień i projektów, karty pracy pozwalają szybko uzupełniać/sprawdzać godziny bez przełączania się na osobne listy.

> Szczegóły dotyczące samych wpisów czasu: zobacz [Przepracowany czas](time-entries.md).

## Ogólne zasady

Oba formularze używają wspólnych elementów:

- **Okres** — przedział dat (zwykle miesiąc). Nagłówek zwykle zawiera przyciski przejścia do poprzedniego/następnego miesiąca.
- **Projekt** — ogranicza ewidencję i podgląd godzin do konkretnego projektu.
- **Typ przepracowanego czasu** — typ pracy (np. „Development”, „Analiza”, „Wsparcie” — dokładna lista zależy od ustawień).
- **Szablon godzin** (jeśli używany) — pozwala szybko wstawiać typową wartość godzin podczas wprowadzania.

### Jak wprowadza się godziny

Godziny wprowadza się bezpośrednio w tabeli.

Zwykle dostępne są dwie opcje:

1. **Wprowadzanie ręczne** — wpisujesz liczbę godzin dla wybranego dnia.
2. **Szybkie wprowadzanie z szablonu** — jeśli wybrano szablon godzin, system wstawia jego wartość.

Jeśli wyczyścisz wartość godzin (ustawisz puste/zero), odpowiadające wpisy przepracowanego czasu dla tego dnia mogą zostać usunięte (w zależności od zasad ewidencji).

### Wyróżnianie dni

Dla łatwiejszej kontroli tabela zwykle stosuje wyróżnienia:

- bieżący dzień jest wyróżniony osobno;
- weekendy mogą być wyróżnione innym kolorem;
- jeśli pracownik ma wpisy przepracowanego czasu różnych typów w tym samym dniu, dzień może być oznaczony jako „wymaga uwagi”.

## Karta pracy menedżera

Otwórz **„Projekty” → „Procesy” → „Karta pracy menedżera”**.

### Cel

Formularz jest przeznaczony dla przełożonych i menedżerów, którzy muszą:

- kontrolować, czy pracownicy uzupełniają czas;
- szybko widzieć obciążenie wg dni;
- w razie potrzeby korygować godziny w ramach projektu.

### Co jest wyświetlane

Karta pracy pokazuje tabelę:

- wiersze — **pracownicy**;
- kolumny — **dni wybranego okresu**;
- wartości — **godziny**.

Dodatkowo w wierszu pracownika mogą być pokazane stanowisko i role w projekcie (jeśli role są prowadzone).

### Ograniczenie listy pracowników

Lista pracowników w karcie pracy zwykle jest tworzona na podstawie:

- uczestników przypisanych do wybranego projektu w wybranym okresie;
- pracowników, którzy już mają godziny/wpisy przepracowanego czasu w wybranym okresie;
- (w niektórych konfiguracjach) użytkowników z rozszerzonymi uprawnieniami, którzy mają dostęp do wszystkich projektów.

### Wprowadzanie i akcje

Gdy edytujesz komórkę (dzień/pracownik), system:

- tworzy/aktualizuje wymagany typ przepracowanego czasu — jeśli na formularzu wybrano **typ przepracowanego czasu**;
- otwiera formularz z listą wpisów przepracowanego czasu dla tego dnia i pracownika — **tylko jeśli nie wybrano typu przepracowanego czasu**.

#### Kopiowanie i czyszczenie godzin (menu kontekstowe)

W karcie pracy menedżera zwykle dostępne są akcje dla dnia:

- **Kopiuj** — kopiuje wpisy przepracowanego czasu z najbliższego poprzedniego dnia, w którym były wpisy, na wybrany dzień.
- **Wyczyść** — usuwa wpisy przepracowanego czasu dla wybranego dnia.

Jeśli włączony jest autosave, takie akcje mogą wymagać potwierdzenia, ponieważ zmiany są zapisywane od razu.

### Typowe sytuacje

#### Wprowadzanie godzin otwiera listę przepracowanego czasu

Lista przepracowanego czasu otwiera się **tylko wtedy, gdy na formularzu nie jest wybrany typ przepracowanego czasu**. Jest to zwykle potrzebne, gdy w wybranym dniu są już wpisy i potrzebne są bardziej szczegółowe informacje (np. rozkład wg zagadnień).

Co zrobić:

1. Otwórz listę przepracowanego czasu wyświetloną przez system.
2. Sprawdź, które prace/zagadnienia mają już wpisy.
3. W razie potrzeby skoryguj godziny lub typ/projekt wpisu.

## Karta pracy pracownika

Otwórz **„Projekty” → „Procesy” → „Karta pracy pracownika”**.

### Cel

Formularz jest przeznaczony dla pracowników i pomaga:

- codziennie wprowadzać godziny dla zagadnień;
- widzieć, dla których zagadnień wpisano czas i w które dni;
- kontrolować kompletność karty pracy w miesiącu.

### Co jest wyświetlane

Karta pracy pracownika pokazuje listę zagadnień i tabelę godzin:

- wiersze — **zagadnienia**;
- kolumny — **dni wybranego okresu**;
- wartości — **godziny wg zagadnienia**.

Mogą być też wyświetlane szczegóły zagadnienia (nazwa, autor, wykonawca, status, typ). Jeśli nie wybrano projektu, może być również pokazany projekt zagadnienia.

### Wybór pracownika

Zwykle domyślnie wybrany jest bieżący użytkownik. W niektórych konfiguracjach, jeśli masz uprawnienia, możesz przełączyć pracownika (np. aby pomóc w uzupełnieniu karty pracy lub do kontroli).

### Wybór zagadnień

Karta pracy pokazuje zagadnienia, które:

- należą do wybranego projektu (jeśli projekt jest wybrany);
- są przypisane do pracownika w okresie lub mają wpisane godziny;
- spełniają filtry wg stanu i własności.

Zwykle dostępne filtry:

- **Otwarte / Zamknięte** — wg stanu zagadnienia;
- **Moje zagadnienia** — gdzie pracownik jest autorem;
- **Przypisane do mnie** — gdzie pracownik jest wykonawcą.

### Wprowadzanie godzin

Gdy edytujesz komórkę (dzień/zagadnienie), system tworzy lub aktualizuje wpis przepracowanego czasu.

Zalecenia:

- najpierw wybierz projekt (jeśli ewidencja jest ściśle projektowa);
- następnie pracuj z zagadnieniami tego projektu;
- wpisuj czas jak najbliżej faktycznej daty wykonania pracy.

## Uprawnienia i ograniczenia

Dostępność kart pracy zależy od uprawnień:

- pracownik zwykle widzi tylko swoją kartę pracy;
- przełożony/menedżer może widzieć karty pracy pracowników projektu;
- dostęp „do wszystkich projektów” rozszerza zestaw danych dostępnych do podglądu i (w niektórych przypadkach) edycji.

Jeśli nie widzisz wymaganego projektu, pracowników lub zagadnień, sprawdź:

- wybrany okres;
- wybrany projekt;
- przypisanie do projektu i czy okres uczestnictwa jest aktualny;
- filtry na formularzu;
- uprawnienia dostępu.