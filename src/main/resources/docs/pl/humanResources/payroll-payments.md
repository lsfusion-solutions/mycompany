---
title: Wypłata wynagrodzenia i kontrola płatności
---

W niektórych organizacjach płatności są rejestrowane w systemie: można zarejestrować płatność z odcinka płacowego oraz kontrolować, ile już zapłacono i ile pozostało.

Jeśli w Twoim UI nie widać akcji rejestracji płatności, funkcja może być **wyłączona** w ustawieniach lub niedostępna z powodu uprawnień.

## Rejestruj płatność z odcinka płacowego

Zalecany przebieg:

1. Otwórz odcinek płacowy pracownika.
2. Sprawdź sumę **„Wynagrodzenie netto”**.
3. Uruchom **„Rejestruj płatność”** — system otwiera dokument płatności wychodzącej, wypełniony niespłaconą kwotą.
4. Sprawdź kwotę płatności; dla płatności częściowej zmniejsz ją.
5. Zapisz płatność wychodzącą.

Z odcinkiem płacowym może być powiązanych kilka płatności — na przykład zaliczka i ostateczne rozliczenie. Płatności powiązane z odcinkiem płacowym są widoczne w bloku **„Płatności”** karty odcinka płacowego. Po rejestracji płatność jest uwzględniana w kontroli płatności poniżej.

## Kontrola płatności

Na liście odcinków płacowych (**„Kadry” → „Operacje” → „Odcinki płacowe”**) dla każdego odcinka płacowego widoczna jest kwota **„Opłacono”** oraz dostępny jest filtr **„Nie opłacone”**.

Zakładka **„Suma”** listy pokazuje zbiorcze wskaźniki dla zakresu dat:

- **„Wynagrodzenie netto”** — suma wartości „Wynagrodzenie netto” odcinków płacowych z zakresu;
- **„Opłacono”** — suma zarejestrowanych płatności w zakresie;
- **„Pozostało”** — „Wynagrodzenie netto” minus „Opłacono”.

Kwota **„Opłacono”** uwzględnia płatności według ich **typu**: płatności typu wybranego dla wypłat z odcinków płacowych (zobacz [Ustawienia](settings.md)) oraz płatności dowolnych typów z włączoną flagą **„Uwzględniaj w zadłużeniu z tytułu wynagrodzeń”** na karcie typu płatności wychodzącej. Jeśli płatność innego typu (na przykład pożyczka) zostanie rozliczona z odcinkiem płacowym bez tej flagi na typie, karta odcinka płacowego pokaże opłacenie, ale wskaźniki „Opłacono”/„Pozostało” na tej zakładce się nie zmienią.

Przycisk **„Płatność”** (klawisz `Insert`) listy płatności na tej zakładce tworzy płatność wychodzącą dla wybranego pracownika: kwota jest wypełniana wartością **„Pozostało”** dla wybranego zakresu, ale płatność jest wstępnie rozdzielana na **wszystkie** odcinki płacowe pracownika bez uwzględnienia zakresu — sprawdź alokacje przed zapisaniem.

#### Na co zwrócić uwagę

- Jeśli płatność dla odcinka płacowego jest zarejestrowana częściowo, **„Pozostało”** nie będzie równe zero.
- Jeśli pracownik ma kilka odcinków płacowych w zakresie, kontrola sumuje je wszystkie.
- Daty są porównywane różnie: **„Wynagrodzenie netto”** uwzględnia odcinki płacowe, których **początek okresu** wpada w zakres, a **„Opłacono”** — płatności wg **daty płatności**, łącznie ze wszystkimi płatnościami uwzględnianych typów dla pracownika (typ dla wypłat z odcinków płacowych oraz typy z flagą „Uwzględniaj w zadłużeniu z tytułu wynagrodzeń”), nawet niepowiązanymi z pokazanymi odcinkami płacowymi.