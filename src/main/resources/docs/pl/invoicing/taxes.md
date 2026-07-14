---
title: Podatki
---

W „Fakturowaniu” podatki są używane do obliczania kwot linii oraz sum dokumentów.

## Katalogi

W konfiguracji występują dwa katalogi:

- **Podatki** — każdy podatek ma **nazwę**, stawkę w polu **„Wartość, %” (Value, %)** oraz należy do **grupy podatków** (obowiązkowo). Na przykład: „VAT 23%” z wartością 23 w grupie „VAT”.
- **Grupy podatków** — podatki są pogrupowane tak, że do jednej linii dokumentu można w danym momencie zastosować **tylko jeden podatek z grupy**. To standardowy sposób wyrażenia wzajemnie wykluczających się wariantów podatku (np. grupa „VAT” ze stawkami 0%, 5%, 8%, 23% — na linii wybierany jest tylko jeden). Grupa podatków ma nazwę i krótki **identyfikator (ID)** używany jako klucz przy imporcie.

## Podatki na towarach

Każdy [towar](../masterdata/items.md)/usługa przechowuje **dwa** niezależne zestawy podatków — podatki **sprzedaży** i podatki **zakupu**:

- gdy linia towaru jest dodawana do [faktury](invoices.md), podstawiane są jego podatki **sprzedaży**; na [fakturze zakupu](bills.md) — jego podatki **zakupu**;
- zestawy podatków towaru są domyślnie dziedziczone z **kategorii** towaru, więc ustawienie kategorii wstępnie wypełnia podatki; następnie można je nadpisać na poziomie towaru;
- zestawy podatków sprzedaży i zakupu można zbiorczo importować i eksportować przez **„Import / Eksport podatków sprzedaży (zakupu)”** na formularzu migracji danych.

## Obliczanie

Kwoty podatków są obliczane przez system automatycznie dla każdej linii — użytkownik ich nie wpisuje. Tryb określa flaga **„Cena zawiera podatki” (Price includes taxes)** na typie dokumentu:

- **„Cena zawiera podatki” = wyłączone** (domyślnie dla B2B): **cena** linii to cena netto (bez podatku), **kwota** linii to `cena × ilość`, a podatek jest doliczany z wierzchu: `podatek = kwota × stawka / 100`.
- **„Cena zawiera podatki” = włączone** (typowo detal / sprzedaż gotówkowa): **cena** linii to cena brutto, **kwota** linii to suma brutto, a podatek jest z niej wyodrębniany: `podatek = kwota × stawka / (100 + stawka)`.

Na poziomie dokumentu dostępna jest **kwota netto** (suma minus podatek), a tabela podsumowania per podatek rozbija dokument wg podatku (kwota bez podatku / kwota podatku / kwota dla danego podatku).

## Użycie w dokumentach

Podatek może być ustawiony:

- automatycznie — na podstawie ustawień [towaru](../masterdata/items.md) (sprzedaż/zakup) lub typu dokumentu;
- ręcznie w linii — przez zaznaczenie odpowiedniego podatku z właściwej grupy.

Z powodu reguły „jeden podatek na grupę” wybór innego podatku tej samej grupy automatycznie zdejmuje zaznaczenie z poprzedniego dla tej linii.

## Ograniczenia

- podatek, który już brał udział w obliczeniach, jest chroniony przed usunięciem;
- podatki z jednej grupy nie mogą jednocześnie występować na jednej linii.

## Czego **nie** modeluje konfiguracja bazowa

Konfiguracja bazowa używa jednego wymiaru podatku (stawka × baza). **Nie** dostarcza dedykowanych deklaracji/raportów VAT jako osobnych formularzy — sumy podatków widać w tabeli podsumowania per podatek na każdym dokumencie oraz jako miary wewnątrz raportów [faktur zakupu](bills.md) i [faktur](invoices.md).
