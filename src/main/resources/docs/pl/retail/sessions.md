---
title: Sesje
---

Sesja to okres pracy **[kasy](settings.md)** pomiędzy otwarciem a zamknięciem. Sprzedaż i zwroty w **[POS](pos.md)** są realizowane w ramach otwartej sesji.

## Gdzie to znaleźć

**„Sprzedaż detaliczna” → „Operacje” → „Sesje”**.

## Jak otworzyć sesję

Sesję otwiera się z ekranu **[POS](pos.md)**, a nie z listy sesji:

1. Otwórz **„Sprzedaż detaliczna” → „Operacje” → „POS”**.
2. Na zakładce **„Sesja”** wybierz **[kasę](settings.md)**.
3. Naciśnij **„Otwórz sesję”**.

System zapisuje datę i czas otwarcia oraz nadaje numer sesji.

### Ograniczenia

- Nie możesz otworzyć sesji, jeśli dla kasy jest już otwarta sesja — system pokazuje komunikat **„Jest już sesja otwarta”**.

## Jak zamknąć sesję

Na ekranie **POS** naciśnij **„Zamknij sesję”** na zakładce „Sesja” i potwierdź.

System zapisuje datę i czas zamknięcia.

> Zamknięcie najpierw odrzuca bieżący niezakończony paragon — zakończ go lub celowo porzuć przed zamknięciem.

## Co pokazuje sesja

Sesja zbiera operacje wykonane na kasie w czasie jej pracy:

- **„Sprzedaż”** — liczbę sprzedaży;
- **„Sprzedane”** — łączną kwotę sprzedaży;
- **„Zwroty”** — liczbę zwrotów;
- **„Zwrócone”** — łączną kwotę zwrotów;
- **„Suma”** — sprzedaż pomniejszoną o zwroty;
- **kwotę netto** dla każdej **[metody płatności](payments.md)** (płatności sprzedaży pomniejszone o wypłaty zwrotów);
- listy **„Paragony”** i **„Korekty zakupu”**;
- wpłaty i wypłaty gotówki są także rejestrowane w otwartej sesji; ich listy oraz saldo **„Gotówka w kasie”** (prowadzone dla kasy, a nie dla sesji) są widoczne na zakładce **„Sesja”** ekranu [POS](pos.md).

Osobna lista **„Sprzedaż detaliczna” → „Operacje” → „Sesje”** służy do przeglądania i analizy sesji — to w niej wyświetlane są kolumny z liczbą i kwotami sprzedaży oraz zwrotów. Umożliwia też ręczne **„Nowy”**, **„Edytuj”** i **„Usuń”**; uwaga: utworzenie sesji w tym miejscu nie wykonuje kontroli akcji **„Otwórz sesję”** z POS (istniejąca otwarta sesja, otwarcie fiskalne), dlatego standardowym trybem pozostaje otwieranie z POS.