---
title: Partie i pakiety
---

## Partie

Partia (batch/serial) jest używana do śledzenia (traceability). Katalog partii jest dostępny w **„Magazynowanie” → „Operacje” → „Partie”**.

Śledzenie partii kontrolowane jest na kilku poziomach ustawień:

- **globalnym przełącznikiem** (flaga **„Partii”**) w **„Magazynowanie” → „Konfiguracja” → „Ustawienia”**, który włącza ewidencję partii dla całego systemu;
- na każdej **kategorii towaru** — flagą **„Używaj partii”**, flagą **„Numery seryjny”**, **licznikiem** i **prefiksem ID** do generowania identyfikatorów partii. Ustawienia kategorii — „Używaj partii” / „Numery seryjny” / licznik / prefiks — są dziedziczone przez podkategorie i towary w kategorii;
- na towarze — przesłonięcie **„Używaj partii”** pozwala **włączyć** śledzenie partii dla pojedynczego towaru, nawet jeśli jego kategoria nie ma partii. Ta flaga na towarze **nie może wyłączyć** śledzenia partii dla towaru, którego kategoria ma je włączone — aby wyłączyć partie dla takiego towaru, wyłącz flagę na kategorii.

Sam rekord partii jest minimalny: zawiera **ID** i **Towar**, do którego należy. Daty ważności i podobne atrybuty nie wchodzą w skład bazowej encji partii — mogą zostać dodane przez konfigurację rozszerzającą model.

### Generowanie ID partii

Identyfikatory partii można wprowadzać ręcznie lub generować automatycznie (akcja **„Wygeneruj”** w pozycjach [przyjęcia](receipts.md)):

- ID składa się z **prefiksu** oraz kolejnej wartości **licznika** skonfigurowanego na kategorii towaru (na przykład prefiks `LOT-` i wartość licznika `000123` dają `LOT-000123`);
- dla towarów z włączonymi **„Numery seryjny”** generowana jest jedna partia **na sztukę** — każda z ilością 1 (tryb numerów seryjnych);
- w przeciwnym razie generowana jest jedna partia dla całej pozostałej ilości pozycji (tryb partii).

### Gdzie używane są partie

Gdy ewidencja partii jest włączona dla towaru:

- partia może być wskazana w pozycjach [przyjęcia](receipts.md), [wydania](shipments.md), [przemieszczenia](transfers.md) (przemieszczenie to wydanie z flagą „Przemieszczanie”), [odpadu](scrap.md) i [korekty zapasów](adjustments.md) — odpowiednie karty otrzymują zakładkę **„Partie”** z rozbiciem na partie;
- odłożenie na przyjęciach i kompletację na wydaniach można uszczegółowić według partii;
- [raporty stanów](reports-and-ledgers.md) można budować z rozbiciem na partie, a sama karta partii pokazuje historię ruchów i bieżący stan partii wg lokalizacji;
- w scenariuszach mobilnych / ze skanowaniem system rozpoznaje zeskanowany kod kreskowy bezpośrednio jako partię; jeśli kod jest nieznany, nowa partia może zostać utworzona automatycznie w locie.

### Etykiety partii

Etykiety z kodami kreskowymi partii można drukować: akcja drukowania jest dostępna zarówno na karcie partii, jak i w pozycjach dokumentów (przyjęcia, wydania). Formaty wyjściowe obejmują PDF, DOCX, XLSX, RTF i HTML; szablon etykiety jest konfigurowalny.

## Pakiety

Pakiet to kontener / jednostka wielopozycyjna identyfikowana **ID** (i opcjonalnym **odnośnikiem**), która ma własną listę pozycji z towarami i ilościami. Katalog pakietów jest dostępny w **„Magazynowanie” → „Operacje” → „Pakiety”**.

> Obsługa pakietów w konfiguracji standardowej jest aktualnie wspierana **tylko w [przyjęciach](receipts.md)**: pakiet można powiązać z przyjęciem, a pozycję pakietu można powiązać z partią. Wydania, przemieszczania, odpad i korekty zapasów obsługują wyłącznie partie — nie mają wbudowanej obsługi na poziomie pakietów.

Gdy pakiety są używane w przyjęciu:

- zawartość pakietu (towary i ich ilości) jest zapisywana raz w katalogu pakietów;
- pakiet jest następnie wiązany z przyjęciem (akcja **„Dodaj”** na zakładce **„Pakiety”**) — jego pozycje są wyświetlane na karcie przyjęcia w celach poglądowych i śledzenia (traceability);
- każdą pozycję pakietu można powiązać z [partią](#partie), gdy dla towaru włączone jest śledzenie partii — kolumnę **„Partia”** wypełnia się bezpośrednio na karcie pakietu.

> Powiązanie pakietu z przyjęciem ma charakter informacyjny: stany są nadal księgowane z własnych ilości pozycji przyjęcia (kolumna **„Przyjęte”**), więc odpowiednie pozycje przyjęcia również muszą być wypełnione.

> Nie należy tego mylić z opcją **„Pokaż pakiety”**, którą można włączyć na typie dokumentu. Ta opcja dodaje w pozycjach dokumentu dodatkowe kolumny do wprowadzania ilości w jednostkach opakowania (kartonach, paletach itd.) i jest opisana w sekcji [Liczba pakietów](product-sku.md#alternatywa-ewidencja-w-opakowaniach-pakietach-w-dokumentach). Jest niezależna od katalogu pakietów opisanego tutaj.
