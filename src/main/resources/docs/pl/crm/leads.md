---
title: Leady
---

## Gdzie to znaleźć

Otwórz sekcję **„Leady”** (w drzewie nawigacji znajduje się w grupie **„Operacje”**).

W tej sekcji zwykle masz dostęp do:

- listy leadów;
- karty leadu;
- filtrów stanu (**„Otwarta”** i **„Zamknięta”**) oraz **„Moje leady”**;
- dodatkowych zakładek z komunikacją (połączenia, e‑maile) — jeśli włączone;
- bloku dokumentów powiązanych ([zamówienia sprzedaży](../sales/orders.md), [faktury](../sales/invoices.md)) — jeśli odpowiednie moduły są włączone.

## Lista leadów

Lista jest przeznaczona do codziennej pracy: szybko zobaczyć, co jest w toku, kto odpowiada, co trzeba zamknąć i gdzie sprawy są „utknięte”.

### Jakie dane są pokazane na liście

Zestaw kolumn zależy od konfiguracji, ale zwykle zawiera:

- **ID**, **Nazwa**;
- **Status leadu** (oraz stan „otwarta/zamknięta”);
- **Typ leadu**;
- **[Partner](../masterdata/partners.md)**;
- **Sprzedawca**;
- **Priorytet leadu** i **Tagi leadu**;
- prognoza: **Spodziewany przychód**, **Prawdopodobieństwo**, **Spodziewane zamknięcie**;
- kontakty: **Telefon**, **Email**;
- w razie potrzeby — pola adresu i kontaktu.

Wskazówka: lista może używać oznaczenia kolorem priorytetu, aby „pilne” leady wyróżniały się.

### Filtry

Po prawej, w panelu **„Filtry”**, zwykle są dostępne szybkie przełączniki:

- **„Otwarta”** — pokazuje otwarte leady;
- **„Zamknięta”** — pokazuje zamknięte leady;
- **„Moje leady”** — pokazuje leady, gdzie **Sprzedawca** jest równy bieżącemu użytkownikowi.

Dodatkowe filtry również mogą być dostępne (w zależności od konfiguracji):

- wg typu leadu;
- wg sprzedawcy;
- wg priorytetu;
- wg [partnera](../masterdata/partners.md).

Rekomendacja: do codziennej pracy zwykle wygodnie jest mieć włączone **„Otwarta”**, a następnie zawęzić do **„Moje leady”**.

### Otwieranie karty leadu

Aby otworzyć kartę leadu:

1. Znajdź wymagany wiersz na liście.
2. Otwórz lead do edycji (zwykle przez podwójne kliknięcie wiersza lub przycisk edycji).

## Karta leadu

Karta leadu służy do prowadzenia pełnej informacji o leadzie i wykonywania akcji: zmiana statusu, oznaczenie jako porażka oraz praca z powiązaną komunikacją i dokumentami.

### Struktura karty

Zwykle u góry karty są widoczne:

- **ID** i **Nazwa**;
- blok prognozy: **Data i czas**, **Spodziewany przychód**, **Prawdopodobieństwo**, **Spodziewane zamknięcie**;
- główne atrybuty: **Typ leadu**, **[Partner](../masterdata/partners.md)**, **Email**, **Telefon**, **Sprzedawca**, **Priorytet leadu**, **Tagi leadu**.

Niżej znajdują się zakładki, takie jak:

- **„Opis”** — opis zapytania, ustalenia, następny krok;
- **„Inne informacje”** — szczegóły, strona internetowa, pola adresu, osoba kontaktowa (jeśli używana).

### Rekomendowana kolejność uzupełniania

1. Ustaw **Nazwa** — krótko i jasno (o co chodzi i od kogo).
2. Ustaw **[Partner](../masterdata/partners.md)**, jeśli znany.
3. Przypisz **Sprzedawca**.
4. Wybierz **Typ leadu**.
5. Wybierz **Status leadu**.
6. Dodaj kontakty i opis.

### Typ leadu i dozwolone statusy

Lista dostępnych statusów zależy od wybranego typu leadu:

- dla każdego typu możesz skonfigurować, które statusy są dozwolone;
- jeśli dla typu nie skonfigurowano listy statusów, to (w zależności od ustawień) wszystkie statusy mogą być dozwolone.

Jeśli wybrany status nie jest dozwolony dla typu, system nie pozwoli zapisać leadu.

### Kontakty i walidacja

- Pole **„Email”** jest walidowane formatem. Jeśli adres jest wpisany niepoprawnie, system pokaże błąd.
- Pole **„Telefon”** jest używane m.in. do automatycznego wyszukiwania leadu podczas przetwarzania połączeń.

### Zamknięcie leadu przez „Porażka”

Jeśli lead nie jest jeszcze zamknięty, w karcie leadu jest dostępna akcja **„Porażka”**.

Jak to działa:

1. Kliknij **„Porażka”**.
2. Wybierz **Powód porażki**.
3. System zapisuje powód i ustawia status leadu, który jest skonfigurowany w ustawieniach jako „Porażka”.

Po tym w karcie jest widoczne pole **„Powód porażki”**.

### Historia

Karta leadu może zawierać zakładkę **„Historia”**:

- pokazuje, kto i kiedy zmienił lead;
- zapisuje kluczowe zdarzenia (w tym zmiany statusu).

Praktyczna wartość historii to szybkie zrozumienie, dlaczego lead jest w obecnym stanie i kiedy był ostatni kontakt.

### Powiązana komunikacja

Jeśli komunikacja jest włączona w Twojej konfiguracji, karta leadu może pokazywać:

- listę połączeń powiązanych z leadem;
- listę e‑maili powiązanych z leadem.

Zobacz szczegóły w [Komunikacja: połączenia i e‑maile](communications.md).

### Powiązane dokumenty: zamówienia i faktury

Jeśli tworzenie dokumentów z leadu jest włączone, karta może zawierać blok dokumentów powiązanych:

- **„Zamówienia”** — dokumenty utworzone z leadu;
- **„Faktury”** — dokumenty utworzone z leadu.

Zobacz szczegóły w [Zamówienia i faktury z leadu](sales-and-documents.md).

## Tworzenie i usuwanie leadu

### Tworzenie

Zwykle nowy lead tworzy się z listy leadów:

1. Otwórz sekcję „Leady”.
2. Kliknij „Nowy”.
3. Uzupełnij wymagane pola (co najmniej „Nazwa”).
4. Zapisz.

Rekomendacja: od razu przypisz „Sprzedawca” i ustaw „Spodziewane zamknięcie”, aby lead nie zginął.

### Usuwanie

Usuń lead tylko wtedy, gdy został utworzony przez pomyłkę lub jest oczywistym duplikatem.

Przed usunięciem sprawdź:

- czy nie ma powiązanych [zamówień sprzedaży](../sales/orders.md) i [faktur](../sales/invoices.md);
- czy nie ma powiązanych połączeń i e‑maili.

Jeśli są powiązania, często lepiej zamknąć lead przez status albo przez „Porażka” niż go usuwać.

## Praktyki prowadzenia leadów

#### Co wpisywać w „Opis”

Dobry format opisu:

- krótko: czego klient potrzebuje;
- co już zrobiono (połączenie, e‑mail, wysłana oferta);
- następny krok i data (np. „oddzwonić 20 grudnia”, „czekamy na odpowiedź do 25 grudnia”).

#### Jak używać tagów

Tagi są wygodne jako przekrojowe oznaczenia niezależnie od statusów, np.:

- źródło: „targi”, „strona”, „polecenie”;
- typ zapytania: „dostawa”, „dobór”, „pilne”.

Nie używaj tagów zamiast statusów: status to etap procesu, tag to dodatkowy atrybut.

## Typowe błędy

- **Nie można zapisać leadu** — wybrano status, który nie jest dozwolony dla typu leadu.
- **Nie można napisać e‑maila** — pole „Email” nie jest uzupełnione lub jest niepoprawne.
- **Leady „giną”** — nie przypisano sprzedawcy i/lub nie ustawiono spodziewanego zamknięcia.