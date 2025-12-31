---
title: Zamówienia zakupu
---

## Gdzie znaleźć

Główne formularze do pracy z zamówieniami zakupu zwykle znajdują się w: **„Zakup” → „Operacje” → „Zamówienia zakupu”**.

## Cel

**Zamówienie zakupu** rejestruje uzgodnienie z [dostawcą](../masterdata/partners.md) i służy do:

- planowania zakupów i terminów dostaw;
- uzgadniania cen i ilości;
- kontroli realizacji (ile już przyjęto/zarejestrowano/opłacono — w zależności od włączonych procesów);
- tworzenia dokumentów powiązanych (faktury zakupu, przyjęcia itd. — jeśli odpowiednie moduły są włączone).

## Tworzenie i wypełnianie

Podczas tworzenia zamówienia zakupu zwykle uzupełnia się:

- **[dostawcę](../masterdata/partners.md)**;
- **[firmę](../masterdata/partners.md)**;
- **[lokalizację](../inventory/locations.md)** (jeśli używane jest [Magazynowanie](../inventory/inventory.md));
- **[walutę](../masterdata/currencies.md)** (jeśli używana jest wielowalutowość);
- **[warunki płatności](../invoicing/settings.md#payment-terms)** (jeśli używane);
- **zaplanowaną datę** (oczekiwana dostawa);
- **notatkę** i referencje dostawcy (na przykład link/numer referencyjny dostawcy).

### Linie zamówienia

W liniach określa się:

- [towar](../masterdata/items.md);
- ilość i [jednostkę miary](../masterdata/uom.md);
- cenę;
- kwotę (zwykle wyliczana automatycznie);
- [podatki](../invoicing/taxes.md) (jeśli używane).

## Statusy i akcje

Zamówienia zakupu zwykle mają następujący cykl życia:

1. **Projekt** — zamówienie można swobodnie edytować.
2. **Wysłano** — zamówienie zostało wysłane do dostawcy (jeśli używane jest wysyłanie).
3. **Potwierdzone** — zamówienie jest potwierdzone do realizacji.
4. **Anulowan** — zamówienie jest wyłączone z dalszego przetwarzania.

Zachowanie statusów może się różnić w zależności od ustawień. Zwykle po potwierdzeniu obowiązuje więcej ograniczeń w zmianach.

### Wysyłanie zamówienia zakupu do dostawcy

Jeśli w systemie skonfigurowano wysyłanie, karta zamówienia zakupu udostępnia akcję **„Wysłij”**:

- generowany jest wydruk na podstawie wybranego szablonu;
- wysyłany jest e-mail do dostawcy;
- zamówienie zakupu przechodzi w status **„Wysłano”**.

### Potwierdzanie zamówienia zakupu

Akcja **„Potwierdź”** rejestruje, że zamówienie zakupu jest gotowe do dalszych operacji.

Po potwierdzeniu mogą stać się dostępne dokumenty powiązane (na przykład przyjęcie lub faktura zakupu) oraz kontrola realizacji na poziomie linii.

### Anulowanie zamówienia zakupu

Akcja **„Anuluj”** oznacza zamówienie zakupu jako Anulowan.

Zwykle anulowane zamówienia zakupu są wyłączone z dalszych automatycznych operacji i wyborów procesów.

## Dokumenty powiązane i kontrola realizacji

Zestaw dokumentów powiązanych zależy od włączonych modułów.

### Przyjęcia (jeśli używane jest [Magazynowanie](../inventory/inventory.md))

Dla potwierdzonego zamówienia zakupu system może:

- pokazywać **ile już przyjęto** w każdej linii;
- utrzymywać listę powiązanych **przyjęć** na karcie zamówienia zakupu;
- tworzyć „projekt” / gotowe do pracy przyjęcie, aby magazyn mógł rozpocząć przyjmowanie towaru.

Szczegóły: [Przyjęcia dla zamówień zakupu](receipts.md).

### Faktury zakupu i płatności (jeśli używane jest [„Fakturowanie”](../invoicing/invoicing.md))

Karta zamówienia zakupu może pokazywać listę powiązanych **faktur zakupu**.

Fakturę zakupu można utworzyć z zamówienia zakupu (jeśli jest to włączone w konfiguracji). Szczegóły: [Faktury zakupu dla zamówień zakupu](bills.md).

Łańcuch zwykle wygląda następująco:

1. **Faktura zakupu** — rejestruje kwotę do zapłaty [dostawcy](../masterdata/partners.md).
2. **Płatność wychodząca** — rejestruje płatność i zmniejsza dług (po dopasowaniu).

Zobacz też: [Faktury zakupu](../invoicing/bills.md), [Płatności wychodzące](../invoicing/outgoing-payments.md), [Dopasowanie płatności](../invoicing/payments.md).

## Dodatkowe możliwości

### Załączniki

Do zamówienia zakupu można dołączyć pliki (na przykład korespondencję, oferty, specyfikacje) i przeglądać je na karcie dokumentu.

### Kopiowanie zamówienia zakupu

Aby przyspieszyć pracę, można utworzyć nowe zamówienie zakupu poprzez skopiowanie istniejącego, a następnie dostosowanie pól nagłówka i linii.