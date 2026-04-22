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

### Import z pliku z użyciem OpenAI

Jeśli dla wybranego typu faktury zakupu skonfigurowano opis rozpoznawania, na karcie dokumentu pojawia się działanie importu z pliku z użyciem OpenAI.

#### Co trzeba przygotować

- uzupełnić klucz API OpenAI i w razie potrzeby utworzyć konfiguracje GPT dla modelu, rozumowania i dodatkowego promptu;
- skonfigurować opis rozpoznawania w typie faktury zakupu;
- wcześniej sprawdzić dane dostawców, towarów i usług, walut oraz podatków.

Szczegóły przygotowania: [Ustawienia i katalogi](settings.md).

#### Jak używać

1. Otwórz fakturę zakupu dostępną do edycji.
2. Upewnij się, że bieżące zmiany w dokumencie są poprawne. Przed importem system próbuje zapisać dokument i jeśli walidacja się nie powiedzie, import nie rozpocznie się.
3. Uruchom import i wskaż plik z dokumentem od dostawcy. Jeśli skonfigurowano kilka konfiguracji GPT, wybierz tę, której chcesz użyć. Standardowy scenariusz zakłada jeden dokument w jednym pliku.
4. Po uzupełnieniu sprawdź nagłówek i linie faktury zakupu, a w razie potrzeby popraw wynik ręcznie.

#### Co zwykle jest uzupełniane

Z pliku system próbuje określić:

- w nagłówku: numer, datę, datę dostawy, termin płatności, dostawcę i walutę;
- w liniach: opis, towar/usługę, ilość, cenę, kwotę netto i podatki.

#### Ograniczenia i cechy działania

- Nowe dane słownikowe nie są tworzone automatycznie. OpenAI dopasowuje wartości wyłącznie do danych, które już istnieją w systemie.
- Przy dopasowaniu towarów i usług wykorzystywane są kod, nazwa, indeks i kod kreskowy. Przy dopasowaniu dostawcy wykorzystywane są kod, nazwa i adres.
- Jeśli wartości nie uda się rozpoznać albo dopasować, odpowiednie pole może pozostać puste.
- Przy imporcie do już uzupełnionej faktury zakupu nagłówek jest nadpisywany danymi z pliku, a nowe linie są dodawane do istniejących. Ponowny import wygodniej wykonywać do nowej faktury zakupu albo po ręcznym usunięciu linii.
- Jeśli dla typu faktury zakupu nie uzupełniono opisu rozpoznawania, działanie importu nie jest pokazywane.
- Jeśli nie uzupełniono klucza API OpenAI albo zewnętrzne żądanie zakończyło się błędem, system pokaże komunikat i nie wykona importu.

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
