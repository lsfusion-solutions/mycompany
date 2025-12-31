---
title: Faktury zakupu
---

## Gdzie znaleźć

Otwórz **„Fakturowanie” → „Operacje” → „Faktury zakupu”**.

## Przeznaczenie

Faktura zakupu służy do:

- rejestrowania przyjęcia towarów/usług od dostawcy;
- obliczania [podatku](taxes.md) i sumy dokumentu;
- kontroli płatności do dostawcy oraz [długu](debt-and-calendar.md).

Jeśli w Twojej organizacji faktury zakupu są pobierane z **Krajowego Systemu e‑Faktur (KSeF)**, zobacz: [KSeF — faktury ustrukturyzowane](ksef/ksef.md).

Faktura zakupu może być używana jako:

- **podstawa do planowania [płatności wychodzących](outgoing-payments.md)** (jeśli używany jest [kalendarz płatności](debt-and-calendar.md));
- **punkt kontrolny [długu](debt-and-calendar.md)** dostawcy (jeśli rozliczanie długu jest prowadzone na podstawie faktur zakupu).

## Lista faktur zakupu

Lista zwykle pokazuje:

- numer i datę;
- [partnera](../masterdata/partners.md);
- status;
- kwotę;
- walutę (jeśli używana);
- [kontrakt](../masterdata/contracts.md) (jeśli używany);
- wskaźniki płatności/długu.

Wskazówka: jeśli na liście są kolumny **Opłacono**/**Dług**, są one wygodne do szybkiej kontroli płatności częściowych.

## Karta faktury zakupu

### Pola główne

W nagłówku faktury zakupu zwykle uzupełnia się:

- typ;
- datę;
- numer;
- [partnera](../masterdata/partners.md);
- [kontrakt](../masterdata/contracts.md) (jeśli używany);
- warunki płatności (jeśli używane);
- notatkę.

#### Warunki płatności

Jeśli używane są **warunki płatności**, zwykle wpływają one na:

- obliczanie **planowanej daty płatności**;
- budowanie **kalendarza płatności**;
- określanie dokumentów **przeterminowanych**.

Zobacz: [Ustawienia i katalogi](settings.md), [Dług i kalendarz płatności](debt-and-calendar.md).

### Linie

Linie zwykle zawierają:

- [towar](../masterdata/items.md)/usługę;
- ilość;
- cenę;
- [podatek](taxes.md) (jeśli używany);
- kwotę linii.

Jeśli podatki są skonfigurowane, podatek może zostać podstawiony automatycznie (np. z karty towaru/usługi albo z typu dokumentu).

### Statusy

Typowy zestaw statusów:

- Projekt;
- Do zapłaty;
- Wykonano;
- Anulowan.

Statusy wpływają na możliwość edycji oraz dostępność wydruków.

Typowa logika:

- w statusie **Projekt** można zmieniać nagłówek i linie;
- w statusie **Do zapłaty** dokument jest potwierdzony do dalszych działań (np. rejestracji płatności, drukowania — jeśli używane);
- w statusie **Wykonano** faktura zakupu jest uznawana za zamkniętą;
- w statusie **Anulowan** faktura zakupu jest wyłączona z rozliczeń.

### Płatność i dług

Faktura zakupu może być powiązana z [płatnościami wychodzącymi](outgoing-payments.md). Na podstawie dopasowanych płatności system oblicza:

- opłacono;
- dług.

#### Szybka płatność z dokumentu

W niektórych konfiguracjach można utworzyć płatność wychodzącą bezpośrednio z faktury zakupu.

Typowy przebieg:

1. Ustaw dokument w status **„Do zapłaty”**.
2. Kliknij **„Rejestruj płatność”**.
3. Sprawdź utworzoną kartę **[płatności wychodzącej](outgoing-payments.md)** i zapisz ją.

System zwykle:

- podstawia partnera, firmę, konta/kasy oraz typ płatności (w zależności od ustawień);
- ustawia kwotę równą bieżącej pozostałej kwocie do zapłaty;
- od razu wykonuje **dopasowanie płatności** z tą fakturą zakupu, dzięki czemu dług maleje.

Zobacz: [Płatności wychodzące](outgoing-payments.md).

#### Płatność częściowa

Jeśli płatność nie pokrywa w pełni faktury zakupu:

- **Opłacono** zwiększa się o dopasowaną kwotę;
- **Dług** pozostaje dodatni do czasu pełnego rozliczenia.

#### Nadpłata / zaliczka

Jeśli przelana kwota jest większa niż kwota faktury zakupu, zachowanie zależy od reguł dopasowania:

- nadpłata może pozostać jako **niedopasowana** część płatności;
- albo zostać potraktowana jako **zaliczka** dla [partnera](../masterdata/partners.md)/[kontraktu](../masterdata/contracts.md).

Zobacz: [Płatności](payments.md).

Zobacz także: [Dług i kalendarz płatności](debt-and-calendar.md).

## Drukowanie

Jeśli w Twojej konfiguracji są włączone wydruki, fakturę zakupu zwykle można wydrukować z karty dokumentu.

Dostępność wydruku najczęściej zależy od:

- statusu (np. drukowanie jest dostępne od „Do zapłaty”);
- obecności skonfigurowanego szablonu wydruku.

Zobacz: [Raporty i drukowanie](reports-and-printing.md), [Ustawienia i katalogi](settings.md).