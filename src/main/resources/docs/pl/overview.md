---
title: Moduły systemu — przegląd
slug: /
---

Ten dokument to **przegląd modułów funkcjonalnych MyCompany**: za co odpowiada każda sekcja, jakie zadania użytkowników rozwiązuje, jak moduły łączą się w procesy end‑to‑end oraz gdzie przejść po szczegółowe instrukcje.

Jeśli w Twojej konfiguracji brakuje niektórych pozycji menu lub akcji, jest to normalne: dostępna funkcjonalność zależy od włączonych modułów, ustawień i uprawnień użytkownika.

## Szybka nawigacja

- [Administracja](administration/administration.md)
- [Dane podstawowe](#master-data)
- [Mapa modułów i procesy end-to-end](#module-map-and-end-to-end-processes)
- [Moduły](#modules)
  - [Dane podstawowe](#master-data)
  - [Magazynowanie](#inventory)
  - [Fakturowanie](#invoicing)
  - [Zakup](#purchase)
  - [Produkcja](#manufacturing)
  - [Sprzedaż](#sales)
  - [Sprzedaż detaliczna](#retail)
  - [Zarządzanie projektami](#project-management)
  - [Kadry](#human-resources)
  - [CRM](#crm)
  - [Transport](#transport)

## Mapa modułów i procesy end-to-end {#module-map-and-end-to-end-processes}

Poniżej znajdują się typowe „łańcuchy” między modułami. W konkretnej organizacji część kroków może być wyłączona lub skonfigurowana inaczej.

### Sprzedaż (od leadu do płatności)

1. **CRM** — praca z leadem i komunikacją.
2. **Sprzedaż** — zamówienie klienta, warunki wysyłki.
3. **Magazynowanie** (jeśli używany jest obszar magazynowy) — wydanie / ruch towarów.
4. **Sprzedaż detaliczna** — POS, zmiany, paragon, płatność.
5. **Fakturowanie** — faktura i płatność przychodząca → kontrola należności.

### Zakup (od zamówienia do płatności)

1. **Zakup** — zamówienie do dostawcy i kontrola realizacji.
2. **Magazynowanie** (jeśli używany jest obszar magazynowy) — przyjęcie / ruchy magazynowe.
3. **Fakturowanie** — faktura zakupu i płatność wychodząca → kontrola zobowiązań.

### Produkcja (od planu do wytworzenia)

1. **Sprzedaż** — źródło popytu (zamówienie klienta) lub plan wewnętrzny.
2. **Produkcja** — BOM → zlecenie produkcyjne → produkcja / zużycie.
3. **Magazynowanie** — surowce / wyroby gotowe (stany, partie / pakiety — jeśli włączone).
4. **Zakup** / **Fakturowanie** — uzupełnianie i rozliczanie kosztów (jeśli proces jest prowadzony end‑to‑end).

### Projekty i ewidencja czasu

1. **Zarządzanie projektami** — projekt → zagadnienia → przepracowany czas.
2. **Kadry** (jeśli włączona jest płaca wg czasu) — wykorzystanie wpisów czasu w naliczaniu i wypłacie.

### Transport i koszty

1. **Transport** — pojazdy / kierowcy / serwisy / umowy.
2. Powiązane koszty mogą być rejestrowane w **Fakturowaniu** (faktury zakupu / płatności) i/lub w module **Zakup** (zamówienia do dostawców) — jeśli są włączone i używane.

## Moduły {#modules}

### Dane podstawowe {#master-data}

Start dokumentacji: [masterdata/masterdata.md](masterdata/masterdata.md)

**Cel.** Sekcja do utrzymywania podstawowych danych referencyjnych wykorzystywanych w dokumentach i procesach innych modułów.

**Typowe scenariusze:**

- tworzenie towarów i utrzymywanie ich w aktualnym stanie;
- utrzymywanie partnerów, ich danych kontaktowych i adresów;
- utrzymywanie klasyfikacji (kategorie), jednostek miary;
- utrzymywanie krajów, walut i kursów walut;
- rejestrowanie umów z partnerami.

**Kluczowe obiekty:** partner, towar, kategoria, jednostka miary, dział, kraj, waluta, kurs waluty, umowa.

**Dla kogo:** dla użytkowników odpowiedzialnych za utrzymywanie danych referencyjnych (administratorzy, księgowość/finanse, menedżerowie zakupów/sprzedaży — zależnie od procesu).

**Czytaj dalej:**

- [Dane podstawowe](masterdata/masterdata.md)

### Magazynowanie {#inventory}

Start dokumentacji: [inventory/inventory.md](inventory/inventory.md)

**Cel.** Obszar magazynowy: lokalizacje, przyjęcia / wydania, przemieszczenia, odpad, korekty, kompletacja, partie i pakiety (jeśli włączone), raporty stanów i ruchów.

**Typowe scenariusze:**

- utworzyć przyjęcie i zakończyć dokument;
- utworzyć wydanie do zamówienia / faktury i zamknąć ruch;
- wykonać przemieszczenie między lokalizacjami (magazyny / strefy / miejsca składowania);
- wykonać korektę i zarejestrować różnice;
- zorganizować kompletację (jeśli używana).

**Kluczowe obiekty/dokumenty:** lokalizacja, przyjęcie, wydanie, przemieszczenie, odpad, korekta, partia, pakiet.

**Dla kogo:** pracownicy magazynu, logistyka, kierownicy magazynów; oraz w powiązaniu — sprzedaż / zakup.

**Integracje:** często „fizyczna” część procesów [Sprzedaż](#sales), [Zakup](#purchase), [Produkcja](#manufacturing) i może być powiązany z dokumentami modułu [Fakturowanie](#invoicing).

**Czytaj dalej:**

- [Przyjęcia](inventory/receipts.md)
- [Wydania](inventory/shipments.md)
- [Przemieszczania](inventory/transfers.md)
- [Korekty](inventory/adjustments.md)
- [Zadania kompletacyjne](inventory/picking.md)
- [Magazynowe jednostki SKU](inventory/product-sku.md)
- [Partie i pakiety](inventory/lots-and-packages.md)

### Fakturowanie {#invoicing}

Start dokumentacji: [invoicing/invoicing.md](invoicing/invoicing.md)

**Cel.** Obszar rozliczeń finansowych: faktury zakupu i faktury, płatności (przychodzące / wychodzące), dług, kalendarz płatności, podatki, drukowanie i raportowanie.

**Typowe scenariusze:**

- utworzyć fakturę i zarejestrować płatność przychodzącą z rozliczeniem;
- utworzyć fakturę zakupu od dostawcy i zapłacić (płatność wychodząca);
- kontrolować należności / zobowiązania wg partnerów, umów i dokumentów;
- zarządzać kalendarzem płatności (jeśli używany).

**Kluczowe obiekty/dokumenty:** faktura, faktura zakupu, płatność przychodząca, płatność wychodząca, dług.

**Dla kogo:** menedżerowie (kontrola płatności), księgowość / finanse (rejestracja i rozliczanie płatności, raportowanie).

**Integracje:**

- ze [Sprzedażą](#sales) — faktury i płatności klientów;
- z [Zakupem](#purchase) — faktury zakupu i płatności do dostawców;
- z [Magazynowaniem](#inventory) — faktura może tworzyć wydanie (jeśli włączone).

**Czytaj dalej:**

- [Faktury](invoicing/invoices.md)
- [Faktury zakupu](invoicing/bills.md)
- [KSeF — faktury ustrukturyzowane](invoicing/ksef/ksef.md)
- [Płatności](invoicing/payments.md)
- [Płatności przychodzące](invoicing/incoming-payments.md)
- [Płatności wychodzące](invoicing/outgoing-payments.md)
- [Dług i kalendarz płatności](invoicing/debt-and-calendar.md)

### Zakup {#purchase}

Start dokumentacji: [purchase/purchase.md](purchase/purchase.md)

**Cel.** Obszar zakupów: zamówienia do dostawców, cenniki dostawców, przyjęcia / faktury zakupu oraz kontrola realizacji (co zamówiono, co przyjęto, co pozostało).

**Typowe scenariusze:**

- utworzyć zamówienie do dostawcy → potwierdzić / wysłać → przyjąć towar (jeśli używane jest magazynowanie) → utworzyć fakturę zakupu → zapłacić;
- używać cenników jako źródła cen i warunków;
- analizować realizację i terminy.

**Kluczowe obiekty/dokumenty:** zamówienie do dostawcy, przyjęcie, faktura zakupu, cennik.

**Dla kogo:** menedżerowie zakupów, magazyn / logistyka, finanse.

**Integracje:**

- z [Magazynowaniem](#inventory) — przyjęcia / ruchy;
- z [Fakturowaniem](#invoicing) — faktury zakupu i płatności wychodzące.

**Czytaj dalej:**

- [Zamówienia do dostawców](purchase/orders.md)
- [Przyjęcia do zamówień](purchase/receipts.md)
- [Faktury zakupu do zamówień](purchase/bills.md)
- [Cenniki dostawców](purchase/pricelists.md)
- [Raporty zakupowe](purchase/reports.md)

### Produkcja {#manufacturing}

Start dokumentacji: [manufacturing/manufacturing.md](manufacturing/manufacturing.md)

**Cel.** Obszar produkcji: BOM (specyfikacje), planowanie i realizacja zleceń produkcyjnych, rezerwacje materiałów, produkcja i zużycie, braki/odpady, drukowanie i raportowanie.

**Typowe scenariusze:**

- utworzyć / zweryfikować BOM produktu → utworzyć zlecenie produkcyjne → zarezerwować materiały → rozpocząć → zarejestrować produkcję / zużycie → zakończyć;
- tworzyć zlecenia produkcyjne na podstawie zamówień klientów (jeśli włączone);
- kontrolować koszt wytworzenia i partie (jeśli używane).

**Kluczowe obiekty/dokumenty:** BOM (specyfikacja), zlecenie produkcyjne, rezerwacja materiału, produkcja i zużycie.

**Dla kogo:** dyspozytorzy produkcji, brygadziści, planiści, magazyn (materiały / wyroby gotowe).

**Integracje:** silnie powiązana z [Magazynowaniem](#inventory) (materiały / wydanie), może być powiązana ze [Sprzedażą](#sales) (popyt) i [Zakupem](#purchase) (uzupełnianie materiałów).

**Czytaj dalej:**

- [BOM (specyfikacje)](manufacturing/bom.md)
- [Zlecenia produkcyjne: lista i karta](manufacturing/orders.md)
- [Proces i statusy zlecenia produkcyjnego](manufacturing/workflow.md)
- [Produkcja i zużycie](manufacturing/production-and-consumption.md)
- [Koszt wytworzenia: jak jest liczony](manufacturing/costing.md)

### Sprzedaż {#sales}

Start dokumentacji: [sales/sales.md](sales/sales.md)

**Cel.** Obszar zarządzania sprzedażą: zamówienia klientów, proces / statusy, wydania i faktury do zamówień, cenniki / typy cen, rabaty i raportowanie.

**Typowe scenariusze:**

- utworzyć zamówienie klienta → potwierdzić → utworzyć wydanie i/lub fakturę (zależnie od procesu);
- zarządzać cenami przez cenniki i typy cen;
- wyliczać i kontrolować rabaty;
- analizować sprzedaż i realizację zamówień.

**Kluczowe obiekty/dokumenty:** zamówienie klienta, pozycja zamówienia, wydanie, faktura.

**Dla kogo:** handlowcy, kierownicy sprzedaży, magazyn (dla wydań).

**Integracje:**

- z [Magazynowaniem](#inventory) — wydania oraz rezerwacje / dostępność (jeśli włączone);
- z [Fakturowaniem](#invoicing) — faktury i kontrola płatności.

**Czytaj dalej:**

- [Zamówienia klientów](sales/orders.md)
- [Proces i statusy zamówienia](sales/workflow-and-statuses.md)
- [Wydania do zamówień](sales/shipments.md)
- [Faktury do zamówień](sales/invoices.md)
- [Cenniki i typy cen](sales/pricelists.md)
- [Rabaty](sales/discounts.md)

### Sprzedaż detaliczna {#retail}

Start dokumentacji: [retail/retail.md](retail/retail.md)

**Cel.** Sprzedaż detaliczna przez POS: zarządzanie zmianami, sprzedaż i zwroty, rabaty i karty rabatowe, przyjmowanie płatności.

**Typowe scenariusze:**

- skonfigurować POS i metody płatności → otworzyć zmianę → utworzyć sprzedaż w POS → przyjąć płatność → zamknąć zmianę;
- utworzyć zwrot (po paragonie lub w trybie „wolnym” — zależnie od konfiguracji);
- używać kart rabatowych i rabatów;
- pracować z towarami oznaczonymi (jeśli włączone).

**Kluczowe obiekty/dokumenty:** POS, zmiana, paragon, metoda płatności, karta rabatowa.

**Dla kogo:** kasjerzy, starsi kasjerzy / administratorzy sklepu, osoby odpowiedzialne za konfigurację.

**Integracje:** w zależności od ustawień może przekazywać wyniki do modułów [Sprzedaż](#sales) i/lub [Fakturowanie](#invoicing).

**Czytaj dalej:**

- [POS](retail/pos.md)
- [Zmiany](retail/sessions.md)
- [Płatności w sprzedaży detalicznej](retail/payments.md)
- [Zwroty](retail/returns.md)
- [Karty rabatowe](retail/discount-cards.md)

### Zarządzanie projektami {#project-management}

Start dokumentacji: [projectManagement/projectManagement.md](projectManagement/projectManagement.md)

**Cel.** Obszar projektów: projekty i zagadnienia, zespół i role, przepracowany czas i karty pracy (timesheets), widoki kontrolne (np. Kanban / Gantt) i raportowanie.

**Typowe scenariusze:**

- utworzyć projekt → zbudować plan zagadnień → przypisać wykonawców i terminy;
- śledzić postęp po statusach i komentarzach;
- rejestrować nakład pracy przez przepracowany czas;
- zbierać karty pracy i raporty rzeczywiste.

**Kluczowe obiekty:** projekt, zagadnienie, przypisanie (rola / udział), przepracowany czas, status / przepływ pracy.

**Dla kogo:** menedżerowie projektów, wykonawcy, liderzy zespołów.

**Integracje:** jeśli włączone jest rozliczanie wg czasu, moduł jest używany razem z [Kadrami](#human-resources).

**Czytaj dalej:**

- [Projekty](projectManagement/projects.md)
- [Zagadnienia](projectManagement/tasks.md)
- [Przepracowany czas](projectManagement/time-entries.md)
- [Karty pracy (Timesheet)](projectManagement/timesheets.md)
- [Zespół i role w projekcie](projectManagement/team-and-roles.md)

### Kadry {#human-resources}

Start dokumentacji: [humanResources/humanResources.md](humanResources/humanResources.md)

**Cel.** Moduł kadrowy: rekrutacja, ewidencja czasu pracy (wejście / wyjście), naliczanie i wypłata wynagrodzeń.

**Typowe scenariusze:**

- aplikacja kandydata → ankieta → rozmowa → decyzja (zatrudnij / odrzuć);
- ewidencja czasu pracy (rejestracja mobilna / kiosk — jeśli używane);
- utworzyć listę płac → wygenerować paski płacowe → zarejestrować wypłatę (jeśli prowadzona w systemie).

**Kluczowe obiekty/dokumenty:** aplikacja kandydata, rozmowa, ewidencja obecności, lista płac, pasek płacowy.

**Dla kogo:** rekruterzy, specjaliści HR, księgowi płac / finanse, kierownicy działów.

**Integracje:** jeśli włączona jest logika rozliczeń wg czasu, moduł może wykorzystywać wpisy czasu z [Zarządzania projektami](#project-management).

**Czytaj dalej:**

- [Rekrutacja](humanResources/recruitment.md)
- [Ewidencja czasu pracy](humanResources/attendance.md)
- [Płace: naliczanie i wypłata](humanResources/payroll.md)
- [Pasek płacowy](humanResources/payslip.md)
- [Jak wyliczany jest wynik „Do wypłaty”](humanResources/net-wage.md)

### CRM {#crm}

Start dokumentacji: [crm/crm.md](crm/crm.md)

**Cel.** Moduł do pracy z leadami (lejek): od pierwszego kontaktu po przekazanie do sprzedaży. Fokus: wygodna karta leadu, zarządzanie statusami i historia interakcji.

**Typowe scenariusze:**

- obsłużyć połączenie / e‑mail → utworzyć leada lub dołączyć komunikację do istniejącego;
- prowadzić leada po etapach (statusy) na tablicy kanban;
- zapisywać ustalenia i „następny krok”;
- tworzyć powiązane dokumenty (np. zamówienie / fakturę) — jeśli skonfigurowano.

**Kluczowe obiekty:** lead, typ leadu, status leadu, priorytet leadu, tagi leadu, komunikacje.

**Dla kogo:** handlowcy i kierownicy sprzedaży (kontrola lejka i jakości prowadzenia leadów).

**Czytaj dalej:**

- [Leady: lista i karta](crm/leads.md)
- [Tablica leadów (kanban)](crm/kanban.md)
- [Komunikacja: połączenia i e‑maile](crm/communications.md)
- [Zamówienia i faktury z leadu](crm/sales-and-documents.md)
- [Raport leadów](crm/reports.md)

### Transport {#transport}

Start dokumentacji: [transport/transport.md](transport/transport.md)

**Cel.** Ewidencja transportu (flota): pojazdy, przypisania kierowców, serwisy (prace / koszty), umowy na pojazdy oraz ustawienia danych referencyjnych.

**Typowe scenariusze:**

- utworzyć kartę pojazdu i uzupełnić dane referencyjne (model, typ paliwa itp.);
- przypisywać kierowców do pojazdów w okresach;
- rejestrować serwisy z datą, typem, przebiegiem i kosztem;
- prowadzić umowy (najem / leasing / ubezpieczenie itp.) i kontrolować terminy.

**Kluczowe obiekty:** pojazd, kierowca, serwis pojazdu, umowa na pojazd, tagi i pliki.

**Dla kogo:** specjaliści ds. floty/transportu, księgowość (kontrola kosztów), administratorzy (ustawienia danych referencyjnych).

**Czytaj dalej:**

- [Pojazdy](transport/vehicles.md)
- [Kierowcy](transport/drivers.md)
- [Serwisy pojazdów](transport/service.md)
- [Umowy na pojazdy](transport/contracts.md)
- [Konfiguracja](transport/settings.md)