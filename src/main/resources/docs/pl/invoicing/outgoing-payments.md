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

- akcja **„Rejestruj płatność”** jest zwykle dostępna tylko wtedy, gdy faktura zakupu ma status **„Do zapłaty”**;
- utworzona płatność wychodząca jest zwykle tworzona w statusie **„Do zapłaty”** (tzn. przygotowana do potwierdzenia wypłaty).

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
- **Notatka**.
- **Podstawa**.

## Dopasowanie płatności i zamykanie długu

Jeśli rozliczenia prowadzisz na podstawie dokumentów, dopasuj płatność wychodzącą do dokumentów, aby zamykała [dług](debt-and-calendar.md) dla wybranych dokumentów.

W karcie płatności wychodzącej zwykle jest sekcja **„Dopasowanie płatności”**:

- **Rozliczone** — już powiązane kwoty;
- **Dostępne** — dokumenty, które można opłacić;
- akcja **Rozlicz**.

### Płatność częściowa

Jeśli kwota płatności jest mniejsza niż kwota dokumentu, [dług](debt-and-calendar.md) dokumentu pozostaje częściowo otwarty — można go zamknąć kolejnymi płatnościami.

### Jedna wypłata dla wielu dokumentów

Płatność wychodząca może zostać rozliczona z kilkoma dokumentami (np. opłacenie kilku [faktur zakupu](bills.md) jedną kwotą).

### Nadpłata i zaliczka

Jeśli zapłacono więcej niż rozliczono z dokumentami:

- pozostałość może pozostać **nierozliczona** do wyjaśnienia,
- albo zostać potraktowana jako **zaliczka** (jeśli używany jest odpowiedni mechanizm).

## Wyszukiwanie płatności „nierozliczonych”

Lista płatności wychodzących może mieć filtr **„Nierozliczone”** — pomaga znaleźć płatności, które nie są jeszcze powiązane z dokumentami.

## Drukowanie

Jeśli w Twojej konfiguracji są włączone wydruki, płatność wychodzącą można drukować.

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