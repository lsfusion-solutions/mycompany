---
title: Lokalizacje (magazyny i strefy)
---

## Cel

Lokalizacja to wpis w katalogu opisujący, **gdzie fizycznie przechowywany jest towar**. System przechowuje wszystkie lokalizacje jako jedną encję **Lokalizacja** zorganizowaną w drzewo rodzic–dziecko o dowolnej głębokości — nie ma oddzielnych klas „magazyn” / „strefa” / „miejsce składowania”. Rola konkretnego węzła zależy od tego, jak Twoja organizacja zdecyduje go używać; typowo:

- węzły najwyższego poziomu reprezentują magazyny;
- ich dzieci reprezentują strefy;
- liście reprezentują miejsca składowania (ewidencja adresowa).

## Gdzie jest używana

Lokalizacje są używane w prawie wszystkich dokumentach sekcji Magazynowanie:

- [przyjęcie](receipts.md) — gdzie towar jest przyjmowany;
- [wydanie](shipments.md) — skąd towar jest wydawany;
- [przemieszczanie](transfers.md) — skąd i dokąd towar jest przemieszczany;
- [odpad](scrap.md) — skąd towar jest odpisywany;
- [korekta zapasów](adjustments.md) — gdzie wykonywane jest liczenie zapasów.

## Struktura lokalizacji

Lokalizacje są zorganizowane hierarchicznie poprzez pojedyncze pole **„Rodzic”** wskazujące na inną lokalizację. Każdy węzeł może mieć dzieci, więc głębokość jest dowolna; typowy wzorzec to dwa lub trzy poziomy:

- poziom najwyższy — magazyn;
- wewnątrz — strefy;
- wewnątrz stref — miejsca składowania.

Obok widoku listy dostępna jest zakładka **„Drzewo”** — to najwygodniejszy sposób nawigacji po hierarchii.

Rekomendacje:

1. Jeżeli ewidencja adresowa nie jest używana, wystarczy utworzyć lokalizacje na poziomie „magazynu”.
2. Jeżeli ewidencja adresowa jest używana, utwórz strefy i miejsca składowania tak, aby użytkownicy mogli je wygodnie wybierać w dokumentach.

Opcjonalnie w **„Magazynowanie” → „Konfiguracja” → „Ustawienia”** można włączyć flagę **„Zabroń wielu lokalizacji głównych”**. Z włączoną flagą system nie pozwala mieć więcej niż jednej lokalizacji bez rodzica — pierwszą (główną) lokalizację nadal można utworzyć bez rodzica, ale każda kolejna musi być dołączona do istniejącego drzewa.

## Pozostałe pola lokalizacji

Oprócz **„Nazwy”**, **„ID”** i **„Rodzic”** lokalizacja ma:

- **„Do użytku wewnętrznego”** — oznacza węzły czysto wewnętrzne (np. strefy tranzytowe).
- **„Zarchiwizowane”** — ukrywa lokalizację z domyślnej listy (filtr „Aktywne” jest domyślnie włączony).
- **„Właściciel”** (firma) — firma będąca właścicielem składowania.
- **„Adres” / „Miasto” / „Województwo” / „Kod pocztowy”** — pola adresowe. Jeśli na węźle podrzędnym są puste, system pobiera wartości z najbliższego wypełnionego rodzica (adres kanoniczny).

## Typowe zasady

- Przy wyborze lokalizacji w dokumencie upewnij się, że odpowiada Twojemu procesowi (np. [wydanie](shipments.md) nie powinno być realizowane ze „strefy przyjęć”, jeśli jest to zabronione procedurami).
- Jeśli dokument nie może zostać zaksięgowany z powodu braku lokalizacji, sprawdź, czy lokalizacja w nagłówku dokumentu jest wypełniona.
- Lokalizacji nie można usunąć, dopóki ma podrzędne lokalizacje.