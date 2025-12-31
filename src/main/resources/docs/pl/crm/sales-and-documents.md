---
title: Zamówienia i faktury z leadu
---

Lead może zostać „przekształcony” w dokument, aby kontynuować pracę w obszarze rozliczeń, zachowując jednocześnie powiązanie z pierwotnym zapytaniem.

W zależności od konfiguracji możesz:

- utworzyć **[zamówienie sprzedaży](../sales/orders.md)** z leadu;
- utworzyć **[fakturę](../sales/invoices.md)** z leadu;
- przeglądać już utworzone dokumenty powiązane w karcie leadu.

## Przygotowanie (jednorazowo)

Dostępność przycisków tworzenia dokumentów zależy od parametrów w **„CRM → Konfiguracja → Ustawienia”**:

- **„Typ zamówienia”** — określa, jaki typ jest wstępnie podstawiany przy tworzeniu zamówienia;
- **„Typ faktury”** — określa, jaki typ jest wstępnie podstawiany przy tworzeniu faktury.

Jeśli parametr nie jest ustawiony, odpowiedni przycisk nie jest pokazywany w karcie leadu.

Zobacz szczegóły w [Ustawienia i dane referencyjne](settings.md).

## Kiedy warto tworzyć dokumenty z leadu

Tworzenie zamówienia lub faktury jest wygodne, gdy:

- potrzeba klienta jest potwierdzona;
- kluczowe warunki są jasne (co sprzedajesz, komu, gdzie);
- chcesz śledzić dalsze działania w dokumentach.

Jeśli zapytanie jest jeszcze „surowe”, lepiej najpierw doprecyzować szczegóły i przeprowadzić lead przez statusy.

## Tworzenie zamówienia z leadu

### Jak utworzyć

1. Otwórz kartę leadu.
2. Kliknij **„Utwórz Zamówienie”**.
3. System tworzy nowe zamówienie i otwiera je do dalszego uzupełnienia.

Przed utworzeniem rekomendowane jest sprawdzenie w leadzie:

- czy **[partner](../masterdata/partners.md)** jest uzupełniony;
- czy telefon i email są poprawne;
- czy pola adresu są uzupełnione (jeśli dostawa ma znaczenie).

### Co jest uzupełniane automatycznie

Zwykle automatycznie przenoszone są:

- powiązanie z leadem źródłowym;
- **[partner](../masterdata/partners.md)** z leadu;
- **typ** = wartość parametru **„Typ zamówienia”**;
- **adres dostawy** — zbudowany z danych adresowych leadu (jeśli uzupełnione).

Jeśli w leadzie brakuje części danych (np. nie ma [partnera](../masterdata/partners.md)), trzeba je uzupełnić w zamówieniu ręcznie.

### Gdzie zobaczyć powiązane zamówienia

W karcie leadu jest widoczny blok **„Zamówienia”**:

- pokazuje tylko zamówienia powiązane z bieżącym leadem;
- lista zwykle zawiera numer, datę/czas, status, typ, kwotę i inne kluczowe pola;
- z listy możesz otworzyć zamówienie do edycji.

Powiązanie jest zwykle widoczne również w samym zamówieniu (pole „Lead”), więc możesz znaleźć lead źródłowy także „z dokumentu”.

## Tworzenie faktury z leadu

### Jak utworzyć

1. Otwórz kartę leadu.
2. Kliknij **„Utwórz fakturę”**.
3. System tworzy nową fakturę i ją otwiera.

Rekomendacja: twórz fakturę z leadu, gdy już wiadomo, że wkrótce będzie rejestrowana [dostawa](../sales/shipments.md)/realizacja usługi.

Rekomendowany artykuł o dokumencie: [Faktury dla zamówień](../sales/invoices.md).

### Co jest uzupełniane automatycznie

Zwykle automatycznie przenoszone są:

- powiązanie z leadem źródłowym;
- **[partner](../masterdata/partners.md)** z leadu;
- **typ** = wartość parametru **„Typ faktury”**;
- **adres dostawy** — zbudowany z danych adresowych leadu (jeśli uzupełnione).

### Gdzie zobaczyć powiązane faktury

W karcie leadu jest widoczny blok **„Faktury”**:

- pokazuje faktury utworzone z bieżącego leadu;
- z listy możesz otworzyć fakturę do edycji.

## Co zrobić, jeśli dokument utworzono przez pomyłkę

1. Otwórz utworzony dokument.
2. Jeśli dokument jest pusty i nie był używany, możesz go usunąć (jeśli masz uprawnienia).
3. Jeśli dokument już brał udział w procesie, skoordynuj działania z odpowiedzialnymi użytkownikami (np. anulowanie/zamknięcie zgodnie z zasadami rozliczeń).
4. Wróć do leadu i popraw dane źródłowe ([partner](../masterdata/partners.md), adres, typ), aby ponowne utworzenie było poprawne.

## Typowe sytuacje

- **Nie ma przycisku tworzenia** — „Typ zamówienia” lub „Typ faktury” nie jest ustawiony w ustawieniach albo nie masz uprawnień.
- **Zły [partner](../masterdata/partners.md)** — sprawdź pole „Partner” w leadzie przed utworzeniem dokumentu.
- **Adres nie był uzupełniony** — uzupełnij pola adresu w leadzie i utwórz ponownie (albo uzupełnij adres w dokumencie ręcznie).