---
title: Raporty sprzedaży
---

Sekcja raportowania służy do analizy:

- wolumenu sprzedaży;
- realizacji zamówień;
- wydań i faktur;
- rabatów;
- należności (jeśli włączone).

Raporty są dostępne w menu modułu **Sprzedaż** w sekcji **Raportowanie**. W zależności od uprawnień i włączonych funkcji widoczny zestaw raportów może się różnić.

Moduł **Sprzedaż** zawiera następujące raporty:

- **Raport cenowy** — analiza i porównanie cen towarów na wybrane daty, z opcjonalnym podglądem stanów.
- **Raport zamówień** — szczegółowa lista zamówień sprzedaży i ich pozycji z kwotami, podatkami i atrybutami towarów.
- **Raport sprzedaży** — szczegółowy raport z rejestru sprzedaży z ilościami, przychodem, kosztem i marżą.
- **Podsumowanie sprzedaży** — pulpit z wykresami trendów sprzedaży według tygodnia, klienta, lokalizacji i kategorii.

## Raport cenowy

**Raport cenowy** umożliwia analizę cen produktów w określonych punktach czasowych, porównywanie ich między dwiema datami oraz sprawdzanie stanów magazynowych w wybranych lokalizacjach.

### Najważniejsze funkcje

- **Analiza cen**: przegląd cen dla wszystkich lub wybranych typów cen na określoną **Datę** (data i godzina).
- **Porównywanie cen**: porównanie cen między dwiema datami. Raport pokazuje ceny dla obu dat oraz różnicę procentową.
- **Wskaźniki wizualne**: Wzrosty cen są podświetlone na **zielono**, a spadki na **czerwono**.
- **Integracja z magazynem**: podgląd stanów (w tym lokalizacje podrzędne) dla każdej pozycji w wybranych datach i lokalizacjach.
- **Filtrowanie**:
    - Według **Typu ceny**: Skup się na konkretnym typie ceny lub wyświetl wszystkie.
    - Według **Lokalizacji**: Filtruj produkty według ich dostępności w konkretnej lokalizacji.
    
### Jak używać

1. Przejdź do **Sprzedaż** -> **Raportowanie** -> **Raport cenowy**.
2. Wybierz docelową **Datę** (data i godzina).
3. (Opcjonalnie) Wybierz datę **Porównaj**, aby zobaczyć zmiany cen i stanów.
4. (Opcjonalnie) Wybierz **Typ ceny**, aby przefiltrować wyświetlane ceny.
5. (Opcjonalnie) Wybierz **Lokalizację**, aby zobaczyć stany magazynowe i przefiltrować produkty dostępne w tej lokalizacji.
6. Przejrzyj listę wyników i w razie potrzeby doprecyzuj parametry.

Raport wyświetla listę produktów wraz z ich atrybutami, kodami kreskowymi, jednostkami miary, stanami magazynowymi i cenami dla wybranych dat.

### Parametry i interpretacja

- **Data**: moment w czasie, dla którego raport pobiera wartości cen.
- **Porównaj**: dodatkowy moment w czasie. Po ustawieniu raport pokazuje ceny dla obu dat oraz **% różnicy**.
- **Typ ceny**: ogranicza wynik do jednego typu ceny. Gdy nie jest ustawiony, raport pokazuje wszystkie skonfigurowane typy cen.
- **Lokalizacja**: określa:
  - jaki stan magazynowy jest pokazywany;
  - które towary są uznawane za „w magazynie” na potrzeby filtrowania.
  Stan jest liczony z uwzględnieniem lokalizacji podrzędnych.

Zmiany są wyróżniane:

- wzrost ceny — na **zielono**;
- spadek ceny — na **czerwono**.

### Typowe zastosowania

- **Weryfikacja zmiany cen**: ustaw **Datę** przed i **Porównaj** po zmianie cen, aby potwierdzić oczekiwany wynik.
- **Analiza historii cen**: używaj różnych wartości **Daty**, aby sprawdzić kiedy cena została zmieniona.
- **Planowanie uzupełnień**: ustaw **Lokalizację**, aby skupić się na towarach dostępnych (lub brakujących) w danej lokalizacji.

### Wskazówki

- Używaj porównywalnych znaczników czasu (np. koniec dnia vs koniec dnia), aby uniknąć mylących porównań.
- Przy analizie stanów zawsze ustaw **Lokalizację**, aby kolumna stanów była znacząca.
- Jeśli utrzymujesz wiele typów cen, zacznij od filtrowania po **Typ ceny**, aby nie mieszać różnych zasad cenowych.

### Rekomendacje

1. Zacznij od wąskiego zestawu parametrów (jeden **Typ ceny**, jedna **Lokalizacja**), a potem rozszerzaj zakres.
2. Eksportuj lub kopiuj wyniki, jeśli chcesz je udostępnić lub zachować ślad audytu.
3. Jeśli wartości są nieoczekiwane, sprawdź, czy wybrano właściwą **Datę** (wraz z godziną) oraz właściwą **Lokalizację**.

## Raport zamówień

**Raport zamówień** zapewnia szczegółowy widok zamówień sprzedaży i ich pozycji. Jest przydatny do analizy operacyjnej (co zamówiono, dla kogo, na kiedy i dokąd) oraz do eksportu danych do arkuszy.

### Jak używać

1. Przejdź do **Sprzedaż** -> **Raportowanie** -> **Raport zamówień**.
2. (Opcjonalnie) W sekcji **Filtry** ustaw **Interwał dat**, aby ograniczyć zamówienia według daty zamówienia.
3. Użyj filtrowania/sortowania tabeli, aby skupić się na kliencie, statusie, dziale, lokalizacji, towarze lub innych atrybutach.

### Parametry i interpretacja

- **Interwał dat**: filtruje zamówienia po `Dacie zamówienia` (włącznie). Gdy nie jest ustawiony, raport pokazuje wszystkie dostępne zamówienia.

### Wynik

Raport pokazuje informacje nagłówka zamówienia i informacje o pozycjach (pola nagłówka są powtarzane dla każdej pozycji):

- **Zamówienie**: numer, data/godzina, klient, status, typ, referencja klienta, dział, adres klienta, adres dostawy, planowana data/godzina, lokalizacja, warunki płatności, przedstawiciel i inne pola nagłówka.
- **Pozycje**: towar, opis, ilość, jednostka miary, cena, rabat, cena po rabacie, podatki oraz kwoty (**netto**, **podatek**, **brutto**).
- **Kategorie i atrybuty**: poziomy kategorii i skonfigurowane atrybuty towarów (jako osobne kolumny).

### Typowe zastosowania

- **Eksport operacyjny**: pobranie listy pozycji zamówień dla logistyki/magazynu.
- **Audyt zamówień**: porównanie rabatów, podatków i sum według klientów lub działów.
- **Analiza asortymentu**: segmentacja po kategoriach i atrybutach.

### Wskazówki

- Zacznij od ustawienia **Interwału dat**, aby raport był szybszy i bardziej czytelny.
- Jeśli intensywnie używasz atrybutów towarów, raport może być bardzo szeroki — użyj przewijania poziomego lub eksportu.

## Raport sprzedaży

**Raport sprzedaży** jest raportem szczegółowym opartym o wpisy rejestru sprzedaży. Łączy ilości sprzedaży z kosztami i marżą i może służyć do analizy rentowności.

### Jak używać

1. Przejdź do **Sprzedaż** -> **Raportowanie** -> **Raport sprzedaży**.
2. W sekcji **Filtry** ustaw **Interwał dat**, aby ograniczyć okres raportu.
3. Użyj filtrowania/sortowania, aby skupić się na kliencie, lokalizacji, towarze, kategorii lub numerze dokumentu.

### Parametry i interpretacja

- **Interwał dat**: filtruje wpisy rejestru według daty (włącznie).
- **Miary** (typowe znaczenie):
  - **Ilość** — sprzedana ilość w jednostce miary towaru.
  - **Kwota kosztu** — koszt sprzedanych towarów.
  - **Kwota marży** — marża w wartości bezwzględnej.
  - **Kwota netto**, **Kwota podatku**, **Kwota** — przychód z podziałem na podatek.

### Wynik

Raport zazwyczaj obejmuje:

- Identyfikację dokumentu: klasa/typ, data/godzina, numer.
- Wymiary: klient, lokalizacja, towar, poziomy kategorii, atrybuty towaru.
- Ceny/marżę: cena, narzut.
- Miary: ilość, kwota kosztu, kwota marży, kwota netto, kwota podatku, kwota całkowita.

### Dodatkowe kolumny i sekcje (jeśli włączone)

W zależności od włączonych funkcji raport może zawierać:

- **Szczegóły rabatów**: cena pełna, rabat sprzedaży, kwota rabatu.
- Zakładkę **Sprzedaż według konta**: tabela przestawna według konta sprzedaży, pokazująca przychód, koszt i marżę.

### Typowe zastosowania

- **Analiza rentowności**: marża według towaru/kategorii/lokalizacji.
- **Obrót klientów**: przychód, podatki i sumy według klienta.
- **Kontrola wyjątków**: filtrowanie nietypowo niskiej/wysokiej marży.

### Wskazówki

- Zawsze zaczynaj od ustawienia **Interwału dat**.
- Do porównań między lokalizacjami lub kategoriami wygodny jest eksport i budowa dodatkowych tabel przestawnych w arkuszu.

## Podsumowanie sprzedaży

**Podsumowanie sprzedaży** to raport w formie pulpitu z wykresami i tabelami przestawnymi, który zapewnia wysokopoziomowy wgląd w trendy sprzedażowe.

### Jak używać

1. Przejdź do **Sprzedaż** -> **Raportowanie** -> **Podsumowanie sprzedaży**.
2. W sekcji **Filtry** ustaw **Interwał dat**.
3. Przełączaj zakładki, aby analizować sprzedaż według tygodnia, klienta, lokalizacji i kategorii.

### Parametry i interpretacja

- **Interwał dat**: ogranicza dane rejestru sprzedaży używane do budowy wykresów.

### Co zobaczysz

- **Sprzedaż według tygodnia**: trendy obrotu i marży według tygodnia.
- **Sprzedaż według klienta**: ranking/struktura sprzedaży według klienta.
- **Sprzedaż według lokalizacji**: tygodniowy obrót i marża w podziale na lokalizację.
- **Sprzedaż według kategorii**: obrót i marża w podziale na kategorię.

### Typowe zastosowania

- **Przegląd zarządczy**: monitorowanie obrotu i marży w czasie.
- **Analiza sezonowości**: porównanie tygodniowych wzorców w różnych okresach.
- **Analiza struktury**: zrozumienie, które kategorie/klienci napędzają sprzedaż.