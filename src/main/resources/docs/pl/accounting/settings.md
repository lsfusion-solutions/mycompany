---
title: Ustawienia i słowniki
---

## Gdzie to znaleźć

Otwórz:

- **Księgowość -> Konfiguracja -> Ustawienia**
- **Księgowość -> Konfiguracja -> Plan kont**
- **Księgowość -> Konfiguracja -> Pozycje przepływów pieniężnych**

## Ustawienia

Formularz **Ustawienia** zawiera:

- **Tylko do odczytu dla zaksięgowanych zapisów** - jeśli opcja jest włączona, zaksięgowane zapisy stają się tylko do odczytu aż do odksięgowania;
- numerator używany dla ręcznych [zapisów księgowych](journal-entries.md);
- zakładki **Dzienniki** i **Typy środków trwałych**.

**Data blokady zmian** jest ustawiana w nagłówku [Księgi głównej](reports.md). Służy jako twarda granica dla edycji zapisów księgowych.

## Plan kont

Plan kont ma strukturę drzewa. Każde konto ma:

- **Kod**
- **Nazwę**
- **Typ**
- **Nadrzędne konto**
- **Ekwiwalent pieniężny**
- **Pozycję przepływu pieniężnego (Debet / Kredyt)**

Ważne zasady:

- typ konta musi być ustawiony na samym koncie albo dziedziczony po jednym z kont nadrzędnych;
- flaga **Ekwiwalent pieniężny** jest używana w [rachunku przepływów pieniężnych](reports.md);
- przypisania pozycji przepływów pieniężnych są dziedziczone z kont nadrzędnych, jeśli nie ustawiono ich bezpośrednio na koncie podrzędnym.

Jeśli baza jest inicjalizowana bez kont, moduł ładuje domyślny plan kont z głównymi grupami:

- Aktywa
- Zobowiązania
- Kapitał
- Przychody
- Koszty

oraz typowymi podkontami, takimi jak Kasa, Bank, Należności, Zobowiązania, Środki trwałe, Umorzenie, Zobowiązania z tytułu wynagrodzeń i Podatki do zapłaty.

## Dzienniki

Dzienniki są używane w typach dokumentów oraz w ręcznych zapisach księgowych. Dziennik zawiera:

- **Kod**
- **Nazwę**
- **Numerator**

Jeśli baza jest inicjalizowana bez dzienników, moduł tworzy domyślne dzienniki:

- Bank
- Kasa
- Sprzedaż
- Zakup
- Pozostałe

## Pozycje przepływów pieniężnych

Pozycje przepływów pieniężnych klasyfikują ruchy dla rachunku przepływów pieniężnych. Każda pozycja ma:

- **Nazwę**
- **Typ działalności**: Operacyjna, Inwestycyjna lub Finansowa

Następnie pozycje te są przypisywane do kont Księgi Głównej jako klasyfikacja po debecie i/lub kredycie.

## Typy środków trwałych

Typy środków trwałych są używane przy tworzeniu obiektów i naliczaniu amortyzacji. Typ definiuje:

- **Nazwę**
- **Numerator**
- **Dziennik**
- **Konto środków trwałych**
- **Konto nabycia**
- **Konto amortyzacji**
- **Konto kosztów**
- **Okres użytkowania, miesięcy**

Jeśli baza jest pusta, moduł tworzy także domyślny typ o nazwie **Asset**.

## Co konfiguruje się poza tą sekcją

Reguły księgowania dla faktur zakupu, faktur, płatności, przyjęć, wydań, korekt, odpadów i pasków płacowych są konfigurowane w kartach odpowiednich typów dokumentów w innych modułach. Zobacz [Księgowanie z dokumentów źródłowych](source-documents.md).
