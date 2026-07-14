---
title: Demontaż
---

Ta sekcja opisuje logikę demontażu zaimplementowaną poprzez specjalny typ **[zamówienia produkcji](orders.md)**.

## Ogólna idea

Demontaż to „odwrócona produkcja”:

- **towar źródłowy** jest zużywany z magazynu (jako materiał);
- **komponenty** z [zestawienia materiałowego](bom.md) są przyjmowane do lokalizacji wyrobów gotowych (jako produkty).

W praktyce system rejestruje operację jako:

1) zużycie towaru źródłowego;
2) przyjęcie zestawu komponentów wyliczonych z [zestawienia materiałowego](bom.md).

## Co jest wymagane do użycia demontażu

1. Musi istnieć typ zamówienia produkcji z flagą **„Demontaż”**.
2. Dla towaru do demontażu musi być wskazane [zestawienie materiałowe](bom.md) — definiuje ono, na co towar jest rozkładany.

Uwaga: w danych startowych zwykle istnieje już typ „Demontaż”, skonfigurowany jako demontaż.

## Czym demontaż różni się od zwykłej produkcji

### Które linie są „materiałami”, a które „produktami”

Dla zwykłej produkcji:

- **materiały** = komponenty [zestawienia materiałowego](bom.md);
- **produkty** = wyrób gotowy (oraz ewentualne [produkty uboczne](by-products.md)).

Dla demontażu:

- **materiały** = sam towar źródłowy (oraz dodatkowe towary, jeśli są określone jako produkty uboczne w [zestawieniu materiałowym](bom.md));
- **produkty** = komponenty [zestawienia materiałowego](bom.md).

### Ilość planowana

Pole **„Produkcja”** jest używane także dla demontażu, ale zmienia się jego znaczenie:

- w demontażu jest to ilość towaru źródłowego, która będzie demontowana (technicznie: planowane zużycie towaru źródłowego).

## Automatyczne generowanie linii z zestawienia materiałowego

Zamówienie ma akcję generowania linii (zwykle **„Utwórz linie”**, dostępną w statusie „Projekt”).

Dla demontażu system wykonuje:

1. Czyści istniejące linie materiałów i produktów.
2. Tworzy linie **produktów** z komponentów [zestawienia materiałowego](bom.md):
   - towar = komponent;
   - planowana ilość **„Produkcja”** jest liczona proporcjonalnie:
     - ilość komponentu w zestawieniu × ilość demontażu / ilość w zestawieniu;
   - jeśli komponent ma wypełniony **„Udział kosztów”**, jest on kopiowany do linii produktu.
3. Tworzy jedną linię **materiału** dla towaru źródłowego:
   - towar = towar z zamówienia;
   - ilość **„Do zużycia”** = ilość demontażu.
4. Jeśli [zestawienie materiałowe](bom.md) zawiera [produkty uboczne](by-products.md), są one dodawane jako dodatkowe linie **materiałów** (również do zużycia).

## Rezerwacja i uruchomienie demontażu

Demontaż przechodzi przez te same statusy co zwykła produkcja:

1. Przygotuj zamówienie: typ „Demontaż”, towar, [zestawienie materiałowe](bom.md), ilość.
2. Sprawdź dostępność i zarezerwuj materiały.
   - dla demontażu materiałem jest towar źródłowy;
   - jeśli towar źródłowy nie jest dostępny w lokalizacji materiałów, zamówienie nie przejdzie do statusu gotowości.
3. Przenieś zamówienie do statusu „W trakcie”.
   - uruchom **„Produkcja”**.
4. Zarejestruj wykonanie faktyczne:
   - dla demontażu faktyczna ilość **„Wyprodukowano”** pokazywana w nagłówku to faktycznie zużyta ilość towaru źródłowego;
   - jej wprowadzenie rozdziela faktyczne komponenty produktów i zużycie proporcjonalnie do planu.
5. Uruchom **„Zatwierdź”** i wskaż pole **„Lokalizacja produktów”** (lokalizację, do której mają zostać przyjęte komponenty).

## Kosztowanie demontażu

Wycena działa zgodnie z tą samą logiką co dla produkcji:

- podstawą kosztu jest faktyczne zużycie (dla demontażu jest to zużycie towaru źródłowego i ewentualnych dodatkowych linii materiałów);
- całkowita kwota jest rozdzielana na linie produktów (komponenty) wg wartości **„Udział kosztów”**.

Jeśli udziały kosztów nie są wypełnione, koszt demontażu w ogóle nie jest rozdzielany na komponenty — wypełnij **„Udział kosztów”** w komponentach zestawienia materiałowego (skąd jest kopiowany do linii produktów) albo bezpośrednio w liniach produktów.

Szczegóły: [Koszt wytworzenia: jak jest liczony](costing.md).

## Typowe błędy

- **Linie demontażu nie są generowane** — nie wybrano zestawienia materiałowego.
- **Rezerwacja nie przechodzi** — towar źródłowy nie jest dostępny w lokalizacji materiałów w wymaganej ilości.
- **Komponenty trafiają do złej lokalizacji** — upewnij się, że przy zakończeniu wypełniono pole **„Lokalizacja produktów”**.
