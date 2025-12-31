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

1. Wygeneruj w MyCompany **żądanie do podpisu** i zapisz plik na dysku.
2. Podpisz plik zgodnie z zasadami obowiązującymi w Twojej organizacji (np. podpisem kwalifikowanym / narzędziem firmowym).
3. Wczytaj podpisany plik do MyCompany, aby zakończyć logowanie.

Co warto wiedzieć:

- jest to wariant „na żądanie” — zwykle wymaga ręcznego podpisu poza systemem,
- jeśli podpis lub wczytanie zakończy się błędem, zacznij od ponownego wygenerowania żądania i upewnienia się, że podpisujesz właściwy plik.

## 2) Logowanie certyfikatem KSeF

W tym wariancie MyCompany może:

- utworzyć zgłoszenie certyfikatu KSeF,
- sprawdzić status zgłoszenia,
- pobrać certyfikat,
- wskazać certyfikat domyślny i używać go do logowania.

Typowy przebieg:

1. Pobierz certyfikaty publiczne KSeF (jeśli nie były pobrane wcześniej) — są potrzebne do operacji szyfrowania i bezpiecznej komunikacji.
2. Utwórz zgłoszenie certyfikatu (nadaj nazwę i wybierz typ) zgodnie z procedurą Twojej organizacji.
3. Sprawdzaj status zgłoszenia do momentu, aż pojawi się informacja, że certyfikat jest gotowy do pobrania.
4. Po nadaniu numeru seryjnego pobierz certyfikat.
5. Ustaw certyfikat jako domyślny (jeśli chcesz, aby system używał go automatycznie przy logowaniu).
6. Zaloguj się certyfikatem.

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

1. Utwórz token (nadaj opis i wybierz wymagane uprawnienia).
2. Ustaw token jako domyślny.
3. Zaloguj się tokenem.

Wskazówka: jeśli nie wiesz, jakie uprawnienia są potrzebne, zacznij od uprawnień związanych z **odczytem faktur** i **wysyłką/pobieraniem faktur**, a potem dopasuj je do procesu w Twojej organizacji.

Zasady bezpieczeństwa:

- token traktuj jak dane dostępowe (nie wysyłaj go e‑mailem, nie wklejaj do komunikatorów),
- ogranicz uprawnienia tokena do minimum wymaganego procesem,
- jeśli token został ujawniony lub podejrzewasz nadużycie — dezaktywuj go i wygeneruj nowy.