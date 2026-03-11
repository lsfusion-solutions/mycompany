---
title: Księgowość - dokumentacja użytkownika
---

Ta sekcja opisuje moduł księgowy oparty na Księdze Głównej: plan kont, dzienniki, generowanie zapisów z dokumentów operacyjnych, ręczne zapisy, środki trwałe i raportowanie.

## Dla kogo jest ta sekcja

Sekcja "Księgowość" jest zwykle używana przez:

- księgowych i głównych księgowych;
- specjalistów finansowych i kontrolerów;
- użytkowników, którzy konfigurują reguły księgowania dla sprzedaży, zakupów, magazynu i płac.

## Strony w tej sekcji

- [Ustawienia i słowniki](settings.md)
- [Księgowanie z dokumentów źródłowych](source-documents.md)
- [Zapisy księgowe](journal-entries.md)
- [Środki trwałe i amortyzacja](assets.md)
- [Raporty](reports.md)

## Gdzie to znaleźć

Sekcja zwykle zawiera:

- **Księgowość -> Operacje** -> **Zapisy księgowe**, **Środki trwałe**, **Amortyzacja środków trwałych**;
- **Księgowość -> Raportowanie** -> **Księga główna**;
- **Księgowość -> Konfiguracja** -> **Ustawienia**, **Plan kont**, **Pozycje przepływów pieniężnych**.

Dodatkowo zakładki księgowe są dodawane do typów dokumentów i samych dokumentów w innych modułach. Zobacz [Księgowanie z dokumentów źródłowych](source-documents.md).

## Szybki start

1. Otwórz [Ustawienia i słowniki](settings.md) i sprawdź plan kont, dzienniki oraz typy środków trwałych.
2. Na typach używanych dokumentów skonfiguruj dziennik księgowy oraz pary debet/kredyt. Zobacz [Księgowanie z dokumentów źródłowych](source-documents.md).
3. Twórz i realizuj dokumenty operacyjne, a następnie generuj zapisy księgowe z poziomu dokumentu albo zbiorczo z [Księgi głównej](reports.md).
4. Weryfikuj wygenerowane zapisy w sekcji [Zapisy księgowe](journal-entries.md), w razie potrzeby poprawiaj ręczne zapisy i wykonuj księgowanie/odksięgowanie.
5. Jeśli w organizacji używa się środków trwałych, prowadź je w sekcji [Środki trwałe i amortyzacja](assets.md).
6. Buduj [Księgę główną](reports.md) i drukuj Bilans, Rachunek zysków i strat oraz Rachunek przepływów pieniężnych.

## Główne pojęcia

#### Dziennik

Słownik, który grupuje zapisy księgowe. Typy dokumentów są powiązane z dziennikami.

#### Zapis księgowy

Dokument księgowy z nagłówkiem oraz liniami debetu i kredytu.

#### Data blokady zmian

Data kontrolna, po której nie można zmieniać zapisów księgowych ani ich linii.

#### Pozycja przepływu pieniężnego

Klasyfikacja używana w rachunku przepływów pieniężnych. Jest przypisywana do kont Księgi Głównej.

#### Typ środka trwałego

Obiekt konfiguracyjny definiujący numerator, dziennik, konta i okres użytkowania dla środków trwałych.
