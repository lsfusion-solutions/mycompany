---
title: Wydania z faktury
---

System może wspierać scenariusz, w którym [wydanie](../inventory/shipments.md) jest tworzone **z [faktury](invoices.md)**.

Jest to wygodne, gdy faktura jest dokumentem „głównym”, a dokument magazynowy wydania jest tworzony później.

## Kiedy tworzenie jest dostępne

Przycisk **„Utwórz wydanie”** na karcie faktury jest dostępny, jeśli:

- faktura jest **aktywna** — tzn. w statusie **„Do zapłaty”** lub późniejszym i nie jest Anulowana (dla faktury w statusie **Projekt** przycisk nie jest wyświetlany);
- dla [typu faktury](settings.md) ustawiono typ wydania (zobacz [Ustawienia Magazynowania](../inventory/settings.md));
- faktura ma linie do wydania (ilość „do wydania” jest większa od zera).

Jeśli wydanie zostało już utworzone dla wszystkich pozycji, przycisk nie jest wyświetlany.

Uwaga o ilościach: ilość „do wydania” jest wyrażona w jednostkach magazynowych. Gdy jednostka sprzedaży towaru różni się od jego jednostki magazynowej, ilość w wydaniu to ilość z faktury pomnożona przez współczynnik SKU towaru, więc ilości na fakturze i w wydaniu mogą się zasadnie różnić.

## Co robi system podczas tworzenia

Podczas tworzenia wydania z faktury system:

1. Tworzy nowy dokument wydania.
2. Kopiuje kluczowe pola z faktury:
   - [partnera](../masterdata/partners.md);
   - [dział](../masterdata/departments.md) (jeśli używany);
   - [lokalizację](../inventory/locations.md);
   - adres dostawy.
3. Tworzy linie wydania na podstawie linii faktury:
   - uwzględniane są tylko linie towarowe (towary);
   - ilość w wydaniu jest równa ilości „do wydania” w linii faktury;
   - linia wydania jest powiązana z linią faktury.
4. Otwiera utworzone wydanie do dalszej pracy.

## Automatyczne tworzenie wydania

[Typ faktury](settings.md) może mieć ustawienie **„Automatycznie utwórz wydanie”**.

Jeśli jest włączone, wydanie jest tworzone automatycznie **w momencie osiągnięcia przez fakturę statusu „Do zapłaty”**. Dodanie linii towarowych do faktury będącej już w statusie „Do zapłaty” również uruchamia tworzenie; dodanie linii do faktury w statusie Projekt tego nie robi (faktura musi być już w statusie „Do zapłaty”).

## Synchronizacja zmian

Gdy wydanie zostało utworzone automatycznie (tzn. typ ma ustawione **Automatycznie utwórz wydanie**), a faktura jest powiązana z pojedynczym wydaniem, system utrzymuje spójność obu dokumentów:

- jeśli faktura została anulowana — wydanie jest anulowane automatycznie;
- jeśli zmieniono klienta — jest on aktualizowany w wydaniu;
- jeśli zmieniono ilość w linii faktury — aktualizowana jest ilość wydawana w powiązanej linii wydania;
- jeśli zmieniono towar w linii faktury — aktualizowany jest towar w powiązanej linii wydania.

Reguły te dotyczą wyłącznie wydań utworzonych automatycznie; wydanie utworzone ręcznie akcją **„Utwórz wydanie”** nie jest ponownie synchronizowane.

Znaczenie praktyczne: wydanie utworzone automatycznie pozostaje spójne z fakturą podczas pracy z dokumentami.

## Ręczna edycja wydania

Wydanie utworzone z faktury można uzupełniać ręcznie — na przykład gdy do faktury dodano kolejny towar, a tę samą pozycję wprowadzono do już istniejącego wydania. Linia wydania dodana ręcznie jest automatycznie wiązana z pierwszą linią faktury z tym samym towarem. Dzięki temu ilość „do wydania” na fakturze zmniejsza się tak samo, jak dla linii utworzonych akcją **„Utwórz wydanie”**:

- powiązanie jest ustawiane przy zapisie dokumentu i nie zależy od kolejności działań: jeśli towar dodano najpierw do wydania, a dopiero potem do faktury, linia wydania zostaje powiązana z dodaną linią faktury;
- ilość wydana jest liczona ze wszystkich powiązanych linii, dlatego gdy na fakturze zwiększono ilość, w wydaniu można zmienić ilość w istniejącej linii albo dodać osobną linię na różnicę;
- linia z towarem, którego nie ma na fakturze, pozostaje niepowiązana i nie wpływa na ilość „do wydania”;
- jeśli ten sam towar występuje w kilku liniach faktury, linie wydania dodane ręcznie są wiązane z pierwszą z nich; pozostałą ilość z innych linii wydaj akcją **„Utwórz wydanie”**;
- dla typu faktury z ustawieniem **Automatycznie utwórz wydanie** powiązaną linię zaczynają obejmować reguły synchronizacji: zmiana ilości lub towaru w linii faktury jest przenoszona do linii wydania.

Reguła dotyczy tylko wydania, które jest już powiązane z fakturą (ma co najmniej jedną linię powiązaną z linią tej faktury). Wydanie utworzone w całości ręcznie nie jest wiązane z fakturą — użyj akcji **„Utwórz wydanie”** albo utwórz fakturę z wydań (patrz niżej). Jeśli do wydania, do którego wystawiono już fakturę, zostanie później dodana linia z towarem z tej faktury, również zostanie z nią powiązana i nie trafi do następnej faktury.

## Typowy scenariusz

1. Otwórz fakturę.
2. Kliknij **„Utwórz wydanie”**.
3. Sprawdź lokalizację i adres dostawy.
4. Sprawdź ilości w liniach (czy wydawane jest dokładnie to, co potrzebne).
5. Zaksięguj/potwierdź wydanie.

## Wydanie planowane vs. natychmiastowe

Wydanie utworzone z faktury może być **planowane** albo **natychmiastowe**. Tryb określany jest flagą **„Utwórz wydanie planowane”** na [typie faktury](settings.md):

- jeśli flaga jest **włączona**, utworzone wydanie to zwykłe planowane [wydanie](../inventory/shipments.md) — ilości „do wydania” stają się **zapotrzebowaniem początkowym** linii wydania, a dokument przechodzi standardowy cykl Oczekiwanie / Gotowe / Wykonano;
- jeśli flaga jest **wyłączona**, utworzone wydanie jest oznaczone jako natychmiastowe: ilości „do wydania” są zapisywane wprost w liniach jako **wykonane**, a wydanie jest przenoszone do **„Wykonano”** w chwili utworzenia. W tym trybie wydanie jest w istocie biernym zapisem tego, co faktura już zadeklarowała jako wydane.

## Odwrotny kierunek: faktura z wydań

Obsługiwany jest również odwrotny scenariusz — [faktura](invoices.md) może być utworzona z jednego lub wielu już istniejących wydań. Akcja znajduje się na liście wydań i zwykle nazywa się **„Utwórz fakturę”**:

1. Otwórz listę wydań.
2. Zaznacz jedno lub kilka wydań tego samego klienta.
3. Uruchom **„Utwórz fakturę”** — system utworzy nową fakturę w stanie „Projekt”. Agreguje ilości wykonane z wybranych wydań **według towaru** i uwzględnia tylko te linie wydań, które nie są jeszcze powiązane z linią faktury; nagłówek faktury (klient, dział, lokalizacja) jest pobierany z jednego z wybranych wydań, dlatego najlepiej wybierać wydania o tych samych wartościach tych pól.

Jest to wygodne, gdy magazyn najpierw dokumentuje wydanie, a faktura jest wystawiana później.

Zobacz także: [Fakturowanie → Faktury](invoices.md); [Magazynowanie → Wydania](../inventory/shipments.md).