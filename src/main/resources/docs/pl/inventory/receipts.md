---
title: Przyjęcia
---

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Operacje” → „Przyjęcia”**.

## Cel

Przyjęcie rejestruje towar wchodzący do [lokalizacji](locations.md).

Dokument służy do:

- rejestrowania planowanych i faktycznych ilości do przyjęcia;
- przyjmowania towaru do konkretnej [lokalizacji](locations.md);
- w razie potrzeby — rozmieszczenia (odłożenia) do stref/miejsc składowania (ewidencja adresowa);
- tworzenia ruchów zapasów oraz (jeśli włączone) ruchów kosztowych.

## Lista przyjęć

Lista zwykle pokazuje:

- numer;
- planowaną datę i czas;
- typ przyjęcia;
- dostawcę (jeśli używane);
- [lokalizację](locations.md);
- notatkę;
- liczbę pozycji.

Nad listą znajdują się filtry według **przedziału dat**, **typu**, **lokalizacji** i **dostawcy**.

### Akcje listy

- **Tworzenie**, **otwieranie**, **usuwanie** dokumentów (jeśli dozwolone przez status i uprawnienia).
- **„Nieplanowane przyjęcie”** — tworzy przyjęcie z ustawioną flagą **„Nieplanowane”**; takie przyjęcie pomija etap **„Gotowy”** i może zostać zatwierdzone bezpośrednio ze statusu Projekt.
- Akcje masowe na **zaznaczonych** dokumentach: **„Oznacz jako Do zrobenia”**, **„Zatwierdź”**, **„Kopiuj”** (kopiuje zaznaczone przyjęcia na nową datę) i **„Usuń”**.
- Jeżeli używane są przemieszczenia z potwierdzeniem w miejscu docelowym, lista ma także zakładkę **„Potwierdzenie akceptacji”** pokazującą przychodzące [przemieszczenia](transfers.md) oczekujące na akceptację w Twojej lokalizacji (zobacz [Wydania](shipments.md#akceptacja-w-miejscu-docelowym)).

## Karta przyjęcia

### Pola nagłówka

W nagłówku zwykle wypełnia się:

- **Typ** — wpływa na numerację, domyślną [lokalizację](locations.md) i ograniczenia;
- **Zaplanowana data** — planowany czas przyjęcia;
- **Numer** — generowany przez regułę numeracji;
- **Dostawca** (jeśli używane);
- **Lokalizacja** — wymagane;
- **Odnośnik dostawcy** (np. numer dokumentu dostawy dostawcy — jeśli używane);
- **Notatka**.

Wskazówka praktyczna: najpierw wybierz typ i [lokalizację](locations.md) — wtedy łatwiej dodawać pozycje.

### Pozycje przyjęcia

Pozycje zawierają towary i ilości.

Typowe pola pozycji:

- **Towar** — wymagane;
- **JM** — pobierane z kartoteki towaru;
- **Kod kreskowy** (jeśli używane);
- **Kod towaru** (jeśli używane);
- **Odnośnik wewnętrzny/SKU** (jeśli używane);
- **Koszt** — pokazywany, gdy typ przyjęcia ma flagę **„Pokaż koszt”**; pozwala ręcznie wprowadzić koszt przychodowy pozycji (zobacz [kalkulacja kosztu pozycji](costing.md));
- kolumny opakowań (**„Typ opakowania”**, **„Liczba pakietów”**, **„Ilość w pakiecie”**) — pokazywane, gdy typ przyjęcia ma flagę **„Pokaż pakiety”** (zobacz [Liczba pakietów](product-sku.md#alternatywa-ewidencja-w-opakowaniach-pakietach-w-dokumentach)).

#### Pole „Zaplanowana ilość”

Dla przyjęć, które nie są realizowane natychmiast, używa się pola **„Zaplanowana ilość”**:

- to planowana ilość dla pozycji;
- pole może być wyróżniane w statusie Projekt, aby przypominać o uzupełnieniu.

Ograniczenie:

- wartość musi mieścić się pomiędzy `0` a **maksymalną ilością** zdefiniowaną w typie przyjęcia;
- po przekroczeniu dokumentu nie da się zapisać.

#### Ograniczenie „Tylko jedna linia dla jednego towaru”

Dla niektórych typów przyjęć można włączyć regułę:

- ten sam towar nie może być dodany w dwóch pozycjach;
- przy próbie dodania duplikatu system wyświetla błąd.

### Zakładka wyszukiwania i wprowadzanie kodem kreskowym

Karta przyjęcia ma zakładkę **„Wyszukaj”** do szybkiego wprowadzania pozycji:

- towary wyszukuje się według kategorii i atrybutów, z wyświetlanymi na bieżąco ilościami **na stanie / oczekiwanymi / dostępnymi**;
- planowaną lub przyjętą ilość można wprowadzić bezpośrednio z wyników wyszukiwania — odpowiednia pozycja jest tworzona automatycznie;
- zakładka **„Linie”** ma także pole wprowadzania kodu kreskowego: zeskanowanie kodu towaru dodaje pozycję (lub zwiększa ilość istniejącej).

### Pozostałe zakładki

Oprócz **„Linii”** karta ma zakładki **„Historia”** (dziennik zmian: kto i kiedy zmienił status, daty i pozycje), **„Komentarze”** (komentarze z formatowaniem i wzmiankami) oraz **„Pliki”** (załączniki). Gdy włączone są odpowiednie funkcje, pojawiają się zakładki **„Partie”**, **„Pakiety”** i **„Odłożenie”** (patrz niżej).

## Statusy i etapy

Poniżej znajduje się zestaw statusów **dokładnie taki, jak wynika z kodu źródłowego**.

1. **„Projekt”** — wprowadzanie danych.
2. **„Gotowy”** — dokument oznaczony do wykonania.
3. **„Wykonano”** — przyjęcie potwierdzone; zapisywana jest data zakończenia.
4. **„Odłożenie”** — rozmieszczenie do lokalizacji podrzędnych.
   - dostępne **tylko jeśli** typ przyjęcia włącza odłożenie;
   - system sprawdza, że docelowa [lokalizacja](locations.md) jest dzieckiem lokalizacji dokumentu oraz że łączna ilość odłożona nie przekracza ilości przyjętej.
5. **„Anulowan”** — dokument anulowany.

### Akcje przejścia statusu

W karcie przyjęcia dostępne są następujące przyciski akcji, które przenoszą dokument między statusami:

- **„Oznacz jako Do zrobenia”** — przenosi dokument z **„Projekt”** do **„Gotowy”** (dostępne także jako akcja masowa na liście przyjęć). Dla typów przyjęć z flagą **„Zwiększ dostępny stan”** przyjęcie w statusie **„Gotowy”** zwiększa ilość *oczekiwaną* w rejestrze rezerwacji, więc przychodzący towar już liczy się do dostępności.
- **„Zatwierdź”** — potwierdza realizację i przenosi dokument do **„Wykonano”**; data wykonania ustawia się automatycznie. Przycisk wyświetla się, gdy dokument jest w statusie **„Gotowy”** (typowy przebieg: Projekt → „Oznacz jako Do zrobenia” → Gotowy → „Zatwierdź”). Dla przyjęć **natychmiastowych** — których flaga **„Nieplanowane”** jest ustawiona na samym przyjęciu (powstających także w wyniku akcji **„Nieplanowane przyjęcie”** z listy przyjęć) — ten sam przycisk pokazuje się również bezpośrednio ze statusu **„Projekt”**, ponieważ takie przyjęcia pomijają etap Gotowy. Na liście dostępna jest akcja masowa o tej samej nazwie. Polecenie pomocnicze **„Wypełnij ilości (wykonane)”** jednym kliknięciem kopiuje ilość planowaną do ilości wykonanej dla wszystkich pozycji. Jeżeli przyjęta ilość różni się od zaplanowanej, system ostrzega o różnicy — chyba że na typie przyjęcia ustawiono flagę **„Nie sprawdzaj przyjętej ilości”**.
- **„Odłożenie”** — dla typów przyjęć obsługujących odłożenie przenosi dokument z **„Wykonano”** do **„Odłożenie”** po wypełnieniu pozycji odłożenia.
- **„Anuluj”** — przenosi dokument do **„Anulowan”**.
- **„Kopiuj”** — tworzy nowe przyjęcie w statusie Projekt z tym samym nagłówkiem i pozycjami.

## Odłożenie (ewidencja adresowa)

Jeśli używana jest ewidencja adresowa, po przyjęciu wykonuje się odłożenie do miejsc składowania:

- zakładka **„Odłożenie”** pokazuje, per pozycja, do których podrzędnych [lokalizacji](locations.md) trafia przyjęta ilość;
- akcja pomocnicza **„Odłóż (+)”** wypełnia pozostałą ilość;
- gdy używane są [partie](lots-and-packages.md), odłożenie można uszczegółowić według partii (akcja **„Wybierz”** wstępnie wypełnia partie na podstawie przyjętych ilości).

Rekomendacja: najpierw zakończ przyjęcie (potwierdź fakt), a dopiero potem wykonaj odłożenie — ułatwia to kontrolę rozbieżności.

## Partie na przyjęciach

Gdy dla towaru włączona jest [ewidencja partii](lots-and-packages.md), karta przyjęcia otrzymuje zakładkę **„Partie”**:

- dla każdej pozycji wskazuje się partie i ich ilości;
- akcja **„Wygeneruj”** tworzy partie automatycznie, używając licznika i prefiksu skonfigurowanych na kategorii towaru. Dla towarów z włączonymi **„Numery seryjny”** generowana jest jedna partia na sztukę (każda z ilością 1); w przeciwnym razie jedna partia otrzymuje całą pozostałą ilość;
- zeskanowanie kodu kreskowego partii przypisuje partię do pozycji; nieznane kody automatycznie tworzą nową partię;
- etykiety partii można drukować per pozycja (zobacz [partie i pakiety](lots-and-packages.md)).

## Pakiety na przyjęciach

Jeżeli używany jest katalog [pakietów](lots-and-packages.md#pakiety), karta otrzymuje zakładkę **„Pakiety”**, na której istniejące pakiety są wiązane z przyjęciem (**„Dodaj”** / **„Usuń”**). Pozycje pakietu są pokazywane w celach poglądowych i śledzenia; stany są nadal księgowane z własnych ilości pozycji przyjęcia.

## Zwroty do dostawcy

Jeżeli typ przyjęcia jest powiązany z typem [wydania](shipments.md) zwrotnego (sekcja **„Zwrot”** w ustawieniach typu), na aktywnych przyjęciach dostępna jest akcja **„Zwrot”**:

- otwiera ona nowe wydanie zwrotne wstępnie wypełnione lokalizacją i towarami przyjęcia;
- kolumna **„Zwrócone”** w pozycjach przyjęcia pokazuje ilość już zwróconą, a okno **„Korekty zakupu”** wyświetla powiązane wydania zwrotne;
- przy włączonej fladze **„Sprawdź zwróconą ilość”** na typie przyjęcia system zabrania zwrócić więcej, niż przyjęto.

## Tworzenie przyjęć z zamówień zakupu

Jeżeli używany jest moduł Zakupy, a typ zamówienia zakupu jest powiązany z typem przyjęcia, zatwierdzenie zamówienia zakupu automatycznie tworzy powiązane przyjęcie w statusie **„Gotowy”** z pozycjami zamówienia. Lista przyjęć pokazuje wtedy źródłowe **„Zamówienie”**, a karta zamówienia — swoje **„Przyjęcia”**. Ograniczenia mogą zabraniać blokowania zamówień, które mają aktywne przyjęcia lub nie zostały w pełni przyjęte.

## Drukowanie

- **„Drukuj”** — drukuje przyjęcie według konfigurowalnego szablonu (szablony przypisuje się per typ przyjęcia w ustawieniach).
- **„Etykiety”** — drukuje etykiety towarów dla przyjętych pozycji (jedna etykieta na przyjętą sztukę).

## Import stanów początkowych

Na potrzeby uruchomienia systemu początkowe stany magazynowe można zaimportować z Excela (**„Import stanów magazynowych”** na formularzu migracji danych): plik zawiera lokalizację, towar i ilość (opcjonalnie koszt), a system tworzy przyjęcia początkowe. Odwrotna akcja **„Eksport stanów magazynowych”** eksportuje bieżące stany do Excela.

## Typowe problemy

- **Nie można zapisać pozycji** — „Zaplanowana ilość” jest poza limitami zdefiniowanymi w typie przyjęcia.
- **Nie można dodać tego samego towaru w drugiej pozycji** — w typie przyjęcia włączono „Tylko jedna linia dla jednego towaru”.
- **Nie można zakończyć** — brakuje [lokalizacji](locations.md) lub są pozycje bez ilości.
- **Ilości faktyczne nie zgadzają się** — sprawdź wprowadzone dane i jednostki miary.
- **System ostrzega o różnicy ilości przy zakończeniu** — przyjęta ilość różni się od zaplanowanej; popraw ilości albo włącz na typie flagę **„Nie sprawdzaj przyjętej ilości”**.
