---
title: Ustawienia zakupu
---

## Gdzie znaleźć

Ustawienia zwykle znajdują się w: **„Zakup” → „Konfiguracja” → „Ustawienia”**.

## Parametry wpływające na zamówienia zakupu

Zestaw parametrów zależy od konfiguracji. W praktyce zachowanie zakupów najczęściej zależy od:

- typów zamówień zakupu (i powiązanych reguł);
- tego, czy używane są [przyjęcia](receipts.md) (przepływ [Magazynowania](../inventory/inventory.md));
- tego, czy używane są [faktury zakupu](bills.md) i [płatności wychodzące](../invoicing/outgoing-payments.md) (przepływ [„Fakturowanie”](../invoicing/invoicing.md));
- szablonów wydruku i reguł wysyłania zamówień zakupu do [dostawców](../masterdata/partners.md).

### Ograniczenia przy zamykaniu/blokowaniu zamówienia zakupu

W niektórych konfiguracjach mogą obowiązywać ograniczenia przy zakończeniu (blokowaniu) zamówienia zakupu, na przykład:

- nie wolno zakończyć zamówienia zakupu, jeśli ma aktywne [przyjęcia](receipts.md);
- nie wolno zakończyć zamówienia zakupu, jeśli nie jest w całości przyjęte;
- nie wolno zakończyć zamówienia zakupu, jeśli nie jest opłacone w całości.

Jeśli napotkasz takie ograniczenie, sprawdź dokumenty powiązane oraz faktyczną realizację linii.

## Szablony i wysyłanie zamówienia zakupu

Jeśli używane jest wysyłanie zamówienia zakupu do dostawcy, zwykle konfiguruje się:

- szablon wydruku zamówienia zakupu;
- **Temat** i treść e-maila;
- adres **Kopia do** (BCC).

Po konfiguracji akcja **„Wysłij”** będzie dostępna dla użytkowników na karcie zamówienia zakupu.