---
title: Jak obliczana jest suma „Wynagrodzenie netto”
---

Suma **„Wynagrodzenie netto”** jest wynikiem sumowania linii naliczeń dla okresu z uwzględnieniem tego, czy linia jest **przychodem** czy **potrąceniem**.

## Jak powstaje kwota

Każda linia naliczeń zwykle ma:

- **ilość** (np. godziny lub sztuki);
- **kwota** (np. stawka godzinowa);
- **suma** (suma linii).

Z reguły **suma linii** jest obliczana jako:

`total = quantity × amount`

Suma linii jest zaokrąglana do **2 miejsc po przecinku**.

## Reguła obliczeń

**„Wynagrodzenie netto”** jest obliczane w następujący sposób:

1. Weź **wszystkie linie naliczeń** w odcinku płacowym.
2. Dla każdej linii określ znak:
   - jeśli linia jest oznaczona jako **potrącenie** — jej suma jest **odejmowana**;
   - jeśli linia jest przychodem — jej suma jest **dodawana**.
3. Linie oznaczone jako **„Pomiń”** **nie biorą udziału** w obliczeniu.

W postaci wzoru:
`Net wage = (sum of earning totals) − (sum of deduction totals)`

gdzie obie sumy uwzględniają tylko linie, które **nie są oznaczone** jako **„Pomiń”**.

## Ważne uwagi

- Flaga **„Ukryj”** kontroluje widoczność linii w odcinku płacowym. Taka linia może być **ukryta**, ale nadal **uczestniczyć** w „Wynagrodzenie netto”, jeśli nie jest oznaczona jako „Pomiń”.
- „Wynagrodzenie netto” jest obliczane jako **suma sum linii** (po zaokrągleniu każdej linii). Dlatego przy wielu liniach mogą wystąpić niewielkie różnice zaokrągleń.

## Przykład

Linie naliczeń:

1. **Wynagrodzenie** — suma `100,000.00` (przychód)
2. **Premia** — suma `10,000.00` (przychód)
3. **Podatek** — suma `15,000.00` (**potrącenie**)

Wtedy:
`Net wage = 100,000.00 + 10,000.00 − 15,000.00 = 95,000.00`

Jeśli jakakolwiek linia jest oznaczona jako **„Pomiń”**, jej suma nie jest uwzględniana.