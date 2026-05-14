---
title: Partie i pakiety
---

## Partie

Partia (batch/serial) jest używana do śledzenia (traceability).

Śledzenie partii kontrolowane jest na dwóch poziomach ustawień:

- **flagą globalną** w **„Magazynowanie” → „Konfiguracja” → „Ustawienia”**, która włącza ewidencję partii dla całego systemu;
- **opcjami na poziomie towaru** w karcie towaru: czy towar jest partiowany, czy używa numerów seryjnych (jedna sztuka na partię) oraz numerator / prefiks ID przy generowaniu identyfikatorów partii.

Sam rekord partii jest minimalny: zawiera **ID** i **Towar**, do którego należy. Daty ważności i podobne atrybuty nie wchodzą w skład bazowej encji partii — mogą zostać dodane przez konfigurację rozszerzającą model.

Gdy ewidencja partii jest włączona dla towaru:

- partia może być wskazana w pozycjach [przyjęcia](receipts.md), [wydania](shipments.md), [przemieszczenia](transfers.md) (przemieszczenie to wydanie z flagą „Przemieszczanie”), [odpadu](scrap.md) i [korekty zapasów](adjustments.md);
- [raporty stanów](reports-and-ledgers.md) można budować z rozbiciem na partie;
- w scenariuszach mobilnych / ze skanowaniem system potrafi rozpoznać kod kreskowy bezpośrednio jako partię.

## Pakiety

Pakiet to kontener / jednostka wielopozycyjna identyfikowana **ID** (i opcjonalnym **odnośnikiem**), która ma własną listę pozycji z towarami i ilościami.

> Obsługa pakietów w konfiguracji standardowej jest aktualnie wspierana **tylko w [przyjęciach](receipts.md)**: pakiet można powiązać z przyjęciem, a pozycję pakietu można powiązać z partią. Wydania, przemieszczania, odpad i korekty zapasów obsługują wyłącznie partie — nie mają wbudowanej obsługi na poziomie pakietów.

Gdy pakiety są używane w przyjęciu:

- zawartość pakietu (towary i ich ilości) jest zapisywana raz w katalogu pakietów;
- pakiet jest następnie dodawany do przyjęcia i wnosi swoje pozycje do dokumentu;
- każdą pozycję pakietu można powiązać z [partią](#partie), gdy dla towaru włączone jest śledzenie partii.

> Nie należy tego mylić z opcją **„Pokaż pakiety”**, którą można włączyć na typie dokumentu. Ta opcja dodaje w pozycjach dokumentu dodatkowe kolumny do wprowadzania ilości w jednostkach opakowania (kartonach, paletach itd.) i jest opisana w sekcji [Liczba pakietów](product-sku.md#alternatywa-ewidencja-w-opakowaniach-pakietach-w-dokumentach). Jest niezależna od katalogu pakietów opisanego tutaj.
