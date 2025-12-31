---
title: Ustawienia i dane referencyjne
---

## Gdzie to znaleźć

Otwórz **„CRM”**, następnie **„Konfiguracja”**, następnie **„Ustawienia”**.

Ta sekcja zawiera parametry i katalogi, które definiują, jak użytkownicy prowadzą leady: statusy, typy, priorytety, tagi oraz sposób oznaczania leadu jako porażka.

## Parametry

### Typ zamówienia

Parametr **„Typ zamówienia”** określa, jaki typ jest wstępnie podstawiany przy tworzeniu [zamówienia sprzedaży](../sales/orders.md) z leadu.

Jeśli nie jest ustawiony, przycisk **„Utwórz Zamówienie”** nie jest pokazywany w karcie leadu.

### Typ faktury

Parametr **„Typ faktury”** określa, jaki typ jest wstępnie podstawiany przy tworzeniu [faktury](../sales/invoices.md) z leadu.

Jeśli nie jest ustawiony, przycisk **„Utwórz fakturę”** nie jest pokazywany w karcie leadu.

## Dane referencyjne

### Statusy leadu

Status definiuje etap pracy z leadem.

Ważne pola:

- **Nazwa** — jak status jest pokazywany użytkownikom;
- **ID** — kod wewnętrzny (używany w ustawieniach i integracjach);
- **Kolejność sortowania** — kolejność wyświetlania na listach i na tablicy leadów;
- **Zamknięta** — flaga statusu zamkniętego (statusy zamknięte nie są pokazywane na tablicy);
- **Porażka** — flaga statusu, który ma być ustawiany, gdy lead jest zamykany przez akcję porażki.

Rekomendacje:

1. Utwórz co najmniej 3–5 statusów, aby lejek był czytelny.
2. Dla statusów zamykających oznacz **„Zamknięta”**.
3. Wybierz jeden status i oznacz go jako **„Porażka”** — będzie ustawiany przy zamykaniu leadu przez akcję „Porażka”.
4. Ustaw kolejność sortowania tak, aby kolumny na tablicy były od lewej do prawej zgodnie z procesem.

### Typy leadu

Typ leadu to klasyfikacja zapytań. Typ wpływa na to, jakie statusy są dostępne.

Jak działa ograniczenie statusów:

- dla typu możesz jawnie wskazać, które statusy są dozwolone;
- przy zapisie leadu system sprawdza, czy wybrany status jest dozwolony dla typu.

Rekomendacja: jeśli masz kilka różnych lejków (np. „hurt”, „detal”, „serwis”), utwórz osobne typy i zdefiniuj dozwolone statusy dla każdego.

### Priorytety leadu

Priorytet pomaga wyróżnić ważne leady.

Priorytet zwykle ma:

- **nazwę**;
- **kolor**.

Kolor może być pokazywany na liście i w karcie leadu.

### Tagi leadu

Tagi to etykiety, które można przypisać do leadów dla wygodnego grupowania.

W katalogu tagów zwykle ustawiasz:

- **Nazwa**;
- **ID**;
- **kolor**.

Rekomendacja: używaj tagów dla atrybutów przekrojowych (źródło, segment, typ zapytania) bez dublowania statusów.

### Powody porażki

Powody porażki są używane przy zamykaniu leadu przez akcję **„Porażka”**.

Jak to wygląda dla użytkownika:

1. użytkownik klika **„Porażka”** w karcie leadu;
2. wybiera powód porażki;
3. powód jest zapisywany w leadzie, a lead jest przenoszony do statusu oznaczonego jako **„Porażka”** w katalogu statusów.

Rekomendacja: utwórz powody tak, aby dało się z nich wyciągać wnioski (np. „za drogo”, „wybrał konkurencję”, „brak budżetu”, „nie udało się dodzwonić”, „nie dotyczy”).

## Rekomendowana kolejność konfiguracji początkowej

1. Utwórz statusy leadu i ustaw kolejność sortowania.
2. Oznacz statusy zamykające i wybierz status porażki.
3. Utwórz typy leadu i ustaw dozwolone statusy.
4. Skonfiguruj priorytety i tagi (jeśli potrzebne).
5. Uzupełnij powody porażki.
6. Ustaw „Typ zamówienia” i „Typ faktury”, jeśli planujesz tworzyć dokumenty z leadów.