---
title: Zestawienia materiałów (struktura towaru)
---

Zestawienie materiałów opisuje strukturę towaru: jakie materiały i w jakich ilościach są wymagane do wytworzenia, a także jakie produkty uboczne powstają.

W systemie Zestawienie materiałów jest używane jako źródło planowanych norm: na jego podstawie w zamówieniu produkcji automatycznie generowane są linie materiałów i wyjścia.

## Lokalizacja

Zestawienia materiałów są zwykle dostępne w sekcji **„Produkcja”** (w zależności od konfiguracji — w **Operacjach** lub **Ustawieniach**).

## Do czego służy Zestawienie materiałów

Zestawienie materiałów jest używane do:

- automatycznego wypełniania linii materiałów w zamówieniu produkcji;
- obliczania planowanego zużycia i planowanej produkcji;
- generowania produktów ubocznych podczas produkcji;
- demontażu — zwykle z użyciem tego samego Zestawienia materiałów;
- analizy struktury towaru i planowanych norm.

## Karta Zestawienia materiałów: pola główne

W karcie Zestawienia materiałów zwykle ustawiasz:

- **Numer** — identyfikator Zestawienia materiałów;
- **Towar** — towar, którego dotyczy Zestawienie;
- **Ilość** i **Jednostka miary** — ilość bazowa, dla której zdefiniowano normy (np. 1 szt., 10 szt., 100 kg);
- **Nazwa** — dowolna nazwa/komentarz;
- **Domyślne** — wskazuje, że Zestawienie powinno być wybierane automatycznie w zamówieniu produkcji dla tego towaru;
- **Zarchiwizowane** — wskazuje, że Zestawienie nie jest już używane.

Ważne:

- Zestawienie oznaczone jako **domyślne** musi być aktywne (niezarchiwizowane);
- jeśli towar ma domyślne Zestawienie, może ono zostać wybrane automatycznie po wskazaniu towaru w zamówieniu produkcji.

## Struktura Zestawienia materiałów: zakładki

### Komponenty

Zakładka „Komponenty” zawiera linie materiałów (to, co jest zużywane w trakcie produkcji).

Każda linia zwykle zawiera:

- **Towar** (materiał/komponent);
- **Jednostkę miary**;
- **Ilość** — norma zużycia dla ilości bazowej Zestawienia materiałów;
- **Współczynnik alokacji kosztów** — używany, gdy Zestawienie jest stosowane do demontażu (zobacz niżej).

#### Jak czytać ilość komponentu

Ilość komponentu jest zdefiniowana dla ilości bazowej Zestawienia materiałów.

Przykład:

- ilość w Zestawieniu materiałów = 10 szt.;
- komponent A = 2 kg.

Oznacza to: aby wytworzyć 10 sztuk towaru, potrzebujesz 2 kg komponentu A.

Jeśli zamówienie produkcji jest na 25 szt., plan komponentu zostanie policzony proporcjonalnie: 2 × 25 / 10.

### Produkty uboczne

Zakładka „Produkty uboczne” definiuje produkty uboczne, które powstają podczas produkcji.

Każda linia zwykle zawiera:

- **Towar** (co dodatkowo powstaje);
- **Jednostkę miary**;
- **Ilość** — norma dla ilości bazowej Zestawienia materiałów.

Jak ilości produktów ubocznych są liczone w zamówieniu — zobacz: [Produkty uboczne](by-products.md).

## Użycie Zestawienia materiałów w zamówieniu produkcji

### Automatyczny wybór Zestawienia materiałów

Jeśli towar ma domyślne Zestawienie, system może wybrać je automatycznie po wskazaniu towaru w zamówieniu produkcji.

### Kontrola zgodności towaru

W zamówieniu produkcji system wymusza, aby:

- towar w zamówieniu był zgodny z towarem w Zestawieniu materiałów.

Jeśli towary nie są zgodne, zamówienie nie może zostać zapisane.

### Generowanie linii z Zestawienia materiałów

W karcie zamówienia produkcji jest akcja generowania linii (np. **„Utwórz linie”**).

Dla zwykłej produkcji:

- komponenty Zestawienia generują linie materiałów;
- towar z zamówienia generuje linię wyjścia;
- produkty uboczne ze Zestawienia są dodawane do linii wyjścia.

Dla demontażu:

- komponenty Zestawienia generują linie wyjścia;
- towar z zamówienia generuje linię materiału;
- produkty uboczne ze Zestawienia są dodawane do linii materiałów.

Szczegóły demontażu: [Demontaż](unbuild.md).

## Współczynnik alokacji kosztów w Zestawieniu materiałów

Linie komponentów w Zestawieniu materiałów mogą przechowywać współczynnik alokacji kosztów.

Jest on używany dla demontażu:

- podczas generowania linii demontażu współczynniki z komponentów Zestawienia są kopiowane do linii wyjścia;
- następnie całkowity koszt demontażu jest rozdzielany pomiędzy linie wyjścia przy użyciu tych współczynników.

Szczegóły: [Koszt wytworzenia: jak jest liczony](costing.md).

## Wersjonowanie i aktualność

Rekomendacje:

1. Nie edytuj zarchiwizowanych Zestawień materiałów.
2. Gdy struktura towaru się zmienia, utwórz nowe Zestawienie materiałów (nowy numer) i ustaw je jako domyślne.
3. Zarchiwizuj stare Zestawienie, aby nie było wybierane dla nowych zamówień.

## Masowe wprowadzanie w tabelach (import/eksport)

System udostępnia akcje importu/eksportu Zestawień materiałów i ich linii do pliku arkusza.

Zwykle dostępne są osobne operacje:

- eksport/import Zestawień materiałów;
- eksport/import komponentów;
- eksport/import produktów ubocznych.

Typowy scenariusz:

1. Wyeksportuj szablon.
2. Uzupełnij linie w tabeli.
3. Zaimportuj plik z powrotem.

Ważne: podczas importu system weryfikuje, czy towary i Zestawienia materiałów istnieją dla podanych kodów. Jeśli podano nieznane kody, import jest anulowany.

## Typowe błędy

- **Zestawienie nie wybiera się automatycznie** — flaga „Domyślne” nie jest ustawiona lub Zestawienie jest zarchiwizowane.
- **Nie można zapisać zamówienia po wyborze Zestawienia** — towar w zamówieniu nie pasuje do towaru w Zestawieniu.
- **Normy w zamówieniu są „inne niż oczekiwane”** — sprawdź ilość bazową Zestawienia (często jest ustawiona nie na 1, tylko na 10/100 jednostek).