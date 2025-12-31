---
title: Zakup — dokumentacja użytkownika
---

Ta dokumentacja opisuje, jak korzystać z sekcji **„Zakup”**: tworzenie [zamówień zakupu](orders.md), praca z [cennikami dostawcy](pricelists.md), tworzenie powiązanych dokumentów ([faktur zakupu](bills.md), [przyjęć](receipts.md), [płatności wychodzących](../invoicing/outgoing-payments.md)) oraz kontrola realizacji.

Jeśli w Twojej konfiguracji brakuje części pozycji menu lub akcji, jest to normalne: dostępna funkcjonalność zależy od włączonych modułów i ustawień.

## Dla kogo jest ta sekcja

Sekcja **„Zakup”** jest zwykle używana przez:

- **Kierownika zakupów** — tworzy zamówienia zakupu, wysyła je do dostawców, kontroluje terminy i realizację.
- **Magazyn / logistyka** (jeśli używane jest [Magazynowanie](../inventory/inventory.md)) — przetwarza [przyjęcia](receipts.md) i wiąże je z zamówieniami zakupu.
- **Księgowego / specjalistę finansowego** — tworzy [faktury zakupu](bills.md) i [płatności wychodzące](../invoicing/outgoing-payments.md), kontroluje zobowiązania wobec [dostawców](../masterdata/partners.md).

## Spis treści

- [Szybki start](#quick-start)
- [Nawigacja](#navigation)
- [Terminy](#terms)

Sekcje:

- [Zamówienia zakupu](orders.md)
- [Przyjęcia dla zamówień zakupu](receipts.md)
- [Faktury zakupu dla zamówień zakupu](bills.md)
- [Cenniki dostawcy](pricelists.md)
- [Raporty zakupu](reports.md)
- [Ustawienia](settings.md)

## Szybki start

### Scenariusz: utworzyć zamówienie zakupu → przyjąć towary → utworzyć fakturę zakupu → zapłacić

1. Otwórz **„Zakup” → „Operacje” → „Zamówienia zakupu”**.
2. Utwórz zamówienie zakupu i uzupełnij:
   - [dostawcę](../masterdata/partners.md);
   - [firmę](../masterdata/partners.md);
   - [lokalizację](../inventory/locations.md) (jeśli używane);
   - [warunki płatności](../invoicing/settings.md#payment-terms) (jeśli używane);
   - linie zamówienia ([towary](../masterdata/items.md), ilość, cena, [podatki](../invoicing/taxes.md)).
3. Jeśli trzeba, wyślij zamówienie zakupu do dostawcy przez akcję **„Wysłij”**.
4. Potwierdź zamówienie zakupu przez akcję **„Potwierdź”**.
5. Jeśli używane jest [Magazynowanie](../inventory/inventory.md) — przetwórz [przyjęcie](receipts.md) i powiąż je z zamówieniem zakupu.
6. Utwórz [fakturę zakupu](bills.md) (dokument finansowy) do zamówienia zakupu / na podstawie faktycznej dostawy.
7. Zarejestruj [płatność wychodzącą](../invoicing/outgoing-payments.md) do [dostawcy](../masterdata/partners.md) i dopasuj ją do faktury zakupu (jeśli w konfiguracji używane jest [dopasowanie płatności](../invoicing/payments.md)).

Zobacz też: dokumentacja [„Fakturowanie”](../invoicing/invoicing.md) — [Faktury zakupu](../invoicing/bills.md), [Płatności wychodzące](../invoicing/outgoing-payments.md), [Dług i kalendarz płatności](../invoicing/debt-and-calendar.md).

## Nawigacja

Sekcja **„Zakup”** zwykle zawiera następujące grupy:

- **Operacje** — zamówienia zakupu, cenniki dostawcy i powiązane akcje.
- **Raportowanie** — raporty zamówień/realizacji.
- **Konfiguracja** — parametry i katalogi wpływające na zakupy.

## Terminy

#### [Zamówienie zakupu](orders.md)

Dokument, który rejestruje uzgodnienie z [dostawcą](../masterdata/partners.md) dotyczące dostawy towarów/usług ([towary](../masterdata/items.md), ilości, ceny, terminy).

#### [Faktura zakupu](bills.md)

Dokument, który rejestruje zakup w rozliczeniach oraz kwotę do zapłaty [dostawcy](../masterdata/partners.md).

#### [Przyjęcie](receipts.md)

Dokument [Magazynowania](../inventory/inventory.md), który rejestruje fakt przyjęcia towaru do [lokalizacji](../inventory/locations.md). Może być powiązany z zamówieniem zakupu i służy do kontroli „ile już przyjęto”.

#### [Cennik](pricelists.md)

[Cennik dostawcy](../masterdata/partners.md), który może być używany jako źródło cen podczas tworzenia zamówień zakupu.