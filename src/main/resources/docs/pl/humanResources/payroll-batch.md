---
title: Partia odcinków płacowych
---

Partia odcinków płacowych jest używana, gdy trzeba **wygenerować odcinki płacowe dla wielu pracowników** za ten sam okres.

Typowy przebieg pracy:

1. utwórz partię odcinków płacowych (firma + okres + typ);
2. uruchom **„Wygeneruj”**;
3. otwórz odcinki płacowe pracowników i sprawdź linie naliczeń oraz sumę **„Wynagrodzenie netto”**;
4. w razie potrzeby zarejestruj płatności.

## Gdzie to znaleźć

Otwórz **„Kadry” → „Operacje” → „Partii odcinków płacowych”**.

## Pola partii

W partii zwykle wypełnia się:

- **Firma** — dla jakiej firmy generowane są płace;
- **Okres** — daty, które obejmuje naliczenie;
- **Typ** — typ odcinka płacowego, który zostanie przypisany do wygenerowanych dokumentów;
- **Nazwa** (jeśli używane) — dowolny komentarz, np. „Odcinki płacowe za grudzień”.

Jeśli w systemie istnieje tylko jeden typ odcinka płacowego, jest on domyślnie wybierany automatycznie.

## Co jest w środku partii

Partia pokazuje listę odcinków płacowych powiązanych z partią. Dla każdego pracownika zwykle widać:

- numer odcinka płacowego;
- imię i nazwisko;
- stanowisko;
- sumę **„Wynagrodzenie netto”**;
- sumy wg **kategorii wynagrodzenia** (po jednej kolumnie na kategorię; kolejność kolumn określa **„Indeks”** kategorii).

Sumę kategorii można wpisać bezpośrednio w tabeli, jeśli kategoria jest oznaczona w ustawieniach jako **„Edytowalne”** — system utworzy lub zaktualizuje osobny **ręczny** wiersz odcinka płacowego z wpisaną wartością. Jeśli ta sama kategoria ma też wiersze generowane automatycznie (np. przychody z przepracowanego czasu), kolumna pokazuje **sumę** wszystkich wierszy — wpisana wartość jest dodawana do wygenerowanych, a nie je zastępuje; nie włączaj „Edytowalne” dla kategorii automatycznych, jeśli nie chodzi o korektę dodatkową. Sumy kategorii nieedytowalnych są tylko do odczytu.

Z partii możesz otworzyć odcinek płacowy i przejść do szczegółów naliczeń.

## Co robi „Wygeneruj”

Akcja **„Wygeneruj”** wykonuje dwa kluczowe kroki:

1. **Tworzy odcinki płacowe** dla pracowników firmy dla wybranego okresu i typu.
   - Z reguły odcinki płacowe są tworzone dla **aktywnych pracowników**.
   - Jeśli dla pracownika istnieje już odcinek płacowy z takim samym **okresem + firmą + typem**, system **nie tworzy duplikatu**.
2. **Wypełnia (lub aktualizuje) wiersze naliczenia** w odcinkach płacowych partii.
   - Niektóre wiersze mogą być liczone automatycznie (np. na podstawie przepracowanego czasu).
   - Po wygenerowaniu zaleca się otworzyć kilka odcinków płacowych i sprawdzić wynik.

Jeśli odcinek płacowy już powiązany z partią należy do pracownika spoza **firmy** partii, akcja **„Wygeneruj”** zatrzymuje się z błędem i nic nie zmienia — popraw lub usuń taki odcinek płacowy i uruchom ponownie.

#### Jak tworzona jest lista pracowników

Zestaw pracowników zależy od wybranej **firmy** oraz od flagi aktywności pracownika.

Jeśli pracownik nie należy do wybranej firmy lub nie jest aktywny, odcinek płacowy zwykle nie jest dla niego tworzony.

#### Jeśli odcinek płacowy został utworzony osobno

Jeśli istnieje już odcinek płacowy z takim samym **okresem + pracownikiem + przedsiębiorstwem + typem**, partia nie tworzy go ponownie.

Jednocześnie w partii zwykle widać **tylko odcinki płacowe powiązane z tą partią**. Dlatego jeśli odcinek płacowy został utworzony osobno (nie z partii), może nie pojawić się na liście bieżącej partii.

W takim przypadku zaleca się wybrać jeden scenariusz (generowanie płac przez partie) i unikać równoległego tworzenia dokumentów dla tego samego okresu.

#### Ponowne uruchomienie „Wygeneruj”

Możesz uruchomić generowanie ponownie, jeśli zmieniły się dane źródłowe (np. przepracowany czas, stawka godzinowa, ustawienia naliczeń). Ponowne uruchomienie jest zwykle używane do **odświeżenia** naliczeń.

## Jeśli odcinek płacowy nie pojawił się w partii

Sprawdź typowe przyczyny:

1. Pracownik jest **nieaktywny** lub nie należy do wybranej firmy.
2. Dla tego pracownika został już wcześniej utworzony odcinek płacowy z takim samym okresem, firmą i typem.

Brak danych źródłowych (np. wpisów przepracowanego czasu z wybranym projektem) **nie** blokuje utworzenia samego odcinka płacowego — nie pojawią się tylko automatyczne wiersze naliczeń. Zobacz [Wypłata na podstawie przepracowanego czasu](payroll-time-entries.md).

## Kopiowanie partii

Jeśli dostępna jest akcja **„Kopiuj”**, pomaga utworzyć nową partię na podstawie istniejącej:

- kopiuje firmę, typ i nazwę — nowa partia **nie ma okresu**, wpisz go najpierw;
- kopiuje powiązane odcinki płacowe (z nowymi numerami) razem z ręcznie wprowadzonymi wierszami; wiersze naliczone z przepracowanego czasu nie są kopiowane.

Po skopiowaniu wpisz okres, sprawdź odcinki płacowe i uruchom **„Wygeneruj”**, aby odświeżyć automatyczne wiersze.