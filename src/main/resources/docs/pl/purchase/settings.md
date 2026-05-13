---
title: Ustawienia zakupu
---

## Gdzie znaleźć

Ustawienia zwykle znajdują się w: **„Zakup” → „Konfiguracja” → „Ustawienia”**.

## Typ zamówienia zakupu

Większość zachowań zakupów konfiguruje się w **typie zamówienia zakupu**. Dla każdego typu można ustawić:

### Pola podstawowe

- **numerator** — format i licznik numerów zamówień;
- **walutę domyślną** oraz flagę „cena zawiera podatki”;
- **lokalizację domyślną** (jeśli używany jest przepływ [Magazynowania](../inventory/inventory.md));
- **warunki płatności** (jeśli używany jest przepływ [Fakturowania](../invoicing/invoicing.md)).

### Powiązania z innymi dokumentami

- **Typ przyjęcia** — jaki dokument tworzony jest jako przyjęcie rezerwowe przy potwierdzeniu zamówienia (zob. [Przyjęcia do zamówień zakupu](receipts.md));
- **Typ faktury zakupu** — jaki dokument tworzy akcja „Utwórz fakturę zakupu” (zob. [Faktury zakupu do zamówień zakupu](bills.md));
- **Tryb fakturowania** — „Ilość zamówiona” lub „Ilość przyjęta”; określa, jaka ilość trafia do faktury;
- **Typ zlecenia produkcji** — przy potwierdzeniu zamówienia zakupu może być automatycznie tworzone zlecenie produkcji dla odpowiednich pozycji.

### Wysyłanie zamówienia zakupu do dostawcy

Pola używane przez akcję **„Wyślij”**:

- **szablon załącznika** — wydruk zamówienia załączany do wiadomości;
- **Temat** — tytuł wiadomości;
- **treść wiadomości**;
- adres **Kopia do** (Cc).

Po konfiguracji w karcie zamówienia w statusie „Projekt” pojawia się akcja **„Wyślij”** przenosząca zamówienie do statusu „Wysłane”.

### Ograniczenia blokowania

Trzy niezależne flagi wpływające na akcję **„Zablokuj”**:

- **„Zakaz blokowania przy aktywnych przyjęciach”** — nie pozwoli zablokować zamówienia z przyjęciem rezerwowym w statusie „Gotowe”;
- **„Zakaz blokowania przy niepełnym przyjęciu”** — nie pozwoli zablokować zamówienia, w którym jest jeszcze pozostała ilość do przyjęcia;
- **„Zakaz blokowania przy niepełnej zapłacie”** — nie pozwoli zablokować zamówienia, w którym nie cała ilość jest opłacona.

Bez tych flag blokowanie odbywa się bez kontroli (a przyjęcie rezerwowe jest po prostu usuwane).

## Typ importu cennika

Osobno konfigurowany jest **typ importu cennika** ze skryptem, który obsługuje akcję **„Import”** w karcie cennika dostawcy. Zobacz: [Cenniki dostawców → Import cen](pricelists.md#import-cen-z-zewnętrznego-źródła).

## Inne słowniki wpływające na pracę zakupów

- **[dostawcy](../masterdata/partners.md)** — pola nagłówka, lokalizacja domyślna, typ importu cennika, okres autozamówienia;
- **[towary](../masterdata/items.md)** i **opakowania zakupowe** — używane przez autozamówienie do zaokrąglania ilości;
- **[podatki](../invoicing/taxes.md)** i **[waluty](../masterdata/currencies.md)** — wspólne słowniki.