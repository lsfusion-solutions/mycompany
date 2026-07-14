---
title: Płatności wychodzące
---

Płatność wychodząca rejestruje **wypłatę środków** z firmowego konta bankowego lub z kasy.

Typowe scenariusze:

- płatność do dostawcy;
- zwrot dla klienta;
- inne wypłaty dla [partnerów](../masterdata/partners.md).

## Gdzie znaleźć

Otwórz: **„Fakturowanie” → „Operacje” → „Płatności wychodzące”**.

## Tworzenie płatności wychodzącej

1. Otwórz listę **„Płatności wychodzące”**.
2. Kliknij **„Utwórz”**.
3. Uzupełnij pola.
4. W razie potrzeby wykonaj **dopasowanie płatności** z dokumentami.
5. Zapisz dokument.

### Tworzenie płatności wychodzącej z faktury zakupu

Jeśli rejestrujesz płatności do dostawców na podstawie dokumentów, płatność wychodząca może zostać utworzona bezpośrednio z [faktury zakupu](bills.md).

Typowy przebieg:

1. Otwórz wymaganą **[fakturę zakupu](bills.md)**.
2. Ustaw dokument w status **„Do zapłaty”** (jeśli nadal jest w statusie Projekt).
3. Kliknij **„Rejestruj płatność”**.
4. Otworzy się utworzona karta płatności wychodzącej — zweryfikuj pola, w razie potrzeby skoryguj kwotę i zapisz.

Co zwykle jest wypełniane automatycznie:

- **partner** i jego konto/kasa;
- **firma** i jej konto/kasa;
- **typ** płatności (w zależności od typu faktury zakupu i ustawień);
- **waluta** (jeśli używana);
- **kwota** — zwykle równa bieżącej pozostałej kwocie do zapłaty dla faktury zakupu.

Co dzieje się z dopasowaniem:

- system od razu wykonuje **dopasowanie płatności** z tą fakturą zakupu, dzięki czemu [dług](debt-and-calendar.md) maleje;
- jeśli potrzebne jest inne dopasowanie (płatność częściowa, kilka płatności), dostosuj je w sekcji **„Dopasowanie płatności”**.

Ważne o statusach:

- akcja **„Rejestruj płatność”** jest dostępna tylko wtedy, gdy faktura zakupu ma status **„Do zapłaty”**;
- utworzona płatność wychodząca jest tworzona w statusie **„Do zapłaty”** (tzn. przygotowana do potwierdzenia wypłaty). Faktyczną wypłatę potwierdzasz akcją **„Oznacz jako Wykonano”**.

Płatność wychodząca utworzona ręcznie zaczyna w statusie **„Projekt”**. Pełny przepływ to **Projekt → Do zapłaty → Wykonano → Anulowano**: akcja **„Oznacz jako Do zrobienia”** przenosi z „Projekt” do **„Do zapłaty”**, a **„Oznacz jako Wykonano”** potwierdza wypłatę.

## Pola główne

Typowa płatność wychodząca zawiera:

- **Typ** — określa, skąd są wypłacane środki (bank/kasa) i jakie konta można wybierać.
- **Data i czas**.
- **Numer**.
- **Kwota**.
- **Partner** — komu wypłacane są środki.
- **Konto/kasa partnera** (jeśli używane).
- **Firma**.
- **Konto/kasa firmy** — skąd wypłacane są środki.
- **Waluta** — wynika z konta firmy/typu.
- **Konto analityczne** (pozycja przepływów pieniężnych) — dopuszczone dla wybranego typu płatności.
- **Notatka**.
- **Podstawa** — krótki tekst odniesienia; jeśli zawiera numer faktury zakupu, płatność zostaje **automatycznie dopasowana** do tej faktury zakupu.

## Dopasowanie płatności i zamykanie długu

Jeśli rozliczenia prowadzisz na podstawie dokumentów, dopasuj płatność wychodzącą do dokumentów, aby zamykała [dług](debt-and-calendar.md) dla wybranych dokumentów.

W karcie płatności wychodzącej jest sekcja **„Dopasowanie płatności”**:

- **Rozliczone** — już powiązane kwoty;
- **Dostępne** — dokumenty, które można opłacić (dla płatności wychodzącej są to [faktury zakupu](bills.md) dostawców);
- akcja **Rozlicz** (albo dwukrotne kliknięcie wiersza).

Dopasowanie jest dozwolone tylko pomiędzy dokumentami **tego samego partnera i tej samej firmy**.

### Płatność częściowa

Jeśli kwota płatności jest mniejsza niż kwota dokumentu, [dług](debt-and-calendar.md) dokumentu pozostaje częściowo otwarty — można go zamknąć kolejnymi płatnościami.

### Jedna wypłata dla wielu dokumentów

Płatność wychodząca może zostać rozliczona z kilkoma dokumentami (np. opłacenie kilku [faktur zakupu](bills.md) jedną kwotą).

### Nadpłata

Jeśli zapłacono więcej, niż rozliczono z dokumentami, pozostałość pozostaje **nierozliczona**, dopóki nie zostanie zastosowana do innego dokumentu tego samego [partnera](../masterdata/partners.md).

## Powiązanie z płatnością przychodzącą

Jeśli typ płatności ma powiązany typ przychodzący, płatność wychodząca w statusie **„Do zapłaty”** pokazuje akcję **„Utwórz płatność przychodzącą”** (albo tworzy ją automatycznie, gdy typ ma ustawione **„Automatycznie twórz płatność przychodzącą”**). W ten sposób rejestruje się przelewy wewnętrzne — „przelew wychodzący” w parze z „przelewem przychodzącym”.

## Wyszukiwanie płatności „nierozliczonych”

Lista płatności wychodzących ma filtr **„Nierozliczone”** — pomaga znaleźć płatności, które nie są jeszcze powiązane z dokumentami (wpływają one na ogólne saldo partnera, ale nie zamykają kwoty pozostałej żadnego konkretnego dokumentu).

## Drukowanie

Predefiniowany formularz wydruku nosi tytuł **„Płatność wychodząca”**; drukowanie korzysta z **szablonów płatności wychodzącej** skonfigurowanych dla typu płatności.

Zobacz: [Raporty i drukowanie](reports-and-printing.md).

## Typowe sytuacje i rozwiązania

### Płatność jest wprowadzona, ale dług dokumentu nie zmienił się

Zwykle trzeba wykonać **dopasowanie płatności** z dokumentami.

### Nie można wybrać konta/kasy

Sprawdź, czy **typ** płatności odpowiada rodzajowi wybranego konta/kasy (bank/kasa). W razie potrzeby zmień typ.

### Nie widzę przycisku „Rejestruj płatność” na fakturze zakupu

Zwykle wynika to z jednej z przyczyn:

- [faktura zakupu](bills.md) nie została ustawiona w status **„Do zapłaty”**;
- dla typu faktury zakupu nie skonfigurowano odpowiedniego typu płatności wychodzącej;
- dla faktury zakupu nie ma pozostałej kwoty do zapłaty (jest już opłacona albo kwota do zapłaty wynosi zero).