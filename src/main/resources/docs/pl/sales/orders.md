---
title: Zamówienia
---

## Gdzie znaleźć

Otwórz **„Sprzedaż” → „Operacje” → „Zamówienia”**.

## Cel

Zamówienie rejestruje:

- [klienta](../masterdata/partners.md) i warunki sprzedaży;
- zawartość zamówienia (linie);
- ceny, rabaty i podatki;
- planowaną datę wydania;
- powiązania z wydaniami, fakturami, zleceniami produkcji i zamówieniami zakupu (jeśli takie scenariusze są włączone).

## Lista zamówień

Na liście zwykle widać:

- numer i datę;
- [klienta](../masterdata/partners.md);
- status;
- kwotę;
- planowaną datę wydania;
- [lokalizację](../inventory/locations.md).

Filtry i zestaw kolumn zależą od konfiguracji.

## Karta zamówienia

### Główne pola

Zwykle karta zawiera:

- **[Klient](../masterdata/partners.md)**;
- **Datę** i **planowaną datę wydania**;
- **[Lokalizację](../inventory/locations.md)**;
- **Adres dostawy** (jeśli używany);
- **Typ zamówienia** (jeśli używanych jest wiele typów);
- **Osobę odpowiedzialną**.

### Linie zamówienia

W liniach podajesz:

- [towar](../masterdata/items.md);
- ilość;
- cenę;
- rabat (jeśli używany);
- kwotę linii.

Rekomendacja: najpierw uzupełnij klienta i lokalizację, a dopiero potem dodawaj linie — pomaga to systemowi dokładniej dobierać ceny i dostępność.

## Potwierdzanie i anulowanie

Zamówienie zwykle przechodzi przez taki cykl życia:

1. Projekt.
2. Potwierdzone.
3. Anulowane (jeśli zamówienie nie będzie realizowane).

Szczegóły statusów i ograniczeń: [Przepływ pracy i statusy zamówień](workflow-and-statuses.md).

## Dokumenty powiązane

Karta zamówienia może zawierać bloki z dokumentami powiązanymi:

- [wydania](shipments.md);
- [faktury](invoices.md);
- zlecenia produkcji;
- zamówienia zakupu.

Dostępne bloki zależą od włączonych modułów.