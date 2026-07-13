---
title: Ustawienia magazynowania
---

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Konfiguracja” → „Ustawienia”**.

## Co zwykle jest konfigurowane

- typy [przyjęć](receipts.md) i [wydań](shipments.md) (ich numeracja, domyślne lokalizacje, maksymalna ilość i inne flagi);
- użycie [przemieszczeń](transfers.md) (typ [wydania](shipments.md) z flagą **„Przemieszczanie”**);
- typy [odpadu](scrap.md);
- czy włączone są **[partie](lots-and-packages.md)** (globalny przełącznik **„Partii”**) oraz opcje partii i numerów seryjnych na poziomie kategorii/towaru;
- przekrojowe flagi, takie jak **„Zakaz używania wielu lokalizacji korzeni”**;
- przelokacyjne przełączniki **„Zakaz ujemnych stanów”** i **„Uniemożliw rezerwację większej ilości niż dostępna”** ustawia się na samej karcie [lokalizacji](locations.md) (zobacz poniżej o ograniczeniach rejestrów).

## Typy przyjęć

Ustawienia zawierają katalog **typów przyjęć**. Typ przyjęcia określa, jak użytkownicy pracują z dokumentem.

Typ przyjęcia definiuje:

- **„Licznik”** — jak generowany jest numer dokumentu;
- **„Lokalizacja”** (domyślna) — jaka [lokalizacja](locations.md) jest ustawiana w nowych dokumentach;
- **„Maksymalna ilość”** — górny limit dla pola „Zaplanowana ilość” w pozycjach;
- **„Tylko jedna linia dla jednego towaru”** — zabrania dodania tego samego towaru w dwóch pozycjach;
- **„Nie sprawdzaj przyjętej ilości”** — pozwala zakończyć przyjęcie, którego przyjęta ilość różni się od zaplanowanej, bez ostrzeżenia;
- **„Odłożenie”** — włącza etap odłożenia (zobacz [przyjęcia](receipts.md));
- **„Pokaż koszt”** — dodaje do pozycji przyjęcia kolumnę **„Koszt”** do ręcznego wprowadzania kosztu przychodowego (zobacz [kalkulacja kosztu pozycji](costing.md));
- **„Pokaż pakiety”** — dodaje do pozycji kolumny jednostek opakowania (zobacz [Liczba pakietów](product-sku.md#alternatywa-ewidencja-w-opakowaniach-pakietach-w-dokumentach));
- **„Zwiększ dostępny stan”** — przyjęcia tego typu w statusie **„Gotowy”** zwiększają ilość *oczekiwaną* w rejestrze rezerwacji, więc towar liczy się do dostępności jeszcze zanim fizycznie dotrze;
- sekcja **„Zwrot”** — typ [wydania](shipments.md) używany do zwrotu towaru do dostawcy oraz flaga **„Sprawdź zwróconą ilość”**, która zabrania zwrócić więcej, niż przyjęto.

Jeżeli w systemie jest dokładnie jeden typ przyjęcia, jest on podstawiany do nowych dokumentów automatycznie.

## Typy wydań

Ustawienia zawierają katalog **typów wydań**.

Typ wydania definiuje:

- **„Licznik”**;
- **„Lokalizacja (skąd)”** (domyślna);
- **„Lokalizacja (dokąd)”** (domyślna; istotna dla przemieszczeń);
- flagę **„Przemieszczanie”** — włącza tryb „lokalizacja źródłowa → lokalizacja docelowa”;
- **„Maksymalna ilość”** — górny limit dla pola „Zaplanowana ilość” w pozycjach;
- **„Tylko jedna linia dla jednego towaru”** — zabrania dodania tego samego towaru w dwóch pozycjach;
- **„Nie sprawdzaj wydanej ilości”** — pozwala zakończyć wydanie, którego wydana ilość różni się od zaplanowanej, bez ostrzeżenia;
- **„Kompletacja”** — pokazuje na karcie wydania zakładkę **„Kompletacja”** (dostępność/rezerwacja wg lokalizacji, zobacz [kompletacja](picking.md));
- **„Zadanie kompletacyjne”** — ustawia wartość domyślną flagi „Zadanie kompletacyjne” na wydaniu, która powoduje tworzenie [zadań kompletacyjnych](picking.md);
- **„Pokaż pakiety”** — dodaje do pozycji kolumny jednostek opakowania;
- sekcja **„Zwrot”** — typ [przyjęcia](receipts.md) używany do zwrotów od klienta oraz flaga **„Sprawdź zwróconą ilość”**.

Walidacja:

- dla przemieszczeń domyślna lokalizacja źródłowa i docelowa nie mogą być takie same.

## Typy odpadu

Katalog **typów [odpadu](scrap.md)** klasyfikuje przyczyny odpisów (na przykład „Uszkodzenia”, „Straty”, „Przeterminowanie”). Typ odpadu definiuje własny **licznik** (regułę numeracji) i domyślną **lokalizację**.

## Typy korekt zapasów

[Korekty zapasów](adjustments.md) używają stałej listy typów, które sterują sposobem wypełniania pozycji:

- **„Wszystkie”** — liczone są wszystkie towary ze stanem w lokalizacji;
- **„Według kategorii”** — liczone są tylko towary wybranej kategorii;
- **„Ręcznie”** — pozycje wprowadza się ręcznie (lub przez zakładkę wyszukiwania/kod kreskowy).

## Ograniczenia rejestrów (na lokalizację)

Na każdej [lokalizacji](locations.md) można włączyć dwa opcjonalne ograniczenia:

- **„Zakaz ujemnych stanów”** — system nie zezwoli na operacje, które sprowadzą fizyczny stan towaru w tej lokalizacji poniżej zera.
- **„Uniemożliw rezerwację większej ilości niż dostępna”** — system nie zezwoli, aby stan dostępny (*na stanie − zarezerwowane + oczekiwane*) towaru w tej lokalizacji spadł poniżej zera.

Obie flagi są dziedziczone przez lokalizacje podrzędne. Po włączeniu odpowiednie zapisy w rejestrze stanów lub rejestrze rezerwacji są blokowane z odpowiednim komunikatem.

## Rekomendowana kolejność konfiguracji

1. Skonfiguruj [lokalizacje](locations.md) (w tym flagę **„Kalkulacja kosztów”** i ograniczenia rejestrów).
2. Skonfiguruj typy dokumentów ([przyjęcia](receipts.md)/[wydania](shipments.md)/[przemieszczenia](transfers.md)/[odpad](scrap.md)).
3. Jeśli potrzebne, włącz [partie](lots-and-packages.md) globalnie i skonfiguruj opcje partii/numerów seryjnych na poziomie kategorii/towaru.
4. Przejrzyj [raporty i rejestry](reports-and-ledgers.md) oraz prawa dostępu (w tym [dostęp pracowników do lokalizacji](locations.md#dostęp-pracowników)).
