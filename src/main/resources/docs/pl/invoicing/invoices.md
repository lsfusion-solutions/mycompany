---
title: Faktury
---

## Gdzie znaleźć

Otwórz **„Fakturowanie” → „Operacje” → „Faktury”**.

## Przeznaczenie

Faktura rejestruje sprzedaż w rozliczeniach:

- kwoty linii;
- podatki;
- dług klienta;
- oraz — jeśli włączony jest obszar [Magazynowania](../inventory/inventory.md) — powiązanie z [wydaniami](shipments-from-invoice.md).

Jeśli w Twojej organizacji używany jest **Krajowy System e‑Faktur (KSeF)**, zobacz także: [KSeF — faktury ustrukturyzowane](ksef/ksef.md).

W zależności od ustawień faktura może być:

- dokumentem używanym do kontroli **[długu](debt-and-calendar.md)** (jeśli rozliczanie długu jest prowadzone na podstawie faktur);
- podstawą do utworzenia **[wydania](shipments-from-invoice.md)** (jeśli używane jest [Magazynowanie](../inventory/inventory.md));
- dokumentem do wydruku dokumentów pierwotnych (jeśli włączone są szablony wydruku).

## Karta faktury

### Pola główne

- typ;
- data i numer;
- [partner](../masterdata/partners.md);
- [kontrakt](../masterdata/contracts.md) (jeśli używany);
- [lokalizacja](../inventory/locations.md)/adres (jeśli używane);
- notatka.

Jeśli używany jest [kalendarz płatności](debt-and-calendar.md), faktura może zawierać warunki płatności / termin płatności (nazwy pól zależą od konfiguracji).

### Linie

- [towar](../masterdata/items.md)/usługa;
- ilość;
- cena;
- [podatek](taxes.md);
- kwota.

### Statusy

Typowy zestaw statusów:

- Projekt;
- Do zapłaty;
- Wykonano;
- Anulowan.

Zazwyczaj:

- w statusie **Projekt** można zmieniać nagłówek i linie;
- w statusie **Do zapłaty** dokument jest potwierdzony do dalszych działań (drukowanie, tworzenie wydania, dopasowanie płatności);
- w statusie **Wykonano** dokument jest uznawany za zamknięty;
- status **Anulowan** wyklucza dokument z procesu/rozliczeń.

### Powiązanie z wydaniem

Jeśli używane jest [Magazynowanie](../inventory/inventory.md):

- faktura może utworzyć wydanie;
- wydanie może zostać utworzone automatycznie na podstawie ustawienia typu.

Zobacz: [Wydania z faktury](shipments-from-invoice.md).

Wskazówka praktyczna: jeśli wydanie jest tworzone automatycznie z faktury, najpierw zweryfikuj linie (towary, ilości, lokalizację/adres), a dopiero potem ustaw fakturę w status, który uruchamia automatyczne tworzenie.

## Płatność

Faktura może być powiązana z [płatnościami przychodzącymi](incoming-payments.md). [Dług](debt-and-calendar.md) jest obliczany na podstawie dopasowanych płatności.

Jeśli kwota płatności jest mniejsza niż kwota faktury, jest to **płatność częściowa**, a dług pozostaje do czasu pełnego rozliczenia.

### Szybka płatność z faktury

W niektórych konfiguracjach płatność przychodząca może zostać utworzona bezpośrednio z faktury.

Typowy przebieg:

1. Ustaw fakturę w status **„Do zapłaty”**.
2. Kliknij **„Rejestruj płatność”**.
3. Sprawdź utworzoną kartę **płatności przychodzącej** i zapisz ją.

System zwykle:

- podstawia partnera, firmę, konta/kasy oraz typ płatności (w zależności od ustawień);
- ustawia kwotę równą pozostałej kwocie do zapłaty;
- od razu wykonuje **dopasowanie płatności** z tą fakturą, dzięki czemu dług maleje.

Zobacz: [Płatności przychodzące](incoming-payments.md).

Zobacz także: [Płatności](payments.md), [Dług i kalendarz płatności](debt-and-calendar.md).