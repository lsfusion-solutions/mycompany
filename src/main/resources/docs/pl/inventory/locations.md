---
title: Lokalizacje (magazyny i strefy)
---

## Cel

Lokalizacja to katalog opisujący, **gdzie fizycznie przechowywany jest towar**. W zależności od konfiguracji ewidencji magazynowej, lokalizacja może być:

- magazynem;
- strefą magazynową;
- miejscem składowania (adresowa lokalizacja składowania / bin).

## Gdzie jest używana

Lokalizacje są używane w prawie wszystkich dokumentach sekcji Magazynowanie:

- [przyjęcie](receipts.md) — gdzie towar jest przyjmowany;
- [wydanie](shipments.md) — skąd towar jest wydawany;
- [przemieszczanie](transfers.md) — skąd i dokąd towar jest przemieszczany;
- [odpad](scrap.md) — skąd towar jest odpisywany;
- [korekta zapasów](adjustments.md) — gdzie wykonywane jest liczenie zapasów.

## Struktura lokalizacji

Lokalizacje są zwykle zorganizowane hierarchicznie:

- poziom najwyższy — magazyn;
- wewnątrz — strefy;
- wewnątrz stref — miejsca składowania.

Rekomendacje:

1. Jeżeli ewidencja adresowa nie jest używana, wystarczy utworzyć lokalizacje na poziomie „magazynu”.
2. Jeżeli ewidencja adresowa jest używana, utwórz strefy i miejsca składowania tak, aby użytkownicy mogli je wygodnie wybierać w dokumentach.

## Typowe zasady

- Przy wyborze lokalizacji w dokumencie upewnij się, że odpowiada Twojemu procesowi (np. [wydanie](shipments.md) nie powinno być realizowane ze „strefy przyjęć”, jeśli jest to zabronione procedurami).
- Jeśli dokument nie może zostać zaksięgowany z powodu braku lokalizacji, sprawdź, czy lokalizacja w nagłówku dokumentu jest wypełniona.