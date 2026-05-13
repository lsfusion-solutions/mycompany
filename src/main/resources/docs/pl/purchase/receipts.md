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

### Przyjęcie rezerwowe (utrzymywane automatycznie)

Przy potwierdzeniu zamówienia (i przy kolejnych zmianach) system automatycznie:

1. Sprawdza, czy w zamówieniu jest pozostała ilość do przyjęcia (pole **„Gotowe”** w liniach).
2. Albo wybiera powiązane przyjęcie w statusie **„Gotowe”**, albo tworzy nowe z typem przyjęcia skonfigurowanym w typie zamówienia.
3. Synchronizuje nagłówek tego przyjęcia (dostawca, zaplanowana data, lokalizacja) z zamówieniem.
4. Dodaje/usuwa linie odpowiednio do aktualnej pozostałej ilości; pierwotne zapotrzebowanie linii przyjęcia jest ustawiane równe wartości „Gotowe” z linii zamówienia.
5. Jeśli żadna linia zamówienia nie ma już pozostałej ilości, przyjęcie rezerwowe jest usuwane.

To przyjęcie jest tworzone/aktualizowane przy zmianie pola „Gotowe” w linii, dostawcy, zaplanowanej daty, lokalizacji lub numeru zamówienia; jest też odbudowywane przy powrocie zamówienia z „Zablokowane” do „Potwierdzone”.

Jeśli przyjęcie miałoby przekroczyć ilość zamówioną w linii (nadwyżka), system pokazuje komunikat *„Przyjęcie przekracza ilość w zamówieniu”* i odrzuca zapis.

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

[Typ zamówienia](settings.md) ma dwie niezależne flagi wpływające na akcję **„Zablokuj”**:

- **„Zakaz blokowania przy aktywnych przyjęciach”** — system nie pozwoli zablokować zamówienia, dopóki ma ono przyjęcie rezerwowe w statusie „Gotowe”. Gdy flaga jest wyłączona, takie przyjęcie jest po prostu usuwane przy blokowaniu.
- **„Zakaz blokowania przy niepełnym przyjęciu”** — system nie pozwoli zablokować zamówienia, jeśli pozostała ilość `Gotowe > 0` (są linie, które nie zostały w pełni przyjęte).

W przypadku naruszenia którejkolwiek z tych reguł wyświetlany jest odpowiedni komunikat, a zamówienie pozostaje w statusie „Potwierdzone”.

Zobacz też: [Ustawienia](settings.md).