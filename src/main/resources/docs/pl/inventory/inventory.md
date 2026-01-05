---
title: Magazynowanie — dokumentacja użytkownika
---

Ta dokumentacja opisuje sekcję **„Magazynowanie”**: lokalizacje, przyjęcia, wydania, przemieszczania, odpad, korekty zapasów, zadania kompletacyjne, partie i pakiety, a także raporty i rejestry.

## Spis treści

- [Szybki start](#szybki-start)
- [Nawigacja](#nawigacja)
- [Terminy](#terminy)

Sekcje:

- [Lokalizacje (magazyny i strefy)](locations.md)
- [Przyjęcia](receipts.md)
- [Wydania](shipments.md)
- [Przemieszczania](transfers.md)
  - [Zbiorcze tworzenie przemieszczeń](transfer-bulk-create.md)
- [Odpad](scrap.md)
- [Korekta zapasów](adjustments.md)
- [Zadania kompletacyjne](picking.md)
- [Magazynowe jednostki SKU](product-sku.md)
- [Partie i pakiety](lots-and-packages.md)
- [Raporty i rejestry](reports-and-ledgers.md)
- [Kalkulacja kosztu pozycji](costing.md)
- [Ustawienia](settings.md)

## Szybki start

Poniżej przedstawiono typowy cykl magazynowy.

1. Utwórz/przejrzyj **[lokalizacje](locations.md)** (magazyn, strefy, miejsca składowania), jeśli wymagana jest ewidencja adresowa (bin-level storage).
2. Utwórz **[przyjęcie](receipts.md)**:
   - wskaż dostawcę (jeśli używane) i [lokalizację](locations.md);
   - dodaj pozycje towarowe i ilości;
   - przesuń przyjęcie do realizacji i zakończ je.
3. Utwórz **[wydanie](shipments.md)**:
   - wskaż klienta (jeśli używane) i [lokalizację](locations.md);
   - dodaj pozycje towarowe i ilości;
   - uruchom sprawdzenie dostępności i rezerwację (jeśli włączone);
   - wykonaj kompletację (jeśli używane są [zadania kompletacyjne](picking.md)) i zakończ wydanie.
4. W razie potrzeby wykonaj **[przemieszczanie](transfers.md)** między lokalizacjami (magazynami/strefami).
5. Użyj dokumentu **[odpad](scrap.md)**, aby zarejestrować rozbieżności (uszkodzenia, straty, wady, przeterminowanie itd.).
6. Okresowo uruchamiaj **[korekty zapasów](adjustments.md)** i zamykaj je.

## Nawigacja

Sekcja „Magazynowanie” zazwyczaj zawiera grupy:

- **Operacje** — dokumenty (przyjęcia, wydania, przemieszczania, odpad, korekty zapasów).
- **Procesy** — zadania i panele przetwarzania (np. kompletacja).
- **Raportowanie** — raporty stanów i ruchów.
- **Ustawienia** — parametry i katalogi.

## Terminy

#### [Lokalizacja](locations.md)

Magazyn, strefa lub miejsce składowania, w którym przechowywane są towary.

#### [Przyjęcie](receipts.md)

Dokument rejestrujący przyjęcie towaru do [lokalizacji](locations.md).

#### [Wydanie](shipments.md)

Dokument rejestrujący wydanie towaru z [lokalizacji](locations.md).

#### [Przemieszczanie](transfers.md)

Dokument przemieszczający towar pomiędzy [lokalizacjami](locations.md).

#### [Odpad](scrap.md)

Dokument do odpisu towaru (uszkodzenia, straty, wady, przeterminowanie itd.).

#### [Korekta zapasów](adjustments.md)

Procedura liczenia zapasów i rejestrowania rozbieżności.

#### [Partia](lots-and-packages.md)

Identyfikator partii/serii używany do śledzenia (traceability).

#### [Pakiet](lots-and-packages.md)

Jednostka opakowania/kontener używany w ewidencji zapasów.

#### [Magazynowa jednostka SKU](product-sku.md)

Podstawowa pozycja asortymentowa, w której prowadzona jest fizyczna ewidencja towarów w magazynie.

#### [Liczba pakietów](product-sku.md#alternatywa-ewidencja-w-opakowaniach-pakietach-w-dokumentach)

Ilość towaru wyrażona w jednostkach opakowania (pakietach), używana dla wygody wprowadzania danych w dokumentach.