---
title: Partie i pakiety
---

## Partie

Partia (batch/serial) jest używana do śledzenia (traceability).

Śledzenie partii kontrolowane jest na kilku poziomach ustawień:

- **flagą globalną** w **„Magazynowanie” → „Konfiguracja” → „Ustawienia”**, która włącza ewidencję partii dla całego systemu;
- na każdej **kategorii towaru** — flagą **„Używaj partii”**, flagą **„Numery seryjne”**, **numeratorem** i **prefiksem ID** generowania identyfikatorów partii. Ustawienia kategorii — „Używaj partii” / „Numery seryjne” / numerator / prefiks — są dziedziczone przez podkategorie i towary w kategorii;
- na towarze — przesłonięcie **„Używaj partii”** pozwala **włączyć** śledzenie partii dla pojedynczego towaru, nawet jeśli jego kategoria nie ma partii. Ta flaga na towarze **nie może wyłączyć** śledzenia partii dla towaru, którego kategoria ma je włączone — aby wyłączyć partie dla takiego towaru, wyłącz flagę na kategorii.

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
- pakiet jest następnie powiązany z przyjęciem — jego pozycje są wyświetlane na karcie przyjęcia w celach poglądowych i śledzenia (traceability);
- każdą pozycję pakietu można powiązać z [partią](#partie), gdy dla towaru włączone jest śledzenie partii.

> Powiązanie pakietu z przyjęciem ma charakter informacyjny: stany są nadal księgowane z własnych ilości pozycji przyjęcia (kolumna „wykonano”), więc odpowiednie pozycje przyjęcia również muszą być wypełnione.

> Nie należy tego mylić z opcją **„Pokaż pakiety”**, którą można włączyć na typie dokumentu. Ta opcja dodaje w pozycjach dokumentu dodatkowe kolumny do wprowadzania ilości w jednostkach opakowania (kartonach, paletach itd.) i jest opisana w sekcji [Liczba pakietów](product-sku.md#alternatywa-ewidencja-w-opakowaniach-pakietach-w-dokumentach). Jest niezależna od katalogu pakietów opisanego tutaj.
