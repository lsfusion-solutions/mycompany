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

- [Szybki start](#szybki-start)
- [Nawigacja](#nawigacja)
- [Pojęcia](#pojęcia)

Sekcje:

- [Kasa i POS](pos.md)
- [Zwroty](returns.md)
- [Sesje](sessions.md)
- [Płatności detaliczne](payments.md)
- [Karty rabatowe](discount-cards.md)
- [Ustawienia](settings.md)

## Szybki start

### Scenariusz: otwórz sesję → zrealizuj sprzedaż → przyjmij płatność → zamknij sesję

1. W **„Sprzedaż detaliczna” → „Konfiguracja”** upewnij się, że:
   - utworzono **kasy** i (jeśli trzeba) powiązano je z komputerami — w słowniku **„Kasy”**;
   - skonfigurowano **metody płatności** — na formularzu **„Ustawienia”**.
2. Otwórz **„Sprzedaż detaliczna” → „Operacje” → „POS”**.
3. Wybierz kasę i otwórz sesję akcją **„Otwórz sesję”**.
4. Dodaj towary do paragonu (wyszukiwanie / skanowanie kodu kreskowego / witryna dotykowa); jeśli trzeba, zastosuj rabat lub kartę rabatową.
5. Przejdź do płatności, wprowadź kwoty według metod płatności i potwierdź.
6. Po zakończeniu uruchom **„Zamknij sesję”**.

### Scenariusz: zrealizuj zwrot od klienta

Zwrot na kasie realizuje się na podstawie oryginalnego paragonu sprzedaży:

1. Otwórz POS.
2. Na zakładce **„Sesja”** na liście **„Paragony”** znajdź oryginalny paragon i naciśnij **„Zwrot”**.
3. Dostosuj zwracane towary i ilości.
4. Zrealizuj płatność zwrotu (wypłatę): daną metodą płatności można zwrócić najwyżej tyle, ile nią zapłacono w oryginalnym paragonie, a łączna kwota wypłaty musi być równa kwocie zwrotu.

Szczegóły: [Zwroty](returns.md).

## Nawigacja

Sekcja **„Sprzedaż detaliczna”** zawiera dwie grupy:

- **Operacje** — ekran kasjera **POS** i lista **sesji**.
- **Konfiguracja** — formularz **„Ustawienia”** oraz słowniki **„Kasy”** i **„Karty rabatowe”**.

Typowe pozycje menu:

- **„Sprzedaż detaliczna” → „Operacje” → „POS”** — ekran kasjera do sprzedaży i zwrotów.
- **„Sprzedaż detaliczna” → „Operacje” → „Sesje”** — lista sesji.
- **„Sprzedaż detaliczna” → „Konfiguracja” → „Ustawienia”** — parametry sekcji.

## Pojęcia

### Kasa

**[Kasa](settings.md)** to stanowisko pracy służące do realizacji sprzedaży i zwrotów. Z reguły kasa jest powiązana z konkretnym komputerem/urządzeniem.

### Sesja

**[Sesja](sessions.md)** to okres pracy kasy pomiędzy **otwarciem sesji** a **zamknięciem sesji**. Operacje w POS są wykonywane w ramach otwartej sesji.

### POS

**[POS](pos.md)** to ekran kasjera służący do realizacji sprzedaży i zwrotów: tworzenia paragonu, dodawania towarów, stosowania rabatów oraz przejścia do płatności.

### Paragon

Wynik realizacji sprzedaży lub zwrotu (w **[POS](pos.md)**): lista pozycji, ceny, rabaty, Do zapłaty oraz metoda(y) płatności.

### Metoda płatności

**[Metoda płatności](payments.md)** to skonfigurowany sposób przyjmowania pieniędzy (na przykład gotówka lub karta bankowa) oraz powiązane operacje finansowe.

### Karta rabatowa

**[Karta rabatowa](discount-cards.md)** to karta identyfikująca klienta na paragonie; klient paragonu jest ustawiany na podstawie właściciela karty.