---
title: Zestawienia materiałowe (struktura towaru)
---

Zestawienie materiałowe opisuje strukturę towaru: jakie materiały i w jakich ilościach są wymagane do produkcji, a także jakie produkty uboczne powstają.

W systemie zestawienie materiałowe jest używane jako źródło planowanych norm: na jego podstawie w zamówieniu produkcji automatycznie generowane są linie materiałów i wyjścia.

## Lokalizacja

Lista zestawień materiałowych jest dostępna w **„Produkcja” → „Operacje” → „Zestawienia materiałowe”**.

Lista pokazuje kolumny **„Numer”**, **„Towar”**, **„Ilość”**, **„JM”**, **„Nazwa”**, flagę **„Zarchiwizowane”** oraz liczniki linii **„Komponenty”** / **„Produkty uboczne”**. Domyślnie filtr **„Aktywnie”** ukrywa zarchiwizowane zestawienia materiałowe.

Katalog operacji zestawień materiałowych to osobna pozycja w **„Produkcja” → „Konfiguracja” → „Operacje”**.

## Do czego służy zestawienie materiałowe

Zestawienie materiałowe jest używane do:

- automatycznego wypełniania linii materiałów w zamówieniu produkcji;
- obliczania planowanego zużycia i planowanej produkcji;
- generowania produktów ubocznych podczas produkcji;
- definiowania szablonów operacji dla zleceń produkcyjnych (stanowisko robocze, czas rozpoczęcia, czas trwania);
- demontażu — zwykle z użyciem tego samego zestawienia materiałowego;
- analizy struktury towaru oraz planowanych norm i kosztu.

## Karta zestawienia materiałowego: pola główne

W karcie zestawienia materiałowego zwykle ustawiasz:

- **„Numer”** — identyfikator zestawienia materiałowego (wymagany, generowany przez licznik);
- **„Towar”** — towar, którego dotyczy zestawienie materiałowe (wymagany);
- **„Ilość”** i **„JM”** — ilość bazowa, dla której zdefiniowano normy (np. 1 szt., 10 szt., 100 kg);
- **„Nazwa”** — dowolna nazwa/komentarz;
- **„Domyślnie”** — wskazuje, że zestawienie materiałowe powinno być wybierane automatycznie w zamówieniu produkcji dla tego towaru;
- **„Zarchiwizowane”** — wskazuje, że zestawienie materiałowe nie jest już używane;
- **„Przejściowa”** — oznacza zestawienie materiałowe półproduktu jako przejściowe: podczas generowania zamówienia nadrzędnego taki towar jest rozwijany na własne komponenty, zamiast być zużywany w całości (zobacz „Zagnieżdżone zestawienia materiałowe” poniżej).

Ważne:

- zestawienie materiałowe oznaczone jako **„Domyślnie”** musi być aktywne (niezarchiwizowane);
- jeśli towar nie ma jawnie wybranego domyślnego zestawienia materiałowego, jako domyślne używane jest najpóźniej utworzone aktywne zestawienie dla tego towaru;
- karta ma także zakładki komentarzy i plików.

## Struktura zestawienia materiałowego: zakładki

### Komponenty

Zakładka **„Komponenty”** zawiera linie materiałów (to, co jest zużywane w trakcie produkcji).

Każda linia zawiera:

- **„№”** — numer linii;
- **„Towar”** (materiał/komponent) z referencyjnymi kolumnami **„JM”**, **„Kod kreskowy”** i **„ID”**;
- **„Ilość”** — normę zużycia dla ilości bazowej zestawienia materiałowego;
- **„Udział kosztów”** — współczynnik rozdziału kosztów, używany, gdy zestawienie materiałowe jest stosowane do demontażu (zobacz niżej);
- **„Zestawienie materiałowe”** — zagnieżdżone zestawienie materiałowe komponentu (zobacz „Zagnieżdżone zestawienia materiałowe” poniżej); domyślnie pokazywane jest domyślne zestawienie materiałowe komponentu.

#### Jak czytać ilość komponentu

Ilość komponentu jest zdefiniowana dla ilości bazowej zestawienia materiałowego.

Przykład:

- ilość w zestawieniu materiałowym = 10 szt.;
- komponent A = 2 kg.

Oznacza to: aby wyprodukować 10 sztuk towaru, potrzebujesz 2 kg komponentu A.

Jeśli zamówienie produkcji jest na 25 szt., plan komponentu zostanie policzony proporcjonalnie: 2 × 25 / 10.

### Produkty uboczne

Zakładka **„Produkty uboczne”** definiuje produkty uboczne, które powstają podczas produkcji.

Każda linia zawiera:

- **„№”** — numer linii;
- **„Produkt”** (co dodatkowo powstaje) z kolumnami **„JM”**, **„Kod kreskowy”** i **„ID”**;
- **„Ilość”** — normę dla ilości bazowej zestawienia materiałowego.

Jak ilości produktów ubocznych są liczone w zamówieniu — zobacz: [Produkty uboczne](by-products.md).

### Operacje

Zakładka **„Operacje”** definiuje planowane kroki produkcji używane do tworzenia zleceń produkcyjnych.

Każda linia zwykle zawiera:

- **„Nazwa”** — nazwę operacji;
- **„Stanowisko robocze”** — gdzie wykonywana jest operacja;
- **„Czas rozpoczęcia”** — planowaną godzinę w ciągu dnia;
- **„Czas trwania”** — planowany czas trwania w godzinach.

Na tej zakładce możesz także skopiować operacje z innego zestawienia materiałowego. Użyj akcji **„Kopiuj istniejące operacje”**, wybierz w oknie dialogowym jeden lub kilka wierszy i potwierdź. Wybrane operacje zostaną dodane do bieżącego zestawienia materiałowego.

## Zagnieżdżone zestawienia materiałowe

Linia komponentu może wskazywać własne **„Zestawienie materiałowe”** (domyślnie — domyślne zestawienie towaru komponentu; zestawienie materiałowe komponentu musi być zgodne z towarem komponentu).

O tym, czy zagnieżdżone zestawienie materiałowe jest rozwijane, decyduje jego flaga **„Przejściowa”**:

- jeśli zagnieżdżone zestawienie materiałowe jest oznaczone jako **„Przejściowa”**, komponent jest traktowany jako półprodukt wytwarzany „w locie”: podczas generowania linii zamówienia sam komponent **nie** jest dodawany jako materiał — zamiast tego dodawane są jego własne komponenty (rekurencyjnie, z ilościami przeliczonymi przez łańcuch zagnieżdżeń);
- jeśli nie jest oznaczone jako przejściowe, komponent jest zużywany jak zwykły materiał.

[Zlecenia produkcyjne](work-orders.md) są generowane także z operacji zagnieżdżonych przejściowych zestawień materiałowych, dzięki czemu cały łańcuch obróbki jest planowany w jednym zamówieniu.

## Struktura i koszt

Akcja **„Struktura i koszt”** na karcie otwiera formularz z pełnym (wielopoziomowym) drzewem komponentów towaru:

- komponenty są pokazywane z wcięciem według poziomu zagnieżdżenia, wraz z zagnieżdżonym zestawieniem materiałowym i efektywną ilością (kolumna **„Ilość”**) na ilość bazową;
- **„Koszt produktu”** — koszt księgowy ilości komponentu;
- **„Koszt komponentów”** — zagregowany koszt komponentów podrzędnych;
- formularz ma własną akcję **„Drukuj”**.

To wygodny sposób oszacowania planowanego kosztu towaru na podstawie bieżących kosztów komponentów, zanim ruszy jakakolwiek produkcja.

## Użycie zestawienia materiałowego w zamówieniu produkcji

### Automatyczny wybór zestawienia materiałowego

Jeśli towar ma domyślne zestawienie materiałowe, system wybiera je automatycznie po wskazaniu towaru w zamówieniu produkcji.

### Kontrola zgodności towaru

W zamówieniu produkcji system wymusza, aby:

- towar w zamówieniu był zgodny z towarem zestawienia materiałowego.

Jeśli towary nie są zgodne, zamówienie nie może zostać zapisane.

### Generowanie linii z zestawienia materiałowego

W karcie zamówienia produkcji jest akcja generowania linii (**„Utwórz linie”**, dostępna w statusie „Projekt”).

Dla zwykłej produkcji:

- komponenty zestawienia materiałowego generują linie materiałów (komponenty z zagnieżdżonym przejściowym zestawieniem materiałowym są rozwijane na swoje podkomponenty);
- towar z zamówienia generuje linię wyjścia;
- produkty uboczne z zestawienia materiałowego są dodawane do linii wyjścia;
- zlecenia produkcyjne są generowane z operacji zestawienia materiałowego, w tym operacji z zagnieżdżonych przejściowych zestawień materiałowych.

Dla demontażu:

- komponenty zestawienia materiałowego generują linie wyjścia;
- towar z zamówienia generuje linię materiału;
- produkty uboczne z zestawienia materiałowego są dodawane do linii materiałów;
- zlecenia produkcyjne są generowane z operacji zestawienia materiałowego, w tym operacji z zagnieżdżonych przejściowych zestawień materiałowych.

Ważne: przy generowaniu lub przeliczaniu linii zamówienia zlecenia produkcyjne są przebudowywane na podstawie aktualnych operacji zestawienia materiałowego, a utworzone zlecenia zachowują powiązanie ze źródłowym zestawieniem materiałowym.

Szczegóły demontażu: [Demontaż](unbuild.md).

## Udział kosztów w zestawieniu materiałowym

Linie komponentów w zestawieniu materiałowym mogą przechowywać **„Udział kosztów”** — współczynnik rozdziału kosztów.

Jest on używany dla demontażu:

- podczas generowania linii demontażu współczynniki z komponentów zestawienia materiałowego są kopiowane do linii wyjścia;
- następnie całkowity koszt demontażu jest rozdzielany pomiędzy linie wyjścia przy użyciu tych współczynników.

Szczegóły rozdziału kosztów: [Koszt wytworzenia: jak jest liczony](costing.md).

## Wersjonowanie i aktualność

Rekomendacje:

1. Nie edytuj zarchiwizowanych zestawień materiałowych.
2. Gdy struktura towaru się zmienia, utwórz nowe zestawienie materiałowe (nowy numer) i ustaw je jako domyślne.
3. Zarchiwizuj stare zestawienie materiałowe, aby nie było wybierane dla nowych zamówień.

## Kopiowanie zestawienia materiałowego

Podczas kopiowania zestawienia materiałowego (akcja **„Kopiuj”**) system kopiuje:

- pola główne, w tym flagę **„Przejściowa”**;
- komponenty (w tym powiązania z zagnieżdżonymi zestawieniami materiałowymi i udziały kosztów);
- produkty uboczne;
- operacje (w tym stanowisko robocze, czas rozpoczęcia i czas trwania).

## Masowe wprowadzanie w tabelach (import/eksport)

System udostępnia akcje importu/eksportu zestawień materiałowych i ich linii do pliku arkusza (znajdują się one na formularzu migracji danych, a nie na karcie zestawienia materiałowego).

Dostępne są osobne operacje:

- eksport/import zestawień materiałowych;
- eksport/import komponentów;
- eksport/import produktów ubocznych.

Typowy scenariusz:

1. Wyeksportuj szablon.
2. Uzupełnij linie w tabeli.
3. Zaimportuj plik z powrotem.

Ważne: podczas importu system weryfikuje, czy towary i zestawienia materiałowe istnieją dla podanych kodów. Jeśli podano nieznane kody, import jest anulowany.

## Typowe błędy

- **Zestawienie materiałowe nie wybiera się automatycznie** — towar nie ma żadnego aktywnego zestawienia materiałowego (wszystkie są zarchiwizowane). Jeśli podstawia się niewłaściwe zestawienie — ustaw jawnie flagę **„Domyślnie”** na właściwym.
- **Nie można zapisać zamówienia po wyborze zestawienia materiałowego** — towar w zamówieniu nie pasuje do towaru zestawienia materiałowego.
- **Normy w zamówieniu są „inne niż oczekiwane”** — sprawdź ilość bazową zestawienia materiałowego (często jest zdefiniowana nie dla 1, tylko dla 10/100 jednostek).
- **Półprodukt pojawia się w materiałach zamiast swoich komponentów** — zagnieżdżone zestawienie materiałowe komponentu nie jest oznaczone jako **„Przejściowa”**.
