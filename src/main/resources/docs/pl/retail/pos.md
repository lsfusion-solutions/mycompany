---
title: Kasa i POS
---

Ta strona opisuje, jak kasjer i administrator pracują z kasą: wybór kasy, otwarcie **[sesji](sessions.md)**, utworzenie paragonu, wyszukiwanie i skanowanie towarów oraz podstawowe działania w POS.

## Gdzie to znaleźć

- POS: **„Sprzedaż detaliczna” → „Operacje”**.
- Sesje: **„Sprzedaż detaliczna” → „Operacje” → „Sesje”**.

## Zanim zaczniesz

1. Upewnij się, że kasa jest skonfigurowana i dostępna na Twoim komputerze (zobacz [Ustawienia](settings.md)).
2. Otwórz **[sesję](sessions.md)** dla wybranej kasy.

> Jeśli dla kasy jest już otwarta sesja, nie będziesz w stanie otworzyć drugiej sesji.

## Praca z paragonem

W POS zwykle widzisz:

- bieżącą kasę i otwartą **[sesję](sessions.md)**;
- klienta (jeśli został wybrany);
- pozycje paragonu (towar, ilość, cena, rabat);
- podsumowanie: kwota, rabat, Do zapłaty.

### Dodawanie towarów

Dostępne metody zależą od konfiguracji. Najczęściej używane:

- **wyszukiwanie towaru** (po nazwie/kodzie);
- **skanowanie kodu kreskowego** — zeskanuj kod, a system doda towar do paragonu.

Jeśli kod kreskowy nie zostanie rozpoznany, system wyświetli powiadomienie.

### Zmiana ilości

Możesz zmienić ilość w pozycji paragonu ręcznie (w wierszu paragonu) lub za pomocą ekranowej klawiatury numerycznej, jeśli jest włączona w Twojej konfiguracji.

### Rabaty

W zależności od włączonych modułów i ustawień, pozycja paragonu może umożliwiać:

- wybór typu rabatu;
- ręczne nadanie rabatu;
- wyliczenie rabatu według reguł.

Zobacz także: [Rabaty w sprzedaży](../sales/discounts.md).

### Nowy paragon

W POS jest dostępna akcja **„Nowy paragon”** — czyści ona bieżący paragon i tworzy nowy w ramach wybranej sesji.

## Klient

Na paragonie możesz wybrać klienta (na przykład po **[karcie rabatowej](discount-cards.md)** lub ręcznie — zależy to od konfiguracji).

## Przejście do płatności

Płatność jest realizowana w oddzielnym formularzu. Szczegóły: [Płatności detaliczne](payments.md).

## Zwroty

Zwrot jest zwykle realizowany na podstawie oryginalnego paragonu: wybierz paragon na liście i uruchom akcję **„Zwrot”**.

Szczegółowa procedura (w tym płatność zwrotu i typowe ograniczenia): [Zwroty](returns.md).