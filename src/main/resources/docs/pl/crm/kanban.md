---
title: Tablica leadów (kanban)
---

## Gdzie to znaleźć

Otwórz sekcję **„Leady”** (grupa **„Operacje”**), następnie przejdź na zakładkę **„Kanban”**.

## Do czego służy tablica

Tablica leadów pomaga wizualnie zarządzać lejkiem:

- każda kolumna odpowiada jednemu statusowi;
- leady są pokazane jako karty;
- możesz przeciągnąć lead do innego statusu jedną akcją.

To jest wygodne w codziennej pracy: szybko zobaczyć wąskie gardła, rozdzielić pracę i nie przegapić leadów bez ruchu.

## Które statusy są pokazywane

Tablica pokazuje:

- statusy, które **nie** są oznaczone jako **„Zamknięta”**;
- statusy dozwolone dla wybranego typu leadu (jeśli przefiltrowałeś listę po typie).

Kolejność kolumn jest określona przez pole **„Kolejność sortowania”** w katalogu statusów.

Jeśli na tablicy brakuje kolumn lub są niepotrzebne, sprawdź ustawienia statusów i typów (zobacz [Ustawienia i dane referencyjne](settings.md)).

## Co jest pokazane na karcie leadu

Układ karty może się różnić, ale zwykle zawiera:

- **Status leadu**, **Nazwa**, **Typ leadu**;
- **[Partner](../masterdata/partners.md)**;
- prognoza: **Spodziewany przychód**, **Spodziewane zamknięcie**;
- **Priorytet leadu** (w tym kolor);
- **Tagi leadu** (w tym kolor);
- **Sprzedawca**;
- **Opis**.

Karta może też mieć szybkie akcje:

- otwarcie leadu do edycji;
- usunięcie leadu (jeśli dozwolone uprawnieniami).

## Przeciąganie i kolejność kart

### Zmiana statusu

Aby zmienić status, przeciągnij kartę leadu do docelowej kolumny.

Jeśli leadu nie da się przenieść do wybranego statusu:

- sprawdź **typ leadu** (typ może ograniczać dozwolone statusy);
- sprawdź macierz konfiguracji „typ ↔ statusy”.

### Kolejność w obrębie kolumny

W obrębie jednego statusu możesz ustawić kolejność kart w sposób dla Ciebie wygodny. Kolejność jest zapisywana per użytkownik, więc przy następnym otwarciu tablicy leady będą ułożone tak, jak oczekujesz.

## Typowe sytuacje

- **Brak kolumn (albo jest ich mało)** — statusy są oznaczone jako „Zamknięta” lub nie są dozwolone dla wybranego typu.
- **Karta nie chce się przesunąć** — status nie jest dozwolony dla typu leadu albo nie masz uprawnień do zmiany.
- **Za dużo kart** — włącz filtrowanie po sprzedawcy albo po typie.

## Codzienna praca na tablicy

Przykład prostej rutyny (10–15 minut rano):

1. Otwórz „Kanban”.
2. Sprawdź pierwszą kolumnę (zwykle „Nowy”):
   - przypisz sprzedawcę;
   - uzupełnij telefon i email;
   - zapisz następny krok w opisie.
3. Sprawdź środkowe kolumny (np. „Kwalifikacja”, „Propozycja”):
   - ustaw datę dla leadów bez spodziewanego zamknięcia;
   - dla leadów bez ruchu doprecyzuj z klientem i zaktualizuj status.
4. Jeśli zapadła decyzja:
   - przenieś do statusu zamykającego;
   - albo zamknij przez „Porażka” z powodem.

## Jak unikać „utkniętych” leadów

- Zawsze uzupełniaj „Spodziewane zamknięcie”.
- Używaj tagów do priorytetyzacji (np. „pilne”), a priorytetu do wizualnego wyróżnienia.
- Utrzymuj kolejność kolumn przez „Kolejność sortowania” w katalogu statusów.