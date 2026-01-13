# Alokacja kosztów

Alokacja kosztów pozwala na włączenie kosztów usług (np. fracht, cło, ubezpieczenie) do kosztów produktów lub zleceń produkcyjnych.

## Konfiguracja

### Baza alokacji dla usług
Dla każdej usługi, która musi być alokowana, można określić domyślną **Bazę alokacji**. Określa ona, w jaki sposób koszt usługi zostanie proporcjonalnie podzielony pomiędzy cele.

1. Przejdź do karty **Towaru** (dla usługi).
2. W polu **Baza alokacji** wybierz jedną z następujących opcji:
    - **Kwota** — alokacja proporcjonalna do kwoty netto linii docelowych.
    - **Koszt** — alokacja proporcjonalna do kosztu produktów.
    - **Cena sprzedaży** — alokacja proporcjonalna do ceny sprzedaży produktów.
    - **Waga** — alokacja proporcjonalna do wagi produktów.
    - **Objętość** — alokacja proporcjonalna do objętości produktów.
    - **Ilość** — alokacja proporcjonalna do ilości produktów lub wytworzonych przedmiotów.

## Alokacja kosztów w Fakturze zakupu

Po dodaniu linii usługi do **[Faktury zakupu](bills.md)**, możesz alokować jej koszt do innych dokumentów.

1. Otwórz **Fakturę zakupu** i wybierz linię usługi na liście produktów.
2. Na karcie **Alokacja kosztów** (na dole formularza) zobaczysz ustawienia alokacji dla tej linii.
3. **Baza alokacji** jest automatycznie wypełniana z karty usługi, ale możesz ją zmienić dla tej konkretnej linii faktury.
4. Użyj podzakładek, aby wybrać cele alokacji:

### Alokacja do innych Faktur zakupu
Na zakładce **Faktury zakupu**:
- Zobaczysz listę faktur zakupu.
- Zaznacz pole wyboru **Alokuj** dla faktur, które chcesz uwzględnić w alokacji.
- Na liście **Linie faktury** poniżej możesz doprecyzować, które konkretne linie produktów powinny otrzymać koszt.
- Kolumna **Alokowano** pokazuje kwotę przypisaną do każdej linii na podstawie wybranej **Bazy alokacji**.

### Alokacja do Zleceń produkcyjnych
Na zakładce **Zlecenia produkcyjne**:
- Zobaczysz listę otwartych zleceń produkcyjnych.
- Zaznacz pole wyboru **Alokuj** dla zleceń, które chcesz uwzględnić.
- Koszt zostanie podzielony pomiędzy wybrane zlecenia.

### Wykonanie alokacji
- Kliknij przycisk **Alokuj** na pasku narzędzi linii usług, aby automatycznie obliczyć i wypełnić kwoty **Alokowano** dla wszystkich wybranych celów.
- System upewnia się, że łączna kwota alokowana nie przekracza kwoty netto linii usługi.

## Wpływ na kalkulację kosztów
Alokowane koszty są wliczane do całkowitego kosztu produktów docelowych lub zleceń produkcyjnych, wpływając na ostateczną wycenę zapasów lub koszt produkcji.
