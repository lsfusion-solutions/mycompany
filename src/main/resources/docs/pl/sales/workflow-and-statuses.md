---
title: Przepływ pracy zamówienia i statusy
---

W sekcji **„Sprzedaż”** zamówienie przechodzi przez statusy. Statusy definiują:

- czy zamówienie można edytować;
- czy zamówienie można anulować;
- czy można tworzyć dokumenty powiązane (wydania, faktury, zlecenia produkcji/zamówienia zakupu).

## Typowy przepływ

1. **Projekt**
   - zamówienie można edytować; można dodawać i usuwać linie;
   - status domyślny dla nowego zamówienia.
2. **Wysłane**
   - zamówienie zostało wysłane do klienta e-mailem (akcja **„Wyślij”**);
   - temat, treść, szablon załącznika oraz adres kopii są konfigurowane w typie zamówienia;
   - dostępne z „Projekt”; ze statusu „Wysłane” można od razu przejść do „Potwierdzone”.
3. **Potwierdzone**
   - zamówienie jest uznane za uzgodnione; dostępne z „Projekt” lub „Wysłane”;
   - można tworzyć dla niego [wydania](shipments.md) i [faktury](invoices.md);
   - zależnie od ustawień [zlecenia produkcji](../manufacturing/workflow.md) lub [zamówienia zakupu](../purchase/purchase.md) mogą być tworzone automatycznie (konfigurowane przez „Typ zlecenia produkcji” i podobne pola w typie zamówienia).
4. **Zablokowane**
   - zamówienie jest zamknięte dla dalszych zmian (np. po pełnej realizacji);
   - dostępne wyłącznie z „Potwierdzone”;
   - w typie zamówienia można włączyć dodatkowe ograniczenia: **„Zakaz blokowania przy aktywnych wydaniach”** oraz **„Zakaz blokowania przy niepełnym wydaniu”**.
5. **Anulowane**
   - zamówienie jest zamknięte i nie będzie realizowane;
   - dostępne ze wszystkich statusów oprócz „Projekt” i „Anulowane”.

Dokładne nazwy statusów i ograniczenia zależą od konfiguracji.

## Ograniczenia i kontrole

Typowe reguły obejmują:

- nie można usunąć linii zamówienia, jeśli utworzono już dla niej dokumenty powiązane;
- nie można anulować zamówienia, jeśli uruchomiono dla niego „rozpoczęte” procesy (np. aktywne zlecenia produkcji);
- przy próbie zablokowania zamówienia system sprawdza ograniczenia ustawione w typie zamówienia (aktywne wydania i/lub niepełna wysyłka) i pokazuje komunikat, jeśli blokada jest zabroniona.

## Rekomendacje

- potwierdzaj zamówienie dopiero po weryfikacji cen, lokalizacji i warunków dostawy;
- jeśli musisz zamknąć zamówienie bez realizacji, użyj anulowania zamiast usuwania.