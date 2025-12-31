---
title: Faktury zakupu dla zamówień zakupu
---

Faktura zakupu rejestruje zakup w rozliczeniach oraz kwotę do zapłaty [dostawcy](../masterdata/partners.md). W praktyce faktura zakupu jest często tworzona z zamówienia zakupu, aby pola nagłówka i linie zostały automatycznie przeniesione.

## Gdzie znaleźć

Faktury zakupu są zwykle dostępne w: **[„Fakturowanie”](../invoicing/invoicing.md) → „Operacje” → „Faktury zakupu”**.

Jeśli w konfiguracji włączono powiązanie z zamówieniami zakupu, fakturę zakupu można również utworzyć z karty **[zamówienia zakupu](orders.md)**.

## Powiązanie z zamówieniem zakupu

Faktura zakupu może zostać utworzona na podstawie potwierdzonego zamówienia zakupu. W takim przypadku:

- pola nagłówka ([firma](../masterdata/partners.md), [dostawca](../masterdata/partners.md), [waluta](../masterdata/currencies.md), [warunki płatności](../invoicing/settings.md#payment-terms) itd.) są zwykle wypełniane z zamówienia zakupu;
- linie faktury zakupu są tworzone z linii zamówienia zakupu;
- na podstawie tego powiązania system wylicza, ile już zostało pokryte fakturami zakupu i ile pozostało.

Znaczenie praktyczne: jedno zamówienie zakupu może być pokryte **wieloma fakturami zakupu** i **częściami**.

## Kiedy dostępne jest tworzenie faktury zakupu z zamówienia zakupu

Zwykle faktura zakupu na podstawie zamówienia zakupu jest używana, gdy włączony jest przepływ finansowy ([„Fakturowanie”](../invoicing/invoicing.md)) i trzeba zarejestrować kwotę do zapłaty [dostawcy](../masterdata/partners.md).

Z reguły tworzenie faktury zakupu jest dostępne, gdy:

1. Zamówienie zakupu przechodzi w status **„Potwierdzone”**.
2. Dla typu zamówienia zakupu skonfigurowano typ faktury zakupu (jeśli jest to wymagane w konfiguracji).
3. Zamówienie zakupu ma linie, które nie są jeszcze pokryte fakturą zakupu.

## Jak utworzyć fakturę zakupu na podstawie zamówienia zakupu

1. Otwórz [zamówienie zakupu](orders.md).
2. Uruchom akcję **„Utwórz fakturę zakupu”** (jeśli jest dostępna w konfiguracji).
3. W otwartej fakturze zakupu sprawdź pola nagłówka (zwykle wypełnione automatycznie z zamówienia zakupu):
   - [firma](../masterdata/partners.md);
   - [dostawca](../masterdata/partners.md);
   - [waluta](../masterdata/currencies.md);
   - [warunki płatności](../invoicing/settings.md#payment-terms);
   - referencje dostawcy / notatka (jeśli były uzupełnione w zamówieniu zakupu).
4. Sprawdź linie faktury zakupu:
   - [towar](../masterdata/items.md) i opis;
   - ilość (zwykle „do pokrycia”: ilość zamówiona minus to, co już pokryto innymi fakturami zakupu);
   - cena.
5. Jeśli trzeba, dostosuj ilości/ceny, aby odpowiadały dokumentom dostawcy.
6. Ustaw fakturę zakupu w wymagany status zgodnie z regułami konfiguracji (na przykład „Do zapłaty”).

## Wiele faktur zakupu dla jednego zamówienia zakupu (pokrycie częściowe)

Jeśli dostawy i/lub dokumenty dostawcy przychodzą partiami, możliwe jest tworzenie wielu faktur zakupu dla jednego zamówienia zakupu:

- pierwsza faktura zakupu pokrywa część linii/ilości;
- kolejna faktura zakupu jest tworzona dla pozostałej części;
- w zamówieniu zakupu zwykle można kontrolować „ile już pokryto” i „ile pozostało”.

## Opłacanie faktury zakupu

Typowy łańcuch wygląda następująco:

1. **Faktura zakupu** — rejestruje kwotę do zapłaty [dostawcy](../masterdata/partners.md).
2. **Płatność wychodząca** — rejestruje płatność i zmniejsza dług (po [dopasowaniu płatności](../invoicing/payments.md)).

Zobacz też: [Faktury zakupu](../invoicing/bills.md), [Płatności wychodzące](../invoicing/outgoing-payments.md), [Dopasowanie płatności](../invoicing/payments.md).

## Ograniczenia przy zamykaniu/blokowaniu zamówienia zakupu

W niektórych konfiguracjach może obowiązywać reguła: „nie można zamknąć/zablokować zamówienia zakupu, jeśli nie jest opłacone w całości”.

Jeśli napotkasz takie ograniczenie:

1. Sprawdź, czy utworzono faktury zakupu dla wszystkich linii.
2. Sprawdź, czy płatności wychodzące zostały dopasowane do faktur zakupu.
3. Upewnij się, że faktury zakupu i płatności nie mają statusu Anulowan.

Zobacz też: [Ustawienia](settings.md).