---
title: Pojazdy
---

Sekcja jest przeznaczona do utrzymywania listy pojazdów i przeglądania wszystkich powiązanych informacji: [przypisań kierowców](drivers.md), [serwisów](service.md), [umów](contracts.md) oraz dołączonych plików.

Karta pojazdu to „punkt agregacji” dla konkretnego samochodu: wygodnie jest kontrolować, kto aktualnie jest przypisany do pojazdu, jakie serwisy zostały wykonane, które umowy są aktywne oraz przechowywać dokumenty.

## Gdzie to znaleźć

Otwórz **„Flota” → „Operacje” → „Pojazdy”**.

Aby otworzyć kartę pojazdu, wybierz wiersz na liście i użyj **Edytuj** (albo otwórz rekord dwuklikiem, jeśli jest to praktykowane w Twojej organizacji).

## Lista pojazdów

Lista zwykle pokazuje główne dane pojazdu (model pojazdu, numer rejestracyjny, firma, kategoria pojazdu, typ paliwa itp.).

Typowe akcje na liście:

- **Nowy** — dodać nowy pojazd.
- **Edytuj** — otworzyć kartę wybranego pojazdu.
- **Usuń** — usunąć rekord (jeśli jest to dozwolone prawami i nie ma ograniczeń wynikających z danych powiązanych).

Do szybkiego wyszukiwania i kontroli używaj filtrów oraz sortowania. W praktyce najczęściej filtruje się:

- wg firmy;
- wg kategorii pojazdu;
- wg tagów;
- wg aktualnego kierowcy (jeśli jest wyświetlany na liście).

## Tworzenie pojazdu

1. Kliknij **Nowy**.
2. Wypełnij wymagane i główne pola (w zależności od konfiguracji):
   - model pojazdu;
   - numer rejestracyjny;
   - firma;
   - kategoria pojazdu, typ paliwa, rok produkcji i inne cechy.
3. Zapisz rekord.

### Rekomendacje wypełniania

- **Model pojazdu**. Jeśli brakuje wymaganego modelu, zwykle dodaje się go w **„Flota” → „Konfiguracja”** (jeśli masz uprawnienia).
- **Numer rejestracyjny**. Wprowadzaj go w jednym formacie przyjętym w organizacji, aby ułatwić wyszukiwanie.
- **VIN**. Jeśli jest używany, wpisuj go zgodnie z dokumentami, bez spacji i dodatkowych znaków.
- **Kategoria, typ paliwa, rok produkcji i inne cechy** pomagają budować raporty i planować obsługę.

## Edycja i usuwanie

Aby zmienić dane:

1. Wybierz pojazd na liście.
2. Kliknij **Edytuj**.
3. Wprowadź zmiany i zapisz kartę.

Usuwanie jest zwykle ograniczone uprawnieniami i może być niedostępne, jeśli pojazd ma już historię (przypisania kierowców, serwisy, umowy, pliki). Jeśli usuwanie jest zabronione, stosuj zasady organizacyjne (np. notatkę lub tag „Nie używany”), jeśli jest to praktyka w Twojej firmie.

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
2. Przejdź do bloku **Pliki**.
3. Kliknij **Plik**, aby dodać plik i, jeśli trzeba, wypełnij opis.

Możliwość dodawania/usuwania plików zależy od uprawnień.

Rekomendacje:

- dołączaj dokumenty, które warto szybko odnaleźć (ubezpieczenie, umowa, pełnomocnictwa, zdjęcia stanu);
- w opisie pliku podaj, czym jest dokument i na jaki okres jest ważny.

## Dane powiązane na karcie pojazdu

Karta pojazdu zwykle zawiera bloki:

- **[Kierowcy](drivers.md)** — przypisania kierowców z datami.
- **[Serwisy pojazdów](service.md)** — historia serwisów i kosztów.
- **[Umowy](contracts.md)** — powiązane umowy.

Aby dodać rekord w bloku powiązanym, użyj **Nowy** w odpowiedniej tabeli.

Dla bloku **Umowy** na karcie pojazdu użyj **Dodaj**.

### Jak zrozumieć, kto jest „aktualnym kierowcą”

Aktualny kierowca jest określany na podstawie przypisań kierowców dla wybranej daty (zwykle bieżącej). Jeżeli przypisanie jest zamknięte datą końcową, po tej dacie kierowca jest uznawany za nieprzypisanego.

Jeśli aktualny kierowca jest wyświetlany niepoprawnie:

1. Otwórz blok **Kierowcy** na karcie pojazdu.
2. Sprawdź daty rozpoczęcia/zakończenia przypisania.
3. Upewnij się, że okresy nie nakładają się i że poprzednie przypisanie jest zamknięte datą końcową.