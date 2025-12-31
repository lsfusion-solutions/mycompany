---
title: Serwisy pojazdów
---

Sekcja jest przeznaczona do ewidencji prac/usług wykonanych dla pojazdów: data, typ serwisu, **[Dostawca](../masterdata/partners.md)** (jeśli używany), **Wskazanie drogomierza** oraz koszt.

Wygodnie jest używać serwisów pojazdów jako „dziennika zdarzeń i kosztów” dla pojazdu: przeglądy okresowe, naprawy, wymiany sezonowe, serwis opon itp. (zestaw typów zależy od katalogów).

## Gdzie to znaleźć

Otwórz **„Flota” → „Operacje” → „Serwisy pojazdów”**.

Historia serwisów jest zwykle dostępna również na karcie pojazdu w odpowiednim bloku.

## Tworzenie rekordu serwisu

1. Kliknij **Nowy**.
2. Wypełnij główne pola:
   - data;
   - pojazd;
   - **[Typ](settings.md)**;
   - **[Dostawca](../masterdata/partners.md)** (jeśli jest używany w Twojej organizacji);
   - **Wskazanie drogomierza**;
   - ilość i cena (jeśli dotyczy);
   - **Kwota** i **Podatek** (jeśli są prowadzone osobno);
   - notatka i/lub opis (jeśli potrzeba).
3. Zapisz rekord.

### Jak wypełniać koszt

W zależności od konfiguracji koszt może być prowadzony:

- jako **ilość** i **cena** (z wyliczaną kwotą);
- jako **Kwota** (bez rozbicia na ilość);
- z oddzielnym prowadzeniem **Podatku** (jeśli używane).

Jeśli prowadzisz ilość i cenę, po ich zmianie kwota może być przeliczana automatycznie.

## Powiązanie z ewidencją wydatków

Jeśli w organizacji prowadzone są dokumenty **[Faktura zakupu](../invoicing/bills.md)** dla wydatków serwisowych, rekord serwisu pojazdu może być powiązany z **[Fakturą zakupu](../invoicing/bills.md)**. Pozwala to:

- zobaczyć, jakim dokumentem zaksięgowano wydatek;
- kontrolować kwoty wg serwisu.

Dostępne pola i zasady wypełniania zależą od konfiguracji i uprawnień.

Rekomendacja praktyczna: jeśli serwis jest powiązany z **[Fakturą zakupu](../invoicing/bills.md)**, wypełnij datę oraz **[Dostawcę](../masterdata/partners.md)** tak, aby odpowiadały danym w **[Fakturze zakupu](../invoicing/bills.md)** — ułatwia to kontrolę i wyszukiwanie.

## Kontrola wskazania drogomierza

**Wskazanie drogomierza** pomaga:

- śledzić historię przebiegu;
- planować obsługę wg harmonogramu;
- uzgadniać zdarzenia (zmiana kierowcy, naprawy, prace planowe).

Jeśli w organizacji rejestrowany jest przebieg, staraj się wprowadzać wartości konsekwentnie (bez spadków względem poprzednich zdarzeń dla pojazdu). Jeśli popełniono błąd, skoryguj rekord lub dodaj wyjaśnienie w notatce.

## Kopiowanie rekordu serwisu

Aby szybko utworzyć podobny rekord (np. powtarzający się serwis):

1. Otwórz kartę serwisu pojazdu.
2. Użyj akcji **Kopiuj**.
3. Zmień datę, **Wskazanie drogomierza** oraz **Kwotę/Podatek** według potrzeb.

Kopiowanie jest wygodne dla cyklicznych serwisów (np. sezonowej wymiany opon), aby nie wypełniać tych samych pól ręcznie.