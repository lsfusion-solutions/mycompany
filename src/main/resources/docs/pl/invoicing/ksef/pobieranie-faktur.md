---
title: KSeF — pobieranie faktur
---

MyCompany pozwala pobierać faktury z KSeF po **przedziale dat**. Pobieranie może działać w dwóch perspektywach:

- jako **sprzedawca** (Twoja firma jest sprzedawcą),
- jako **nabywca** (Twoja firma jest nabywcą).

## Co jest potrzebne przed pobraniem

1. **Logowanie do KSeF** — pobieranie wymaga aktywnego dostępu do KSeF (certyfikat lub token). Zobacz: [Dostęp i logowanie](dostep-i-logowanie.md).
2. **Poprawnie wybrany przedział dat** — pobieranie działa w oparciu o daty faktur w KSeF (w praktyce: zwykle jest to data wystawienia, ale zależy od trybu pobierania).
3. (Opcjonalnie) **Wybór firmy** — jeśli w systemie masz wiele firm, warto zawęzić pobieranie do konkretnej, aby uniknąć mieszania dokumentów.

## Gdzie znaleźć pobrane faktury

Otwórz **„Fakturowanie” → „KSeF” → „Faktury KSeF”**.

Ta lista jest rejestrem faktur ustrukturyzowanych, które zostały pobrane z KSeF (oraz — w zależności od konfiguracji — faktur wysłanych i monitorowanych w systemie).

Wskazówka praktyczna: lista „Faktury KSeF” to „rejestr faktur ustrukturyzowanych”. Nie zastępuje ona listy faktur sprzedaży w „Fakturowaniu” i nie służy do ręcznego tworzenia dokumentów sprzedaży.

## Typowy przebieg pobierania

1. Wybierz przedział dat w polu **„Interwał dat”**.
2. (Opcjonalnie) ogranicz pobieranie do wybranej firmy w polu **„Firma”**.
3. Uruchom pobieranie przyciskiem **„Pobierz (sprzedawca)”** lub **„Pobierz (klient)”** (perspektywa nabywcy).
4. System pobierze metadane faktur, a następnie pobierze treść faktur i zapisze je na liście **„Faktury KSeF”**.

Wskazówka: jeśli pobierasz faktury zakupu, używaj perspektywy **nabywcy** (przycisk **„Pobierz (klient)”**).

## Jak dobrać przedział dat (praktyczne wskazówki)

- Jeśli pobierasz faktury regularnie, zacznij od **krótkiego okna** (np. ostatnie 1–3 dni), a potem rozszerzaj zakres w razie potrzeby.
- Jeśli „coś zniknęło”, spróbuj pobrać dane z **szerszego przedziału**, bo dokument mógł zostać wystawiony wcześniej, a pobrałeś tylko wąski zakres.
- W przypadku dużej liczby dokumentów wybieranie bardzo długich przedziałów może wydłużać pobieranie.

## Duplikaty i ponowne pobieranie

Ponowne uruchomienie pobierania dla tego samego zakresu jest bezpieczne:

- system zwykle rozpoznaje faktury po numerze KSeF i nie tworzy duplikatów w rejestrze,
- jeśli pojawiły się nowe dokumenty w KSeF, zostaną dociągnięte podczas kolejnego pobrania.

## Automatyczne powiązanie z fakturami zakupu

Jeżeli administrator włączył opcję **„Powiąż automatycznie faktury KSeF z fakturami zakupu po numerze”** (Administracja → Integracja → KSeF), pobrana faktura KSeF, w której Twoja firma jest nabywcą (`Podmiot 2`), zostaje automatycznie powiązana z istniejącą fakturą zakupu, jeżeli zgadzają się trzy pola: numer faktury KSeF (`P_2`) z polem „Numer dokumentu dostawcy” (`vendorReference`) na fakturze zakupu — a gdy to pole jest puste, z własnym numerem faktury zakupu (`number`) — dostawca (`Podmiot 1`) i firma (`Podmiot 2`).

Powiązanie działa też w drugą stronę: jeśli faktura KSeF była pobrana wcześniej, a fakturę zakupu wystawiasz lub edytujesz dopiero teraz — po zapisaniu zgodnych danych zostanie ona dopięta do faktury KSeF.

Dzięki temu faktury wprowadzone wcześniej ręcznie po pobraniu od razu pokazują w sekcji „KSeF” status, numer referencyjny i numer KSeF — bez dodatkowych kroków.

Gdy opcja jest wyłączona albo gdy powiązanie się nie powiedzie (np. numer dokumentu dostawcy zapisany w innej formie), możesz powiązać dokumenty ręcznie — zobacz: [Faktury zakupu na podstawie faktur z KSeF](faktury-zakupu.md#ręczne-powiązanie-i-zmiana-powiązania).