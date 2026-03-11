---
title: Księgowanie z dokumentów źródłowych
---

Moduł księgowy dodaje pola konfiguracyjne do typów dokumentów oraz zakładkę **Księgowość** do dokumentów operacyjnych w innych modułach.

## Które typy dokumentów są rozszerzane

Ustawienia księgowe pojawiają się dla następujących typów:

- **Faktury zakupu** i **Faktury**: dziennik oraz pary debet/kredyt dla **Kwoty całkowitej**, **Kwoty netto** i **Podatku**
- **Płatności przychodzące** i **Płatności wychodzące**: dziennik oraz pary debet/kredyt dla **Kwoty**
- **Przyjęcia**, **Wydania**, **Korekty** i **Odpad**: dziennik oraz pary debet/kredyt dla **Kosztu**
- **Paski płacowe**: dziennik oraz pary debet/kredyt dla **Wynagrodzenia netto**

Dodatkowo **typ faktury zakupu** może wskazywać **typ środka trwałego**, wykorzystywany przy tworzeniu środka trwałego z linii dokumentu.

## Co skonfigurować na karcie typu

Otwórz kartę typu dokumentu i sprawdź zakładkę **Księgowość**.

Minimalnie należy ustawić:

- **Dziennik**, do którego będą tworzone zapisy księgowe;
- wymagane pary kont debet/kredyt dla kwot używanych przez ten typ.

Jeśli para kont jest pusta, odpowiadająca jej linia zapisu nie zostanie utworzona.

## Zakładka Księgowość na karcie dokumentu

Dokumenty takie jak faktury zakupu, faktury, płatności, dokumenty magazynowe i paski płacowe otrzymują w szczegółach zakładkę **Księgowość**.

Zakładka pokazuje:

- **Generuj**, jeśli zapis księgowy jeszcze nie istnieje;
- **Regeneruj**, jeśli zapis księgowy już istnieje;
- nagłówek powiązanego zapisu: flaga zaksięgowania, firma, dziennik, numer, data, opis;
- linie zapisu z kontem, debetem i kredytem.

`Regeneruj` jest niedostępne, jeśli powiązany zapis jest zablokowany datą blokady zmian.

## Jak działa generowanie

Podczas generowania zapisu z dokumentu system przenosi:

- **Firmę**
- **Dziennik** z typu dokumentu
- **Datę** (datę dokumentu, datę wykonania lub termin płatności zależnie od rodzaju dokumentu)
- **Numer**
- **Opis**

Flaga **Zaksięgowano** w utworzonym zapisie zależy od statusu biznesowego dokumentu źródłowego:

- faktury zakupu i faktury używają statusu **Gotowe** / **Do zapłaty**, zależnie od konfiguracji modułu;
- płatności przychodzące/wychodzące, przyjęcia, wydania, korekty i odpady używają statusu **Wykonano**;
- paski płacowe są traktowane jako aktywne i mogą być zaksięgowane od razu.

W rezultacie zapis może zostać utworzony, ale pozostać niezaksięgowany, jeśli dokument źródłowy nie znajduje się jeszcze w końcowym statusie procesu.

## Generowanie zbiorcze

Akcja **Generuj zapisy księgowe** w [Księdze głównej](reports.md) tworzy tylko brakujące zapisy dla dokumentów, które spełniają wymagany status biznesowy i należą do wybranej firmy oraz okresu.

## Tworzenie środka trwałego z linii faktury zakupu

Jeśli **typ faktury zakupu** ma przypisany **typ środka trwałego**, w linii dokumentu może pojawić się akcja **Utwórz środek trwały**.

Akcja jest dostępna, gdy:

- pozycja linii jest **towarem**;
- ilość w linii jest większa niż liczba już powiązanych z nią środków trwałych.

Podczas tworzenia środka trwałego system wypełnia:

- **Towar**
- **Firmę**
- **Typ** z typu faktury zakupu
- **Datę nabycia** z daty dokumentu
- **Koszt nabycia** z wartości netto linii
- **Notatkę** z opisu linii

Utworzony środek trwały jest następnie widoczny obok linii faktury zakupu.
