---
title: KSeF — wysyłka faktur sprzedaży i statusy
---

## Główna zasada: wysyłka jest powiązana z fakturą

Wysyłka (wyładunek) do KSeF opiera się na danych z **faktury sprzedaży** w module **„Fakturowanie”**.

Lista/sekcja **„Faktury KSeF”** służy głównie do podglądu faktur ustrukturyzowanych, pobierania ich z KSeF oraz kontroli statusów. **Nie jest przeznaczona do ręcznego wprowadzania danych i wysyłania faktur.**

## Co jest potrzebne przed wysyłką

Zanim wyślesz fakturę:

1. **Dostęp do KSeF i logowanie** — musisz być zalogowany do KSeF (certyfikatem lub tokenem). Zobacz: [Dostęp i logowanie](dostep-i-logowanie.md).
2. **Uprawnienia użytkownika** — jeśli nie widzisz akcji KSeF, może brakować uprawnień lub funkcja nie jest włączona w Twojej konfiguracji.
3. **Sesja interaktywna** — wysyłka odbywa się w ramach sesji. System może ją otworzyć automatycznie podczas wysyłki, ale w razie problemów warto sprawdzić, czy sesja jest aktywna. Zobacz: [Sesja interaktywna](sesja-i-szyfrowanie.md).

Wskazówka praktyczna: jeśli konfiguracja Twojej organizacji zakłada określony moment „zatwierdzenia” faktury, najpierw doprowadź dokument do wymaganego statusu (np. „Do zapłaty” / „Gotowe”), a dopiero potem wysyłaj.

## Jak wysłać fakturę do KSeF

1. Upewnij się, że jesteś zalogowany do KSeF (certyfikatem lub tokenem).
2. Otwórz **„Fakturowanie” → „Operacje” → „Faktury”**.
3. Utwórz lub otwórz fakturę i uzupełnij dane (partner, daty, numery, waluta, pozycje).
4. Uruchom akcję **„Wyślij do KSeF”** (jeśli jest dostępna w Twojej konfiguracji).
5. Po wysyłce system zapisze **numer referencyjny** zgłoszenia faktury.
6. Używaj akcji **„Pobierz status”**, aby odświeżać stan przetwarzania w KSeF.

Jeśli nie widzisz akcji związanych z KSeF, sprawdź uprawnienia użytkownika lub ustawienia wdrożeniowe (administrator).

## Co dzieje się po kliknięciu „Wyślij do KSeF”

Po wysyłce zwykle zobaczysz, że:

- system zapisuje **numer referencyjny** zgłoszenia,
- faktura otrzymuje pierwszy **status przetwarzania**,
- po pewnym czasie (po poprawnym przyjęciu) pojawi się **numer KSeF**.

Ważne: numer KSeF nie zawsze jest dostępny od razu. To normalne — KSeF przetwarza dokument, a numer jest nadawany po pozytywnym zakończeniu weryfikacji.

## Jak interpretować informacje zwrotne z KSeF

Typowo spotkasz:

- **Numer referencyjny** — identyfikator zgłoszenia wysyłki.
- **Kod statusu / opis statusu / szczegóły** — wynik przetwarzania faktury w KSeF.
- **Numer KSeF** — numer nadany fakturze po poprawnym przyjęciu przez KSeF.

#### Jak czytać „szczegóły”

Jeżeli faktura została odrzucona lub pojawiają się ostrzeżenia, pole „szczegóły” zwykle zawiera informację, co trzeba poprawić (np. brak wymaganych danych, sprzeczne kwoty, niepoprawny format pola). W takim przypadku:

1. wróć do faktury w „Fakturowaniu”,
2. popraw dane,
3. wyślij ponownie (zgodnie z zasadami obowiązującymi w Twojej organizacji).

## Typowy przebieg statusów (praktyczny obraz)

W większości organizacji spotkasz taki schemat:

1. **Wysłano / przyjęto zgłoszenie** — jest numer referencyjny.
2. **W trakcie przetwarzania** — KSeF weryfikuje dokument.
3. **Przyjęto** — pojawia się numer KSeF.

Albo (w przypadku problemów):

- **Odrzucono** — sprawdź „szczegóły”, popraw fakturę i wyślij ponownie.

## Monitorowanie statusów

Do kontroli statusów i przeglądu faktur ustrukturyzowanych możesz używać listy:

**„Fakturowanie” → „KSeF” → „Faktury KSeF”**.

## Eksport pliku faktury (FA(3))

Jeśli potrzebujesz sprawdzić, co dokładnie zostało wygenerowane do KSeF, skorzystaj z eksportu faktury do pliku w formacie wymaganym przez KSeF.

Typowe zastosowania eksportu:

- analiza, dlaczego dokument został odrzucony;
- przekazanie pliku do osoby wdrażającej / księgowości;
- porównanie danych w systemie z danymi wysyłanymi do KSeF.

W zależności od konfiguracji eksport jest dostępny:

- bezpośrednio na liście **„Faktury KSeF”**, albo
- na karcie faktury (w module „Fakturowanie”).