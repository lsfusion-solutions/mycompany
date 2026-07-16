---
title: Zagadnienia
---

Ta strona opisuje pracę z zagadnieniami projektu: tworzenie i przypisywanie zagadnień, kontrolę statusów, korzystanie z historii zmian oraz widoki do monitorowania.

Zagadnienie jest główną jednostką pracy w ramach projektu. Zaleca się prowadzić zagadnienia tak, aby karta zagadnienia jasno odpowiadała: co trzeba zrobić, kto jest odpowiedzialny, do kiedy oraz na jakim etapie jest praca.

## Główne dane zagadnienia

Zagadnienie zwykle zawiera:

- ID (generowane automatycznie);
- nazwę;
- projekt;
- typ;
- status;
- priorytet;
- tagi;
- autora (uzupełniany bieżącym użytkownikiem, w razie potrzeby można zmienić);
- wykonawcę (pracownika lub zespół);
- datę rozpoczęcia i termin;
- postęp (% wykonania);
- opis, pliki i komentarze.

Zagadnienie bez projektu można zapisać tylko wtedy, gdy jego autor ma dostęp do wszystkich projektów (flaga **„Dostęp do wszystkich projektów”** albo brak bezpośrednich przypisań — zobacz **[dostęp do projektów](team-and-roles.md#dostęp-do-projektów)**); w pozostałych przypadkach system pokaże komunikat „Nie wybrano projektu dla zagadnienia”. Jeśli bieżący użytkownik jest przypisany dokładnie do jednego projektu, ten projekt jest uzupełniany w nowym zagadnieniu automatycznie; zagadnienie utworzone z karty projektu otrzymuje ten projekt.

Zestaw dozwolonych statusów zależy od typu zagadnienia i jest konfigurowany na karcie typu (zobacz **[typy zagadnień](settings.md#typy-zagadnień)**); przejścia między statusami kontroluje **[przepływ pracy](settings.md#przepływ-pracy)**.

#### Zalecenia dotyczące tworzenia zagadnień

- Formułuj **nazwę** jako weryfikowalny rezultat (np. „Przygotuj estymację”, „Zatwierdź makietę”, „Popraw błąd w raporcie”).
- Ustaw od razu **termin**, aby zagadnienie było objęte kontrolą terminów.
- Powinien być jeden **wykonawca**; jeśli pracę trzeba podzielić, utwórz osobne zagadnienia i — w razie potrzeby — połącz je przez **[zależności](#zależności-zagadnień)**.
- Używaj **opisu** do szczegółów: kontekst, ograniczenia i definicja ukończenia.
- Lista zagadnień wyróżnia wiersze **kolorem priorytetu**, co ułatwia szybki przegląd kolejki.

## Statusy i przepływ pracy

Zagadnienie przechodzi przez stany zdefiniowane w **[statusach zagadnień](settings.md#statusy-zagadnień)**. Przejścia między statusami kontroluje **[przepływ pracy](settings.md#przepływ-pracy)**.

Przepływ pracy pomaga uniknąć chaotycznych zmian: np. nie będzie można przenieść zagadnienia bezpośrednio do „wykonane”, dopóki nie zostało podjęte do pracy (dokładne reguły zależą od konfiguracji).

Jeśli system nie pozwala zmienić statusu, przyczyna zwykle jest jedną z poniższych:

- przejście jest zabronione przez reguły przepływu pracy;
- użytkownik nie ma uprawnień do zmiany statusu;
- dla typu zagadnienia nie skonfigurowano wybranego przejścia.

#### Co zrobić, jeśli status się nie zmienia

1. Sprawdź bieżący status i status, który próbujesz wybrać.
2. Spróbuj przejścia pośredniego (jeśli istnieje).
3. Zapytaj menedżera projektu lub administratora, które przejścia są dozwolone i dla kogo.

## Komentarze, pliki i historia zmian

Do współpracy używaj:

- komentarzy — do zapisywania decyzji, ustaleń i doprecyzowań;
- plików dołączonych — aby trzymać specyfikacje, zrzuty ekranu i inne materiały bezpośrednio na zagadnieniu;
- historii zmian — aby zobaczyć, kiedy i przez kogo zmieniono kluczowe dane zagadnienia.

#### Kiedy historia zmian jest przydatna

- przy analizie „kto przesunął termin i dlaczego”;
- w spornych sytuacjach odpowiedzialności;
- przy przygotowywaniu raportu postępu.

## Rejestracja czasu pracy na zagadnieniu

Nakład pracy można rejestrować bezpośrednio z karty zagadnienia (a także z okna podręcznego karty na tablicy **[Kanban](#kanban)**), bez przechodzenia do ogólnej listy **[przepracowanego czasu](time-entries.md)**. To zalecany sposób, ponieważ wpis pozostaje powiązany z właściwym zagadnieniem i projektem.

## Widoki do monitorowania postępów

Oprócz listy zagadnień można używać specjalnych widoków do monitorowania postępu. Ich zestaw zależy od konfiguracji.

### Kanban

Kanban pomaga kontrolować przepływ pracy po statusach. Używaj go w codziennej pracy zespołu: szybko pokazuje, co jest w kolejce, co w toku i co jest ukończone.

Tablica pokazuje tylko **otwarte** zagadnienia; kolumny to niezamknięte statusy w kolejności sortowania (zobacz **[statusy zagadnień](settings.md#statusy-zagadnień)**). Jeśli włączony jest filtr typu zagadnienia, kolumnami stają się tylko statusy dozwolone dla tego typu.

W oknie podręcznym karty na tablicy lista wykonawców jest ograniczona do aktywnych pracowników, którzy mają już otwarte przypisane zagadnienia; dowolnego innego wykonawcę lub zespół można wybrać na karcie zagadnienia.

Zalecenia:

- aktualizuj statusy natychmiast po zmianie stanu pracy;
- nie przenoś zagadnienia „w przyszłość”, jeśli praca faktycznie się nie rozpoczęła;
- używaj komentarzy, gdy zagadnienie jest zablokowane (co blokuje postęp i kto powinien pomóc).

### Diagram Gantta

Diagram Gantta (wykres Gantta) służy do planowania w oparciu o daty i wizualnej kontroli terminów. Jest przydatny, gdy ważne jest uzgodnienie kalendarza projektu i ocena nakładania się zagadnień.

Wykres pokazuje tylko zagadnienia, które mają wypełnione zarówno **datę rozpoczęcia**, jak i **termin**.

Używaj diagramu Gantta, gdy:

- projekt zależy od planu kalendarzowego (terminy są stałe);
- jest wiele równoległych zagadnień i trzeba widzieć nakładanie;
- istnieją zależności między zagadnieniami.

## Zależności zagadnień

Jeśli to potrzebne, ustaw zależności między zagadnieniami (np. gdy jedna praca nie może się rozpocząć, dopóki inna nie zostanie ukończona). Zależności w systemie to relacje równorzędne między dwoma zagadnieniami (poprzednik → następnik); hierarchia „zagadnienie nadrzędne — podzagadnienia” nie jest zaimplementowana. Pomaga to zbudować kolejność wykonania i zmniejsza ryzyko blokad.

#### Przykład praktyczny

Jeśli zagadnienie „Zatwierdź makietę” zależy od zagadnienia „Przygotuj makietę”, to:

- najpierw kończy się przygotowanie;
- potem rozpoczyna się zatwierdzanie;
- przesuwając termin pierwszego zagadnienia, sprawdź również termin drugiego.

## Powiadomienia

W zależności od konfiguracji system może wysyłać powiadomienia o zmianach zagadnienia — np. powiadomienie push przy przypisaniu zagadnienia do pracownika lub wiadomość e-mail z linkiem do zagadnienia. Sprawdź u administratora, które kanały powiadomień są włączone.

## Typowe sytuacje i rozwiązania

#### Zagadnienie nie jest widoczne dla wykonawcy

Sprawdź:

- czy ustawiono wykonawcę;
- czy zagadnienie jest we właściwym projekcie;
- czy wykonawca ma dostęp do tego projektu (zobacz **[dostęp do projektów](team-and-roles.md#dostęp-do-projektów)**);
- czy nie są włączone filtry (np. „Przypisane do mnie”, „Otwarta”/„Zamknięta” albo filtr statusu).

#### Wykonawca jest przypisany, ale nie widzi zagadnienia

System nie zabrania wybrania wykonawcy bez dostępu do projektu — ale zagadnienie nie będzie dla niego widoczne. Sprawdź:

- czy wykonawca ma dostęp do projektu zagadnienia (aktywne **[przypisanie](team-and-roles.md#przypisania)** — bezpośrednio lub jako członek przypisanego zespołu — albo flagę „Dostęp do wszystkich projektów”);
- czy zagadnienia nie ukrywają filtry (zobacz wyżej).

Jeśli nie można zapisać samego zagadnienia, przyczyną są zwykle uprawnienia do edycji albo ograniczenia statusu/typu (zobacz **[przepływ pracy](settings.md#przepływ-pracy)**).