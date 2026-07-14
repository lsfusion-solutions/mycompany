---
title: Faktury zakupu
---

## Gdzie znaleźć

Otwórz **„Fakturowanie” → „Operacje” → „Faktury zakupu”**.

Dla kompaktowego wprowadzania z telefonu lub tabletu zobacz [Mobilne faktury zakupu](mobile-bills.md).

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

Lista pokazuje między innymi:

- **Numer** i **Datę**;
- **Datę dostawy** oraz **Zapłać do** (termin płatności);
- **Dostawcę** i **Typ** faktury zakupu;
- **Firmę** i **Warunki płatności**;
- **Konto dostawcy** / **Konto firmy** (konta używane do rozliczeń);
- **Indeks dostawcy** (wewnętrzny kod dokumentu u dostawcy);
- **Walutę**;
- **Opłacono** — kwotę już pokrytą dopasowanymi płatnościami;
- **Notatkę**.

Lista ma także gotowe grupy filtrów **Nieopłacone** / **Opłacone** / **Częściowo opłacone**, aby szybko wyszukiwać dokumenty według stanu rozliczenia.

## Karta faktury zakupu

### Pola główne

W nagłówku faktury zakupu zwykle uzupełnia się:

- **Typ** — [typ faktury zakupu](settings.md); ustawia wartości domyślne (numerator, domyślnego dostawcę, walutę, typ płatności, czy cena zawiera podatki);
- **Datę**, **Numer**;
- **Datę dostawy** oraz **Datę realizacji** (jeśli używana);
- **Dostawcę** — [partnera](../masterdata/partners.md) będącego dostawcą;
- **Kontrakt** (jeśli używany);
- **Konto dostawcy** / **Konto firmy** — konta rozliczeniowe. Konto dostawcy musi należeć do wybranego dostawcy, a konto firmy — do firmy;
- **Warunki płatności** (jeśli używane);
- **Walutę** — domyślnie z typu faktury zakupu; kurs zasila kwotę bazową w walucie;
- **Indeks dostawcy** — własny kod dokumentu u dostawcy, przydatny do wyszukiwania;
- **Nasz przedstawiciel** — domyślnie bieżący użytkownik;
- **Notatkę** oraz pole sformatowanego tekstu **Szczegóły**.

Karta ma także zakładki **Komentarze** i **Pliki** (`Plik faktury zakupu`) do dołączania dokumentu źródłowego i omawiania go.

#### Warunki płatności

**Warunki płatności** niosą liczbę **Dni**; po ich wybraniu system oblicza datę **Zapłać do** (`data + dni`) i zapisuje ją w dokumencie. Zapisana data następnie:

- zasila **kalendarz płatności**;
- określa, czy dokument jest **przeterminowany**.

Zobacz: [Ustawienia i katalogi](settings.md), [Dług i kalendarz płatności](debt-and-calendar.md).

### Linie

Linie zwykle zawierają:

- [towar](../masterdata/items.md)/usługę;
- ilość i cenę;
- **Kwotę** — bazę linii (`ilość × cena`); gdy typ faktury zakupu ma ustawione **Cena zawiera podatki**, kwota ta jest brutto;
- **Podatki** — [podatek](taxes.md) zastosowany do linii;
- opcjonalne kolumny **Indeks**, **Kod kreskowy** i **Kategoria**.

Jeśli podatki są skonfigurowane, podatek jest podstawiany automatycznie z karty towaru/usługi (jego podatki **zakupowe**) albo z typu dokumentu. Zobacz [Podatki](taxes.md).

Gdy dostawca posługuje się inną [jednostką miary](../masterdata/items.md) niż jednostka bazowa towaru, pojawiają się dodatkowe kolumny **jednostka dostawcy / ilość dostawcy / cena dostawcy**, aby można było wprowadzać dokument w jednostkach dostawcy.

Jeśli używane jest śledzenie **partii (lotów)**, każda linia może nieść ilości partii, a pole **kodu kreskowego** pozwala dodawać linie przez skanowanie.

Jeśli w typie faktury zakupu jest ustawiony **domyślny towar**, jest on automatycznie podstawiany do nowej linii, gdy towar nie został jeszcze wskazany (analogicznie do tego, jak **domyślny dostawca** jest podstawiany do nagłówka faktury zakupu). Przyspiesza to wprowadzanie dla typów, w których zwykle używany jest ten sam towar/usługa.

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

Faktura zakupu przechodzi przez statusy:

- **„Projekt”**;
- **„Do zapłaty”**;
- **„Zapłacono”**;
- **„Anulowano”**.

Statusy wpływają na możliwość edycji oraz dostępność wydruków. Wewnętrznie są to kumulacyjne flagi, a nie jedno pole, więc pokazywany status to „najwyższy” osiągnięty.

- w statusie **„Projekt”** można swobodnie zmieniać nagłówek i linie. Akcja **„Oznacz jako Do zrobienia”** (widoczna tylko w statusie Projekt) przenosi fakturę zakupu do statusu **„Do zapłaty”**;
- w statusie **„Do zapłaty”** dokument jest potwierdzony do dalszych działań (rejestracja płatności, drukowanie, korekty). Akcja **„Oznacz jako Zapłacone”** go zamyka;
- w statusie **„Zapłacono”** faktura zakupu jest uznawana za rozliczoną. Status ten jest także **ustawiany automatycznie**, gdy dopasowane płatności w pełni pokryją fakturę zakupu;
- **„Anuluj”** wyłącza fakturę zakupu z rozliczeń i długu. Anulowanie jest dostępne w każdym statusie z wyjątkiem Projekt/Anulowano.

Możesz również bezpośrednio przełączać te flagi przyciskami w grupie statusów oraz zablokować dokument przed edycją ręcznym przełącznikiem blokady na karcie.

Akcja **„Kopiuj”** tworzy nową fakturę zakupu w stanie „Projekt” z tym samym dostawcą, firmą, typem, notatką i liniami (daty i konta nie są kopiowane).

Faktury zakupu można także tworzyć programowo przez punkt końcowy importu HTTP JSON (`importBill`), niezależnie od opisanego wyżej importu z pliku/GPT.

### Płatność i dług

Faktura zakupu może być powiązana z [płatnościami wychodzącymi](outgoing-payments.md). Na podstawie dopasowanych płatności system oblicza:

- opłacono;
- dług.

Karta zawiera blok **Dopasowanie płatności** z dwiema podlistami — płatności **Rozliczone** oraz **Dostępne**. Dwuklik na dostępnej płatności (lub akcja **„Rozlicz”**) rozlicza ją z fakturą zakupu; rozliczona kwota zmniejsza pozostały dług, a gdy faktura zostanie w pełni pokryta, jej status automatycznie zmienia się na **„Zapłacono”**. Dopasowanie jest możliwe tylko między dokumentami tego samego partnera i firmy.

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

Jeśli w Twojej konfiguracji są włączone wydruki, fakturę zakupu można wydrukować z karty dokumentu. Predefiniowany układ nosi tytuł **„Faktura”**, a każdy typ faktury zakupu ma własną listę **Szablonów faktury zakupu**.

Dostępność wydruku najczęściej zależy od:

- statusu (np. drukowanie jest dostępne od „Do zapłaty”);
- obecności co najmniej jednego włączonego szablonu wydruku dla danego typu faktury zakupu.

Zobacz: [Raporty i drukowanie](reports-and-printing.md), [Ustawienia i katalogi](settings.md).
