---
title: Sprzedaż detaliczna — dokumentacja użytkownika
---

Ta dokumentacja opisuje pracę z sekcją **„Sprzedaż detaliczna”**: konfigurację **[kas](settings.md)**, zarządzanie **[sesjami](sessions.md)**, realizację sprzedaży i zwrotów w **[POS](pos.md)**, stosowanie **[rabatów](../sales/discounts.md)** i **[kart rabatowych](discount-cards.md)** oraz przyjmowanie **[płatności](payments.md)**.

Jeśli w Twojej konfiguracji brakuje niektórych pozycji menu lub akcji, jest to normalne: dostępna funkcjonalność zależy od włączonych modułów i ustawień.

## Dla kogo jest ta sekcja

Sekcja **„Sprzedaż detaliczna”** jest zwykle używana przez:

- **Kasjera** — realizuje sprzedaż i zwroty, przyjmuje płatności, drukuje/wysyła paragon do klienta.
- **Starszego kasjera / administratora** — otwiera i zamyka sesje, monitoruje operacje dla kasy.
- **Administratora systemu / osobę odpowiedzialną za ustawienia** — konfiguruje kasy, metody płatności, karty rabatowe i parametry POS.

## Spis treści

- [Szybki start](#quick-start)
- [Nawigacja](#navigation)
- [Pojęcia](#terms)

Sekcje:

- [Kasa i POS](pos.md)
- [Zwroty](returns.md)
- [Sesje](sessions.md)
- [Płatności detaliczne](payments.md)
- [Karty rabatowe](discount-cards.md)
- [Ustawienia](settings.md)

## Szybki start

### Scenariusz: otwórz sesję → zrealizuj sprzedaż → przyjmij płatność → zamknij sesję

1. Otwórz **„Sprzedaż detaliczna” → „Konfiguracja” → „Ustawienia”** i upewnij się, że:
   - utworzono **kasy** i (jeśli trzeba) powiązano je z komputerami;
   - skonfigurowano **metody płatności**.
2. Otwórz **„Sprzedaż detaliczna” → „Operacje” → „Sesje”**.
3. Otwórz sesję dla wymaganej kasy używając **„Otwórz sesję”**.
4. Otwórz **„Sprzedaż detaliczna” → „Operacje”** i uruchom **POS**.
5. Dodaj towary do paragonu (wyszukiwanie / skanowanie kodu kreskowego); jeśli trzeba, zastosuj rabat / kartę rabatową.
6. Przejdź do płatności, wprowadź kwoty według metod płatności i potwierdź.
7. Po zakończeniu uruchom **„Zamknij sesję”**.

### Scenariusz: zrealizuj zwrot od klienta

Sposób realizacji zwrotu zależy od Twojej konfiguracji (na przykład zwrot na podstawie oryginalnego paragonu lub „zwrot wolny”). Typowe kroki:

1. Otwórz POS.
2. Przełącz do trybu zwrotu (jeśli jest używany).
3. Wskaż towary i ilości do zwrotu.
4. Zrealizuj płatność zwrotu (wypłatę) używając wybranej metody płatności.

Szczegóły: [Zwroty](returns.md).

## Nawigacja

Sekcja **„Sprzedaż detaliczna”** zwykle zawiera grupy:

- **Operacje** — POS, sesje, listy paragonów/operacji w ramach sesji.
- **Konfiguracja** — słowniki i parametry, które wpływają na działanie kasy i płatności.

Typowe pozycje menu:

- **„Sprzedaż detaliczna” → „Operacje” → „Sesje”** — otwieranie/zamykanie i monitorowanie sesji.
- **„Sprzedaż detaliczna” → „Operacje”** — POS.
- **„Sprzedaż detaliczna” → „Konfiguracja” → „Ustawienia”** — parametry sekcji.

## Pojęcia

#### Kasa

**[Kasa](settings.md)** to stanowisko pracy służące do realizacji sprzedaży i zwrotów. Z reguły kasa jest powiązana z konkretnym komputerem/urządzeniem.

#### Sesja

**[Sesja](sessions.md)** to okres pracy kasy pomiędzy **otwarciem sesji** a **zamknięciem sesji**. Operacje w POS są wykonywane w ramach otwartej sesji.

#### POS

**[POS](pos.md)** to ekran kasjera służący do realizacji sprzedaży i zwrotów: tworzenia paragonu, dodawania towarów, stosowania rabatów oraz przejścia do płatności.

#### Paragon

Wynik realizacji sprzedaży lub zwrotu (w **[POS](pos.md)**): lista pozycji, ceny, rabaty, Do zapłaty oraz metoda(y) płatności.

#### Metoda płatności

**[Metoda płatności](payments.md)** to skonfigurowany sposób przyjmowania pieniędzy (na przykład gotówka lub karta bankowa) oraz powiązane operacje finansowe.

#### Karta rabatowa

**[Karta rabatowa](discount-cards.md)** to karta klienta, która może być użyta do udzielenia rabatu i/lub identyfikacji klienta na paragonie.