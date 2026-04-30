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

### Automatyczne wypełnianie zamówienia

Jeśli włączone jest planowanie wydań magazynowych, karta zamówienia zakupu może obliczać sugerowane ilości zakupu w siatce towarów.

1. Wybierz **Dostawcę**, **Lokalizację** i **Datę**.
2. Sprawdź pola **Data od** i **Data do** nad siatką towarów. Po wybraniu dostawcy system uzupełnia ten okres względem daty zamówienia: od liczby dni określonej w polu **Okres zamówienia** dostawcy do dnia poprzedzającego datę zamówienia. Jeśli dla dostawcy nie podano okresu, używane jest 7 dni. Okres można zmienić ręcznie przed wypełnieniem zamówienia. Jeśli później zmienisz datę zamówienia, sprawdź te daty przed uruchomieniem **Auto order**.
3. Użyj filtra **Auto order**, aby pokazać tylko towary z sugerowaną ilością.
4. Uruchom akcję **Auto order**.

Siatka towarów pokazuje kolumny pomocnicze dla wybranego okresu:

- **Planowane** i **Wysłane** — ilości wydań dla okresu;
- **Oczekujące wydanie** — zapotrzebowanie z wydań, które nie zostało jeszcze wysłane;
- **Auto order** — sugerowana ilość zakupu, zaokrąglana w górę do opakowania zakupu towaru, jeśli jest skonfigurowane.

Akcja **Auto order** dodaje linie tylko dla towarów, które są aktualnie widoczne w siatce, mają dodatnią wartość **Auto order** i nie występują jeszcze w zamówieniu. Istniejące ilości w liniach nie są nadpisywane.

Jeśli włączona jest produkcja, ten sam mechanizm uwzględnia również zapotrzebowanie materiałowe: **Oczekujące zużycie** z zamówień produkcji oczekujących na wykonanie oraz **Zużyte** materiały z zamówień produkcji w statusie Wykonano w wybranym okresie.

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
