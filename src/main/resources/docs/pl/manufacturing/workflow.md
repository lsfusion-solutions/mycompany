---
title: Proces i statusy zamówienia produkcji
---

[Zamówienie produkcji](orders.md) przechodzi przez zestaw statusów. Status wpływa na to, jakie akcje są dostępne i jakie pola są wymagane.

## Statusy

Zwykle używany jest następujący zestaw głównych statusów:

1. **Projekt** — zamówienie jest utworzone, ale nie jest jeszcze przygotowane do startu.
2. **Oczekiwanie** — zamówienie jest wypełnione, ale materiały nie są jeszcze zarezerwowane (albo oczekuje się uzupełnienia).
3. **Gotowy** — materiały są zarezerwowane i zamówienie jest gotowe do startu.
4. **W trakcie** — produkcja została rozpoczęta; rejestrowana jest produkcja i zużycie.
5. **Wykonano** — produkcja została zakończona.
6. **Anulowan** — zamówienie jest anulowane.

Dokładny zestaw statusów i reguły mogą się różnić w zależności od konfiguracji.

## Co oznacza każdy status

### Projekt

Służy do wprowadzania danych początkowych:

- typ, towar, data rozpoczęcia;
- wybór [Zestawienia materiałów](bom.md);
- planowane ilości.

Aby przenieść zamówienie do **Oczekiwanie**, uruchom **„Oznacz jako Do zrobenia”**.

### Oczekiwanie

Oznacza, że zamówienie jest przygotowywane do zaopatrzenia w materiały.

Akcje:

- **„Sprawdź dostępność”**.

### Gotowy

Oznacza, że materiały są zarezerwowane.

Zwykle dostępne:

- **„Produkcja”**;
- **„Wycofaj rezerwę”**.

### W trakcie

Rejestrowane są ilości faktyczne:

- wyprodukowane;
- zużyte.

### Wykonano

Oznacza zakończenie.

Ważne:

- rejestrowana jest **„Data wykonania”**;
- musi zostać wskazana lokalizacja magazynowa wyrobów gotowych;
- zamówienie zwykle staje się tylko do odczytu.

### Anulowan

Używane, gdy zamówienie nie jest już aktualne.

Rekomendacja: przed anulowaniem użyj **„Wycofaj rezerwę”**.

## Typowe problemy

- **Zamówienie nie przechodzi do statusu Gotowy** — nie wybrano lokalizacji materiałów lub brakuje dostępnych ilości.
- **Nie można zakończyć zamówienia** — nie wskazano lokalizacji wyrobów gotowych.
- **Nie można zapisać** — Zestawienie materiałów nie pasuje do towaru w zamówieniu.