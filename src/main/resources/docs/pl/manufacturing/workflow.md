---
title: Proces i statusy zamówienia produkcji
---

[Zamówienie produkcji](orders.md) przechodzi przez zestaw statusów. Status wpływa na to, jakie akcje są dostępne i jakie pola są wymagane.

## Statusy

1. **„Projekt”** — zamówienie jest utworzone, ale nie jest jeszcze przygotowane do startu.
2. **„Oczekiwanie”** — zamówienie jest potwierdzone do realizacji, ale materiały nie są jeszcze zarezerwowane (albo oczekiwane jest uzupełnienie zapasów).
3. **„Gotowy”** — materiały są zarezerwowane i zamówienie jest gotowe do startu.
4. **„W trakcie”** — produkcja została rozpoczęta; rejestrowana jest produkcja i zużycie.
5. **„Wykonano”** — produkcja została zakończona.
6. **„Anulowano”** — zamówienie jest anulowane (to odgałęzienie, a nie kolejny krok: można je zastosować z dowolnego statusu poza Projektem).

Statusy są zaimplementowane jako kumulacyjne flagi etapów: w miarę postępu zamówienia ustawiane są flagi przebytych etapów, a wyświetlany status to najwyższy osiągnięty etap. Niektóre akcje mogą cofnąć etap (np. **„Wycofaj rezerwę”** zdejmuje etap „Gotowy”, a **„Anuluj”** — „W trakcie”). Karta zamówienia pokazuje etapy jako łańcuch strzałek.

Na liście zamówień wiersze są podświetlane kolorem statusu: **„Oczekiwanie”** — różowy, **„Gotowy”** i **„W trakcie”** — żółty, **„Anulowano”** — niebieskawy.

## Co oznacza każdy status

### Projekt

Służy do wprowadzania danych początkowych:

- typ, towar, data rozpoczęcia;
- wybór [zestawienia materiałowego](bom.md);
- planowane ilości — akcja **„Utwórz linie”** (dostępna tylko w statusie Projekt) generuje linie materiałów i linie produktów na podstawie zestawienia materiałowego.

Aby przenieść zamówienie do statusu **„Oczekiwanie”**, uruchom **„Oznacz jako Do zrobienia”**.

### Oczekiwanie

Oznacza, że zamówienie jest potwierdzone i jest przygotowywane do zaopatrzenia w materiały.

Akcje:

- **„Sprawdź dostępność”** — rezerwuje materiały (dla każdej linii, do wysokości dostępnej ilości). Jeśli **każda** linia materiałów jest w pełni zarezerwowana, zamówienie przechodzi do statusu **„Gotowy”**; w przeciwnym razie pozostaje w Oczekiwaniu z częściowymi rezerwacjami.
- **„Wycofaj rezerwę”** — czyści dotychczasowe rezerwacje (widoczna, gdy co najmniej jedna linia ma rezerwację).

Zamówienie nie może przejść do statusu Gotowy, dopóki pole **„Lokalizacja materiałów”** jest puste.

### Gotowy

Oznacza, że wszystkie materiały są zarezerwowane.

Dostępne akcje:

- **„Produkcja”** — pyta o wyprodukowaną ilość i przenosi zamówienie do statusu **„W trakcie”**;
- **„Wycofaj rezerwę”** — czyści rezerwacje i cofa zamówienie do statusu **„Oczekiwanie”**;
- **„Sprawdź dostępność”** — można uruchomić ponownie, jeśli rezerwacje uległy zmianie.

### W trakcie

Rejestrowane są ilości faktyczne:

- **„Wyprodukowano”** w liniach produktów;
- **„Zużyte”** w liniach materiałów.

Wprowadzenie łącznej ilości **„Wyprodukowano”** (w nagłówku karty lub na liście) rozdziela produkcję i zużycie na linie proporcjonalnie do planu.

### Wykonano

Oznacza zakończenie. Uruchom **„Zatwierdź”**:

- rejestrowana jest **„Data wykonania”** (domyślnie bieżąca chwila);
- musi zostać wskazana **„Lokalizacja produktów”** — w przeciwnym razie zamówienia nie można zapisać jako Wykonano;
- tworzone są faktyczne ruchy magazynowe i zapisy kosztowe (zobacz: [Produkcja i zużycie](production-and-consumption.md) oraz [Koszt wytworzenia](costing.md));
- zamówienie zwykle staje się tylko do odczytu (zobacz: [Ustawienia](settings.md)).

**Skrót:** akcja **„Zatwierdź”** jest dostępna także w statusach Projekt, Oczekiwanie i Gotowy. W takim przypadku system automatycznie wypełnia faktyczne ilości **„Wyprodukowano”** i **„Zużyte”** na podstawie planu (jeśli są jeszcze puste) i przeprowadza zamówienie przez wszystkie etapy pośrednie naraz.

### Anulowano

Używane, gdy zamówienie nie jest już aktualne.

- Akcja **„Anuluj”** jest dostępna w każdym statusie poza **„Projekt”** i samym **„Anulowano”**;
- anulowanie czyści flagę **„W trakcie”**; anulowane zamówienie nie wpływa już na stany magazynowe, a jego zużycie materiałów nie jest wyceniane w kosztach (powiązane składniki — dodatkowy, pracy, usług — pozostają, zobacz: [Koszt wytworzenia](costing.md));
- rezerwacje **nie** są czyszczone automatycznie — przed anulowaniem uruchom **„Wycofaj rezerwę”**.

## Statusy z zakazem edytowania

W **„Produkcja” → „Konfiguracja” → „Ustawienia”** każdy status ma flagę **„Zakaz edytowania”**: zamówień w takim statusie nie można edytować. Zwykle w ten sposób zablokowane są statusy **„Wykonano”** i **„Anulowano”**. Zobacz: [Ustawienia](settings.md).

## Typowe problemy

- **Zamówienie nie przechodzi do statusu Gotowy** — nie wybrano lokalizacji materiałów lub jakaś linia materiałów nie może zostać w pełni zarezerwowana (brakuje dostępnej ilości).
- **Nie można zatwierdzić** — nie wskazano lokalizacji produktów.
- **Nie można zapisać** — zestawienie materiałowe nie pasuje do towaru w zamówieniu.
- **Przycisk „Anuluj” nie jest widoczny** — zamówienie jest jeszcze w statusie Projekt (po prostu je usuń) albo jest już anulowane.
