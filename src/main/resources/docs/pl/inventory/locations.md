---
title: Lokalizacje (magazyny i strefy)
---

## Cel

Lokalizacja to wpis w katalogu opisujący, **gdzie fizycznie przechowywany jest towar**. System przechowuje wszystkie lokalizacje jako jedną encję **Lokalizacja** zorganizowaną w drzewo rodzic–dziecko o dowolnej głębokości — nie ma oddzielnych klas „magazyn” / „strefa” / „miejsce składowania”. Rola konkretnego węzła zależy od tego, jak Twoja organizacja zdecyduje go używać; typowo:

- węzły najwyższego poziomu reprezentują magazyny;
- ich dzieci reprezentują strefy;
- liście reprezentują miejsca składowania (ewidencja adresowa).

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Konfiguracja” → „Lokalizacje”**.

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

Opcjonalnie w **„Magazynowanie” → „Konfiguracja” → „Ustawienia”** można włączyć flagę **„Zakaz używania wielu lokalizacji korzeni”**. Z włączoną flagą system odrzuca próby pozostawienia więcej niż jednej lokalizacji bez rodzica — pierwszą (główną) lokalizację nadal można utworzyć bez rodzica, ale każda kolejna musi być dołączona do istniejącego drzewa.

## Pozostałe pola lokalizacji

Oprócz **„Nazwy”**, **„ID”** i **„Rodzica”** lokalizacja ma:

- **„Do użytku wewnętrznego”** — oznacza węzły czysto wewnętrzne (np. strefy tranzytowe).
- **„Zarchiwizowane”** — ukrywa lokalizację z domyślnej listy (filtr „Aktywne” jest domyślnie włączony).
- **„Posiadacz”** (firma) — firma będąca właścicielem składowania.
- **„Adres” / „Miasto” / „Województwo” / „Kod pocztowy”** — pola adresowe. Jeśli na węźle podrzędnym są puste, system pobiera wartości z najbliższego wypełnionego rodzica (adres kanoniczny).
- **„Kalkulacja kosztów”** — oznacza lokalizację jako kosztową lokalizację ewidencyjną (zobacz [kalkulacja kosztu pozycji](costing.md)). Koszt jest prowadzony według najbliższego przodka z tą flagą (lub według korzenia drzewa, jeśli żaden przodek jej nie ma), więc przemieszczenia pomiędzy podlokalizacjami jednej kosztowej lokalizacji ewidencyjnej nie tworzą zapisów kosztowych.

## Ograniczenia rejestrów (na lokalizację)

Na lokalizacji można włączyć dwa opcjonalne ograniczenia (są dziedziczone przez lokalizacje podrzędne — decyduje najbliższy przodek z ustawioną flagą):

- **„Zakaz ujemnych stanów”** — system blokuje operacje, które sprowadziłyby fizyczny stan towaru w tej lokalizacji poniżej zera.
- **„Uniemożliw rezerwację większej ilości niż dostępna”** — system blokuje operacje, które sprowadziłyby stan dostępny (*na stanie − zarezerwowane + oczekiwane*, zob. [raporty i rejestry](reports-and-ledgers.md#rejestry)) towaru w tej lokalizacji poniżej zera.

Gdy zapis narusza włączone ograniczenie, jest odrzucany z komunikatem wyjaśniającym.

## Koordynaty

Karta lokalizacji ma zakładkę **„Koordynaty”** z polami **„Szerokość”** i **„Długość”** oraz mapą. Koordynaty można wprowadzić ręcznie lub wyliczyć automatycznie z adresu (wymaga to skonfigurowanego klucza Google Maps API). Zakładka jest przydatna dla sieci dystrybucyjnych, w których lokalizacje są rozproszone geograficznie.

## Dostęp pracowników

Dostęp do lokalizacji można ograniczyć per pracownik:

- na karcie pracownika znajduje się zakładka **„Lokalizacje”**, na której wyświetlane jest drzewo lokalizacji z polami wyboru dostępu;
- ograniczenie dotyczy „własnej” lokalizacji dokumentu (lokalizacji przyjęcia, lokalizacji źródłowej wydania itp.): można tam wybrać tylko dostępne lokalizacje, a listy dokumentów są odpowiednio filtrowane;
- jeśli użytkownik ma dostęp do dokładnie jednej lokalizacji, jest ona automatycznie podstawiana w nowych dokumentach;
- lokalizacja **docelowa** [przemieszczenia](transfers.md) nie jest ograniczana — można przemieścić towar do lokalizacji, do której użytkownik nie ma dostępu, ale takie przemieszczenie wymaga wtedy [akceptacji w miejscu docelowym](shipments.md#akceptacja-w-miejscu-docelowym).

## Lokalizacja produktów

Formularz **„Magazynowanie” → „Konfiguracja” → „Lokalizacja produktów”** przypisuje towarom domyślną **lokalizację**. Wybierz lokalizację i oznacz towary tam przechowywane — przypisanie jest widoczne także na karcie towaru (zakładka **„Lokalizacja produktów”**). Jest ono używane jako podpowiedź/wartość domyślna przy dodawaniu towarów do dokumentów.

## Import i eksport

Na potrzeby wstępnej konfiguracji i migracji danych lokalizacje można eksportować do Excela i importować z niego (ID, nazwa, rodzic, firma-posiadacz, pola adresowe, flaga kalkulacji kosztów). Akcje te znajdują się na formularzu migracji danych, a nie w nawigatorze Magazynowania; korzystają z nich zwykle administratorzy.

## Typowe zasady

- Przy wyborze lokalizacji w dokumencie upewnij się, że odpowiada Twojemu procesowi (np. [wydanie](shipments.md) nie powinno być realizowane ze „strefy przyjęć”, jeśli jest to zabronione procedurami).
- Jeśli dokument nie może zostać zaksięgowany z powodu braku lokalizacji, sprawdź, czy lokalizacja w nagłówku dokumentu jest wypełniona.
- Lokalizacji nie można usunąć, dopóki ma podrzędne lokalizacje.
