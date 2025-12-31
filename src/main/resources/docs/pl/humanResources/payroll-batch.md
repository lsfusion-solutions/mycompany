---
title: Partia odcinków płacowych
---

Partia odcinków płacowych jest używana, gdy trzeba **wygenerować odcinki płacowe dla wielu pracowników** za ten sam okres.

Typowy przebieg pracy:

1. utwórz partię odcinków płacowych (przedsiębiorstwo + okres);
2. uruchom **„Wygeneruj”**;
3. otwórz odcinki płacowe pracowników i sprawdź linie naliczeń oraz sumę **„Wynagrodzenie netto”**;
4. w razie potrzeby zarejestruj płatności.

## Gdzie to znaleźć

Otwórz **„Kadry” → „Operacje” → „Partii odcinków płacowych”**.

## Pola partii

W partii zwykle wypełnia się:

- **Przedsiębiorstwo** — dla jakiego przedsiębiorstwa generowane są płace;
- **Okres** — daty, które obejmuje naliczenie;
- **Nazwa** (jeśli używane) — dowolny komentarz, np. „Odcinki płacowe za grudzień”.

## Co jest w środku partii

Partia pokazuje listę odcinków płacowych powiązanych z partią. Dla każdego pracownika zwykle widać:

- numer odcinka płacowego;
- imię i nazwisko;
- stanowisko;
- sumę **„Wynagrodzenie netto”**.

Z partii możesz otworzyć odcinek płacowy i przejść do szczegółów naliczeń.

## Co robi „Wygeneruj”

Akcja **„Wygeneruj”** wykonuje dwa kluczowe kroki:

1. **Tworzy odcinki płacowe** dla pracowników przedsiębiorstwa dla wybranego okresu.
   - Z reguły odcinki płacowe są tworzone dla **aktywnych pracowników**.
   - Jeśli odcinek płacowy dla okresu już istnieje, system **nie tworzy duplikatu**.
2. **Wypełnia (lub aktualizuje) linie naliczeń** w odcinkach płacowych partii.
   - Niektóre linie mogą być liczone automatycznie (np. na podstawie przepracowanego czasu).
   - Po wygenerowaniu zaleca się otworzyć kilka odcinków płacowych i sprawdzić wynik.

#### Jak tworzona jest lista pracowników

Zestaw pracowników zależy od wybranego **przedsiębiorstwa** oraz od flagi aktywności pracownika.

Jeśli pracownik nie należy do wybranego przedsiębiorstwa lub nie jest aktywny, odcinek płacowy zwykle nie jest dla niego tworzony.

#### Jeśli odcinek płacowy został utworzony osobno

Jeśli odcinek płacowy dla okresu już istnieje, partia nie tworzy go ponownie.

Jednocześnie w partii zwykle widać **tylko odcinki płacowe powiązane z tą partią**. Dlatego jeśli odcinek płacowy został utworzony osobno (nie z partii), może nie pojawić się na liście bieżącej partii.

W takim przypadku zaleca się wybrać jeden scenariusz (generowanie płac przez partie) i unikać równoległego tworzenia dokumentów dla tego samego okresu.

#### Ponowne uruchomienie „Wygeneruj”

Możesz uruchomić generowanie ponownie, jeśli zmieniły się dane źródłowe (np. przepracowany czas, stawka godzinowa, ustawienia naliczeń). Ponowne uruchomienie jest zwykle używane do **odświeżenia** naliczeń.

## Jeśli odcinek płacowy nie pojawił się w partii

Sprawdź typowe przyczyny:

1. Pracownik jest **nieaktywny** lub nie należy do wybranego przedsiębiorstwa.
2. Odcinek płacowy dla tego okresu został już wcześniej utworzony.
3. Brak danych źródłowych dla automatycznych przychodów (np. brak wpisów przepracowanego czasu z wybranym projektem — zobacz [Wypłata na podstawie przepracowanego czasu](payroll-time-entries.md)).

## Kopiowanie partii

Jeśli dostępna jest akcja **„Kopiuj”**, pomaga utworzyć nową partię na podstawie istniejącej:

- kopiuje główne pola (zwykle przedsiębiorstwo i nazwę);
- kopiuje powiązane odcinki płacowe.

Po skopiowaniu sprawdź okres i odcinki płacowe w nowej partii oraz w razie potrzeby uruchom **„Wygeneruj”**.