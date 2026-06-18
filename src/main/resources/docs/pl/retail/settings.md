---
title: Ustawienia sprzedaży detalicznej
---

Ta strona opisuje podstawowe ustawienia, które wpływają na działanie **[kasy](pos.md)** i **[POS](pos.md)**.

## Gdzie to znaleźć

Ustawienia są zwykle dostępne w **„Sprzedaż detaliczna” → „Konfiguracja” → „Ustawienia”**.

W większości konfiguracji główne słowniki (kasy, metody płatności, karty rabatowe) są dostępne bezpośrednio w tej sekcji.

## Kasy

Kasa to stanowisko, z którego realizuje się sprzedaż i zwroty.

Gdzie to znaleźć: zwykle **„Sprzedaż detaliczna” → „Konfiguracja” → „Kasy”**.

Zwykle konfiguruje się:

- **nazwę** i **kod** kasy;
- **firmę**;
- powiązanie kasy z **komputerem** (tak, aby dany komputer sugerował „swoją” kasę);
- **konta według metod płatności** — na osobnej zakładce kasy dla każdej **[metody płatności](payments.md)** można wskazać **konto**, na które trafiają płatności przyjęte tą metodą.

> **Konto gotówkowe.** Aby na ekranie POS działały operacje **„Wpłać gotówkę”** i **„Wypłać”** (oraz aby w nagłówku wyświetlało się saldo w polu **„Gotówka w kasie”**), dla metody płatności **„Gotówka”** kasa musi mieć wskazane **konto**. Dopóki konto gotówkowe nie zostanie ustawione, przyciski wpłaty i wypłaty gotówki na ekranie POS pozostają **niedostępne** (nieaktywne). Dodatkowo dla samych operacji wpłaty/wypłaty w ustawieniach muszą być określone odpowiednie **typy płatności** (typ wpłaty i typ wypłaty).

> **Konto centralnej kasy.** Pole **„Konto gotówkowe”** w nagłówku karty kasy to **konto centralnej kasy** — konto kontrahenta dla operacji **„Wpłać gotówkę”** i **„Wypłać”**: wpłata przenosi pieniądze z konta centralnego do **szuflady kasy** (konta metody płatności **„Gotówka”**), a wypłata z powrotem. Dlatego konto w nagłówkowym polu **„Konto gotówkowe”** musi być **innym kontem** niż konto wskazane dla metody płatności **„Gotówka”**. Jeśli to to samo konto, wpłata/wypłata księguje obie strony przelewu na jednym koncie, kwota zeruje się, a saldo w polu **„Gotówka w kasie”** się nie zmienia. System tego pilnuje — nie pozwoli zapisać kasy z tym samym kontem w obu miejscach.

## Sesje

**[Sesje](sessions.md)** są numerowane automatycznie. Numerator sesji wybiera się na zakładce **„Główne”** formularza ustawień.

## Metody płatności

Lista metod płatności jest prowadzona w formularzu ustawień (zobacz także: **[Płatności detaliczne](payments.md)**). Dla każdej metody określa się:

- **nazwę** i **kod**;
- znacznik **„Gotówka”** — oznacza metodę jako gotówkową (używany do obliczania reszty);
- **typ płatności przychodzącej** i **typ płatności zwrotnej** — typy płatności używane przy przyjęciu metody w sprzedaży i przy wypłacie środków w zwrocie.

## Karty rabatowe

**[Karty rabatowe](discount-cards.md)** są numerowane automatycznie; numerator kart rabatowych wybiera się na zakładce **„Główne”** formularza ustawień. Sama lista kart znajduje się w **„Sprzedaż detaliczna” → „Konfiguracja” → „Karty rabatowe”**.