---
title: Przepracowany czas
---

Ta strona opisuje rejestrowanie nakładu pracy przez przepracowany czas: po co jest potrzebny, jak poprawnie wprowadzać wpisy oraz jak radzić sobie z typowymi błędami.

## Dlaczego przepracowany czas jest potrzebny

Przepracowany czas pozwala:

- rejestrować rzeczywisty czas spędzony na zagadnieniach i projektach;
- tworzyć dane do raportowania nakładu pracy;
- porównywać plan z wykonaniem i poprawiać planowanie.

Oprócz kontroli menedżerskiej przepracowany czas jest często używany do raportowania wewnętrznego i analizy obciążenia pracowników.

## Jak dodać przepracowany czas

Typowe scenariusze:

- Z **karty projektu lub zagadnienia** — otwórz kartę, znajdź sekcję przepracowanego czasu i utwórz nowy wpis. Projekt (i zagadnienie, jeśli dotyczy) zostanie uzupełniony automatycznie.
- Z **ogólnej listy przepracowanego czasu** — otwórz **„Projekty” → „Operacje” → „Przepracowany czas”** i utwórz wpis ręcznie; w tym przypadku jawnie wybierz projekt i/lub zagadnienie.
- Przez **[kartę pracy](timesheets.md)** — wprowadź godziny w siatce dziennej; system utworzy lub zaktualizuje odpowiednie wpisy przepracowanego czasu.

Kroki:

1. Podaj datę, liczbę godzin i typ przepracowanego czasu.
2. Powiąż wpis z projektem i, jeśli dotyczy, z zagadnieniem.
3. Zapisz wpis.

> Jeśli pracownik jest przypisany dokładnie do jednego projektu, ten projekt jest uzupełniany automatycznie przy tworzeniu wpisu przepracowanego czasu.

#### Zalecenia dotyczące uzupełniania

- zapisuj czas na bieżąco — jak najbliżej daty wykonania pracy;
- nie „odkładaj” wpisów do końca miesiąca — zwiększa to ryzyko pomyłek;
- jeśli pracowałeś nad kilkoma zagadnieniami, zapisuj czas jako osobne wpisy;
- jeśli w organizacji używa się typów przepracowanego czasu, wybieraj typ zgodny z charakterem pracy;
- jeśli dla wybranego typu skonfigurowano **szablony godzin**, możesz szybko wstawić typową wartość godzin zamiast wpisywać ją ręcznie.

## Kontrole i ograniczenia

W zależności od konfiguracji mogą obowiązywać ograniczenia:

- niektóre typy przepracowanego czasu mają ustawioną flagę **„Projekt wymagany”** — bez projektu wpis nie zostanie zapisany (system pokaże komunikat „Nie wybrano projektu dla przepracowanego czasu”);
- nie można zapisać wpisu, którego **zagadnienie** należy do projektu innego niż wskazany we wpisie (system pokaże komunikat „Czas przepracowany zagadnienia nie odpowiada projektowi”).

## Częste sytuacje

#### Nie można dodać przepracowanego czasu

Sprawdź:

- czy wybrano projekt/zagadnienie do ewidencji (wymagane dla typów przepracowanego czasu z flagą „Projekt wymagany”);
- czy użytkownik ma uprawnienia do tworzenia wpisów przepracowanego czasu.

#### Komunikat „Nie wybrano projektu dla przepracowanego czasu”

Komunikat pojawia się przy zapisie wpisu przepracowanego czasu bez projektu, gdy wybrany typ przepracowanego czasu ma ustawioną flagę „Projekt wymagany”.

Co zrobić:

1. Otwórz wymagany projekt lub zagadnienie.
2. Utwórz wpis przepracowanego czasu z karty projektu/zagadnienia.
3. Jeśli wprowadzasz wpis z listy ogólnej, jawnie wybierz projekt i/lub zagadnienie.

#### Komunikat „Czas przepracowany zagadnienia nie odpowiada projektowi”

Jeśli wpis przepracowanego czasu jest powiązany z zagadnieniem należącym do innego projektu, system zabroni zapisu.

Co zrobić:

- sprawdź, do którego projektu należy zagadnienie;
- w razie potrzeby popraw projekt na zagadnieniu lub wybierz właściwe zagadnienie.