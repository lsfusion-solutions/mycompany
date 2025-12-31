---
title: Korekta zapasów
---

Korekta zapasów (liczenie zapasów) służy do porównania stanu systemowego z faktyczną ilością w [lokalizacji](locations.md).

## Typowy przebieg

Poniżej znajduje się rekomendowana sekwencja kroków. Działa zarówno dla pełnej korekty lokalizacji (liczenia), jak i dla liczenia strefy/miejsca składowania.

1. **Przygotowanie**
   - Zdefiniuj **zakres**: [lokalizacja](locations.md)/strefa/miejsce składowania, grupy towarowe, czy potrzebujesz ewidencji [partii/pakietów](lots-and-packages.md).
   - Ustal moment „migawki”:
     - jeśli to możliwe, zakończ otwarte **[przyjęcia](receipts.md)/[wydania](shipments.md)/[przemieszczenia](transfers.md)** dla wybranej [lokalizacji](locations.md);
     - uzgodnij zasady operacyjne na okres liczenia (np. nie księgować dokumentów dla tej lokalizacji lub rejestrować operacje osobno).
2. **Utworzenie dokumentu**
   - Utwórz **korektę zapasów** i wskaż **[lokalizację](locations.md)**.
   - W razie potrzeby ustaw dodatkowe parametry (np. włącz [partie](lots-and-packages.md)).
3. **Przejście do statusu `W trakcie`**
   - Przenieś korektę do statusu **`W trakcie`**.
   - Następnie użyj wybranej metody liczenia: przez listy (patrz niżej) albo ręczne wprowadzanie.
4. **Wprowadzenie ilości faktycznych**
   - Wypełnij **ilości policzone** dla towarów.
   - Jeżeli włączona jest ewidencja partii/serii, wprowadź ilości **wg [partii](lots-and-packages.md)**.
   - Jeżeli używana jest ewidencja adresowa, upewnij się, że wprowadzasz ilości dla **wymaganej strefy/miejsca składowania**.
5. **Przegląd i uzgodnienie**
   - Sprawdź pozycje z zerowymi/nietypowymi wartościami.
   - Jeśli rozbieżności są duże:
     - ponownie sprawdź **jednostki miary**;
     - zweryfikuj, że wybrana **[lokalizacja](locations.md)** odpowiada fizycznej.
6. **Wygenerowanie rozbieżności**
   - Oblicz/wygeneruj **rozbieżności** (nadwyżka/niedobór).
   - Jeśli wymagane, uzgodnij rozbieżności z osobą odpowiedzialną.
7. **Zakończenie**
   - Zakończ korektę.
   - Po zakończeniu stany zostaną doprowadzone do ilości policzonych (w ramach zasad księgowych Twojej konfiguracji).

## Listy korekty

System może używać osobnego mechanizmu „list korekty”:

- przygotowanie listy towarów do policzenia;
- rejestrowanie wyników liczenia;
- przeniesienie wyników do dokumentu korekty.

Rekomendowane podejście:

1. Wygeneruj listę (po lokalizacji/strefie/miejscu składowania, opcjonalnie z filtrem grupy towarowej).
2. Wydrukuj/udostępnij listę wykonawcom i zbierz ilości policzone.
3. Załaduj/wprowadź wyniki do listy.
4. Przenieś wyniki do dokumentu korekty i wykonaj kroki **„Przegląd i uzgodnienie” → „Wygenerowanie rozbieżności” → „Zakończenie”**.

## Typowe problemy

- **Nie można zakończyć** — ilości policzone nie są uzupełnione lub rozbieżności nie zostały obliczone.
- **Rozbieżności są zbyt duże** — sprawdź jednostki miary i wybraną [lokalizację](locations.md).