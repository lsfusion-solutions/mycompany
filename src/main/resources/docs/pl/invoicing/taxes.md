---
title: Podatki
---

W „Fakturowaniu” podatki są używane do obliczania kwot linii oraz sum dokumentów.

## Katalogi

W konfiguracji występują dwa katalogi:

- **Podatki** — każdy podatek ma **nazwę** i **stawkę** (pole **„Wartość”**, w procentach). Na przykład: „VAT 23%” z wartością 23.
- **Grupy podatków** — podatki są pogrupowane tak, że do jednej linii dokumentu można zastosować **tylko jeden podatek z grupy**. To standardowy sposób wyrażenia wzajemnie wykluczających się wariantów podatku (np. grupa „VAT” ze stawkami 0%, 5%, 8%, 23% — na linii wybierany jest tylko jeden).

Podatki można też powiązać z [towarami](../masterdata/items.md)/usługami i z typami dokumentów, aby były podstawiane automatycznie, gdy te towary pojawią się na [fakturze zakupu](bills.md) lub [fakturze](invoices.md).

## Obliczanie

Kwoty podatków są obliczane przez system automatycznie dla każdej linii — użytkownik ich nie wpisuje. Tryb określa flaga **„Podatek wliczony”** na typie dokumentu:

- **„Podatek wliczony” = wyłączone** (typowo B2B): **cena** linii to cena bez podatku (netto), a kwota podatku jest doliczana z wierzchu: `podatek = cena × ilość × stawka / 100`.
- **„Podatek wliczony” = włączone** (typowo detal / kasy fiskalne): **cena** linii to cena z podatkiem (brutto), a kwota podatku jest z niej wyodrębniana: `podatek = cena × ilość × stawka / (100 + stawka)`.

Dla każdej linii system pokazuje również **kwotę bez podatku** (netto = kwota minus podatek). Sumy dokumentu agregują te wartości.

## Użycie w dokumentach

Podatek może być ustawiony:

- automatycznie — na podstawie ustawień [towaru](../masterdata/items.md) lub ustawień typu dokumentu (zobacz [Ustawienia i katalogi](settings.md));
- ręcznie w linii — przez zaznaczenie odpowiedniego podatku z właściwej grupy.

Z powodu reguły „jeden podatek na grupę” wybór innego podatku tej samej grupy automatycznie zdejmuje zaznaczenie z poprzedniego.

## Ograniczenia

- podatek, który już brał udział w obliczeniach, jest chroniony przed usunięciem;
- podatki z jednej grupy nie mogą jednocześnie występować na jednej linii.

## Czego **nie** modeluje konfiguracja bazowa

Konfiguracja bazowa używa jednego wymiaru podatku (stawka × baza). **Nie** rozróżnia osobno podatku VAT naliczonego i należnego oraz **nie** dostarcza dedykowanych raportów VAT — sumy podatków widać wewnątrz raportów [faktur zakupu](bills.md) i [faktur](invoices.md) jako kolumny linii, a nie jako osobny formularz.
