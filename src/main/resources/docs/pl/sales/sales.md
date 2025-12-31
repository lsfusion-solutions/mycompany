---
title: Sprzedaż — dokumentacja użytkownika
---

Ta dokumentacja opisuje pracę w sekcji **„Sprzedaż”**: tworzenie [zamówień](orders.md), generowanie [faktur](invoices.md), przetwarzanie [wydań](shipments.md), obliczanie [rabatów](discounts.md), praca z [cennikami](pricelists.md) oraz [raportowanie](reports.md).

## Spis treści

- [Szybki start](#quick-start)
- [Nawigacja](#navigation)
- [Terminy](#terms)

Sekcje:

- [Zamówienia](orders.md)
- [Przepływ pracy i statusy zamówień](workflow-and-statuses.md)
- [Wydania do zamówień](shipments.md)
- [Faktury do zamówień](invoices.md)
- [Cenniki i typy cen](pricelists.md)
- [Rabaty](discounts.md)
- [Raporty](reports.md)
- [Ustawienia](settings.md)

## Szybki start

Typowy scenariusz „utwórz zamówienie → wydaj → utwórz fakturę”:

1. Otwórz **„Sprzedaż” → „Operacje” → „Zamówienia”**.
2. Utwórz nowe zamówienie i uzupełnij:
   - [klienta](../masterdata/partners.md);
   - datę i planowaną datę wydania;
   - [lokalizację](../inventory/locations.md) i adres dostawy (jeśli używane);
   - linie zamówienia ([towary](../masterdata/items.md), ilość, cena).
3. Sprawdź kwoty i podatki.
4. Potwierdź zamówienie.
5. Utwórz [wydanie](shipments.md) i/lub [fakturę](invoices.md) dla zamówienia (zależnie od procesu).

## Nawigacja

Sekcja **„Sprzedaż”** zwykle zawiera grupy:

- **Operacje** — praca bieżąca (zamówienia, wydania, faktury).
- **Procesy** — panele kontroli i przetwarzania (jeśli włączone).
- **Raportowanie** — raporty sprzedaży.
- **Konfiguracja** — parametry i kartoteki.

## Terminy

#### [Zamówienie](orders.md)

Dokument, który rejestruje zamiar zakupu towarów/usług przez klienta, warunki dostawy oraz wyliczoną kwotę.

#### [Linia zamówienia](orders.md)

Pozycja w zamówieniu: co jest sprzedawane, w jakiej ilości i po jakiej cenie.

#### [Wydanie](shipments.md)

Dokument, który rejestruje przekazanie towarów klientowi (fizyczny ruch magazynowy).

#### [Faktura](invoices.md)

Dokument, który rejestruje sprzedaż w rozliczeniach (przychód, podatki, sumy itp.).