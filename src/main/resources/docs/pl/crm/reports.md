---
title: Raportowanie
---

## Raport leadów

### Gdzie to znaleźć

Otwórz **„Raportowanie”**, następnie **„Raport leadów”**.

### Cel

Raport służy do analizy leadów wg czasu i atrybutów. Pomaga odpowiedzieć na pytania, takie jak:

- ile leadów utworzono w okresie;
- które typy i statusy występują najczęściej;
- jaki jest spodziewany przychód i jak rozkłada się wg sprzedawcy;
- które leady miały się zamknąć w określonym okresie.

Raport jest budowany jako tabela przestawna: możesz zmieniać wymiary i grupowania zależnie od zadania.

### Dostępne pola

Raport zwykle zawiera:

- główne atrybuty: **ID**, **Nazwa**, **Status leadu**, **Typ leadu**, **[Partner](../masterdata/partners.md)**, **Sprzedawca**, **Priorytet leadu**, **Tagi leadu**;
- prognoza: **Prawdopodobieństwo**, **Spodziewane zamknięcie**, **Spodziewany przychód**;
- kontakty: **Telefon**, **Email**;
- opis i dodatkowe dane (adres, strona internetowa, osoba kontaktowa) — jeśli uzupełnione.

### Filtr „Interwał dat”

W bloku **„Filtry”** jest dostępny parametr **„Interwał dat”**.

Ogranicza on wybór leadów wg daty leadu:

- nie wcześniej niż wybrana data „od”;
- nie później niż wybrana data „do”.

Rekomendacja: przy analizie miesięcznego lejka zawsze ustaw interwał dat, aby raport był szybki i porównywalny.

### Wymiary czasu

Raport zawiera obliczane wymiary czasu:

- wg daty leadu: minuta, godzina, data, dzień tygodnia, tydzień, miesiąc, rok;
- wg spodziewanego zamknięcia: dzień tygodnia, tydzień, miesiąc, rok.

Pozwala to np. porównać spodziewane zamknięcia wg tygodni albo ocenić obciążenie pracy menedżerów wg miesięcy.

### Przykłady przydatnych widoków

Poniżej znajdują się przykłady pytań, do których ten raport jest wygodny:

1. **Ile leadów wpada tygodniowo**
   - ustaw interwał dat;
   - grupuj wg tygodnia (wg daty leadu);
   - policz leady w każdej grupie.
2. **Planowane zamknięcia wg miesięcy**
   - ustaw interwał dat;
   - grupuj wg miesiąca spodziewanego zamknięcia;
   - analizuj spodziewany przychód.
3. **Obciążenie pracy wg sprzedawcy**
   - grupuj wg sprzedawcy;
   - dodaj wymiar wg statusu leadu;
   - porównaj spodziewany przychód i liczbę.

### Rekomendacje jakości danych

Aby raport był użyteczny:

- uzupełniaj „Spodziewany przychód” i „Spodziewane zamknięcie” przynajmniej dla leadów w toku;
- upewnij się, że sprzedawca jest przypisany;
- nie zostawiaj leadów w jednym statusie bez ruchu: przenoś je przez etapy lub zamykaj.