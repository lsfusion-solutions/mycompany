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

Statusy projektu odzwierciedlają cykl życia projektu. Zwykle obejmują co najmniej:

- statusy aktywne (np. „w toku”);
- status zamknięcia.

Zalecenie: uzgodnij, kiedy projekt jest przenoszony do statusu zamknięcia, i sformalizuj tę regułę w rutynie wewnętrznej.

#### Typy zagadnień

Typ zagadnienia pomaga rozdzielić zagadnienia wg celu (np. development, zatwierdzanie, kontrola). Często typ wpływa na dostępne statusy i reguły przejść.

#### Statusy zagadnień

Statusy zagadnień odzwierciedlają etapy wykonania (np. „nowe”, „w toku”, „wykonane”). Zestaw statusów dobiera się do przepływu pracy zespołu.

#### Przepływ pracy

Przepływ pracy definiuje:

- które przejścia między statusami są dozwolone;
- w jakiej kolejności zagadnienie przechodzi przez etapy;
- kto może wykonać konkretne przejście.

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

Jeśli system używa automatycznej numeracji projektów i/lub automatycznego generowania kodu zagadnienia, konfiguracja numeracji zwykle jest wykonywana w tej sekcji.

Zalecenie: nie zmieniaj reguł numeracji bez potrzeby, aby zachować ciągłość i utrzymać historię w zrozumiałej formie.

## Sprawdź po zmianie ustawień

Po zmianie słowników i reguł zaleca się:

1. Utworzyć testowy projekt i testowe zagadnienie.
2. Sprawdzić, czy statusy i przejścia działają zgodnie z oczekiwaniami.
3. Upewnić się, że wymagane akcje są dostępne dla użytkowników o różnych rolach.