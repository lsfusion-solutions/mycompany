---
title: Zagadnienia
---

Ta strona opisuje pracę z zagadnieniami projektu: tworzenie i przypisywanie zagadnień, kontrolę statusów, korzystanie z historii zmian oraz widoki do monitorowania.

Zagadnienie jest główną jednostką pracy w ramach projektu. Zaleca się prowadzić zagadnienia tak, aby karta zagadnienia jasno odpowiadała: co trzeba zrobić, kto jest odpowiedzialny, do kiedy oraz na jakim etapie jest praca.

## Główne dane zagadnienia

Zagadnienie zwykle zawiera:

- kod (generowany automatycznie);
- nazwę;
- status;
- priorytet;
- tagi;
- wykonawcę;
- termin;
- opis i komentarze.

Zestaw pól może zależeć od typu zagadnienia i ustawień.

#### Zalecenia dotyczące tworzenia zagadnień

- Formułuj **nazwę** jako weryfikowalny rezultat (np. „Przygotuj estymację”, „Zatwierdź makietę”, „Popraw błąd w raporcie”).
- Ustaw od razu **termin**, aby zagadnienie było objęte kontrolą terminów.
- Powinien być jeden **wykonawca** (jeśli potrzeba kilku, twórz podzagadnienia lub osobne zagadnienia).
- Używaj **opisu** do szczegółów: kontekst, ograniczenia i definicja ukończenia.

## Statusy i przepływ pracy

Zagadnienie przechodzi przez stany zdefiniowane w **[statusach zagadnień](settings.md#task-statuses)**. Przejścia między statusami kontroluje **[przepływ pracy](settings.md#workflow)**.

Przepływ pracy pomaga uniknąć chaotycznych zmian: np. nie będzie można przenieść zagadnienia bezpośrednio do „wykonane”, dopóki nie zostało podjęte do pracy (dokładne reguły zależą od konfiguracji).

Jeśli system nie pozwala zmienić statusu, przyczyna zwykle jest jedną z poniższych:

- przejście jest zabronione przez reguły przepływu pracy;
- użytkownik nie ma uprawnień do zmiany statusu;
- dla typu zagadnienia nie skonfigurowano wybranego przejścia.

#### Co zrobić, jeśli status się nie zmienia

1. Sprawdź bieżący status i status, który próbujesz wybrać.
2. Spróbuj przejścia pośredniego (jeśli istnieje).
3. Zapytaj menedżera projektu lub administratora, które przejścia są dozwolone i dla kogo.

## Komentarze i historia zmian

Do współpracy używaj:

- komentarzy — do zapisywania decyzji, ustaleń i doprecyzowań;
- historii zmian — aby zobaczyć, kiedy i przez kogo zmieniono kluczowe dane zagadnienia.

#### Kiedy historia zmian jest przydatna

- przy analizie „kto przesunął termin i dlaczego”;
- w spornych sytuacjach odpowiedzialności;
- przy przygotowywaniu raportu postępu.

## Widoki do monitorowania postępów

Oprócz listy zagadnień można używać specjalnych widoków do monitorowania postępu. Ich zestaw zależy od konfiguracji.

### Kanban

Kanban pomaga kontrolować przepływ pracy po statusach. Używaj go w codziennej pracy zespołu: szybko pokazuje, co jest w kolejce, co w toku i co jest ukończone.

Zalecenia:

- aktualizuj statusy natychmiast po zmianie stanu pracy;
- nie przenoś zagadnienia „w przyszłość”, jeśli praca faktycznie się nie rozpoczęła;
- używaj komentarzy, gdy zagadnienie jest zablokowane (co blokuje postęp i kto powinien pomóc).

### Wykres Gantta

Wykres Gantta służy do planowania w oparciu o daty i wizualnej kontroli terminów. Jest przydatny, gdy ważne jest uzgodnienie kalendarza projektu i ocena nakładania się zagadnień.

Używaj wykresu Gantta, gdy:

- projekt zależy od planu kalendarzowego (terminy są stałe);
- jest wiele równoległych zagadnień i trzeba widzieć nakładanie;
- istnieją zależności między zagadnieniami.

## Zależności zagadnień

Jeśli to potrzebne, ustaw zależności między zagadnieniami (np. gdy jedna praca nie może się rozpocząć, dopóki inna nie zostanie ukończona). Pomaga to zbudować kolejność wykonania i zmniejsza ryzyko blokad.

#### Przykład praktyczny

Jeśli zagadnienie „Zatwierdź makietę” zależy od zagadnienia „Przygotuj makietę”, to:

- najpierw kończy się przygotowanie;
- potem rozpoczyna się zatwierdzanie;
- przesuwając termin pierwszego zagadnienia, sprawdź również termin drugiego.

## Typowe sytuacje i rozwiązania

#### Zagadnienie nie jest widoczne dla wykonawcy

Sprawdź:

- czy ustawiono wykonawcę;
- czy zagadnienie jest we właściwym projekcie;
- czy nie są włączone filtry (np. „Przypisane do mnie” albo filtr statusu).

#### Nie można przypisać wykonawcy

Powód zwykle jest jednym z poniższych:

- użytkownik nie ma uprawnień do edycji zagadnienia;
- wykonawca nie jest dodany do zespołu projektu (jeśli organizacja kontroluje przypisania przez zespół projektu);
- ograniczenie wynikające z typu zagadnienia lub ustawień przypisań.