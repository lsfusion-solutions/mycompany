---
title: KSeF — szyfrowanie i sesja interaktywna
---

## Certyfikaty publiczne KSeF (szyfrowanie)

Przy niektórych operacjach (np. otwieraniu sesji i wysyłce faktury) MyCompany korzysta z mechanizmów szyfrowania wymaganych przez KSeF.

Jeśli w Twojej konfiguracji certyfikaty publiczne nie są jeszcze pobrane, wykonaj akcję pobrania certyfikatów publicznych KSeF.

Kiedy warto pobrać certyfikaty publiczne:

- przed pierwszym użyciem KSeF w danej instalacji,
- gdy pojawiają się błędy związane z szyfrowaniem, otwieraniem sesji lub logowaniem tokenem,
- po zmianach środowiska (np. przełączenie na inne środowisko KSeF).

Wskazówka: certyfikaty publiczne są używane do bezpiecznej wymiany danych. Użytkownik końcowy zwykle nie musi znać szczegółów kryptografii — ważne jest tylko, aby certyfikaty były pobrane, jeśli system tego wymaga.

## Sesja interaktywna KSeF

Wysyłka faktur do KSeF odbywa się w ramach **sesji interaktywnej**:

- sesja jest zakładana dla konkretnej firmy,
- ma określony czas ważności,
- służy do wysyłania faktur w postaci zaszyfrowanej.

Co warto wiedzieć:

- MyCompany może otworzyć sesję automatycznie w momencie wysyłki faktury, jeśli nie ma aktywnej sesji.
- Możesz sprawdzić status sesji oraz zamknąć sesję (jeśli w Twojej organizacji jest to wymagane procedurą).

## Jak pracować z sesją (praktyczne wskazówki)

1. **Nie musisz otwierać sesji ręcznie**, jeśli w Twojej konfiguracji sesja jest otwierana automatycznie przy wysyłce.
2. Jeśli wysyłka nie działa, sprawdź czy:
   - jesteś zalogowany do KSeF,
   - certyfikaty publiczne są pobrane,
   - istnieje aktywna sesja (nie wygasła i nie została zamknięta).
3. Jeśli sesja wygasła, najczęściej trzeba **otworzyć nową sesję** (system zrobi to automatycznie albo dostępna jest do tego osobna akcja).
4. Zamknięcie sesji bywa wymagane tylko wtedy, gdy Twoja organizacja ma taką procedurę. W przeciwnym razie możesz pozwolić, aby sesja wygasła naturalnie.

Powiązanie z wysyłką:

- faktura jest wysyłana w ramach sesji, a system zapisuje numer referencyjny zgłoszenia,
- do sprawdzenia, czy KSeF przyjął fakturę, używaj akcji „Pobierz status” (zobacz: [Wysyłka faktur](wysylka-faktur.md)).