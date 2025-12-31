---
title: Waluty i kursy walutowe
---

Słowniki **„Waluty”** i **„Kursy walutowe”** są używane do rozliczeń w różnych walutach oraz poprawnego przeliczania kwot według dat.

## Waluty

### Karta waluty

Typowe pola:

- **ID** (np. kod trzyznakowy);
- **Nazwa**;
- **Domyślne** — waluta, która jest automatycznie uzupełniana podczas tworzenia nowych danych, jeśli proces tego wymaga.

Zaleca się:

- mieć jedną walutę oznaczoną jako **waluta domyślna**;
- unikać duplikatów z tym samym kodem waluty.

## Kursy walutowe

Kurs walutowy jest przechowywany jako zestaw linii z datami i wartościami.

### Karta kursu walutowego

Karta kursu walutowego zwykle zawiera:

- **Nazwa**;
- **Waluta**, dla której utrzymywany jest kurs;
- flagę **Domyślne** (dla wybranej waluty).

Poniżej znajduje się tabela linii kursów walutowych:

- **Waluta** (waluta, z której wykonywane jest przeliczenie);
- **Data**;
- **Kurs**.

### Jak używana jest data

Podczas przeliczania według daty dokumentu/operacji system wybiera wartość kursu dla **najnowszej daty, która nie przekracza daty dokumentu**. Dlatego ważne jest regularne dodawanie nowych linii kursów walutowych, gdy wartości się zmieniają.

### Praktyczne zalecenia

- Wprowadzaj kursy walutowe z poprawnymi datami obowiązywania.
- Jeśli kurs się zmienia, dodaj nową linię z nową datą (nie edytuj „historycznych” wartości bez wyraźnej potrzeby).