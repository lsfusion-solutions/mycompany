---
title: Pojazdy
---

Sekcja jest przeznaczona do utrzymywania listy pojazdów i przeglądania wszystkich powiązanych informacji: [przypisań kierowców](drivers.md), [serwisów](service.md), [umów](contracts.md) oraz dołączonych plików.

Karta pojazdu to „punkt agregacji” dla konkretnego samochodu: wygodnie jest kontrolować, kto aktualnie jest przypisany do pojazdu, jakie serwisy zostały wykonane, które umowy są aktywne oraz przechowywać dokumenty.

## Gdzie to znaleźć

Otwórz **„Flota” → „Operacje” → „Pojazdy”**.

Aby otworzyć kartę pojazdu, wybierz wiersz na liście i użyj **„Edit”** (albo otwórz rekord dwuklikiem, jeśli jest to praktykowane w Twojej organizacji). Przyciski list (**„Add”**, **„Edit”**, **„Delete”**) pochodzą z platformy i są wyświetlane po angielsku.

## Lista pojazdów

Lista zwykle pokazuje główne dane pojazdu (model pojazdu, numer rejestracyjny, firma, kategoria pojazdu, typ paliwa itp.), a także aktualnego [kierowcę](drivers.md) i [tagi](settings.md).

Dodatkowo lista może pokazywać kolumny dla każdego [typu serwisu pojazdu](settings.md) (data i wskazanie drogomierza ostatniego serwisu danego typu) oraz dla każdego typu umów na pojazdy (numer i daty ostatniej umowy danego typu) — zestaw kolumn zależy od skonfigurowanych typów i wersji systemu.

Typowe akcje na liście:

- **„Add”** — dodać nowy pojazd.
- **„Edit”** — otworzyć kartę wybranego pojazdu.
- **„Delete”** — usunąć rekord (jeśli jest to dozwolone prawami i nie ma ograniczeń wynikających z danych powiązanych).

Do szybkiego wyszukiwania i kontroli używaj filtrów oraz sortowania. W praktyce najczęściej filtruje się:

- wg firmy;
- wg kategorii pojazdu;
- wg tagów;
- wg aktualnego kierowcy (jeśli jest wyświetlany na liście).

## Tworzenie pojazdu

1. Kliknij **„Add”**.
2. Wypełnij wymagane i główne pola (w zależności od konfiguracji):
   - **Model pojazda**;
   - **Tablica rejestracyjna**;
   - **Firma**;
   - kategoria pojazdu, typ paliwa, rok produkcji i inne cechy.
3. Zapisz rekord.

### Rekomendacje wypełniania

- **Model pojazda**. Jeśli brakuje wymaganego modelu, zwykle dodaje się go w **„Flota” → „Konfiguracja”** (jeśli masz uprawnienia).
- **Tablica rejestracyjna**. Wprowadzaj numer w jednym formacie przyjętym w organizacji, aby ułatwić wyszukiwanie.
- **VIN**. Jeśli jest używany, wpisuj go zgodnie z dokumentami, bez spacji i dodatkowych znaków.
- **Kategoria, typ paliwa, rok produkcji i inne cechy** pomagają budować raporty i planować obsługę.

## Edycja i usuwanie

Aby zmienić dane:

1. Wybierz pojazd na liście.
2. Kliknij **„Edit”**.
3. Wprowadź zmiany i zapisz kartę.

Usuwanie jest zwykle ograniczone uprawnieniami. Pamiętaj: usunięcie pojazdu usuwa także jego przypisania kierowców, serwisy, pliki i komentarze, a w umowach czyści powiązanie z pojazdem. Dlatego dla pojazdu z historią zamiast usuwania lepiej stosować zasady organizacyjne (np. notatkę lub tag „Nie używany”), jeśli jest to praktyka w Twojej firmie.

## Tagi

Tagi służą jako dodatkowe etykiety do wygodnego filtrowania i kontroli. Lista dostępnych tagów jest konfigurowana w [Konfiguracja](settings.md).

Aby przypisać tagi do pojazdu:

1. Otwórz kartę pojazdu.
2. W polu tagów wybierz wymagane wartości.

Przykłady użycia tagów:

- rozdzielenie pojazdów wg przeznaczenia (służbowe, rezerwowe);
- kontrola statusu (w naprawie, leasing/wynajem);
- szybkie selekcje na listach.

## Pliki

Do pojazdu możesz dołączać pliki (np. zdjęcia, skany dokumentów).

Typowy przebieg pracy:

1. Otwórz kartę pojazdu.
2. Przejdź na zakładkę **Pliki**.
3. Kliknij **Plik**, wybierz plik i, jeśli trzeba, wypełnij opis.

Możliwość dodawania/usuwania plików zależy od uprawnień.

Rekomendacje:

- dołączaj dokumenty, które warto szybko odnaleźć (ubezpieczenie, umowa, pełnomocnictwa, zdjęcia stanu);
- w opisie pliku podaj, czym jest dokument i na jaki okres jest ważny.

## Dane powiązane na karcie pojazdu

Karta pojazdu zwykle zawiera bloki:

- **[Kierowcy](drivers.md)** — przypisania kierowców z datami.
- **[Serwisy pojazdów](service.md)** — historia serwisów i kosztów.
- **[Umowy](contracts.md)** — powiązane umowy.

Aby dodać rekord w bloku powiązanym, użyj **„Add”** w odpowiedniej tabeli.

Po prawej stronie karty dostępny jest też panel **Komentarze** — służy do dyskusji o konkretnym pojeździe.

### Jak zrozumieć, kto jest „aktualnym kierowcą”

Aktualny kierowca jest określany na podstawie przypisań kierowców na bieżącą datę. Jeżeli przypisanie jest zamknięte datą końcową, po tej dacie kierowca jest uznawany za nieprzypisanego.

Jeśli aktualny kierowca jest wyświetlany niepoprawnie:

1. Otwórz blok **Kierowcy** na karcie pojazdu.
2. Sprawdź daty rozpoczęcia/zakończenia przypisania.
3. Upewnij się, że okresy nie nakładają się i że poprzednie przypisanie jest zamknięte datą końcową.