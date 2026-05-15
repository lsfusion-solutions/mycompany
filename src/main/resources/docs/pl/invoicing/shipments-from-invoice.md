---
title: Wydania z faktury
---

System może wspierać scenariusz, w którym [wydanie](../inventory/shipments.md) jest tworzone **z [faktury](invoices.md)**.

Jest to wygodne, gdy faktura jest dokumentem „głównym”, a dokument magazynowy wydania jest tworzony później.

## Kiedy tworzenie jest dostępne

Przycisk tworzenia wydania na karcie faktury jest zwykle dostępny, jeśli:

- faktura jest aktywna (nie ma statusu Anulowan);
- dla [typu faktury](settings.md) ustawiono typ wydania (zobacz [Ustawienia Magazynowania](../inventory/settings.md));
- faktura ma linie do wydania (ilość „do wydania” jest większa od zera).

Jeśli wydanie zostało już utworzone dla wszystkich pozycji, przycisk nie jest wyświetlany.

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

Jeśli jest włączone, gdy faktura przechodzi do stanu gotowości (lub gdy pojawiają się linie towarowe), system automatycznie tworzy wydanie.

## Synchronizacja zmian

Jeśli wydanie zostało utworzone automatycznie, system może w niektórych przypadkach utrzymywać spójność faktury i wydania:

- jeśli faktura została anulowana i istniało tylko jedno wydanie — wydanie jest anulowane automatycznie;
- jeśli zmieniono partnera i istniało tylko jedno wydanie — partner jest aktualizowany w wydaniu;
- jeśli zmieniono towar lub ilość w linii faktury — towar i ilość są aktualizowane w linii wydania.

Znaczenie praktyczne: wydanie pozostaje spójne z fakturą podczas pracy z dokumentami.

## Typowy scenariusz

1. Otwórz fakturę.
2. Kliknij **„Utwórz wydanie”**.
3. Sprawdź lokalizację i adres dostawy.
4. Sprawdź ilości w liniach (czy wydawane jest dokładnie to, co potrzebne).
5. Zaksięguj/potwierdź wydanie.

## Wydanie planowane vs. natychmiastowe

Wydanie utworzone z faktury może być **planowane** albo **natychmiastowe**. Tryb określany jest flagą **„Wydanie planowane”** na [typie faktury](settings.md):

- jeśli flaga jest **włączona**, utworzone wydanie to zwykłe planowane [wydanie](../inventory/shipments.md) i przechodzi standardowy cykl Oczekiwanie / Gotowe / Wykonano;
- jeśli flaga jest **wyłączona**, utworzone wydanie jest oznaczone jako natychmiastowe i automatycznie przenoszone do **„Wykonano”** w chwili utworzenia. W tym trybie wydanie jest w istocie biernym zapisem tego, co faktura już zadeklarowała jako wydane.

## Odwrotny kierunek: faktura z wydań

Obsługiwany jest również odwrotny scenariusz — [faktura](invoices.md) może być utworzona z jednego lub wielu już istniejących wydań. Akcja znajduje się na liście wydań i zwykle nazywa się **„Utwórz fakturę”**:

1. Otwórz listę wydań.
2. Zaznacz jedno lub kilka wydań tego samego klienta, jeszcze niepowiązanych z fakturą.
3. Uruchom **„Utwórz fakturę”** — system utworzy nową fakturę w stanie „Projekt”, której linie odwołują się do linii wybranych wydań.

Jest to wygodne, gdy magazyn najpierw dokumentuje wydanie, a faktura jest wystawiana później.

Zobacz także: [Fakturowanie → Faktury](invoices.md); [Magazynowanie → Wydania](../inventory/shipments.md).