---
title: Cenniki i typy cen
---

Cenniki służą do przechowywania i stosowania cen w zamówieniach.

## Typy cen

Typ ceny definiuje sposób wyliczania ceny:

- cena stała;
- cena z narzutem;
- inne reguły (zależnie od konfiguracji).

## Cennik

Cennik zwykle zawiera:

- typ ceny;
- okres obowiązywania;
- listę towarów i cen.

## Statusy cennika

Cennik zwykle przechodzi przez dwa statusy:

1. **Projekt** — wartości cen można zmieniać; cennik nie jest jeszcze używany do podstawiania cen.
2. **Gotowe** — cennik jest aktywny; jego wartości stają się źródłem cen w okresie obowiązywania.

Przejście do statusu „Gotowe” wykonuje się akcją **„Oznacz jako gotowy”** w karcie cennika. Powrót z „Gotowe” do „Projekt” można skonfigurować osobno (zależy od konfiguracji).

## Użycie w zamówieniu

Gdy dodajesz linię zamówienia, system może podstawić cenę z cennika na podstawie:

- typu ceny;
- klienta/warunków;
- daty zamówienia.

Cena jest pobierana z ostatniego cennika w statusie **„Gotowe”**, obowiązującego w dacie dokumentu.