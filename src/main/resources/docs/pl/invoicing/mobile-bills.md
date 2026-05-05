---
title: Mobilne faktury zakupu
---

Mobilne faktury zakupu to uproszczony scenariusz wprowadzania [faktur zakupu](bills.md) z telefonu lub tabletu. Formularz służy do szybkiego wpisania dokumentu od dostawcy: można załadować plik lub zdjęcie, sprawdzić rozpoznane dane, jeśli rozpoznawanie jest skonfigurowane, uzupełnić kwotę albo linie i zakończyć dokument.

## Gdzie znaleźć

Otwórz **„Mobilna faktura zakupu”** z panelu lub menu mobilnego.

Lista pokazuje faktury zakupu, w których bieżący użytkownik jest wpisany w polu **Nasz przedstawiciel**. Jeśli nie widzisz oczekiwanego dokumentu, sprawdź pole **Nasz przedstawiciel** w dokumencie albo otwórz standardową listę [Faktury zakupu](bills.md).

## Przed rozpoczęciem

Aby scenariusz mobilny działał wygodnie:

- typ faktury zakupu powinien mieć włączoną flagę **Mobilny** w ustawieniach typów faktur zakupu;
- jeśli skonfigurowano tylko jeden mobilny typ faktury zakupu, jest on wybierany automatycznie, a pole typu jest ukryte w karcie mobilnej;
- do rozpoznawania pliku wybrany typ faktury zakupu musi mieć skonfigurowany opis importu OpenAI;
- do zakończenia dokumentu z natychmiastową płatnością wychodzącą bieżący użytkownik musi mieć skonfigurowane **Konto gotówkowe**.

Jeśli czegoś brakuje, poproś administratora o sprawdzenie [Ustawień i katalogów](settings.md).

## Lista mobilnych faktur zakupu

Lista mobilna jest celowo krótka. Zwykle pokazuje:

- datę i godzinę;
- dostawcę;
- kwotę;
- status.

Użyj filtra **Dostawca**, aby zawęzić listę. Użyj **Dodaj**, aby utworzyć nową mobilną fakturę zakupu, **Edytuj** lub dwuklik/tap na wierszu, aby otworzyć istniejący dokument, oraz **Usuń** dla edytowalnych dokumentów utworzonych przez pomyłkę.

## Tworzenie mobilnej faktury zakupu

1. Otwórz **Mobilna faktura zakupu**.
2. Kliknij **Dodaj**.
3. Sprawdź nagłówek dokumentu:
   - typ, jeśli jest widoczny;
   - datę i godzinę;
   - numer;
   - dostawcę;
   - notatkę.
4. Prześlij plik/zdjęcie dokumentu od dostawcy albo uzupełnij dokument ręcznie.
5. Sprawdź kwotę, podatek i linie.
6. Potwierdź formularz, gdy dokument jest poprawny.

Gdy mobilny typ faktury zakupu jest wybierany automatycznie, system uzupełnia też bieżącego użytkownika w polu **Nasz przedstawiciel** i używa pól **Firma** i **Konto gotówkowe** użytkownika tam, gdzie jest to dostępne.

## Ładowanie pliku lub zdjęcia

Użyj **Prześlij** w mobilnej karcie faktury zakupu, aby dodać dokument od dostawcy.

Ważne szczegóły:

- mobilna karta przechowuje jeden bieżący plik dla faktury zakupu; załadowanie nowego pliku zastępuje poprzedni załącznik;
- jeśli typ faktury zakupu ma skonfigurowany opis OpenAI, załadowanie pliku uruchamia też rozpoznawanie;
- po rozpoznaniu zawsze sprawdź dostawcę, numer, daty, linie, podatki i kwotę;
- jeśli opis nie jest skonfigurowany, plik zostanie dołączony, ale dane faktury trzeba wprowadzić ręcznie.

Rozpoznawanie korzysta z istniejących danych słownikowych. Nowi dostawcy, towary, waluty lub podatki nie są tworzone automatycznie.

## Linie i kwota

Mobilna karta obsługuje zarówno szybkie wprowadzenie kwoty, jak i pracę na liniach:

- użyj pola **Kwota** w nagłówku dla prostej faktury z jedną kwotą;
- gdy faktura ma kilka linii, wpisuj kwoty w liniach;
- linia może zawierać opis, towar/usługę, ilość, cenę, kwotę i podatek;
- dodawaj lub usuwaj linie, dopóki dokument jest edytowalny.

Jeśli wpiszesz kwotę w nagłówku pustego dokumentu, system utworzy albo zaktualizuje bieżącą linię faktury zakupu na tę kwotę.

## Zakończenie i płatność

Jeśli widoczny jest przełącznik **Wykonano**, może on zakończyć mobilną fakturę zakupu i utworzyć powiązaną płatność wychodzącą z pola **Konto gotówkowe** bieżącego użytkownika.

Używaj go dopiero po sprawdzeniu:

- dostawcy;
- kwoty;
- podatku;
- dołączonego pliku;
- źródła płatności.

Po włączeniu **Wykonano** system tworzy wykonaną [płatność wychodzącą](outgoing-payments.md) na pozostałą kwotę do zapłaty i dopasowuje ją do faktury zakupu. Jeśli **Wykonano** zostanie wyłączone, powiązana mobilna płatność wychodząca zostanie usunięta.

## Rozwiązywanie problemów

#### Nie widzę pozycji „Mobilna faktura zakupu”

Twoja rola albo konfiguracja może nie zawierać formularza mobilnego. Poproś administratora o sprawdzenie dostępu i włączonych modułów.

#### Pole typu nie jest widoczne

To normalne, jeśli system ma domyślny mobilny typ faktury zakupu. Typ jest wybierany automatycznie.

#### Plik nie został rozpoznany

Sprawdź, czy typ faktury zakupu ma skonfigurowany opis OpenAI, klucz API OpenAI jest uzupełniony, a plik jest czytelny. Dokument nadal można uzupełnić ręcznie.

#### Przełącznik „Wykonano” nie jest widoczny

Bieżący użytkownik może nie mieć skonfigurowanego pola **Konto gotówkowe** albo faktura zakupu może być tylko do odczytu.

#### Nie mogę edytować albo usunąć faktury zakupu

Faktur zakupu ze statusem **Wykonano**, anulowanych lub tylko do odczytu nie można edytować z formularza mobilnego. Jeśli dokument wymaga korekty, użyj standardowego procesu [Faktury zakupu](bills.md).
