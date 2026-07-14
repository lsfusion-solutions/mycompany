---
title: Raporty i drukowanie
---

## Drukowanie dokumentów

W „Fakturowaniu” wydruki są zwykle dostępne dla:

- [faktur zakupu](bills.md);
- [faktur](invoices.md);
- [dokumentów płatności](payments.md).

Dostępność wydruków zależy od konfiguracji i szablonów.

### Konfigurowanie szablonów wydruku

Ten sam mechanizm szablonów wydruku działa identycznie dla [faktur zakupu](bills.md), [faktur](invoices.md) oraz obu typów [płatności](payments.md) — przychodzących i wychodzących — a każdy typ dokumentu ma własną listę szablonów (**szablony faktury zakupu**, **szablony faktury**, **szablony płatności przychodzącej/wychodzącej**). Poniższe kroki wykorzystują faktury jako przykład; faktury zakupu i płatności konfiguruje się w ten sam sposób.

#### Co to jest szablon wydruku

Szablon wydruku to forma, którą system generuje po kliknięciu **„Drukuj”** w karcie **[Faktury](invoices.md)**.

Dla każdego **typu faktury** można włączyć jeden lub więcej szablonów. Jeśli jest kilka szablonów, użytkownik wybiera wymagany podczas drukowania (zobacz [Ustawienia i katalogi](settings.md)).

Szablon może być:

- **predefiniowany** (wbudowany układ dostarczany z systemem);
- **własny** (wgrywasz swój plik układu).

#### Kiedy drukowanie jest dostępne na Fakturze

Przycisk **„Drukuj”** jest widoczny w karcie [faktury](invoices.md) tylko wtedy, gdy dla jej typu włączono co najmniej jeden szablon wydruku.

#### Gdzie wykonuje się ustawienia

Konfiguracja drukowania składa się z dwóch kroków:

1) **Utwórz/skonfiguruj szablon faktury** — ustaw jego nazwę i źródło (wbudowany układ lub wgrany plik).

2) **Włącz szablon dla konkretnego typu faktury** — powiąż szablon z typem, aby pojawił się w drukowaniu.

Te działania są zwykle wykonywane w sekcji [Ustawienia](settings.md):

- lista **Szablonów faktury** (tworzenie/edycja szablonów);
- karta **Typu faktury** (włączanie szablonów dla konkretnego typu).

> Umiejscowienie w menu może się różnić w zależności od konfiguracji, ale logika jest taka sama: szablony są przechowywane osobno, a włączanie odbywa się w typach faktur.

---

#### 1) Tworzenie i konfiguracja szablonu faktury

Otwórz listę **Szablonów faktury** i utwórz nowy szablon (lub otwórz istniejący).

Pola i akcje w karcie szablonu:

- **Nazwa** — jak formularz będzie się nazywał na liście wyboru podczas drukowania.
- **Nazwa pliku szablonu** — używana dla predefiniowanych układów (gdy nie wgrano pliku).
- **Pobierz** — otwiera/pobiera bieżący szablon do podglądu (predefiniowany lub wgrany).
- **Prześlij** — wgraj swój plik układu (po wgraniu będzie używany).
- **Zresetuj** — usuń wgrany plik i wróć do predefiniowanego układu (jeśli jest wskazany).
- **Format** — określa, jak generowany jest wynik drukowania: **PDF**, **DOCX**, **XLSX**, **RTF**, **HTML** albo **Printer** (wysyła wynik wprost na drukarkę bez tworzenia pliku).
- **Nazwa pliku eksportu** — nazwa pliku podczas zapisywania wyniku (używana przez formaty plikowe; ukryta dla formatu **Printer**).

Rekomendacje:

- Jeśli chcesz **zastąpić standardową formę** swoją wersją — użyj **Prześlij**.
- Jeśli chcesz **wrócić do standardowej formy** — użyj **Zresetuj**.

---

#### 2) Włączanie szablonu dla typu faktury

Otwórz listę **Typów faktur**, wybierz wymagany typ i przejdź na zakładkę z szablonami.

Następnie:

1. Znajdź wymagany szablon na liście.
2. Włącz go dla bieżącego typu checkboxem **„Incl.”**.

Możesz włączyć wiele szablonów — wtedy podczas drukowania system poprosi o wybór.

---

#### 3) Drukowanie z karty Faktury

Otwórz wymaganą [fakturę](invoices.md) i kliknij **„Drukuj”**.

Możliwe są dwie opcje:

- **Włączony jeden szablon** — drukowanie rozpoczyna się od razu.
- **Włączonych kilka szablonów** — otwiera się okno wyboru i wybierasz szablon.

Jeśli wybrany format generuje plik, system zaproponuje otwarcie/zapis wyniku, biorąc pod uwagę pole **Nazwa pliku eksportu**.

---

#### Typowe problemy i jak je naprawić

**1) Nie ma przycisku „Drukuj” na fakturze.**

Sprawdź:

- czy w dokumencie ustawiono właściwy typ faktury;
- czy dla tego typu włączono co najmniej jeden szablon;
- czy szablon ma wskazany predefiniowany układ lub wgrany plik.

**2) Drukuje się nie ten formularz.**

Sprawdź:

- jaki typ faktury jest ustawiony w dokumencie;
- czy dla tego typu włączono wiele szablonów (wtedy podczas drukowania trzeba wybrać właściwy).

**3) Trzeba przywrócić standardowy wydruk.**

Otwórz szablon i kliknij **Zresetuj** (jeśli wcześniej wgrano plik).

---

#### Przykłady predefiniowanych formularzy

W zależności od dostawy mogą być dostępne typowe predefiniowane wydruki faktury (np. WZ, faktura, uniwersalny dokument przekazania, faktura proforma). Możesz używać ich bez zmian albo zastąpić własnymi plikami przez **Prześlij**.

## Raporty

W konfiguracji podstawowej w **„Fakturowanie” → „Raportowanie”** dostarczane są cztery formularze:

- **„Raport faktur zakupu” (Bills report)** — **tabela przestawna** (pivot) po liniach [faktur zakupu](bills.md). Kolumny dokumentu obejmują numer, datę, dostawcę, status, typ, konta, walutę, warunki płatności oraz termin płatności (Pay before); kolumny linii obejmują towar, jego kategorie, dynamiczne kolumny atrybutów towaru, ilość, cenę i podatki; **miarami** przestawnymi są kwota bez podatku, kwota podatku, kwota oraz kwota w walucie. Panel **„Filtry”** i filtr **„Przedział dat”** pozwalają zawęzić dane, a grupowanie w tabeli przestawnej układasz samodzielnie.
- **„Raport faktur” (Invoices report)** — ta sama tabela przestawna po liniach [faktur](invoices.md), z polami **„Klient”** i **„Dział”** w miejsce pól dostawcy.
- **„Płatności”** — jednolity widok wszystkich płatności przychodzących i wychodzących z typem, datą, numerem, partnerem, kontami, firmą i kwotą ze znakiem; na tym samym formularzu jest też zakładka **„Konta”**, która pokazuje bieżące salda kont oraz — po wskazaniu daty selektorem **„Wybierz datę”** — saldo na wybraną datę.
- **[Kalendarz płatności](debt-and-calendar.md)** — niespłacone saldo i prognoza gotówki na zakres dat, z zakładkami rozbicia **„Typ” (Type)** oraz **„Partner”**.

Wartości [długu](debt-and-calendar.md) widoczne są również bezpośrednio na karcie **faktury zakupu** i **faktury** (dopasowane płatności i pozostały dług) oraz przez dedykowane widoki **„Dług wg partnerów”** / **„Dług wg kontraktów”**.

Rekomendacje:

1. Używaj filtra **„Przedział dat”**.
2. Do analizy długu korzystaj z widoków **„Dług wg partnerów”** / **„Dług wg kontraktów”** i ich filtra **„Przeterminowane” (Overdue)**.