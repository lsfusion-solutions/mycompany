---
title: Raporty i drukowanie
---

## Drukowanie dokumentów

W „Fakturowaniu” wydruki są zwykle dostępne dla:

- [faktur zakupu](bills.md);
- [faktur](invoices.md);
- [dokumentów płatności](payments.md).

Dostępność wydruków zależy od konfiguracji i szablonów.

### Konfigurowanie szablonów wydruku dla „Faktur”

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
- **Załaduj** — wgraj swój plik układu (po wgraniu będzie używany).
- **Zresetuj** — usuń wgrany plik i wróć do predefiniowanego układu (jeśli jest wskazany).
- **Format** — określa, jak generowany jest wynik drukowania.
- **Nazwa pliku eksportu** — nazwa pliku podczas zapisywania wyniku (jeśli wybrany format generuje plik).

Rekomendacje:

- Jeśli chcesz **zastąpić standardową formę** swoją wersją — użyj **Załaduj**.
- Jeśli chcesz **wrócić do standardowej formy** — użyj **Zresetuj**.

---

#### 2) Włączanie szablonu dla typu faktury

Otwórz listę **Typów faktur**, wybierz wymagany typ i przejdź na zakładkę z szablonami.

Następnie:

1. Znajdź wymagany szablon na liście.
2. Włącz go dla bieżącego typu (zwykle checkbox typu „Włączone”).

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

W zależności od dostawy mogą być dostępne typowe predefiniowane wydruki faktury (np. WZ, faktura, uniwersalny dokument przekazania, faktura proforma). Możesz używać ich bez zmian albo zastąpić własnymi plikami przez **Załaduj**.

## Raporty

Najczęściej używane:

- raporty [faktur zakupu](bills.md);
- raporty [faktur](invoices.md);
- raporty [płatności](payments.md);
- raporty [długu](debt-and-calendar.md).

Rekomendacje:

1. Używaj przedziału dat.
2. Przy analizie długu grupuj wg [partnera](../masterdata/partners.md) i [kontraktu](../masterdata/contracts.md).