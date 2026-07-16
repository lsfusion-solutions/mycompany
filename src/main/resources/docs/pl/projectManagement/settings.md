---
title: Ustawienia
---

Ta strona opisuje typowe ustawienia sekcji **Projekty**. Dokładny zestaw słowników i parametrów zależy od konfiguracji oraz uprawnień użytkownika.

Otwórz **„Projekty” → „Konfiguracja” → „Ustawienia”**.

## Co zwykle się konfiguruje

#### Typy projektów

Typ projektu służy do klasyfikacji projektów i określa reguły numeracji: numerator ustawia się na karcie typu (zobacz [Numeracja](#numeracja)).

Zalecenie: utrzymuj listę typów projektów krótką i zrozumiałą dla użytkowników.

#### Statusy projektu

Każdy status projektu ma flagę **„Zamknięta”**, która oznacza go jako status zamknięcia; projekt w takim statusie jest uznawany za zamknięty.

Statusy projektu odzwierciedlają cykl życia projektu. Zwykle obejmują co najmniej:

- statusy aktywne (np. „w toku”);
- status zamknięcia (z ustawioną flagą **„Zamknięta”**).

Zalecenie: uzgodnij, kiedy projekt jest przenoszony do statusu zamknięcia, i sformalizuj tę regułę w rutynie wewnętrznej.

#### Typy zagadnień

Typ zagadnienia pomaga rozdzielić zagadnienia wg celu (np. development, zatwierdzanie, kontrola). **Dozwolone statusy** zaznacza się na karcie typu; jeśli nie zaznaczono żadnego, dla typu dozwolone są wszystkie statusy. Typ uczestniczy również w regułach **[przepływu pracy](#przepływ-pracy)**.

#### Statusy zagadnień

Statusy zagadnień odzwierciedlają etapy wykonania (np. „nowe”, „w toku”, „wykonane”). Każdy status ma:

- **kolejność sortowania** — określa porządek statusów w interfejsie (w szczególności kolejność kolumn w widoku **[Kanban](tasks.md#kanban)**);
- flagę **„Zamknięta”** — zagadnienia w statusie z tą flagą są uznawane za zamknięte.

Zestaw statusów dobiera się do przepływu pracy zespołu.

#### Przepływ pracy

Przepływ pracy konfigurowany jest dla **roli w projekcie** i **typu zagadnienia**: dozwolone przejścia zaznacza się w macierzy „ze statusu → do statusu”. Macierz wypełnia się w trzech wariantach:

- **dozwól** — przejście jest dostępne dla dowolnego pracownika z wybraną rolą w projekcie;
- **dozwól autorowi** — przejście jest dostępne dla autora zagadnienia;
- **dozwól wykonawcy** — przejście jest dostępne dla pracownika przypisanego do zagadnienia.

Reguły przepływu pracy odpowiadają na pytania:

- które przejścia między statusami są dozwolone dla danego typu zagadnienia;
- w jakiej kolejności zagadnienie przechodzi przez etapy;
- kto może wykonać konkretne przejście.

Jak stosowane są reguły:

- jeśli dla roli i typu zagadnienia nie zdefiniowano żadnej reguły, przejścia dla tej roli nie są ograniczane;
- reguły są sprawdzane tylko dla użytkowników, którzy mają co najmniej jedno bezpośrednie przypisanie do projektu (udział wyłącznie w składzie przypisanego zespołu nie włącza kontroli).

System nie pozwoli też zapisać zagadnienia w statusie, który nie jest dozwolony dla jego typu (pokazuje komunikat „Status nie jest dozwolony dla wybranego typu”); a po zmianie typu status może zostać zresetowany do pierwszego dozwolonego statusu nowego typu.

Zalecenia:

- unikaj nadmiernej liczby statusów;
- upewnij się, że każdy status ma jasno określony kolejny krok;
- ogranicz „ostre” przejścia (np. z „nowe” od razu do „wykonane”), jeśli jest to ważne dla kontroli.

#### Priorytety i tagi

Priorytety pomagają planować obciążenie, a tagi wygodnie grupują zagadnienia wg tematów. Zarówno priorytet, jak i tag mogą mieć **kolor**: kolor priorytetu wyróżnia wiersze na liście zagadnień, a kolor tagu jest używany w etykietach na kartach.

Zalecenia:

- używaj 3–5 poziomów priorytetów, aby użytkownicy się nie gubili;
- wprowadzaj tagi tylko dla realnych potrzeb (w przeciwnym razie przestają być użyteczne).

#### Typy przepracowanego czasu

Typ przepracowanego czasu określa rodzaj pracy do ewidencji nakładu (np. praca, nieobecność). Na karcie typu konfiguruje się:

- flagę **„Domyślnie”** — taki typ jest podstawiany do nowych wpisów przepracowanego czasu i proponowany w kartach pracy;
- **kolor** — używany do wyróżniania w kartach pracy; **symbol** — krótkie oznaczenie typu;
- flagę **„Projekt wymagany”** — wpis tego typu nie zostanie zapisany bez projektu;
- **szablony godzin** — typowe wartości godzin (z nazwą i kolorem) do szybkiego wprowadzania w kartach pracy i wpisach.

#### Numeracja

Numeracja projektów używa numeratora przypiętego do typu projektu — aby zmienić format lub licznik, zmień numerator na typie. ID zagadnień są generowane automatycznie podczas tworzenia zagadnienia.

Zalecenie: nie zmieniaj reguł numeracji bez potrzeby, aby zachować ciągłość i utrzymać historię w zrozumiałej formie.

#### Zachowanie kart pracy

Formularz ustawień zawiera również parametry wpływające na **[karty pracy](timesheets.md)** — w szczególności opcję **„Automatycznie zapisuj godziny na timesheet”**. Gdy jest włączona, zmiany w komórkach kart pracy są zapisywane od razu; czyszczenie dnia w karcie pracy menedżera wymaga wtedy potwierdzenia (kopiowanie — gdy dzień docelowy ma już wpisy).

#### Szablony zmian

**Szablon zmiany** to wcześniej zdefiniowany przedział czasu używany do szybkiego tworzenia zmian w widoku **„Harmonogram”** (zobacz **[Zmiany](shifts.md)**). Na zakładce **„Szablony zmian”** dodaj przedziały używane w Twojej organizacji (na przykład zmianę poranną i wieczorną).

## Sprawdź po zmianie ustawień

Po zmianie słowników i reguł zaleca się:

1. Utworzyć testowy projekt i testowe zagadnienie.
2. Sprawdzić, czy statusy i przejścia działają zgodnie z oczekiwaniami.
3. Upewnić się, że wymagane akcje są dostępne dla użytkowników o różnych rolach.