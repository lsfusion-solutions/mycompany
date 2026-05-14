---
title: Ustawienia Sprzedaży
---

## Gdzie znaleźć

Otwórz **„Sprzedaż” → „Konfiguracja” → „Ustawienia”**.

## Co zwykle się konfiguruje

### Typy zamówienia

Dla każdego typu zamówienia można ustawić:

- **numerator** — format i licznik numerów;
- **walutę domyślną** oraz flagę „cena zawiera podatki”;
- **typ wydania** (jeśli włączony moduł Magazyn) — jaki dokument tworzy się przy potwierdzeniu zamówienia;
- **typ zlecenia produkcji** i/lub **typ zamówienia zakupu** — do automatycznego tworzenia dokumentów powiązanych;
- **szablon wiadomości** — temat, treść i adres kopii dla akcji „Wyślij” (zob. [status „Wysłane”](workflow-and-statuses.md));
- **Zakaz blokowania przy aktywnych wydaniach** oraz **Zakaz blokowania przy niepełnym wydaniu** — ograniczenia przejścia do statusu „Zablokowane”.

### Ustawienia globalne modułu

Na formularzu ustawień modułu są ogólne przełączniki:

- **„Nie przeliczaj automatycznie rabatów w zamówieniu”** — wyłącza automatyczne przeliczanie rabatów przy zmianach linii (przydatne przy ręcznym zarządzaniu rabatami);
- **„Nie przeliczaj automatycznie rabatów w fakturze”** — to samo dla faktur.

Zobacz też: [Rabaty](discounts.md#automatyczne-przeliczanie-rabatów).

### Cenniki

- **Typy cennika** — kategorie porządkujące cenniki (np. „Standardowy”, „Promocyjny”);
- **Typy cen** — używane w liniach cenników i zamówień do wyznaczania cen;
- **Szablony wydruku** — do drukowania cenników i metek cenowych.

### Inne

- parametry wydruków (szablony dla zamówień i dokumentów towarzyszących);
- dostępność konkretnych akcji zależnie od statusów.

Rekomendacja: najpierw skonfiguruj typy zamówień i numerację, następnie typy cen i cenniki, a rabaty na końcu (zależą od typów cen i kategorii).