---
title: Karty pracy (Timesheet)
---

Ta strona opisuje formularze kart pracy:

- **Karta pracy menedżera** — do kontroli i korygowania nakładu pracy pracowników wg dni w ramach wybranego projektu.
- **Karta pracy menedżera mobilna** — uproszczony jednodniowy wariant karty pracy menedżera na telefon.
- **Karta pracy pracownika** — do wprowadzania i podglądu nakładu pracy wg zagadnień (zwykle w ramach wybranego projektu).

Karty pracy działają na podstawie danych **przepracowanego czasu**. Jeśli w Twojej organizacji czas jest ewidencjonowany ściśle wg zagadnień i projektów, karty pracy pozwalają szybko uzupełniać/sprawdzać godziny bez przełączania się na osobne listy.

> Szczegóły dotyczące samych wpisów czasu: zobacz [Przepracowany czas](time-entries.md).

## Ogólne zasady

Formularze na komputer (karta pracy menedżera i karta pracy pracownika) używają wspólnych elementów:

- **Okres** — przedział dat (zwykle miesiąc). Nagłówek zwykle zawiera przyciski przejścia do poprzedniego/następnego miesiąca. Karta mobilna pracuje z pojedynczym dniem zamiast okresu.
- **Projekt** — ogranicza ewidencję i podgląd godzin do konkretnego projektu.
- **Typ przepracowanego czasu** — typ pracy (np. „Development”, „Analiza”, „Wsparcie” — dokładna lista zależy od ustawień).
- **Szablon godzin** (jeśli używany) — pozwala szybko wstawiać typową wartość godzin podczas wprowadzania.

### Jak wprowadza się godziny

Godziny wprowadza się bezpośrednio w tabeli.

Zwykle dostępne są dwie opcje:

1. **Wprowadzanie ręczne** — wpisujesz liczbę godzin dla wybranego dnia.
2. **Szybkie wprowadzanie z szablonu** — jeśli wybrano szablon godzin, system wstawia jego wartość. Ponowne zastosowanie tego samego szablonu do wypełnionej komórki usuwa wpis.

Jeśli wyczyścisz wartość godzin (ustawisz puste/zero), odpowiadające wpisy przepracowanego czasu dla tego dnia mogą zostać usunięte (w zależności od zasad ewidencji).

Jeśli włączone jest ustawienie **autozapisu godzin** („Automatycznie zapisuj godziny na timesheet”, konfigurowane w **„Projekty” → „Konfiguracja” → „Ustawienia”**), zmiany w komórkach są zapisywane w bazie od razu — dotyczy to obu formularzy kart pracy.

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

- **aktywnych** uczestników przypisanych do wybranego projektu w wybranym okresie;
- pracowników, którzy już mają godziny/wpisy przepracowanego czasu dla wybranego projektu w wybranym okresie (niezależnie od ich statusu aktywności);
- jeśli wybrany projekt nie ma żadnych przypisań — wszystkich **aktywnych** pracowników (dla użytkownika z dostępem do wszystkich projektów: flaga „Dostęp do wszystkich projektów” albo brak bezpośrednich przypisań — zobacz **[dostęp do projektów](team-and-roles.md#dostęp-do-projektów)**).

### Wprowadzanie i akcje

Gdy edytujesz komórkę (dzień/pracownik), system:

- tworzy/aktualizuje wpis przepracowanego czasu wymaganego typu — jeśli na formularzu wybrano **typ przepracowanego czasu** (i wybrano projekt, albo istniejący wpis dnia nie jest jeszcze powiązany z projektem);
- otwiera formularz z listą wpisów przepracowanego czasu dla tego dnia i pracownika — w pozostałych przypadkach (przede wszystkim gdy nie wybrano typu przepracowanego czasu).

Jeśli dla wybranego typu skonfigurowano **szablony godzin**, obok typu wyświetlane są przyciski szablonów — kliknięcie wstawia godziny szablonu do wybranej komórki.

#### Kopiowanie i czyszczenie godzin (menu kontekstowe)

W karcie pracy menedżera zwykle dostępne są akcje dla dnia (przez menu kontekstowe komórki dnia):

- **Kopiuj** — najpierw czyści wybrany dzień, a następnie kopiuje do niego wszystkie wpisy przepracowanego czasu z najbliższego poprzedniego dnia, w którym były wpisy. Przenoszone są pracownik, projekt, typ i godziny; powiązanie z zagadnieniem, szablon godzin i opis nie są kopiowane.
- **Wyczyść** — usuwa wszystkie wpisy przepracowanego czasu dla wybranego dnia.

> Akcje dotyczą **całego dnia** — wszystkich pracowników w ramach wybranego projektu (lub wpisów bez projektu, gdy projekt nie jest wybrany), a nie pojedynczej komórki.

Jeśli włączone jest ustawienie **autozapisu godzin** (zobacz wyżej), zmiany są zapisywane od razu, dlatego **„Wyczyść”** zawsze wymaga potwierdzenia, a **„Kopiuj”** — gdy dzień docelowy ma już wpisy (zostaną usunięte).

#### Wprowadzanie godzin wg zagadnienia

Tabela pracowników w karcie pracy menedżera ma dwie zakładki: **„Suma”** i **„Zagadnienia”**. Na zakładce „Zagadnienia” można wybrać konkretne zagadnienie (otwarte i należące do wybranego projektu) i wprowadzać godziny dla niego; komórki pokazują wtedy godziny wybranego zagadnienia na tle łącznej liczby godzin pracownika w danym dniu.

### Typowe sytuacje

#### Wprowadzanie godzin otwiera listę przepracowanego czasu

Lista przepracowanego czasu otwiera się, gdy na formularzu **nie jest wybrany typ przepracowanego czasu** (a także gdy nie wybrano projektu, a wpisy dnia są już powiązane z projektem). Jest to zwykle potrzebne, gdy w wybranym dniu są już wpisy i potrzebne są bardziej szczegółowe informacje (np. rozkład wg zagadnień).

Co zrobić:

1. Otwórz listę przepracowanego czasu wyświetloną przez system.
2. Sprawdź, które prace/zagadnienia mają już wpisy.
3. W razie potrzeby skoryguj godziny lub typ/projekt wpisu.

## Karta pracy menedżera mobilna

Otwórz **„Projekty” → „Procesy” → „Karta pracy menedżera mobilna”**.

Uproszczony wariant karty pracy menedżera do pracy z telefonu:

- wybierany jest **jeden dzień**; przyciski pozwalają przejść o dzień lub tydzień wstecz/naprzód;
- lista pokazuje **aktywnych** pracowników przypisanych do wybranego projektu **na bieżącą datę** (albo wszystkich aktywnych pracowników — dla użytkownika z dostępem do wszystkich projektów, gdy projekt nie ma przypisań);
- godziny wprowadza się wg pracowników za wybrany dzień (przy wybranym typie przepracowanego czasu);
- dostępne są przyciski **szablonów godzin** oraz akcje **„Kopiuj”** / **„Wyczyść”** dla dnia (z potwierdzeniem);
- zmiany zapisywane są od razu.

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

> Suma godzin za okres i sumy dzienne w stopce liczone są po **wszystkich** wpisach przepracowanego czasu pracownika, a nie tylko po wybranym projekcie, więc suma może być większa niż widoczne wiersze.

### Wybór pracownika

Zwykle domyślnie wybrany jest bieżący użytkownik. Użytkownik z dostępem do wszystkich projektów (flaga **„Dostęp do wszystkich projektów”** albo brak bezpośrednich przypisań) może przełączyć pracownika (np. aby pomóc w uzupełnieniu karty pracy lub do kontroli).

### Wybór zagadnień

Karta pracy pokazuje zagadnienia, które:

- należą do wybranego projektu (jeśli projekt jest wybrany);
- należą do projektów, do których pracownik jest przypisany w wybranym okresie, albo mają już godziny wpisane przez pracownika za okres;
- zagadnienia projektów bez żadnych przypisań są dodatkowo widoczne dla użytkownika z dostępem do wszystkich projektów;
- spełniają filtry wg stanu i własności.

Zwykle dostępne filtry:

- **„Otwarta” / „Zamknięta”** — wg stanu zagadnienia;
- **„Moje zagadnienia”** — gdzie pracownik jest autorem;
- **„Przypisane do mnie”** — gdzie pracownik jest wykonawcą.

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