---
title: Faktury
---

## Gdzie znaleźć

Otwórz **„Fakturowanie” → „Operacje” → „Faktury”**.

## Przeznaczenie

Faktura rejestruje sprzedaż w rozliczeniach:

- kwoty linii;
- podatki;
- dług klienta;
- oraz — jeśli włączony jest obszar [Magazynowania](../inventory/inventory.md) — powiązanie z [wydaniami](shipments-from-invoice.md).

Jeśli w Twojej organizacji używany jest **Krajowy System e‑Faktur (KSeF)**, zobacz także: [KSeF — faktury ustrukturyzowane](ksef/ksef.md).

W zależności od ustawień faktura może być:

- dokumentem używanym do kontroli **[długu](debt-and-calendar.md)** (jeśli rozliczanie długu jest prowadzone na podstawie faktur);
- podstawą do utworzenia **[wydania](shipments-from-invoice.md)** (jeśli używane jest [Magazynowanie](../inventory/inventory.md));
- dokumentem do wydruku dokumentów pierwotnych (jeśli włączone są szablony wydruku).

## Karta faktury

### Pola główne

- **Typ** — [typ faktury](settings.md); ustawia numerator, domyślnego klienta, walutę, typ płatności, czy cena zawiera podatki oraz zachowanie wydania;
- **Datę** i **Numer**;
- **Datę dostawy** oraz **Datę realizacji** (jeśli używana);
- **Klienta** — [partnera](../masterdata/partners.md);
- **Kontrakt** (jeśli używany);
- **Lokalizację** / adres dostawy (jeśli używane jest [Magazynowanie](../inventory/inventory.md));
- **Warunki płatności** oraz obliczoną datę **Zapłać do**;
- **Walutę** — domyślnie z typu faktury; kurs zasila kwotę bazową w walucie;
- **Nasz przedstawiciel** (domyślnie bieżący użytkownik) oraz **Indeks klienta**;
- **Notatkę**.

Karta ma także zakładki **Komentarze**, **Pliki** (`Plik faktury`) oraz oś czasu **historii statusów** (czas spędzony w każdym statusie).

### Linie

- [towar](../masterdata/items.md)/usługa;
- ilość i cena;
- **Rabat, %** / **Cena po rabacie** / **Kwota rabatu** (jeśli używane są rabaty);
- **Podatki** — podatki **sprzedażowe** towaru są podstawiane automatycznie (zobacz [Podatki](taxes.md));
- **Kwota** — baza linii (brutto, gdy typ ma ustawione **Cena zawiera podatki**).

Gdy używane jest [Magazynowanie](../inventory/inventory.md) i skonfigurowano typ wydania, linie pokazują też bieżące stany magazynowe — **Na stanie**, **Oczekiwane**, **Dostępne** — wraz z filtrem **Dostępne**, dzięki czemu możesz sprawdzać dostępność podczas tworzenia sprzedaży. Jeśli klient posługuje się inną jednostką miary, pojawiają się dodatkowe kolumny **jednostka partnera / ilość / cena**. Śledzenie **partii (lotów)** i **opakowań (paczek)** jest obsługiwane, gdy włączono je w typie faktury.

### Faktury zaliczkowe

Typ faktury można oznaczyć flagą **Zaliczkowa**; flaga ta przenosi się następnie na fakturę. Faktury zaliczkowe służą do przyjmowania przedpłat i późniejszego ich rozliczania ze zwykłą sprzedażą:

- zwykła faktura pokazuje wartości **Do rozliczenia zaliczki** / **Rozliczono zaliczkę** oraz zakładkę **Dopasowanie zaliczek** z fakturami zaliczkowymi **Rozliczonymi** / **Dostępnymi**;
- użyj tam akcji **„Rozlicz”**, aby zastosować zaliczkę do faktury;
- faktury nie można rozliczyć z nią samą, a jako zaliczki można zastosować tylko faktury oznaczone jako **Zaliczkowa**.

Lista faktur pokazuje dodatkowo kolumny **Rozliczono zaliczkę** oraz **Do zafakturowania**.

### Statusy

Faktura przechodzi przez **„Projekt” → „Do zapłaty” → „Zapłacono”** i może zostać **anulowana** ze statusu „Do zapłaty” lub „Zapłacono” (zaimplementowane jako kumulacyjne flagi, więc pokazywany status to najwyższy osiągnięty):

- w statusie **„Projekt”** można zmieniać nagłówek i linie. Akcja **„Oznacz jako Do zrobienia”** (widoczna tylko w statusie Projekt) przenosi fakturę do statusu **„Do zapłaty”**;
- w statusie **„Do zapłaty”** dokument jest potwierdzony do dalszych działań — drukowania, tworzenia wydania, rejestracji płatności. Tylko z tego statusu dostępna jest akcja **„Rejestruj płatność”**;
- w statusie **„Zapłacono”** dokument jest uznawany za rozliczony. Akcja **„Oznacz jako Zapłacone”** ustawia go ręcznie, a jest on także **ustawiany automatycznie**, gdy dopasowane płatności w pełni pokryją fakturę;
- **„Anuluj”** wyklucza dokument z procesu i rozliczeń (dostępne w każdym statusie z wyjątkiem Projekt/Anulowano).

Akcje **„Oznacz jako Do zrobienia”** i **„Anuluj”** są także dostępne jako operacje grupowe na liście faktur.

Akcja **„Kopiuj”** tworzy nową fakturę w stanie „Projekt” z tym samym klientem, firmą, typem, notatką i liniami.

### Powiązanie z wydaniem

Jeśli używane jest [Magazynowanie](../inventory/inventory.md):

- faktura może utworzyć wydanie akcją **„Utwórz wydanie”**, dostępną dopiero, gdy faktura jest w statusie **„Do zapłaty”** lub późniejszym (faktura w statusie Projekt nie może utworzyć wydania);
- wydanie może też zostać utworzone automatycznie, gdy faktura osiągnie status **„Do zapłaty”**, jeśli typ ma ustawione **Automatycznie utwórz wydanie**.

Zobacz: [Wydania z faktury](shipments-from-invoice.md).

Wskazówka praktyczna: jeśli wydanie jest tworzone automatycznie z faktury, najpierw zweryfikuj linie (towary, ilości, lokalizację/adres), a dopiero potem ustaw fakturę w status **„Do zapłaty”**.

## Płatność

Faktura może być powiązana z [płatnościami przychodzącymi](incoming-payments.md). [Dług](debt-and-calendar.md) jest obliczany na podstawie dopasowanych płatności.

Karta zawiera blok **Dopasowanie płatności** z podlistami **Rozliczone** oraz **Dostępne**; dwuklik na dostępnej płatności (lub akcja **„Rozlicz”**) rozlicza ją z fakturą. Jeśli kwota płatności jest mniejsza niż kwota faktury, jest to **płatność częściowa**, a dług pozostaje do czasu pełnego rozliczenia; po pełnym pokryciu faktura automatycznie przechodzi do statusu **„Zapłacono”**. Lista faktur pokazuje kolumnę **Opłacono** oraz filtry **Nieopłacone** / **Opłacone** / **Częściowo opłacone**.

### Szybka płatność z faktury

W niektórych konfiguracjach płatność przychodząca może zostać utworzona bezpośrednio z faktury.

Typowy przebieg:

1. Ustaw fakturę w status **„Do zapłaty”**.
2. Kliknij **„Rejestruj płatność”**.
3. Sprawdź utworzoną kartę **płatności przychodzącej** i zapisz ją.

System zwykle:

- podstawia partnera, firmę, konta/kasy oraz typ płatności (w zależności od ustawień);
- ustawia kwotę równą pozostałej kwocie do zapłaty;
- od razu wykonuje **dopasowanie płatności** z tą fakturą, dzięki czemu dług maleje.

Zobacz: [Płatności przychodzące](incoming-payments.md).

## Drukowanie

Predefiniowany dokument pierwotny nosi tytuł **„Faktura”**, a każdy typ faktury ma własną listę **Szablonów faktury**. W zależności od konfiguracji wydruk może dodatkowo zawierać kontrakt, lokalizację, jednostki miary partnera oraz kwoty opłacone/pozostałe. Drukowanie wymaga co najmniej jednego włączonego szablonu dla danego typu faktury; zobacz [Raporty i drukowanie](reports-and-printing.md).

Zobacz także: [Płatności](payments.md), [Dług i kalendarz płatności](debt-and-calendar.md).