---
title: Ustawienia
---

Ta strona opisuje typowe ustawienia sekcji **Projekty**. Dokładny zestaw słowników i parametrów zależy od konfiguracji oraz uprawnień użytkownika.

Otwórz **„Projekty” → „Konfiguracja” → „Ustawienia”**.

## Co zwykle się konfiguruje

#### Typy projektów

Typ projektu służy do klasyfikacji projektów i może wpływać na:

- reguły numeracji;
- dostępne statusy;
- zestaw wymaganych pól.

Zalecenie: utrzymuj listę typów projektów krótką i zrozumiałą dla użytkowników.

#### Statusy projektu

Każdy status projektu ma flagę **„Zamknięty”**, która oznacza go jako status zamknięcia; projekt w takim statusie jest uznawany za zamknięty.

Statusy projektu odzwierciedlają cykl życia projektu. Zwykle obejmują co najmniej:

- statusy aktywne (np. „w toku”);
- status zamknięcia (z ustawioną flagą **„Zamknięty”**).

Zalecenie: uzgodnij, kiedy projekt jest przenoszony do statusu zamknięcia, i sformalizuj tę regułę w rutynie wewnętrznej.

#### Typy zagadnień

Typ zagadnienia pomaga rozdzielić zagadnienia wg celu (np. development, zatwierdzanie, kontrola). Często typ wpływa na dostępne statusy i reguły przejść.

#### Statusy zagadnień

Statusy zagadnień odzwierciedlają etapy wykonania (np. „nowe”, „w toku”, „wykonane”). Każdy status ma:

- **kolejność sortowania** — określa porządek statusów w interfejsie (w szczególności kolejność kolumn w widoku **[Kanban](tasks.md#kanban)**);
- flagę **„Zamknięty”** — zagadnienia w statusie z tą flagą są uznawane za zamknięte.

Zestaw statusów dobiera się do przepływu pracy zespołu.

#### Przepływ pracy

Przepływ pracy konfigurowany jest dla każdej pary **typ zagadnienia × status zagadnienia** i określa, kto może przenieść zagadnienie do tego statusu:

- **dozwól** — dowolnemu pracownikowi z wybraną rolą w projekcie;
- **dozwól autorowi** — tylko autorowi zagadnienia;
- **dozwól wykonawcy** — tylko pracownikowi przypisanemu do zagadnienia.

Reguły przepływu pracy odpowiadają na pytania:

- które przejścia między statusami są dozwolone dla danego typu zagadnienia;
- w jakiej kolejności zagadnienie przechodzi przez etapy;
- kto może wykonać konkretne przejście.

System nie pozwoli zapisać zagadnienia w statusie, który nie jest dozwolony dla jego typu (pokazuje komunikat „Status nie jest dozwolony dla wybranego typu”); a po zmianie typu status może zostać zresetowany do pierwszego dozwolonego statusu nowego typu.

Zalecenia:

- unikaj nadmiernej liczby statusów;
- upewnij się, że każdy status ma jasno określony kolejny krok;
- ogranicz „ostre” przejścia (np. z „nowe” od razu do „wykonane”), jeśli jest to ważne dla kontroli.

#### Priorytety i tagi

Priorytety pomagają planować obciążenie, a tagi wygodnie grupują zagadnienia wg tematów.

Zalecenia:

- używaj 3–5 poziomów priorytetów, aby użytkownicy się nie gubili;
- wprowadzaj tagi tylko dla realnych potrzeb (w przeciwnym razie przestają być użyteczne).

#### Numeracja

Numeracja projektów używa numeratora przypiętego do typu projektu — aby zmienić format lub licznik, zmień numerator na typie. ID zagadnień są generowane automatycznie podczas tworzenia zagadnienia.

Zalecenie: nie zmieniaj reguł numeracji bez potrzeby, aby zachować ciągłość i utrzymać historię w zrozumiałej formie.

#### Zachowanie kart pracy

Formularz ustawień zawiera również parametry wpływające na **[karty pracy](timesheets.md)** — w szczególności **autozapis godzin**. Gdy ta opcja jest włączona, zmiany w komórce dnia w karcie pracy przełożonego są zapisywane od razu; akcje kopiowania i czyszczenia w takim przypadku wymagają potwierdzenia.

#### Szablony zmian

**Szablon zmiany** to wcześniej zdefiniowany przedział czasu używany do szybkiego tworzenia zmian w widoku **„Harmonogram”** (zobacz **[Zmiany](shifts.md)**). Na zakładce **„Szablony zmian”** dodaj przedziały używane w Twojej organizacji (na przykład zmianę poranną i wieczorną).

## Sprawdź po zmianie ustawień

Po zmianie słowników i reguł zaleca się:

1. Utworzyć testowy projekt i testowe zagadnienie.
2. Sprawdzić, czy statusy i przejścia działają zgodnie z oczekiwaniami.
3. Upewnić się, że wymagane akcje są dostępne dla użytkowników o różnych rolach.