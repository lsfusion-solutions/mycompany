---
title: Płatności detaliczne
---

Ta strona opisuje przyjmowanie płatności w **[POS](pos.md)**: metody płatności, dzielenie kwot oraz wyliczanie reszty.

## Metody płatności

Metoda płatności to skonfigurowany sposób przyjmowania/wypłacania pieniędzy (na przykład **gotówka**, **karta bankowa**). Lista metod płatności i ich dostępność mogą zależeć od **[kasy](settings.md)**.

Konfiguracja metod płatności: zobacz [Ustawienia](settings.md).

## Jak przyjąć płatność

1. Na paragonie przejdź do płatności.
2. Sprawdź **Do zapłaty**.
3. Wprowadź kwoty dla jednej lub kilku metod płatności.
4. Potwierdź płatność.

### Reszta

Jeśli gotówką wprowadzono więcej niż **Do zapłaty**, system wyliczy **resztę**. Tylko gotówką można wprowadzić więcej niż kwotę do zapłaty.

### Walidacja danych wejściowych

Przy wprowadzaniu kwot zawsze obowiązują walidacje:

- nie możesz potwierdzić płatności, jeśli wprowadzona kwota jest niewystarczająca;
- nie możesz „nadpłacić” metodami bezgotówkowymi (na przykład kartą bankową) ponad **Do zapłaty**;
- przy płatności mieszanej system bierze pod uwagę sumę dla wszystkich metod.

## Płatność zwrotu

Podczas realizacji zwrotu wykonywana jest wypłata dla klienta. Reguły dzielenia kwot są stałe: daną metodą płatności nie można zwrócić więcej, niż zapłacono nią w oryginalnym paragonie, a łączna kwota wypłaty musi być równa kwocie zwrotu. Ustawienia wpływają tylko na dostępność metod płatności.

Szczegóły krok po kroku oraz typowe ograniczenia: [Zwroty](returns.md).