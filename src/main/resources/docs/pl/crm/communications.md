---
title: "Komunikacja: połączenia i e‑maile"
---

W systemie możesz powiązać komunikację z leadami, aby nie tracić kontekstu pracy:

- **połączenia**;
- **e‑maile**.

Zakładka **„Połączenia”** jest zawsze obecna w sekcji **„Leady”**. Zakładka **„Email”** pojawia się po skonfigurowaniu konta poczty (konta dla leadów lub konta poczty bieżącego użytkownika). Obie zakładki stają się użyteczne po skonfigurowaniu odpowiednich integracji telefonii i poczty.

## Połączenia

### Dzwonienie z karty leadu

Jeśli skonfigurowano integrację telefonii IP i Twojemu użytkownikowi przypisano numer wewnętrzny centrali, karta leadu pokazuje przycisk **„Zadzwoń”** (gdy pole **„Telefon”** jest uzupełnione). Kliknięcie inicjuje połączenie wychodzące na numer leadu.

### Co możesz zrobić w karcie połączenia

W karcie połączenia możesz:

- otworzyć powiązany **lead**;
- utworzyć **lead** z połączenia (jeśli żaden nie jest jeszcze powiązany);
- dołączyć połączenie do jednego z leadów [partnera](../masterdata/partners.md) połączenia — karta pokazuje listę leadów tego partnera.

Gdy połączenie zostaje powiązane z leadem, który nie ma jeszcze **Klienta**, klient jest uzupełniany automatycznie na podstawie partnera zidentyfikowanego dla połączenia.

Przy tworzeniu leadu z połączenia system zwykle:

- przenosi numer dzwoniącego do pola leadu **„Telefon”**;
- ustawia w leadzie **„Sprzedawca”** na pracownika powiązanego z połączeniem;
- otwiera kartę leadu, aby uzupełnić pozostałe dane.

Jeśli lead już istnieje (np. był wcześniejszy kontakt z tym numerem), dołącz połączenie do istniejącego leadu.

### Zakładka „Połączenia” w sekcji „Leady”

Sekcja **„Leady”** zawiera zakładkę **„Połączenia”** z połączeniami bieżącego użytkownika.

Zwykle dostępne:

- filtr **„Gotowy”** — połączenia, które wymagają przetworzenia;
- główne dane połączenia: czas, strony, czas trwania, rezultat;
- otwarcie leadu dla połączenia (jeśli znaleziono/powiązano);
- przetwarzanie połączeń:
  - **„Utwórz”** — utwórz lead z połączenia;
  - **„Dołącz”** — powiąż połączenie ze znalezionym leadem;
  - **„Ignorowany”** — oznacz połączenie jako niewymagające przetworzenia.

#### Rekomendowany scenariusz przetwarzania połączeń

1. Otwórz zakładkę **„Połączenia”**.
2. Pozostaw włączony filtr **„Gotowy”**.
3. Dla każdego wiersza:
   - jeśli automatycznie znaleziony lead jest poprawny — kliknij **„Dołącz”**, aby powiązać z nim połączenie (w razie potrzeby najpierw otwórz lead i sprawdź);
   - jeśli lead nie jest znaleziony — kliknij **„Utwórz”** i uzupełnij lead;
   - jeśli potrzebny jest inny lead — otwórz kartę połączenia i powiąż połączenie z jednym z leadów partnera;
   - jeśli połączenie nie dotyczy pracy z leadami — oznacz jako **„Ignorowany”**.

Więcej informacji o konfiguracji konkretnych dostawców telefonii znajdziesz tutaj:
- [Telefonia IP Zadarma](zadarma.md)

## E‑maile

### Napisz e‑mail z leadu

W karcie leadu akcja **„Napisz e-mail”** jest dostępna, jeśli pole **„Email”** jest uzupełnione.

Możliwe zachowanie:

- jeśli skonfigurowano szablony e‑mail pasujące do leadu (dobierane wg jego typu i statusu), system proponuje wybór szablonu i generuje temat oraz treść;
- w przeciwnym razie domyślny klient poczty otwiera nową wiadomość z uzupełnionym odbiorcą i nazwą leadu jako tematem.

Rekomendacja: przed wysłaniem zweryfikuj adres w polu **„Email”**.

### Zakładka „Email” w sekcji „Leady”

Jeśli skonfigurowano konto poczty, sekcja **„Leady”** pokazuje zakładkę **„Email”** z listą wiadomości do przetworzenia.

Zwykle dostępne:

- filtr **„Gotowy”** — wiadomości, które wymagają przetworzenia;
- podgląd tematu, nadawcy, daty oraz tekstu wiadomości;
- tworzenie lub powiązanie leadu:
  - **„Utwórz”** — utwórz lead z e‑maila;
  - **„Dołącz”** — dołącz e‑mail do znalezionego leadu;
- **„Ignorowany”** — oznacz e‑mail jako niewymagający przetworzenia;
- podgląd oryginalnej wiadomości i załączników (jeśli obecne).

Przy tworzeniu leadu z e‑maila system uzupełnia lead automatycznie: **nazwę** z tematu wiadomości, **opis** z jej treści, **email** z adresu nadawcy; załączniki wiadomości są zapisywane jako pliki leadu. Jeśli adres nadawcy pasuje do [partnera](../masterdata/partners.md), zostaje on ustawiony jako **Klient** leadu. Akcja **„Dołącz”** również kopiuje załączniki wiadomości do plików istniejącego leadu.

#### Rekomendowany scenariusz przetwarzania e‑maili

1. Otwórz zakładkę **„Email”**.
2. Pozostaw włączony filtr **„Gotowy”**.
3. Dla każdego e‑maila:
   - jeśli automatycznie znaleziony lead jest poprawny — kliknij **„Dołącz”**, aby powiązać z nim wiadomość (w razie potrzeby najpierw otwórz lead i sprawdź);
   - jeśli nie ma leadu — utwórz go z e‑maila;
   - jeśli nie wymaga przetworzenia — oznacz jako **„Ignorowany”**.

### E‑maile w karcie leadu

Karta leadu może pokazywać listę powiązanych e‑maili. To pomaga zobaczyć historię korespondencji w kontekście leadu.

## Jak rozpoznać, czy komunikacja wymaga przetworzenia

Zwykle używa się filtra **„Gotowy”**:

- **„Gotowy”** — komunikacja wymaga przetworzenia w kontekście leadu (trzeba utworzyć lead, dołączyć do leadu albo jawnie oznaczyć, że przetworzenie nie jest wymagane).
- **„Ignorowany”** — komunikacja nie dotyczy sprzedaży lub nie wymaga działań na leadach.

Rekomendacja: nie zostawiaj komunikacji w filtrze **„Gotowy”** bez decyzji. Nawet jeśli nie masz teraz czasu, otwórz lead i zapisz następny krok w „Opis”.

## Praktyczne wskazówki

#### Jeśli po numerze telefonu znaleziono niewłaściwy lead

Przy kolejnym połączeniu system automatycznie znajduje po numerze telefonu jeden lead (ostatni otwarty). Jeśli to nie ten lead:

1. Otwórz kartę połączenia.
2. Przejrzyj [partnera](../masterdata/partners.md) i kontekst.
3. Powiąż połączenie z właściwym leadem z listy leadów partnera.

#### Jeśli e‑mail przyszedł od nowego kontaktu

Utwórz lead z e‑maila i upewnij się, że uzupełnisz:

- nazwę (krótko: czego dotyczy zapytanie);
- email;
- sprzedawcę;
- opis (czego klient potrzebuje i kiedy odpowiedzieć).