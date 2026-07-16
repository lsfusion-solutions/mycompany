---
title: Towary
---

Słownik **„Towary”** zawiera produkty i usługi, które są używane w pozycjach dokumentów (zamówienia, wydania, faktury, rachunki itp.).

## Produkty i usługi — jaka jest różnica

Towary dzielą się na dwa główne typy:

- **Produkty** — pozycje materialne, które zwykle biorą udział w ewidencji magazynowej.
- **Usługi** — prace i usługi, które nie wymagają składowania i nie tworzą stanów magazynowych.

Podział jest potrzebny, aby:

- poprawnie wykonywać operacje magazynowe (jeśli włączony jest obszar magazynowy);
- przechowywać atrybuty specyficzne dla produktów (np. waga, objętość, kraj pochodzenia — jeśli używane);
- uprościć wybór w dokumentach i analizę.

#### Kiedy utworzyć „produkt”

Utwórz **produkt**, jeśli pozycja:

- jest przyjmowana na magazyn i/lub wydawana z magazynu;
- wymaga kontroli stanów, rezerwacji, partii/numerów seryjnych (jeśli używane);
- ma cechy fizyczne ważne dla logistyki (waga/objętość).

Przykłady: surowce, komponenty, wyroby gotowe, materiały eksploatacyjne.

#### Kiedy utworzyć „usługę”

Utwórz **usługę**, jeśli pozycja:

- jest pracą/usługą i nie jest składowana w magazynie;
- nie powinna tworzyć ruchów magazynowych;
- jest rozliczana w dokumentach jako usługa (jednostką ilości jest „godzina”, „usługa”, „zlecenie”, „zmiana” itp.).

Przykłady: dostawa, montaż, naprawa, konsulting, najem.

## Przed tworzeniem towarów

Zaleca się uzupełnienie z wyprzedzeniem:

- **Jednostki miary** (co najmniej podstawowe);
- **Kategorie** — kategoria jest obowiązkowa dla każdej pozycji, więc upewnij się, że istnieje co najmniej kategoria główna; kategorie służą też do grupowania towarów.

## Import produktów z pliku z użyciem OpenAI

Jeśli skonfigurowano opis importu produktów, na pasku narzędzi listy towarów dla drzewa kategorii pojawia się działanie **Import (GPT)**. Działanie służy do początkowego uzupełnienia lub rozszerzenia katalogu produktów z pliku dostawcy, arkusza, PDF, obrazu albo innego załączonego pliku, który OpenAI może odczytać.

#### Co trzeba przygotować

- uzupełnić klucz API OpenAI i w razie potrzeby utworzyć konfiguracje GPT dla modelu, rozumowania i dodatkowego promptu w ogólnych ustawieniach integracji;
- otworzyć **Dane podstawowe → Ustawienia** i na karcie **Towary** uzupełnić **Import (GPT) → Prompt**. Użyj **Domyślnie**, aby wczytać standardowy opis, a następnie dostosuj go do swoich plików katalogowych, jeśli trzeba;
- sprawdzić, czy jednostki miary mają stabilne ID, ponieważ import nie tworzy nowych jednostek miary;
- sprawdzić istniejące kategorie i produkty w wybranej gałęzi: są one wysyłane do OpenAI jako dane referencyjne, aby można było wykluczyć duplikaty.

#### Jak używać

1. Otwórz **Dane podstawowe → Towary**.
2. Wybierz kategorię, której gałąź ma zostać użyta jako zakres referencyjny do sprawdzania duplikatów.
3. Kliknij **Import (GPT)** i wybierz plik źródłowy. Jeśli skonfigurowano kilka konfiguracji GPT, wybierz tę, której chcesz użyć.
4. W oknie podglądu sprawdź nowo rozpoznane kategorie i produkty. Możesz poprawić pola oraz usunąć wiersze, które nie powinny zostać utworzone.
5. Zatwierdź/zapisz podgląd, aby utworzyć pozostałe kategorie i produkty, albo zamknij/anuluj go, aby odrzucić wynik.

#### Co jest tworzone

- kategorie z nazwą i kategorią nadrzędną;
- produkty z nazwą, kategorią, referencją i jednostką miary.

ID nowych kategorii i produktów są generowane przez system.

#### Ograniczenia i cechy działania

- Działanie jest ukryte, dopóki opis importu jest pusty.
- Istniejące kategorie i produkty nie są aktualizowane; scenariusz tworzy tylko nowe pozycje zwrócone przez OpenAI. System sam nie porównuje ponownie zwróconych wierszy z istniejącymi danymi — unikanie duplikatów opiera się na prompcie i danych referencyjnych wysyłanych do OpenAI, dlatego zawsze sprawdzaj podgląd i usuwaj zbędne wiersze.
- Nowe jednostki miary nie są tworzone automatycznie. Jeśli OpenAI nie zwróci ID istniejącej jednostki, jednostka produktu może pozostać pusta.
- Dopasowanie kategorii wykorzystuje ID istniejących kategorii albo nazwy kategorii tworzonych w tym samym podglądzie. Jeśli kategorii nie uda się dopasować, system umieści wiersz w kategorii głównej.
- Zawsze sprawdzaj podgląd przed zapisem: rozpoznawanie przez OpenAI zależy od jakości pliku i skonfigurowanego opisu.
- Jeśli nie uzupełniono klucza API OpenAI albo żądanie zakończy się błędem, system pokaże komunikat i niczego nie zaimportuje.

## Lista towarów

Lista zwykle pokazuje:

- **Nazwa (pełna)**;
- **ID**;
- **Typ**;
- **Kategoria**;
- **JM** (jednostka miary);
- **Odnośnik wewnętrzny**.

Jeśli dostępna jest archiwizacja, użyj filtra **„Aktywnie”** / **„Zarchiwizowane”**.

## Karta towaru

Typowe pola:

- **Nazwa** — edytowalna nazwa pozycji;
- **Nazwa (pełna)** — tworzona automatycznie (prefiks kategorii + nazwa + prefiksy/sufiksy atrybutów); tylko do odczytu;
- **Typ** — **Produkt** lub **Usługa**, określany przez rodzaj pozycji; tylko do odczytu;
- **Kategoria (pełna)** — kategoria z pełną ścieżką hierarchiczną;
- **JM** — jednostka miary;
- **ID** — generowane automatycznie;
- **Odnośnik wewnętrzny** — referencja/artykuł (jeśli używany);
- **Planowany koszt** — koszt obowiązujący na dzień dzisiejszy; link **Historia** otwiera listę wartości kosztu z datami, gdzie można dodawać nowe wartości obowiązujące od wskazanej daty;
- **Opis**;
- **Zarchiwizowane**.

### Ustawienia magazynowe

Karta produktu (usługi nie mają tych pól) zawiera zakładkę **Magazynowanie** z dodatkowymi parametrami:

- **Waga jednostkowa, kg** i **Objętość jednostki, m3**;
- **Długość jednostki, cm**, **Szerokość jednostki, cm** i **Wysokość jednostki, cm**;
- przy włączonym obszarze magazynowym — **SKU** i **Współczynnik** (używane do automatycznego przeliczania i ewidencji stanów bieżącego towaru poprzez inną pozycję bazową). Więcej szczegółów w sekcji [Magazynowe jednostki SKU](../inventory/product-sku.md).

Dla towarów można również skonfigurować współczynniki przeliczeniowe dla pakietów (na zakładce **Jednostki miary**), a na zakładkach **Zakup** i **Sprzedaż** — wybrać domyślne pakiety. Pozwala to na korzystanie z mechanizmu ewidencji opakowań bezpośrednio w dokumentach.

### Inne zakładki

W zależności od włączonych modułów i ustawień pozycji karta towaru może mieć też inne zakładki — na przykład **Kody kreskowe**, **Atrybuty**, **Zdjęcie** oraz **Dokumenty** (powiązane dokumenty). Zakładki **Zakup** i **Sprzedaż** pojawiają się tylko przy ustawionych flagach **„Można zakupić”** / **„Można sprzedać”**; zakładka **Sprzedaż** zawiera również **Cenę sprzedaży**.

### Atrybuty

Słownik **Atrybuty** (**Dane podstawowe → Atrybuty**) definiuje dodatkowe właściwości towarów (np. marka, kolor, rozmiar). Dla każdego atrybutu można określić kategorie, których dotyczy, listę dozwolonych wartości oraz flagę **Wymagany**. Wartości uzupełnia się na zakładce **Atrybuty** karty towaru; wymagane atrybuty bez wartości są podświetlane. Atrybut może też uczestniczyć w tworzeniu pełnej nazwy towaru: jego wartość (z opcjonalnym prefiksem/sufiksem) jest dodawana przed nazwą lub po niej zgodnie z ustawieniami **Kolejność** i **Przed nazwą** atrybutu.

### Warianty

Towar może mieć **warianty** — osobne towary reprezentujące ten sam produkt w różnych wersjach (np. kolorach lub rozmiarach). Warianty tworzy się na zakładce **Warianty** karty towaru nadrzędnego przyciskiem **Wariant**. Wariant zachowuje własne ID i kody kreskowe, natomiast jego nazwa, kategoria, jednostka miary, flaga archiwizacji oraz wartości atrybutów uzupełnione już w towarze nadrzędnym są synchronizowane z towaru nadrzędnego i na wariancie są tylko do odczytu. Lista towarów ma filtry **Podstawowe** (F10) / **Warianty** (F9), a na karcie wariantu towar nadrzędny jest widoczny w polu **Podstawowy produkt**.

### Zalecenia dotyczące uzupełniania dla produktów

- Upewnij się, że wybrano **Kategorię** i **Jednostkę miary** (np. „szt.”, „kg”, „m”).
- Jeśli konfiguracja zawiera **Wagę**, **Objętość**, **Długość/Szerokość/Wysokość**, **Kraj pochodzenia** — uzupełnij je dla produktów, gdy atrybuty są wykorzystywane w logistyce, znakowaniu lub raportowaniu.

### Zalecenia dotyczące uzupełniania dla usług

- Wybierz jednostkę miary odzwierciedlającą zakres usługi (np. „godzina”, „usługa”, „zlecenie”).
- Wygodnie jest uwzględnić format/skład dostawy w nazwie (np. „Dostawa w mieście”, „Montaż (1 godzina)”), aby usługa była jednoznaczna przy wyborze.

## Komentarze i historia

Jeśli komentarze/historia są włączone w konfiguracji, karta może zawierać zakładkę z komentarzami i/lub historią zmian. Jest to przydatne do zapisywania ustaleń oraz powodów korekt.

## Praktyka utrzymania

- Stosuj spójny styl nazewnictwa dla aktywnych towarów.
- Jeśli towar nie jest już sprzedawany/kupowany, zarchiwizuj go, aby nie pojawiał się przy wyborze w nowych dokumentach.

## Typowe błędy

#### Usługa została utworzona jako produkt

W rezultacie usługa może zacząć zachowywać się jak pozycja magazynowa (np. oczekiwania dotyczące stanów lub niepoprawna logika w dokumentach).

Zalecenie: utwórz poprawny towar jako **usługę**, przełącz procesy na niego i przenieś niepoprawny towar do **Zarchiwizowane**.

#### Produkt został utworzony jako usługa

W rezultacie możesz utracić kontrolę stanów i operacje magazynowe.

Zalecenie: utwórz poprawny towar jako **produkt** i używaj go w dokumentach, w których wymagana jest ewidencja magazynowa.
