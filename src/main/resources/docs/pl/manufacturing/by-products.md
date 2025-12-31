---
title: Produkty uboczne
---

W module **„Produkcja”** produkty uboczne są realizowane poprzez **produkty uboczne w [Zestawieniu materiałów](bom.md)**.

Z perspektywy użytkownika oznacza to:

- w [Zestawieniu materiałów](bom.md) możesz wskazać nie tylko komponenty (to, co jest zużywane), ale też **produkty uboczne** (to, co dodatkowo powstaje);
- gdy generowane są linie [zamówienia produkcji](orders.md), produkty uboczne pojawiają się automatycznie w liniach wyjścia (a dla [demontażu](unbuild.md) — w liniach materiałów).

## Gdzie definiuje się produkty uboczne

Produkty uboczne definiuje się w **[Zestawieniu materiałów](bom.md)** na zakładce **„Produkty uboczne”**.

Każda linia zawiera:

- **Towar** (co jest wytwarzane jako produkt uboczny);
- **Jednostkę miary**;
- **Ilość** — normę dla ilości Zestawienia materiałów.

Przykład: jeśli Zestawienie materiałów jest zdefiniowane dla 1 jednostki towaru, to ilość produktu ubocznego jest normą „na 1 jednostkę”.

## Jak produkty uboczne są przenoszone do zamówienia produkcji

W karcie [zamówienia produkcji](orders.md), gdy uruchomisz akcję generowania linii (np. „Utwórz linie”), system:

1. Pobiera planowaną ilość (ile ma zostać wyprodukowane).
2. Wylicza linie komponentów.
3. Tworzy linie wyjścia:
   - towar główny;
   - **produkty uboczne** z [Zestawienia materiałów](bom.md).

Ilość produktu ubocznego jest liczona proporcjonalnie:

`norma produktu ubocznego × ilość zamówienia / ilość Zestawienia materiałów`

Na przykład, jeśli Zestawienie jest zdefiniowane dla 10 jednostek, a zamówienie jest na 20, normy produktów ubocznych są podwajane.

## Produkty uboczne w [demontażu](unbuild.md)

Dla demontażu logika jest odwrócona:

- komponenty Zestawienia materiałów stają się „wyjściem” (to, co jest przyjmowane);
- towar źródłowy staje się „materiałem” (to, co jest zużywane);
- **produkty uboczne ze Zestawienia są dodawane do materiałów**, tzn. są również zużywane.

Znaczenie praktyczne: produkty uboczne w demontażu są traktowane jako dodatkowe straty/zużycie, które powinny być rozchodowane razem z demontażem.

## Jak produkty uboczne wpływają na koszt

Koszt jest liczony na podstawie faktycznego zużycia materiałów, a następnie rozdzielany na wyjście.

Ważne:

- linie produktów ubocznych utworzone ze Zestawienia materiałów **nie mają automatycznie wypełnionego współczynnika alokacji kosztów**;
- jeśli współczynniki dystrybucji nie są wypełnione, całkowity koszt zwykle jest przypisywany do towaru głównego, a produkty uboczne mają udział zerowy.

Jeśli chcesz, aby część kosztu była przypisana do produktów ubocznych:

1. Wypełnij współczynniki alokacji kosztów w liniach wyjścia w [zamówieniu produkcji](orders.md).
2. Przelicz/zweryfikuj dystrybucję.

Szczegóły dystrybucji: [Koszt wytworzenia: jak jest liczony](costing.md).

## Rekomendacje dla ewidencji produktów ubocznych

1. Oddziel „produkty uboczne” od **[odpadu](scrap.md)**:
   - produkty uboczne są oczekiwanym wynikiem procesu (np. ścinki, materiał do recyklingu), który może zostać przyjęty na stan;
   - odpad jest nieplanowaną stratą, zwykle rejestrowaną osobnym dokumentem **[Odpad](scrap.md)**.
2. Konfiguruj produkty uboczne jako osobne towary, aby można je było składować, rozchodować i analizować.
3. Jeśli produkty uboczne mają nie wpływać na koszt towaru głównego — utrzymaj domyślną dystrybucję.
   Jeśli koszt ma zostać podzielony pomiędzy wyrób główny i produkty uboczne — użyj współczynników dystrybucji.

## Typowe błędy

- **Produkty uboczne nie pojawiają się w zamówieniu** — produkty uboczne nie są wypełnione w Zestawieniu materiałów lub nie uruchomiono generowania linii.
- **Produkty uboczne są, ale ilość jest błędna** — sprawdź ilość bazową Zestawienia materiałów i planowaną ilość zamówienia.
- **Produkty uboczne nie wpływają na koszt** — to oczekiwane przy dystrybucji domyślnej; wypełnij współczynniki alokacji kosztów w liniach wyjścia.