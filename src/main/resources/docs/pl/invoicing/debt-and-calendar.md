---
title: Dług i kalendarz płatności
---

## Dług

Dług jest obliczany jako różnica:

- kwot dokumentów ([faktur zakupu](bills.md), [faktur](invoices.md), [zwrotów i korekt](refunds-and-corrections.md));
- minus kwota powiązanych/rozliczonych [płatności](payments.md).

Dług może być obliczany:

- wg [partnera](../masterdata/partners.md);
- wg [kontraktu](../masterdata/contracts.md);
- wg konkretnego dokumentu.

Co ważne:

- dług zmienia się **tylko dla płatności, które są powiązane/rozliczone** z dokumentami;
- jeśli dokument jest w statusie Anulowan, zwykle nie bierze udziału w obliczeniach;
- przy płatności częściowej dług maleje o rozliczoną kwotę.

## Jak dług jest zamykany

1. Utwórz [płatność](payments.md).
2. Rozlicz płatność z dokumentem (albo rozlicz z kilkoma dokumentami).
3. Po zaksięgowaniu/zapisaniu płatności dług maleje.

Jeśli płatność jest rozliczona z kilkoma dokumentami, dług maleje dla każdego dokumentu o odpowiednią kwotę.

## Kalendarz płatności

Kalendarz płatności jest używany do planowania:

- oczekiwanych wpływów;
- planowanych wypłat.

Kalendarz jest zwykle budowany na podstawie:

- terminów płatności w dokumentach;
- warunków płatności;
- bieżącego długu.

### Typowe scenariusze użycia

1. **Planowanie wpływów**: zobaczyć, jakich kwot oczekiwać w następnym tygodniu/miesiącu wg warunków płatności.
2. **Kontrola przeterminowań**: odfiltrować dokumenty, których planowana data płatności jest w przeszłości.
3. **Planowanie wypłat**: wg [płatności wychodzących](outgoing-payments.md) (jeśli używane są planowane wypłaty).

### Co sprawdzić, jeśli kalendarz jest „pusty” albo daty są nieprawidłowe

Sprawdź:

- czy w dokumentach są uzupełnione **warunki płatności/termin płatności**;
- czy włączone są ustawienia kalendarza i reguły obliczania planowanych dat;
- czy dokumenty nie są wykluczane przez status (np. Anulowan).

Zobacz parametry: [Ustawienia i katalogi](settings.md).