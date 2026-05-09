---
title: Przeglądarka w formularzach
---

Ta strona wyjaśnia, jak użytkownicy końcowi pracują z modelem 3D z poziomu MyCompany. Konfiguracja danych uwierzytelniających opisana jest na stronie [Konfiguracja](autodesk-setup.md); proces przesyłania i konwersji znajduje się na stronie [Buckety i modele](autodesk-buckets-and-models.md).

## Wymagania wstępne

Zanim przeglądarka stanie się widoczna w jakimkolwiek formularzu:

1. Administrator połączył MyCompany z APS — zobacz: [Konfiguracja](autodesk-setup.md).
2. Model został przesłany, skonwertowany do SVF2 i osiągnął **Transform status** = `success` — zobacz: [Buckety i modele](autodesk-buckets-and-models.md).
3. Model został powiązany z [projektem](../../projectManagement/projects.md) / [zestawieniem materiałów](../../manufacturing/bom.md), które zamierzasz otworzyć.
4. **Twój profil użytkownika ma włączony znacznik Autodesk.** Otwórz **Edytuj profil**, zaznacz **Autodesk**, zapisz i przeładuj stronę.

Jeśli zakładka **Autodesk** nadal się nie pojawia po przeładowaniu strony, oznacza to, że żaden model nie jest powiązany z otwartym obiektem — powiąż go na samodzielnej stronie **Dane podstawowe → Autodesk**.

## W projekcie

1. Otwórz [projekt](../../projectManagement/projects.md) z **Projekty → Operacje → Projekty**.
2. Przejdź do zakładki **Autodesk** w obszarze szczegółów projektu.

Zakładka jest rozplanowana w dwóch wierszach:

- **Górny wiersz** — dwa selektory PANEL:
  - **Model** — wybiera spośród wszystkich *gotowych* modeli powiązanych z tym projektem. Jeśli powiązany jest tylko jeden model, jest zaznaczany automatycznie.
  - **Widok** — wybiera spośród widoków wybranego modelu.
- **Dolny wiersz** — podzielony poziomo:
  - **Drzewo elementów** po lewej — hierarchiczna lista obiektów wybranego widoku;
  - **Przeglądarka 3D** po prawej — APS Viewer Autodesk renderujący SVF2.

#### Wybieranie i izolowanie elementów

- Kliknij element w drzewie → przeglądarka podświetli go i przybliży.
- Kliknij element bezpośrednio w scenie 3D → drzewo rozwinie się do tego elementu i go zaznaczy.

#### Co jeśli mam wiele modeli w jednym projekcie?

Selektor **Model** umożliwia przełączanie się między nimi. Powiązanie jest wiele-do-jednego (wiele modeli → jeden projekt), więc projekt łączący architekturę + konstrukcję + MEP może mieć wszystkie trzy modele powiązane i przełączać je na żądanie. Samo powiązanie ustawia się na samodzielnej stronie Autodesk — zobacz: [Powiązanie z projektem](autodesk-buckets-and-models.md#linking-to-a-project).

## W towarze

1. Otwórz **Dane podstawowe → Towary** — zobacz: [Towary](../items.md), aby zapoznać się z artykułem źródłowym.
2. Wybierz towar i otwórz go.
3. Przejdź do zakładki **Autodesk**.

Jest to najbardziej użyteczne powiązanie do pracy z katalogiem / projektowaniem produktów: powiąż model z towarem raz, a pojawi się on:

- w zakładce **Autodesk** samego towaru;
- w każdym [zestawieniu materiałów](../../manufacturing/bom.md), którego towar pasuje;
- w każdym [zamówieniu produkcji](../../manufacturing/orders.md), którego towar pasuje.

Samo powiązanie ustawia się na samodzielnej stronie Autodesk — zobacz: [Powiązanie z towarem](autodesk-buckets-and-models.md#linking-to-an-item).

## W zestawieniu materiałów

1. Otwórz **Produkcja → Operacje → Zestawienia materiałów** — zobacz: [Zestawienia materiałów](../../manufacturing/bom.md), aby zapoznać się z artykułem źródłowym.
2. Wybierz [zestawienie materiałów](../../manufacturing/bom.md) i otwórz je.
3. Przejdź do zakładki **Autodesk**.

Układ jest taki sam jak w formularzu projektu: selektor **Model** u góry, obok niego selektor **Widok**, drzewo elementów po lewej, przeglądarka 3D po prawej. Selektor **Model** wyświetla modele powiązane **bezpośrednio z tym zestawieniem materiałów** (poprzez pole *Zestawienie materiałów* w modelu) **lub z towarem zestawienia** (poprzez pole *Towar* w modelu). Zobacz: [Powiązanie z zestawieniem materiałów](autodesk-buckets-and-models.md#linking-to-a-bom) oraz [Powiązanie z towarem](autodesk-buckets-and-models.md#linking-to-an-item), aby skonfigurować dowolne z tych powiązań.

#### Przykład zastosowania

Powiąż model zawierający zespół z zestawieniem materiałów (lub z towarem zestawienia), a wówczas linie komponentów w zestawieniu i elementy w modelu można powiązywać wzrokowo — przydatne podczas przeglądów inżynieryjnych oraz do sprawdzenia, czy zestawienie materiałów odpowiada faktycznym wymaganiom projektu.

## W zamówieniu produkcji

1. Otwórz **Produkcja → Operacje → Zamówienia produkcji** — zobacz: [Zamówienia produkcji](../../manufacturing/orders.md), aby zapoznać się z artykułem źródłowym.
2. Wybierz [zamówienie](../../manufacturing/orders.md) i otwórz je.
3. Przejdź do zakładki **Autodesk**.

Przeglądarka pobiera modele powiązane **z [zestawieniem materiałów](../../manufacturing/bom.md), na podstawie którego budowane jest zamówienie**, **lub z towarem zamówienia**. Model pojawia się tutaj, jeśli spełniony jest którykolwiek z poniższych warunków:

- model ma pole **Zestawienie materiałów** ustawione na zestawienie materiałów zamówienia — zobacz: [Powiązanie z zestawieniem materiałów](autodesk-buckets-and-models.md#linking-to-a-bom);
- model ma pole **Towar** ustawione na towar zamówienia — zobacz: [Powiązanie z towarem](autodesk-buckets-and-models.md#linking-to-an-item).

W praktyce powiązanie poprzez *Towar* jest najczystszą drogą dla towarów katalogowych, które są wytwarzane wielokrotnie: wystarczy powiązać raz, a każde zamówienie dla tego towaru wyświetli model.

## Co potrafi przeglądarka

Osadzona przeglądarka jest standardowym Autodesk APS Viewer (v7), więc:

- **Orbita / przesuwanie / powiększanie** myszą i kółkiem przewijania.
- **Section box** — przekrój modelu płaszczyzną tnącą.
- **Panel właściwości** — otwiera własny panel APS z pełnymi metadanymi wybranego elementu.
- **Pomiar** — odległość, kąt, pole między dwoma punktami.
- **Tryb spaceru / pierwszej osoby** dla budynków.
- **Ustawienia** — zmiana tła, ambient occlusion, oświetlenia itp.

Są to narzędzia Autodesk, a nie MyCompany — ich dostępność zależy od wersji przeglądarki, którą Autodesk aktualnie publikuje. Warstwa MyCompany dodaje:

- **Drzewo elementów** powiązane dwukierunkowo ze sceną 3D.
- Selektory **Model / Widok** filtrowane do tego, co jest istotne dla otwartego formularza.
- Zdarzenie wyboru elementu (kliknięcie elementu w przeglądarce rozwija i zaznacza odpowiadający wiersz w drzewie elementów MyCompany, dzięki czemu inne moduły zbudowane na `Autodesk.Element` mogą zareagować).

## Wskazówki dotyczące wydajności

- **Używaj SVF2, nie SVF.** Integracja konwertuje z `output.formats.type = svf2`; nie zmieniaj tego. SVF2 jest dramatycznie szybszy w przypadku dużych modeli.
- **Trzymaj otwarty jeden widok naraz.** Przełączenie selektora widoku przeładowuje scenę z APS, co przy wolnym łączu może zająć kilka sekund.
- **Duży IFC?** Dla nowej zawartości IFC używaj `Conversion method = v4` (zobacz: [Buckety i modele](autodesk-buckets-and-models.md#conversion-method)).
- **Caching.** APS buforuje pochodne SVF2 na poziomie URN — gdy model zostanie skonwertowany, ładowanie w przeglądarce jest szybkie dla każdego, niezależnie od tego, kto pierwszy go obejrzał.

## Uprawnienia i co widzą użytkownicy

To, czy użytkownik widzi zakładkę **Autodesk** w formularzu, zależy od:

1. Znacznika w jego własnym profilu (**Autodesk** zaznaczony w **Edytuj profil**).
2. Tego, czy powiązany jest istotny model.
3. Tego, czy konwersja modelu zakończyła się powodzeniem.

Zakładka **nie** zależy od tego, czy użytkownik może edytować projekt / zestawienie materiałów / zamówienie — użytkownicy tylko do odczytu widzą tę samą przeglądarkę. Nie mogą zmienić powiązanego modelu, chyba że mają prawa edycji na samodzielnej stronie Autodesk.
