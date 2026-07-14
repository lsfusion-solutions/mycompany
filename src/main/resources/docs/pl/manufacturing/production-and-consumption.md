---
title: Produkcja i zużycie
---

W [zamówieniu produkcji](orders.md) są dwie grupy linii:

- linie **produktów**, na zakładce **„Produkty wyprodukowane”** (co i ile jest produkowane);
- linie **materiałów**, na zakładce **„Materiały”** (co i ile jest zużywane).

## Plan i wykonanie

Zamówienie zawiera ilości planowane:

- **„Produkcja”** — łączna planowana ilość w nagłówku zamówienia;
- **„Produkcja”** w liniach produktów;
- **„Do zużycia”** w liniach materiałów.

W trakcie realizacji rejestrowane są ilości faktyczne:

- **„Wyprodukowano”** w liniach produktów;
- **„Zużyte”** w liniach materiałów.

Kolumny faktyczne pojawiają się, gdy zamówienie jest w statusie **„W trakcie”**.

## Wprowadzanie faktycznej produkcji

Akcja **„Produkcja”** (oraz pole **„Wyprodukowano”** w nagłówku lub na liście) pyta o jedną łączną wyprodukowaną ilość. System rozdziela ją na linie **proporcjonalnie do planu**:

- Wyprodukowano w każdej linii produktów = planowana ilość linii × wprowadzona ilość / planowana ilość zamówienia;
- Zużyte w każdej linii materiałów = planowana ilość linii × wprowadzona ilość / planowana ilość zamówienia.

Następnie można skorygować ilości faktyczne linia po linii.

Dla zamówień [demontażu](unbuild.md) ilość **„Wyprodukowano”** w nagłówku oznacza faktycznie zużytą ilość towaru źródłowego.

## Kontrola dostępności i rezerwacja

Przed rozpoczęciem produkcji uruchom **„Sprawdź dostępność”** dla materiałów.

Linie materiałów pokazują wyliczane kolumny stanów dla lokalizacji z pola **„Lokalizacja materiałów”**:

- **„Na stanie”** — bieżący stan;
- **„Oczekiwane”** — spodziewane przyjęcia;
- **„Dostępne”** — stan dostępny do rezerwacji (łącznie z tym, co już zarezerwowano dla tej linii);
- **„Zarezerwowane”** — ilość zarezerwowana dla tej linii.

**„Sprawdź dostępność”** rezerwuje dla każdej linii dostępną ilość do wysokości planu. Jeśli wszystkie linie są w pełni zarezerwowane, zamówienie przechodzi do statusu **„Gotowy”**; w przeciwnym razie częściowe rezerwacje są zachowywane, a zamówienie pozostaje w statusie **„Oczekiwanie”**.

Zarezerwowane materiały są wyłączane z dostępnego stanu lokalizacji dla innych dokumentów. Planowana produkcja jest rejestrowana jako oczekiwane przyjęcie w lokalizacji z pola **„Lokalizacja produktów”**.

## Wycofanie rezerwacji

Jeśli start jest przesunięty lub zamówienie ma zostać anulowane, uruchom **„Wycofaj rezerwę”** — akcja czyści rezerwacje wszystkich linii, a jeśli zamówienie było w statusie **„Gotowy”**, cofa je do statusu **„Oczekiwanie”**.

## Co dzieje się przy zakończeniu

Gdy zamówienie osiąga status **„Wykonano”** (i nie jest anulowane):

- faktyczne ilości **„Zużyte”** są zdejmowane z lokalizacji z pola **„Lokalizacja materiałów”**;
- faktyczne ilości **„Wyprodukowano”** są przyjmowane do lokalizacji z pola **„Lokalizacja produktów”**;
- tworzone są zapisy w rejestrze kosztów (zobacz: [Koszt wytworzenia](costing.md)).

## Rekomendacje

- Zawsze sprawdź, czy wypełniono pole **„Lokalizacja materiałów”**.
- Przy zakończeniu zamówienia wskaż pole **„Lokalizacja produktów”**.
- Jeśli faktyczne zużycie różni się od planu, skoryguj linie materiałów przed zakończeniem zamówienia.
