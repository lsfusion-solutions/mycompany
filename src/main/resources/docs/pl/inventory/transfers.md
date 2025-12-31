---
title: Przemieszczania
---

Przemieszczanie (`Przemieszczanie`) to dokument do przesuwania towaru pomiędzy [lokalizacjami](locations.md) (na przykład pomiędzy magazynami, strefami lub miejscami składowania).

W praktyce przemieszczanie jest odmianą dokumentu **[Wydanie](shipments.md)** (w systemie jest przechowywane jako wydanie z typem **Przemieszczanie**). Dlatego lista i karta znajdują się we wspólnej sekcji wydań.

## Jak system rozpoznaje, że typ jest przemieszczeniem

W systemie nie ma osobnego „typu dokumentu przemieszczenia” — przemieszczenie to **[wydanie](shipments.md)** używające **typu wydania** z włączoną flagą **Przemieszczanie**.

Jest to flaga w katalogu **Typ wydania**.

Co to zmienia dla użytkownika:

- pole **Lokalizacja (dokąd)** staje się dostępne i wymagane;
- system nie pozwala wybrać tej samej **Lokalizacja (skąd)** i **Lokalizacja (dokąd)**;
- akcje przeznaczone dla przemieszczeń (np. **„Utwórz przemieszczanie”**, **„Przemieszczanie mobilny”**) są dostępne/działają tylko dla typów z włączoną tą flagą.

## Gdzie znaleźć

- Lista dokumentów: **„Magazynowanie” → „Operacje” → „Wydania”**.
- Utworzenie nowego dokumentu: przycisk **Utwórz** na liście.
- Tworzenie zbiorcze: akcja **„Utwórz przemieszczanie”** w akcjach listy.
- Interfejs mobilny: **„Przemieszczanie mobilny”**.

## Pola dokumentu

### Nagłówek

- **Typ** — typ dokumentu wydania. Dla przemieszczeń wybierz typ oznaczony jako `Przemieszczanie`.
- **Zaplanowana data** — data/godzina dokumentu.
- **Numer** — numer dokumentu (może być uzupełniany automatycznie, jeśli dla wybranego typu skonfigurowano numerację).
- **Lokalizacja (skąd)** — źródło.
- **Lokalizacja (dokąd)** — cel.
- **Komentarz** — dowolny komentarz.

### Pozycje

Każda pozycja to przemieszczany **towar** i jego **ilość**.

Kolumny i pola zależą od konfiguracji, ale podstawowy zestaw to:

- **Towar**
- **JM**
- **Kod kreskowy** (aby ułatwić wybór)
- **Zaplanowana ilość** (ilość do przemieszczenia)

## Statusy i zakończenie

Przemieszczenia używają tych samych statusów i logiki zakończenia co dokument [Wydanie](shipments.md).

Praktyczna zasada:

- gdy dokument jest w statusie **Projekt**, można go swobodnie edytować (nagłówek i pozycje);
- po zakończeniu (dokument jest zamknięty / tylko do odczytu) edycja jest ograniczona.

Aby zobaczyć szczegółowy opis statusów, patrz [Wydania i przemieszczenia](shipments.md).

## Sprawdzenia i ograniczenia

Aby utworzyć poprawne przemieszczenie, system sprawdza:

- **Lokalizacja (dokąd)** jest wymagane dla typu dokumentu `Przemieszczanie`;
- **Lokalizacja (skąd)** i **Lokalizacja (dokąd)** nie mogą być takie same.

Jeżeli którykolwiek warunek nie jest spełniony, system pokazuje komunikat i nie pozwala zapisać/zakończyć dokumentu.

## Typowy scenariusz

1. Otwórz listę **Wydania** i utwórz nowy dokument.
2. W polu **Typ** wybierz `Przemieszczanie`.
3. Wskaż **Lokalizacja (skąd)** i **Lokalizacja (dokąd)**.
4. W zakładce **Linie** dodaj towary i podaj ilość w każdej pozycji.
5. Zakończ dokument (komendą zmiany statusu dostępną w Twoim UI) — po tym przemieszczenie jest uznawane za wykonane.

## Tworzenie zbiorcze

Szczegółowa instrukcja dla akcji **„Utwórz przemieszczanie”** jest dostępna na osobnej stronie: [Zbiorcze tworzenie przemieszczeń](transfer-bulk-create.md).

## Przemieszczanie mobilne

Formularz **Przemieszczanie mobilny** służy do szybkiego utworzenia przemieszczenia na podstawie faktycznych stanów.

Typowy przebieg:

1. Otwórz **Przemieszczanie mobilny**.
2. Wybierz **Typ** (jeśli system ma więcej niż jeden typ przemieszczenia).
3. Wybierz **Lokalizacja (skąd)**.
4. Wybierz **Lokalizacja (dokąd)**.
5. Na liście towarów podaj ilość do przemieszczenia:
   - możesz filtrować towary po nazwie/kodzie kreskowym/kategorii (jeśli takie filtry są dostępne);
   - lista zwykle pokazuje **Ilość na stanie** i umożliwia wprowadzenie **Ilość**;
   - może być dostępna komenda ustawiająca ilość równą stanowi.
6. Kliknij akcję przemieszczenia i potwierdź operację.

Po potwierdzeniu system tworzy dokument przemieszczenia i od razu oznacza go jako wykonany (tryb „immediate document”).