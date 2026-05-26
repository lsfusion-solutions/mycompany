---
title: KSeF — dostęp i logowanie
---

W MyCompany dostępne są trzy sposoby logowania do KSeF. Wybór zależy od tego, jak w Twojej organizacji nadano dostęp do KSeF.

Ważne: logowanie dotyczy **konkretnej firmy** (podmiotu). Jeśli w systemie pracujesz na wielu firmach, upewnij się, że wykonujesz logowanie dla właściwej.

## 1) Logowanie przez podpisanie żądania

Ten wariant jest przydatny, gdy:

- chcesz zalogować się jednorazowo,
- korzystasz z zewnętrznego narzędzia do podpisu.

Typowy przebieg:

1. Otwórz **Administracja → Integracja → KSeF** i przejdź do zakładki **Ogólne**.
2. Wybierz firmę w panelu po lewej stronie. Dla firmy musi być zdefiniowany NIP.
3. Kliknij przycisk **Pobierz żądanie autoryzacyjne** i zapisz plik na dysku.
4. Podpisz plik zgodnie z zasadami obowiązującymi w Twojej organizacji (np. podpisem kwalifikowanym / narzędziem firmowym).
5. Kliknij przycisk **Zaloguj podpisanym żądaniem autoryzacyjnym** i wczytaj podpisany plik do MyCompany, aby zakończyć logowanie.
6. Na liście tokenów kliknij **Pobierz status** dla nowo utworzonego wpisu.
7. Następnie kliknij **Wykorzystaj token dostępu**, aby pobrać token dostępowy.

Co warto wiedzieć:

- jest to wariant „na żądanie” — zwykle wymaga ręcznego podpisu poza systemem,
- jeśli podpis lub wczytanie zakończy się błędem, zacznij od ponownego wygenerowania żądania i upewnienia się, że podpisujesz właściwy plik.
- po zalogowaniu **koniecznie** uruchom akcje **Pobierz status** oraz **Wykorzystaj token dostępu** dla nowo utworzonego wpisu tokenu.

## 2) Logowanie certyfikatem KSeF

W tym wariancie MyCompany może:

- utworzyć zgłoszenie certyfikatu KSeF,
- sprawdzić status zgłoszenia,
- pobrać certyfikat,
- wskazać certyfikat domyślny i używać go do logowania.

Typowy przebieg:

1. Otwórz **Administracja → Integracja → KSeF** i przejdź do zakładki **Certyfikaty**.
2. Kliknij przycisk **Pobierz certyfikaty kluczy publicznych** (jeśli certyfikaty publiczne nie były jeszcze pobrane).
3. W sekcji **Wygeneruj** uzupełnij pola **Nazwa** i **Typ**, a następnie kliknij przycisk wygenerowania zgłoszenia certyfikatu.
4. Zaznacz certyfikat na liście i kliknij **Pobierz status**, aż pojawi się numer seryjny.
5. Kliknij **Pobierz**, aby pobrać certyfikat.
6. Ustaw certyfikat jako domyślny w kolumnie **Domyślny**.
7. Wróć do zakładki **Ogólne** i kliknij **Zaloguj certyfikatem KSeF**.

Wskazówka praktyczna:

- jeśli logowanie ma działać „bezobsługowo” (np. z automatyzacją), certyfikat bywa wygodniejszy niż podpis jednorazowy.

## 3) Logowanie tokenem KSeF

W tym wariancie MyCompany pozwala zarządzać tokenami KSeF:

- utworzyć token (z opisem i zestawem uprawnień),
- pobrać listę tokenów z KSeF,
- wskazać token domyślny,
- zalogować się tokenem,
- dezaktywować token (wyłączyć go w KSeF).

Typowy przebieg:

1. Otwórz **Administracja → Integracja → KSeF** i przejdź do zakładki **Tokeny**.
2. (Opcjonalnie) kliknij **Pobierz tokeny**, aby pobrać listę z KSeF.
3. W sekcji **Tokeny** wybierz uprawnienia w polu **Uprawnienia** (okno **Uprawnienie KSeF**) i wpisz opis w polu **Opis**.
4. Kliknij przycisk **Wygeneruj token KSeF**.
5. Ustaw token jako domyślny w kolumnie **Domyślny**.
6. Wróć do zakładki **Ogólne** i kliknij **Zaloguj tokenem KSeF**.

Wskazówka: jeśli nie wiesz, jakie uprawnienia są potrzebne, zacznij od uprawnień związanych z **odczytem faktur** i **wysyłką/pobieraniem faktur**, a potem dopasuj je do procesu w Twojej organizacji.

Zasady bezpieczeństwa:

- token traktuj jak dane dostępowe (nie wysyłaj go e‑mailem, nie wklejaj do komunikatorów),
- ogranicz uprawnienia tokena do minimum wymaganego procesem,
- jeśli token został ujawniony lub podejrzewasz nadużycie — dezaktywuj go i wygeneruj nowy.
