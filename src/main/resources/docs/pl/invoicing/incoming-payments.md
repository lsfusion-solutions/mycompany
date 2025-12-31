---
title: Płatności przychodzące
---

Płatność przychodząca rejestruje **wpływ środków od [partnera](../masterdata/partners.md)** (np. klienta) na firmowe **konto bankowe** lub do **kasy**.

Płatności przychodzące są zwykle używane do:

- zarejestrowania faktu wpływu środków;
- dopasowania płatności do dokumentów (zamykanie [długu](debt-and-calendar.md) dla [faktur](invoices.md));
- sprawdzenia, które dokumenty są opłacone w całości/częściowo i jaki [dług](debt-and-calendar.md) pozostaje.

## Gdzie znaleźć

Otwórz: **„Fakturowanie” → „Operacje” → „Płatności przychodzące”**.

## Tworzenie płatności przychodzącej

1. Otwórz listę **„Płatności przychodzące”**.
2. Kliknij **„Utwórz”**.
3. Uzupełnij wymagane pola (patrz niżej).
4. W razie potrzeby wykonaj **dopasowanie płatności** z dokumentami.
5. Zapisz dokument.

### Tworzenie płatności przychodzącej z faktury

Jeśli rejestrujesz płatności na podstawie [faktur](invoices.md), płatność przychodząca może zostać utworzona bezpośrednio z faktury.

Typowy przebieg:

1. Otwórz wymaganą **[fakturę](invoices.md)**.
2. Ustaw dokument w status **„Do zapłaty”** (jeśli nadal jest w statusie Projekt).
3. Kliknij **„Rejestruj płatność”**.
4. Otworzy się utworzona karta płatności przychodzącej — zweryfikuj pola i zapisz.

Co zwykle jest wypełniane automatycznie:

- **partner** i jego konto/kasa;
- **firma** i jej konto/kasa;
- **typ** płatności (w zależności od typu faktury i ustawień);
- **waluta** (jeśli używana);
- **kwota** — zwykle równa bieżącej pozostałej kwocie do zapłaty dla faktury.

Co dzieje się z dopasowaniem:

- system od razu wykonuje **dopasowanie płatności** z tą fakturą, dzięki czemu dług maleje;
- jeśli zmienisz kwotę płatności albo potrzebujesz innego dopasowania, dostosuj je w sekcji **„Dopasowanie płatności”**.

Ważne o statusach:

- akcja **„Rejestruj płatność”** jest zwykle dostępna tylko wtedy, gdy faktura ma status **„Do zapłaty”**;
- utworzona płatność przychodząca jest zwykle tworzona w statusie **„Wykonano”** (tzn. rejestruje fakt wpływu środków).

## Pola główne

Dokładny zestaw pól zależy od konfiguracji, ale typowa płatność przychodząca zawiera:

- **Typ** — określa, skąd pochodzą środki (bank/kasa) i jakie konta można wybierać.
- **Data i czas** — kiedy zarejestrowano wpływ.
- **Numer** — wewnętrzny numer dokumentu.
- **Kwota** — kwota wpływu.
- **Partner** — od kogo pochodzą środki.
- **Konto/kasa partnera** (jeśli używane) — dane [partnera](../masterdata/partners.md).
- **Firma** — organizacja przyjmująca środki.
- **Konto/kasa firmy** — gdzie przyjęto środki (konto bankowe lub kasa).
- **Notatka** — dowolny komentarz.
- **Podstawa** — pole tekstowe na cel/opis płatności.

### Uwagi dotyczące wyboru kont/kas

Typ płatności może ograniczać dostępne opcje:

- dla niektórych typów dostępne są tylko **konta bankowe**;
- dla innych dostępna jest tylko **kasa**.

Jeśli wybierzesz konto/kasę niezgodną z typem płatności, system może nie pozwolić na zapis dokumentu.

## Dopasowanie płatności i zamykanie długu

Aby płatność przychodząca zmniejszała [dług](debt-and-calendar.md) dla konkretnych dokumentów, musisz **dopasować** ją do tych dokumentów.

W karcie płatności zwykle jest sekcja **„Dopasowanie płatności”** z:

- **Rozliczone** — kwoty już powiązane z dokumentami;
- **Dostępne** — dokumenty, które można opłacić tą płatnością;
- akcją **Rozlicz** — powiązanie kwoty z wybranym dokumentem.

### Jak rozliczyć płatność

1. Otwórz płatność przychodzącą.
2. Przejdź do **„Dopasowanie płatności”**.
3. Na liście **„Dostępne”** wybierz dokument, który chcesz opłacić.
4. Kliknij **„Rozlicz”**.
5. Sprawdź, czy w **„Rozliczone”** pojawiła się pozycja z rozliczoną kwotą.

### Płatność częściowa

Jeśli kwota płatności jest mniejsza niż kwota dokumentu:

- dokument jest opłacony **częściowo**;
- pozostała kwota pozostaje jako **[dług](debt-and-calendar.md)**;
- można ją zamknąć kolejnymi płatnościami.

### Jedna płatność dla wielu dokumentów

Jeśli [partner](../masterdata/partners.md) opłacił jednocześnie kilka dokumentów, dopasuj płatność do kilku pozycji — po jednej na każdy dokument.

### Nadpłata i zaliczka

Jeśli kwota płatności jest większa niż kwota rozliczona:

- część kwoty pozostaje **nierozliczona** (do czasu dalszego rozliczenia),
- albo jest traktowana jako **zaliczka** (jeśli używany jest odpowiedni mechanizm/ustawienia).

Wskazówka praktyczna: jeśli spodziewasz się przyszłych dokumentów od tego [partnera](../masterdata/partners.md), wygodnie jest utrzymać nadpłatę jako zaliczkę, a następnie rozliczyć zaliczkę później.

## Wyszukiwanie płatności „nierozliczonych”

Lista płatności przychodzących może mieć filtr **„Nierozliczone”** — pomaga szybko znaleźć płatności, które nie są jeszcze powiązane z dokumentami i dlatego nie zmniejszają długu.

## Drukowanie

Jeśli w Twojej konfiguracji są podłączone wydruki, płatność przychodzącą można drukować.

Zobacz: [Raporty i drukowanie](reports-and-printing.md).

## Typowe sytuacje i rozwiązania

### Płatność jest wprowadzona, ale dług nie zmalał

Sprawdź:

1. Czy wykonano **dopasowanie płatności** z dokumentami.
2. Czy wybrano właściwego partnera i firmę.
3. Czy dokument jest w statusie Anulowan (jeśli anulowanie jest używane w Twojej konfiguracji).

### Nie można wybrać konta/kasy

Najczęstsza przyczyna to niezgodność pomiędzy **typem** płatności a rodzajem konta/kasy. Spróbuj:

- zmienić **typ** płatności;
- wybrać inne konto/kasę firmy.

### Nie widzę przycisku „Rejestruj płatność” na fakturze

Zwykle wynika to z jednej z przyczyn:

- [faktura](invoices.md) nie została ustawiona w status **„Do zapłaty”**;
- dla typu faktury nie skonfigurowano odpowiedniego typu płatności przychodzącej;
- dla faktury nie ma pozostałej kwoty do zapłaty (jest już opłacona albo kwota do zapłaty wynosi zero).