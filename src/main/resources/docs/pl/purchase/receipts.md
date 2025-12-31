---
title: Przyjęcia dla zamówień zakupu
---

Przyjęcie rejestruje fakt przyjęcia towaru do [lokalizacji](../inventory/locations.md) i pomaga kontrolować realizację zamówienia zakupu: ile już przyjęto i ile pozostało.

## Gdzie znaleźć

Zwykle praca z przyjęciami jest dostępna:

- z karty **[zamówienia zakupu](orders.md)** — w bloku dokumentów powiązanych;
- w sekcji [Magazynowanie](../inventory/inventory.md) (jeśli jest używana) — zależy od konfiguracji.

## Powiązanie z zamówieniem zakupu

Przyjęcie może zostać utworzone na podstawie potwierdzonego zamówienia zakupu. W takim przypadku:

- pola przyjęcia ([dostawca](../masterdata/partners.md), [lokalizacja](../inventory/locations.md), Zaplanowana data) są zwykle wypełniane z zamówienia zakupu;
- linie przyjęcia są tworzone na podstawie linii zamówienia zakupu;
- na podstawie tego powiązania system wylicza, ile już przyjęto i ile pozostało.

Znaczenie praktyczne: jedno zamówienie zakupu można przyjmować **w wielu przyjęciach** i **częściami**.

## Kiedy przyjęcie jest dostępne dla zamówienia zakupu

Z reguły przyjęcia są używane, gdy włączone jest [Magazynowanie](../inventory/inventory.md).

Najczęściej przyjęcie staje się dostępne po tym, jak:

1. Zamówienie zakupu przechodzi w status **„Potwierdzone”**.
2. W zamówieniu zakupu wskazano **[lokalizację](../inventory/locations.md)**.
3. Typ zamówienia zakupu jest skonfigurowany do użycia przyjęć (jeśli jest to wymagane w konfiguracji).

Jeśli w zamówieniu zakupu wciąż jest coś „do przyjęcia”, system może utworzyć (lub wybrać już utworzone) przyjęcie gotowe do przetworzenia.

Uwaga: przyjęcia są zwykle tworzone **dla towarów ([towary](../masterdata/items.md))**. Jeśli zamówienie zakupu zawiera usługi, zwykle nie są one przyjmowane magazynowo.

## Jak przetworzyć przyjęcie na podstawie zamówienia zakupu

1. Otwórz [zamówienie zakupu](orders.md).
2. W bloku dokumentów powiązanych otwórz wymagane **przyjęcie** (lub utwórz nowe, jeśli jest to wspierane w konfiguracji).
3. Sprawdź pola przyjęcia:
   - dostawca;
   - zaplanowana data;
   - [lokalizacja](../inventory/locations.md).
4. Przejdź do linii przyjęcia i wprowadź faktycznie przyjętą ilość.
5. Zapisz/potwierdź przyjęcie zgodnie z regułami konfiguracji.

Ważne: przyjęcie rejestruje **fakt przyjęcia do [lokalizacji](../inventory/locations.md)** i jest używane do kontroli realizacji zamówienia zakupu („ile już przyjęto”).

## Dostawa częściowa i wiele przyjęć

Jeśli dostawa przychodzi partiami, twórz przyjęcia w miarę dostaw:

- możesz utworzyć wiele przyjęć dla tego samego zamówienia zakupu;
- w liniach zamówienia zakupu system zwykle pokazuje ilość pozostałą do przyjęcia (ile jeszcze trzeba przyjąć);
- w kolejnym przyjęciu wprowadź tylko to, co faktycznie dotarło.

Zwykle system nie pozwala przyjąć więcej, niż zamówiono (z uwzględnieniem już utworzonych przyjęć). Jeśli trzeba przyjąć więcej (nadwyżka), zachowanie zależy od reguł konfiguracji.

Jeśli po potwierdzeniu zmienisz zamówienie zakupu (ilość, lokalizację, Zaplanowaną datę itd.), system może zaktualizować „gotowe do pracy” przyjęcie i jego linie. Dlatego przed faktycznym przyjęciem zweryfikuj, czy przyjęcie odpowiada aktualnemu zamówieniu zakupu.

## Kontrola realizacji na poziomie linii

Na karcie zamówienia zakupu zwykle dostępne są wskaźniki na poziomie linii:

- **„przyjęte”** — ile już przyjęto dla linii;
- wyróżnienie wizualne, jeśli nie jest przyjęta w całości;
- lista przyjęć powiązanych z linią (po kliknięciu/otwarciu).

## Ograniczenia przy zamykaniu/blokowaniu zamówienia zakupu

W niektórych konfiguracjach mogą obowiązywać ograniczenia związane z przyjęciami, na przykład:

- nie można zamknąć/zablokować zamówienia zakupu, jeśli ma aktywne przyjęcia;
- nie można zamknąć/zablokować zamówienia zakupu, jeśli nie jest w całości przyjęte.

Jeśli napotkasz takie ograniczenie, sprawdź listę przyjęć w zamówieniu zakupu oraz faktyczną realizację linii.

Zobacz też: [Ustawienia](settings.md).