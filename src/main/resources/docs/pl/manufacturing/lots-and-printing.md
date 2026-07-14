---
title: Partie i drukowanie
---

W produkcji mogą być używane partie oraz formularze wydruku.

## Partie

Partia pozwala powiązać wynik produkcji oraz późniejsze ruchy magazynowe z konkretną serią produkcyjną.

Śledzenie partii włącza się dla poszczególnych towarów (zobacz ustawienia danych podstawowych); panele partii pojawiają się w [zamówieniu produkcji](orders.md) tylko dla towarów objętych śledzeniem partii.

### Partie w liniach produktów

Na zakładce **„Produkty wyprodukowane”** wybrana linia ma panel partii z dwiema kolumnami ilości dla każdej partii:

- **„Produkcja”** — planowana ilość partii;
- **„Wyprodukowano”** — faktycznie wyprodukowana ilość partii.

Sposoby wypełnienia partii:

- akcja generowania partii tworzy zapisy partii dla planowanej ilości i nadaje im identyfikatory/kody kreskowe;
- zeskanowanie lub wpisanie kodu kreskowego partii dodaje partię; jeśli partia o tym kodzie kreskowym jeszcze nie istnieje, jest tworzona automatycznie;
- gdy zamówienie zostaje oznaczone jako **„Wykonano”**, a faktycznie wyprodukowana ilość linii jest równa planowi, ilości wyprodukowane w podziale na partie są wypełniane automatycznie z ilości planowanych.

Wyprodukowane partie są przyjmowane na stan razem z produktami, dzięki czemu późniejsze wysyłki można prześledzić wstecz do serii produkcyjnej.

### Partie w liniach materiałów

Na zakładce **„Materiały”** wybrana linia ma panel partii, w którym rejestrowana jest ilość **„Zużyte”** w podziale na partie — w ten sposób ewidencjonujesz, które dokładnie przyjęte partie zostały zużyte w produkcji.

### Drukowanie etykiety partii

Jeśli dla towaru skonfigurowano typ wydruku etykiety, linie produktów z wyprodukowaną partią pokazują akcję **„Etykieta”**, która drukuje etykietę partii.

## Drukowanie zamówienia

Akcja **„Drukuj”** [zamówienia produkcji](orders.md) drukuje prosty formularz zadania produkcyjnego:

- numer zamówienia, data rozpoczęcia;
- towar i ilość do wyprodukowania;
- lista materiałów z ilością do zużycia i lokalizacją źródłową.

Używaj go jako karty zadania dla hali produkcyjnej. Formularz wydruku jest dostępny także dla struktury i kosztu zestawienia materiałowego (zobacz [Zestawienia materiałowe](bom.md)).
