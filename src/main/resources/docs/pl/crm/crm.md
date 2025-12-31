---
title: Dokumentacja użytkownika do pracy z leadami
---

Ten zestaw dokumentów opisuje pracę użytkownika końcowego z leadami: listę i kartę leadu, tablicę statusów (kanban), obsługę połączeń i e‑maili, tworzenie powiązanych dokumentów, raportowanie oraz konfigurację danych referencyjnych.

## Pierwsze kroki

1. Otwórz sekcję **„Leady”** (w drzewie nawigacji znajduje się w grupie **„Operacje”**).
2. Utwórz lead (przycisk **„Nowy”** na liście).
3. Uzupełnij minimum, aby lead był łatwy do prowadzenia:
   - **Nazwa**
   - **Sprzedawca**
   - **Typ leadu** i **Status leadu** (jeśli lejek jest skonfigurowany)
   - jeśli dostępne — **[Partner](../masterdata/partners.md)**, **Telefon**, **Email**
4. Do kontroli używaj:
   - filtrów **„Otwarta”**, **„Zamknięta”**, **„Moje leady”**;
   - zakładki **[„Kanban”](kanban.md)** (kolumny wg statusu, szybkie przeciąganie między etapami).

Szczegółowe instrukcje:

- [Leady: lista i karta](leads.md)
- [Tablica leadów (kanban)](kanban.md)
- [Komunikacja: połączenia i e‑maile](communications.md)
- [Zamówienia i faktury z leadu](sales-and-documents.md)
- [Raport leadów](reports.md)
- [Ustawienia i dane referencyjne](settings.md)

## Terminy i wskazówki

#### Lead

Potencjalna sprzedaż lub zapytanie, które przechodzi przez etapy pracy (statusy). Lead może być powiązany z [partnerem](../masterdata/partners.md), pracownikiem‑właścicielem, priorytetem i zestawem tagów.

#### Typ leadu

Klasyfikacja leadu. Typ wpływa na to, które statusy są dozwolone dla leadu.

#### Status leadu

Etap pracy z leadem. Status może być „zamknięty” (takie statusy nie są pokazywane na tablicy leadów).

#### Porażka i powód porażki

Specjalny sposób zamknięcia leadu: użytkownik oznacza lead jako **Porażka** i wybiera **Powód porażki**. Następnie lead otrzymuje status skonfigurowany w ustawieniach jako „Porażka”.

#### Priorytet leadu

Ważność leadu. Priorytet może mieć oznaczenie kolorem (np. do szybkiego wyszukiwania wizualnego na liście).

#### Tagi leadu

Tagi służą do grupowania leadów (np. „targi”, „follow‑up”, „pilne”). Tagi mogą mieć również kolory.

## Typowe scenariusze

1. **Przyszło połączenie / e‑mail** → utwórz lead z komunikacji albo dołącz komunikację do istniejącego leadu → następnie prowadź lead przez statusy.
2. **Potrzebny jest dokument** → z leadu utwórz **[zamówienie sprzedaży](../sales/orders.md)** lub **[fakturę](../sales/invoices.md)** (jeśli skonfigurowano) → kontroluj dokumenty powiązane w karcie leadu.
3. **Trzeba przeanalizować lejek** → użyj **[Raportu leadów](reports.md)** i filtrów interwału dat.

## Uwagi

- Dostępność zakładek i akcji zależy od uprawnień użytkownika i konfiguracji (np. aby utworzyć [zamówienie sprzedaży](../sales/orders.md)/[fakturę](../sales/invoices.md), muszą być ustawione odpowiednie typy dokumentów).
- Ta dokumentacja używa nazw sekcji/pól/przycisków tak, jak są pokazane w UI.

## Role i odpowiedzialności

#### Sprzedawca

Odpowiada za:

- tworzenie i prowadzenie leadów;
- aktualizowanie statusu;
- zapisywanie ustaleń w „Opis”;
- zamykanie leadu jako sukces lub przez **Porażka** z powodem.

#### Menedżer

Odpowiada za:

- konfigurację lejka (statusy, typy, powody porażki);
- kontrolę jakości danych leadów;
- analizę raportów i obciążenia pracy menedżerów.

## Dzienna rutyna

1. Otwórz sekcję „Leady” i włącz filtry „Otwarta” oraz „Moje leady”.
2. Przejrzyj leady bez spodziewanego zamknięcia i bez uzupełnionego opisu — to pierwsi kandydaci do doprecyzowania.
3. Przełącz się na tablicę leadów i sprawdź, czy jakieś leady nie są „utknięte” w jednym statusie.
4. Przetwarzaj zakładki „Połaczenia” i „Email” (jeśli dostępne):
   - twórz leady z nowych zapytań;
   - dołączaj komunikację do istniejących leadów;
   - oznaczaj „Ignorowany”, jeśli zapytanie nie dotyczy sprzedaży.
5. Zapisz następny krok w opisie leadu (co zrobić i kiedy).

## FAQ

#### Dlaczego nie widzę przycisku do utworzenia [zamówienia sprzedaży](../sales/orders.md) lub [faktury](../sales/invoices.md)?

Sprawdź w **„CRM → Konfiguracja → Ustawienia”** czy parametry **„Typ zamówienia”** oraz **„Typ faktury”** są ustawione. Jeśli parametry nie są ustawione albo nie masz uprawnień, przyciski nie są pokazywane.

#### Dlaczego nie mogę zapisać leadu po zmianie typu?

Typ leadu może ograniczać dozwolone statusy. Po zmianie typu wybierz status, który jest dozwolony dla tego typu.

#### Dlaczego tablica leadów nie jest widoczna?

Najczęściej powodem jest to, że statusy są oznaczone jako „Zamknięta” albo statusy nie są dozwolone dla wybranego typu leadu.