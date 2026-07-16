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

Dedykowane widoki **„Dług wg partnerów”** oraz **„Dług wg kontraktów”** wyliczają każdy wpis długu (typ, numer, data, **„Zapłać do” (Pay before)**, firma, kwota, **„Pozostało” (Left)**, narastający **„Dług”**) z filtrem **„Przeterminowane” (Overdue)** i pokazują sumy **„Dług”** oraz **„Dług przeterminowany”** dla każdego partnera/kontraktu.

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

Zobacz parametry: [Ustawienia i katalogi](settings.md).