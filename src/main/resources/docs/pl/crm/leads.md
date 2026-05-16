---
title: Leady
---

## Gdzie to znaleźć

Otwórz sekcję **„Leady”** (w drzewie nawigacji znajduje się w grupie **„Operacje”**).

W tej sekcji zwykle masz dostęp do:

- listy leadów;
- karty leadu;
- filtrów stanu (**„Otwarta”** i **„Zamknięta”**) oraz **„Moje leady”**;
- zakładki **[„Kanban”](kanban.md)** (pierwsza zakładka, otwiera się domyślnie);
- zakładek z komunikacją (**„Połączenia”** i **„Email”**);
- bloku dokumentów powiązanych ([zamówienia sprzedaży](../sales/orders.md), [faktury](../sales/invoices.md)) w karcie leadu.

## Lista leadów

Lista jest przeznaczona do codziennej pracy: szybko zobaczyć, co jest w toku, kto odpowiada, co trzeba zamknąć i gdzie sprawy są „utknięte”.

### Jakie dane są pokazane na liście

Zestaw kolumn zależy od konfiguracji, ale zwykle zawiera:

- **ID**, **Nazwa**;
- **Produkt**;
- **Status leadu** (oraz stan „otwarta/zamknięta”);
- **Typ leadu**;
- **[Klient](../masterdata/partners.md)**;
- **Sprzedawca**;
- **Kampania**, **Kanał**, **Źródło**;
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

Dostępne są również dedykowane filtry:

- wg typu leadu;
- wg sprzedawcy;
- wg produktu;
- wg kampanii, kanału i źródła (jeśli moduł marketingu jest włączony).

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
- blok prognozy: **Data**, **Spodziewany przychód**, **Prawdopodobieństwo**, **Spodziewane zamknięcie**;
- główne atrybuty: **Typ leadu**, **[Klient](../masterdata/partners.md)**, **Produkt**, **Email**, **Telefon**, **Sprzedawca**, **Priorytet leadu**, **Tagi leadu**.

**Status leadu** jest pokazany jako osobny przełącznik u góry karty.

Niżej znajdują się zakładki, takie jak:

- **„Opis”** — opis zapytania, ustalenia, następny krok;
- **„Inne informacje”** — nazwa przedsiębiorstwa, strona internetowa, pola adresu, osoba kontaktowa oraz blok **„Marketing”** (**Kampania**, **Kanał**, **Źródło**).

### Rekomendowana kolejność uzupełniania

1. Wybierz **Produkt** (jeśli określono) — **Nazwa** leadu zostanie uzupełniona automatycznie z nazwy produktu, jeśli była pusta.
2. Ustaw **Nazwa** — krótko i jasno (o co chodzi i od kogo), jeśli nie została uzupełniona automatycznie.
3. Ustaw **[Klient](../masterdata/partners.md)**, jeśli znany.
4. Sprawdź **Sprzedawca** — dla nowego leadu ustawiany jest bieżący użytkownik; zmień go w razie potrzeby.
5. Wybierz **Typ leadu**.
6. Wybierz **Status leadu**.
7. Dodaj kontakty i opis.

### Typ leadu i dozwolone statusy

Lista dostępnych statusów zależy od wybranego typu leadu:

- dla każdego typu możesz skonfigurować, które statusy są dozwolone;
- jeśli dla typu nie skonfigurowano listy statusów, wszystkie statusy są dozwolone.

Jeśli wybrany status nie jest dozwolony dla typu, system nie pozwoli zapisać leadu. Po zmianie typu status jest automatycznie resetowany do statusu dozwolonego dla nowego typu.

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

### Tworzenie klienta z leadu

Jeśli lead nie ma jeszcze ustawionego **Klienta**, w karcie leadu dostępna jest akcja **„Utwórz Przedsiębiorstwo”**. Tworzy ona [przedsiębiorstwo](../masterdata/partners.md) na podstawie danych leadu — nazwa, telefon, email, adres i strona internetowa — oraz, jeśli wypełniono imię i nazwisko kontaktu, osobę kontaktową dla niego. Utworzone przedsiębiorstwo jest następnie ustawiane jako **Klient** leadu.

### Kopiowanie leadu

Akcja **„Kopiuj”** tworzy nowy lead i kopiuje główne pola bieżącego: nazwę, typ, klienta, sprzedawcę, opis, priorytet, tagi, spodziewany przychód i prawdopodobieństwo, kontakty oraz adres. Użyj jej dla podobnych powtarzających się zapytań.

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

- źródło: „targi”, „strona”, „polecenie” (alternatywnie użyj dedykowanych pól marketingowych);
- typ zapytania: „dostawa”, „dobór”, „pilne”.

Nie używaj tagów zamiast statusów: status to etap procesu, tag to dodatkowy atrybut.

## Typowe błędy

- **Nie można zapisać leadu** — wybrano status, który nie jest dozwolony dla typu leadu.
- **Nie można napisać e‑maila** — pole „Email” nie jest uzupełnione lub jest niepoprawne.
- **Leady „giną”** — nie przypisano sprzedawcy i/lub nie ustawiono spodziewanego zamknięcia.