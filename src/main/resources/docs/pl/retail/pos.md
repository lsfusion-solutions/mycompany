---
title: Kasa i POS
---

Ekran **POS** (pulpit kasjera) to miejsce, w którym kasjer realizuje sprzedaż i zwroty: otwiera i zamyka [sesję](sessions.md), tworzy paragon, wyszukuje i skanuje towary, stosuje rabaty i [karty rabatowe](discount-cards.md), przyjmuje płatność oraz wpłaca i wypłaca gotówkę.

## Gdzie to znaleźć

- **POS** — **„Sprzedaż detaliczna” → „Operacje” → „POS”**.
- Lista **sesji** — **„Sprzedaż detaliczna” → „Operacje” → „Sesje”**.
- **Kasy** (stanowiska kasjerów) konfiguruje się w **„Sprzedaż detaliczna” → „Konfiguracja” → „Kasy”** (zobacz [Ustawienia](settings.md)).

## Układ ekranu

Ekran POS ma dwa panele:

- **lewy panel** — bieżący paragon: jego nagłówek (pole kodu kreskowego i klient), lista pozycji paragonu, szczegóły pozycji i sumy, klawiatura numeryczna oraz przyciski akcji;
- **prawy panel** — zestaw zakładek: **„Przycisk skrótu”**, **„Wyszukaj”**, **„Sesja”** i **„Według zamówienia”**.

Na dole ekranu znajduje się rząd **przycisków szybkiego dostępu** dla często sprzedawanych towarów (zobacz *Dodawanie towarów* poniżej).

## Wybór kasy i sesji

Na zakładce **„Sesja”** wybierz **kasę**. Jeśli bieżący komputer jest powiązany z kasą, jest ona podstawiana automatycznie; w przeciwnym razie dostępne są wszystkie kasy.

Aby rozpocząć pracę, otwórz **[sesję](sessions.md)**:

- naciśnij **„Otwórz sesję”** na zakładce „Sesja” — przycisk jest widoczny tylko dopóki sesja nie jest otwarta;
- pojawiają się data i czas otwarcia oraz numer sesji, a obszar paragonu staje się dostępny.

> Jeśli dla kasy jest już otwarta sesja, system pokazuje komunikat **„Jest już sesja otwarta”** i nie otwiera drugiej.

Aby zakończyć pracę, naciśnij **„Zamknij sesję”** i potwierdź.

Pole **„Gotówka w kasie”** na zakładce „Sesja” pokazuje bieżące saldo gotówki kasy.

## Tworzenie paragonu

Paragon to dokument sprzedaży tworzony w ramach sesji. Nowy pusty paragon jest tworzony automatycznie przy otwarciu sesji oraz po każdej zakończonej płatności.

### Dodawanie towarów

Towary można dodać na kilka sposobów:

- **Kod kreskowy** — wpisz lub zeskanuj kod w polu kodu kreskowego w górnej części paragonu. System rozpoznaje kod kreskowy towaru, kod towaru znakowanego lub [kartę rabatową](discount-cards.md). Nierozpoznany kod powoduje komunikat **„Kod kreskowy nie znaleziono”**.
- **Zakładka „Wyszukaj”** — znajdź towar po **nazwie** (`F6`) lub po **cenie** (`F7`), a następnie kliknij go dwukrotnie lub ustaw jego ilość, aby dodać go do paragonu. Filtr **„W dokumencie”** (`Shift+F10`) pokazuje tylko towary już dodane do paragonu; filtr **„Dostępne”** (`F10`) — tylko towary z dostępnym stanem. Lista jest automatycznie ograniczona do towarów aktywnych, dopuszczonych do sprzedaży.
- **Zakładka „Przycisk skrótu”** — kafelkowa witryna kategorii i towarów ze zdjęciami. Dotknij kategorii, aby wejść głębiej, dotknij towaru, aby go dodać; do nawigacji służą **„Z powrotem”** i **„Zresetuj”**. Kategorie i towary można ukryć z tej witryny na zakładce **„Przycisk skrótu”** formularza ustawień.
- **Przyciski szybkiego dostępu** — towary, które mają na karcie wypełnione pole **„Klawisz skrótu (nazwa)”**, są wyświetlane na dole ekranu POS jako przyciski szybkiego dodawania.

### Zmiana pozycji

- **Ilość** — zmień ją bezpośrednio w pozycji lub za pomocą ekranowej **klawiatury numerycznej**. Wprowadzenie `0` usuwa pozycję.
- Pozycję można też usunąć akcją usuwania w tabeli pozycji.
- Dla wybranej pozycji poniżej listy wyświetlane są szczegóły towaru (nazwa, jednostka miary, kod kreskowy, kod, referencja).

### Sumy paragonu

Na dole paragonu wyświetlane są **„Suma”**, **„Rabat”** i **„Do zapłaty”**.

### Nowy paragon

**„Nowy paragon”** (`Shift+F12`) odrzuca bieżący niezakończony paragon — po pytaniu o potwierdzenie — i rozpoczyna nowy paragon w tej samej sesji.

## Klient i karta rabatowa

Klienta można wskazać na paragonie:

- wprowadź lub zeskanuj **[kartę rabatową](discount-cards.md)** — właściciel karty staje się klientem paragonu;
- albo ustaw **klienta** bezpośrednio (`F5`).

Można też wprowadzić telefon i e-mail klienta. Klient jest przenoszony do zakończonej sprzedaży i do płatności.

## Rabaty

Każda pozycja paragonu ma wybór **rabatu** oraz kolumny **„Rabat”** / **„Promocyjna cena”**. Rabat można wybrać dla pozycji ręcznie, a rabaty automatyczne są wyliczane według reguł modułu [Rabaty w sprzedaży](../sales/discounts.md) (wg towaru, klienta, ilości itd.).

## Sprzedaż na podstawie zamówienia

Zakładka **„Według zamówienia”** pokazuje potwierdzone [zamówienia](../sales/orders.md) klienta bieżącego paragonu (a jeśli na paragonie nie wskazano klienta — zamówienia bez klienta). Filtr **„Dostawa dzisiaj”** zawęża je do zamówień zaplanowanych na bieżący dzień. Akcja **„Dodaj do paragonu”** przenosi pozycje zamówienia do bieżącego paragonu.

## Towary znakowane i partie

Jeśli towar jest ewidencjonowany wg partii, kody jego partii skanuje się do paragonu, a system kontroluje zeskanowaną ilość względem ilości w pozycji. Obowiązkowe znakowanie towarów (na przykład system „Czestnyj Znak”) obsługuje konfiguracja rosyjska.

## Przyjmowanie płatności

Naciśnij **„Płatność”** (`Ctrl+Enter`) — przycisk staje się aktywny, gdy paragon ma kwotę. W oknie płatności:

- wprowadź przyjętą kwotę dla jednej lub kilku **[metod płatności](payments.md)** (dozwolony jest podział płatności);
- dla gotówki **reszta** jest obliczana automatycznie;
- płatności nie można potwierdzić, jeśli metoda bezgotówkowa (na przykład karta bankowa) przekracza kwotę **„Do zapłaty”**.

Po potwierdzeniu system rejestruje płatności, kończy paragon i automatycznie otwiera kolejny pusty paragon. Zobacz [Płatności detaliczne](payments.md), aby poznać szczegóły.

## Przykład: sprzedaż od towarów do rozliczenia

Pełne przejście sprzedaży na kasie.

### Krok 1. Otwórz sesję

Otwórz ekran **POS**, na zakładce **„Sesja”** wybierz kasę i naciśnij **„Otwórz sesję”**. System tworzy pusty paragon — można rozpocząć sprzedaż.

### Krok 2. Dodaj towary do paragonu

Dodaj pozycje w dowolny dogodny sposób:

- zeskanuj kod kreskowy towaru w polu kodu kreskowego;
- albo na zakładce **„Wyszukaj”** znajdź towar po nazwie lub cenie i kliknij go dwukrotnie;
- albo wybierz towar na zakładce **„Przycisk skrótu”** lub przyciskiem szybkiego dostępu.

Każdy dodany towar pojawia się jako pozycja paragonu z ilością, ceną i (jeśli dotyczy) rabatem. Aby dodać ten sam towar ponownie, zeskanuj go jeszcze raz lub zmień ilość w pozycji.

### Krok 3. Sprawdź ilości i rabaty

- Skoryguj **ilość** w pozycjach — bezpośrednio w pozycji lub ekranową klawiaturą numeryczną; wprowadzenie `0` usuwa pozycję.
- W razie potrzeby ustaw **klienta** lub zeskanuj **kartę rabatową** — może to zmienić stosowane rabaty.
- Kontroluj sumy na dole paragonu: **„Suma”**, **„Rabat”** i **„Do zapłaty”**.

### Krok 4. Przejdź do płatności

Naciśnij **„Płatność”** (`Ctrl+Enter`) — przycisk jest aktywny, gdy paragon ma kwotę. Otwiera się okno płatności z kwotą paragonu.

### Krok 5. Rozlicz się z klientem

W oknie płatności:

- wprowadź przyjętą kwotę dla odpowiedniej **metody płatności** (na przykład „Gotówka”) — kwotę można wpisać na ekranowej klawiaturze;
- w razie potrzeby rozdziel płatność na kilka metod (na przykład część gotówką, część kartą);
- dla gotówki system obliczy i pokaże **resztę** do wydania klientowi.

Płatności nie można potwierdzić, jeśli wprowadzona kwota jest niewystarczająca lub metoda bezgotówkowa przekracza kwotę do zapłaty. Przycisk **„Zamknij”** zamyka okno bez realizacji płatności.

### Krok 6. Zakończ paragon

Naciśnij **„Ok”**. System:

- rejestruje płatności i kończy paragon — sprzedaż zostaje zapisana;
- drukuje paragon, jeśli podłączone jest urządzenie fiskalne;
- automatycznie otwiera kolejny pusty paragon do nowej sprzedaży.

Zakończony paragon trafia na listę **„Paragony”** na zakładce **„Sesja”** i do wyników sesji.

## Operacje gotówkowe

Na zakładce **„Sesja”** na listach **„Wpłata gotówki”** i **„Wypłata gotówki”** dostępne są akcje:

- **„Wpłata gotówki”** — zarejestrować wpłatę gotówki do kasy;
- **„Wypłać”** — zarejestrować wypłatę gotówki.

Obie akcje otwierają okno z klawiaturą numeryczną do wprowadzenia kwoty i są rejestrowane w otwartej sesji; wykonane operacje są widoczne na tych samych listach.

> Przyciski **„Wpłata gotówki”** i **„Wypłać”** są dostępne tylko wtedy, gdy kasa ma wskazane **konto gotówkowe** — konto dla metody płatności **„Gotówka”**. Jeśli nie jest ono skonfigurowane, przyciski są nieaktywne (a pole „Gotówka w kasie” jest puste). Konto to ustawia się w karcie kasy — zobacz [Ustawienia sprzedaży detalicznej](settings.md).

## Rejestracja fiskalna

Jeśli do kasy podłączone jest urządzenie fiskalne, otwarcie i zamknięcie sesji, sprzedaż, zwroty i operacje gotówkowe są na nim rejestrowane, a ekran POS udostępnia odpowiednie polecenia fiskalne (na przykład wydruk raportu X). Rejestracja fiskalna zależy od konfiguracji i regionu.

## Zwroty

Zwrot realizuje się z zakładki **„Sesja”**: wybierz oryginalny paragon sprzedaży na liście **„Paragony”** i naciśnij **„Zwrot”**. Listę można filtrować **„Według sesji”**, **„Według pos”** lub **„Według lokalizacji”**.

Pełna procedura — korekta pozycji zwrotu, płatność zwrotu oraz zasady wypłaty według metod płatności — jest opisana w sekcji [Zwroty](returns.md).

## Wyniki sesji

Zakładka **„Sesja”** pokazuje numer sesji, czas otwarcia i sumy, w tym kwotę przyjętą każdą metodą płatności. Listy **„Paragony”** i **„Korekty zakupu”** pokazują sprzedaż i zwroty wykonane w sesji.
