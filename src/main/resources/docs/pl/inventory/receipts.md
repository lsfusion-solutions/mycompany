---
title: Przyjęcia
---

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Operacje” → „Przyjęcia”**.

## Cel

Przyjęcie rejestruje towar wchodzący do [lokalizacji](locations.md).

Dokument służy do:

- rejestrowania planowanych i faktycznych ilości do przyjęcia;
- przyjmowania towaru do konkretnej [lokalizacji](locations.md);
- w razie potrzeby — rozmieszczenia (odłożenie) do stref/miejsc składowania (ewidencja adresowa);
- tworzenia ruchów zapasów oraz (jeśli włączone) ruchów kosztowych.

## Lista przyjęć

Lista zwykle pokazuje:

- numer;
- planowaną datę i czas;
- typ przyjęcia;
- dostawcę (jeśli używane);
- [lokalizację](locations.md);
- notatkę;
- liczbę pozycji.

Dostępne są też akcje: utwórz, otwórz, usuń (jeśli dozwolone przez status i uprawnienia).

## Karta przyjęcia

### Pola nagłówka

W nagłówku zwykle wypełnia się:

- **Typ** — wpływa na numerację, domyślną [lokalizację](locations.md) i ograniczenia;
- **Zaplanowana data** — planowany czas przyjęcia;
- **Numer** — generowany przez regułę numeracji;
- **Dostawca** (jeśli używane);
- **Lokalizacja** — wymagane;
- **Odnośnik dostawcy** (np. numer dokumentu dostawy dostawcy — jeśli używane);
- **Komentarz**.

Wskazówka praktyczna: najpierw wybierz typ i [lokalizację](locations.md) — wtedy łatwiej dodawać pozycje.

### Pozycje przyjęcia

Pozycje zawierają towary i ilości.

Typowe pola pozycji:

- **Towar** — wymagane;
- **JM** — pobierane z kartoteki towaru;
- **Kod kreskowy** (jeśli używane);
- **Kod towaru** (jeśli używane);
- **Odnośnik wewnętrzny/SKU** (jeśli używane).

#### Pole „Zaplanowana ilość”

Dla przyjęć, które nie są realizowane natychmiast, używa się pola **„Zaplanowana ilość”**:

- to planowana ilość dla pozycji;
- pole może być wyróżniane w statusie Projekt, aby przypominać o uzupełnieniu.

Ograniczenie:

- wartość musi mieścić się pomiędzy `0` a **maksymalną ilością** zdefiniowaną w typie przyjęcia;
- po przekroczeniu dokumentu nie da się zapisać.

#### Ograniczenie „Tylko jedna linia dla jednego towaru”

Dla niektórych typów przyjęć można włączyć regułę:

- ten sam towar nie może być dodany w dwóch pozycjach;
- przy próbie dodania duplikatu system wyświetla błąd.

## Statusy i etapy

Poniżej znajduje się zestaw statusów **dokładnie taki, jak wynika z kodu źródłowego**.

1. **Projekt** — wprowadzanie danych.
2. **Gotowy** — dokument oznaczony do wykonania.
3. **Wykonano** — przyjęcie potwierdzone; zapisywana jest data zakończenia.
4. **Odłożenie** — rozmieszczenie do lokalizacji podrzędnych.
   - dostępne **tylko jeśli** typ przyjęcia włącza odłożenie;
   - system sprawdza, że docelowa [lokalizacja](locations.md) jest dzieckiem lokalizacji dokumentu oraz że łączna ilość rozmieszczona nie przekracza ilości przyjętej.
5. **Anulowan** — dokument anulowany.

### Przejście z Projekt do „Gotowy”

W karcie przyjęcia dostępna jest akcja **„Oznacz jako Do zrobenia”** umożliwiająca przejście dokumentu z **Projekt** do **Gotowy** (w praktyce: przekazanie do realizacji).

Lista przyjęć może również udostępniać akcję masową **„Oznacz jako Do zrobenia”**, aby przenieść kilka wybranych przyjęć do **Gotowy**.

## Odłożenie (ewidencja adresowa)

Jeśli używana jest ewidencja adresowa, po przyjęciu wykonuje się rozmieszczenie do miejsc składowania.

Rekomendacja: najpierw zakończ przyjęcie (potwierdź fakt), a dopiero potem wykonaj odłożenie — ułatwia to kontrolę rozbieżności.

## Typowe problemy

- **Nie można zapisać pozycji** — „Zaplanowana ilość” jest poza limitami zdefiniowanymi w typie przyjęcia.
- **Nie można dodać tego samego towaru w drugiej pozycji** — w typie przyjęcia włączono „Tylko jedna linia dla jednego towaru”.
- **Nie można zakończyć** — brakuje [lokalizacji](locations.md) lub są pozycje bez ilości.
- **Ilości faktyczne nie zgadzają się** — sprawdź wprowadzone dane i jednostki miary.