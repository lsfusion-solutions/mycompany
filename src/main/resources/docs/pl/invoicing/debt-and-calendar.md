---
title: Dług i kalendarz płatności
---

## Dług

W „Fakturowaniu” dokumenty i płatności są traktowane jako **wpisy długu** ze znakiem: [faktury zakupu](bills.md) i płatności przychodzące tworzą dług w jednym kierunku, a [faktury](invoices.md) i płatności wychodzące w przeciwnym. Występują dwie różne wielkości:

- **Dług partnera / kontraktu** — suma ze znakiem wszystkich aktywnych dokumentów danego [partnera](../masterdata/partners.md) lub [kontraktu](../masterdata/contracts.md). Ta suma istnieje od momentu utworzenia dokumentu; **nie** zależy od dopasowania. Kwoty są przeliczane na walutę domyślną (chyba że przeliczanie zostało wyłączone w [ustawieniach](settings.md)).
- **Pozostało (Left)** — dla pojedynczego dokumentu jest to jego kwota pomniejszona o **dopasowane** płatności. To ta wielkość maleje, gdy dopasujesz płatność.

Warto zrozumieć:

- dokument w statusie **„Anulowano”** jest wykluczany z każdego obliczenia długu;
- **Dług przeterminowany** to ta część długu, której data **„Zapłać do” (Pay before)** jest już w przeszłości;
- dopasowanie wpływa tylko na wielkości poziomu dokumentu — **„Pozostało” (Left)** / **„Zapłacono”**; suma partnera odzwierciedla dokument już od momentu jego wprowadzenia.

Dedykowane widoki **„Dług wg partnerów”** oraz **„Dług wg kontraktów”** wyliczają każdy wpis długu (typ, numer, data, **„Zapłać do” (Pay before)**, firma, kwota, **„Pozostało” (Left)**, narastający **„Dług”**) z filtrem **„Przeterminowane” (Overdue)** i pokazują sumy **„Dług”** oraz **„Dług przeterminowany”** dla każdego partnera/kontraktu. W widoku **„Dług wg partnerów”** każdy wpis ma dodatkowo kolumny **„Dni po terminie”** i **„Przedział wiekowania”** na dziś (zobacz sekcję „Wiekowanie zadłużenia” poniżej).

## Jak dług jest zamykany

1. Utwórz [płatność](payments.md).
2. Dopasuj płatność do dokumentu (albo do kilku dokumentów). Dopasowanie może też nastąpić **automatycznie**, gdy pole **„Podstawa”** płatności zawiera numer dokumentu.
3. Po dopasowaniu pozostała kwota dokumentu (**„Pozostało” (Left)**) maleje; gdy osiągnie zero, dokument jest oznaczany jako **„Zapłacono”**.

Jeśli płatność jest dopasowana do kilku dokumentów, pozostała kwota maleje dla każdego dokumentu o odpowiednią kwotę.

## Kalendarz płatności

Kalendarz płatności (**„Fakturowanie” → „Raportowanie” → „Kalendarz płatności”**) pokazuje niespłacone saldo rozłożone na zakres dat, dzięki czemu widać, kiedy pieniądze mają wpłynąć i wypłynąć.

Układ:

- na górze wybierasz **„Firmę”** i **przedział dat**; przyciski **\<** / **\>** przesuwają przedział o miesiąc wstecz/naprzód. Przedział początkowo obejmuje *dziś … dziś + 14 dni*.
- **„Saldo gotówki”** pokazuje bieżące saldo kont firmy.
- **„Dług przed” (Debt before)** to niespłacone saldo, którego data **„Zapłać do” (Pay before)** przypada przed początkiem przedziału.
- następnie jest **jedna kolumna na każdą datę** przedziału; każda komórka zawiera zmianę długu netto przypadającą na dany dzień. Stopka kolumny pokazuje **prognozę gotówki** — saldo narastające (saldo gotówki powiększone o skumulowany dług) do danej daty.
- komórki są cieniowane na zielono (dodatnie) lub na czerwono (ujemne).

Kalendarz ma dwie zakładki rozbicia — **„Typ” (Type)** oraz **„Partner”** — a także wykres salda gotówki.

Termin płatności pochodzi z zapisanej w każdym dokumencie wartości **„Zapłać do” (Pay before)** (wyliczonej jednorazowo z warunków płatności przy wprowadzaniu), a nie jest wyliczany na bieżąco.

Kliknięcie komórki **„Dług przed” (Debt before)** albo komórki daty pozwala przejść do dokumentów źródłowych (lista **„Długi”** odfiltrowana wg firmy, typu, partnera i terminu płatności).

### Co sprawdzić, jeśli kalendarz jest „pusty” albo daty są nieprawidłowe

Sprawdź:

- czy w dokumentach są uzupełnione **warunki płatności / termin płatności**;
- czy wybrany **przedział dat** rzeczywiście obejmuje terminy płatności;
- czy dokumenty nie są wykluczane przez status (np. „Anulowano”).

## Wiekowanie zadłużenia

**„Fakturowanie” → „Raportowanie” → „Wiekowanie zadłużenia”** rozkłada niespłacony dług każdego partnera według długości przeterminowania na wybraną datę — klasyczna struktura wiekowa należności i zobowiązań.

Układ:

- na górze wybierasz **„Firmę”** i **„Datę”** (domyślnie dziś); przełącznik **„Dostawcy”** przełącza raport z klientów (partnerów, którzy są winni firmie) na dostawców (partnerów, którym firma jest winna) — po stronie dostawców kwoty są pokazywane jako dodatnie;
- jeden wiersz na partnera: **„Sprzedawca”**, **„Suma”** długu na datę, część **„Nieprzeterminowane”**, po jednej kolumnie na każdy przedział wiekowania (**1-30**, **31-60**, **61-90** przy przedziałach domyślnych) oraz kolumna **„> 90”** dla długów starszych niż ostatni przedział;
- filtr **„Moi klienci”** zostawia tylko partnerów, których sprzedawcą jest bieżący użytkownik;
- dolna tabela wymienia długi wybranego partnera z kolumnami **„Dni po terminie”**, **„Przedział wiekowania”**, kwotą i **„Długiem”** pozostałym na datę.

Jak liczone są wartości:

- dług jest przeterminowany na datę, gdy jego data **„Zapłać do” (Pay before)** jest wcześniejsza niż ta data; dni po terminie liczone są od **„Zapłać do”**;
- dług pozostały na datę to kwota dokumentu pomniejszona o dopasowane płatności z datą nie późniejszą niż ta data, więc raport można zbudować także na datę przeszłą;
- długi bez **„Zapłać do”** (np. niedopasowane płatności) trafiają do **„Nieprzeterminowane”**;
- wartości partnera są netto, tak jak **„Dług”** i **„Dług przeterminowany”** na jego karcie: dokumenty w obu kierunkach są sumowane ze znakiem, więc na dziś suma przedziałów równa się **„Długowi przeterminowanemu”** z karty; partner mający jednocześnie należności i zobowiązania może pokazać komórkę ujemną.

Granice przedziałów ustawia się w zakładce **„Przedział wiekowania”** formularza [„Ustawienia”](settings.md).

Zobacz parametry: [Ustawienia i katalogi](settings.md).