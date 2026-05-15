---
title: Cenniki i typy cen
---

Cenniki służą do przechowywania i stosowania cen w zamówieniach.

## Gdzie znaleźć

- **Cenniki** — **„Sprzedaż” → „Operacje” → „Cenniki”**;
- **Typy cen** — **„Sprzedaż” → „Konfiguracja” → „Typy cen”**;
- **Typy cenników** — na formularzu **„Sprzedaż” → „Konfiguracja” → „Ustawienia”**.

## Typy cen

**Typ ceny** to nazwana skala cenowa. Każdy typ ceny ma walutę i flagę „cena zawiera podatki”, a także może mieć domyślne narzuty dla kategorii towarów. Typy cen służą jako kolumny cenowe cennika i do wyboru ceny podstawianej w linii zamówienia.

## Cennik

Karta cennika zawiera:

- **numer** i opcjonalną **notatkę**;
- **typ cennika** — kategorię porządkującą cenniki (np. „Hurtowy”, „Detaliczny”, „Promocyjny”);
- **okres obowiązywania** — datę początkową i końcową;
- **typy cen**, których kolumny są edytowalne w tym cenniku;
- listę **towarów i cen** — po jednej kolumnie cenowej na każdy wybrany typ ceny.

## Statusy cennika

Cennik zwykle przechodzi przez dwa statusy:

1. **Projekt** — wartości cen można zmieniać; cennik nie jest jeszcze używany do podstawiania cen.
2. **Gotowe** — cennik jest aktywny; jego wartości stają się źródłem cen w okresie obowiązywania.

Przejście do statusu „Gotowe” wykonuje się akcją **„Oznacz jako gotowy”** w karcie cennika.

## Edycja cennika

Karta cennika udostępnia narzędzia do masowego uzupełniania cen:

- **drzewo kategorii i wyszukiwanie towarów** do dodawania potrzebnych pozycji jako linii;
- akcję **„Zmień ceny”**, która przelicza wszystkie edytowalne ceny cennika jednym z trzech sposobów — ustaw narzuty na podstawie poprzednich cen, ustaw narzuty z typów cen lub pobierz ceny z poprzedniego cennika (opcjonalnie korygując o procent);
- akcję **„Kopiuj”**, która tworzy nowy cennik na podstawie bieżącego.

Każdą kolumnę cenową można też porównać z aktualnie obowiązującą ceną towaru.

## Użycie w zamówieniu

Gdy dodajesz linię zamówienia, system podstawia cenę według **towaru**, **typu ceny** i **daty/godziny zamówienia**. Sam typ ceny jest wyznaczany na podstawie klienta lub typu zamówienia.

Cena jest pobierana z ostatniego cennika w statusie **„Gotowe”**, którego okres obowiązywania obejmuje datę dokumentu. Jeśli nie znaleziono wartości w cennikach, system stosuje własną cenę sprzedaży towaru.