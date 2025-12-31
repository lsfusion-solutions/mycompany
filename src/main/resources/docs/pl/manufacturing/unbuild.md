---
title: Demontaż
---

Ta sekcja opisuje logikę demontażu zaimplementowaną poprzez specjalny typ **[zamówienia produkcji](orders.md)**.

## Ogólna idea

Demontaż to „odwrócona produkcja”:

- **towar źródłowy** jest zużywany z magazynu (jako materiał);
- **komponenty** ze [Zestawienia materiałów](bom.md) są przyjmowane do lokalizacji wyrobów gotowych (jako wyjście).

W praktyce system rejestruje operację jako:

1) zużycie towaru źródłowego;
2) przyjęcie zestawu komponentów wyliczonych ze [Zestawienia materiałów](bom.md).

## Co jest wymagane do użycia demontażu

1. Musi istnieć typ zamówienia produkcji z flagą **„Demontaż”**.
2. Dla towaru do demontażu musi być wskazane [Zestawienie materiałów](bom.md) — definiuje ono, na co towar jest rozkładany.

Uwaga: w danych startowych zwykle istnieje już typ „Demontaż”, skonfigurowany jako demontaż.

## Czym demontaż różni się od zwykłej produkcji

### Które linie są „materiałami”, a które „wyjściem”

Dla zwykłej produkcji:

- **materiały** = komponenty [Zestawienia materiałów](bom.md);
- **wyjście** = wyrób gotowy (oraz ewentualne [produkty uboczne](by-products.md)).

Dla demontażu:

- **materiały** = sam towar źródłowy (oraz dodatkowe towary, jeśli są określone jako produkty uboczne w [Zestawieniu materiałów](bom.md));
- **wyjście** = komponenty [Zestawienia materiałów](bom.md).

### Ilość planowana

Pole **„Do produkowania”** jest używane także dla demontażu, ale zmienia się jego znaczenie:

- w demontażu jest to ilość towaru źródłowego, która będzie demontowana.

## Automatyczne generowanie linii z Zestawienia materiałów

Zamówienie ma akcję generowania linii (zwykle **„Utwórz linie”**, dostępną w statusie „Projekt”).

Dla demontażu system wykonuje:

1. Czyści istniejące linie materiałów i wyjścia.
2. Tworzy linie **wyjścia** z komponentów [Zestawienia materiałów](bom.md):
   - towar = komponent;
   - ilość „do produkowania” jest liczona proporcjonalnie:
     - ilość komponentu w Zestawieniu × ilość demontażu / ilość w Zestawieniu;
   - jeśli komponent ma współczynnik alokacji kosztów, jest on kopiowany do linii wyjścia.
3. Tworzy jedną linię **materiału** dla towaru źródłowego:
   - towar = towar z zamówienia;
   - ilość „do zużycia” = ilość demontażu.
4. Jeśli [Zestawienie materiałów](bom.md) zawiera [produkty uboczne](by-products.md), są one dodawane jako dodatkowe linie **materiałów** (również do zużycia).

## Rezerwacja i uruchomienie demontażu

Demontaż przechodzi przez te same statusy co zwykła produkcja:

1. Przygotuj zamówienie: typ „Demontaż”, towar, [Zestawienie materiałów](bom.md), ilość.
2. Sprawdź dostępność i zarezerwuj materiały.
   - dla demontażu materiałem jest towar źródłowy;
   - jeśli towar źródłowy nie jest dostępny w lokalizacji materiałów, zamówienie nie przejdzie do statusu gotowości.
3. Przenieś zamówienie do statusu „W trakcie”.
   - uruchom **„Produkcja”**.
4. Zarejestruj wykonanie faktyczne:
   - w demontażu „wyprodukowane” jest zwykle pochodną zużycia towaru źródłowego;
   - system może automatycznie wypełnić komponenty wyjścia i zużycie proporcjonalnie.
5. Uruchom **„Zatwierdż”** i wskaż lokalizację wyrobów gotowych, do której mają zostać przyjęte komponenty.

## Kosztowanie demontażu

Wycena działa zgodnie z tą samą logiką co dla produkcji:

- podstawą kosztu jest faktyczne zużycie (dla demontażu jest to zużycie towaru źródłowego i ewentualnych dodatkowych linii materiałów);
- całkowita kwota jest rozdzielana na linie wyjścia (komponenty) wg współczynników alokacji kosztów.

Jeśli współczynniki dystrybucji nie są wypełnione, cały koszt może zostać przypisany do jednej linii wyjścia.

Szczegóły: [Koszt wytworzenia: jak jest liczony](costing.md).

## Typowe błędy

- **Linie demontażu nie są generowane** — nie wybrano Zestawienia materiałów.
- **Rezerwacja nie przechodzi** — towar źródłowy nie jest dostępny w lokalizacji materiałów w wymaganej ilości.
- **Komponenty trafiają do złej lokalizacji** — upewnij się, że przy zakończeniu wskazano lokalizację wyrobów gotowych.