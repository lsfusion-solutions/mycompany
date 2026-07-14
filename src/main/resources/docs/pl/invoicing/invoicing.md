---
title: Fakturowanie — dokumentacja użytkownika
---

Ta dokumentacja opisuje sekcję **„Fakturowanie”**: [faktury zakupu](bills.md) i [faktury](invoices.md), [płatności](payments.md) ([przychodzące](incoming-payments.md)/[wychodzące](outgoing-payments.md)), kontrolę [długu](debt-and-calendar.md) i [kalendarz płatności](debt-and-calendar.md), [podatki](taxes.md), drukowanie i raportowanie.

## Dla kogo jest ta sekcja

Sekcja **„Fakturowanie”** jest zwykle używana przez:

- **Handlowca / opiekuna klienta** — tworzy [faktury](invoices.md), kontroluje [płatności](payments.md), pracuje z należnościami wg [partnerów](../masterdata/partners.md) i [kontraktów](../masterdata/contracts.md).
- **Księgowego / specjalistę finansowego** — rejestruje [płatności](payments.md), dopasowuje płatności do dokumentów, kontroluje zamykanie długu, buduje raporty.
- **Logistykę / magazyn** (jeśli włączony jest obszar magazynowy) — tworzy i przetwarza [wydania z faktur](shipments-from-invoice.md).

Jeśli w Twojej konfiguracji brakuje części dokumentów lub pozycji menu, jest to normalne: dostępna funkcjonalność zależy od włączonych modułów i ustawień.

## Spis treści

- [Szybki start](#quick-start)
- [Nawigacja](#navigation)
- [Terminy](#terms)

Sekcje:

- [Faktury zakupu](bills.md)
- [Mobilne faktury zakupu](mobile-bills.md)
- [Faktury](invoices.md)
- [Wydania z faktury (jeśli używane jest Magazynowanie)](shipments-from-invoice.md)
- [Zwroty i korekty](refunds-and-corrections.md)
- [Płatności](payments.md)
  - [Płatności przychodzące](incoming-payments.md)
  - [Płatności wychodzące](outgoing-payments.md)
- [Dług i kalendarz płatności](debt-and-calendar.md)
- [Podatki](taxes.md)
- [Alokacja kosztów](bill-cost.md)
- [Raporty i drukowanie](reports-and-printing.md)
- [Ustawienia i katalogi](settings.md)
- [KSeF — faktury ustrukturyzowane](ksef/ksef.md)

## Szybki start

### Scenariusz: utworzyć fakturę i zarejestrować płatność przychodzącą

1. Otwórz **„Fakturowanie” → „Operacje” → „Faktury”**.
2. Utwórz fakturę:
   - wybierz [partnera](../masterdata/partners.md);
   - wskaż [kontrakt](../masterdata/contracts.md) (jeśli używany);
   - uzupełnij linie ([towary](../masterdata/items.md)/usługi, ilość, cena, [podatek](taxes.md)).
3. Ustaw fakturę w status **„Do zapłaty”** (akcja **„Oznacz jako Do zrobienia”** na karcie faktury; wymagane przez przepływ).
4. Po otrzymaniu płatności zarejestruj **[płatność przychodzącą](incoming-payments.md)** i dopasuj ją do faktury.
5. Kontroluj [dług](debt-and-calendar.md) w raportach i w [kalendarzu płatności](debt-and-calendar.md).

### Scenariusz: utworzyć fakturę zakupu i zarejestrować płatność do dostawcy

1. Otwórz **„Fakturowanie” → „Operacje” → „Faktury zakupu”**.
2. Utwórz fakturę zakupu i uzupełnij linie.
3. Ustaw fakturę zakupu w status **„Do zapłaty”** (jeśli wymagane).
4. Zarejestruj **[płatność wychodzącą](outgoing-payments.md)** i dopasuj ją do faktury zakupu.

## Proces end-to-end „od kwoty do zapłaty do zamknięcia długu”

Poniżej przedstawiono typowe łańcuchy dokumentów. W konkretnej konfiguracji część kroków może być wyłączona lub zastąpiona.

### Sprzedaż (klient)

1. **[Faktura](invoices.md)** — rejestruje sprzedaż w rozliczeniach (przychód/podatki/dług klienta).
2. **[Wydanie](shipments-from-invoice.md)** (opcjonalnie) — dokument magazynowy, który można utworzyć z faktury.
3. **[Płatność przychodząca](incoming-payments.md)** — rejestruje wpływ środków i zmniejsza dług (po dopasowaniu do dokumentów).

### Zakup (dostawca)

1. **[Faktura zakupu](bills.md)** — rejestruje zakup w rozliczeniach (kwoty/podatki/zobowiązanie firmy wobec dostawcy).
2. **[Płatność wychodząca](outgoing-payments.md)** — rejestruje płatność do dostawcy i zmniejsza dług (po dopasowaniu do dokumentów).

Wskazówka praktyczna:

- jeśli rozliczanie długu jest prowadzone **wg [faktur](invoices.md)**, dopasowuj [płatności przychodzące](incoming-payments.md) do faktur;
- jeśli rozliczanie długu jest prowadzone **wg [faktur zakupu](bills.md)**, dopasowuj [płatności wychodzące](outgoing-payments.md) do faktur zakupu;
- jeśli używany jest **[kalendarz płatności](debt-and-calendar.md)**, zweryfikuj warunki płatności w dokumentach oraz w [ustawieniach](settings.md).

## Nawigacja

Sekcja „Fakturowanie” zawiera grupy:

- **Operacje** — [faktury zakupu](bills.md), [faktury](invoices.md), [płatności przychodzące](incoming-payments.md), [płatności wychodzące](outgoing-payments.md) oraz deklaracje celne.
- **Procesy** — [mobilna faktura zakupu](mobile-bills.md).
- **Raportowanie** — [kalendarz płatności](debt-and-calendar.md), Płatności, Raport faktur zakupu, Raport faktur.
- **Konfiguracja** — formularz **„Ustawienia”**, [podatki](taxes.md), Warunki płatności, Banki, Konta (bankowe + kasowe), Konta analityczne.

## Terminy

#### [Faktura zakupu](bills.md)

Dokument, który rejestruje przyjęcie towarów/usług od dostawcy oraz kwotę do zapłaty dostawcy.

#### [Faktura](invoices.md)

Dokument, który rejestruje sprzedaż w rozliczeniach (przychód, podatki, dług).

#### [Płatność przychodząca](incoming-payments.md)

Wpływ środków (płatność od klienta/partnera).

#### [Płatność wychodząca](outgoing-payments.md)

Wypłata środków (płatność do dostawcy, zwrot, inne wypłaty).

#### [Dług](debt-and-calendar.md)

Saldo rozrachunków z partnerem lub kontraktem — suma ze znakiem jego aktywnych dokumentów i płatności. Dla pojedynczego dokumentu powiązanym wskaźnikiem jest jego kwota pozostała (**„Pozostało”**) = kwota minus dopasowane płatności.

#### [Korekta](refunds-and-corrections.md)

Osobny dokument, który koryguje lub odwraca wcześniej zatwierdzoną fakturę zakupu lub fakturę. Korekty faktur zakupu obsługują dwa tryby — **zastąpienie** i **odwrócenie (storno)**; korekty faktur obsługują tylko zastąpienie.

#### [Nota uznaniowa / Zwrot](refunds-and-corrections.md)

Dokumenty do rejestrowania zwrotów:

- **nota uznaniowa** to [faktura zakupu](bills.md) specjalnego typu (na typie ustawiona flaga **„Zwrot”**), która odwraca [fakturę](invoices.md) sprzedaży po stronie dostawcy;
- **zwrot** to [faktura](invoices.md) specjalnego typu (na typie ustawiona flaga **„Zwrot”**), która odwraca [fakturę zakupu](bills.md) po stronie nabywcy.

## Statusy i edycja (ogólna zasada)

Wiele dokumentów w „Fakturowaniu” ma typowy cykl życia:

- **„Projekt”** — dokument można swobodnie edytować;
- **„Do zapłaty”** — dokument jest potwierdzony do dalszych działań (drukowanie, tworzenie dokumentów powiązanych, dopasowanie płatności);
- **„Zapłacono”** — dokument jest w pełni opłacony (na karcie faktury/faktury zakupu akcja przenosząca dokument do tego stanu nazywa się **„Oznacz jako Zapłacone”**); odpowiedni końcowy status na samych płatnościach to **„Wykonano”**;
- **„Anulowano”** — dokument jest wyłączony z rozliczeń/procesów.

Dokładne zachowanie zależy od konfiguracji. Zasadniczo im „wyższy” status, tym więcej ograniczeń w zmianie pól i linii.

## Integracje i zależne obszary (poziom użytkownika)

- **Bank/kasa**: płatności są powiązane z kontami bankowymi/kasami; na ich podstawie budowane są raporty ruchu i długu.
- **Magazynowanie** (jeśli używane): faktury mogą tworzyć wydania; niektóre pola (lokalizacja, adres dostawy) stają się wymagane.
- **Podatki**: podatki mogą być ustawiane ręcznie w liniach lub podstawiane automatycznie na podstawie ustawień.

## FAQ

#### Dlaczego dług nie maleje po wprowadzeniu płatności?

Zwykle trzeba:

1. Upewnić się, że płatność jest **rozliczona** z dokumentami (faktury zakupu/faktury).
2. Sprawdzić statusy dokumentu i płatności (nie mogą być Anulowan).
3. Sprawdzić walutę i kwoty (płatność częściowa, nadpłata).

Zobacz: [Płatności](payments.md), [Płatności przychodzące](incoming-payments.md), [Płatności wychodzące](outgoing-payments.md), [Dług i kalendarz płatności](debt-and-calendar.md).

#### Dlaczego drukowanie dokumentu nie jest dostępne?

Drukowanie najczęściej zależy od:

- statusu dokumentu (np. drukowanie jest dostępne dopiero od „Do zapłaty” / „Gotowe”);
- obecności skonfigurowanego szablonu wydruku.

Zobacz: [Raporty i drukowanie](reports-and-printing.md), [Ustawienia i katalogi](settings.md).