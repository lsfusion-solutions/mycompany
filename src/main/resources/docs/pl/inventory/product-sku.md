---
title: Magazynowe jednostki SKU
---

Ta sekcja opisuje mechanizm zbiorczej ewidencji magazynowej kilku pozycji towarowych poprzez jedną kartę bazową. Pozwala to na efektywne zarządzanie zapasami, gdy ten sam produkt fizyczny jest reprezentowany w systemie przez różne towary (na przykład dostarczany w różnych opakowaniach, ale przechowywany i ewidencjonowany w jednostkach wspólnych).

## Główny mechanizm: Zastępowanie towarów

W systemie rozróżnia się pojęcia **Towar** (to, co wskazujemy w zamówieniach, fakturach i dokumentach dostawy) oraz **Jednostka SKU** (to, w czym faktycznie prowadzona jest ewidencja zapasów w magazynie).

Jeżeli dla towaru ustawiona jest „Jednostka SKU”, system wykonuje automatyczne zastępowanie podczas przetwarzania dowolnych dokumentów magazynowych (przyjęcie, wydanie, przesunięcie, rozchód):
1.  **Zastąpienie towaru**: Zamiast oryginalnego towaru, w rejestrze magazynowym zapisywana jest wybrana jednostka bazowa.
2.  **Przeliczanie ilości**: Ilość z dokumentu jest mnożona przez ustawiony współczynnik.

W rezultacie salda w raportach i miejscach składowania są zawsze wyświetlane w podziale na bazowe jednostki SKU, co pozwala zobaczyć rzeczywistą ilość zapasów produktu niezależnie od formy jego przyjęcia.

## Konfiguracja

Wszystkie ustawienia konfiguruje się w karcie towaru na zakładce **Magazynowanie**.

*   **Jednostka SKU**: Towar, który będzie pełnił rolę „twarzy” dla ewidencji zapasów. Jeśli to pole pozostanie puste, towar będzie ewidencjonowany jako samodzielna jednostka (sam przez siebie).
*   **Współczynnik**: Mnożnik numeryczny do przeliczania na jednostki bazowe. 
    *   Jeśli towar jest ewidencjonowany 1 do 1, wpisz **1**.
    *   Jeśli towar jest opakowaniem zawierającym 10 sztuk towaru bazowego, wpisz **10**.
    *   Domyślnie (jeśli nie wypełniono) współczynnik przyjmuje wartość **1**.

## Przykłady scenariuszy

### 1. Opakowania zbiorcze (ewidencja w sztukach)
Masz towary „Butelka wody 0.5l” i „Zgrzewka wody 0.5l (12 szt.)”. Aby uniknąć oddzielnej ewidencji butelek i zgrzewek:
*   Dla towaru „Zgrzewka” ustaw jednostkę SKU „Butelka wody 0.5l” i współczynnik **12**.
*   Przy zakupie 10 zgrzewek do magazynu trafi **120 butelek**.
*   Przy sprzedaży 1 butelki z magazynu zostanie zdjęta **1 butelka**.
*   W raporcie zapasów zawsze będziesz widzieć całkowitą ilość w butelkach.

### 2. Różne konfekcje jednego produktu
Towar „Cukier” jest dostarczany w workach 50 kg i paczkach 1 kg.
*   Dla „Worka 50 kg” ustaw jednostkę SKU „Cukier (kg)” i współczynnik **50**.
*   Pozwala to widzieć całkowity zapas cukru w kilogramach, niezależnie od opakowania, w jakim dotarł.

### 3. Łączenie odpowiedników
Jeśli tymczasowo założyłeś nową kartę dla towaru od innego dostawcy, ale chcesz, aby był ewidencjonowany razem ze starym:
*   Powiąż nową kartę ze starą jako jednostką SKU ze współczynnikiem **1**.

## Wpływ na raportowanie i operacje magazynowe

*   **Raporty zapasów**: W raportach (np. „Aktualne stany magazynowe”) zobaczysz tylko bazowe jednostki SKU. Towary, które się do nich odwołują, nie będą miały stanów na liście (ich saldo zawsze będzie wynosić zero, ponieważ wszystkie ruchy „idą” na bazę).
*   **Historia ruchów**: Przy przeglądaniu historii ruchów dla bazowej jednostki SKU system pokaże wszystkie operacje, w tym te, które pierwotnie zostały zarejestrowane dla powiązanych towarów-opakowań.
*   **Inwentaryzacja**: Podczas liczenia towaru, który posiada jednostkę SKU, wynik zostanie zarejestrowany dla jednostki bazowej z uwzględnieniem współczynnika.
*   **Koszt**: Obliczanie kosztu jest również prowadzone w podziale na jednostki bazowe, co pozwala na uśrednianie kosztu produktu otrzymanego w różnych opakowaniach.

## Cechy szczególne

*   **Kopiowanie**: Podczas korzystania z funkcji „Kopiuj” w karcie towaru, ustawienia jednostki SKU i współczynnika są automatycznie przenoszone do nowej karty.
*   **Jednostki miary**: Zaleca się dobór bazowej jednostki SKU tak, aby jej jednostka miary (np. „kg”, „szt”) była wygodna dla ewidencji zbiorczej.
*   **Weryfikacja**: Przed rozpoczęciem pracy z nowym powiązaniem upewnij się, że współczynnik jest podany poprawnie. Błąd we współczynniku doprowadzi do błędnego odzwierciedlenia stanów przy pierwszej operacji.

## Alternatywa: Ewidencja w opakowaniach (pakietach) w dokumentach

Jeśli potrzebujesz po prostu uprościć wprowadzanie danych w dokumentach (na przykład podawać ilość w skrzynkach lub paletach), bez łączenia stanów różnych towarów, możesz skorzystać z mechanizmu ewidencji opakowań.

W przeciwieństwie do „Jednostek SKU”, mechanizm ten działa w ramach jednej karty towaru i wpływa tylko na wygodę wypełniania dokumentów.

### Włączanie mechanizmu
Funkcjonalność włącza się dla każdego typu dokumentu oddzielnie (na przykład dla konkretnego typu zamówienia lub przyjęcia). W ustawieniach typu dokumentu należy zaznaczyć opcję **Pokaż pakiety**.

### Konfiguracja towaru

Aby korzystać z tego mechanizmu, należy wykonać dwa kroki w karcie towaru:

1.  **Ustawienie współczynników (zakładka Jednostki miary)**:
    Na tej zakładce znajduje się lista wszystkich możliwych opakowań towaru (np. skrzynka, paleta, worek). Dla każdego opakowania w kolumnie **Współczynnik** określa się, ile bazowych jednostek towaru się w nim znajduje. 
    *Przykład: dla towaru „Woda” z jednostką bazową „litr”, dla opakowania „skrzynka” można podać współczynnik 12.*

2.  **Wybór domyślnego opakowania (zakładki Zakup i Sprzedaż)**:
    W tych sekcjach można wybrać **Jednostkę miary do zakupu** i **Jednostkę miary do sprzedaży**. 
    Wybrana jednostka będzie automatycznie sugerowana jako „Typ opakowania” przy dodawaniu towaru do odpowiedniego dokumentu (zamówienie zakupu, przyjęcie itp.). W razie potrzeby można ją zmienić bezpośrednio w wierszu dokumentu.

### Praca w dokumentach
Gdy mechanizm jest włączony, w wierszach dokumentów (zamówienia, przyjęcia, wydania) pojawiają się dodatkowe pola:
- **Typ opakowania**: Wybór jednostki miary (np. skrzynka, worek).
- **Liczba pakietów**: Ilość wybranych opakowań.
- **Ilość w pakiecie**: Współczynnik przeliczeniowy dla wybranego opakowania (wypełniany automatycznie).

Gdy zmienia się liczba pakietów, system automatycznie przelicza główną ilość towaru. I odwrotnie — gdy zmienia się główna ilość, przeliczana jest liczba pakietów.

## Porównanie mechanizmów

| Cecha | Jednostki SKU (Zastępowanie) | Ewidencja opakowań (w dokumentach) |
| :--- | :--- | :--- |
| **Liczba kart** | Kilka (opakowanie = własna karta) | Jedna (opakowanie = jednostka miary) |
| **Ewidencja zapasów** | Zbiorczo według karty bazowej | W jednostkach bazowych jednej karty |
| **Gdzie następuje przeliczenie** | Podczas zapisu w rejestrze magazynowym | W wierszu dokumentu podczas wprowadzania |
| **Prezentacja w raportach** | Tylko jednostka bazowa | Jednostka bazowa towaru |
| **Główny cel** | Łączenie zapasów różnych towarów | Wygoda wprowadzania danych w dokumentach |
