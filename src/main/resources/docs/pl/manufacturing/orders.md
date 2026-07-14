---
title: "Zamówienia produkcji: lista i karta"
---

## Lokalizacja

Otwórz **„Produkcja”** → **„Operacje”** → **„Zamówienia produkcji”**.

## Do czego służy zamówienie produkcji

Zamówienie produkcji jest głównym dokumentem produkcyjnym. Służy do:

- rejestracji **co** ma zostać wytworzone (lub [zdemontowane](unbuild.md));
- ustawienia **planowanej ilości**;
- wskazania **[zestawienia materiałowego](bom.md)** (struktury towaru), na podstawie którego wyliczane są materiały;
- wykonania **kontroli dostępności** i rezerwacji materiałów;
- rejestracji **faktycznej produkcji** i **faktycznego zużycia**;
- wskazania pola **„Lokalizacja produktów”** przy przenoszeniu zamówienia do statusu **„Wykonano”**;
- monitorowania statusów [zleceń produkcyjnych](work-orders.md) bezpośrednio z karty zamówienia.

## Lista zamówień produkcji

Lista służy do kontroli bieżących zamówień i szybkiego otwierania karty zamówienia.

Typowe kolumny:

- **„Numer”**;
- **„Data rozpoczęcia”** (planowana) i **„Data wykonania”** (wypełniana, gdy zamówienie osiąga status **„Wykonano”**);
- **„Towar”** — co jest produkowane;
- **„Typ”** i flaga **„Demontaż”** (pochodzi z [typu](settings.md));
- **„Firma”**;
- plan i wykonanie: **„Produkcja”** (planowana ilość) i **„Wyprodukowano”** (faktyczna), wraz z **„JM”**;
- **„Lokalizacja produktów”** oraz wyliczana kolumna **„Na stanie po (dokąd)”** — oczekiwany stan towaru w lokalizacji produktów po wykonaniu;
- **„Zestawienie materiałowe”**;
- **„Lokalizacja materiałów”**;
- liczniki linii: **„Linie materialne”** i **„Linie produktów”**;
- kolumny kosztowe (zobacz: [Koszt wytworzenia](costing.md)): **„Koszt”**, **„Dodatkowy koszt”**, **„Łączny koszt”**, a także **„Koszt pracy”** i **„Koszt usług”**, gdy używane są odpowiednie kontury;
- **Zamówienie sprzedaży** — link do źródłowego zamówienia sprzedaży, jeśli zamówienie zostało utworzone [z zamówienia sprzedaży](sales-orders.md).

Kolor tła wiersza odzwierciedla status zamówienia (zobacz: [statusy](workflow.md)).

### Filtry

- grupa **filtrów statusu**: **„Oczekiwanie”**, **„Gotowy”**, **„W trakcie”**, **„Wykonano”** (plus opcja pokazania wszystkich);
- filtr **zakresu dat** po dacie rozpoczęcia;
- filtry w prawym panelu: **„Typ”**, **„Towar”**, **„Lokalizacja materiałów”** i **„Lokalizacja produktów”**.

### Zaznaczanie i zakładka „Suma”

Wiersze listy można zaznaczać checkboxami. Dla zaznaczonych zamówień:

- dostępne są zbiorcze akcje statusowe: **„Oznacz jako Do zrobienia”**, **„Sprawdź dostępność”**, **„Produkcja”**, **„Zatwierdź”**;
- pojawia się zakładka **„Suma”**: agreguje ona materiały wszystkich zaznaczonych zamówień — jeden wiersz na towar z kolumnami **„Do zużycia”**, **„Zużyte”** i **„Koszt”**, a dla wybranego towaru — źródłowe linie materiałów wraz z ich zamówieniami.

### Utwórz zamówienia (tworzenie zbiorcze)

Akcja **„Utwórz zamówienia”** tworzy kilka zamówień produkcji naraz:

1. Wybierz **„Typ”** w filtrze prawego panelu (w przeciwnym razie akcja zgłosi komunikat, że nie wybrano typu zamówienia produkcyjnego).
2. Otwiera się dialog **„Wybór produktów”** ze wszystkimi towarami, które mają domyślne [zestawienie materiałowe](bom.md).
3. Wprowadź ilość **„Produkcja”** dla wymaganych towarów; w razie potrzeby zmień **„Zestawienie materiałowe”** dla poszczególnych towarów.
4. Jeśli ustawiono filtr **„Lokalizacja produktów”**, dialog pokazuje także bieżący stan **„Na stanie”** w tej lokalizacji, a akcja **„Wypełnij (ujemne)”** uzupełnia ilości dla towarów z ujemnym stanem.
5. Po potwierdzeniu tworzone jest jedno zamówienie produkcji na towar — z typem, zestawieniem materiałowym, lokalizacjami materiałów/produktów z filtrów oraz wygenerowanymi liniami.

### Utworzenie zamówień zakupu na materiały

Z listy zamówień produkcji można także utworzyć [zamówienia zakupu](../purchase/orders.md) na materiały wymagane przez wybrane zamówienia produkcji. Odpowiednia akcja (również z podpisem **„Utwórz zamówienia”**) pojawia się po zaznaczeniu co najmniej jednego zamówienia.

1. W filtrach ustaw filtr **„Lokalizacja materiałów”** — przetwarzane będą tylko zamówienia produkcji dla tej lokalizacji (w przeciwnym razie akcja zgłosi komunikat, że nie wybrano lokalizacji materiałów).
2. Zaznacz zamówienia produkcji, dla których chcesz zakupić materiały.
3. Uruchom akcję.

System:

- agreguje wymagane materiały (tylko linie zużycia, które nie są jeszcze powiązane z zamówieniem zakupu) z zaznaczonych zamówień produkcji;
- grupuje towary według domyślnego [dostawcy](../masterdata/partners.md) i tworzy jedno zamówienie zakupu na dostawcę;
- tworzy dodatkowe zamówienie zakupu (bez dostawcy) dla towarów, które nie mają domyślnego dostawcy;
- ustawia wybraną lokalizację materiałów jako lokalizację każdego nowego zamówienia zakupu;
- wiąże każdą przetworzoną linię zużycia z odpowiednią linią nowego zamówienia zakupu, aby zachować powiązanie między zamówieniem produkcji a zamówieniem zakupu;
- otwiera każde utworzone zamówienie zakupu do przeglądu.

### Zapotrzebowanie produkcyjne w automatycznym zamówieniu zakupu

Gdy włączone jest automatyczne wypełnianie zamówień zakupu, zapotrzebowanie produkcyjne jest uwzględniane w kalkulacji pola **„Zamówienie automatyczne”** w zamówieniu zakupu.

W siatce towarów zamówienia zakupu system pokazuje:

- **„Oczekiwanie na zużycie”** — ilości materiałów z zamówień produkcji oczekujących na wykonanie;
- **„Zużyte”** — ilości materiałów z zamówień produkcji w statusie **„Wykonano”** w wybranym okresie zamówienia.

Te ilości zwiększają sugerowaną wartość pola **„Zamówienie automatyczne”** razem z zapotrzebowaniem z wydań, dzięki czemu zamówienia zakupu mogą pokrywać zarówno potrzeby wysyłek sprzedaży, jak i potrzeby materiałowe produkcji.

## Karta zamówienia produkcji

Karta zamówienia produkcji służy do przeprowadzenia procesu krok po kroku.

### Pola główne

- **„Typ”** — określa zachowanie (np. [demontaż](unbuild.md)) i wartości domyślne; wymagany;
- **„Data rozpoczęcia”** — planowana data i czas rozpoczęcia (domyślnie bieżąca chwila);
- **„Numer”** — wymagany; generowany przez licznik typu;
- **„Firma”**;
- **„Odpowiedzialny”** — domyślnie aktualny użytkownik;
- **„Data wykonania”** — pojawia się, gdy zamówienie ma status **„Wykonano”**;
- **„Towar”** — towar wytwarzany, wraz z flagą **„Demontaż”** typu (tylko do odczytu);
- **„Produkcja”** — planowana ilość, wraz z **„JM”**; gdy zamówienie jest w trakcie realizacji, obok pokazywana jest faktyczna ilość **„Wyprodukowano”**;
- **„[Zestawienie materiałowe](bom.md)”** — struktura towaru; domyślne zestawienie materiałowe towaru jest podstawiane automatycznie;
- **„Notatka”**.

Bieżący status jest pokazywany jako łańcuch etapów (Oczekiwanie → Gotowy → W trakcie → Wykonano, plus Anulowano); akcje przenoszące zamówienie między statusami opisano w [procesie](workflow.md).

### Zakładki

- **„Materiały”** — pole **„Lokalizacja materiałów”** oraz linie materiałów: **„№”**, **„Towar”**, **„Opis”**, **„JM”**, **„Kod kreskowy”**, **„ID”**, **„Do zużycia”**, a także kolumny dostępności **„Na stanie”** / **„Oczekiwane”** / **„Dostępne”** / **„Zarezerwowane”** oraz — gdy zamówienie jest w trakcie realizacji — faktyczne **„Zużyte”**. Jeśli używane są [partie](lots-and-printing.md), pokazywany jest panel partii dla linii.
- **„Produkty wyprodukowane”** — pole **„Lokalizacja produktów”** oraz linie produktów: **„№”**, **„Towar”**, **„JM”**, **„Kod kreskowy”**, **„ID”**, **„Produkcja”** (plan), **„Udział kosztów”** oraz — gdy zamówienie jest w trakcie realizacji — faktyczne **„Wyprodukowano”**. Dla towarów śledzonych partiami pokazywany jest panel partii dla linii.
- **„Zlecenia produkcyjne”** — [zlecenia produkcyjne](work-orders.md) zamówienia wraz z ich statusami.
- **„Komentarze”**, **„Pliki”** (załączniki) oraz **„Historia”** statusów.

Gdy używany jest kontur zarządzania projektami, karta dodatkowo pokazuje pole **„Projekt”** oraz zakładkę wpisów czasu (robocizna rejestrowana na zamówieniu — zobacz: [Koszt wytworzenia](costing.md)).

W nagłówku widoczny jest także blok powiązanych **„Odpadów”** (zobacz: [Odpad](scrap.md)), a w stopce — link do **zamówienia sprzedaży**, jeśli zamówienie zostało utworzone [z zamówienia sprzedaży](sales-orders.md).

### Kontrola zgodności towaru z zestawieniem materiałowym

Jeśli wybrano [zestawienie materiałowe](bom.md), system sprawdza, czy towar w zestawieniu jest zgodny z towarem w zamówieniu. Jeśli towary nie są zgodne, zamówienia nie można zapisać.

### Utwórz linie

W statusie **„Projekt”** główna akcja **„Utwórz linie”** generuje linie: pyta o ilość (domyślnie bieżąca planowana ilość) i wypełnia linie materiałów oraz linie produktów na podstawie [zestawienia materiałowego](bom.md), włącznie z komponentami zagnieżdżonych przejściowych zestawień materiałowych. Jednocześnie generowane są [zlecenia produkcyjne](work-orders.md) na podstawie operacji zestawienia materiałowego, w tym operacji z zagnieżdżonych przejściowych zestawień materiałowych.

Uwaga: ponowne uruchomienie akcji usuwa istniejące linie i generuje je od nowa.

### Kopiuj

Akcja **„Kopiuj”** tworzy nowe zamówienie w statusie **„Projekt”** z tym samym typem, towarem, zestawieniem materiałowym, firmą, lokalizacjami materiałów/produktów i liniami (tylko ilości planowane). Zlecenia produkcyjne również są kopiowane.

### Drukuj

Akcja **„Drukuj”** drukuje prosty wydruk zamówienia (kartę pracy dla produkcji): numer zamówienia, datę rozpoczęcia, towar i ilość oraz listę materiałów z ilościami i lokalizacją źródłową.

## Typowe scenariusze

### Utworzyć zamówienie i przygotować je do startu

1. Utwórz nowe zamówienie produkcji.
2. Wypełnij typ, towar i datę rozpoczęcia.
3. Wybierz [zestawienie materiałowe](bom.md) (zwykle podstawiane automatycznie).
4. Uruchom **„Utwórz linie”**, aby wygenerować linie materiałów i produktów (jednocześnie generowane są zlecenia produkcyjne).
5. Uruchom **„Oznacz jako Do zrobienia”**, a następnie **„Sprawdź dostępność”**, aby zarezerwować materiały.

### Wyprodukować i zatwierdzić

1. Uruchom **„Produkcja”** i wprowadź wyprodukowaną ilość (system rozdziela produkcję i zużycie proporcjonalnie).
2. Zarządzaj wykonaniem zleceń produkcyjnych (opcjonalnie): na zakładce **„Zlecenia produkcyjne”** użyj akcji **„Start”** i **„Zatwierdź”**, aby śledzić postęp operacji.
3. W razie potrzeby skoryguj faktyczne wartości **„Wyprodukowano”** / **„Zużyte”** w liniach.
4. Uruchom **„Zatwierdź”** i wskaż pole **„Lokalizacja produktów”**.
