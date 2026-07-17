---
title: Rekrutacja
---

Sekcja „Rekrutacja” służy do pracy z kandydatami: rejestrowania aplikacji, przechowywania plików (CV itp.), planowania rozmów kwalifikacyjnych oraz zapisywania decyzji.

## Główne obiekty

### Aplikacja

Aplikacja zwykle zawiera:

- datę utworzenia;
- **imię, drugie imię i nazwisko** kandydata oraz **dane kontaktowe** (e-mail, telefon);
- **temat** i **opis** (opis jest wypełniany automatycznie — np. z przychodzącego e-maila kandydata — i wyświetlany tylko do odczytu);
- **podsumowanie** aplikacji;
- stanowisko;
- dział (można wybrać tylko dział **firmy**; określa on firmę aplikacji);
- rekrutera (osoba odpowiedzialna);
- oczekiwane i proponowane wynagrodzenie;
- dostępność;
- tagi (do klasyfikacji);
- pliki aplikacji.

Aplikacja przechodzi przez cztery stałe statusy: **„Nowy”**, **„Rozmowa kwalifikacyjna”**, **„Zatrudniony”** i **„Odmówiono”**. Status zmienia się automatycznie w trakcie pracy z aplikacją — zobacz scenariusze poniżej.

Wskaźniki **„Zatrudniony”** i **„Odmówiono”** na karcie można też przełączyć bezpośrednio, ale zmienia to tylko status: pracownik nie jest tworzony, powód odmowy nie jest pobierany, e-mail nie jest wysyłany (przy obu ustawionych flagach pierwszeństwo ma „Odmówiono”). Do pełnego procesu używaj akcji **„Zatrudnij”** i **„Odmów”**.

### Rozmowa kwalifikacyjna

Rozmowa kwalifikacyjna służy do zapisania etapu rekrutacji:

- uczestnicy są wskazywani w polu **„Ankieterzy”**;
- wypełniane jest **podsumowanie** rozmowy.

Umówienie rozmowy kwalifikacyjnej przenosi aplikację do statusu **„Rozmowa kwalifikacyjna”**.

## Typowe scenariusze

### Ręczne utworzenie aplikacji

1. Otwórz **„Kadry” → „Operacje” → „Aplikacje”**.
2. Utwórz aplikację.
3. Wypełnij kluczowe dane: temat, stanowisko, dział, rekrutera, dane kontaktowe.
4. Jeśli potrzeba, ustaw oczekiwane/proponowane wynagrodzenie i dostępność, a notatki wpisz na zakładce „Podsumowanie”.
5. Dołącz pliki kandydata.

### Dołączanie materiałów do aplikacji

W aplikacji możesz przechowywać pliki (np. CV) oraz komentarze:

1. Otwórz aplikację kandydata.
2. Dodaj pliki.
3. Jeśli potrzeba, dodaj komentarz.

### Umówienie rozmowy kwalifikacyjnej

1. Otwórz aplikację.
2. Uruchom **„Umów rozmowę kwalifikacyjną”**.
3. Wybierz uczestników w polu **„Ankieterzy”**.
4. Po rozmowie kwalifikacyjnej wypełnij **podsumowanie** (krótkie notatki i kolejne kroki).

Aplikacja automatycznie przechodzi do statusu **„Rozmowa kwalifikacyjna”**.

### Zarejestruj rozmowę telefoniczną

Rozmowy telefoniczne z kandydatem można rejestrować w aplikacji:

1. Otwórz aplikację.
2. Uruchom akcję rozmowy i zapisz ją na zakładce **„Połaczenia”**.

### Napisanie e-maila do kandydata

Jeśli wysyłanie e-maili jest skonfigurowane, możesz napisać e-mail z poziomu aplikacji:

1. Otwórz aplikację.
2. Uruchom **„Napisz e-mail”**.
3. Jeśli istnieją szablony, wybierz szablon — temat i treść wypełnią się automatycznie.
4. Wyślij e-mail.

Szablony e-maili są utrzymywane w ustawieniach sekcji **„Dane podstawowe”** (zakładka **„Szablony e-mail”**); proponowane są tylko szablony pasujące do bieżącego statusu aplikacji. Jeśli nie ma pasujących szablonów (albo wybór zostanie anulowany), system otworzy nową wiadomość do kandydata w domyślnym kliencie pocztowym.

### Zatrudnienie kandydata

Użyj „Zatrudnij”, gdy podjęto decyzję o zatrudnieniu kandydata:

1. Otwórz aplikację.
2. Uruchom **„Zatrudnij”**.
3. System tworzy **pracownika**, kopiując imię i nazwisko, kontakty, stanowisko i dział kandydata, oraz wiąże pracownika z aplikacją. Firma działu aplikacji staje się firmą (podmiotem prawnym) pracownika.
4. Sprawdź utworzoną kartę pracownika i uzupełnij brakujące dane.

Aplikacja automatycznie przechodzi do statusu **„Zatrudniony”** (i zostaje zamknięta); dla już zamkniętej aplikacji akcja **„Zatrudnij”** nie jest dostępna.

### Odmowa kandydatowi

1. Otwórz aplikację.
2. Uruchom **„Odmów”**.
3. Wybierz **powód odmowy**.

Jeśli wybrany powód ma szablon e-maila, system automatycznie wysyła kandydatowi e-mail z odmową. Aplikacja przechodzi do statusu **„Odmówiono”**.

Uwaga: „Zatrudniony” i „Odmówiono” to statusy zamknięte, a lista aplikacji domyślnie pokazuje otwarte (filtr **„Otwarta”**) — przełącz filtr na **„Zamknięta”**, aby zobaczyć przetworzone aplikacje (widok **„Według pozycji”** uwzględnia te same filtry listy).

## Kontrola i wygoda

Aby przyspieszyć pracę, lista aplikacji udostępnia:

- widok **„Według pozycji”** — macierz stanowisk wg statusów aplikacji;
- filtry wg statusu, tagów i innych atrybutów;
- tagi do szybkiej klasyfikacji;
- historia zmian i komentarze;
- przełącznik **„Zakaz edytowania”** (kłódka na karcie aplikacji) — czyni pola aplikacji dostępnymi tylko do odczytu niezależnie od ustawienia na poziomie statusu (zobacz [Ustawienia](settings.md)).