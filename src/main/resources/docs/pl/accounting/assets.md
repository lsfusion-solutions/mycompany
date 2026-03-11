---
title: Środki trwałe i amortyzacja
---

## Gdzie to znaleźć

Otwórz:

- **Księgowość -> Operacje -> Środki trwałe**
- **Księgowość -> Operacje -> Amortyzacja środków trwałych**

## Karta środka trwałego

Karta środka trwałego zawiera:

- **Numer**
- **Towar**
- **Firmę**
- **Typ**
- **Datę nabycia**
- **Datę rozpoczęcia amortyzacji**
- **Okres użytkowania, miesięcy**
- **Koszt nabycia**
- **Wartość rezydualną**
- **Wartość podlegającą amortyzacji**
- **Miesięczną amortyzację**
- **Datę zakończenia amortyzacji**
- **Notatkę**

Wartości domyślne uzupełniane przez system:

- **Firma** jest pobierana z domyślnej firmy;
- **Data rozpoczęcia amortyzacji** jest równa dacie nabycia;
- **Okres użytkowania** jest podpowiadany z wybranego typu środka trwałego;
- **Numer** jest generowany z numeratora typu środka trwałego.

## Zakładki karty środka trwałego

Na karcie środka trwałego znajdują się zakładki:

- **Amortyzacja** - planowane wiersze amortyzacji;
- **Zapisy księgowe** - zapisy związane z nabyciem i amortyzacją środka trwałego;
- **Historia** - rejestr zmian firmy i typu;
- **Pliki**
- **Komentarze**

## Naliczanie amortyzacji

Użyj akcji **Oblicz amortyzację** na karcie środka trwałego, aby utworzyć miesięczne wiersze amortyzacji.

Obliczenie:

- tworzy jeden wiersz dla każdego miesiąca okresu użytkowania;
- proporcjonalnie wylicza pierwszy miesiąc od daty rozpoczęcia amortyzacji do końca miesiąca;
- koryguje ostatni miesiąc tak, aby łączna kwota była równa całej wartości podlegającej amortyzacji.

Na liście środków trwałych widoczna jest również bieżąca **Wartość księgowa**.

## Zapisy księgowe dla środków trwałych

Użyj **Generuj** albo **Regeneruj** na zakładce **Zapisy księgowe** na karcie środka trwałego.

Moduł tworzy:

- jeden zapis nabycia na podstawie daty i kosztu nabycia;
- zapisy amortyzacyjne dla wierszy amortyzacji do bieżącej daty.

Przy generowaniu używane są dziennik i konta zdefiniowane w typie środka trwałego:

- **Konto środków trwałych**
- **Konto nabycia**
- **Konto amortyzacji**
- **Konto kosztów**

Jeśli ustawiona jest data blokady zmian, generowanie pomija datę nabycia i daty amortyzacji przypadające przed tą datą.

## Lista amortyzacji środków trwałych

Lista **Amortyzacja środków trwałych** pokazuje:

- numer środka trwałego;
- typ środka trwałego;
- nazwę środka trwałego;
- firmę;
- datę amortyzacji;
- kwotę amortyzacji;
- numer powiązanego zapisu księgowego;
- flagę zaksięgowania powiązanego zapisu.

## Tworzenie środka trwałego z faktury zakupu

Jeśli typ faktury zakupu ma przypisany typ środka trwałego, środki trwałe można tworzyć bezpośrednio z linii dokumentu. Zobacz [Księgowanie z dokumentów źródłowych](source-documents.md).
