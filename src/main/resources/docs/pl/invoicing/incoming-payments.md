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

- akcja **„Rejestruj płatność”** jest dostępna tylko wtedy, gdy faktura ma status **„Do zapłaty”**;
- utworzona płatność przychodząca jest tworzona w statusie **„Wykonano”** (tzn. rejestruje fakt wpływu środków).

Płatność przychodząca utworzona ręcznie zaczyna w statusie **„Projekt”**; użyj akcji **„Oznacz jako Wykonano”**, aby ją zaksięgować. Płatności przychodzące nie mają osobnego etapu „Do zapłaty” — przebieg to **„Projekt” → „Wykonano” → „Anulowano”**.

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
- **Waluta** — wynika z konta firmy lub typu płatności.
- **Konto analityczne** (pozycja przepływów pieniężnych) — konto analityczne dozwolone dla wybranego typu płatności.
- **Notatka** — dowolny komentarz.
- **Podstawa** — krótki opis (np. numer dokumentu płatnika). Jeśli zawiera numer dokumentu, system **automatycznie dopasowuje** płatność do tego długu (zobacz niżej).

Wbudowane typy płatności obejmują typowe przypadki — płatność klienta (bank/kasa), zwrot od dostawcy (bank/kasa), przelew wewnętrzny oraz saldo początkowe. Typ oznaczony jako **Płatność wewnętrzna** wymaga, aby partnerem była jedna z Twoich własnych firm.

### Uwagi dotyczące wyboru kont/kas

Typ płatności może ograniczać dostępne opcje:

- dla niektórych typów dostępne są tylko **konta bankowe**;
- dla innych dostępna jest tylko **kasa**.

Jeśli wybierzesz konto/kasę niezgodną z typem płatności, system może nie pozwolić na zapis dokumentu.

## Dopasowanie płatności i zamykanie długu

Aby płatność przychodząca zmniejszała [dług](debt-and-calendar.md) dla konkretnych dokumentów, musisz **dopasować** ją do tych dokumentów.

W karcie płatności jest sekcja **„Dopasowanie płatności”** z:

- **Rozliczone** — kwoty już powiązane z dokumentami;
- **Dostępne** — dokumenty, które można opłacić tą płatnością (dla płatności przychodzącej są to [faktury](invoices.md) klientów);
- akcją **Rozlicz** — powiązanie kwoty z wybranym dokumentem.

Dopasowanie jest dozwolone tylko między dokumentami **tego samego partnera i firmy**.

### Jak rozliczyć płatność

1. Otwórz płatność przychodzącą.
2. Przejdź do **„Dopasowanie płatności”**.
3. Na liście **„Dostępne”** wybierz dokument, który chcesz opłacić.
4. Kliknij **„Rozlicz”** (albo po prostu dwuklik na wierszu).
5. Sprawdź, czy w **„Rozliczone”** pojawiła się pozycja z rozliczoną kwotą.

Wskazówka: jeśli w polu **Podstawa** wpiszesz numer faktury, płatność dopasuje się do tej faktury automatycznie — bez ręcznego kroku.

### Płatność częściowa

Jeśli kwota płatności jest mniejsza niż kwota dokumentu:

- dokument jest opłacony **częściowo**;
- pozostała kwota pozostaje jako **[dług](debt-and-calendar.md)**;
- można ją zamknąć kolejnymi płatnościami.

### Jedna płatność dla wielu dokumentów

Jeśli [partner](../masterdata/partners.md) opłacił jednocześnie kilka dokumentów, dopasuj płatność do kilku pozycji — po jednej na każdy dokument.

### Nadpłata

Jeśli kwota płatności jest większa niż kwota rozliczona, pozostała część pozostaje **nierozliczona** i może zostać zastosowana do późniejszych dokumentów tego samego [partnera](../masterdata/partners.md). (Przedpłaty, które muszą zostać rozliczone z konkretną przyszłą sprzedażą, obsługuje się za pomocą **faktur zaliczkowych**, a nie samej płatności — zobacz [Faktury](invoices.md).)

## Powiązanie z płatnością wychodzącą

Jeśli typ płatności ma powiązany typ wychodzący, zaksięgowana płatność przychodząca pokazuje akcję **„Utwórz płatność wychodzącą”** (lub tworzy ją automatycznie, gdy typ ma ustawione **Automatycznie utwórz płatność wychodzącą**). Obsługuje to przelewy wewnętrzne między Twoimi własnymi kontami — przychodzący „wpływ przelewu” w parze z wychodzącym „wypływem przelewu”.

## Wyszukiwanie płatności „nierozliczonych”

Lista płatności przychodzących ma filtr **„Nierozliczone”** — pomaga szybko znaleźć płatności, które nie są jeszcze powiązane z dokumentami i dlatego nie zamykają kwoty pozostałej żadnego konkretnego dokumentu. (Taka płatność i tak wpływa na ogólne saldo partnera.)

## Drukowanie

Predefiniowany dokument wydruku nosi tytuł **„Płatność przychodząca”**; drukowanie korzysta z **Szablonów płatności przychodzącej** skonfigurowanych dla typu płatności.

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