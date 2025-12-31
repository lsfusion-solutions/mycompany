---
title: "Zamówienia produkcji: lista i karta"
---

## Lokalizacja

Otwórz **„Produkcja”** → **„Operacje”** → **„Zamówienia produkcji”**.

## Do czego służy zamówienie produkcji

Zamówienie produkcji jest głównym dokumentem produkcyjnym. Służy do:

- rejestracji **co** ma zostać wytworzone (lub **[zdemontowane](unbuild.md)**);
- ustawienia **planowanej ilości**;
- wskazania **[Zestawienia materiałów](bom.md)** (struktury towaru) używanego do wyliczania materiałów;
- wykonania **kontroli dostępności** i rezerwacji materiałów;
- rejestracji **faktycznej produkcji** i **faktycznego zużycia**;
- wskazania **„Lokalizacji produktów”** po zakończeniu zamówienia w statusie **„Wykonano”**.

## Lista zamówień produkcji

Lista służy do kontroli bieżących zamówień i szybkiego otwierania karty zamówienia.

Zwykle lista zawiera kolumny takie jak:

- **Numer**
- **Data rozpoczęcia**
- **Towar** (co jest produkowane)
- **Typ**
- **Firma** (jeśli używane)
- plan: **Do produkowania** i **Jednostka miary**
- **Zestawienie materiałów**
- liczniki linii: liczba linii materiałów i liczba linii wyjścia

Lista zwykle pozwala również:

- utworzyć nowe zamówienie;
- edytować;
- usuwać (jeśli nie jest to ograniczone statusem i uprawnieniami).

## Karta zamówienia produkcji

Karta zamówienia produkcji służy do przeprowadzenia procesu krok po kroku.

### Pola główne

W górnej części karty zwykle ustawiasz:

- **Typ** — wpływa na zachowanie (np. demontaż i powiązane ustawienia);
- **Data rozpoczęcia** — planowana data i czas rozpoczęcia;
- **Towar** — towar wytwarzany;
- **Odpowiedzialny** — może być podstawiany domyślnie jako aktualny użytkownik;
- **[Zestawienie materiałów](bom.md)** — struktura towaru;
- **Lokalizacja materiałów** — skąd materiały będą zużywane.

### Kontrola zgodności towaru z Zestawieniem materiałów

Jeśli wybrano [Zestawienie materiałów](bom.md), system sprawdza, czy towar w Zestawieniu jest zgodny z towarem w zamówieniu.

Jeśli towary nie są zgodne, zamówienie nie może zostać zapisane.

### Ilość do produkowania

Zamówienie ma planowaną ilość **Do produkowania**. Na jej podstawie system może:

- obliczać planowane ilości materiałów;
- obliczać planowane ilości wyjścia;
- przeliczać wartości faktyczne proporcjonalnie, jeśli produkcję wprowadzisz jako jedną liczbę.

## Typowe scenariusze

### Utworzyć zamówienie i przygotować je do startu

1. Utwórz nowe zamówienie produkcji.
2. Wypełnij typ, towar i datę rozpoczęcia.
3. Wybierz [Zestawienie materiałów](bom.md).
4. Upewnij się, że linie materiałów i wyjścia są wyliczone.
5. Uruchom kontrolę dostępności i zarezerwuj materiały.

### Uruchomić produkcję i zakończyć zamówienie

1. Przenieś zamówienie do statusu **„W trakcie”**.
2. Wprowadź faktyczną produkcję (w razie potrzeby skoryguj faktyczne zużycie).
3. Uruchom **„Zatwierdż”** i wskaż **„Lokalizacja produktów”**.