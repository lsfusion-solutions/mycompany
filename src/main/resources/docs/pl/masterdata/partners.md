---
title: Partnerzy
---

Słownik **„Partnerzy”** służy do utrzymywania klientów, dostawców, innych organizacji oraz osób fizycznych (w zależności od konfiguracji). Partnerzy są wybierani w dokumentach sprzedaży, zakupu i fakturowania, a także w umowach i działach.

## Gdzie jest używane

- dokumenty sprzedaży i zakupu;
- faktury, rachunki i płatności;
- umowy;
- działy partnerów (oddziały/lokalizacje).

## Lista partnerów

Lista zwykle pokazuje podstawowe dane: **Nazwa**, **ID**, **Typ**, **Adres**, **Telefon**, **Email**.

Jeśli używana jest archiwizacja, na liście zwykle znajduje się przełącznik:

- **Aktywnie** — pozycje robocze;
- **Zarchiwizowane** — pozycje ukryte przed codziennym wyborem.

## Typy partnerów: przedsiębiorstwo, firma, osoba fizyczna

W systemie ten sam „partner” może mieć różne typy. Jest to ważne, ponieważ **różne typy przechowują różne zestawy danych** i są **inaczej wykorzystywane w procesach**.

#### Przedsiębiorstwo (organizacja zewnętrzna)

Użyj typu **„Przedsiębiorstwo”** dla zewnętrznych kontrahentów będących organizacjami:

- klientów i dostawców;
- wykonawców;
- przewoźników;
- banków i innych organizacji.

Typowe dane:

- **Nazwa** oraz, jeśli trzeba, **Pełne imię i nazwisko**;
- dane kontaktowe i adres;
- jeśli trzeba — **Strona internetowa**;
- zakładka **„Dane prawne”** (jeśli jest włączona w konfiguracji).

Dodatkowo przedsiębiorstwa mogą mieć listę **kontaktów** (zob. „Osoba fizyczna” poniżej).

#### Firma (nasza firma)

Typ **„Firma”** jest używany dla **Twoich własnych podmiotów prawnych**, w imieniu których tworzone są dokumenty.

Kiedy jest to potrzebne:

- prowadzisz księgowość dla **kilku swoich firm** w jednej bazie danych;
- w dokumentach ważne jest wybranie, **która firma** sprzedaje/kupuje, przyjmuje płatności i jest stroną umowy.

Uwaga praktyczna: jeśli w systemie jest **dokładnie jedna firma**, często jest ona **uzupełniana domyślnie** w dokumentach (zależy od ustawień i konkretnego procesu).

#### Osoba fizyczna

Użyj typu **„Osoba fizyczna”**, gdy potrzebujesz przechowywać dane o konkretnej osobie:

- osoba kontaktowa organizacji zewnętrznej (np. opiekun u dostawcy, księgowy klienta);
- pracownik Twojej firmy (jeśli włączony jest obszar HR/płac lub używane są role/przydzieleni).

Typowe dane:

- **Imię**, **Nazwisko**, **Drugie imię**;
- **Przedsiębiorstwo/firma**, którą reprezentuje osoba;
- **Pozycja** (jeśli używana);
- telefon i email;
- jeśli trzeba — **Dział**.

## Karta partnera

Typowe pola:

- **ID** — może być uzupełniane automatycznie;
- **Nazwa**;
- **Typ** — pomaga rozdzielić role partnera (klient/dostawca itp.), jeśli skonfigurowano;
- **Adres** (w tym kraj — jeśli jest używany);
- **Telefon**, **Email**;
- **Zarchiwizowane** — flaga wyłączająca partnera z aktywnego użycia.

### Jak wybrać właściwy typ

Stosuj prostą zasadę:

- jeśli opisujesz **stronę transakcji jako organizację zewnętrzną** (klient/dostawca/wykonawca) — utwórz **przedsiębiorstwo**;
- jeśli opisujesz **własną organizację** (w imieniu której tworzone są dokumenty) — utwórz **firmę**;
- jeśli potrzebujesz **konkretnej osoby** (kontakt, pracownik) — utwórz **osobę fizyczną** i wskaż przedsiębiorstwo/firmę, do której należy.

### Typowe sytuacje i przykłady

- **Klient jest organizacją** → utwórz **przedsiębiorstwo**.
- **Dostawca jest organizacją** → utwórz **przedsiębiorstwo**.
- **Klient jest osobą prywatną** → utwórz **osobę fizyczną**.
- **Kontakt u dostawcy** (np. „Jan Kowalski, manager”) → utwórz **osobę fizyczną** i powiąż ją z przedsiębiorstwem dostawcy.
- **Księgowość dla dwóch własnych podmiotów** → utwórz dwie pozycje typu **firma** i wybieraj odpowiednią firmę w dokumentach.

## Zalecenia dotyczące uzupełniania

- Uzupełnij dane kontaktowe i adres od razu — zmniejsza to liczbę błędów w dokumentach.
- Jeśli partner nie jest już używany, zarchiwizuj go zamiast usuwać.

## Typowe błędy i jak ich unikać

#### Zduplikowani partnerzy

Częsta sytuacja to tworzenie tego samego partnera kilka razy (np. z różną pisownią).

Zalecenia:

- ustal jeden standard nazewnictwa;
- przenieś „nadmiarowe” pozycje do **Zarchiwizowane**, aby nie były wybierane w nowych dokumentach;
- przed utworzeniem nowego partnera użyj wyszukiwania na liście.

#### Mylenie „przedsiębiorstwa” i „firmy”

Jeśli zewnętrzny partner zostanie utworzony jako „firma” (lub odwrotnie), prowadzi to do błędów przy wyborze strony umowy i firmy w dokumentach.

Zalecenia:

- utwórz poprawną pozycję wymaganego typu;
- stopniowo przełączaj procesy na poprawną pozycję;
- przenieś niepoprawną pozycję do **Zarchiwizowane** (usunięcie często nie jest możliwe z powodu powiązań z dokumentami).